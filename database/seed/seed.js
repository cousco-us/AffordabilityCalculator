const faker = require('faker');
const path = require('path');
const csv = require('csvtojson');
const db = require('../db.js');

const useCsv = false;
let seedHouses;
if (useCsv) {
  seedHouses = () => {
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
} else {
  seedHouses = () => {
    db.House.deleteMany({}, () => {});
    const houses = [];
    for (let i = 0; i < 100; i += 1) {
      houses.push({
        price: Math.round(faker.finance.amount(95250, 10500000)),
        zipcode: faker.address.zipCode().slice(0, 5),
        state: faker.address.stateAbbr(),
      });
    }
    db.House.insertMany(houses, (err, success) => {
      if (err) { return err; }
      return `Successfully created ${success.length} House records`;
    });
  };
}

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

/// PLEASE FIX THIS vvv
setTimeout(
  () => db.connection.close(),
  9999,
);
/// PLEASE FIX THIS ^^^
