import React from 'react';
import { US_STATES } from '../../constants';
import './styles.css';

const text = {
  button: 'Fetch Notable Sightings',
};

const SearchForm = ({ handleChange, handleSubmit, selectableCounties }) => (
  <section className="SearchForm">
    <form className="SearchForm__form" onSubmit={handleSubmit}>
      <div className="SearchForm__selects">
        <label htmlFor="state">State</label>
        <select name="state" onChange={handleChange}>
          {Object.entries(US_STATES).map(([abbreviation, fullName], index) => (
            <option key={index} value={abbreviation}>
              {fullName}
            </option>
          ))}
        </select>
        <label htmlFor="county">County</label>
        <select name="county">
          {selectableCounties.map(({ name, subnational2Code }, index) => (
            <option key={index} value={subnational2Code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button>{text.button}</button>
    </form>
  </section>
);

export default SearchForm;
