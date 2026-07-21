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
    className="relative overflow-hidden bg-[#08131F] py-32"
>

    {/* Glow */}

    <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[180px]" />

    <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-cyan-500/10 blur-[180px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* ================= LEFT ================= */}

            <motion.div

                initial={{
                    opacity:0,
                    x:-40,
                }}

                whileInView={{
                    opacity:1,
                    x:0,
                }}

                viewport={{
                    once:true,
                }}

                transition={{
                    duration:.7,
                }}

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

                    CONTACT

                </span>

                <h2
                    className="
                        mt-8
                        text-5xl
                        lg:text-7xl
                        font-bold
                        leading-tight
                        text-white
                    "
                >

                    Let's

                    <span className="text-blue-500">

                        {" "}work

                    </span>

                    together

                </h2>

                <p
                    className="
                        mt-8
                        text-lg
                        leading-9
                        text-slate-400
                        max-w-lg
                    "
                >

                    Une idée de projet ?

                    Une collaboration ?

                    Ou simplement une question ?

                    Je suis toujours disponible pour discuter
                    de nouvelles opportunités.

                </p>

                {/* Contact */}

                <div className="mt-14 space-y-7">

                    {/* Email */}

                    <div className="flex items-center gap-5">

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                bg-blue-500/10
                                border
                                border-blue-500/20
                                text-blue-400
                            "
                        >

                            <Mail size={22}/>

                        </div>

                        <div>

                            <p className="text-slate-500 text-sm">

                                Email

                            </p>

                            <a

                                href="mailto:duvalfeukeu@gmail.com"

                                className="
                                    text-white
                                    hover:text-blue-400
                                    transition
                                "

                            >

                                duvalfeukeu@gmail.com

                            </a>

                        </div>

                    </div>

                    {/* Téléphone */}

                    <div className="flex items-center gap-5">

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                bg-blue-500/10
                                border
                                border-blue-500/20
                                text-blue-400
                            "
                        >

                            <Phone size={22}/>

                        </div>

                        <div>

                            <p className="text-slate-500 text-sm">

                                Téléphone

                            </p>

                            <a

                                href="tel:+237654427024"

                                className="
                                    text-white
                                    hover:text-blue-400
                                    transition
                                "

                            >

                                +237 654 427 024

                            </a>

                        </div>

                    </div>

                    {/* Github */}

                    <div className="flex items-center gap-5">

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                bg-blue-500/10
                                border
                                border-blue-500/20
                            "
                        >

                            <FaGithub
                                className="text-blue-400 text-xl"
                            />

                        </div>

                        <div>

                            <p className="text-slate-500 text-sm">

                                GitHub

                            </p>

                            <a

                                href="https://github.com/duval-tech"

                                target="_blank"

                                rel="noreferrer"

                                className="
                                    text-white
                                    hover:text-blue-400
                                    transition
                                "

                            >

                                github.com/duval-tech

                            </a>

                        </div>

                    </div>

                    {/* WhatsApp */}

                    <div className="flex items-center gap-5">

                        <div
                            className="
                                w-14
                                h-14
                                rounded-2xl
                                flex
                                items-center
                                justify-center
                                bg-green-500/10
                                border
                                border-green-500/20
                            "
                        >

                            <FaWhatsapp
                                className="text-green-400 text-xl"
                            />

                        </div>

                        <div>

                            <p className="text-slate-500 text-sm">

                                WhatsApp

                            </p>

                            <a

                                href="https://wa.me/237654427024"

                                target="_blank"

                                rel="noreferrer"

                                className="
                                    text-white
                                    hover:text-green-400
                                    transition
                                "

                            >

                                Discuter sur WhatsApp

                            </a>

                        </div>

                    </div>

                </div>

            </motion.div>

            {/* ================= FORM ================= */}

            <motion.form

                onSubmit={handleSubmit}

                initial={{
                    opacity:0,
                    x:40,
                }}

                whileInView={{
                    opacity:1,
                    x:0,
                }}

                viewport={{
                    once:true,
                }}

                transition={{
                    duration:.7,
                }}

                className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-10
                    shadow-[0_20px_80px_rgba(0,0,0,.25)]
                "

            >

                <h3
                    className="
                        text-3xl
                        font-bold
                        text-white
                        mb-10
                    "
                >

                    Envoyez-moi un message

                </h3>

                {/* ====== La Partie 2 commencera ici ====== */}
                <div className="grid md:grid-cols-2 gap-5">

    {/* Nom */}

    <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Votre nom"
        className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition
            focus:border-blue-500
            focus:bg-white/10
        "
    />

    {/* Email */}

    <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Votre adresse email"
        className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition
            focus:border-blue-500
            focus:bg-white/10
        "
    />

</div>

{/* Sujet */}

<input
    type="text"
    name="subject"
    value={form.subject}
    onChange={handleChange}
    placeholder="Sujet"
    className="
        mt-5
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-blue-500
        focus:bg-white/10
    "
/>

{/* Message */}

<textarea
    rows="7"
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Décrivez votre projet ou votre demande..."
    className="
        mt-5
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        text-white
        placeholder:text-slate-500
        outline-none
        resize-none
        transition
        focus:border-blue-500
        focus:bg-white/10
    "
/>

{/* Bouton */}

<motion.button

    whileHover={{
        scale: 1.02,
    }}

    whileTap={{
        scale: .98,
    }}

    type="submit"

    disabled={loading}

    className="
        mt-7
        w-full
        rounded-2xl
        bg-blue-600
        py-5
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-500
        disabled:cursor-not-allowed
        disabled:opacity-60
    "

>

    <div className="flex items-center justify-center gap-3">

        {loading
            ? "Envoi en cours..."
            : "Envoyer le message"}

        {!loading && (

            <motion.span

                animate={{
                    x: [0, 6, 0],
                }}

                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}

            >

                →

            </motion.span>

        )}

    </div>

</motion.button>

</motion.form>

</div>

</div>

</section>

);

};

export default Contact;


            
            