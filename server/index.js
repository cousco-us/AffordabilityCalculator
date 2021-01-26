const express = require('express');
const cors = require('cors');
const Houses = require('./controllers/housesController.js');
const Loans = require('./controllers/loansController.js');
const Taxes = require('./controllers/taxesController.js');

const app = express();
const port = 3001;

app.use('/', express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API
app.get('/houses', Houses.getAll); // convenience dev
app.get('/houses/:id', Houses.getById);
app.get('/houses/random', Houses.getRandom);

app.get('/loans', Loans.getAll); // convenience dev
app.get('/loans/:id', Loans.getById);
app.get('/loans/name/:type', Loans.getByType);

app.get('/taxes/', Taxes.getAll); // convenience dev
app.get('/taxes/:id', Taxes.getById);
app.get('/taxes/state/:state', Taxes.getByState);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
