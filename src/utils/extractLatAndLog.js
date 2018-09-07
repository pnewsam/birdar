export const extractLatAndLong = position => {
  const {
    coords: { latitude, longitude },
  } = position;
  return { lat: latitude.toFixed(6), long: longitude.toFixed(6) };
};
