import SkillCard from "./SkillCard";

const SkillsGrid = ({
  skills,
  onEdit,
}) => {

  // ==========================
  // AUCUNE COMPÉTENCE
  // ==========================

  if (skills.length === 0) {

    return (

      <div
        className="
          bg-white
          rounded-2xl
          shadow
          p-16
          text-center
        "
      >

        <h2 className="text-2xl font-bold text-slate-900">
          Aucune compétence trouvée
        </h2>

        <p className="text-slate-500 mt-3">
          Cliquez sur
          <span className="font-semibold">
            {" "}Ajouter une compétence
          </span>
          {" "}pour commencer.
        </p>

      </div>

    );

  }

  // ==========================
  // LISTE DES COMPÉTENCES
  // ==========================

  return (

    <div
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
    >

      {skills.map((skill) => (

        <SkillCard
          key={skill.id}
          skill={skill}
          onEdit={onEdit}
        />

      ))}

    </div>

  );

};

export default SkillsGrid;