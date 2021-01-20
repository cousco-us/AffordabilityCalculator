import React from 'react';

import Donut from './Donut.jsx';
import ResultsList from './ResultsList.jsx';

const Results = () => (
  <div id="results">
    <h1>Results</h1>
    <div className="container">
      <div className="donut-container">
        <Donut />
      </div>
      <div className="results-list-container">
        <ResultsList />
      </div>
    </div>
  </div>
);

export default Results;
