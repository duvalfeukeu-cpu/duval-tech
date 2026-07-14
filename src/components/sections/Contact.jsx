import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Mail,
  Phone,
} from "lucide-react";

import {
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const API = "http://localhost:5000/api/messages";

const Contact = () => {
  // ==========================
  // STATES
  // ==========================

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ==========================
  // HANDLE INPUTS
  // ==========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================
  // ENVOYER LE MESSAGE
  // ==========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur serveur.");
      }

      toast.success("Votre message a été envoyé avec succès !");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      toast.error(
        error.message || "Impossible d'envoyer le message."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-slate-50"
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
            CONTACT
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Discutons de votre projet 🚀
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Une idée de projet ? Une opportunité ?
            Une collaboration ?
            Je suis toujours ouvert aux nouvelles discussions.
          </p>

        </motion.div>

        {/* CONTENU */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* INFORMATIONS */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white/80
              backdrop-blur-xl
              p-10
              rounded-3xl
              shadow-xl
              border
              border-slate-200
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            <h3 className="text-3xl font-bold text-slate-900">
              Restons connectés
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <a
                    href="mailto:duvalfeukeu@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    duvalfeukeu@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" />

                <div>
                  <p className="font-semibold">
                    Téléphone
                  </p>

                  <a
                    href="tel:+237654427024"
                    className="text-blue-600 hover:underline"
                  >
                    +237 654427024
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl" />

                <div>

                  <p className="font-semibold">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/duval-tech"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/duval-tech
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-green-500" />

                <div>

                  <p className="font-semibold">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/237654427024"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Discuter sur WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* FORMULAIRE */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white
              p-10
              rounded-3xl
              shadow-xl
              border
              border-slate-200
            "
          >

            <div className="space-y-6">
                              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-slate-300
                  outline-none
                  focus:border-blue-500
                "
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-slate-300
                  outline-none
                  focus:border-blue-500
                "
              />

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Sujet"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-slate-300
                  outline-none
                  focus:border-blue-500
                "
              />

              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-slate-300
                  outline-none
                  focus:border-blue-500
                  resize-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  disabled:bg-blue-400
                  disabled:cursor-not-allowed
                  text-white
                  font-semibold
                  transition
                "
              >
                {loading
                  ? "Envoi en cours..."
                  : "Envoyer le message"}
              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
            
            