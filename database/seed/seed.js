const fs = require('fs');
const csv = require('csv-parser');
const p = require('path');

const path = p.join(__dirname, 'houses.csv');


const db = require('../db.js')
const knex = require('knex')
// const knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: './data.db',
//   },
// });




// fs.readFile(path, (err, csv) =>{
//   if (err) throw err;
//   console.log(JSON.stringify(csv));
// });

/////////////////////    /////////////////////
/////////////////////    /////////////////////
/////////////////////    /////////////////////
/////////////////////    /////////////////////

// fs.readdir(__dirname, (err, files) => {
//   if (err) { console.log(err) }
//   files.forEach(file => {
//     if (file.slice(-4) === '.csv') {
//       const path = p.join(__dirname, file)
//       fs.createReadStream(path)
//       .on('error', () => {console.log('error')})
//       .pipe(csv())
//       .on('data', (row) => {console.log(row);})
//     }
//   })
// })


