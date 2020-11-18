import {takeEvery} from 'redux-saga/effects'

import shopActiontypes from './shop.types';

export function* fetchCollectionsAsync(){
    yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
    yield takeEvery(shopActiontypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}