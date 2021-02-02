import React from 'react';

import dbOps from '../../lib/databaseOperations';
import mortgageOps from '../../lib/mortgageCalculator';
import donutOps from '../../lib/donutHelper';
import donutStarterData from '../../lib/donutStarterData';

import GlobalStyles from '../global_styles/GlobalStyles';

import Head from './Head';
import Form from './Form';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);

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
      donutData: donutStarterData,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  async handleInputChange({ name, value }) {
    if (!name) {
      await dbOps.getInterestRateByLoanType(value)
        .then((loan) => this.setState({
          interestRate: loan.interest_rate * 100,
          numberOfYears: loan.years,
        }))
        .catch((err) => {
          console.log(err);
        });
    } else if (name === 'homePrice') {
      await this.onHomePriceUpdate(value);
    } else if (name === 'downPayment') {
      await this.setState({ [name]: value });
      await this.updateDownPaymentPercent();
      // await this.updateMortgateInsuranceAndOther();
    } else if (name === 'downPaymentPercent') {
      await this.setState({ [name]: value });
      await this.updateDownPayment();
      // await this.updateMortgateInsuranceAndOther();
    } else {
      await this.setState({ [name]: value });
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
    const newHomePrice = newPrice;
    this.setState({ homePrice: newHomePrice });
  }

  updateDownPayment() {
    const {
      homePrice,
      downPaymentPercent,
    } = this.state;
    const newDownPayment = ((downPaymentPercent / 100) * homePrice);
    this.setState({ downPayment: newDownPayment });
    this.updateMortgateInsuranceAndOther();
  }

  updateDownPaymentPercent() {
    const {
      homePrice,
      downPayment,
    } = this.state;
    const newDownPaymentPercent = ((downPayment / homePrice) * 100);
    this.setState({ downPaymentPercent: newDownPaymentPercent });
  }

  updateMortgateInsuranceAndOther() {
    const {
      homePrice,
      downPayment,
      downPaymentPercent,
    } = this.state;
    const baseInsurance = Math.floor((homePrice - downPayment) * 0.000366);
    if (downPaymentPercent < 5) {
      this.setState({ mortgageInsuranceAndOther: baseInsurance + 250 });
    }
    if (downPaymentPercent < 10) {
      this.setState({ mortgageInsuranceAndOther: baseInsurance + 175 });
    }
    if (downPaymentPercent < 15) {
      this.setState({ mortgageInsuranceAndOther: baseInsurance + 100 });
    }
    if (downPaymentPercent < 20) {
      this.setState({ mortgageInsuranceAndOther: baseInsurance });
    }
    if (downPaymentPercent >= 20) {
      this.setState({ mortgageInsuranceAndOther: 0 });
    }
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
    let currentStartingPoint = 25;
    let percentageFilled = 0;

    const calculateStrokeDashOffset = (fill) => {
      const oldStartingPoint = currentStartingPoint;
      percentageFilled += fill;
      currentStartingPoint += 100 - percentageFilled;
      return String(oldStartingPoint);
    };

    donutData.forEach((obj) => {
      const newObj = obj;
      const moneyValue = this.state[obj.propName];
      const strokeDashArray = donutOps.percentageSplit(moneyValue, estimatedPayment);
      newObj.strokeDasharray = strokeDashArray.join(' ');
      newObj.strokeDashoffset = calculateStrokeDashOffset(strokeDashArray[0]);
      newObj.moneyValue = moneyValue;
      newDonutData.push(newObj);
    });
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
      <GlobalStyles>
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
      </GlobalStyles>
    );
  }
}

export default App;
