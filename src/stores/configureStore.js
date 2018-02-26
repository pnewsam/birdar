import { applyMiddleware, createStore } from 'redux';
import rootReducer, { initialState } from '../reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
