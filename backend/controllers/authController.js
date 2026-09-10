const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const supabase = require("../config/supabase");

// ==========================
// LOGIN ADMIN
// ==========================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ==========================
    // VALIDATION
    // ==========================

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email et mot de passe obligatoires.",
      });
    }

    // ==========================
    // RECHERCHE ADMIN
    // ==========================

    const { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !admin) {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect.",
      });
    }

    // ==========================
    // VÉRIFICATION MOT DE PASSE
    // ==========================

    const isMatch = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect.",
      });
    }

    // ==========================
    // GÉNÉRATION JWT
    // ==========================

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // ==========================
    // RÉPONSE
    // ==========================

    return res.status(200).json({
      success: true,
      message: "Connexion réussie.",
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        role: "Administrateur",
        status: "Connecté",
      },
    });
  } catch (error) {
    console.error("ERREUR LOGIN :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur interne du serveur.",
    });
  }
};

// ==========================
// CHANGER LE MOT DE PASSE
// ==========================

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // ==========================
    // VALIDATION
    // ==========================

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "Le nouveau mot de passe doit contenir au moins 8 caractères.",
      });
    }

    // ==========================
    // ADMIN CONNECTÉ
    // ==========================

    const adminEmail = req.user.email;

    // ==========================
    // RÉCUPÉRATION ADMIN
    // ==========================

    const { data: admin, error } = await supabase
      .from("admins")
      .select("*")
      .eq("email", adminEmail)
      .single();

    if (error || !admin) {
      return res.status(404).json({
        success: false,
        message: "Compte administrateur introuvable.",
      });
    }

    // ==========================
    // VÉRIFICATION ANCIEN MOT DE PASSE
    // ==========================

    const isMatch = await bcrypt.compare(
      currentPassword,
      admin.password_hash
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Le mot de passe actuel est incorrect.",
      });
    }

    // ==========================
    // HASH NOUVEAU MOT DE PASSE
    // ==========================

    const newPasswordHash = await bcrypt.hash(
      newPassword,
      12
    );

    // ==========================
    // MISE À JOUR SUPABASE
    // ==========================

    const { error: updateError } = await supabase
      .from("admins")
      .update({
        password_hash: newPasswordHash,
        updated_at: new Date().toISOString(),
      })
      .eq("id", admin.id);

    if (updateError) {
      console.error(
        "ERREUR UPDATE PASSWORD :",
        updateError
      );

      return res.status(500).json({
        success: false,
        message: "Impossible de modifier le mot de passe.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mot de passe modifié avec succès.",
    });
  } catch (error) {
    console.error("ERREUR CHANGE PASSWORD :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur interne du serveur.",
    });
  }
};

// ==========================
// EXPORTS
// ==========================

module.exports = {
  login,
  changePassword,
};