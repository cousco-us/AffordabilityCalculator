// import PORT from '../secrets.js';
const Axios = require('axios');

const getRandomHome = async () => {
  let randomHome;
  // await Axios.get(`http://localhost:${PORT}/houses`)
  await Axios.get('/houses')
    .then((homes) => {
      randomHome = homes.data[Math.floor(Math.random() * homes.data.length)];
    })
    .catch((err) => console.log(err));
  return randomHome;
};

const getTaxByState = async (state) => {
  let stateTax;
  // await Axios.get(`http://localhost:${PORT}/taxes/state/${state}`)
  await Axios.get(`/taxes/state/${state}`)
    .then((tax) => {
      stateTax = tax;
    })
    .catch((err) => console.log(err));
  return stateTax.data[0];
};

const getLoanTypes = async () => {
  let loanTypes;
  // await Axios.get(`http://localhost:${PORT}/loans`)
  await Axios.get('/loans')
    .then((loans) => {
      loanTypes = loans;
    })
    .catch((err) => console.log(err));
  return loanTypes.data;
};

const getInterestRateByLoanType = async (type) => {
  let effectiveRate;
  // await Axios.get(`http://localhost:${PORT}/loans/name/${type}`)
  await Axios.get(`/loans/name/${type}`)
    .then((loan) => {
      const { data } = loan;
      const [rate] = data;
      effectiveRate = rate;
    })
    .catch((err) => console.log(err));
  return effectiveRate;
};

const dbOps = {
  getRandomHome,
  getTaxByState,
  getLoanTypes,
  getInterestRateByLoanType,
};

export default dbOps;
