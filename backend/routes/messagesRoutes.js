const express = require("express");

const router = express.Router();

const {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messagesController");

/* ==========================
   GET TOUS LES MESSAGES
========================== */

router.get("/", getMessages);

/* ==========================
   AJOUTER UN MESSAGE
========================== */

router.post("/", createMessage);

/* ==========================
   MODIFIER UN MESSAGE
========================== */

router.put("/:id", updateMessage);

/* ==========================
   SUPPRIMER UN MESSAGE
========================== */

router.delete("/:id", deleteMessage);

module.exports = router;