"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">

      {/* Tooltip text */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mr-3 px-4 py-2 rounded-xl bg-(--bgt) border border-(--border) text-sm font-medium text-(--maincolor) whitespace-nowrap shadow-[0_0_20px_var(--mainglow)]"
          >
            View My Portfolio →
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://developerzaid.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-14 h-14 rounded-2xl bg-(--maincolor) text-slate-950 flex items-center justify-center font-bold text-lg shadow-[0_0_25px_var(--mainglow)] hover:shadow-[0_0_40px_var(--mainglow-strong)] transition-shadow duration-300"
      >
        ZK
      </motion.a>

    </div>
  );
}