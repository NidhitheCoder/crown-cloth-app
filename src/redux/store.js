import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {fetchCollectionsStart} from './shop/shop.sagas';

const SagaMiddleware =  createSagaMiddleware();

 const middlewares = [SagaMiddleware];

 if(process.env.NODE_ENV === 'development'){ // for avoid loging in production
     middlewares.push(logger);
 }

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

SagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store)

export default {store,persistor};
