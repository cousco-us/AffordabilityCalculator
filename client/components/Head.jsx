import React, { Fragment } from 'react';

import GlobalStyles from '../global_styles/GlobalStyles.jsx';

const Head = () => (
  <>
    <GlobalStyles />
    <div className="heading-container">
      <h3>Affordability</h3>
      <h4>Calculate your monthly mortgage payments</h4>
      <p>Your est. payment: $13,035/month*</p>
    </div>
  </>
);

export default Head;
