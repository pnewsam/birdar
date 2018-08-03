export const extractLatAndLong = position => {
  const {
    coords: { latitude, longitude },
  } = position;
  return { lat: latitude.toFixed(3), long: longitude.toFixed(3) };
};
