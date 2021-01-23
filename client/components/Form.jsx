import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import Money from '../../lib/moneyHelper';

import FontStyles from '../global_styles/FontStyles';
import FormStyles from '../global_styles/FormStyles';

import Input from './form/Input';
import Dropdown from './form/Dropdown';
import Range from './form/Range';

const Form = ({
  homePrice, downPayment, downPaymentPercent, interestRate, loans, handleInputChange,
}) => (
  <>
    <FontStyles />
    <FormStyles />
    <div className="form-container">
      <div className="form-cell">
        <div className="form-control title-and-input">
          <div className="form-title">
            Home Price
          </div>
          <div className="form-input">
            <Input
              id="input-control-home-price-input"
              value={parseFloat(homePrice)}
              // value={Money.formatMoney(homePrice)}
              name="homePrice"
              valueType="$"
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-control slider">
          <Range
            id="home-price"
            name="homePrice"
            value={homePrice}
            handleInputChange={handleInputChange}
          />
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
          <Range
            id="down-payment-percent"
            name="downPaymentPercent"
            value={downPaymentPercent}
            handleInputChange={handleInputChange}
          />
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
          <Range
            id="interest-rate"
            name="interestRate"
            value={interestRate}
            handleInputChange={handleInputChange}
          />
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
