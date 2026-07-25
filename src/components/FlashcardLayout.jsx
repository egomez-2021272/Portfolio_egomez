import { motion } from "framer-motion";

export default function FlashcardLayout({ children }) {
  return (
    <div className="fixed inset-0 bg-bg dot-grid">
      {/* Content */}
      <div className="relative z-10 flex h-full w-full max-w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}