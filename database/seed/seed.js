const faker = require('faker');
const path = require('path');
const csv = require('csvtojson');
const db = require('../db');

const useCsv = true;
let seedHouses;
if (useCsv) {
  seedHouses = async () => {
    db.House.deleteMany({}, () => {});
    const housesCsv = path.join(__dirname, 'houses.csv');
    csv().fromFile(housesCsv)
      .then((housesJson) => {
        db.House.insertMany(housesJson, (err, success) => {
          // if (err) { console.log(err); }
          if (err) { console.log('problem seeding houses'); }
          // console.log(`Successfully created ${success.length} House records`);
          console.log('Successfully created House records');
        });
      })
      .catch(() => { console.log('you in trouble'); });
  };
} else {
  seedHouses = async () => {
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
      // if (err) { console.log(err); }
      if (err) { console.log('problem seeding houses'); }
      // console.log(`Successfully created ${success.length} House records`);
      console.log('Successfully created House records');
    });
  };
}

const seedTaxes = async () => {
  db.Tax.deleteMany({}, () => {});
  const taxesCsv = path.join(__dirname, 'taxes.csv');
  csv().fromFile(taxesCsv)
    .then((taxesJson) => {
      db.Tax.insertMany(taxesJson, (err, success) => {
        // if (err) { console.log(err); }
        if (err) { console.log('problem seeding taxes'); }
        // console.log(`Successfully created ${success.length} Tax records`);
        console.log('Successfully created Tax records');
      });
    })
    .catch(() => { console.log('you in trouble'); });
};

const seedLoans = async (cb) => {
  db.Loan.deleteMany({}, () => {});
  const loansCsv = path.join(__dirname, 'loans.csv');
  csv().fromFile(loansCsv)
    .then((loansJson) => {
      // THIS ONE ISNT ASYNC
      db.Loan.insertMany(loansJson, (err, success) => {
        // if (err) { console.log(err); }
        if (err) {
          console.log('problem seeding loans');
          console.log(err);
        } else {
          console.log('Successfully created Loan records');
        }
        // console.log(`Successfully created ${success.length} Loan records`);
      });
    })
    // .then(cb)
    .catch(() => { console.log('you in trouble'); });
};

// const shouldBeAPromise = seedLoans();
// console.log(shouldBeAPromise);
// console.log(JSON.stringify(shouldBeAPromise));
// shouldBeAPromise.then(() => console.log('this happened in a then block'));

// const seed = async () => {
//   await seedLoans();
//   await console.log('this should be the last thing');
// };
// seed();

// console.log(shouldBeAPromise);
// const closeConnection = async () => db.connection.close;
// const closeConnection = () => () => db.connection.close();
// seedLoans(closeConnection());
// Promise.all([seedLoans()]).then(db.connection.close());

// const seed = async () => {
//   // await seedHouses();
//   // await seedTaxes();
//   await seedLoans();
//   db.connection.close();
// };
// seed();
// .then(() => db.connection.close());

/// PLEASE FIX THIS vvv
seedHouses();
seedTaxes();
seedLoans();
setTimeout(
  () => db.connection.close(),
  999,
);
/// PLEASE FIX THIS ^^^
