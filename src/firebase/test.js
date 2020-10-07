import firebase from "firebase";
import "firebase/firestore";
const firestore = firebase.firestore();

// Get document from firebase
// Way 1
firestore
  .collection("users")
  .doc("Ro6TZ9nZvod4FcGtXEE5")
  .collection("cartItems")
  .doc("22okbwUcjKfNubQGbFu4");
// Way 2
firebase.doc("users/Ro6TZ9nZvod4FcGtXEE5/cartItems/22okbwUcjKfNubQGbFu4");

// getting a collection from database
firestore.collection('users/Ro6TZ9nZvod4FcGtXEE5/cartItems');
