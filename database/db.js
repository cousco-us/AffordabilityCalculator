const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calculator', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const housesSchema = new mongoose.Schema({
  price: Number,
  zipcode: String,
  state: String
});
const House = mongoose.model('House', housesSchema);

const taxesSchema = new mongoose.Schema({
  state: String,
  effective_tax_rate: Number
});
const Tax = mongoose.model('Tax', taxesSchema);

const loansSchema = new mongoose.Schema({
  type: String,
  years: Number,
  interest_rate: Number
});
const Loan = mongoose.model('Loan', loansSchema);

module.exports = {
  db,
  House,
  Tax,
  Loan
};
