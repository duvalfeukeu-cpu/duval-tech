const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillsController");

// ==========================
// GET ALL SKILLS
// ==========================

router.get("/", getSkills);

// ==========================
// CREATE SKILL
// ==========================

router.post("/", authMiddleware, createSkill);

// ==========================
// UPDATE SKILL
// ==========================

router.put("/:id", authMiddleware, updateSkill);

// ==========================
// DELETE SKILL
// ==========================

router.delete("/:id", authMiddleware, deleteSkill);

module.exports = router;