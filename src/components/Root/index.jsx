import React from 'react';
import NotableSightings from '../NotableSightings';
import Geolocator from '../Geolocator';
import { Footer, Header, H1, Main } from './styled';

const text = {
  title: 'birdar',
  credit: 'Powered by',
  link: 'eBird',
};

export const Root = () => (
  <Main>
    <Header>
      <H1>{text.title}</H1>
    </Header>
    <NotableSightings />
    <Geolocator />
    <Footer>
      <p>
        {text.credit}
        &nbsp;
        <a href="https://ebird.org">{text.link}</a>.
      </p>
    </Footer>
  </Main>
);

export default Root;
