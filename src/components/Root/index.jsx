import React from 'react';
import SearchFormContainer from '../SearchFormContainer';
import NotableSightingsContainer from '../NotableSightingsContainer';
import './styles.css';

const Root = () => (
  <main>
    <div className="Root__div">
      <header>
        <h1 className="Root__h1">birdar</h1>
      </header>
      <SearchFormContainer />
    </div>
    <NotableSightingsContainer />
  </main>
);

export default Root;
