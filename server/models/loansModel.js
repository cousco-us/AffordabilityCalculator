const db = require('../../database/db.js');

const getAll = (cb) => {
  db.Loan.find({}, cb);
}
const getById = (id, cb) => {
  db.Loan.findById(id, cb);
};

const getByType = (type, cb) => {
  db.Loan.find({type: type}, cb);
}

module.exports = {
  getAll,
  getById,
  getByType
};