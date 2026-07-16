import { motion } from "framer-motion";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Next.js", color: "#000000" },
  { name: "GraphQL", color: "#E10098" },
];

export default function TechStack() {
  return (
    <div className="mt-8 sm:mt-12">
      <h3 className="text-center font-display text-lg font-semibold sm:text-xl lg:text-2xl text-muted">
        Tecnologías
      </h3>
      <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="group relative"
          >
            <div
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-border bg-surface text-xs sm:text-sm font-medium transition-all duration-300 hover:border-accent hover:scale-105 cursor-default"
              style={{ 
                borderColor: index % 2 === 0 ? 'rgba(34 197 94, 0.3)' : 'rgba(16 185 129, 0.3)',
                backgroundColor: 'rgba(20 20 20, 0.8)'
              }}
            >
              <span className="text-text group-hover:text-accent transition-colors">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}