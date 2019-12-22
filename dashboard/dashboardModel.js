const db = require('../database/dbConfig');

const tbl = 'profiles';//define table name

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db(tbl).select('id', 'chef_name');
}

function findBy(filter) {
  return db(tbl).where(filter);
}

async function add(profile) {
  const [id] = await db(tbl).insert(profile);

  return findById(id);
}

function findById(id) {
  return db(tbl)
    .where({ id })
    .first();
}
