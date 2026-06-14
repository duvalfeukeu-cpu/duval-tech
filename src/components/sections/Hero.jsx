import { motion } from "framer-motion";
import duvalPhoto from "../../assets/images/duval.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white mt-20">

            {/* Grille discrète */}
            <div
                className="
        absolute inset-0
        opacity-[0.0015]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
            />

            {/* Glow bleu */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[180px] opacity-60" />

            {/* Glow violet */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200 rounded-full blur-[180px] opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 gap-16 items-center">

                {/* TEXTE */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <h1 className="mt-10 text-6xl lg:text-8xl font-bold leading-none text-slate-900">
                        Feukeu{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                            Duval
                        </span>
                    </h1>

                    <h2 className="mt-6 text-3xl lg:text-5xl font-semibold text-slate-800">
                        Développeur Web &
                        <br />
                        Fondateur de{" "}
                        <span className="text-blue-600">
                            Dev-Elites
                        </span>
                    </h2>

                    <p className="mt-8 text-xl text-slate-600 max-w-xl leading-relaxed">
                        Je construis des applications web modernes et j'aide les jeunes à
                        développer leurs compétences numériques grâce à Duval Tech et
                        Dev-Elites.
                    </p>

                    {/* Boutons */}

                    <div className="mt-10 flex flex-wrap gap-4">

<a
    href="#projects"
    className="
      inline-block
      px-8 py-4 rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      text-white
      shadow-xl
      hover:scale-105
      transition
    "
>
    Voir mes projets →
</a>

<a
  href="/cv/FEUKEU-DUVAL-CV.pdf"
  download
  className="
    px-8 py-4 rounded-2xl
    border border-slate-300
    bg-white
    text-slate-800
    hover:border-blue-500
    hover:shadow-lg
    transition
  "
>
  Télécharger mon CV
</a>

                    </div>

                    {/* Informations */}

                </motion.div>

                {/* PHOTO */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >

                    {/* Cercle lumineux */}

                    <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-blue-400 opacity-50" />

                    <div className="absolute w-[420px] h-[420px] bg-blue-300 blur-[120px] opacity-30 rounded-full" />

                    {/* Carte photo */}

                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="
            relative
            bg-white/80
            backdrop-blur-xl
            border
            border-slate-200
            rounded-[40px]
            shadow-2xl
            p-4
          "
                    >
                        <img
                            src={duvalPhoto}
                            alt="Feukeu Duval"
                            className="w-[450px] rounded-[30px]"
                        />
                    </motion.div>

                    {/* Badge React */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 6 }}
                        className="
            absolute
            left-8
            bottom-0
            bg-blue-600
            border
            border-slate-200
            px-6
            py-4
            rounded-2xl
            shadow-xl
            text-white
          "
                    >
                           FEUKEU DUVAL 
                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
};

export default Hero;