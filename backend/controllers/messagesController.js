const supabase = require("../config/supabase");

/* ==========================
   GET TOUS LES MESSAGES
========================== */

const getMessages = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

/* ==========================
   AJOUTER UN MESSAGE
========================== */

const createMessage = async (req, res) => {
  try {

    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires.",
      });
    }

    const { data, error } = await supabase
      .from("messages")
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ])
      .select();

    if (error) {
      return res.status(500).json(error);
    }

    res.status(201).json(data);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};
/* ==========================
   MODIFIER UN MESSAGE
========================== */

const updateMessage = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      is_read,
    } = req.body;

    const { data, error } = await supabase
      .from("messages")
      .update({
        is_read,
      })
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};
/* ==========================
   SUPPRIMER UN MESSAGE
========================== */

const deleteMessage = async (req, res) => {
  try {

    const { id } = req.params;

    const { error } = await supabase
      .from("messages")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json(error);
    }

    res.json({
      message: "Message supprimé avec succès",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

/* ==========================
   EXPORTS
========================== */

module.exports = {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
};