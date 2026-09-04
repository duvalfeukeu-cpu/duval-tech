import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const SettingsContext = createContext(null);

const API = `${import.meta.env.VITE_API_URL}/api/settings`;

export const SettingsProvider = ({ children }) => {

    // ==========================
    // Paramètres par défaut
    // ==========================

    const [settings, setSettings] = useState({
        fullname: "Feukeu Duval",
        title: "Développeur Full-Stack",
        bio: "Je développe des applications web modernes, performantes et évolutives avec React, Node.js, Express et Supabase.",
        avatar: "",
    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    // ==========================
    // Charger les paramètres
    // ==========================

    const loadSettings = async () => {

        try {

            setLoading(true);

            setError(null);

            console.log(
                "VITE_API_URL =",
                import.meta.env.VITE_API_URL
            );

            const response = await fetch(API);

            if (!response.ok) {

                throw new Error(
                    "Impossible de charger les paramètres."
                );

            }

            const data = await response.json();

            // On conserve les valeurs par défaut
            // si certaines données ne sont pas présentes
            setSettings((prev) => ({
                ...prev,
                ...data,
            }));

        } catch (err) {

            console.error(
                "Erreur lors du chargement des paramètres :",
                err
            );

            setError(err.message);

        } finally {

            setLoading(false);

        }

    };


    // ==========================
    // Charger au démarrage
    // ==========================

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


    // ==========================
    // Provider
    // ==========================

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


// ==========================
// Hook useSettings
// ==========================

export const useSettings = () => {

    const context = useContext(SettingsContext);

    if (!context) {

        throw new Error(
            "useSettings doit être utilisé à l'intérieur du SettingsProvider."
        );

    }

    return context;

};