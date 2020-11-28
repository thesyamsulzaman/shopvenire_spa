exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("profile_image").defaultTo("default.png");
    table.string("username").unique("username");
    table.string("first_name");
    table.string("last_name");
    table.string("email").unique("email");
    table.string("password");
    table.integer("role").defaultTo(0);
    table.string("token");
    table.string("token_expired");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
