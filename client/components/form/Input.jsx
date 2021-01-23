import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Money from '../../../lib/moneyHelper';

const Input = ({
  id, name, value, handleInputChange,
}) => {
  let renderInput;
  if (name === 'interestRate') {
    renderInput = (
      <input
        id={id}
        name={name}
        type="text"
        value={Money.formatInterestRatePercent((value || 0))}
        onChange={(e) => handleInputChange(e)}
      />
    );
  }
  if (name === 'downPaymentPercent') {
    renderInput = (
      <input
        id={id}
        name={name}
        type="text"
        value={Money.formatDownPaymentPercent((value || 0))}
        onChange={(e) => handleInputChange(e)}
      />
    );
  }
  if (name === 'downPayment' || name === 'homePrice') {
    renderInput = (
      <input
        id={id}
        name={name}
        type="text"
        value={Money.formatMoney((value || 0))}
        onChange={(e) => handleInputChange(e)}
      />
    );
  }
  return (
    <>
      {renderInput}
    </>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
