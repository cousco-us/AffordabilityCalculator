import React, { Fragment } from 'react';
import DotStyles from '../global_styles/DotStyles.jsx';
import ResultStyles from '../global_styles/ResultStyles.jsx';

const ResultsList = () => (
  <>
    <ResultStyles />
    <DotStyles />
    {/* <div className="results-table-container">
      <div className="results-table">
        <div className="results-row-outer">
          <div className="results-row-inner">
            <div className="heading-col">
              <div className="table-title-dot" />
              Principal & Interest
            </div>
            <div className="value-col">
              $3,187
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <DotStyles />
    <div className="results-table">
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Principal & Interest
        </div>
        <div className="results-money-col">$3,187</div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Property Taxes
        </div>
        <div className="results-money-col">$655</div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Home Insurance
        </div>
        <div className="results-money-col">$75</div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Mortgage ins. & other
        </div>
        <div className="results-money-col">$0</div>
      </div>
    </div>
  </>
);

export default ResultsList;
