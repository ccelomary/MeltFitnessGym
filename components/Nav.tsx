"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = ["About", "Offers", "Services", "Gallery", "Pricing", "Testimonials", "Contact"];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(8,10,17,0.5)", "rgba(8,10,17,0.95)"]);
  const shadow = useTransform(scrollY, [0, 120], ["0 0 0 rgba(0,0,0,0)", "0 12px 30px rgba(0,0,0,0.4)"]);

  return (
    <motion.header style={{ backgroundColor: bg, boxShadow: shadow }} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-md">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-lg font-black tracking-tight text-white">
          <Dumbbell className="h-6 w-6 text-primary" />
          Melt Fitness Gym
        </Link>

        <ul className="hidden items-center gap-5 text-sm font-semibold text-white/85 md:flex">
          {links.map((link) => (
            <li key={link}>
              <Link href={`#${link.toLowerCase()}`} className="transition-colors hover:text-secondary">
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Button size="sm" variant="secondary">Join Now</Button>
      </nav>
    </motion.header>
  );
}
