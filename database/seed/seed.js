const path = require('path');
const csv = require('csvtojson');
const db = require('../db.js');

const seedHouses = () => {
  db.House.deleteMany({}, () => {});
  const housesCsv = path.join(__dirname, 'houses.csv');
  csv().fromFile(housesCsv)
    .then((housesJson) => {
      db.House.insertMany(housesJson, (err, success) => {
        if (err) { return err; }
        return `Successfully created ${success.length} House records`;
      });
    });
};

const seedTaxes = () => {
  db.Tax.deleteMany({}, () => {});
  const taxesCsv = path.join(__dirname, 'taxes.csv');
  csv().fromFile(taxesCsv)
    .then((taxesJson) => {
      db.Tax.insertMany(taxesJson, (err, success) => {
        if (err) { return err; }
        return `Successfully created ${success.length} Tax records`;
      });
    });
};

const seedLoans = () => {
  db.Loan.deleteMany({}, () => {});
  const loansCsv = path.join(__dirname, 'loans.csv');
  csv().fromFile(loansCsv)
    .then((loansJson) => {
      db.Loan.insertMany(loansJson, (err, success) => {
        if (err) { return err; }
        return `Successfully created ${success.length} Loan records`;
      });
    });
};

seedHouses();
seedTaxes();
seedLoans();
