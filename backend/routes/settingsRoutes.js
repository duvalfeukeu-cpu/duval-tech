const express = require("express");
const router = express.Router();

const {
  getSettings,
  updateSettings,
} = require("../controllers/settingsController");

const authMiddleware = require("../middlewares/authMiddleware");

// ==========================
// GET SETTINGS
// ==========================

router.get("/", getSettings);

// ==========================
// UPDATE SETTINGS
// ==========================

router.put("/", authMiddleware, updateSettings);

module.exports = router;