const mortgageCalculator = (obj) => {
  const P = obj.homePrice - obj.downPayment;
  const r = obj.interestRate;
  const t = obj.numberOfYears;

  if (r === 0 || r === 0.0) {
    console.log(r);
    const numerator = P;
    const denominator = 12 * t;
    const monthlyPayment = numerator / denominator;
    const moneyRound = (num) => Math.round(num);
    return moneyRound(monthlyPayment);
  }

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
