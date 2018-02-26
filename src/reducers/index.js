import { types } from '../constants';

export const initialState = {
  notableSightings: [],
  position: null,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_SUCCESS:
      return {
        ...state,
        notableSightings: payload.sightings,
      };
    case types.LOG_POSITION:
      return {
        ...state,
        position: payload,
      };
    default:
      return state;
  }
};

export * from './actions';
export default rootReducer;
