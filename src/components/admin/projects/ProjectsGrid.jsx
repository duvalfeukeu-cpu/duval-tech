import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({
  projects,
  onEdit,
  onDelete,
}) => {

  if (projects.length === 0) {

    return (

      <div className="bg-white rounded-2xl shadow p-16 text-center">

        <h2 className="text-2xl font-bold">
          Aucun projet trouvé
        </h2>

        <p className="text-slate-500 mt-3">
          Cliquez sur "Ajouter un projet" pour commencer.
        </p>

      </div>

    );

  }

  return (

    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      ))}

    </div>

  );

};

export default ProjectsGrid;