import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Form from '../client/components/Form.jsx';

describe('Testing Form component', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<Form />).contains(<h1>Form</h1>)).toBe(true);
  });
});