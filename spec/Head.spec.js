import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Head from '../client/components/Head.jsx';

describe('Testing Head component', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Head />).contains(<h1>Affordability</h1>)).toBe(true);
  });
});