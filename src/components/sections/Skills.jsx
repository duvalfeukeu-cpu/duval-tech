import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Code2,
    Database,
    Server,
    Wrench,
    Sparkles,
} from "lucide-react";

const API = "https://duval-tech-api.onrender.com/api/skills";

const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadSkills = async () => {

            try {

                const response = await fetch(API);

                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des compétences.");
                }

                const data = await response.json();

                setSkills(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        loadSkills();

    }, []);

    // ==========================
    // Regroupement par catégorie
    // ==========================

    const groupedSkills = skills.reduce((acc, skill) => {

        const category = skill.category || "Autres";

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(skill);

        return acc;

    }, {});

    // ==========================
    // Icônes
    // ==========================

    const getCategoryIcon = (category) => {

        switch (category.toLowerCase()) {

            case "frontend":
                return <Code2 size={22} />;

            case "backend":
                return <Server size={22} />;

            case "database":
                return <Database size={22} />;

            default:
                return <Wrench size={22} />;

        }

    };

    // ==========================
    // Couleurs
    // ==========================

    const getCategoryColor = (category) => {

        switch (category.toLowerCase()) {

            case "frontend":
                return "#3B82F6";

            case "backend":
                return "#22C55E";

            case "database":
                return "#8B5CF6";

            default:
                return "#F59E0B";

        }

    };

    return (

        <section
            id="skills"
            className="relative overflow-hidden bg-[#08131F] py-32"
        >

            {/* Glow */}

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

                        <Sparkles size={16} />

                        Technologies

                    </span>

                    <h2
                        className="
                            mt-8
                            text-4xl
                            md:text-6xl
                            font-bold
                            text-white
                        "
                    >

                        Mes

                        <span className="text-blue-500">

                            {" "}Compétences

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

                        Les technologies que j'utilise au quotidien
                        pour concevoir des applications modernes,
                        performantes et évolutives.

                    </p>

                </motion.div>

                {/* Loading */}

                {loading && (

                    <div className="text-center mt-24 text-slate-400">

                        Chargement...

                    </div>

                )}

                {/* Aucun résultat */}

                {!loading && skills.length === 0 && (

                    <div className="text-center mt-24 text-slate-400">

                        Aucune compétence disponible.

                    </div>

                )}

                {/* Cartes */}

                {!loading && skills.length > 0 && (

                    <div className="grid lg:grid-cols-2 gap-8 mt-20">

                        {Object.entries(groupedSkills).map(([category, items], index) => (

                            <motion.div

                                key={category}

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
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-8
                                    transition-all
                                    duration-500
                                    hover:border-blue-500/30
                                    hover:shadow-[0_25px_80px_rgba(37,99,235,.15)]
                                "

                            >

                                <div className="flex items-center gap-4 mb-10">

                                    <div

                                        className="
                                            w-12
                                            h-12
                                            rounded-2xl
                                            flex
                                            items-center
                                            justify-center
                                            border
                                        "

                                        style={{
                                            color: getCategoryColor(category),
                                            borderColor: `${getCategoryColor(category)}40`,
                                            background: `${getCategoryColor(category)}15`
                                        }}

                                    >

                                        {getCategoryIcon(category)}

                                    </div>

                                    <h3 className="text-3xl font-bold text-white">

                                        {category}

                                    </h3>

                                </div>

                                {/* ===== La Partie 2 commence ici ===== */}
                                                                {items.map((skill, skillIndex) => (

                                    <div
                                        key={skill.id}
                                        className={
                                            skillIndex !== items.length - 1
                                                ? "mb-8"
                                                : ""
                                        }
                                    >

                                        <div className="flex justify-between items-center mb-3">

                                            <div>

                                                <h4 className="text-white font-semibold text-lg">
                                                    {skill.name}
                                                </h4>

                                                <p className="text-slate-400 text-sm">
                                                    Niveau de maîtrise
                                                </p>

                                            </div>

                                            <span
                                                className="font-bold text-lg"
                                                style={{
                                                    color: skill.color || getCategoryColor(category),
                                                }}
                                            >
                                                {skill.level}%
                                            </span>

                                        </div>

                                        <div className="relative w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.level}%`,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: skillIndex * 0.15,
                                                }}
                                                className="h-full rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        skill.color ||
                                                        getCategoryColor(category),
                                                }}
                                            />

                                        </div>

                                    </div>

                                ))}

                            </motion.div>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

};

export default Skills;