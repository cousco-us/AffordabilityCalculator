import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Money from '../../../lib/moneyHelper';

const InputStyles = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  // size: props.size || "1em",
}))`
  @import url(https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);
  font-family: 'Cabin', Arial, Helvetica, sans-serif;
  letter-spacing: -0.1px;
  font-size: 16px;
  line-height: 1.5;
  padding: 6px;
  border-radius: 6px;
  border: solid 0.01em rgb(205, 209, 212);
  color: rgb(59, 65, 68);
  width: ${(props) => {
    if (props.name === 'homePrice') { return 112; }
    if (props.name === 'downPayment') { return 100; }
    if (props.name === 'downPaymentPercent') { return 56; }
    return 100;
  }
}px;

`;

const Input = ({
  id, name, value, handleInputChange,
}) => {
  let renderInput;
  if (name === 'interestRate') {
    renderInput = (
      <InputStyles
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
      <InputStyles
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
    renderInput = (
      <InputStyles
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
