import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from './index';
import { US_COUNTIES_BY_STATE } from '../../constants/usCountiesByState';

describe('SearchForm', () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      selectableCounties: US_COUNTIES_BY_STATE['AL'],
    };
    wrapper = shallow(<SearchForm {...props} />);
  });

  it('renders a form', () => {
    const element = wrapper.find('form');
    expect(element).toExist();
  });
});
