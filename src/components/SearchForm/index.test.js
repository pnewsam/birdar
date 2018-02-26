import React from 'react';
import { SearchForm } from './index';
import { shallow } from 'enzyme';
import { US_STATES } from '../../constants';

describe('SearchForm', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      selectableCounties: ['a', 'b'],
    };

    wrapper = shallow(<SearchForm {...props} />);
  });

  it('renders a form', () => {
    const element = wrapper.find('form');
    expect(element).toExist();
    expect(element).toHaveProp('onSubmit');
    expect(element.prop('onSubmit')).toEqual(props.handleSubmit);
  });

  it('renders a select', () => {
    const element = wrapper.find('select').find({ name: 'state' });
    expect(element).toExist();
    expect(element).toHaveProp('onChange');
    expect(element.prop('onChange')).toEqual(props.handleChange);
  });

  it('it renders an option for each US_COUNTY', () => {
    Object.entries(US_STATES).forEach(([abbreviation, _]) => {
      const element = wrapper.find('option').find({ value: abbreviation });
      expect(element).toExist();
    });
  });
});
