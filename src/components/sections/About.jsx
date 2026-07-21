import { motion } from "framer-motion";
import duvalPhoto from "../../assets/images/duval.png";
import AnimatedCounter from "../common/AnimatedCounter";

console.log(duvalPhoto);

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#08131F] py-28"
        >
            {/* Background */}

            <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

            <div className="absolute -bottom-24 left-0 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >

                    <span
                        className="
                            inline-flex
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
                        About Me
                    </span>

                    <h2
                        className="
                            mt-8
                            text-4xl
                            md:text-6xl
                            font-bold
                            text-white
                            leading-tight
                        "
                    >
                        Passionné par la création
                        <br />
                        <span className="text-blue-500">
                            de produits numériques.
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
                        Développeur Full-Stack spécialisé dans la création
                        d'applications web modernes, performantes et élégantes.
                        J'aime transformer des idées en expériences numériques
                        utiles tout en partageant mes connaissances avec la
                        communauté.
                    </p>

                </motion.div>

                {/* ================= CONTENT ================= */}

                <div
                    className="
                        mt-24
                        grid
                        lg:grid-cols-2
                        gap-20
                        items-center
                    "
                >

                    {/* ================= LEFT ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >

                        {/* Halo */}

                        <div
                            className="
                                absolute
                                w-[420px]
                                h-[420px]
                                rounded-full
                                bg-blue-500/20
                                blur-[120px]
                            "
                        />

                        {/* Photo */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                relative
                                overflow-hidden
                                rounded-[36px]
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                shadow-[0_30px_80px_rgba(0,0,0,.45)]
                                p-4
                            "
                        >

                            <img
                                src={duvalPhoto}
                                alt="Feukeu Duval"
                                className="
                                    w-full
                                    max-w-[470px]
                                    rounded-[28px]
                                    object-cover
                                "
                            />

                        </motion.div>

                        {/* Floating Card */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3 }}
                            className="
                                absolute
                                -bottom-8
                                left-8
                                right-8
                                rounded-3xl
                                border
                                border-white/10
                                bg-[#102233]/90
                                backdrop-blur-2xl
                                p-6
                            "
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <h3 className="text-xl font-bold text-white">
                                        FEUKEU DUVAL
                                    </h3>

                                    <p className="mt-1 text-slate-400">
                                        Full-Stack Developer
                                    </p>

                                </div>

                                <div
                                    className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-blue-600
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                        font-bold
                                    "
                                >
                                    FD
                                </div>

                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-5">

                                <div>

                                    <p className="text-xs uppercase text-slate-500">
                                        Localisation
                                    </p>

                                    <p className="mt-1 text-white">
                                        🇨🇲 Cameroun
                                    </p>

                                </div>

                                <div>

                                    <p className="text-xs uppercase text-slate-500">
                                        Disponibilité
                                    </p>

                                    <p className="mt-1 text-green-400">
                                        Disponible
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                    {/* ================= RIGHT ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Timeline */}
                        <div className="relative">

    <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

    {[
        {
            year: "2024",
            title: "Obtention du Baccalauréat",
            text: "Début de mon parcours vers le développement logiciel."
        },
        {
            year: "2024",
            title: "Entrée en Licence Informatique",
            text: "Approfondissement des bases en informatique et programmation."
        },
        {
            year: "2025",
            title: "Développement Full-Stack",
            text: "Création de projets avec React, Node.js, Express et Supabase."
        },
        {
            year: "2026",
            title: "Création de Duval Tech",
            text: "Lancement de ma marque personnelle pour partager mes connaissances."
        },
        {
            year: "2026",
            title: "Naissance de Dev-Elites",
            text: "Création d'une communauté dédiée aux développeurs francophones."
        },
    ].map((item, index) => (

        <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * .15,
                duration: .6,
            }}
            className="relative pl-14 pb-12"
        >

            {/* Point */}

            <div
                className="
                    absolute
                    left-0
                    top-2
                    w-6
                    h-6
                    rounded-full
                    bg-blue-500
                    border-4
                    border-[#08131F]
                    shadow-[0_0_20px_rgba(59,130,246,.7)]
                "
            />

            <span className="text-blue-400 font-semibold">
                {item.year}
            </span>

            <h3 className="mt-2 text-2xl font-semibold text-white">
                {item.title}
            </h3>

            <p className="mt-3 leading-8 text-slate-400">
                {item.text}
            </p>

        </motion.div>

    ))}

</div>

                    </motion.div>

                </div>

                {/* ================= STATS ================= */}
                

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-28"
                >

                    {/* Stats */}
                      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">

    {[
        {
            end: 15,
            suffix: "+",
            title: "Projets",
        },
        {
            end: 1000,
            suffix: "+",
            title: "YouTube",
        },
        {
            end: 200,
            suffix: "+",
            title: "Facebook",
        },
        {
            end: 1,
            suffix: "",
            title: "Dev-Elites",
        },
    ].map((item, index) => (

        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.15,
                duration: 0.5,
            }}
            className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-5 lg:p-6
            "
        >

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full" />

            <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                {item.title}
            </span>

            <h3 className="mt-3 
            text-3xl 
            lg:text-4xl 
            font-bold text-white">

               <AnimatedCounter
                end={item.end}
                suffix={item.suffix}
/>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
                {item.title}
            </p>

        </motion.div>

    ))}

</div>
                </motion.div>

            </div>

        </section>
    );
};

export default About;