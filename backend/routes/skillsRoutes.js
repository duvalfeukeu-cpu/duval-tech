const express = require("express");

const router = express.Router();

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

router.post("/", createSkill);

// ==========================
// UPDATE SKILL
// ==========================

router.put("/:id", updateSkill);

// ==========================
// DELETE SKILL
// ==========================

router.delete("/:id", deleteSkill);

module.exports = router;