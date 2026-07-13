const ProjectsFilters = () => {

  const filters = [
    "Tous",
    "React",
    "Node",
    "Laravel",
    "HTML",
    "CSS"
  ];

  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => (

        <button
          key={filter}
          className="
            px-5
            py-2
            rounded-full
            bg-white
            border
            hover:bg-blue-600
            hover:text-white
            transition
          "
        >
          {filter}
        </button>

      ))}

    </div>
  );
};

export default ProjectsFilters;