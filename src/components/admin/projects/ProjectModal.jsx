import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PROJECT_API = "http://localhost:5000/api/projects";
const UPLOAD_API = "http://localhost:5000/api/upload";

const initialForm = {
  title: "",
  description: "",
  image: "",
  github: "",
  demo: "",
  technologies: "",
};

const ProjectModal = ({
  open,
  onClose,
  onSuccess,
  project = null,
}) => {

  // ==========================
  // STATES
  // ==========================

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [preview, setPreview] = useState("");

  const [form, setForm] = useState(initialForm);

  // ==========================
  // PRE-REMPLISSAGE
  // ==========================

  useEffect(() => {

    if (project) {

      setForm({
        title: project.title || "",
        description: project.description || "",
        image: project.image || "",
        github: project.github || "",
        demo: project.demo || "",
        technologies: project.technologies || "",
      });

      setPreview(project.image || "");

    } else {

      setForm(initialForm);
      setPreview("");

    }

  }, [project]);

  // ==========================
  // FERMER
  // ==========================

  if (!open) return null;

  // ==========================
  // INPUTS
  // ==========================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  // ==========================
  // UPLOAD IMAGE
  // ==========================

  const handleImageUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {

      setUploading(true);

      const response = await fetch(UPLOAD_API, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setForm((prev) => ({
        ...prev,
        image: data.imageUrl,
      }));

      toast.success("Image uploadée avec succès !");

    } catch (error) {

      console.error(error);

      toast.error("Impossible d'envoyer l'image.");

    } finally {

      setUploading(false);

    }

  };
    // ==========================
  // ENREGISTRER LE PROJET
  // ==========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.image.trim()
    ) {

      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;

    }

    try {

      setLoading(true);

      const url = project
        ? `${PROJECT_API}/${project.id}`
        : PROJECT_API;

      const method = project
        ? "PUT"
        : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Erreur lors de l'enregistrement."
        );
      }

      toast.success(
        project
          ? "Projet modifié avec succès !"
          : "Projet ajouté avec succès !"
      );

      setForm(initialForm);
      setPreview("");

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
          max-w-4xl
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
              {project
                ? "Modifier le projet"
                : "Ajouter un projet"}
            </h2>

            <p className="text-slate-500 mt-1">
              {project
                ? "Modifiez les informations du projet."
                : "Ajoutez un nouveau projet à votre portfolio."}
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
            "
          >
            ✕
          </button>

        </div>

        {/* BODY */}

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6 max-h-[80vh] overflow-y-auto"
        >

          <div className="grid md:grid-cols-2 gap-6">

            {/* Titre */}

            <div>

              <label className="font-semibold block mb-2">
                Titre *
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

            </div>

            {/* Image */}

            <div>

              <label className="font-semibold block mb-2">
                Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                "
              />

              {uploading && (

                <p className="text-blue-600 mt-2">
                  Upload en cours...
                </p>

              )}

              {(preview || form.image) && (

                <img
                  src={preview || form.image}
                  alt="preview"
                  className="
                    mt-4
                    rounded-xl
                    h-56
                    w-full
                    object-cover
                    border
                  "
                />

              )}

            </div>

            {/* Description */}

            <div className="md:col-span-2">

              <label className="font-semibold block mb-2">
                Description *
              </label>

              <textarea
                rows="5"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  resize-none
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />

            </div>

            {/* Github */}

            <div>

              <label className="font-semibold block mb-2">
                Github
              </label>

              <input
                type="text"
                name="github"
                value={form.github}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                "
              />

            </div>

            {/* Demo */}

            <div>

              <label className="font-semibold block mb-2">
                Démo
              </label>

              <input
                type="text"
                name="demo"
                value={form.demo}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
                "
              />

            </div>

            {/* Technologies */}

            <div className="md:col-span-2">

              <label className="font-semibold block mb-2">
                Technologies
              </label>

              <input
                type="text"
                name="technologies"
                value={form.technologies}
                onChange={handleChange}
                placeholder="React, Node, Express..."
                className="
                  w-full
                  border
                  rounded-xl
                  p-3
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
              "
            >
              Annuler
            </button>

            <button
              type="submit"
              disabled={loading || uploading}
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
                : project
                ? "Mettre à jour"
                : "Enregistrer"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ProjectModal;