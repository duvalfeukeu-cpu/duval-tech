import { motion } from "framer-motion";
import { Code2, Rocket, Brain, GraduationCap } from "lucide-react";

const cards = [
    {
        icon: <Code2 size={40} />,
        title: "Développement Web",
        description:
            "Création d'applications web modernes, performantes et évolutives.",
    },
    {
        icon: <Rocket size={40} />,
        title: "Dev-Elites",
        description:
            "Une communauté dédiée à l'apprentissage et à la progression dans la tech.",
    },
    {
        icon: <Brain size={40} />,
        title: "Intelligence Artificielle",
        description:
            "Exploration des nouvelles technologies IA et automatisations.",
    },
    {
        icon: <GraduationCap size={40} />,
        title: "Formation",
        description:
            "Partage de connaissances et accompagnement des débutants.",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50"
        >
            {/* Glow Effects */}

            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-100 rounded-full blur-[140px] opacity-70"></div>

            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-[140px] opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-blue-600 font-semibold tracking-widest">
                        À PROPOS
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Construire l'avenir grâce à la technologie
                    </h2>
                </motion.div>

                {/* CONTENU */}

                <div className="grid lg:grid-cols-2 gap-12 mt-20">

                    {/* PARCOURS */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="
            bg-white
            rounded-[32px]
            p-10
            border
            border-slate-100
            shadow-xl
          "
                    >
                        <h3 className="text-3xl font-bold text-slate-900">
                            Mon parcours
                        </h3>

                        <p className="mt-6 text-slate-600 leading-8">
                            Depuis mes débuts dans l'informatique, mon objectif a toujours
                            été de comprendre comment créer des solutions numériques utiles.
                        </p>

                        <p className="mt-4 text-slate-600 leading-8">
                            Aujourd'hui, je développe mes compétences en développement web,
                            intelligence artificielle et entrepreneuriat technologique à
                            travers ma marque personnelle Duval Tech.
                        </p>

                        <p className="mt-4 text-slate-600 leading-8">
                            Je construis également Dev-Elites, une communauté destinée à
                            aider les jeunes à progresser dans les métiers du numérique.
                        </p>

                        <div className="mt-10 flex gap-4 flex-wrap">

                            <span className="px-4 py-2 bg-blue-50 rounded-full text-blue-600">
                                React.js
                            </span>

                            <span className="px-4 py-2 bg-blue-50 rounded-full text-blue-600">
                                JavaScript
                            </span>

                            <span className="px-4 py-2 bg-blue-50 rounded-full text-blue-600">
                                IA
                            </span>

                            <span className="px-4 py-2 bg-blue-50 rounded-full text-blue-600">
                                Dev-Elites
                            </span>

                        </div>
                    </motion.div>

                    {/* CARDS */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                className="
                bg-white
                p-8
                rounded-[28px]
                border
                border-slate-100
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                cursor-pointer
              "
                            >
                                <div className="text-blue-600">
                                    {card.icon}
                                </div>

                                <h4 className="mt-5 text-xl font-semibold text-slate-900">
                                    {card.title}
                                </h4>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;