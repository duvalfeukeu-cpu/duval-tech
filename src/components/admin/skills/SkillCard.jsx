
const SkillCard = ({
  skill,
  onEdit,
  onDelete,
}) => {

  // ==========================
  // DELETE
  // ==========================


  return (

    <div
      className="
        bg-white
        rounded-3xl
        shadow-lg
        border
        border-slate-200
        p-7
        hover:shadow-xl
        transition-all
      "
    >

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">

            {skill.name}

          </h2>

          <span
            className="
              inline-block
              mt-3
              px-3
              py-1
              rounded-full
              bg-slate-100
              text-slate-600
              text-sm
            "
          >

            {skill.category}

          </span>

        </div>

        <div
          className="
            h-5
            w-5
            rounded-full
            border
          "
          style={{
            backgroundColor: skill.color,
          }}
        />

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="text-slate-600">
            Niveau
          </span>

          <span className="font-bold text-blue-600">

            {skill.level}%

          </span>

        </div>

        <div
          className="
            h-3
            rounded-full
            bg-slate-200
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              rounded-full
              transition-all
            "
            style={{
              width: `${skill.level}%`,
              backgroundColor:
                skill.color || "#2563eb",
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="flex gap-3 mt-8">

<button
  onClick={() => onDelete(skill)}
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

  );

};

export default SkillCard;