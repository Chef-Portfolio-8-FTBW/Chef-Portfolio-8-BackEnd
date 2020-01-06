
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl =>{
    tbl.increments();
    tbl.string('author').notNull();
    tbl.string('title').notNull();
    tbl.string('image');
    tbl.string('meal_type').notNull();
    tbl.text('ingredients', 1000).notNull();
    tbl.text('instructions',1000).notNull();
  });
        
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes");
};
