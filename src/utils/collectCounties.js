import { US_STATES } from '../constants/usStates';
import forIn from 'lodash/forIn';
import pick from 'lodash/pick';

const collectCounties = () => {
  const BASE_URL =
    'http://ebird.org/ws1.1/ref/location/list?rtype=subnational2&fmt=json&subnational1Code=US-';
  const allCounties = {};
  forIn(US_STATES, (name, abbreviation) => {
    const url = BASE_URL + abbreviation;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        allCounties[abbreviation] = data.map(countyObject =>
          pick(countyObject, ['subnational1Code', 'name']),
        );
        console.log(allCounties);
      });
  });
};

export const collectCountiesWithDelay = () => {
  setTimeout(collectCounties, 3000);
};
