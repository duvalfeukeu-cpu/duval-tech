import { motion } from "framer-motion";
import {
    Brain,
    Code2,
    Users,
    Video,
    Sparkles,
} from "lucide-react";

const services = [
    {
        icon: <Code2 size={38} />,
        title: "Développement Web",
        description:
            "Création de sites web modernes, performants et responsives avec les technologies les plus récentes.",
    },
    {
        icon: <Users size={38} />,
        title: "Dev-Elites",
        description:
            "Une communauté francophone pour apprendre le développement web, l'IA et construire des projets ensemble.",
    },
    {
        icon: <Video size={38} />,
        title: "Création de contenu",
        description:
            "Tutoriels, vidéos, articles et ressources pour aider les développeurs à progresser plus rapidement.",
    },
    {
        icon: <Brain size={38} />,
        title: "Intelligence Artificielle",
        description:
            "Utilisation des outils IA pour automatiser les tâches, gagner du temps et développer plus intelligemment.",
    },
];

const Services = () => {

    return (

        <section
            id="services"
            className="relative overflow-hidden bg-[#08131F] py-32"
        >

            {/* Glow */}

            <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[180px]" />

            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[180px]" />

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

                        Mes Services

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

                        Ce que je peux

                        <span className="text-blue-500">

                            {" "}vous apporter

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

                        Au-delà du développement, j'accompagne les entreprises,
                        les étudiants et les créateurs à travers des solutions
                        numériques modernes, du partage de connaissances et
                        l'utilisation de l'intelligence artificielle.

                    </p>

                </motion.div>

                {/* Grid */}

                <div className="grid lg:grid-cols-2 gap-8 mt-20">

                    {services.map((service, index) => (

                        <motion.div

                            key={index}

                            initial={{
                                opacity: 0,
                                y: 40,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{
                                once: true,
                            }}

                            transition={{
                                duration: .6,
                                delay: index * .15,
                            }}

                            whileHover={{
                                y: -8,
                            }}

                            className="
                                relative
                                overflow-hidden
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

                            {/* ===== Partie 2 commence ici ===== */}
                            {/* Halo */}

<div
    className="
        absolute
        -top-20
        -right-20
        w-52
        h-52
        rounded-full
        bg-blue-500/10
        blur-[100px]
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700
    "
/>

{/* Icône */}

<div
    className="
        relative
        w-20
        h-20
        rounded-3xl
        flex
        items-center
        justify-center
        border
        border-blue-500/20
        bg-blue-500/10
        text-blue-400
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:bg-blue-500/20
    "
>

    {service.icon}

</div>

{/* Ligne décorative */}

<div
    className="
        w-16
        h-1
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        mt-8
    "
/>

{/* Titre */}

<h3
    className="
        mt-8
        text-2xl
        font-bold
        text-white
    "
>

    {service.title}

</h3>

{/* Description */}

<p
    className="
        mt-5
        text-slate-400
        leading-8
    "
>

    {service.description}

</p>

{/* Footer */}

<div className="mt-10">

    <button
        className="
            inline-flex
            items-center
            gap-3
            text-blue-400
            font-semibold
            transition-all
            duration-300
            hover:gap-5
        "
    >

        En savoir plus

        <motion.span

            animate={{
                x: [0, 6, 0],
            }}

            transition={{
                duration: 1.5,
                repeat: Infinity,
            }}

        >

            →

        </motion.span>

    </button>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

};

export default Services;