import React from 'react';

import PropTypes from 'prop-types';
import DonutStyles from '../global_styles/DonutStyles';

const Donut = ({ totalPayment, donutData }) => (
  <DonutStyles>
    <svg className="donutSvg" viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="12" fill="#fff" role="presentation" className="donut-slice" />
      {
        donutData.map(({
          title, cx, cy, r, fill, strokeWidth, stroke, strokeDasharray, strokeDashoffset,
        }) => (
          <circle
            key={title.split(' ').join('-')}
            cx={cx}
            cy={cy}
            r={r}
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
          />
        ))
      }
      <g className="donut-text">
        <text x="50%" y="50%" className="donut-label-amount">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(totalPayment)}
        </text>
        <text x="50%" y="50%" className="donut-label-unit">
          /month
        </text>
      </g>
    </svg>
  </DonutStyles>
);

export default Donut;

Donut.propTypes = {
  totalPayment: PropTypes.number.isRequired,
  donutData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
