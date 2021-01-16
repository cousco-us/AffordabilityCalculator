const calculator = require('../lib/mortgageCalculator.js');

test('mortgageCalculator exists', () => {
  expect(!!calculator).toBe(true);
});

test('mortgageCalculator is a function', () => {
  expect(typeof calculator).toBe('function');
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
  expect(typeof calculator(obj1)).toBe('number');
});

test('mortgageCalculator returns correct values', () => {
  expect(calculator(obj1)).toBe(10697);
  expect(calculator(obj2)).toBe(2068);
  expect(calculator(obj3)).toBe(7115);
});
