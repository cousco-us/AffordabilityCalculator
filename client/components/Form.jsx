import React, { Fragment } from 'react';
import FormStyles from '../global_styles/FormStyles.jsx';

import Input from './form/Input.jsx';
import InputLeft from './form/InputLeft.jsx';
import InputRight from './form/InputRight.jsx';
import Dropdown from './form/Dropdown.jsx';
import Range from './form/Range.jsx';

const Form = () => (
  <>
    <FormStyles />
    <div className="form-container">
      <div className="flex-container-row">
        <div className="grid-container">
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
                <label className="input-label">Home Price</label>
                <Input id="input-control-home-price-input" />
              </div>
              <div className="">

              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
              <label className="input-label">Down Payment</label>
                <Input id="input-control-home-price-input" />
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
              <label className="input-label">Interest Rate</label>
                <Input id="input-control-home-price-input" />
              </div>
            </div>
          </div>
          <div className="grid-cell-box">
            <div className="affordability-input-controls-container">
              <div className="affordability-input-controls">
              <label className="input-label">Loan Type</label>
                <Input id="input-control-home-price-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Form;
