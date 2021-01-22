import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
// import DonutStyles from '../global_styles/DonutStyles.jsx';

const Donut = ({ donutData }) => (
  <>
    {/* <DonutStyles /> */}
    <svg viewBox="0 0 36 36">
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
    </svg>

    {/* <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
      <circle
        className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff" />
      <circle
        className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3" />
      <circle
        className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray="40 60" strokeDashoffset="25" />
      <circle
        className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#b1c94e" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="85" />
      <circle
        className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#377bbc" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="65" />
      <g className="donut-text">
        <text x="50%" y="50%" className="donut-label-amount">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(totalPayment)}
        </text>
        <text x="50%" y="50%" className="donut-label-unit">
          /month
        </text>
      </g>
    </svg> */}
  </>
);

export default Donut;

Donut.propTypes = {
  donutData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
