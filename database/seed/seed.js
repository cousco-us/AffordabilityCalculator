const faker = require('faker');
const path = require('path');
const csv = require('csvtojson');
const db = require('../db');

db.House.deleteMany({}, () => {});
db.Loan.deleteMany({}, () => {});
db.Tax.deleteMany({}, () => {});

const generateFakeHouseData = () => {
  const houses = [];
  for (let i = 0; i < 100; i += 1) {
    houses.push({
      price: Math.round(faker.finance.amount(95250, 10500000)),
      zipcode: faker.address.zipCode().slice(0, 5),
      state: faker.address.stateAbbr(),
    });
  }
  return houses;
};
const createHouseRecords = (houseData) => db.House.insertMany(houseData);
const seedHouses = async () => {
  await createHouseRecords(generateFakeHouseData())
    .then((newRecords) => console.log(`successfully created ${newRecords.length} new home records`))
    .catch((err) => console.log('problem seeding homes: ', err));
};

const createTaxRecords = (taxesData) => db.Tax.insertMany(taxesData);
const seedTaxes = async () => {
  await csv().fromFile(path.join(__dirname, 'taxes.csv'))
    .then((json) => createTaxRecords(json))
    .then((newRecords) => console.log(`successfully created ${newRecords.length} new tax records`))
    .catch((err) => console.log('problem seeding taxes: ', err));
};

const createLoanRecords = (loansData) => db.Loan.insertMany(loansData);
const seedLoans = async () => {
  await csv().fromFile(path.join(__dirname, 'loans.csv'))
    .then((json) => createLoanRecords(json))
    .then((newRecords) => console.log(`successfully created ${newRecords.length} new loan records`))
    .catch((err) => console.log('problem seeding loans: ', err));
};

const seed = async () => {
  await seedLoans();
  await seedTaxes();
  await seedHouses();
  await console.log('Ending db seeding gracefully...');
  db.connection.close();
};

seed();
