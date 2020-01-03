const db = require("../database/dbConfig.js");

const tbl = "profiles"; //define table name

module.exports = {
  find,
  findBy,
  findById
};

function find() {
  return db(tbl).select("id", "chef_name");
}

function findBy(filter) {
  console.log(filter);
  return db(tbl).where("chef_name", "like", `%${filter.chef_name}%`);
}

function findById(id) {
  return db(tbl)
    .where({ id })
    .first();
}
