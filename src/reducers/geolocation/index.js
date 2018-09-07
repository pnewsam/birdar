import { types } from '../../constants';
import { combineReducers } from 'redux';

export const initialState = {
  position: null,
};

export const position = (state = initialState.position, { type, payload }) => {
  switch (type) {
    case types.LOG_POSITION:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ position });
