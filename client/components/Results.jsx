import React from 'react';
import PropTypes from 'prop-types';

import ResultStyles from '../global_styles/ResultStyles';

import Donut from './Donut';
import ResultsList from './ResultsList';

const Results = ({
  principleAndInterest,
  propertyTaxes,
  homeInsurance,
  mortgageInsuranceAndOther,
  donutData,
}) => (
  <div id="results">
    <ResultStyles />
    <div className="results-container">
      <div className="donut-outer">
        <div className="donut-inner">
          <div className="donut">
            <Donut
              donutData={donutData}
            />
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
  donutData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
