import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import currency from 'currency-formatter';
import styled from 'styled-components';

import DotStyles from '../global_styles/DotStyles';
import ResultStyles from '../global_styles/ResultStyles';
import FontStyles from '../global_styles/FontStyles';

const Button = styled.button`

  width: 100%;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;

  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 120, 130);
  border-color: transparent;
`;

const ResultsList = ({
  principleAndInterest,
  propertyTaxes,
  homeInsurance,
  mortgageInsuranceAndOther,
}) => (
  <>
    <ResultStyles />
    <DotStyles />
    <FontStyles />
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
    <div className="under-table">
      <Button>Get Pre-Qualified</Button>
      <div className="or-text">
        or
      </div>
      <div className="mortgage-rates-text">
        <a href="#">See today's mortgage rates</a>
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
