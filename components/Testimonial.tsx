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
      className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm"
    >
      <p className="text-muted-foreground">“{quote}”</p>
      <footer className="mt-4 text-sm font-bold text-primary">— {name}</footer>
    </motion.blockquote>
  );
}
