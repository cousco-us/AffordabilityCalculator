import React from 'react';
import PropTypes from 'prop-types';

const Range = ({
  id, name, value, handleInputChange,
}) => {
  const useValue = value || 0;
  return (
    <input
      id={`${id}-range`}
      name={name}
      className="calculator-slider"
      type="range"
      min="0"
      max={useValue + ((10 / 100) * useValue)}
      step="10"
      value={useValue}
      onChange={handleInputChange}
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
