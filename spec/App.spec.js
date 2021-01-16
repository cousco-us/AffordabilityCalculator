import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import App from '../client/components/App.jsx';

const list = ['a', 'b', 'c'];

describe('Testing App component', () => {
  // test('app component renders', () => {
  //   const component = renderer.create(<App />);
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<h1>Hello React!</h1>)).toBe(true);
  });
});