const db = require('../db.js');
const mongoose = require('mongoose');

const housesSchema = new mongoose.Schema({
  price: Number,
  zipcode: String,
  state: String
});
const House = mongoose.model('House', housesSchema);
// // test //
// const testHouse = new House({ price: 6250000, state: 'NY', zipcode: '10983' });
// testHouse.save((err, testRecord) => {
//   if (err) return err;
//   return testRecord;
// });

const taxesSchema = new mongoose.Schema({
  state: String,
  effective_tax_rate: Number
});
const Tax = mongoose.model('Tax', taxesSchema);
// // test //
// const testTax = new Tax({state: 'NY', effective_tax_rate: 0.0171})
// testTax.save((err, testRecord) => {
//   if (err) return console.error(err)
//   console.log('successfully created ', testRecord)
// });

const loansSchema = new mongoose.Schema({
  type: String,
  years: Number,
  interest_rate: Number
});
const Loan = mongoose.model('Loan', loansSchema);
// // test //
// const testLoan = new Loan({type: '30-year fixed', years: 30, interest_rate: 0.0338})
// testLoan.save((err, testRecord) => {
//   if (err) return console.error(err)
//   console.log('successfully created ', testRecord)
// })
