const db = require('../../database/db.js');

const getAll = (cb) => {
  db.House.find({}, cb);
}
const getById = (id, cb) => {
  db.House.findById(id, cb);
};

module.exports = {
  getAll: getAll,
  getById: getById
};