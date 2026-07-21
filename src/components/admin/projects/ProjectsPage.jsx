import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProjectsGrid from "./ProjectsGrid";
import ProjectModal from "./ProjectModal";
import DeleteModal from "./DeleteModal";

const API = "http://localhost:5000/api/projects"

const ProjectsPage = () => {
  // ===========================
  // STATES
  // ===========================

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // DELETE
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // ===========================
  // LOAD PROJECTS
  // ===========================

  const loadProjects = async () => {
    try {
      const response = await fetch(API);

      const data = await response.json();

      setProjects(data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // ===========================
  // FILTER
  // ===========================

  const filteredProjects = projects.filter((project) =>
    project.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  // ===========================
  // ADD
  // ===========================

  const handleAddProject = () => {
    setSelectedProject(null);
    setOpenModal(true);
  };

  // ===========================
  // EDIT
  // ===========================

  const handleEditProject = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  // ===========================
  // DELETE
  // ===========================

  const handleDeleteProject = (project) => {
    setSelectedProject(project);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {

    try {

      setLoadingDelete(true);

      await fetch(
        `${API}/${selectedProject.id}`,
        {
          method: "DELETE",
        }
      );

      await loadProjects();

       toast.success("Projet supprimé avec succès !");

      setDeleteModalOpen(false);
      setSelectedProject(null);

    } catch (err) {

      console.log(err);
      toast.error("Impossible de supprimer le projet.");

    } finally {

      setLoadingDelete(false);

    }

  };

  // ===========================
  // CLOSE MODAL
  // ===========================

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  // ===========================
  // UI
  // ===========================

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Gestion des projets
          </h1>

          <p className="text-slate-500 mt-2">
            Gérez les projets de votre portfolio.
          </p>

        </div>

        <button
          onClick={handleAddProject}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
          "
        >
          ➕ Ajouter un projet
        </button>

      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="🔍 Rechercher un projet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          border
          rounded-xl
          p-4
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      {/* GRID */}

      <ProjectsGrid
        projects={filteredProjects}
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />

      {/* MODAL AJOUT / MODIFICATION */}

      <ProjectModal
        open={openModal}
        project={selectedProject}
        onClose={handleCloseModal}
        onSuccess={loadProjects}
      />

      {/* MODAL DELETE */}

      <DeleteModal
        open={deleteModalOpen}
        project={selectedProject}
        loading={loadingDelete}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedProject(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>
  );
};

export default ProjectsPage;