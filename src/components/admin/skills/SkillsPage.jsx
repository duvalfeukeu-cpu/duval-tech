import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import SkillsGrid from "./SkillsGrid";
import SkillModal from "./SkillModal";
import DeleteModal from "../projects/DeleteModal"; // <-- adapte le chemin si besoin

const API = "http://localhost:5000/api/skills";

const SkillsPage = () => {

  // ==========================
  // STATES
  // ==========================

  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // DELETE

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // ==========================
  // LOAD SKILLS
  // ==========================

  const loadSkills = async () => {

    try {

      const response = await fetch(API);

      const data = await response.json();

      setSkills(data);

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    loadSkills();

  }, []);

  // ==========================
  // FILTER
  // ==========================

  const filteredSkills = skills.filter((skill) =>
    skill.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  // ==========================
  // ADD
  // ==========================

  const handleAddSkill = () => {

    setSelectedSkill(null);

    setOpenModal(true);

  };

  // ==========================
  // EDIT
  // ==========================

  const handleEditSkill = (skill) => {

    setSelectedSkill(skill);

    setOpenModal(true);

  };

  // ==========================
  // DELETE
  // ==========================

  const handleDeleteSkill = (skill) => {

    setSelectedSkill(skill);

    setDeleteModalOpen(true);

  };

  const confirmDelete = async () => {

    try {

      setLoadingDelete(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API}/${selectedSkill.id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {

        throw new Error(
          data.message || "Impossible de supprimer."
        );

      }

      toast.success("Compétence supprimée avec succès !");

      await loadSkills();

      setDeleteModalOpen(false);

      setSelectedSkill(null);

    } catch (error) {

      console.error(error);

      toast.error(error.message);

    } finally {

      setLoadingDelete(false);

    }

  };

  // ==========================
  // CLOSE MODAL
  // ==========================

  const handleCloseModal = () => {

    setOpenModal(false);

    setSelectedSkill(null);

  };

  // ==========================
  // UI
  // ==========================

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Gestion des compétences
          </h1>

          <p className="text-slate-500 mt-2">
            Gérez les compétences de votre portfolio.
          </p>

        </div>

        <button
          onClick={handleAddSkill}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition
          "
        >
          ➕ Ajouter une compétence
        </button>

      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="🔍 Rechercher une compétence..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          border
          border-slate-300
          rounded-xl
          p-4
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      {/* GRID */}

      <SkillsGrid
        skills={filteredSkills}
        onEdit={handleEditSkill}
        onDelete={handleDeleteSkill}
      />

      {/* MODAL AJOUT / MODIFICATION */}

      <SkillModal
        open={openModal}
        skill={selectedSkill}
        onClose={handleCloseModal}
        onSuccess={loadSkills}
      />

      {/* MODAL SUPPRESSION */}

      <DeleteModal
        open={deleteModalOpen}
        item={selectedSkill}
        type="compétence"
        loading={loadingDelete}
        onClose={() => {

          setDeleteModalOpen(false);

          setSelectedSkill(null);

        }}
        onConfirm={confirmDelete}
      />

    </div>

  );

};

export default SkillsPage;