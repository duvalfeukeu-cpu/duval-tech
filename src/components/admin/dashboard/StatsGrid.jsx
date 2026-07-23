import StatCard from "./StatCard";

const StatsGrid = ({ stats, loading }) => {

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
                title="Total Projets"
                value={loading ? "..." : stats.projects}
                icon="📁"
                color="bg-blue-100"
            />

            <StatCard
                title="Compétences"
                value={loading ? "..." : stats.skills}
                icon="💻"
                color="bg-green-100"
            />

            <StatCard
                title="Messages"
                value={loading ? "..." : stats.messages}
                icon="📩"
                color="bg-orange-100"
            />

            <StatCard
                title="Visiteurs"
                value={loading ? "..." : stats.visitors}
                icon="👀"
                color="bg-purple-100"
            />

        </div>

    );

};

export default StatsGrid;