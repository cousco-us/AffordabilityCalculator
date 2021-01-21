import React from 'react';
import PropTypes from 'prop-types';

import ResultStyles from '../global_styles/ResultStyles.jsx';

import Donut from './Donut.jsx';

import ResultsList from './ResultsList.jsx';

const Results = ({
  principleAndInterest,
  propertyTaxes,
  homeInsurance,
  mortgageInsuranceAndOther,
}) => (
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
        <ResultsList
          principleAndInterest={principleAndInterest}
          propertyTaxes={propertyTaxes}
          homeInsurance={homeInsurance}
          mortgageInsuranceAndOther={mortgageInsuranceAndOther}
        />
      </div>
    </div>
  </div>
);

export default Results;

Results.propTypes = {
  principleAndInterest: PropTypes.number.isRequired,
  propertyTaxes: PropTypes.number.isRequired,
  homeInsurance: PropTypes.number.isRequired,
  mortgageInsuranceAndOther: PropTypes.number.isRequired,
};
