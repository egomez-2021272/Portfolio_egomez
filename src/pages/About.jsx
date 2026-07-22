import { motion } from "framer-motion";
import NavBar from "../components/NavBar.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import SkillsOrbit from "../components/SkillsOrbit.jsx";
import Timeline from "../components/Timeline.jsx";
import about from "../data/about.json";

export default function About() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <NavBar />

      <section className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
          <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {about.title}
          </h1>

          {/* biografía y foto */}
          <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-accent">
                {about.bioTitle}
              </h2>
              <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-sm sm:text-base text-muted text-justify">
                {about.bio.map((paragraph, i) => (
                  <p key={i}>{renderBold(paragraph)}</p>
                ))}
              </div>
            </div>

            <ImagePlaceholder
              src={about.photo}
              alt="Foto de perfil"
              className="aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] rounded-3xl object-cover lg:justify-self-end mx-auto shadow-2xl"
            />
          </div>

          {/* Datos generales */}
          {about.personalInfo && (
            <div className="mt-10 sm:mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
                Datos Generales
              </h2>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="text-xs sm:text-sm text-muted">Nombre</p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    Estuardo Daniel Gómez Chity
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted">Edad</p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    {about.personalInfo.age} años
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted">Ubicación</p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    {about.personalInfo.location}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted">Email</p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    {about.personalInfo.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted">Teléfono</p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    {about.personalInfo.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-muted">Referencias</p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    {about.personalInfo.reference}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs sm:text-sm text-muted">
                    Formación actual
                  </p>
                  <p className="font-display text-base sm:text-lg font-semibold">
                    {about.personalInfo.currentlyStudying
                      ? `Estudiando ${about.personalInfo.studyProgram}`
                      : "No estudiando actualmente"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Estadísticas 
          <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 rounded-2xl border border-border py-6 sm:py-10 text-center">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">
                  {stat.value}+
                </p>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>*/}

          {/* Skills en anillos concéntricos 
          <div className="mt-12 sm:mt-20">
            <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
              Habilidades
            </h2>
            <div className="mt-8 sm:mt-12">
              <SkillsOrbit core={about.skills.core} rings={about.skills.rings} />
            </div>
          </div>*/}

          {/* Habilidades por categorías */}
          {about.skills && (
            <div className="mt-12 sm:mt-20">
              <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                Habilidades
              </h2>

              {/* Lenguajes */}
              {about.skills.languages && about.skills.languages.length > 0 && (
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-center font-display text-lg sm:text-xl lg:text-2xl font-semibold text-accent mb-4 sm:mb-6">
                    Lenguajes
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {about.skills.languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-xl border border-border bg-surface p-6 sm:p-8 text-center hover:border-accent/50 transition-all duration-300 group"
                      >
                        <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-surface/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i
                            className={`${lang.icon} text-3xl sm:text-4xl`}
                            style={{ color: lang.color }}
                          ></i>
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-semibold">
                          {lang.name}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-muted">
                          {lang.level}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frameworks/Librerías */}
              {about.skills.frameworks &&
                about.skills.frameworks.length > 0 && (
                  <div className="mt-8 sm:mt-12">
                    <h3 className="text-center font-display text-lg sm:text-xl lg:text-2xl font-semibold text-accent mb-4 sm:mb-6">
                      Frameworks/Librerías
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                      {about.skills.frameworks.map((framework, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="rounded-xl border border-border bg-surface p-6 sm:p-8 text-center hover:border-accent/50 transition-all duration-300 group"
                        >
                          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-surface/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i
                              className={`${framework.icon} text-3xl sm:text-4xl`}
                              style={{ color: framework.color }}
                            ></i>
                          </div>
                          <h3 className="font-display text-base sm:text-lg font-semibold">
                            {framework.name}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-muted">
                            {framework.level}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Database/DevOps */}
              {about.skills.databaseDevops &&
                about.skills.databaseDevops.length > 0 && (
                  <div className="mt-8 sm:mt-12">
                    <h3 className="text-center font-display text-lg sm:text-xl lg:text-2xl font-semibold text-accent mb-4 sm:mb-6">
                      Database/DevOps
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                      {about.skills.databaseDevops.map((db, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="rounded-xl border border-border bg-surface p-6 sm:p-8 text-center hover:border-accent/50 transition-all duration-300 group"
                        >
                          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-surface/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <i
                              className={`${db.icon} text-3xl sm:text-4xl`}
                              style={{ color: db.color }}
                            ></i>
                          </div>
                          <h3 className="font-display text-base sm:text-lg font-semibold">
                            {db.name}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-muted">
                            {db.level}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}

          {/* Experiencia */}
          <div className="mt-12 sm:mt-20">
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
              Experiencia
            </h2>
            <div className="mt-6 sm:mt-8">
              <Timeline
                items={about.experience}
                renderItem={(job) => (
                  <>
                    <h3 className="font-display text-base sm:text-lg font-semibold">
                      {job.role}{" "}
                      {job.company && (
                        <>
                          @{" "}
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="link-underline text-accent"
                          >
                            {job.company}
                          </a>
                        </>
                      )}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">
                      {job.period} {job.location && `| ${job.location}`}
                    </p>
                    {job.description && (
                      <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-muted">
                        {job.description}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          {/* Educación */}
          <div className="mt-12 sm:mt-20 pb-8 sm:pb-12">
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
              Educación
            </h2>
            <div className="mt-6 sm:mt-8">
              <Timeline
                items={about.education}
                renderItem={(edu) => (
                  <>
                    <h3 className="font-display text-base sm:text-lg font-semibold">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">
                      {edu.period} {edu.institution && `| ${edu.institution}`}
                    </p>
                    {edu.description && (
                      <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-muted">
                        {edu.description}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          {/* Idiomas */}
          {about.languages && about.languages.length > 0 && (
            <div className="mt-12 sm:mt-20">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
                Idiomas
              </h2>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl border border-border bg-surface p-4 sm:p-6"
                  >
                    <h3 className="font-display text-base sm:text-lg font-semibold">
                      {lang.name}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-muted">
                      {lang.level}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Habilidades Blandas */}
          {about.softSkills && about.softSkills.length > 0 && (
            <div className="mt-12 sm:mt-20 pb-8 sm:pb-12">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
                Habilidades Blandas
              </h2>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                {about.softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm sm:text-base text-muted"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Convierte **texto** en <strong>texto</strong> dentro de los párrafos de la bio
function renderBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-text">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}
