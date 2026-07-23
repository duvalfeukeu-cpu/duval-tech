import { useEffect, useState } from "react";
import { getRecentActivity } from "../services/dashboardService";

const useDashboardActivity = () => {

    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadActivities = async () => {

        try {

            setLoading(true);

            const data = await getRecentActivity();

            setActivities(data);

            setError("");

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadActivities();

    }, []);

    return {

        activities,
        loading,
        error,
        refreshActivities: loadActivities,

    };

};

export default useDashboardActivity;