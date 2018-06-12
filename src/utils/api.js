import store from '../stores/configureStore';
import { fetchNotableSightingsSuccess } from '../reducers';

const BASE_URL =
  'http://ebird.org/ws1.1/data/notable/region/recent?rtype=subnational1&fmt=json&maxResults=20&r=US-';

export default class Api {
  static async get(state) {
    const action = BASE_URL + state;
    await fetch(action)
      .then(response => {
        return response.json();
      })
      .then(data => {
        store.dispatch(fetchNotableSightingsSuccess(data));
      });
  }
}
