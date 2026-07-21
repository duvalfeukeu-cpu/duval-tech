const jwt = require("jsonwebtoken");

// ==========================
// AUTH MIDDLEWARE
// ==========================

const authMiddleware = (req, res, next) => {
  try {

    // ==========================
    // RECUPERATION DU TOKEN
    // ==========================

     const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(401).json({
    success: false,
    message: "Token manquant ou mal formaté.",
  });
}


    // ==========================
    // FORMAT : Bearer TOKEN
    // ==========================

    const token = authHeader.split(" ")[1];

    if (!token) {

      return res.status(401).json({
        success: false,
        message: "Token invalide.",
      });

    }

    // ==========================
    // VERIFICATION JWT
    // ==========================

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // ==========================
    // STOCKAGE DES INFOS
    // ==========================

    req.user = decoded;

    next();

  } catch (error) {

    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Token expiré ou invalide.",
    });

  }
};

module.exports = authMiddleware;