const enviroment = require("../database/knexfile");
const db = require("knex")(enviroment.development);

module.exports = {
  findAllProducts() {
    return db("products").select("*");
  },
  findProductByName(email) {
    return db("products").where("email", email);
  },
  findUserByUsername(username) {
    return db("products").where("username", username);
  },
  create(user) {
    return db("products").insert(user, "id");
  },
  delete(id) {
    return db("products").where("id", id).del();
  }
};
