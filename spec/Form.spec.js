import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Form from '../client/components/Form.jsx';

describe('Form component', () => {
  it('exists', () => { expect(shallow(<Form />).exists()).toBe(true) });
});