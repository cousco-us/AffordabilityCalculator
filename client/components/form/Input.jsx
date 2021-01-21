import React, { Fragment } from 'react';
import currency from 'currency-formatter';

const Input = ({ id, name, value, valueType, handleInputChange }) => {
  let renderInput;
  if (valueType === '$') {
    // currency.format(value, { code: 'USD' })
    renderInput = <input value={value || 0} id={id} type="text" onChange={(e) => handleInputChange(e)} name={name} />;
  } else if (valueType === '%') {
    renderInput = <input value={value || 0} id={id} type="text" onChange={(e) => handleInputChange(e)} name={name} />;
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
