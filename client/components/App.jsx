import React, { Fragment } from 'react';

import dbOps from '../../lib/databaseOperations.js';
import mortgageOps from '../../lib/mortgageCalculator.js';
import donutOps from '../../lib/donutHelper.js';

import GlobalStyles from '../global_styles/GlobalStyles.jsx';

import Head from './Head.jsx';
import Form from './Form.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.donutStarterData = [
      {
        title: 'principal & interest',
        propName: 'principleAndInterest',
        cx: '18',
        cy: '18',
        r: '15.915494309189533',
        fill: 'transparent',
        strokeWidth: '3.8',
        stroke: 'rgb(5, 34, 134)',
        // strokeDasharray: donutOps.percentageSplit(principleAndInterest, estimatedPayment).join(' '),
        // strokeDashoffset: '25',
      },
      {
        title: 'property taxes',
        propName: 'propertyTaxes',
        cx: '18',
        cy: '18',
        r: '15.915494309189533',
        fill: 'transparent',
        strokeWidth: '3.8',
        stroke: 'rgb(0, 173, 187)',
        // strokeDasharray: donutOps.percentageSplit(propertyTaxes, estimatedPayment).join(' '),
        // strokeDashoffset: donutOps.relativeOffset(propertyTaxes, estimatedPayment),
      },
      {
        title: 'home insurance',
        propName: 'homeInsurance',
        cx: '18',
        cy: '18',
        r: '15.915494309189533',
        fill: 'transparent',
        strokeWidth: '3.8',
        stroke: 'rgb(194, 213, 0)',
        // strokeDasharray: donutOps.percentageSplit(homeInsurance, estimatedPayment).join(' '),
        // strokeDashoffset: '25',
      },
      {
        title: 'mortgage insurance & other',
        propName: 'mortgageInsuranceAndOther',
        cx: '18',
        cy: '18',
        r: '15.915494309189533',
        fill: 'transparent',
        strokeWidth: '3.8',
        stroke: 'rgb(206, 182, 255)',
        // strokeDasharray: donutOps.percentageSplit(mortgageInsuranceAndOther, estimatedPayment).join(' '),
        // strokeDashoffset: '25',
      },
    ];

    this.state = {
      homePrice: 0,
      downPayment: 0,
      downPaymentPercent: 20,
      interestRate: 0,
      numberOfYears: 0,
      estimatedPayment: 0,
      principleAndInterest: 0,
      taxRate: 0,
      propertyTaxes: 0,
      homeInsurance: 75,
      mortgageInsuranceAndOther: 0,
      loans: [],
      donutData: this.donutStarterData,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  async handleInputChange({ target }) {
    const { name, value } = target;
    if (!name) {
      await dbOps.getInterestRateByLoanType(value)
        .then((loan) => this.setState({
          interestRate: loan.interest_rate * 100,
          numberOfYears: loan.years,
        }));
    } else if (name === 'homePrice') {
      await this.onHomePriceUpdate(value);
    } else {
      await this.setState({ [name]: parseFloat(value) });
    }
    await this.calculatePrincipleAndInterest();
    await this.estimatePayment();
    this.buildDonutData();
  }

  async onHomePriceUpdate(value) {
    // set new home price
    await this.updateHomePrice(value);
    // set new down payment
    await this.updateDownPayment();
    // set new property taxes
    await this.updatePropertyTaxes();
  }

  updateHomePrice(newPrice) {
    const newHomePrice = parseFloat(newPrice);
    this.setState({ homePrice: newHomePrice });
  }

  updateDownPayment() {
    const {
      homePrice,
      downPaymentPercent,
    } = this.state;
    const newDownPayment = parseFloat((downPaymentPercent / 100) * homePrice);
    this.setState({ downPayment: newDownPayment });
  }

  updatePropertyTaxes() {
    const {
      homePrice,
      taxRate,
    } = this.state;
    const newPropertyTaxes = mortgageOps.calculateTaxes(homePrice, taxRate);
    this.setState({ propertyTaxes: newPropertyTaxes });
  }

  async initialize() {
    await this.initializeFromDb();
    await this.estimatePayment();
    this.buildDonutData();
  }

  async initializeFromDb() {
    const { downPaymentPercent } = this.state;
    await dbOps.getRandomHome()
      .then((home) => {
        dbOps.getTaxByState(home.state)
          .then((tax) => {
            this.setState({
              homePrice: Number(home.price),
              downPayment: mortgageOps.calculatePercentage(home.price, downPaymentPercent),
              taxRate: tax.effective_tax_rate,
              propertyTaxes: mortgageOps.calculateTaxes(home.price, tax.effective_tax_rate),
            });
          });
      });

    await dbOps.getLoanTypes()
      .then((loans) => {
        this.setState({ loans });
        this.setState({
          interestRate: loans[0].interest_rate * 100,
          numberOfYears: loans[0].years,
        });
      });

    await this.calculatePrincipleAndInterest();
  }

  async calculatePrincipleAndInterest() {
    const {
      homePrice,
      downPayment,
      interestRate,
      numberOfYears,
    } = this.state;

    const financialDetails = {
      homePrice,
      downPayment,
      interestRate: interestRate / 100 || 0,
      numberOfYears,
    };

    const total = await mortgageOps.mortgageCalculator(financialDetails);

    this.setState({ principleAndInterest: total });
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

  buildDonutData() {
    const {
      donutData,
      estimatedPayment,
    } = this.state;

    const newDonutData = [];
    let newStartingPoint = 25;
    let percentageFilled = 0;

    const calculateStrokeOffset = (fill) => {
      const oldStartingPoint = newStartingPoint;
      percentageFilled += fill;
      newStartingPoint += 100 - percentageFilled;
      return String(oldStartingPoint);
    };

    donutData.forEach((obj) => {
      const newObj = obj;
      const strokeDash = donutOps.percentageSplit(this.state[obj.propName], estimatedPayment);
      newObj.strokeDasharray = strokeDash.join(' ');
      newObj.strokeDashoffset = calculateStrokeOffset(strokeDash[0]);
      newDonutData.push(newObj);
    });
    console.log(newDonutData);
    this.setState({ donutData: newDonutData });
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
      donutData,
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
                totalPayment={estimatedPayment}
                principleAndInterest={principleAndInterest}
                propertyTaxes={propertyTaxes}
                homeInsurance={homeInsurance}
                mortgageInsuranceAndOther={mortgageInsuranceAndOther}
                donutData={donutData}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
