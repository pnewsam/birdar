import React from 'react';
import NotableSighting from '../NotableSighting';
import enhance from './enhance';
import { Section, Tbody } from './styled';
import LoadingSpinner from '../LoadingSpinner';

const NotableSightings = ({ isFetching, notableSightings }) => (
  <Section>
    {isFetching && <LoadingSpinner />}
    <table>
      <Tbody>
        {notableSightings.map((data, index) => (
          <NotableSighting key={index} {...data} />
        ))}
      </Tbody>
    </table>
  </Section>
);

export default enhance(NotableSightings);
