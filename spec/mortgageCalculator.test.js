const calculator = require('../lib/mortgageCalculator.js');

test('mortgageCalculator exists', () => {
  expect(!!calculator.mortgageCalculator).toBe(true);
});

test('mortgageCalculator is a function', () => {
  expect(typeof calculator.mortgageCalculator).toBe('function');
});

const obj1 = {
  homePrice: 3250000,
  downPayment: 650000,
  interestRate: 2.81 / 100,
  numberOfYears: 30,
};

const obj2 = {
  homePrice: 389900,
  downPayment: 77980,
  interestRate: 2.42 / 100,
  numberOfYears: 15,
};
const obj3 = {
  homePrice: 1789000,
  downPayment: 0,
  interestRate: 2.55 / 100,
  numberOfYears: 30,
};

test('mortgageCalculator returns a number', () => {
  expect(typeof calculator.mortgageCalculator(obj1)).toBe('number');
});

test('mortgageCalculator returns correct values', () => {
  expect(calculator.mortgageCalculator(obj1)).toBe(10697);
  expect(calculator.mortgageCalculator(obj2)).toBe(2068);
  expect(calculator.mortgageCalculator(obj3)).toBe(7115);
});
