import { takeEvery, call, put } from "redux-saga/effects";

import shopActiontypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utlis";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.action";

export function* fetchCollectionsAsync() {

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  //   collectionRef
  //     .get()
  //     .then(snapshot => {
  //       const collectionsMap = convertCollectionSnapshotToMap(snapshot);
  //       dispatchEvent(fetchCollectionsSuccess(collectionsMap));
  //     })
  //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActiontypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
