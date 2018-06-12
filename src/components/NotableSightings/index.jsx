import React from 'react';
import './styles.css';

const NotableSightings = ({ notableSightings }) => (
  <section>
    {notableSightings.map(({ comName, locName, obsDt }, index) => (
      <div key={index}>
        <p>{comName}</p>
        <p>{locName}</p>
        <p>{obsDt}</p>
      </div>
    ))}
  </section>
);

export default NotableSightings;
