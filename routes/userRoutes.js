const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userController");

// Router Object
const router = express.Router();

// -------Routes-------

// Register Route || Post
router.post("/register", registerController);

// Login Route || Post
router.post("/login", loginController);

module.exports = router;
