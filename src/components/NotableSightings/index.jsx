import React from 'react';
import './styles.css';

const NotableSightings = ({ findRarityCode, notableSightings }) => (
  <section className="NotableSightings">
    <table className="NotableSightings__table">
      <thead>
        <tr>
          <th>Rarity</th>
          <th>#</th>
          <th>Common Name</th>
          <th>Location</th>
          <th>Observation Date</th>
        </tr>
      </thead>
      <tbody>
        {notableSightings.map(({ comName, howMany, locName, obsDt }, index) => (
          <tr key={index}>
            <td>{findRarityCode(comName)}</td>
            <td>{howMany}</td>
            <td>{comName}</td>
            <td>{locName}</td>
            <td>{obsDt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default NotableSightings;
