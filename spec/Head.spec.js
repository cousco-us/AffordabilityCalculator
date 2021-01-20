import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Head from '../client/components/Head.jsx';

describe('Head component', () => {
  it('exists', () => { expect(shallow(<Head />).exists()).toBe(true) });
});