import { motion } from "framer-motion";

const skills = [
    {
        name: "HTML5",
        level: 95,
    },
    {
        name: "CSS3",
        level: 85,
    },
    {
        name: "JavaScript",
        level: 75,
    },
    {
        name: "React.js",
        level: 70,
    },
    {
        name: "Boostrap.js",
        level: 78,
    },
    {
        name: "TawilindCss",
        level: 70,
    },
    {
        name: "Node.js",
        level: 60,
    },
    {
        name: "Git & GitHub",
        level: 75,
    },
    {
        name: "Intelligence Artificielle",
        level: 60,
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-32 bg-white"
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
                        COMPÉTENCES
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">
                        Technologies & Outils
                    </h2>

                    <p className="mt-6 text-lg text-slate-600">
                        Les technologies que j'utilise et continue de maîtriser chaque jour.
                    </p>
                </motion.div>

                {/* Grid */}

                <div className="grid md:grid-cols-2 gap-8 mt-20">

                    {skills.map((skill, index) => (
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
                                y: -5,
                            }}
                            className="
              bg-white
              p-8
              rounded-3xl
              border
              border-slate-200
              shadow-lg
              hover:shadow-xl
              transition
            "
                        >
                            <div className="flex justify-between mb-4">

                                <h3 className="font-semibold text-slate-900">
                                    {skill.name}
                                </h3>

                                <span className="text-blue-600 font-bold">
                                    {skill.level}%
                                </span>

                            </div>

                            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                        width: `${skill.level}%`,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.2,
                                    }}
                                    className="
                  h-full
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-600
                  rounded-full
                "
                                />

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;