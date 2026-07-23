import { useEffect, useState } from "react";

import { getRecentProjects } from "../services/dashboardService";

const useDashboardProjects = () => {

    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadProjects = async () => {

        try {

            setLoading(true);

            const data = await getRecentProjects();

            setProjects(data);

            setError("");

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadProjects();

    }, []);

    return {

        projects,

        loading,

        error,

        refreshProjects: loadProjects,

    };

};

export default useDashboardProjects;