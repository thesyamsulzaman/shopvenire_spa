const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/auth");

const ProductController = require("../controllers/products");

router.get("/", authenticateToken, ProductController.getAllProducts )

module.exports = router;
