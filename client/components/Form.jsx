import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FormStyles from '../global_styles/FormStyles.jsx';

import Input from './form/Input.jsx';
import Dropdown from './form/Dropdown.jsx';
// import Range from './form/Range.jsx';

const Form = ({
  homePrice, downPayment, downPaymentPercent, interestRate, loanTypes, handleInputChange,
}) => (
  <>
    <FormStyles />
    <div className="form-container">
      <div className="flex-container-row">
        <div className="grid-container">
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Home Price</label>
                <Input
                  value={homePrice}
                  name="homePrice"
                  valueType="$"
                  id="input-control-home-price-input"
                  handleInputChange={handleInputChange}
                />
              </div>
              <div className="">
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Down Payment</label>
                <Input
                  id="input-control-down-payment-dollar-input"
                  value={downPayment}
                  name="downPayment"
                  valueType="$"
                  handleInputChange={handleInputChange}
                />
                <Input
                  id="input-control-down-payment-percent-input"
                  value={downPaymentPercent}
                  name="downPaymentPercent"
                  valueType="%"
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Interest Rate</label>
                <Input
                  id="input-control-interest-rate-input"
                  value={interestRate}
                  name="interestRate"
                  valueType="%"
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Loan Type</label>
                <Dropdown
                  id=""
                  name="selectedLoanType"
                  loanTypes={loanTypes}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Form;

Form.propTypes = {
  homePrice: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  downPaymentPercent: PropTypes.number.isRequired,
  interestRate: PropTypes.number.isRequired,
  loanTypes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
