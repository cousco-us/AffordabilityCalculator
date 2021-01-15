const express = require('express');
const Houses = require('./controllers/housesController.js');
const Loans = require('./controllers/loansController.js');
const Taxes = require('./controllers/taxesController.js');
const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API
app.get('/houses', Houses.getAll); // convenience dev
app.get('/houses/:id', Houses.getById);

app.get('/loans', Loans.getAll);  // convenience dev
app.get('/loans/:id', Loans.getById);
app.get('/loans/name/:type', Loans.getByType);

app.get('/taxes/', Taxes.getAll);  // convenience dev
app.get('/taxes/:id', Taxes.getById);
app.get('/taxes/state/:state', Taxes.getByState);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});