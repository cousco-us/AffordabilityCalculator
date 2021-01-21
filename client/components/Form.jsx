import React, { Fragment } from 'react';
import FormStyles from '../global_styles/FormStyles.jsx';

import Input from './form/Input.jsx';
import InputLeft from './form/InputLeft.jsx';
import InputRight from './form/InputRight.jsx';
import Dropdown from './form/Dropdown.jsx';
import Range from './form/Range.jsx';

const tests = {
  price: 970760,
  downPayment: 194152,
  downPaymentPercent: 20,
  interestRate: 2.79,
};

const Form = ({home, homePrice}) => (
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
                  valueType="$"
                  id="input-control-home-price-input"
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
                  value={tests.downPayment}
                  valueType="$"
                  id="input-control-down-payment-dollar-input"
                />
                <Input
                  value={tests.downPaymentPercent}
                  valueType="%"
                  id="input-control-down-payment-percent-input"
                />
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Interest Rate</label>
                <Input
                  value={tests.interestRate}
                  valueType="%"
                  id="input-control-interest-rate-input"
                />
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Loan Type</label>
                <Dropdown id="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Form;
