import Api from "../utils/api";
import types from "../constants/actionTypes";

const initialState = {
  notableSightings: [],
  selectedState: "AL"
};

export const requestNotableSightings = {
  type: types.REQUEST_NOTABLE_SIGHTINGS
};

export const receiveNotableSightings = payload => ({
  type: types.RECEIVE_NOTABLE_SIGHTINGS,
  payload
});

export const setSelectedState = payload => ({
  type: types.SET_SELECTED_STATE,
  payload
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_NOTABLE_SIGHTINGS:
      Api.get();
      return state;
    case types.RECEIVE_NOTABLE_SIGHTINGS:
      return { ...state, notableSightings: payload };
    case types.SET_SELECTED_STATE:
      return { ...state, selectedState: payload };
    default:
      return state;
  }
};

export default reducer;
