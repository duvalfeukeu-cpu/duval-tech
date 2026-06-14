import { motion } from "framer-motion";
import {
  Code2,
  Users,
  Brain,
  Video,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Développement Web",
    description:
      "Création de sites web modernes, rapides et responsives avec les technologies les plus récentes.",
  },
  {
    icon: <Users size={40} />,
    title: "Dev-Elites",
    description:
      "Une communauté dédiée à l'apprentissage de la programmation et de la technologie.",
  },
  {
    icon: <Video size={40} />,
    title: "Création de contenu",
    description:
      "Partage de connaissances en informatique, développement web et entrepreneuriat tech.",
  },
  {
    icon: <Brain size={40} />,
    title: "Intelligence Artificielle",
    description:
      "Exploration et intégration des outils IA pour améliorer la productivité et l'innovation.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold tracking-widest">
            CE QUE JE FAIS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Construire, apprendre et partager
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            J'aide les personnes à découvrir la technologie tout en
            développant mes propres projets numériques.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                bg-white
                p-10
                rounded-3xl
                border
                border-slate-200
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-blue-600">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;