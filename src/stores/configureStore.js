import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const store = createStore(rootReducer);

export default store;
