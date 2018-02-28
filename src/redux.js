import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Api from "./utils/api";

// Actions

const REQUEST_NOTABLE_SIGHTINGS = "REQUEST_NOTABLE_SIGHTINGS";
const RECEIVE_NOTABLE_SIGHTINGS = "RECEIVE_NOTABLE_SIGHTINGS";

export const requestNotableSightings = {
  type: REQUEST_NOTABLE_SIGHTINGS
};

export const receiveNotableSightings = payload => ({
  type: RECEIVE_NOTABLE_SIGHTINGS,
  payload
});

// Reducer

const initialState = {
  notableSightings: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_NOTABLE_SIGHTINGS:
      Api.get();
      return state;
    case RECEIVE_NOTABLE_SIGHTINGS:
      return { ...state, notableSightings: payload };
    default:
      return state;
  }
};

// Store

const store = createStore(reducer, applyMiddleware(logger));

export default store;
