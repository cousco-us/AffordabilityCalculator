import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Money from '../../../lib/moneyHelper';

const RangeStyles = styled.input`
  width: 100%;
  height: 2px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  ::-webkit-slider-runnable-track {
    height: 2px;
    // background: rgb(0, 120, 130)
    background: linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) ${(props) => props.fillPercentage}%, rgb(205, 209, 212) ${(props) => props.fillPercentage}%, rgb(205, 209, 212) 100%);
    }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: solid 4px white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(48, 118, 128);
    filter: drop-shadow(0.02em 0.08em 0.08em black);
    margin-top: -10px;
  }
`;

const Range = ({
  id, name, value, handleInputChange,
}) => {
  let useValue;
  let useMax;
  let step;
  if (name === 'homePrice') {
    useValue = value || 0;
    useMax = Math.max(((115 / 100) * useValue), 1500000);
    step = 10;
  }
  if (name === 'interestRate') {
    useValue = value || 0;
    useMax = 6.5;
    step = 0.1;
  }
  if (name === 'downPaymentPercent') {
    useValue = value || 0;
    useMax = 30;
    step = 1;
  }

  return (
    <RangeStyles
      id={`${id}-range`}
      name={name}
      className="calculator-slider"
      type="range"
      min="0"
      max={useMax}
      step={step}
      value={useValue}
      fillPercentage={(useValue / useMax) * 100}
      onChange={
        (e) => handleInputChange({
          name: e.target.name,
          value: e.target.value[0] === '$' ? Money.moneyStringToDecimal(e.target.value) : Money.percentStringToDecimal(e.target.value),
        })
      }
    />
  );
};

export default Range;

Range.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
