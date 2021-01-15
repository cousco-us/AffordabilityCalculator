const path = require('path');
const csv = require('csvtojson');
const db = require('../db.js');

// console.log('hiii')
////////////////////////////////////
//////////PROMISIFIED///////////////
////////////////////////////////////
const seedHouses = () => {
  return new Promise((resolve) => {
    db.House.deleteMany({}, () => {});
    const housesCsv = path.join(__dirname, 'houses.csv');
    csv().fromFile(housesCsv)
      .then((housesJson) => {
        db.House.insertMany(housesJson, (err, success) => {
          if (err) { return err; }
          return `Successfully created ${success.length} House records`;
        });
      });
    resolve(console.log('seeded houses'));
  })
};

const seedTaxes = () => {
  return new Promise(resolve => {
    db.Tax.deleteMany({}, () => {});
    const taxesCsv = path.join(__dirname, 'taxes.csv');
    csv().fromFile(taxesCsv)
      .then((taxesJson) => {
        db.Tax.insertMany(taxesJson, (err, success) => {
          if (err) { return err; }
          return `Successfully created ${success.length} Tax records`;
        });
      });
    resolve(console.log('seeded taxes'));
  })
};


////////////////////////////////////
//////NOT PROMISIFIED///////////////
////////////////////////////////////
// const seedHouses = () => {
//   db.House.deleteMany({}, () => {});
//   const housesCsv = path.join(__dirname, 'houses.csv');
//   csv().fromFile(housesCsv)
//     .then((housesJson) => {
//       db.House.insertMany(housesJson, (err, success) => {
//         if (err) { return err; }
//         return `Successfully created ${success.length} House records`;
//       });
//     });
// };

// const seedTaxes = () => {
//   db.Tax.deleteMany({}, () => {});
//   const taxesCsv = path.join(__dirname, 'taxes.csv');
//   csv().fromFile(taxesCsv)
//     .then((taxesJson) => {
//       db.Tax.insertMany(taxesJson, (err, success) => {
//         if (err) { return err; }
//         return `Successfully created ${success.length} Tax records`;
//       });
//     });
// };

// const seedLoans = () => {
//   db.Loan.deleteMany({}, () => {});
//   const loansCsv = path.join(__dirname, 'loans.csv');
//   csv().fromFile(loansCsv)
//     .then((loansJson) => {
//       db.Loan.insertMany(loansJson, (err, success) => {
//         if (err) { return err; }
//         return `Successfully created ${success.length} Loan records`;
//       });
//     });
// };

//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
//////////// ////////// GOAL ///////// ////////////
//////////// //////////// //////////// ////////////
//////////// //////////// //////////// ////////////
// EXECUTE seedHouses() & seedTaxes() & seedLoans()
// THEN, after they've ALL completed
// EXECUTE db.connection.close()

const seed = async () => {
  try {
    const housSeeds = await seedHouses();
    const close = await db.connection.close();
  } catch (err) {
    console.log(err)
  }
}

seed();

// async function getUsers(users) {
// 	try {
// 		response[0] = await axios.get(`/users/userId=${users[0]}`);
// 		response[1] = await axios.get(`/users/userId=${users[1]}`);
// 		response[2] = await axios.get(`/users/userId=${users[2]}`);
// 		response[3] = await axios.get(`/users/userId=${users[3]}`);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// seedHouses().then(db.connection.close());
// async function fetchUsers() {
//   const user1 = getUser1();
//   const user2 = getUser2();
//   const user3 = getUser3();

//   const results = await Promise.all([user1, user2, user3]);
// }

// seedHouses().then(seedTaxes).then(db.connection.close());
// seedHouses().then(console.log('finished'));

// Promise.all([seedHouses, seedTaxes]);


// seedHouses();
// seedTaxes();

// const seed = () => {
//   return new Promise(resolve => {
//     resolve(
//       seedHouses(),
//       seedTaxes()
//     );
//   })
// }
// seed().then(db.connection.close());



// seedHouses().then(seedTaxes).then(db.connection.close());
// seed();
// seed().then(db.connection.close());
// seedLoans();
// seedHouses();
// seedTaxes();
// db.connection.close();
