import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ id, loanTypes, handleInputChange }) => (
  <select id={id} onChange={(e) => handleInputChange(e)}>
    {
      loanTypes.map((loan) => (
        <option
          key={loan._id}
          value={loan.type}
        >
          {loan.type}
        </option>
      ))
    }
  </select>
);

export default Dropdown;

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  loanTypes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
