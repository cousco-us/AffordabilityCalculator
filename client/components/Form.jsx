import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FormStyles from '../global_styles/FormStyles';
import FontStyles from '../global_styles/FontStyles';

import Input from './form/Input';
import Dropdown from './form/Dropdown';
// import Range from './form/Range';

const Form = ({
  homePrice, downPayment, downPaymentPercent, interestRate, loans, handleInputChange,
}) => (
  <>
    <FormStyles />
    <FontStyles />
    <div className="form-container">
      <div className="form-cell">
        <div className="form-control title-and-input">
          <div className="form-title">
            Home Price
          </div>
          <div className="form-input">
            <Input
              id="input-control-home-price-input"
              value={Number(homePrice)}
              name="homePrice"
              valueType="$"
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-control slider">
          slider here
        </div>
      </div>
      <div className="form-cell">
        <div className="form-control title-and-input">
          <div className="form-title">
            Down Payment
          </div>
          <div className="form-input">
            <Input
              id="input-control-down-payment-dollar-input"
              value={Number(downPayment)}
              name="downPayment"
              valueType="$"
              handleInputChange={handleInputChange}
            />
            <Input
              id="input-control-down-payment-percent-input"
              value={Number(downPaymentPercent)}
              name="downPaymentPercent"
              valueType="%"
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-control slider">
          slider here
        </div>
      </div>
      <div className="form-cell">
        <div className="form-control title-and-input">
          <div className="form-title">
            Interest Rate
          </div>
          <div className="form-input">
            <Input
              id="input-control-interest-rate-input"
              value={Number(interestRate)}
              name="interestRate"
              valueType="%"
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-control slider">
          slider here
        </div>
      </div>
      <div className="form-cell">
        <div className="form-control title-and-input">
          <div className="form-title">
            Loan Type
          </div>
          <div className="form-input" />
        </div>
        <div className="form-control dropdown">
          <Dropdown
            id="input-control-interest-rate-dropdown-select"
            name="selectedLoanType"
            loans={loans}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
    {/* <div className="form-container">
      <div className="flex-container-row">
        <div className="grid-container">
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Home Price</label>
                <Input
                  value={Number(homePrice)}
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
                  value={Number(downPayment)}
                  name="downPayment"
                  valueType="$"
                  handleInputChange={handleInputChange}
                />
                <Input
                  id="input-control-down-payment-percent-input"
                  value={Number(downPaymentPercent)}
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
                  value={Number(interestRate)}
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
                  loans={loans}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </>
);

export default Form;

Form.propTypes = {
  homePrice: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  downPaymentPercent: PropTypes.number.isRequired,
  interestRate: PropTypes.number.isRequired,
  loans: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
