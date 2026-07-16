import { motion } from "framer-motion";

// Distribuye los grupos de skills en anillos concéntricos.
// "rings" es un arreglo de arreglos: cada sub-arreglo es un anillo, del centro hacia afuera.
// El primer elemento del primer anillo se usa como núcleo central.
export default function SkillsOrbit({ core, rings }) {
  // radios de cada anillo (en px, sobre un viewBox de 600x600)
  const baseRadius = 70;
  const ringGap = 55;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full text-border"
      >
        {rings.map((_, ringIndex) => (
          <circle
            key={ringIndex}
            cx="300"
            cy="300"
            r={baseRadius + ringIndex * ringGap}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Núcleo central */}
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-text text-xs font-semibold text-bg sm:h-20 sm:w-20 sm:text-sm">
        {core}
      </div>

      {/* Chips distribuidos en cada anillo */}
      {rings.map((ring, ringIndex) => {
        const radius = baseRadius + ringIndex * ringGap;
        return ring.map((skill, i) => {
          const angle = (2 * Math.PI * i) / ring.length + ringIndex * 0.4;
          // Coordenadas relativas al centro (300,300) del viewBox 600x600 -> convertidas a %
          const x = 50 + (Math.cos(angle) * radius * 100) / 600;
          const y = 50 + (Math.sin(angle) * radius * 100) / 600;

          return (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text shadow-sm sm:text-sm"
            >
              {skill}
            </motion.span>
          );
        });
      })}
    </div>
  );
}
