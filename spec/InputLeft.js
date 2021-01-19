import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import InputLeft from '../client/components/form/InputLeft.jsx';

describe('Input component', () => {
  const wrapper = shallow(<InputLeft />);
  it('exists', () => expect(wrapper.exists()).toBe(true));
});