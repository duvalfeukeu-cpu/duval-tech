import { motion } from "framer-motion";

const projects = [
    {
        title: "DUVAL-SHOP",
        description:
            "Mon site e-commerce 'DUVAL-SHOP' POUR e-commerce",
        image:
            "https://i.postimg.cc/P5mnd1y0/shap.png",
        technologies: ["React.js", "Tailwind",],
        github: "https://github.com/duvalfeukeu-cpu/site-e-commerce",
        demo: "https://duval-shop-2026.netlify.app",
    },

    {
        title: "TODO-list",
        description:
            "Plateforme de TODO-list pour planifier son temps et mieux optimiser sa journee",
        image:
            "https://i.postimg.cc/grFt7BCp/list.png",
        technologies: ["html", "boostrap", "java-script"],
        github: "https://github.com/duvalfeukeu-cpu",
        demo: "https://todo-liste-duval-tech.netlify.app",
    },
    {
        title: "site AUtodeal",
        description:
            "Plateforme de e-commerce de ventes de voitures (mon premier projets)",
        image:
            "https://i.postimg.cc/BvHthVfZ/deal.png",
        technologies: ["html", "css", "java script"],
        github: "https://github.com/duvalfeukeu-cpu",
        demo: "https://autodeal-iota.vercel.app/",
    },


    {
        title: "API e-commerce",
        description:
            "API du site e-commerce de Duval-shop ",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        technologies: ["mongoDB", "java-script", "API"],
        github: "https://github.com/duvalfeukeu-cpu",
        demo: "#",
    },
    {
        title: " site de contes d'histoire",
        description:
            "site de contes d'histoire pour les petits enfants ",
        image:
            "https://i.postimg.cc/D0BSr43k/fable.png",
        technologies: ["boostrap", "java-script",],
        github: "https://github.com/duvalfeukeu-cpu",
        demo: "https://site-bootdtrap.vercel.app/",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-32 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-blue-600 font-semibold tracking-widest">
                        PROJETS
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Quelques réalisations
                    </h2>

                    <p className="mt-6 text-lg text-slate-600">
                        Une sélection de projets illustrant mes compétences en
                        développement web et technologies modernes.
                    </p>
                </motion.div>

                {/* Projects Grid */}

                <div className="grid lg:grid-cols-3 gap-8 mt-20">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="
              bg-white
              rounded-3xl
              overflow-hidden
              border
              border-slate-200
              shadow-lg
              hover:shadow-2xl
              transition-all
            "
                        >
                            {/* Image */}

                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                w-full
                h-56
                object-cover
              "
                            />

                            {/* Content */}

                            <div className="p-6">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-slate-600">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="
                      px-3 py-1
                      bg-blue-50
                      text-blue-600
                      rounded-full
                      text-sm
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                                {/* Buttons */}

                                <div className="flex gap-3 mt-8">

                                    <a
                                        href={project.github}
                                        className="
                    flex-1
                    text-center
                    py-3
                    rounded-xl
                    border
                    border-slate-300
                    hover:border-blue-500
                  "
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        className="
                    flex-1
                    text-center
                    py-3
                    rounded-xl
                    bg-blue-600
                    text-white
                    hover:bg-blue-700
                  "
                                    >
                                        voir
                                    </a>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;