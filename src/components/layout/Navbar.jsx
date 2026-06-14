import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200"
                    : "bg-white/70 backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}

                <a href="#home" className="font-bold text-2xl">
                    <span className="text-blue-600">Duval</span>
                    <span className="text-slate-900">Tech</span>
                </a>

                {/* Desktop Menu */}

                <nav className="hidden md:flex gap-8 text-slate-700 font-medium">

                    <a
                        href="#about"
                        className="hover:text-blue-600 transition"
                    >
                        À propos
                    </a>

                    <a
                        href="#skills"
                        className="hover:text-blue-600 transition"
                    >
                        Compétences
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-blue-600 transition"
                    >
                        Projets
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-blue-600 transition"
                    >
                        Contact
                    </a>

                </nav>

                {/* Desktop Button */}

<a
  href="/cv-duval.pdf"
  download
  className="
    hidden md:block
    bg-blue-600
    text-white
    px-5
    py-2
    rounded-xl
    hover:bg-blue-700
    transition
  "
>
  Mon CV
</a>

                {/* Mobile Button */}

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}

            {open && (
                <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">

                    <div className="flex flex-col gap-6 p-6">

                        <a
                            href="#about"
                            onClick={() => setOpen(false)}
                        >
                            À propos
                        </a>

                        <a
                            href="#skills"
                            onClick={() => setOpen(false)}
                        >
                            Compétences
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setOpen(false)}
                        >
                            Projets
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>

                        <button
                            className="
                bg-blue-600
                text-white
                py-3
                rounded-xl
              "
                        >
                            Mon CV
                        </button>

                    </div>

                </div>
            )}
        </header>
    );
};

export default Navbar;