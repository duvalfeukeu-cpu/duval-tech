const RecentMessages = ({ messages, loading }) => {

    if (loading) {

        return (

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <h2 className="text-2xl font-bold mb-6">
                    Derniers messages
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
                    Derniers messages
                </h2>

                <button className="text-blue-600 hover:text-blue-700 font-medium">

                    Voir tous

                </button>

            </div>

            {
                messages.length === 0 ? (

                    <p className="text-slate-500">
                        Aucun message reçu.
                    </p>

                ) : (

                    <div className="space-y-5">

                        {
                            messages.map((message) => (

                                <div
                                    key={message.id}
                                    className="flex items-start gap-4 border-b border-slate-100 pb-4"
                                >

                                    {/* Avatar */}

                                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">

                                        {message.name.charAt(0).toUpperCase()}

                                    </div>

                                    {/* Contenu */}

                                    <div className="flex-1">

                                        <div className="flex justify-between items-start">

                                            <div>

                                                <h3 className="font-semibold text-slate-800">

                                                    {message.name}

                                                </h3>

                                                <p className="text-sm text-slate-500">

                                                    {message.email}

                                                </p>

                                            </div>

                                            <span
                                                className={`text-xs px-3 py-1 rounded-full font-medium ${
                                                    message.is_read
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                            >

                                                {message.is_read ? "Lu" : "Non lu"}

                                            </span>

                                        </div>

                                        <h4 className="mt-2 font-medium text-slate-700">

                                            {message.subject}

                                        </h4>

                                        <p className="text-slate-500 text-sm mt-1 line-clamp-2">

                                            {message.message}

                                        </p>

                                        <p className="text-xs text-slate-400 mt-3">

                                            {new Date(
                                                message.created_at
                                            ).toLocaleDateString("fr-FR")}

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

export default RecentMessages;