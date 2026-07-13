import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Total Projets"
        value="12"
        icon="📁"
        color="bg-blue-100"
      />

      <StatCard
        title="Compétences"
        value="18"
        icon="💻"
        color="bg-green-100"
      />

      <StatCard
        title="Messages"
        value="5"
        icon="📩"
        color="bg-orange-100"
      />

      <StatCard
        title="Visiteurs"
        value="---"
        icon="👀"
        color="bg-purple-100"
      />

    </div>
  );
};

export default StatsGrid;