import { motion } from "framer-motion";
import duvalPhoto from "../../assets/images/duval.png";

const Hero = () => {
    return (
<section className="relative min-h-screen overflow-hidden bg-[#08131F] pt-28">

    {/* Background Gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_30%)]" />

    {/* Grid */}
    <div
        className="
            absolute
            inset-0
            opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
            bg-[size:60px_60px]
        "
    />

    {/* Glow Right */}
    <div
        className="
            absolute
            -top-32
            -right-32
            w-[600px]
            h-[600px]
            rounded-full
            bg-blue-500/20
            blur-[180px]
        "
    />

    {/* Glow Left */}
    <div
        className="
            absolute
            -bottom-40
            -left-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-400/10
            blur-[180px]
        "
    />

    <div
        className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            min-h-[calc(100vh-80px)]
            grid
            lg:grid-cols-2
            gap-20
            items-center
        "
    >

{/* TEXTE */}

<motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-2xl"
>

    {/* Badge */}

    <div
        className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            text-sm
            text-slate-300
            mb-8
        "
    >
        <span>👋</span>
        <span>Bonjour, je suis</span>
    </div>

    {/* Titre */}

    <h1
        className="
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-black
            leading-[1.05]
            tracking-tight
            text-white
        "
    >
        Feukeu{" "}
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Duval
        </span>
    </h1>

    {/* Sous-titre */}

    <h2
        className="
            mt-8
            text-2xl
            lg:text-3xl
            font-semibold
            text-slate-200
            leading-relaxed
        "
    >
        Développeur Full-Stack
        <br />

        <span className="text-blue-400">
            & Fondateur de Dev-Elites
        </span>
    </h2>

    {/* Description */}

    <p
        className="
            mt-8
            text-lg
            lg:text-xl
            text-slate-400
            leading-9
            max-w-xl
        "
    >
        Je développe des applications web modernes,
        performantes et évolutives avec React, Node.js,
        Express et Supabase.

        <br />
        <br />

        À travers <span className="text-white font-medium">Duval Tech</span> et
        <span className="text-blue-400 font-medium"> Dev-Elites</span>,
        j'aide également les développeurs francophones à progresser grâce à des
        contenus pratiques et des projets concrets.
    </p>

    {/* Boutons */}

    <div className="mt-12 flex flex-wrap gap-5">

        <a
            href="#projects"
            className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-blue-600
                text-white
                font-semibold
                shadow-[0_10px_40px_rgba(37,99,235,.35)]
                hover:bg-blue-500
                hover:-translate-y-1
                transition-all
                duration-300
            "
        >
            Voir mes projets
            <span>→</span>
        </a>

        <a
            href="/cv/FEUKEU-DUVAL-CV.pdf"
            download
            className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white
                font-semibold
                hover:border-blue-500
                hover:bg-white/10
                hover:-translate-y-1
                transition-all
                duration-300
            "
        >
            Télécharger mon CV
        </a>

    </div>

</motion.div>

{/* PHOTO */}

<motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex items-center justify-center"
>

    {/* Halo principal */}

    <div
        className="
            absolute
            w-[520px]
            h-[520px]
            rounded-full
            bg-blue-500/20
            blur-[150px]
        "
    />

    {/* Cercle décoratif */}

    <div
        className="
            absolute
            w-[470px]
            h-[470px]
            rounded-full
            border
            border-blue-400/20
        "
    />

    {/* Carte Photo */}

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
            z-20
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_25px_80px_rgba(0,0,0,.45)]
            p-4
        "
    >

        <img
            src={duvalPhoto}
            alt="Feukeu Duval"
            className="
                lg:w-[410px]
                xl:w-[440px]
                rounded-[28px]
                object-cover
            "
        />

    </motion.div>

    {/* Badge React */}

    <motion.div
        animate={{
            y: [0, -8, 0],
        }}
        transition={{
            repeat: Infinity,
            duration: 5,
        }}
        className="
            absolute
            top-10
            -left-6
            z-30
            px-5
            py-3
            rounded-2xl
            border
            border-white/10
            bg-[#102233]/90
            backdrop-blur-xl
            shadow-xl
        "
    >

        <p className="text-xs text-slate-400">
            Frontend
        </p>

        <p className="font-semibold text-white">
            React.js ⚛️
        </p>

    </motion.div>

    {/* Badge Backend */}

    <motion.div
        animate={{
            y: [0, 8, 0],
        }}
        transition={{
            repeat: Infinity,
            duration: 6,
        }}
        className="
            absolute
            bottom-10
            -right-8
            z-30
            px-5
            py-3
            rounded-2xl
            border
            border-white/10
            bg-[#102233]/90
            backdrop-blur-xl
            shadow-xl
        "
    >

        <p className="text-xs text-slate-400">
            Backend
        </p>

        <p className="font-semibold text-white">
            Node.js 🚀
        </p>

    </motion.div>

    {/* Badge Nom */}

    <motion.div
        animate={{
            y: [0, -6, 0],
        }}
        transition={{
            repeat: Infinity,
            duration: 4,
        }}
        className="
            absolute
            -bottom-6
            left-1/2
            -translate-x-1/2
            z-40
            px-7
            py-4
            rounded-2xl
            border
            border-white/10
            bg-[#102233]
            backdrop-blur-xl
            shadow-2xl
        "
    >

        <h3 className="text-white font-bold">
            Feukeu Duval
        </h3>

        <p className="text-sm text-slate-400">
            Full-Stack Developer
        </p>

    </motion.div>

</motion.div>
            </div>

        </section>
    );
};

export default Hero;