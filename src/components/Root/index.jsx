import React from 'react';
import SearchForm from '../SearchForm';
import NotableSightings from '../NotableSightings';
import { Div, H1, Main } from './styled';

const text = {
  title: 'birdar',
  subtitle: 'Find recent notable bird sightings in your county',
  credit: 'Powered by',
  link: "Cornell Lab of Ornithology's eBird",
};

export const Root = () => (
  <Main>
    <Div>
      <header>
        <H1>{text.title}</H1>
        <p>{text.subtitle}</p>
        <p>
          {text.credit}&nbsp;
          <a href="https://ebird.org">{text.link}</a>.
        </p>
      </header>
      <SearchForm />
    </Div>
    <NotableSightings />
  </Main>
);

export default Root;
