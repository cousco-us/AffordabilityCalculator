import React, { Fragment } from 'react';

import GlobalStyles from '../global_styles/GlobalStyles.jsx';

import Head from './Head.jsx';
import Form from './Form.jsx';
import Results from './Results.jsx';

const App = () => (
  <>
    <GlobalStyles />
    <div className="main-content">
      <div className="page-layout">
        <div className="affordability-container">
          <Head />
          <Form />
          <Results />
        </div>
      </div>
    </div>
  </>
);

export default App;
