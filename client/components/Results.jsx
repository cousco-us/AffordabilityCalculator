import React from 'react';

import ResultStyles from '../global_styles/ResultStyles.jsx';

import Donut from './Donut.jsx';

import ResultsList from './ResultsList.jsx';

const Results = () => (
  <div id="results">
    <ResultStyles />
    <h1>Results</h1>
    <div className="results-container">
      <div className="donut-outer">
        <div className="donut-inner">
          <div className="donut">
            <Donut />
          </div>
        </div>
      </div>
      <div className="results-list-container">
        <ResultsList />
      </div>
    </div>
  </div>
);

export default Results;
