"use client";

import { motion } from "framer-motion";

interface OfferCardProps {
  title: string;
  description: string;
  gradient: string;
}

export default function OfferCard({ title, description, gradient }: OfferCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.03, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`min-h-44 rounded-3xl p-6 text-white shadow-xl ${gradient}`}
    >
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-3 max-w-xs text-sm text-white/90">{description}</p>
    </motion.article>
  );
}
