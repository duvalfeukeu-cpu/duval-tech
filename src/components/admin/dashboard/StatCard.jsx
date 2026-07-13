const StatCard = ({ title, value, icon, color }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        flex
        items-center
        justify-between
        hover:shadow-lg
        transition
      "
    >
      <div>
        <p className="text-slate-500 text-sm">{title}</p>

        <h2 className="text-4xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`
          ${color}
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
        `}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;