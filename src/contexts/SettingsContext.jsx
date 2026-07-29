import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const SettingsContext = createContext(null);

const API = `${import.meta.env.VITE_API_URL}/api/settings`;

export const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    // ==========================
    // Charger les paramètres
    // ==========================

    const loadSettings = async () => {

        try {

            setLoading(true);

            setError(null);
            console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);

            const response = await fetch(API);

            if (!response.ok) {

                throw new Error("Impossible de charger les paramètres.");

            }

            const data = await response.json();

            setSettings(data);

        } catch (err) {

            console.error(err);

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadSettings();

    }, []);

    // ==========================
    // Mise à jour locale
    // ==========================

    const updateSettings = (newValues) => {

        setSettings((prev) => ({

            ...prev,

            ...newValues,

        }));

    };

    return (

        <SettingsContext.Provider
            value={{

                settings,

                setSettings,

                updateSettings,

                loading,

                error,

                refreshSettings: loadSettings,

            }}
        >

            {children}

        </SettingsContext.Provider>

    );

};

export const useSettings = () => {

    const context = useContext(SettingsContext);

    if (!context) {

        throw new Error(
            "useSettings doit être utilisé à l'intérieur du SettingsProvider."
        );

    }

    return context;

};