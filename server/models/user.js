const enviroment = require("../database/knexfile");
const db = require("knex")(enviroment.development);

module.exports = {
  findUserByEmail(email) {
    return db("users").where("email", email);
  },
  findUserByUsername(username) {
    return db("users").where("username", username);
  },
  create(user) {
    return db("users").insert(user, "id");
  },
  delete(id) {
    return db("users").where("id", id).del();
  }
};
