import React from 'react';
import './styles.css';

const NotableSightings = ({
  findRarityCode,
  notableSightings,
  styleRarityCode,
}) => (
  <section className="NotableSightings">
    <table className="NotableSightings__table">
      <thead>
        <tr>
          <th className="NotableSightings__rarityCode-column">Rarity</th>
          <th className="NotableSightings__howMany-column">#</th>
          <th className="NotableSightings__comNAme-column">Common Name</th>
          <th className="NotableSightings__locName-column">Location</th>
          <th className="NotableSightings__obsDt-column">Observation Date</th>
        </tr>
      </thead>
      <tbody>
        {notableSightings.map(({ comName, howMany, locName, obsDt }, index) => (
          <tr key={index} style={styleRarityCode(findRarityCode(comName))}>
            <td className="NotableSightings__rarityCode-column">
              {findRarityCode(comName)}
            </td>
            <td className="NotableSightings__howMany-column">{howMany}</td>
            <td className="NotableSightings__comName-column">{comName}</td>
            <td className="NotableSightings__locName-column">{locName}</td>
            <td className="NotableSightings__obsDt-column">{obsDt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default NotableSightings;
