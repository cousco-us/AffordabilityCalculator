import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Dropdown from '../client/components/form/Dropdown.jsx';

describe('Dropdown component', () => {
  const wrapper = shallow(<Dropdown />);
  it('exists', () => expect(wrapper.exists()).toBe(true));
});