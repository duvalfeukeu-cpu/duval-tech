const express = require("express");

const router = express.Router();

const {
  login,
  changePassword,
} = require("../controllers/authController");

const authMiddleware = require("../middlewares/authMiddleware");

// ==========================
// LOGIN ADMIN
// ==========================

router.post("/login", login);

// ==========================
// CHANGER LE MOT DE PASSE
// ==========================

router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

module.exports = router;