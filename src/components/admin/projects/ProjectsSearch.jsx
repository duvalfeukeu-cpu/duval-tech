const ProjectsSearch = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">

      <input
        type="text"
        placeholder="🔍 Rechercher un projet..."
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

    </div>
  );
};

export default ProjectsSearch;