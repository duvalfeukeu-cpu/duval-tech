require("dotenv").config();

console.log("URL =", process.env.SUPABASE_URL);
console.log("KEY =", process.env.SUPABASE_KEY ? "OK" : "MANQUANTE");

const express = require("express");
const cors = require("cors");
const supabase = require("./config/supabase");

const app = express();

app.use(cors());
app.use(express.json());

/* ==========================
   LOG DES REQUETES
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
   TEST POST
========================== */

app.post("/test-post", (req, res) => {
  console.log("POST TEST RECU");
  res.json({
    success: true,
    message: "POST OK"
  });
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

app.post("/api/projects", async (req, res) => {
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

    res.status(201).json(data);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message
    });
  }
});

/* ==========================
   MODIFIER PROJET
========================== */

app.put("/api/projects/:id", async (req, res) => {
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

app.delete("/api/projects/:id", async (req, res) => {
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
   DEMARRAGE SERVEUR
========================== */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});