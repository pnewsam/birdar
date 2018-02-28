import store from "../redux";
import { receiveNotableSightings } from "../redux";

const BASE_URL =
  "http://ebird.org/ws1.1/data/notable/region/recent?rtype=subnational1&fmt=json&maxResults=20&r=US-MA";

export default class Api {
  static async get() {
    await fetch(BASE_URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        store.dispatch(receiveNotableSightings(data));
      });
  }
}
