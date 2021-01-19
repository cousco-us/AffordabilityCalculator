import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Input from '../client/components/form/Input.jsx';

describe('Input component', () => {
  const wrapper = shallow(<Input />);
  it('exists', () => expect(wrapper.exists()).toBe(true));
});