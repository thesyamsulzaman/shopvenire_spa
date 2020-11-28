const enviroment = require("../database/knexfile");
const db = require("knex")(enviroment.development);
const bcrypt = require("bcryptjs");

exports.register = (req, res, next) => {
  const { profile_image, first_name, last_name, email, password } = req.body;

  db("users")
    .where("email", email)
    .then(user => {
      if (user.length > 0) {
        return res.json({ message: "Email has already been used" });
      } else {
        bcrypt
          .hash(password, 10)
          .then(hashed => {
            db("users").res.json({ password: hashed });
          })
          .catch(err => {
            res.status(500).json({ err });
          });
      }
    })
    .catch(error => res.json(error));
};

exports.login = (req, res, next) => {
  res.send(req.body);
};
exports.logout = (req, res, next) => {
  res.send(req.body);
};

exports.auth = (req, res, next) => {
  res.send(knex);
};
