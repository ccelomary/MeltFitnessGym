"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="gradient-banner animate-shimmer">
        <div className="container section-padding relative z-10">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Memberships Growing Fast In UAE
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Burn Limits. Build Power. Belong At Melt Fitness Gym.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-2xl text-lg text-white/90">
            Inspired by vibrant social energy and high-performance coaching — this is where transformation becomes your lifestyle.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
            <Button size="lg">Join Now</Button>
            <Button size="lg" variant="outline">Book a Free Trial</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
