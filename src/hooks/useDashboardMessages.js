import { useEffect, useState } from "react";

import { getRecentMessages } from "../services/dashboardService";

const useDashboardMessages = () => {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const loadMessages = async () => {

        try {

            setLoading(true);

            const data = await getRecentMessages();

            setMessages(data);

            setError("");

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadMessages();

    }, []);

    return {

        messages,

        loading,

        error,

        refreshMessages: loadMessages,

    };

};

export default useDashboardMessages;