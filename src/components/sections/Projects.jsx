import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

   useEffect(() => {
    fetch("http://localhost:5000/api/projects")
        .then((res) => res.json())
        .then((data) => {
            console.log("PROJETS RECUS =", data);
            setProjects(data);
        })
        .catch((err) => {
            console.error("Erreur :", err);
        });
}, []);

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
                            key={project.id || index}
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

                                {/* Technologies */}

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {project.technologies
                                        ?.split(",")
                                        .map((tech, i) => (
                                            <span
                                                key={i}
                                                className="
                                                    px-3
                                                    py-1
                                                    bg-blue-50
                                                    text-blue-600
                                                    rounded-full
                                                    text-sm
                                                "
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}

                                </div>

                                {/* Boutons */}

                                <div className="flex gap-3 mt-8">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex-1
                                            text-center
                                            py-3
                                            rounded-xl
                                            border
                                            border-slate-300
                                            hover:border-blue-500
                                            hover:bg-slate-50
                                            transition
                                        "
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex-1
                                            text-center
                                            py-3
                                            rounded-xl
                                            bg-blue-600
                                            text-white
                                            hover:bg-blue-700
                                            transition
                                        "
                                    >
                                        Voir
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