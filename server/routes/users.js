const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/auth");

const UserController = require("../controllers/user");
const User = require("../models/user");
const UserValidator = require("../validators/user");

router.get("/auth", authenticateToken, UserController.auth);

router.post(
  "/register",
  UserValidator.registerValidator(),
  UserController.register
);

router.post("/login", UserValidator.loginValidator(), UserController.login);
router.delete("/:id", UserController.delete);

module.exports = router;
