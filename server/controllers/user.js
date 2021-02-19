const enviroment = require("../database/knexfile");
const db = require("knex")(enviroment.development);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user");
const UserValidator = require("../validators/user");

require("dotenv").config();

exports.auth = (req, res, next) => {
  res.json(req.body.user);
};

exports.register = async (req, res, next) => {
  const {
    profile_image,
    username,
    first_name,
    last_name,
    email,
    password
  } = req.body;

  try {
    const Errors = validationResult(req);
    if (!Errors.isEmpty()) return res.json(Errors.mapped());

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      first_name,
      last_name,
      email,
      password: hashedPassword
    });
    if (!newUser) res.json({ status: 401, message: "User creation failed" });
    res.json({ status: 201, message: "User Succesfully Created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  UserValidator._runValidation(req, res);

  try {
    const user = await User.findUserByUsername(username);
    const passwordMatches = await bcrypt.compare(password, user[0].password);

    if (!passwordMatches) return res.json({ message: "Wrong Password" });

    const accessToken = jwt.sign(user[0], process.env.ACCESS_TOKEN_KEY, {
      expiresIn: "15min"
    });
    //const refreshToken = jwt.sign(username, process.env.REFRESH_TOKEN_KEY);

    res.json({
      status: 201,
      message: "User Succesfully Authenticated",
      accessToken
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.delete(id);
    if (!deletedUser) res.status(500).json({ error: err });
    res.status(200).json({ message: "User deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
