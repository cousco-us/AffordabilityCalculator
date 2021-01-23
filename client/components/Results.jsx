import React from 'react';
import PropTypes from 'prop-types';

import ResultStyles from '../global_styles/ResultStyles';

import Donut from './Donut';
import ResultsList from './ResultsList';

const Results = ({
  totalPayment,
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
              totalPayment={totalPayment}
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
    <div>
      *Data used for estimated monthly cost is provided by Trulia,
      Zillow Group Marketplace, Inc., and other third party sources.
    </div>
  </div>
);

export default Results;

Results.propTypes = {
  totalPayment: PropTypes.number.isRequired,
  principleAndInterest: PropTypes.number.isRequired,
  propertyTaxes: PropTypes.number.isRequired,
  homeInsurance: PropTypes.number.isRequired,
  mortgageInsuranceAndOther: PropTypes.number.isRequired,
  donutData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
