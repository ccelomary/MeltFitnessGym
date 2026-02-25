"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  quote: string;
}

export default function Testimonial({ name, quote }: TestimonialProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-xl border border-white/15 bg-[#0f1422] p-6 shadow-xl"
    >
      <p className="text-slate-200">“{quote}”</p>
      <footer className="mt-4 text-sm font-black uppercase tracking-wider text-secondary">— {name}</footer>
    </motion.blockquote>
  );
}
