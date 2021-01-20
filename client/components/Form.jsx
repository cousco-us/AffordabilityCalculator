import React, { Fragment } from 'react';
import TableStyles from '../global_styles/TableStyles.jsx';

import Input from './form/Input.jsx';
import InputLeft from './form/InputLeft.jsx';
import InputRight from './form/InputRight.jsx';
import Dropdown from './form/Dropdown.jsx';
import Range from './form/Range.jsx';

const Form = () => (
  <>
    <TableStyles />
    <div id="form">
      <div className="container">
        <div className="item">
          <h2>Home Price</h2>
          <Input id="HomePriceInput" />
          <Range id="affordability-input-control-slider" />
        </div>
        <div className="item">
          <h2>Down Payment</h2>
          <InputLeft id="DownPaymentInput" />
          <InputRight id="RightSplitFinancialInput" />
          <Range id="affordability-input-control-slider" />
        </div>
        <div className="item">
          <h2>Interest Rate</h2>
          <Input id="InterestRateInput" />
          <Range id="affordability-input-control-slider" />
        </div>
        <div className="full-width">
          <h2>Loan Types</h2>
          <Dropdown id="LoanTypeInput" />
        </div>
      </div>
    </div>
  </>
);

export default Form;
