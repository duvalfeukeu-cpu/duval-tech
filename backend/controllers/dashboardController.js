const supabase = require("../config/supabase");

// =====================================
// Dashboard Stats
// =====================================

const getDashboardStats = async (req, res) => {

    try {

        const [
            projectsResult,
            skillsResult,
            messagesResult,
        ] = await Promise.all([

            supabase
                .from("projects")
                .select("*", {
                    count: "exact",
                    head: true,
                }),

            supabase
                .from("skills")
                .select("*", {
                    count: "exact",
                    head: true,
                }),

            supabase
                .from("messages")
                .select("*", {
                    count: "exact",
                    head: true,
                }),

        ]);

        if (
            projectsResult.error ||
            skillsResult.error ||
            messagesResult.error
        ) {

            throw new Error("Erreur lors de la récupération des statistiques.");

        }

        res.status(200).json({

            success: true,

            stats: {

                projects: projectsResult.count || 0,

                skills: skillsResult.count || 0,

                messages: messagesResult.count || 0,

                visitors: 0,

            },

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};
const getRecentProjects = async (req, res) => {

    try {

        const { data, error } = await supabase
            .from("projects")
            .select(`
                id,
                title,
                technologies,
                created_at,
                image
            `)
            .order("created_at", {
                ascending: false,
            })
            .limit(5);

        if (error) throw error;

        res.status(200).json({

            success: true,

            projects: data,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};
const getRecentMessages = async (req, res) => {

    try {

        const { data, error } = await supabase
            .from("messages")
            .select(`
                id,
                name,
                email,
                subject,
                message,
                is_read,
                created_at
            `)
            .order("created_at", {
                ascending: false,
            })
            .limit(5);

        if (error) throw error;

        res.status(200).json({

            success: true,

            messages: data,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};
// ========================================
// Dernières activités
// ========================================

const getRecentActivity = async (req, res) => {

    try {

        // =====================
        // Derniers projets
        // =====================

        const {
            data: projects,
            error: projectsError,
        } = await supabase
            .from("projects")
            .select(`
                id,
                title,
                created_at
            `)
            .order("created_at", {
                ascending: false,
            })
            .limit(5);

        if (projectsError) {

            throw projectsError;

        }

        // =====================
        // Derniers messages
        // =====================

        const {
            data: messages,
            error: messagesError,
        } = await supabase
            .from("messages")
            .select(`
                id,
                name,
                subject,
                created_at
            `)
            .order("created_at", {
                ascending: false,
            })
            .limit(5);

        if (messagesError) {

            throw messagesError;

        }

        // =====================
        // Fusion des activités
        // =====================

        const activities = [

            ...projects.map((project) => ({

                type: "project",

                id: project.id,

                title: project.title,

                created_at: project.created_at,

            })),

            ...messages.map((message) => ({

                type: "message",

                id: message.id,

                name: message.name,

                subject: message.subject,

                created_at: message.created_at,

            })),

        ];

        // =====================
        // Tri par date
        // =====================

        activities.sort(

            (a, b) =>

                new Date(b.created_at) -
                new Date(a.created_at)

        );

        return res.status(200).json({

            success: true,

            activities: activities.slice(0, 10),

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Erreur lors du chargement des activités.",

        });

    }

};
module.exports = {

    getDashboardStats,
    getRecentProjects,
    getRecentMessages,
    getRecentActivity,

};


