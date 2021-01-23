const formatMoney = (value) => {
  const useValue = parseFloat(value);
  if (useValue <= 0) { return '$0'; }
  const dollars = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      // maximumSignificantDigits: (Math.log10(useValue) + 1),
    },
  ).format(useValue);
  return dollars;
};

const moneyStringToDecimal = (value) => parseFloat(value.slice(1).split(',').join(''));

module.exports = {
  formatMoney,
  moneyStringToDecimal,
};
