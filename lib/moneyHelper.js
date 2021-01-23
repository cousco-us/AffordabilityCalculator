const formatMoney = (value) => {
  if (value <= 0) { return '$0'; }
  console.log(Math.log10(value) + 1)
  const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: (Math.log10(value) + 1) }).format(value);
  return dollars;
};

const moneyStringToDecimal = (value) => parseFloat(value.slice(1).split(',').join(''));

module.exports = {
  formatMoney,
  moneyStringToDecimal,
};
