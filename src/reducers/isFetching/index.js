import { types } from '../../constants';
import { combineReducers } from 'redux';

export const initialState = {
  isFetching: null,
};

export const isFetching = (
  state = initialState.isFetching,
  { type, payload },
) => {
  switch (type) {
    case types.FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_REQUEST:
      return true;
    case types.FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_FAILURE:
    case types.FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ isFetching });
