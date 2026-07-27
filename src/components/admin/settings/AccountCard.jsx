import { Mail, ShieldCheck, Circle } from "lucide-react";
import { useAuth } from "../../../contexts/AuthContext";

const AccountCard = () => {

    const { user } = useAuth();

    if (!user) return null;

    return (

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

    );

};

export default AccountCard;