import React, { Fragment } from 'react';
import TableStyles from '../global_styles/TableStyles.jsx';

const Form = () => (
  <>
    <TableStyles />
    <div id="form">

      <div className="container">
        <div className="item">
          <h2>Home Price</h2>
        </div>
        <div className="item">
          <h2>Down Payment</h2>
        </div>
        <div className="item">
          <h2>Interest Rate</h2>
        </div>
        <div className="full-width">
          <h2>Loan Types</h2>
        </div>
      </div>

    </div>
  </>
);

export default Form;
