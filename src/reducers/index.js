import { combineReducers } from 'redux';
import geolocation, {
  initialState as geolocationInitialState,
} from './geolocation';
import notableSightings, {
  initialState as notableSightingsInitialState,
} from './notableSightings';
import isFetching, {
  initialState as isFetchingInitialState,
} from './isFetching';

export const initialState = {
  geolocation: geolocationInitialState,
  isFetching: isFetchingInitialState,
  notableSightings: notableSightingsInitialState,
};

const rootReducer = combineReducers({
  geolocation,
  isFetching,
  notableSightings,
});

export default rootReducer;

export * from './actions';
