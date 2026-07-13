const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
        border
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      {/* Contenu */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-slate-800">
          {project.title}
        </h2>

        <p className="text-slate-600 mt-3 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies
            ?.split(",")
            .map((tech, index) => (

              <span
                key={index}
                className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                {tech.trim()}
              </span>

            ))}

        </div>

        {/* Liens */}

        <div className="flex gap-3 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              border
              border-slate-300
              py-3
              rounded-xl
              hover:bg-slate-100
              transition
            "
          >
            Github
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              transition
            "
          >
            Démo
          </a>

        </div>

        {/* Actions */}

        <div className="flex gap-3 mt-5">

          <button
            onClick={() => onEdit(project)}
            className="
              flex-1
              bg-yellow-500
              hover:bg-yellow-600
              text-white
              py-3
              rounded-xl
              transition
            "
          >
            ✏ Modifier
          </button>

          <button
            onClick={() => onDelete(project)}
            className="
              flex-1
              bg-red-600
              hover:bg-red-700
              text-white
              py-3
              rounded-xl
              transition
            "
          >
            🗑 Supprimer
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;