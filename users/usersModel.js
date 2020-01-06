const db = require("../database/dbConfig.js");

const tbl = "profiles"; //define table name

const tblRecipes = 'recipes';

module.exports = {
  find,
  findBy,
  findById,
  byRecipe,
  byChef,
  byMealType,
  byIngredients,
  listRecipes
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

function byChef(filter){
  return db(tblRecipes).where("author", "like", `%${filter.author}%`);
}

function byMealType(filter){
  return db(tblRecipes).where("meal_type", "like", `%${filter.meal_type}%`);
}

function byIngredients(filter){
  return db(tblRecipes).where("ingredients", "like", `%${filter.ingredients}%`);
}

function byRecipe(filter){
  return db(tblRecipes).where("title", "like", `%${filter.title}%`);
}

function listRecipes(){
  return db(tblRecipes).select("id", "author", "title");
}