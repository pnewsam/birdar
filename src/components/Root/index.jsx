import React from 'react';
import SearchFormContainer from '../SearchFormContainer';
import NotableSightingsContainer from '../NotableSightingsContainer';
import './styles.css';

const Root = () => (
  <main>
    <header>
      <h1>BIRDAR</h1>
    </header>
    <SearchFormContainer />
    <NotableSightingsContainer />
  </main>
);

export default Root;
