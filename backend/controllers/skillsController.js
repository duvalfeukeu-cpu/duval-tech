const supabase = require("../config/supabase");

// ==========================
// GET ALL SKILLS
// ==========================

const getSkills = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("display_order", { ascending: true });

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

// ==========================
// CREATE SKILL
// ==========================

const createSkill = async (req, res) => {
  try {

    const {
      name,
      level,
      category,
      icon,
      color,
      display_order,
    } = req.body;

    const { data, error } = await supabase
      .from("skills")
      .insert([
        {
          name,
          level,
          category,
          icon,
          color,
          display_order,
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

// ==========================
// UPDATE SKILL
// ==========================

const updateSkill = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      name,
      level,
      category,
      icon,
      color,
      display_order,
    } = req.body;

    const { data, error } = await supabase
      .from("skills")
      .update({
        name,
        level,
        category,
        icon,
        color,
        display_order,
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

// ==========================
// DELETE SKILL
// ==========================

const deleteSkill = async (req, res) => {
  try {

    const { id } = req.params;

    const { error } = await supabase
      .from("skills")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json(error);
    }

    res.json({
      message: "Compétence supprimée avec succès.",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

module.exports = {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};