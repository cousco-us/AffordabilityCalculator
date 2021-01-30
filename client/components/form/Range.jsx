import React from 'react';
import PropTypes from 'prop-types';

import Money from '../../../lib/moneyHelper';

import RangeStyles from './RangeStyles';

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
    // <input
    //   id={`${id}-range`}
    //   name={name}
    //   className="calculator-slider"
    //   type="range"
    //   min="0"
    //   max={useMax}
    //   step={step}
    //   value={useValue}
    //   onChange={
    //     (e) => handleInputChange({
    //       name: e.target.name,
    //       value: e.target.value[0] === '$' ? Money.moneyStringToDecimal(e.target.value) : Money.percentStringToDecimal(e.target.value),
    //     })
    //   }
    // />
  );
};

export default Range;

Range.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
