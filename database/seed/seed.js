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

const seedHouses = async () => {
  try {
    const rows = await generateFakeHouseData();
    await db.House.insertMany(rows);
    console.log(`Successfully seeded ${rows.length} House rows...`);
  } catch (err) {
    console.log('problem seeding taxes: ', err);
  }
};

const seedTaxes = async () => {
  try {
    const rows = await csv().fromFile(path.join(__dirname, 'taxes.csv'));
    await db.Tax.insertMany(rows);
    console.log(`Successfully seeded ${rows.length} Tax rows...`);
  } catch (err) {
    console.log('problem seeding taxes: ', err);
  }
};

const seedLoans = async () => {
  try {
    const rows = await csv().fromFile(path.join(__dirname, 'loans.csv'));
    await db.Loan.insertMany(rows);
    console.log(`Successfully seeded ${rows.length} Loan rows...`);
  } catch (err) {
    console.log('problem seeding taxes: ', err);
  }
};

const seed = async () => {
  await seedLoans();
  await seedTaxes();
  await seedHouses();
  await console.log('Gracefully ending db seed...');
  db.connection.close();
};

seed();
