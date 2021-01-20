import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Results from '../client/components/Results.jsx';
import Donut from '../client/components/Donut.jsx';
import ResultsList from '../client/components/ResultsList.jsx';

const resultsComponent = shallow(<Results />);
const donutComponent = shallow(<Donut />);
const resultsListComponent = shallow(<ResultsList />);

describe('Results component', () => {
  it('renders', () => expect(resultsComponent.exists()).toBe(true));
});

describe('Donut component', () => {
  it('renders', () => expect(donutComponent.exists()).toBe(true));
});

describe('ResultsList component', () => {
  it('renders', () => expect(resultsListComponent.exists()).toBe(true));
});