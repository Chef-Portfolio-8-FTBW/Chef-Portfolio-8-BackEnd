const db = require("../database/dbConfig");

const tbl = "profiles"; //define table name

const tblRecipe = "recipes";

module.exports = {
  add,
  find,
  findBy,
  findById,
  editProfile,
  newRecipe,
  findByAuthor,
  editRecipe,
  findRecipeId,
  remove
};

function find() {
  return db(tbl).select("id", "chef_name");
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

function editProfile(changes, id) {
  return db(tbl)
    .update(changes)
    .where({ id });
}

async function newRecipe(recipe) {
  const [id] = await db(tblRecipe).insert(recipe);

  return findRecipeId(id);
}

function findRecipeId(id) {
  return db(tblRecipe)
    .where({ id })
    .first();
}

function findByAuthor(filter) {
  return db(tblRecipe).where(filter);
}

function editRecipe(changes, id) {
  return db(tblRecipe)
    .update(changes)
    .where({ id });
}

function remove(id){
  return db(tblRecipe).select("id").where("id", id).del()
}
