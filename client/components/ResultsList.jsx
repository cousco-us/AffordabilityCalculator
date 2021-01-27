import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ResultStyles from '../global_styles/ResultStyles';

import ResultsTable from './ResultsTable';

const Button = styled.a`
  width: 100%;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;
  text-decoration: none;
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

  &:hover {
    color: rgb(0, 120, 130);
    background-color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;

const ResultsList = ({
  donutData,
}) => (
  <>
    <ResultStyles />
    <div className="results-table-container">
      <div className="table-container">
        <ResultsTable donutData={donutData} />
      </div>
      <div className="button-container">
        <Button
          href="https://www.trulia.com/mortgages/pre-qualified/"
          target="_blank"
        >
          Get Pre-Qualified
        </Button>
        <div className="or-text">
          or
        </div>
        <div className="mortgage-rates-text">
          <a href="https://www.trulia.com/mortgage-rates/Oakland,CA/?city=Berkeley&state_code=CA&cta=rates&auto=true&value=3250000&down=650000&zip=94705&loantype=purchase" target="_blank" rel="noreferrer">
            See today&apos;s mortgage rates
          </a>
        </div>
      </div>
    </div>
  </>
);

export default ResultsList;

ResultsList.propTypes = {
  donutData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
