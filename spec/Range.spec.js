import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Range from '../client/components/form/Range.jsx';

describe('Input component', () => {
  const wrapper = shallow(<Range />);
  it('exists', () => expect(wrapper.exists()).toBe(true));
});