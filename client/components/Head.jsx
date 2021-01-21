import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import currency from 'currency-formatter';

import HeadStyles from '../global_styles/HeadStyles.jsx';

const Head = ({ totalPayment }) => (
  <>
    <HeadStyles />
    <div className="heading-container">
      <h3>Affordability</h3>
      <h4>Calculate your monthly mortgage payments</h4>
      <p>
        Your est. payment:
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(totalPayment)}
        /month*
      </p>
    </div>
  </>
);

export default Head;

Head.propTypes = {
  totalPayment: PropTypes.number.isRequired,
};
