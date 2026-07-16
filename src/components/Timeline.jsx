import { motion } from "framer-motion";

export default function Timeline({ items, renderItem }) {
  return (
    <ul className="relative space-y-10 border-l border-border pl-8">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent shadow-[0_0_0_3px_rgb(var(--color-accent)/0.25)]" />
          {renderItem(item)}
        </motion.li>
      ))}
    </ul>
  );
}
