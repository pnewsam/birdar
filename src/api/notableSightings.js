export const fetchRecentNearbyNotableSightings = payload => {
  const { long, lat } = payload;
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://ebird.org/ws1.1/data/notable/geo/recent?lng=${long}&lat=${lat}&fmt=json&maxResults=20`,
  )
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
};
