import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Head = ({ totalPayment }) => (
  <>
    <div className="heading-container">
      <h1>Affordability</h1>
      <h2>Calculate your monthly mortgage payments</h2>
      <p className="header-paragraph">
        Your est. payment:
        {` ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(totalPayment)}`}
        /month*
      </p>
    </div>
  </>
);

export default Head;

Head.propTypes = {
  totalPayment: PropTypes.number.isRequired,
};
