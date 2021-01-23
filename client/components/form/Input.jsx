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
        onChange={
          (e) => handleInputChange({
            name: e.target.name,
            value: Money.percentStringToDecimal(e.target.value),
          })
        }
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
        onChange={
          (e) => handleInputChange({
            name: e.target.name,
            value: Money.percentStringToDecimal(e.target.value),
          })
        }
      />
    );
  }
  if (name === 'downPayment' || name === 'homePrice') {
    // {console.log('jooo')}
    renderInput = (
      <input
        id={id}
        name={name}
        type="text"
        value={Money.formatMoney((value || 0))}
        onChange={
          (e) => handleInputChange({
            name: e.target.name,
            value: Money.moneyStringToDecimal(e.target.value),
          })
        }
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
