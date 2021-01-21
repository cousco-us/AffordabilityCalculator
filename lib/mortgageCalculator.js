const mortgageCalculator = (obj) => {
  const P = obj.homePrice - obj.downPayment;
  const r = obj.interestRate;
  const t = obj.numberOfYears;
  const numerator = P * (r / 12) * ((1 + r / 12) ** (12 * t));
  const denominator = (1 + r / 12) ** (12 * t) - 1;
  const monthlyPayment = numerator / denominator;
  const moneyRound = (num) => Math.round(num);
  return moneyRound(monthlyPayment);
};

const calculatePercentage = (num, pcnt) => {
  const percent = pcnt / 100;
  return num * percent;
};

const calculateTaxes = (homePrice, taxRate) => {
  const taxes = homePrice * taxRate;
  return taxes / 12;
};

const mortgageOps = {
  mortgageCalculator,
  calculatePercentage,
  calculateTaxes,
};

module.exports = mortgageOps;
