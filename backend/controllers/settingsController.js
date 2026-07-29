const supabase = require("../config/supabase");

// ==========================
// GET SETTINGS
// ==========================

const getSettings = async (req, res) => {

  const { data, error } = await supabase
    .from("settings")
    .select("*");

  return res.json({
    data,
    error,
  });

};
// ==========================
// UPDATE SETTINGS
// ==========================

const updateSettings = async (req, res) => {

  try {

    const {
      fullname,
      title,
      bio,
      avatar,
    } = req.body;

    // récupérer la ligne unique

    const { data: current, error: currentError } = await supabase
      .from("settings")
      .select("id")
      .limit(1)
      .single();

    if (currentError) {

      return res.status(500).json({
        message: currentError.message,
      });

    }

    const { data, error } = await supabase
      .from("settings")
      .update({
        fullname,
        title,
        bio,
        avatar,
        updated_at: new Date().toISOString(),
      })
      .eq("id", current.id)
      .select()
      .single();

    if (error) {

      return res.status(500).json({
        message: error.message,
      });

    }

    res.json({
      message: "Paramètres mis à jour avec succès.",
      settings: data,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }

};

module.exports = {
  getSettings,
  updateSettings,
};