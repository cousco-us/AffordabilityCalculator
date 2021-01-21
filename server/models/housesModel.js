const db = require('../../database/db.js');

const getAll = (cb) => {
  db.House.find({}, cb);
};

const getRandom = (cb) => {
  db.House.find({}).sample(1).exec(cb);
};

const getById = (id, cb) => {
  db.House.findById(id, cb);
};

module.exports = {
  getAll,
  getRandom,
  getById,
};
