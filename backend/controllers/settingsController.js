const supabase = require("../config/supabase");

// ==========================
// GET SETTINGS
// ==========================

const getSettings = async (req, res) => {

  try {

    const { data, error } = await supabase
      .from("settings")
      .select(`
        id,
        fullname,
        title,
        bio,
        email,
        phone,
        location,
        github,
        linkedin,
        facebook,
        youtube,
        avatar,
        updated_at
      `)
      .limit(1)
      .single();

    if (error) {
      return res.status(500).json({
        message: error.message,
      });
    }

    res.json(data);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }

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
      email,
      phone,
      location,
      github,
      linkedin,
      facebook,
      youtube,
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
        email,
        phone,
        location,
        github,
        linkedin,
        facebook,
        youtube,
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