exports.up = function(knex) {
  return knex.schema.createTable("profiles", tbl => {
    tbl.increments();
    tbl.string("chef_name").notNullable();
    tbl.string("location").notNullable();
    tbl.string("contact_info").notNullable();
    tbl
      .integer("chef_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("chefs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("profiles");
};
