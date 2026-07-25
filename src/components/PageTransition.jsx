import { motion } from "framer-motion";

const barColors = [
  "rgba(34 197 94, 0.5)",   // verde con opacidad
  "rgba(16 185 129, 0.5)",  // verde esmeralda con opacidad
  "rgba(52 211 153, 0.5)",  // verde turquesa con opacidad
  "rgba(74 222 128, 0.5)",  // verde claro con opacidad
  "rgba(34 197 94, 0.5)",   // verde con opacidad
  "rgba(16 185 129, 0.5)",  // verde esmeralda con opacidad
  "rgba(52 211 153, 0.5)",  // verde turquesa con opacidad
  "rgba(74 222 128, 0.5)",  // verde claro con opacidad
];

export default function PageTransition({ children, isAnimating }) {
  return (
    <>
      {children}
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {barColors.map((color, i) => (
            <motion.div
              key={i}
              className="flex-1"
              style={{ backgroundColor: color }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{
                duration: 2.5,
                delay: i * 0.12,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}