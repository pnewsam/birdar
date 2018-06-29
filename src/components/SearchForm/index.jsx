import React from 'react';
import { US_STATES } from '../../constants';
import { Button, Div, Form, Label, Section, Select } from './styled';
import enhance from './enhance';

const text = {
  button: 'Fetch Notable Sightings',
};

export const SearchForm = ({
  handleChange,
  handleSubmit,
  selectableCounties,
}) => (
  <Section>
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label htmlFor="state">State</Label>
        <Select name="state" onChange={handleChange}>
          {Object.entries(US_STATES).map(([abbreviation, fullName], index) => (
            <option key={index} value={abbreviation}>
              {fullName}
            </option>
          ))}
        </Select>
        <Label htmlFor="county">County</Label>
        <Select name="county">
          {selectableCounties.map(({ name, subnational2Code }, index) => (
            <option key={index} value={subnational2Code}>
              {name}
            </option>
          ))}
        </Select>
      </Div>
      <Button>{text.button}</Button>
    </Form>
  </Section>
);

export default enhance(SearchForm);
