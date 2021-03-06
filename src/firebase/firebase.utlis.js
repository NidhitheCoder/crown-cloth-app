import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// The keyword 'firebase'(The first imported one) automatically configured with above two imports(firestore and auth)

// update user collection in firebase using google signin
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log({collection:collectionSnapshot.docs.map(doc=>doc.data())});
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

const config = {
  apiKey: "AIzaSyAnY4uFw5i8E0piJ5LvH1pZJarO48GPTSk",
  authDomain: "crown-db-9717d.firebaseapp.com",
  databaseURL: "https://crown-db-9717d.firebaseio.com",
  projectId: "crown-db-9717d",
  storageBucket: "crown-db-9717d.appspot.com",
  messagingSenderId: "865331580792",
  appId: "1:865331580792:web:02a079f9281ead6e74428d",
  measurementId: "G-JQG7XHCBX2"
};

firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // we can get the document as empty string with unique id

    batch.set(newDocRef, obj); // set the object
  });

  return await batch.commit();
  // batch.commit() fire of our batch request. batch.commit() return a promise.
  // when commits exeeds it will comback and resolve a void value meaning a null value
};

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

  // transformedCollection function uset for convert collection to an object with key as title of the collection.
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
