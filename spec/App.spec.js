import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import App from '../client/components/App.jsx';
import Head from '../client/components/Head.jsx';
import Form from '../client/components/Form.jsx';
import Results from '../client/components/Results.jsx';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('exists', () => expect(wrapper.exists()).toBe(true));

  it('should render Head, Form and Results components as children', () => {
    expect(wrapper.contains(<Head />)).toBe(true);
    expect(wrapper.contains(<Form />)).toBe(true);
    expect(wrapper.contains(<Results />)).toBe(true);
  });
});