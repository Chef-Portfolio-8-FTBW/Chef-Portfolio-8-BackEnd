const db = require('../database/dbConfig');

const tbl = 'profiles';//define table name

const tblRecipe = '';

module.exports = {
  add,
  find,
  findBy,
  findById,
  editProfile
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

function editProfile(changes, id){
  return db(tbl)
  .update(changes)
  .where({ id });
}
