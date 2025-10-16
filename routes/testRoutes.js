const express = require("express");
const { testingController } = require("../controllers/testController");

// Router Object
const router = express.Router();

// Routes
router.get("/", testingController);

// Export Routes
module.exports = router;
