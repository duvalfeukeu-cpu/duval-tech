const ProjectsHeader = () => {
  return (
    <div className="flex justify-between items-center">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Gestion des projets
        </h1>

        <p className="text-slate-500 mt-2">
          Gérez tous les projets de votre portfolio.
        </p>

      </div>

      <button
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
        ➕ Ajouter un projet
      </button>

    </div>
  );
};

export default ProjectsHeader;