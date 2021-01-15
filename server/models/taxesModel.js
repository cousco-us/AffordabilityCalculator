const db = require('../../database/db.js');

const getAll = (cb) => {
  db.Tax.find({}, cb);
}
const getById = (id, cb) => {
  db.Tax.findById(id, cb);
};

module.exports = {
  getAll: getAll,
  getById: getById
};