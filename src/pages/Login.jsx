import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { useAuth } from "../contexts/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  // ==========================
  // STATES
  // ==========================

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ==========================
  // HANDLE INPUTS
  // ==========================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  };
    // ==========================
  // HANDLE SUBMIT
  // ==========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    // ==========================
    // VALIDATION
    // ==========================

    if (
      !form.email.trim() ||
      !form.password.trim()
    ) {

      toast.error(
        "Veuillez remplir tous les champs."
      );

      return;

    }

    try {

      setLoading(true);

      // ==========================
      // LOGIN
      // ==========================

      const result = await login(
        form.email,
        form.password
      );

      if (!result.success) {

        throw new Error(
          result.message || "Connexion impossible."
        );

      }

      toast.success(
        "Connexion réussie !"
      );

      // ==========================
      // REDIRECTION
      // ==========================

      navigate("/admin");

    } catch (error) {

      console.error(error);

      toast.error(
        error.message ||
        "Une erreur est survenue."
      );

    } finally {

      setLoading(false);

    }

  };
    return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-blue-950
        flex
        items-center
        justify-center
        px-6
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-2xl
          p-10
        "
      >

        {/* ==========================
            HEADER
        ========================== */}

        <div className="text-center mb-10">

          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            DUVAL TECH
          </h1>

          <p
            className="
              mt-3
              text-slate-500
            "
          >
            Connexion à l'administration
          </p>

        </div>

        {/* ==========================
            FORMULAIRE
        ========================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* EMAIL */}

          <div>

            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-300
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition
              "
            />

          </div>

          {/* MOT DE PASSE */}

          <div>

            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
              "
            >
              Mot de passe
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Votre mot de passe"
              className="
                w-full
                p-4
                rounded-xl
                border
                border-slate-300
                outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition
              "
            />

          </div>

          {/* BOUTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              disabled:bg-blue-400
              disabled:cursor-not-allowed
              text-white
              font-semibold
              text-lg
              transition
            "
          >
            {loading
              ? "Connexion..."
              : "Se connecter"}
          </button>

        </form>

      </div>

    </div>
  );
    // ==========================
  // REDIRECTION SI DEJA CONNECTE
  // ==========================

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {

    navigate("/admin");

    return null;

  }
  };

export default Login;