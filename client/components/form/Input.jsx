import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id, name, value, valueType, handleInputChange,
}) => {
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

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  valueType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
