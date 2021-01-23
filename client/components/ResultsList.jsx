import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import currency from 'currency-formatter';
import styled from 'styled-components';

import ResultStyles from '../global_styles/ResultStyles';
import FontStyles from '../global_styles/FontStyles';

const Dot = styled.div`
  background-color: ${
  (props) => {
    if (props.blue) {
      return 'rgb(5, 34, 134)';
    }
    if (props.teal) {
      return 'rgb(0, 173, 187)';
    }
    if (props.yellow) {
      return 'rgb(194, 213, 0)';
    }
    if (props.purple) {
      return 'rgb(206, 182, 255)';
    }
    return 'rgb(5, 34, 134)';
  }
};
  letter-spacing: -0.1px;
  line-height: 24px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

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

    <div className="results-table-container">
      <div className="table-container">
        table
      </div>
      <div className="button-container">
        <Button>Get Pre-Qualified</Button>
        <div className="or-text">
          or
        </div>
        <div className="mortgage-rates-text">
          <a href="#">See today's mortgage rates</a>
        </div>
      </div>
    </div>

    {/* <div className="results-table">
      <div className="results-row">
        <div className="results-text-col">
          <Dot blue />
          Principal & Interest
        </div>
        <div className="results-money-col">
          {currency.format(principleAndInterest, { code: 'USD' })}
        </div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <Dot teal />
          Property Taxes
        </div>
        <div className="results-money-col">
          {currency.format(propertyTaxes, { code: 'USD' })}
        </div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <Dot yellow />
          Home Insurance
        </div>
        <div className="results-money-col">
          {currency.format(homeInsurance, { code: 'USD' })}
        </div>
      </div>
      <div className="results-row">
        <div className="results-text-col">
          <Dot purple />
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
    </div> */}
  </>
);

export default ResultsList;

ResultsList.propTypes = {
  principleAndInterest: PropTypes.number.isRequired,
  propertyTaxes: PropTypes.number.isRequired,
  homeInsurance: PropTypes.number.isRequired,
  mortgageInsuranceAndOther: PropTypes.number.isRequired,
};
