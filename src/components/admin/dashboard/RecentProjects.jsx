const RecentProjects = ({ projects, loading }) => {

    if (loading) {

        return (

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <h2 className="text-2xl font-bold mb-5">
                    Derniers projets
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
                    Derniers projets
                </h2>

                <button
                    className="
                        text-blue-600
                        hover:text-blue-700
                        font-medium
                    "
                >
                    Voir tous
                </button>

            </div>

            <div className="space-y-4">

                {projects.length === 0 ? (

                    <p className="text-slate-500">
                        Aucun projet trouvé.
                    </p>

                ) : (

                    projects.map((project) => (

                        <div
                            key={project.id}
                            className="
                                flex
                                items-center
                                gap-4
                                p-3
                                rounded-xl
                                hover:bg-slate-50
                                transition
                            "
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                                    w-16
                                    h-16
                                    rounded-xl
                                    object-cover
                                "
                            />

                            <div className="flex-1">

                                <h3 className="font-semibold text-slate-800">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-slate-500 mt-1">
                                    {project.technologies}
                                </p>

                                <p className="text-xs text-slate-400 mt-1">
                                    {new Date(
                                        project.created_at
                                    ).toLocaleDateString("fr-FR")}
                                </p>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

};

export default RecentProjects;