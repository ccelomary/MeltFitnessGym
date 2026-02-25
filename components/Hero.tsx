"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="promo-stripe py-2 text-center text-xs font-black uppercase tracking-wider sm:text-sm">
        Limited Deal: Join This Week & Get 2 Free PT Sessions
      </div>

      <div className="gradient-banner relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.22),transparent_35%)]" />
        <div className="container section-padding relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border-l-4 border-secondary bg-black/30 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white"
          >
            Dubai’s High-Impact Transformation Gym
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Train Harder. Look Stronger. Live Sharper.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-white/90"
          >
            Inspired by premium performance clubs: bold visuals, serious coaching, measurable fat-loss and strength gains for every member.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button size="lg">Join Now</Button>
            <Button size="lg" variant="secondary">Book a Free Trial</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
