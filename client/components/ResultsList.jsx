import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import currency from 'currency-formatter';

import DotStyles from '../global_styles/DotStyles.jsx';
import ResultStyles from '../global_styles/ResultStyles.jsx';

const ResultsList = ({
  principleAndInterest,
  propertyTaxes,
  homeInsurance,
  mortgageInsuranceAndOther,
}) => (
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
        <div className="results-money-col">
          {currency.format(principleAndInterest, { code: 'USD' })}
        </div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Property Taxes
        </div>
        <div className="results-money-col">
          {currency.format(propertyTaxes, { code: 'USD' })}
        </div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Home Insurance
        </div>
        <div className="results-money-col">
          {currency.format(homeInsurance, { code: 'USD' })}
        </div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <div className="table-title-dot" />
          Mortgage ins. & other
        </div>
        <div className="results-money-col">
          {currency.format(mortgageInsuranceAndOther, { code: 'USD' })}
        </div>
      </div>
    </div>
  </>
);

export default ResultsList;

ResultsList.propTypes = {
  principleAndInterest: PropTypes.number.isRequired,
  propertyTaxes: PropTypes.number.isRequired,
  homeInsurance: PropTypes.number.isRequired,
  mortgageInsuranceAndOther: PropTypes.number.isRequired,
};
