const db = require('../../database/db.js');

const getAll = (cb) => {
  db.Tax.find({}, cb);
};

const getById = (id, cb) => {
  db.Tax.findById(id, cb);
};

const getByState = (state, cb) => {
  db.Tax.find({ state }, cb);
};

module.exports = {
  getAll,
  getById,
  getByState,
};
