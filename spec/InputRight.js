import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import InputRight from '../client/components/form/InputRight.jsx';

describe('Input component', () => {
  const wrapper = shallow(<InputRight />);
  it('exists', () => expect(wrapper.exists()).toBe(true));
});