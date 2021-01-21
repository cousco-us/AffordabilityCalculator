import React, { Fragment } from 'react';

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
      homePrice: 0,
      downPayment: 0,
      downPaymentPercent: 20,
      interestRate: 0,
      estimatedPayment: 0,
      principleAndInterest: 0,
      propertyTaxes: 0,
      homeInsurance: 75,
      mortgageInsuranceAndOther: 0,
      loans: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    if (!name) {
      dbOps.getInterestRateByLoanType(value)
        .then((rate) => this.setState({ interestRate: (rate * 100).toFixed(2) }));
    } else {
      this.setState({ [name]: value });
    }
  }

  async initialize() {
    await this.initializeFromDb();
    this.estimatePayment();
  }

  async initializeFromDb() {
    await dbOps.getRandomHome()
      .then((home) => {
        dbOps.getTaxByState(home.state)
          .then((tax) => {
            this.setState({
              homePrice: Number(home.price),
              downPayment: mortgageOps.calculatePercentage(home.price, 20),
              propertyTaxes: mortgageOps.calculateTaxes(home.price, tax.effective_tax_rate),
            });
          });
      });

    await dbOps.getLoanTypes()
      .then((loans) => {
        this.setState({ loans });
        this.setState({ interestRate: loans[0].interest_rate * 100 });
      });
  }

  estimatePayment() {
    const {
      principleAndInterest,
      propertyTaxes,
      homeInsurance,
      mortgageInsuranceAndOther,
    } = this.state;

    const estimate = principleAndInterest
      + propertyTaxes
      + homeInsurance
      + mortgageInsuranceAndOther;

    this.setState({ estimatedPayment: estimate });
  }

  render() {
    const {
      home,
      homePrice,
      downPayment,
      downPaymentPercent,
      interestRate,
      loans,
      estimatedPayment,
      principleAndInterest,
      propertyTaxes,
      homeInsurance,
      mortgageInsuranceAndOther,
    } = this.state;
    return (
      <>
        <GlobalStyles />
        <div className="main-content">
          <div className="page-layout">
            <div className="affordability-container">
              <Head
                totalPayment={estimatedPayment}
              />
              <Form
                house={home}
                homePrice={Number(homePrice)}
                downPayment={Number(downPayment)}
                downPaymentPercent={Number(downPaymentPercent)}
                interestRate={Number(interestRate)}
                loans={loans}
                handleInputChange={this.handleInputChange}
              />
              <Results
                principleAndInterest={principleAndInterest}
                propertyTaxes={propertyTaxes}
                homeInsurance={homeInsurance}
                mortgageInsuranceAndOther={mortgageInsuranceAndOther}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
