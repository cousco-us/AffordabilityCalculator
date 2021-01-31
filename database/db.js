const mongoose = require('mongoose');

const url = process.env.PRODUCTION_DB || 'mongodb://localhost/calculator';

mongoose.connect(
  url,
  (err) => (err ? console.log('====== ====== ====== ======\nUh-oh! looks like you have a Mongoose connection error:\n', err, '\n====== ====== ====== ======') : console.log('Successfully connected to Mongoose!')),
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const db = mongoose.connection;

const housesSchema = new mongoose.Schema({
  price: Number,
  zipcode: String,
  state: String,
});
const House = mongoose.model('House', housesSchema);

const taxesSchema = new mongoose.Schema({
  state: String,
  effective_tax_rate: Number,
});
const Tax = mongoose.model('Tax', taxesSchema);

const loansSchema = new mongoose.Schema({
  type: String,
  years: Number,
  interest_rate: Number,
});
const Loan = mongoose.model('Loan', loansSchema);

module.exports = {
  connection: db,
  House,
  Tax,
  Loan,
};
