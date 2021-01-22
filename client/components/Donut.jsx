import React, { Fragment } from 'react';
// import currency from 'currency-formatter';

// import DonutStyles from '../global_styles/DonutStyles.jsx';

const Donut = ({ donutData }) => (
  <>
    {/* <DonutStyles /> */}
    {/* {console.log(JSON.stringify(donutData))} */}
    {/* {console.log(donutData)} */}
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
    {/* <svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="12" fill="#fff" role="presentation" />
      <circle // blue = principal & interest
        cx="18"
        cy="18"
        r="15.915494309189533"
        fill="transparent"
        strokeWidth="3.8"
        stroke="rgb(5, 34, 134)"

        strokeDasharray="78.29603666756539 21.70396333243461"
        strokeDashoffset="25"
      />
      <circle // teal = property taxes
        cx="18"
        cy="18"
        r="15.915494309189533"
        fill="transparent"
        strokeWidth="3.8"
        stroke="rgb(0, 173, 187)"

        strokeDasharray="9.85890177046823 90.14109822953176"
        strokeDashoffset="46.70396333243461"
      />
      <circle // yellow = home insurance
        cx="18"
        cy="18"
        r="15.915494309189533"
        fill="transparent"
        strokeWidth="3.8"
        stroke="rgb(194, 213, 0)"

        strokeDasharray="0.33701806416823943 99.66298193583177"
        strokeDashoffset="36.84506156196639"
      />
      <circle // purple = mortgage insurance & other
        cx="18"
        cy="18"
        r="15.915494309189533"
        fill="transparent"
        strokeWidth="3.8"
        stroke="rgb(206, 182, 255)"

        // strokeDasharray="11.508043497798148 88.49195650220184"
        strokeDasharray="11.508043497798148 88.49195650220184"
        strokeDashoffset="36.508043497798155"
      />
    </svg> */}

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
