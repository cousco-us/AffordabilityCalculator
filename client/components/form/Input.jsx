import React, { Fragment } from 'react';
import currency from 'currency-formatter';

const Input = ({ id, value, valueType }) => {
  let renderInput;
  if (valueType === '$') {
    renderInput = <input value={currency.format(value, { code: 'USD' })} id={id} type="text" />;
  } else if (valueType === '%') {
    renderInput = <input value={`${value}%`} id={id} type="text" />;
  }
  return (
    <>
      {renderInput}
    </>
  );
};

// Input.propTypes = {
//   id: propTypes.string.isRequired,
// };

export default Input;
