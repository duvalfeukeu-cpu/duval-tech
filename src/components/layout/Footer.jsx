import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
return (

<footer className="relative overflow-hidden bg-[#08131F] border-t border-white/10">

    {/* Glow */}

    <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[180px]" />

    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[180px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-3 gap-14">

            {/* ================= Logo ================= */}

            <motion.div

                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{ duration:.7 }}

            >

                <span
                    className="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        border
                        border-blue-500/20
                        bg-blue-500/10
                        text-blue-400
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        font-semibold
                    "
                >

                    Duval Tech

                </span>

                <h2
                    className="
                        mt-8
                        text-5xl
                        font-bold
                        text-white
                    "
                >

                    Duval

                    <span className="text-blue-500">

                        Tech

                    </span>

                </h2>

                <p
                    className="
                        mt-8
                        max-w-sm
                        leading-8
                        text-slate-400
                    "
                >

                    Développeur Web Full Stack passionné par la création
                    d'applications modernes, l'intelligence artificielle
                    et le partage de connaissances à travers Dev-Elites.

                </p>

            </motion.div>

            {/* ================= Navigation ================= */}

            <motion.div

                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{
                    duration:.7,
                    delay:.15
                }}

            >

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-white
                        mb-8
                    "
                >

                    Navigation

                </h3>

                <ul className="space-y-5">

                    <li>

                        <a
                            href="#home"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition
                            "
                        >
                            Accueil
                        </a>

                    </li>

                    <li>

                        <a
                            href="#about"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition
                            "
                        >
                            À propos
                        </a>

                    </li>

                    <li>

                        <a
                            href="#skills"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition
                            "
                        >
                            Compétences
                        </a>

                    </li>

                    <li>

                        <a
                            href="#services"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition
                            "
                        >
                            Services
                        </a>

                    </li>

                    <li>

                        <a
                            href="#projects"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition
                            "
                        >
                            Projets
                        </a>

                    </li>

                    <li>

                        <a
                            href="#contact"
                            className="
                                text-slate-400
                                hover:text-blue-400
                                transition
                            "
                        >
                            Contact
                        </a>

                    </li>

                </ul>

            </motion.div>

            {/* ================= Réseaux ================= */}

            <motion.div

                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{
                    duration:.7,
                    delay:.3
                }}

            >

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-white
                        mb-8
                    "
                >

                    Restons connectés

                </h3>

                {/* ===== Partie 2 commence ici ===== */}
                <div className="grid grid-cols-3 gap-4">

    {/* GitHub */}

    <a
        href="https://github.com/duval-tech"
        target="_blank"
        rel="noreferrer"
        className="
            group
            flex
            items-center
            justify-center
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-blue-500/10
            hover:border-blue-500/30
            hover:text-blue-400
            hover:-translate-y-1
        "
    >
        <FaGithub className="text-2xl" />
    </a>

    {/* Facebook */}

    <a
        href="https://facebook.com/duvaltech"
        target="_blank"
        rel="noreferrer"
        className="
            group
            flex
            items-center
            justify-center
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-blue-500/10
            hover:border-blue-500/30
            hover:text-blue-400
            hover:-translate-y-1
        "
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
        >
            <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z"/>
        </svg>
    </a>

    {/* YouTube */}

    <a
        href="https://youtube.com/@DUVAL-TECH"
        target="_blank"
        rel="noreferrer"
        className="
            group
            flex
            items-center
            justify-center
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-red-500/10
            hover:border-red-500/30
            hover:text-red-400
            hover:-translate-y-1
        "
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
        >
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.7 15.5v-7L16 12l-6.3 3.5z"/>
        </svg>
    </a>

    {/* LinkedIn */}

    <a
        href="#"
        className="
            flex
            items-center
            justify-center
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-blue-500/10
            hover:border-blue-500/30
            hover:text-blue-400
            hover:-translate-y-1
        "
    >
        <FaLinkedin className="text-2xl" />
    </a>

    {/* WhatsApp */}

    <a
        href="https://wa.me/237654427024"
        target="_blank"
        rel="noreferrer"
        className="
            flex
            items-center
            justify-center
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-green-500/10
            hover:border-green-500/30
            hover:text-green-400
            hover:-translate-y-1
        "
    >
        <FaWhatsapp className="text-2xl" />
    </a>

    {/* Email */}

    <a
        href="mailto:duvalfeukeu@gmail.com"
        className="
            flex
            items-center
            justify-center
            h-16
            rounded-2xl
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-blue-500/10
            hover:border-blue-500/30
            hover:text-blue-400
            hover:-translate-y-1
        "
    >
        <span className="font-bold text-lg">@</span>
    </a>

</div>

<div className="mt-10 space-y-4">

    <p className="text-slate-400">
        📧 duvalfeukeu@gmail.com
    </p>

    <p className="text-slate-400">
        📱 +237 654 427 024
    </p>

</div>

</motion.div>

</div>

{/* Footer Bottom */}

<div
    className="
        mt-20
        pt-8
        border-t
        border-white/10
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6
    "
>

    <div>

        <p className="text-slate-500">

            © {new Date().getFullYear()} <span className="text-white">Duval Tech</span>.
            Tous droits réservés.

        </p>

        <p className="mt-2 text-sm text-slate-600">

            Made with ❤️ using React & Tailwind CSS

        </p>

    </div>

    <a
        href="#home"
        className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            border
            border-white/10
            bg-white/5
            text-slate-300
            transition-all
            duration-300
            hover:bg-blue-500/10
            hover:border-blue-500/30
            hover:text-blue-400
        "
    >

        ↑ Retour en haut

    </a>

</div>

</div>

</footer>

);
}


export default Footer;