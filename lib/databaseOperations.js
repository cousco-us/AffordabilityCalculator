const Axios = require('axios');

const getRandomHome = async () => {
  let randomHome;
  await Axios.get('/houses')
    .then((homes) => {
      randomHome = homes.data[Math.floor(Math.random() * homes.data.length)];
    })
    .catch((err) => console.log(err));
  return randomHome;
};

const getTaxByState = async (state) => {
  let stateTax;
  await Axios.get(`/taxes/state/${state}`)
    .then((tax) => {
      stateTax = tax;
    })
    .catch((err) => console.log(err));
  return stateTax.data[0];
};

const getLoanTypes = async () => {
  let loanTypes;
  await Axios.get('/loans')
    .then((loans) => {
      loanTypes = loans;
    })
    .catch((err) => console.log(err));
  return loanTypes.data;
};

const getInterestRateByLoanType = async (type) => {
  let rate;
  await Axios.get(`/loans/name/${type}`)
    .then((loan) => {
      rate = loan.data[0];
    })
    .catch((err) => console.log(err));
  return rate;
};

const dbOps = {
  getRandomHome,
  getTaxByState,
  getLoanTypes,
  getInterestRateByLoanType,
};

export default dbOps;
