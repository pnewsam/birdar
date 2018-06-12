import React from 'react';
import { US_STATES } from '../../constants';

const text = {
  button: 'Fetch Notable Sightings',
};

const SearchForm = ({ handleChange, handleSubmit, selectableCounties }) => (
  <section>
    <form onSubmit={handleSubmit}>
      <select name="state" onChange={handleChange}>
        {Object.entries(US_STATES).map(([abbreviation, fullName], index) => (
          <option key={index} value={abbreviation}>
            {fullName}
          </option>
        ))}
      </select>
      <select>
        {selectableCounties.map(({ name, subnational2Code }, index) => (
          <option key={index} value={subnational2Code}>
            {name}
          </option>
        ))}
      </select>
      <button>{text.button}</button>
    </form>
  </section>
);

export default SearchForm;
