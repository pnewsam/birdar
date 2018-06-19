import Api from '../utils/api';
import { types, US_COUNTIES_BY_STATE } from '../constants';

export const initialState = {
  notableSightings: [],
  selectableCounties: US_COUNTIES_BY_STATE['AL'],
  selectedState: 'AL',
};

export const fetchNotableSightings = payload => ({
  type: types.FETCH_NOTABLE_SIGHTINGS,
  payload,
});

export const fetchNotableSightingsSuccess = payload => ({
  type: types.FETCH_NOTABLE_SIGHTINGS_SUCCESS,
  payload,
});

export const setSelectedState = payload => ({
  type: types.SET_SELECTED_STATE,
  payload,
});

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_NOTABLE_SIGHTINGS:
      Api.get(payload);
      return state;
    case types.FETCH_NOTABLE_SIGHTINGS_SUCCESS:
      return { ...state, notableSightings: payload };
    case types.SET_SELECTED_STATE:
      return {
        ...state,
        selectedState: payload,
        selectableCounties: US_COUNTIES_BY_STATE[payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
