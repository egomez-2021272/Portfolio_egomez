import { motion } from "framer-motion";
import NavBar from "../components/NavBar.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import projects from "../data/projects.json";

export default function ProjectViews() {
  const projectsWithImages = projects.items.filter(p => p.image && p.featured);

  return (
    <div className="relative flex h-full w-full flex-col">
      <NavBar />
      
      <section className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-5xl lg:max-w-6xl">
          <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Vistas de Proyectos
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Capturas de pantalla de los proyectos con interfaz visual
          </p>

          {projectsWithImages.length > 0 ? (
            <div className="mt-8 sm:mt-12 grid gap-8 sm:gap-12">
              {projectsWithImages.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl sm:rounded-3xl border border-border bg-surface overflow-hidden"
                >
                  <div className="p-4 sm:p-6 border-b border-border">
                    <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">
                      {project.name}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-muted">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-4 sm:p-6">
                    <ImagePlaceholder
                      src={project.image}
                      alt={`Vista de ${project.name}`}
                      className="rounded-xl border border-border w-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center">
              <p className="text-base sm:text-lg text-muted">
                No hay proyectos con imágenes disponibles
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}