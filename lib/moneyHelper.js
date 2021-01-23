const formatMoney = (value) => {
  const useValue = parseFloat(value);
  if (useValue <= 0) { return '$0'; }
  const dollars = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    },
  ).format(useValue);
  return dollars;
};

const formatInterestRatePercent = (value) => {
  const useValue = parseFloat(value) / 100;
  if (useValue <= 0) { return '0.00%'; }
  const percent = new Intl.NumberFormat(
    'en-US',
    {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  ).format(useValue);
  return percent;
};

const formatDownPaymentPercent = (value) => {
  const useValue = parseFloat(value) / 100;
  if (useValue <= 0) { return '0%'; }
  const percent = new Intl.NumberFormat(
    'en-US',
    {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    },
  ).format(useValue);
  return percent;
};

const moneyStringToDecimal = (value) => parseFloat(value.slice(1).split(',').join(''));
const percentStringToDecimal = (value) => parseFloat(value);

module.exports = {
  formatMoney,
  formatInterestRatePercent,
  formatDownPaymentPercent,
  moneyStringToDecimal,
  percentStringToDecimal,
};
