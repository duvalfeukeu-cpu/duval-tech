import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    GitBranch,
    Layers3,
} from "lucide-react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

   useEffect(() => {
   fetch("https://duval-tech-api.onrender.com/api/projects")
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
        className="relative overflow-hidden bg-[#08131F] py-32"
    >

        {/* Background */}

        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Header */}

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .8 }}
                className="max-w-3xl mx-auto text-center"
            >

                <span
                    className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        text-blue-400
                        uppercase
                        tracking-[0.25em]
                        text-sm
                        font-semibold
                    "
                >
                    <Layers3 size={16} />
                    Featured Projects
                </span>

                <h2
                    className="
                        mt-8
                        text-4xl
                        md:text-6xl
                        font-bold
                        leading-tight
                        text-white
                    "
                >
                    Quelques projets
                    <br />

                    <span className="text-blue-500">
                        dont je suis fier.
                    </span>

                </h2>

                <p
                    className="
                        mt-8
                        text-lg
                        leading-8
                        text-slate-400
                    "
                >
                    Une sélection de projets développés avec React,
                    Node.js, Express et Supabase en mettant
                    l'accent sur les performances,
                    l'expérience utilisateur et un design moderne.
                </p>

            </motion.div>

            {/* Projects */}

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">

                {projects.map((project, index) => (

                    <motion.div
                        key={project.id || index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .6,
                            delay: index * .15,
                        }}
                        whileHover={{
                            y: -8,
                        }}
                        className="
                            group
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            hover:border-blue-500/30
                            hover:shadow-[0_25px_80px_rgba(37,99,235,.15)]
                        "
                    >

                        {/* Image */}

                        <div className="relative overflow-hidden">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                                    w-full
                                    h-60
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105
                                "
                            />

                            {/* Overlay */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#08131F]
                                    via-transparent
                                    to-transparent
                                "
                            />

                        </div>

                        {/* Content */}

                        <div className="p-7">

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-white
                                "
                            >
                                {project.title}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-slate-400
                                    leading-7
                                "
                            >
                                {project.description}
                            </p>

                            {/* Technologies */}

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    gap-2
                                    mt-6
                                "
                            >                                {project.technologies
                                    ?.split(",")
                                    .map((tech, i) => (
                                        <span
                                            key={i}
                                            className="
                                                px-3
                                                py-1.5
                                                rounded-full
                                                border
                                                border-blue-500/20
                                                bg-blue-500/10
                                                text-blue-300
                                                text-xs
                                                font-medium
                                                transition-all
                                                duration-300
                                                hover:bg-blue-500/20
                                            "
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                            </div>

                            {/* Divider */}

                            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            {/* Footer */}

                            <div className="mt-6 flex items-center justify-between">

                                {/* Github */}

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-slate-300
                                        hover:text-blue-400
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <GitBranch size={18} />

                                    <span className="font-medium">
                                        GitHub
                                    </span>
                                </a>

                                {/* Live Demo */}

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-blue-600
                                        hover:bg-blue-500
                                        px-5
                                        py-2.5
                                        text-white
                                        transition-all
                                        duration-300
                                        group/button
                                    "
                                >
                                    Live Demo

                                    <ArrowUpRight
                                        size={18}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover/button:translate-x-1
                                            group-hover/button:-translate-y-1
                                        "
                                    />
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
