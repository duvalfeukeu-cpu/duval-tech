import StatsGrid from "./StatsGrid";
import RecentProjects from "./RecentProjects";
import RecentMessages from "./RecentMessages";
import RecentActivity from "./RecentActivity";
// import DashboardChart from "./DashboardChart";

const Dashboard = () => {
  return (
    <div className="space-y-8">

      <StatsGrid />

      <div className="grid lg:grid-cols-2 gap-8">

        <RecentProjects />

        <RecentActivity />

      </div>

      <RecentMessages />

      {/* <DashboardChart /> */}

    </div>
  );
};

export default Dashboard;