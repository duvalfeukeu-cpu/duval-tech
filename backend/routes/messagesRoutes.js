const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messagesController");

/* ==========================
   GET TOUS LES MESSAGES
========================== */

router.get("/", authMiddleware, getMessages);

/* ==========================
   AJOUTER UN MESSAGE
========================== */

router.post("/", createMessage);

/* ==========================
   MODIFIER UN MESSAGE
========================== */

router.put("/:id", authMiddleware, updateMessage);

/* ==========================
   SUPPRIMER UN MESSAGE
========================== */

router.delete("/:id", authMiddleware, deleteMessage);

module.exports = router;