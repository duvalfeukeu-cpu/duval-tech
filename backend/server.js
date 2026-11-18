require("dotenv").config();

const express = require("express");
const cors = require("cors");

const supabase = require("./config/supabase");

const dashboardRoutes = require("./routes/dashboardRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const skillsRoutes = require("./routes/skillsRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const authRoutes = require("./routes/authRoutes");

const authMiddleware = require("./middlewares/authMiddleware");
const rateLimit = require("express-rate-limit");

const app = express();


// ========================================
// CONFIGURATION
// ========================================

// Seuls ces sites peuvent appeler l'API depuis un navigateur.
// Pour en ajouter : variable ALLOWED_ORIGINS sur Render (séparées par des virgules).
const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  "https://duvalfeukeu.netlify.app,http://localhost:5173"
)
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Requêtes sans origine (Postman, serveur à serveur, Render health check)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    credentials: true,
  })
);

// Render est derrière un proxy : nécessaire pour identifier la vraie IP
app.set("trust proxy", 1);

// Anti force brute : 5 tentatives de connexion ratées / 15 min / IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  skipSuccessfulRequests: true,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { success: false, message: "Trop de tentatives. Réessayez dans 15 minutes." },
});

// Anti spam du formulaire de contact : 5 messages / heure / IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { success: false, message: "Trop de messages envoyés. Réessayez plus tard." },
});

app.use(express.json());


// ========================================
// LOG DES REQUÊTES
// ========================================

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// ========================================
// ROUTE PRINCIPALE
// ========================================

app.get("/", (req, res) => {
  res.status(200).send("API Duval Tech opérationnelle");
});


// ========================================
// ROUTE DE TEST
// ========================================

app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API test OK",
  });
});


// ========================================
// SETTINGS
// ========================================

app.use("/api/settings", settingsRoutes);


// ========================================
// DASHBOARD
// ========================================

// Tableau de bord : réservé à l'administrateur (contient les messages des visiteurs)
app.use("/api/dashboard", authMiddleware, dashboardRoutes);


// ========================================
// PROJECTS - GET
// ========================================

app.get("/api/projects", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      console.error("ERREUR SUPABASE PROJECTS :", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("ERREUR GET PROJECTS :", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// ========================================
// PROJECTS - POST
// ========================================

app.post("/api/projects", authMiddleware, async (req, res) => {
  try {
    console.log("POST /api/projects RECU");
    console.log(req.body);

    const {
      title,
      description,
      image,
      github,
      demo,
      technologies,
    } = req.body;

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          title,
          description,
          image,
          github,
          demo,
          technologies,
        },
      ])
      .select();

    if (error) {
      console.error("ERREUR SUPABASE :", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    console.log("PROJET AJOUTÉ :", data);

    res.status(201).json(data);
  } catch (err) {
    console.error("ERREUR POST PROJECT :", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// ========================================
// PROJECTS - PUT
// ========================================

app.put("/api/projects/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      image,
      github,
      demo,
      technologies,
    } = req.body;

    const { data, error } = await supabase
      .from("projects")
      .update({
        title,
        description,
        image,
        github,
        demo,
        technologies,
      })
      .eq("id", id)
      .select();

    if (error) {
      console.error("ERREUR SUPABASE UPDATE :", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("ERREUR PUT PROJECT :", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// ========================================
// PROJECTS - DELETE
// ========================================

app.delete("/api/projects/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("ERREUR SUPABASE DELETE :", error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Projet supprimé avec succès",
    });
  } catch (err) {
    console.error("ERREUR DELETE PROJECT :", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// ========================================
// UPLOAD
// ========================================

// Upload Cloudinary : réservé à l'administrateur
app.use("/api/upload", authMiddleware, uploadRoutes);


// ========================================
// AUTH
// ========================================

app.use("/api/auth/login", loginLimiter);
app.use("/api/auth", authRoutes);


// ========================================
// MESSAGES
// ========================================

app.use("/api/messages", (req, res, next) => (req.method === "POST" ? contactLimiter(req, res, next) : next()));
app.use("/api/messages", messageRoutes);


// ========================================
// SKILLS
// ========================================

app.use("/api/skills", skillsRoutes);


// ========================================
// GESTION DES ERREURS
// ========================================

app.use((err, req, res, next) => {
  console.error("ERREUR SERVEUR :", err);

  res.status(500).json({
    success: false,
    message: err.message || "Erreur interne du serveur.",
  });
});


// ========================================
// DEMARRAGE DU SERVEUR
// ========================================

// Render fournit automatiquement le port
const PORT = process.env.PORT || 5000;

// IMPORTANT POUR RENDER :
// écouter sur 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});