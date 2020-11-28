const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const User = require("../models/user");
const UserValidator = require("../validators/user");

router.get("/auth", UserController.auth);

router.post("/register", UserValidator.registerValidator(), UserController.register);

router.post("/login", [], UserController.login);
router.get("/logout", UserController.logout);

module.exports = router;
