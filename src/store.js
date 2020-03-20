import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import mySaga from './sagas';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount it on the store

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

//then run the saga
sagaMiddleware.run(mySaga);
