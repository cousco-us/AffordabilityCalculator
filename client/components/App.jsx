import React, { Fragment } from 'react';
import ContainerStyles from '../global_styles/ContainerStyles.jsx';
import Head from './Head.jsx';
import Form from './Form.jsx';
import Results from './Results.jsx';

const App = () => (
  <>
    <ContainerStyles />
    <Head />
    <Form />
    <Results />
  </>
);

export default App;
