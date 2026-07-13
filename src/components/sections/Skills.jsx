import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/skills";

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

  return (
    <section
      id="skills"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-blue-600 font-semibold tracking-widest">
            COMPÉTENCES
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Technologies & Outils
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Les technologies que j'utilise et continue de maîtriser chaque jour.
          </p>
        </motion.div>

        {/* Loading */}

        {loading && (
          <div className="text-center mt-20 text-slate-500">
            Chargement...
          </div>
        )}

        {/* Aucune compétence */}

        {!loading && skills.length === 0 && (
          <div className="text-center mt-20 text-slate-500">
            Aucune compétence disponible.
          </div>
        )}

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                bg-white
                p-8
                rounded-3xl
                border
                border-slate-200
                shadow-lg
                hover:shadow-xl
                transition
              "
            >

              <div className="flex justify-between items-center mb-4">

                <div>

                  <h3 className="font-semibold text-slate-900 text-xl">
                    {skill.name}
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    {skill.category}
                  </p>

                </div>

                <span
                  className="font-bold"
                  style={{
                    color: skill.color || "#2563eb",
                  }}
                >
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                  }}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor:
                      skill.color || "#2563eb",
                  }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;