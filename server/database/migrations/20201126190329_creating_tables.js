exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id");
      table.string("profile_image").defaultTo("default.png");
      table.string("username").unique("username");
      table.string("first_name");
      table.string("last_name");
      table.string("email").unique("email");
      table.string("password");
      table.integer("isAdmin").defaultTo(0);
    })
    //.createTable("products", function(table) {
      //table.increments("id");
      //table.string("title");
      //table.string("size").nullable();
      //table.string("color").nullable();
    //})
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
