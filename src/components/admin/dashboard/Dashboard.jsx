import StatsGrid from "./StatsGrid";
import RecentProjects from "./RecentProjects";
import RecentMessages from "./RecentMessages";
import RecentActivity from "./RecentActivity";

import useDashboardStats from "../../../hooks/useDashboardStats";
import useDashboardProjects from "../../../hooks/useDashboardProjects";
import useDashboardMessages from "../../../hooks/useDashboardMessages";
import useDashboardActivity from "../../../hooks/useDashboardActivity";

const Dashboard = () => {

    // ============================
    // Données
    // ============================

    const {
        stats,
        loading: statsLoading,
        error: statsError,
    } = useDashboardStats();

    const {
        projects,
        loading: projectsLoading,
        error: projectsError,
    } = useDashboardProjects();

    const {
        messages,
        loading: messagesLoading,
        error: messagesError,
    } = useDashboardMessages();

    const {
        activities,
        loading: activitiesLoading,
        error: activitiesError,
    } = useDashboardActivity();

    // ============================
    // Gestion des erreurs
    // ============================

    const error =
        statsError ||
        projectsError ||
        messagesError ||
        activitiesError;

    if (error) {

        return (

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-600">

                {error}

            </div>

        );

    }

    return (

        <div className="space-y-8">

            {/* Statistiques */}

            <StatsGrid
                stats={stats}
                loading={statsLoading}
            />

            {/* Projets + Activités */}

            <div className="grid xl:grid-cols-3 gap-8">

                <div className="xl:col-span-2">

                    <RecentProjects
                        projects={projects}
                        loading={projectsLoading}
                    />

                </div>

                <RecentActivity
                    activities={activities}
                    loading={activitiesLoading}
                />

            </div>

            {/* Messages */}

            <RecentMessages
                messages={messages}
                loading={messagesLoading}
            />

        </div>

    );

};

export default Dashboard;