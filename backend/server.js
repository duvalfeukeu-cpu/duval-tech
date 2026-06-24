console.log("SERVER DEMARRE");
console.log("VERSION TEST 999");

const express = require("express");
const cors = require("cors");
const supabase = require("./config/supabase");

const app = express();

app.use(cors());
app.use(express.json());

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
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Erreur serveur"
    });
  }
});

/* ==========================
   AJOUTER UN PROJET
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
      error: "Erreur serveur"
    });
  }
});

/* ==========================
   MODIFIER UN PROJET
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
      error: "Erreur serveur"
    });
  }
});

/* ==========================
   SUPPRIMER UN PROJET
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
      error: "Erreur serveur"
    });
  }
});

/* ==========================
   DEMARRAGE SERVEUR
========================== */
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

const PORT = 5000;

console.log("AVANT APP LISTEN");

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});