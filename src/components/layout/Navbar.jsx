import { useState, useEffect } from "react";
import {
    Menu,
    X,
    Download,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const navLinks = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 20);

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    const closeMenu = () => {

        setOpen(false);

    };

    return (

        <header
            className={`
                fixed
                top-0
                left-0
                w-full
                z-50
                transition-all
                duration-500
                ${
                    scrolled
                        ? "bg-[#08131F]/90 backdrop-blur-2xl border-b border-white/10"
                        : "bg-[#08131F]"
                }
            `}
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    h-[74px]
                    px-6
                    lg:px-10
                    flex
                    items-center
                    justify-between
                "
            >

                {/* ================= Logo ================= */}

                  {/* ================= Logo ================= */}

<a
    href="#home"
    className="flex items-center gap-4"
>

    <div
        className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-br
            from-blue-500
            via-blue-600
            to-cyan-400
            flex
            items-center
            justify-center
            shadow-[0_10px_30px_rgba(59,130,246,.35)]
            text-white
            font-black
            text-lg
            transition-all
            duration-300
            hover:scale-105
        "
    >
        FD
    </div>

    <div>

        <h2
            className="
                text-white
                font-bold
                tracking-wide
                leading-none
            "
        >
            FEUKEU DUVAL
        </h2>

        <p
            className="
                text-xs
                text-slate-400
                mt-1
            "
        >
            Full Stack Developer
        </p>

    </div>

</a>

                {/* ================= Desktop Navigation ================= */}

                <nav
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-10
                    "
                >

                    {navLinks.map((item) => (

                        <a
                            key={item.label}
                            href={item.href}
                            className="
                                relative
                                text-slate-400
                                text-[15px]
                                font-medium
                                transition-all
                                duration-300
                                hover:text-white

                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:h-[2px]
                                after:w-0
                                after:bg-blue-500
                                after:transition-all
                                after:duration-300

                                hover:after:w-full
                            "
                        >

                            {item.label}

                        </a>

                    ))}

                </nav>

                {/* ================= Right Side ================= */}

                <div
                    className="
                        flex
                        items-center
                        gap-8
                    "
                >

                    {/* GitHub */}

                    <a
                        href="https://github.com/duval-tech"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            hidden
                            md:flex
                            text-slate-400
                            hover:text-white
                            transition-all
                            duration-300
                        "
                    >

                        <FaGithub className="text-xl" />

                    </a>

                    {/* Download CV */}

                    <a
                        href="/cv/FEUKEU-DUVAL-CV.pdf"
                        download
                        className="
                            hidden
                            md:flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-xl
                            border
                            border-blue-500/30
                            bg-transparent
                            text-blue-400
                            font-medium
                            transition-all
                            duration-300
                            hover:bg-blue-500/10
                            hover:border-blue-400
                            hover:text-white
                        "
                    >

                        <Download size={16} />

                        Download CV

                    </a>

                    {/* Mobile Button */}

                    <button

                        onClick={() => setOpen(!open)}

                        className="
                            md:hidden
                            w-11
                            h-11
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            flex
                            items-center
                            justify-center
                            text-white
                        "

                    >

                        {

                            open

                                ? <X size={22}/>

                                : <Menu size={22}/>

                        }

                    </button>

                </div>

            </div>

            {/* ================= Mobile Menu ================= */}

            {open && (

                <div
                    className="
                        md:hidden
                        mx-4
                        mb-4
                        rounded-3xl
                        border
                        border-white/10
                        bg-[#102233]
                        backdrop-blur-2xl
                        shadow-2xl
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            p-6
                        "
                    >

                        {/* ===== Partie 2 commence ici ===== */}
                        {navLinks.map((item) => (

    <a
        key={item.label}
        href={item.href}
        onClick={closeMenu}
        className="
            text-slate-300
            font-medium
            transition-all
            duration-300
            hover:text-white
        "
    >

        {item.label}

    </a>

))}

{/* Github */}

<a
    href="https://github.com/duval-tech"
    target="_blank"
    rel="noreferrer"
    onClick={closeMenu}
    className="
        flex
        items-center
        gap-3
        text-slate-300
        hover:text-white
        transition
    "
>

    <FaGithub className="text-xl" />

    GitHub

</a>

{/* Download CV */}

<a
    href="/cv/FEUKEU-DUVAL-CV.pdf"
    download
    onClick={closeMenu}
    className="
        mt-3
        flex
        items-center
        justify-center
        gap-3
        py-4
        rounded-xl
        border
        border-blue-500/30
        bg-blue-500/10
        text-blue-400
        font-semibold
        transition-all
        duration-300
        hover:bg-blue-500
        hover:text-white
    "
>

    <Download size={18} />

    Download CV

</a>

</div>

</div>

)}

</header>

);

};

export default Navbar;