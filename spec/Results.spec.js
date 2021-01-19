import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Results from '../client/components/results.jsx';

describe('Testing Results component', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Results />).contains(<h1>Results</h1>)).toBe(true);
  });
});