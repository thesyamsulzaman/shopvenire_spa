const enviroment = require("../database/knexfile");
const db = require("knex")(enviroment.development);
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/user");

exports.register = (req, res, next) => {
  const {
    profile_image,
    username,
    first_name,
    last_name,
    email,
    password
  } = req.body;

  if (!validationResult(req).isEmpty())
    return res.status(422).json({ errors: ValidationResult.mapped() });

  bcrypt
    .hash(password, 10)
    .then(hashed => {
      User.create({ username, first_name, last_name, email, password: hash })
        .then(() => {
          res.json({ status: 201, message: "User Succesfully Created" });
        })
        .catch(error => res.json({status: 401, message: "User creation failed" }));
    })
    .catch(err => {
      res.status(500).json({ err });
    });
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
