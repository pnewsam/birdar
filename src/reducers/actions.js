export const fetchRecentNearbyNotableSightings = payload => ({
  type: 'FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_REQUEST',
  payload,
});

export const logPosition = payload => {
  return {
    type: 'LOG_POSITION',
    payload,
  };
};
