const RecentActivity = ({ activities, loading }) => {

    if (loading) {

        return (

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Activité récente
                </h2>

                <p className="text-slate-500">
                    Chargement...
                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">
                    Activité récente
                </h2>

            </div>

            {

                activities.length === 0 ? (

                    <p className="text-slate-500">
                        Aucune activité.
                    </p>

                ) : (

                    <div className="space-y-5">

                        {

                            activities.map((activity) => (

                                <div
                                    key={`${activity.type}-${activity.id}`}
                                    className="flex gap-4 items-start border-b border-slate-100 pb-4"
                                >

                                    {/* Icône */}

                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl
                                        ${
                                            activity.type === "project"
                                                ? "bg-blue-600"
                                                : "bg-emerald-600"
                                        }`}
                                    >

                                        {

                                            activity.type === "project"

                                                ? "📁"

                                                : "💬"

                                        }

                                    </div>

                                    {/* Contenu */}

                                    <div className="flex-1">

                                        {

                                            activity.type === "project" ? (

                                                <>

                                                    <h3 className="font-semibold text-slate-800">

                                                        Nouveau projet

                                                    </h3>

                                                    <p className="text-slate-600">

                                                        {activity.title}

                                                    </p>

                                                </>

                                            ) : (

                                                <>

                                                    <h3 className="font-semibold text-slate-800">

                                                        Nouveau message

                                                    </h3>

                                                    <p className="text-slate-600">

                                                        {activity.name}

                                                    </p>

                                                    <p className="text-sm text-slate-500">

                                                        {activity.subject}

                                                    </p>

                                                </>

                                            )

                                        }

                                        <p className="text-xs text-slate-400 mt-2">

                                            {

                                                new Date(

                                                    activity.created_at

                                                ).toLocaleDateString("fr-FR")

                                            }

                                        </p>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>

    );

};

export default RecentActivity;