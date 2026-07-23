const API =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

export const getDashboardStats = async () => {

    const response = await fetch(
        `${API}/api/dashboard/stats`
    );

    const data = await response.json();

    if (!response.ok) {

        throw new Error(
            data.message ||
            "Impossible de charger les statistiques."
        );

    }

    return data.stats;

};
export const getRecentProjects = async () => {

    const response = await fetch(
        `${API}/api/dashboard/recent-projects`
    );

    const data = await response.json();

    if (!response.ok) {

        throw new Error(
            data.message ||
            "Impossible de récupérer les projets."
        );

    }

    return data.projects;

};
export const getRecentMessages = async () => {

    const response = await fetch(
        `${API}/api/dashboard/recent-messages`
    );

    const data = await response.json();

    if (!response.ok) {

        throw new Error(
            data.message ||
            "Impossible de récupérer les messages."
        );

    }

    return data.messages;

};
export const getRecentActivity = async () => {

    const response = await fetch(
        `${API}/api/dashboard/recent-activity`
    );

    const data = await response.json();

    if (!response.ok) {

        throw new Error(
            data.message ||
            "Impossible de récupérer les activités."
        );

    }

    return data.activities;

};