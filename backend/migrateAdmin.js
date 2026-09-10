require("dotenv").config();

const supabase = require("./config/supabase");

const migrateAdmin = async () => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const passwordHash = process.env.ADMIN_PASSWORD;

    if (!email || !passwordHash) {
      throw new Error(
        "ADMIN_EMAIL ou ADMIN_PASSWORD est manquant dans le .env"
      );
    }

    const { data, error } = await supabase
      .from("admins")
      .insert([
        {
          email,
          password_hash: passwordHash,
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log("✅ Compte admin créé avec succès.");
    console.log("Email :", data.email);
  } catch (error) {
    console.error("❌ Erreur migration :", error.message);
  }
};

migrateAdmin();