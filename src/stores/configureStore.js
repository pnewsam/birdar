import { applyMiddleware, createStore } from 'redux';
import rootReducer, { initialState } from '../reducers/index';
import logger from 'redux-logger';

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

export default store;
