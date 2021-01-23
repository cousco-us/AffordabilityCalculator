import React from 'react';

const Range = ({ id }) => (
  <input id={`${id}-range`} type="range" className="calculator-slider" />
);

export default Range;
