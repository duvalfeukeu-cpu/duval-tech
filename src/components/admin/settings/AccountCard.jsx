import {
    Mail,
    ShieldCheck,
    Circle,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../contexts/AuthContext";

const AccountCard = () => {
    const { user } = useAuth();

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [loading, setLoading] = useState(false);

    if (!user) return null;

    // ==========================
    // CHANGER LE MOT DE PASSE
    // ==========================

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (!currentPassword || !newPassword || !confirmPassword) {
            toast.error("Veuillez remplir tous les champs.");
            return;
        }

        if (newPassword.length < 8) {
            toast.error(
                "Le nouveau mot de passe doit contenir au moins 8 caractères."
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error(
                "Les nouveaux mots de passe ne correspondent pas."
            );
            return;
        }

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("Session expirée. Veuillez vous reconnecter.");
                return;
            }

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/change-password`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        currentPassword,
                        newPassword,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Impossible de modifier le mot de passe."
                );
            }

            toast.success(
                "Mot de passe modifié avec succès."
            );

            // Réinitialiser les champs
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error(
                "Erreur changement mot de passe :",
                error
            );

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">

            {/* ========================== */}
            {/* INFORMATIONS DU COMPTE */}
            {/* ========================== */}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

                <div className="mb-8">

                    <h2 className="text-2xl font-bold text-slate-900">
                        🔐 Informations du compte
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Informations relatives à votre compte administrateur.
                    </p>

                </div>

                <div className="space-y-6">

                    {/* EMAIL */}

                    <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                            <Mail
                                className="text-blue-600"
                                size={22}
                            />

                        </div>

                        <div>

                            <p className="text-sm text-slate-500">
                                Adresse email
                            </p>

                            <p className="font-semibold text-slate-900">
                                {user.email}
                            </p>

                        </div>

                    </div>

                    {/* ROLE */}

                    <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                            <ShieldCheck
                                className="text-green-600"
                                size={22}
                            />

                        </div>

                        <div>

                            <p className="text-sm text-slate-500">
                                Rôle
                            </p>

                            <p className="font-semibold text-slate-900">
                                {user.role}
                            </p>

                        </div>

                    </div>

                    {/* STATUT */}

                    <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">

                            <Circle
                                size={12}
                                fill="currentColor"
                                className="text-emerald-600"
                            />

                        </div>

                        <div>

                            <p className="text-sm text-slate-500">
                                Statut
                            </p>

                            <p className="font-semibold text-emerald-600">
                                {user.status}
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* ========================== */}
            {/* SÉCURITÉ DU COMPTE */}
            {/* ========================== */}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

                <div className="mb-8">

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">

                            <Lock
                                className="text-blue-600"
                                size={21}
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-slate-900">
                                Sécurité du compte
                            </h2>

                            <p className="text-slate-500 mt-1">
                                Modifiez régulièrement votre mot de passe
                                pour protéger votre compte administrateur.
                            </p>

                        </div>

                    </div>

                </div>


                <form
                    onSubmit={handleChangePassword}
                    className="space-y-5"
                >

                    {/* MOT DE PASSE ACTUEL */}

                    <div>

                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Mot de passe actuel
                        </label>

                        <div className="relative">

                            <input
                                type={
                                    showCurrent
                                        ? "text"
                                        : "password"
                                }
                                value={currentPassword}
                                onChange={(e) =>
                                    setCurrentPassword(
                                        e.target.value
                                    )
                                }
                                placeholder="Votre mot de passe actuel"
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    pr-12
                                    rounded-xl
                                    border
                                    border-slate-200
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    transition
                                "
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowCurrent(!showCurrent)
                                }
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                    hover:text-slate-700
                                "
                            >
                                {showCurrent ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                    </div>


                    {/* NOUVEAU MOT DE PASSE */}

                    <div>

                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Nouveau mot de passe
                        </label>

                        <div className="relative">

                            <input
                                type={
                                    showNew
                                        ? "text"
                                        : "password"
                                }
                                value={newPassword}
                                onChange={(e) =>
                                    setNewPassword(
                                        e.target.value
                                    )
                                }
                                placeholder="Minimum 8 caractères"
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    pr-12
                                    rounded-xl
                                    border
                                    border-slate-200
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    transition
                                "
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowNew(!showNew)
                                }
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                    hover:text-slate-700
                                "
                            >
                                {showNew ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                    </div>


                    {/* CONFIRMATION */}

                    <div>

                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Confirmer le nouveau mot de passe
                        </label>

                        <div className="relative">

                            <input
                                type={
                                    showConfirm
                                        ? "text"
                                        : "password"
                                }
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                                placeholder="Confirmez votre nouveau mot de passe"
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    pr-12
                                    rounded-xl
                                    border
                                    border-slate-200
                                    outline-none
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    transition
                                "
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirm(!showConfirm)
                                }
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                    hover:text-slate-700
                                "
                            >
                                {showConfirm ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                    </div>


                    {/* BOUTON */}

                    <div className="pt-3">

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                bg-blue-600
                                hover:bg-blue-700
                                disabled:bg-slate-400
                                text-white
                                font-semibold
                                px-6
                                py-3
                                rounded-xl
                                transition
                                shadow-sm
                            "
                        >
                            <Lock size={18} />

                            {loading
                                ? "Modification..."
                                : "Modifier le mot de passe"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AccountCard;