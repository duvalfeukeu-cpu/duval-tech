require("dotenv").config();

const express = require("express");
const cors = require("cors");

const supabase = require("./config/supabase");

const uploadRoutes = require("./routes/uploadRoutes");
const skillsRoutes = require("./routes/skillsRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

console.log("URL =", process.env.SUPABASE_URL);
console.log(
  "KEY PREFIX =",
  process.env.SUPABASE_KEY?.substring(0, 30)
);

const app = express();

app.use(cors());
app.use(express.json());

/* ==========================
   LOG DES REQUÊTES
========================== */

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

/* ==========================
   ROUTE PRINCIPALE
========================== */

app.get("/", (req, res) => {
  res.send("API Duval Tech opérationnelle");
});

/* ==========================
   TEST GET
========================== */

app.get("/test", (req, res) => {
  res.send("test ok");
});

/* ==========================
   GET TOUS LES PROJETS
========================== */

app.get("/api/projects", async (req, res) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*");

  console.log("DATA =", data);
  console.log("ERROR =", error);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

/* ==========================
   AJOUTER PROJET
========================== */

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
      technologies
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
          technologies
        }
      ])
      .select();

    if (error) {
      console.log("ERREUR SUPABASE :", error);
      return res.status(500).json(error);
    }

    console.log("PROJET AJOUTÉ :", data);

    res.status(201).json(data);

  } catch (err) {
    console.error("ERREUR :", err);

    res.status(500).json({
      message: err.message
    });
  }
});

/* ==========================
   AUTRES ROUTES
========================== */

app.use("/api/upload", uploadRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

/* ==========================
   MODIFIER PROJET
========================== */

app.put("/api/projects/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      image,
      github,
      demo,
      technologies
    } = req.body;

    const { data, error } = await supabase
      .from("projects")
      .update({
        title,
        description,
        image,
        github,
        demo,
        technologies
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
      message: err.message
    });
  }
});

/* ==========================
   SUPPRIMER PROJET
========================== */

app.delete("/api/projects/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json(error);
    }

    res.json({
      message: "Projet supprimé avec succès"
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message
    });
  }
});
/* ==========================
   UPLOAD IMAGE
========================== */


app.use("/api/upload", uploadRoutes);

/* ==========================
   AUTH
========================== */

app.use("/api/auth", authRoutes);
/* ==========================
   MESSAGES
========================== */

app.use("/api/messages", messageRoutes);

/* ==========================
   SKILLS ROUTES
========================== */

app.use("/api/skills", skillsRoutes);

/* ==========================
   DEMARRAGE SERVEUR
========================== */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});