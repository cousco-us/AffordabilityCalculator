import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Money from '../../lib/moneyHelper';

const Dot = styled.div`
  background-color: ${(props) => props.rgb};
  letter-spacing: -0.1px;
  line-height: 24px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

const ResultsTable = ({ donutData }) => (
  <div className="table">
    {
      donutData.map(({
        propName, stroke, title, moneyValue,
      }) => (
        <div className="table-row" key={propName}>
          <div className="table-col category">
            <Dot rgb={stroke} />
            {title}
          </div>
          <div className="table-col money">
            { Money.formatMoney(moneyValue) }
          </div>
        </div>
      ))
    }
  </div>
);

export default ResultsTable;

ResultsTable.propTypes = {
  donutData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
