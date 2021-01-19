import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Results from '../client/components/results.jsx';

describe('Results component', () => {
  it('renders', () => expect(shallow(<Results />).exists()).toBe(true) );
});