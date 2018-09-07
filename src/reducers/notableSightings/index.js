import { types } from '../../constants';
import { combineReducers } from 'redux';

export const initialState = { entities: [] };

export const entities = (state = initialState.entities, { type, payload }) => {
  switch (type) {
    case types.FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_SUCCESS:
      return payload.sightings;
    default:
      return state;
  }
};

export default combineReducers({ entities });
