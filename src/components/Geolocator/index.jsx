import React from 'react';
import enhance from './enhance';

const Geolocator = ({ handleClick }) => (
  <button onClick={handleClick}>Fetch Stuff</button>
);

export default enhance(Geolocator);
