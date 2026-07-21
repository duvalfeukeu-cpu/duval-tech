import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API = "http://localhost:5000/api/skills";

const initialForm = {
  name: "",
  level: 0,
  category: "Frontend",
  icon: "",
  color: "#2563eb",
  display_order: 0,
};

const SkillModal = ({
  open,
  onClose,
  onSuccess,
  skill = null,
}) => {

  // ==========================
  // STATES
  // ==========================

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(initialForm);

  // ==========================
  // PRE-REMPLISSAGE
  // ==========================

  useEffect(() => {

    if (skill) {

      setForm({
        name: skill.name || "",
        level: skill.level || 0,
        category: skill.category || "Frontend",
        icon: skill.icon || "",
        color: skill.color || "#2563eb",
        display_order: skill.display_order || 0,
      });

    } else {

      setForm(initialForm);

    }

  }, [skill]);

  // ==========================
  // FERMER
  // ==========================

  if (!open) return null;

  // ==========================
  // HANDLE CHANGE
  // ==========================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "level" ||
        name === "display_order"
          ? Number(value)
          : value,
    }));

  };
    // ==========================
  // SUBMIT
  // ==========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    // ==========================
    // VALIDATION
    // ==========================

    if (!form.name.trim()) {
      toast.error("Le nom est obligatoire.");
      return;
    }

    if (form.level < 0 || form.level > 100) {
      toast.error("Le niveau doit être compris entre 0 et 100.");
      return;
    }

    if (!form.category.trim()) {
      toast.error("Veuillez choisir une catégorie.");
      return;
    }

    try {

      setLoading(true);

      // ==========================
      // POST OU PUT
      // ==========================
      const url = skill
  ? `${API}/${skill.id}`
  : API;

const method = skill
  ? "PUT"
  : "POST";

const token = localStorage.getItem("token");

const response = await fetch(url, {
  method,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(form),
});

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Erreur serveur."
        );
      }

      // ==========================
      // SUCCESS
      // ==========================

      toast.success(
        skill
          ? "Compétence modifiée avec succès !"
          : "Compétence ajoutée avec succès !"
      );

      setForm(initialForm);

      if (onSuccess) {
        await onSuccess();
      }

      onClose();

    } catch (error) {

      console.error(error);

      toast.error(
        error.message || "Une erreur est survenue."
      );

    } finally {

      setLoading(false);

    }

  };
    // ==========================
  // UI
  // ==========================

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        p-6
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          rounded-3xl
          bg-white
          shadow-2xl
          overflow-hidden
        "
      >

        {/* HEADER */}

        <div className="flex items-center justify-between border-b px-8 py-6">

          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              {skill
                ? "Modifier une compétence"
                : "Ajouter une compétence"}
            </h2>

            <p className="text-slate-500 mt-1">
              {skill
                ? "Modifiez les informations de cette compétence."
                : "Ajoutez une nouvelle compétence à votre portfolio."}
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              w-10
              h-10
              rounded-full
              hover:bg-slate-100
              transition
              text-xl
            "
          >
            ✕
          </button>

        </div>

        {/* BODY */}

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            {/* Nom */}

            <div>

              <label className="block mb-2 font-semibold">
                Nom *
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="React"
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            {/* Niveau */}

            <div>

              <label className="block mb-2 font-semibold">
                Niveau *
              </label>

              <input
                type="number"
                min="0"
                max="100"
                name="level"
                value={form.level}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            {/* Catégorie */}

            <div>

              <label className="block mb-2 font-semibold">
                Catégorie
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Base de données">Base de données</option>
                <option value="Outils">Outils</option>
                <option value="IA">IA</option>
              </select>

            </div>

            {/* Icône */}

            <div>

              <label className="block mb-2 font-semibold">
                Icône
              </label>

              <input
                type="text"
                name="icon"
                value={form.icon}
                onChange={handleChange}
                placeholder="react"
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            {/* Couleur */}

            <div>

              <label className="block mb-2 font-semibold">
                Couleur
              </label>

              <input
                type="color"
                name="color"
                value={form.color}
                onChange={handleChange}
                className="
                  w-full
                  h-12
                  border
                  rounded-xl
                  cursor-pointer
                "
              />

            </div>

            {/* Ordre */}

            <div>

              <label className="block mb-2 font-semibold">
                Ordre d'affichage
              </label>

              <input
                type="number"
                name="display_order"
                value={form.display_order}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

          </div>

          {/* FOOTER */}

          <div className="flex justify-end gap-4 border-t pt-6">

            <button
              type="button"
              onClick={onClose}
              className="
                px-6
                py-3
                rounded-xl
                border
                hover:bg-slate-100
                transition
              "
            >
              Annuler
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                bg-blue-600
                hover:bg-blue-700
                disabled:bg-blue-400
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              {loading
                ? "Enregistrement..."
                : skill
                ? "Mettre à jour"
                : "Enregistrer"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default SkillModal;