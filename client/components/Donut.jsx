import React, { Fragment } from 'react';
import DonutStyles from '../global_styles/DonutStyles.jsx';

const Donut = () => (
  <>
    <DonutStyles />
    <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
      <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff" />
      <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3" />
      <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray="40 60" strokeDashoffset="25" />
      <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#b1c94e" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="85" />
      <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#377bbc" strokeWidth="3" strokeDasharray="30 70" strokeDashoffset="65" />
      <g className="donut-text">
        <text x="50%" y="50%" className="donut-label-amount">
          10
        </text>
        <text x="50%" y="50%" className="donut-label-unit">
          Beers
        </text>
      </g>
    </svg>
  </>
);

export default Donut;
