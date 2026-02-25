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
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`min-h-44 rounded-xl border border-white/15 p-6 text-white shadow-2xl ${gradient}`}
    >
      <p className="inline-block rounded bg-black/25 px-2 py-1 text-xs font-bold uppercase tracking-wider">Limited Time</p>
      <h3 className="mt-3 text-2xl font-black uppercase">{title}</h3>
      <p className="mt-3 max-w-xs text-sm text-white/90">{description}</p>
    </motion.article>
  );
}
