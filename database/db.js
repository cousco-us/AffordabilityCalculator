const secrets = require('../secrets.js');
// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost:3000',
//   // user     : 'root',
//   // password : 'smile'
//   user     : secrets.dbuser,
//   password : secrets.dbsecret
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost:3000',
    user     : secrets.dbuser,
    password : secrets.dbsecret,
    database : 'calculator'
  }
});

knex('houses').insert({state: 'NY'})

// knex('houses').insert({ price: '6250000', zipcode: '11217', state: 'NY' })

// console.log(newrow)
// console.log(knex)
// try {
//   await knex.schema
//     .createTable('houses', table => {
//       table.increments('id'),
//       table.float('price'),
//       table.integer('zipcode').
//       table.string('state');
//     })

//     const insertedRows = await knex('houses').insert({ price: '6250000', zipcode: '11217', state: 'NY' })
// } catch(e) {
//   console.log(e);
// }