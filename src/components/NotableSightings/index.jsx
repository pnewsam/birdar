import React from 'react';
import NotableSighting from '../NotableSighting';
import enhance from './enhance';
import { Section, Table, Th, Tr } from './styled';

const text = {
  comNAme: 'Common Name',
  howMany: '#',
  locName: 'Location',
  obsDt: 'Observation Date',
  rarity: 'ABA Rarity',
};

const NotableSightings = ({ notableSightings }) => (
  <Section>
    <Table>
      <thead>
        <Tr>
          <Th className="rarity">{text.rarity}</Th>
          <Th className="howMany">{text.howMany}</Th>
          <Th className="comName">{text.comName}</Th>
          <Th className="locName">{text.locName}</Th>
          <Th className="obsDt">{text.obsDt}</Th>
        </Tr>
      </thead>
      <tbody>
        {notableSightings.map((data, index) => (
          <NotableSighting key={index} {...data} />
        ))}
      </tbody>
    </Table>
  </Section>
);

export default enhance(NotableSightings);
