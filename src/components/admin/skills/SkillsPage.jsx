import { useEffect, useState } from "react";

import SkillsGrid from "./SkillsGrid";
import SkillModal from "./SkillModal";

const API = "http://localhost:5000/api/skills";

const SkillsPage = () => {
  // ==========================
  // STATES
  // ==========================

  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

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
  // OPEN ADD MODAL
  // ==========================

  const handleAddSkill = () => {
    setSelectedSkill(null);
    setOpenModal(true);
  };

  // ==========================
  // OPEN EDIT MODAL
  // ==========================

  const handleEditSkill = (skill) => {
    setSelectedSkill(skill);
    setOpenModal(true);
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
        onDelete={loadSkills}
      />

      {/* MODAL */}

      <SkillModal
        open={openModal}
        skill={selectedSkill}
        onClose={handleCloseModal}
        onSuccess={loadSkills}
      />

    </div>
  );
};

export default SkillsPage;