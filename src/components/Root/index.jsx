import React from 'react';
import SearchFormContainer from '../SearchFormContainer';
import NotableSightingsContainer from '../NotableSightingsContainer';
import './styles.css';

const text = {
  title: 'birdar',
  subtitle: 'Find recent notable bird sightings in your county',
  credit: 'Powered by',
  link: "Cornell Lab of Ornithology's eBird",
};

const Root = () => (
  <main>
    <div className="Root__div">
      <header>
        <h1 className="Root__h1">{text.title}</h1>
        <p>{text.subtitle}</p>
        <p>
          {text.credit}&nbsp;
          <a href="https://ebird.org">{text.link}</a>.
        </p>
      </header>
      <SearchFormContainer />
    </div>
    <NotableSightingsContainer />
  </main>
);

export default Root;
