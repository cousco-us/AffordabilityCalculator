import React, { Fragment } from 'react';
import TableStyles from '../global_styles/TableStyles.jsx';

const Form = () => (
  <>
    <TableStyles />
    <div id="form">
      <table className="form-table">
        <tbody>
          <tr>
            <td>
              <h2>Home Price</h2>
            </td>
            <td>
              <h2>Down Payment</h2>
            </td>
            <td>
              <h2>Interest Rate</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Loan Type</h2>
            </td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default Form;
