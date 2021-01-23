import React from 'react';
import PropTypes from 'prop-types';

const Range = ({ id }) => (
  <input id={`${id}-range`} type="range" className="calculator-slider" />
);

export default Range;

Range.propTypes = {
  id: PropTypes.string.isRequired,
};
