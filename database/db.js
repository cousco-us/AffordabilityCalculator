const secrets = require('../secrets.js');

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//knexjs/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : secrets.dbuser,
    password : secrets.dbsecret,
    database : 'calculator'
  }
  // ,
  // pool: {
  //   afterCreate: function (conn, done) {
  //     console.log('what')
  //     // in this example we use pg driver's connection API
  //     // conn.query('SET timezone="UTC";', function (err) {
  //     //   if (err) {
  //     //     // first query failed, return error and don't try to make next query
  //     //     done(err, conn);
  //     //   } else {
  //     //     // do the second query...
  //     //     conn.query('SELECT set_limit(0.01);', function (err) {
  //     //       // if err is not falsy, connection is discarded from pool
  //     //       // if connection aquire was triggered by a query the error is passed to query promise
  //     //       done(err, conn);
  //     //     });
  //     //   }
  //     // });
  //   }
  // }
});

const testData = [
  {price: 6250000, state: 'NY', zipcode: '94101'}
]

knex('houses').insert(testData[0])

// console.log(knex)

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//mysql/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
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
