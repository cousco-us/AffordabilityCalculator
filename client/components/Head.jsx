import React, { Fragment } from 'react';

import HeadStyles from '../global_styles/HeadStyles.jsx';

const Head = () => (
  <>
    <HeadStyles />
    <div className="heading-container">
      <h3>Affordability</h3>
      <h4>Calculate your monthly mortgage payments</h4>
      <p>Your est. payment: $13,035/month*</p>
    </div>
  </>
);

export default Head;
