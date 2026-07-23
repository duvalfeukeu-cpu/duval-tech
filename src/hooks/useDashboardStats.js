import { useEffect, useState } from "react";

import { getDashboardStats } from "../services/dashboardService";

const useDashboardStats = () => {

    const [stats, setStats] = useState({

        projects: 0,

        skills: 0,

        messages: 0,

        visitors: 0,

    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadStats = async () => {

        try {

            setLoading(true);

            const data = await getDashboardStats();

            setStats(data);

            setError("");

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadStats();

    }, []);

    return {

        stats,

        loading,

        error,

        refreshStats: loadStats,

    };

};

export default useDashboardStats;
