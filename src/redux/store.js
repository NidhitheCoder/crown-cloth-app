import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

 const middlewares = [thunk]; // for avoid loging in production

 if(process.env.NODE_ENV === 'development'){ // for avoid loging in production
     middlewares.push(logger);
 }

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default {store,persistor};
