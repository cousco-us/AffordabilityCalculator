import React, { Fragment } from 'react';
import currency from 'currency-formatter';

import dbOps from '../../lib/databaseOperations.js';
import mortgageOps from '../../lib/mortgageCalculator.js';

import GlobalStyles from '../global_styles/GlobalStyles.jsx';

import Head from './Head.jsx';
import Form from './Form.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home: null,
      homePrice: null,
      downPayment: null,
      // interestRate: null,
    };

    // this.getRandomHouse = this.getRandomHouse.bind(this);
  }

  componentDidMount() {
    this.initialize();
    console.log(mortgageOps.calculatePercentage(3250000, 20));
  }

  initialize() {
    dbOps.getRandomHome()
      .then((home) => {
        this.setState({
          home: home,
          homePrice: home.price,
          downPayment: mortgageOps.calculatePercentage(home.price, 20),
        });
        console.log(currency.format(home.price, { code: 'USD' }));
      });
  }

  // convertToCurrency(num) {
  //   currency.format(num, { code: 'USD' });
  // }

  render() {
    // console.log(this.state.house);
    return (
      <>
        <GlobalStyles />
        <div className="main-content">
          <div className="page-layout">
            <div className="affordability-container">
              <Head />
              <Form
                house={this.state.home}
                homePrice={this.state.homePrice}
                downPayment={this.state.downPayment}
              />
              <Results />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
