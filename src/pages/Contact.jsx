import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar.jsx";
import profile from "../data/profile.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Estuardo Gómez"
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error al enviar email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col">
      <NavBar />
      
      <section className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-center">
              Contáctame
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted text-center max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente o quieres colaborar? Envíame un mensaje y te responderé lo antes posible.
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">
                  Información de Contacto
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <a href={`mailto:${profile.email}`} className="text-base sm:text-lg font-medium text-text hover:text-accent transition-colors">
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  {profile.phone && (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted">Teléfono</p>
                        <a href={`tel:${profile.phone}`} className="text-base sm:text-lg font-medium text-text hover:text-accent transition-colors">
                          {profile.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {profile.location && (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted">Ubicación</p>
                        <p className="text-base sm:text-lg font-medium text-text">
                          {profile.location}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Redes sociales */}
              {profile.socials && profile.socials.length > 0 && (
                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">
                    Sígueme
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {profile.socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface/50 hover:border-accent hover:text-accent transition-all duration-300"
                      >
                        <span>{social.label}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Formulario de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">
                  Envíame un mensaje
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface/50 text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface/50 text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface/50 text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Asunto del mensaje"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface/50 text-text placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-text px-6 py-3 text-sm sm:text-base font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center"
                    >
                      <p className="text-green-400 font-medium">
                        ¡Mensaje enviado correctamente! Te responderé pronto.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-center"
                    >
                      <p className="text-red-400 font-medium">
                        Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}