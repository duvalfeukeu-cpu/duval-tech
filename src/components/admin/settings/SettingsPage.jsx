import { useState } from "react";
import toast from "react-hot-toast";

import { useSettings } from "../../../contexts/SettingsContext";

import SettingsForm from "./SettingsForm";
import AccountCard from "./AccountCard";
import ProfileCard from "./ProfileCard";

const API = "http://localhost:5000/api/settings";

const SettingsPage = () => {

    const {
        settings,
        setSettings,
        loading,
        refreshSettings,
    } = useSettings();

    const [saving, setSaving] = useState(false);

    // ==========================
    // SAVE SETTINGS
    // ==========================

    const saveSettings = async () => {

        try {

            setSaving(true);

            const token = localStorage.getItem("token");

            const response = await fetch(API, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

                body: JSON.stringify(settings),

            });

            const data = await response.json();

            if (!response.ok) {

                throw new Error(
                    data.message || "Erreur lors de la sauvegarde."
                );

            }

            // Recharge les données dans le Context
            await refreshSettings();

            toast.success("Paramètres enregistrés avec succès !");

        } catch (error) {

            console.error(error);

            toast.error(error.message);

        } finally {

            setSaving(false);

        }

    };

    if (loading) {

        return (

            <div className="text-center py-20 text-slate-500">

                Chargement...

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-slate-900">

                    Paramètres

                </h1>

                <p className="text-slate-500 mt-2">

                    Gérez les informations de votre portfolio.

                </p>

            </div>

            <ProfileCard
                settings={settings}
                setSettings={setSettings}
            />

            <SettingsForm
                settings={settings}
                setSettings={setSettings}
                onSave={saveSettings}
                saving={saving}
            />
            <AccountCard />

        </div>
        

    );

};

export default SettingsPage;