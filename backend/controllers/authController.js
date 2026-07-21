const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
        message: "Email et mot de passe obligatoires."
      });

    }

    // ==========================
    // VARIABLES .ENV
    // ==========================

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // ==========================
    // VERIFICATION EMAIL
    // ==========================

    if (email !== adminEmail) {

      return res.status(401).json({
        message: "Email ou mot de passe incorrect."
      });

    }

    // ==========================
    // VERIFICATION MOT DE PASSE
    // ==========================

    const isMatch = await bcrypt.compare(
      password,
      adminPassword
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Email ou mot de passe incorrect."
      });

    }
        // ==========================
    // GENERATION DU TOKEN JWT
    // ==========================

    const token = jwt.sign(
      {
        email: adminEmail,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // ==========================
    // REPONSE
    // ==========================

    return res.status(200).json({
      success: true,
      message: "Connexion réussie.",
      token,
      admin: {
        email: adminEmail,
      },
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Erreur interne du serveur.",
    });

  }
};

module.exports = {
  login,
};