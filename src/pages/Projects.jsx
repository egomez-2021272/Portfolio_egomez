import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import NavBar from "../components/NavBar.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import projects from "../data/projects.json";

export default function Projects() {
  const featured = projects.items.filter((p) => p.featured);
  const rest = projects.items.filter((p) => !p.featured);

  return (
    <div className="relative flex h-full w-full flex-col">
      <NavBar />
      
      <section className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
          <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {projects.title}
          </h1>

          <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
            {featured.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface"
    >
      <ImagePlaceholder
        src={project.image}
        alt={project.name}
        className="aspect-video w-full object-cover"
      />
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent">
          {project.tag}
        </p>
        <h2 className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-bold">
          {project.name}
        </h2>
        {project.description && (
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted">{project.description}</p>
        )}
        
        {/* Habilidades aprendidas */}
        {project.skillsLearned && project.skillsLearned.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm font-semibold text-muted mb-2">Habilidades aprendidas:</p>
            <div className="flex flex-wrap gap-2">
              {project.skillsLearned.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs sm:text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Imagen del código */}
        {project.codeImage && (
          <div className="mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm font-semibold text-muted mb-2">Vista del código:</p>
            <ImagePlaceholder
              src={project.codeImage}
              alt="Código del proyecto"
              className="rounded-lg border border-border w-full"
            />
          </div>
        )}

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={16} sm:size={18} /> Repositorio
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-text px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium text-bg transition-opacity hover:opacity-90"
            >
              Ver proyecto <ArrowUpRight size={16} sm:size={18} />
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base transition-colors hover:border-accent hover:text-accent"
            >
              Descargar
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="group block overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-surface"
    >
      <ImagePlaceholder
        src={project.image}
        alt={project.name}
        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="p-4 sm:p-5">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-accent">
          {project.tag}
        </p>
        <h2 className="mt-1 sm:mt-2 flex items-center gap-1 font-display text-sm sm:text-base font-semibold">
          {project.name}
          <ArrowUpRight
            size={14} sm:size={16}
            className="opacity-0 transition-opacity group-hover:opacity-100"
          />
        </h2>
        {project.description && (
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted">{project.description}</p>
        )}
      </div>
    </motion.a>
  );
}
