import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Logo */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900">
                            Duval<span className="text-blue-600">Tech</span>
                        </h2>

                        <p className="mt-4 text-slate-600 leading-7">
                            Développeur Web passionné par la création
                            d'applications modernes et la construction
                            d'une communauté tech forte à travers
                            Dev-Elites.
                        </p>
                    </motion.div>

                    {/* Navigation */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-bold text-slate-900 mb-4">
                            Navigation
                        </h3>

                        <ul className="space-y-3 text-slate-600">
                            <li><a href="#home">Accueil</a></li>
                            <li><a href="#about">À propos</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </motion.div>

                    {/* Réseaux */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-bold text-slate-900 mb-4">
                            Réseaux
                        </h3>

                        <div className="flex gap-5 text-2xl">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-600 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://wa.me/237654427024"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-green-500 transition"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href="#"
                                className="hover:text-blue-600 transition"
                            >
                                <FaLinkedin />
                            </a>

                        </div>
                    </motion.div>

                </div>

                {/* Ligne */}

                <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-500">

                    © {new Date().getFullYear()} Duval Tech.
                    Tous droits réservés.

                </div>

            </div>
        </footer>
    );
};

export default Footer;