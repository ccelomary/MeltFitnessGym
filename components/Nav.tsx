"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = ["About", "Offers", "Services", "Gallery", "Pricing", "Testimonials", "Contact"];

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.35)", "rgba(255,255,255,0.95)"]);
  const shadow = useTransform(scrollY, [0, 120], ["0 0 0 rgba(0,0,0,0)", "0 10px 30px rgba(38,24,89,0.12)"]);

  return (
    <motion.header style={{ backgroundColor: bg, boxShadow: shadow }} className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-lg font-black tracking-tight text-primary">
          <Dumbbell className="h-6 w-6" />
          Melt Fitness Gym
        </Link>

        <ul className="hidden items-center gap-5 text-sm font-semibold md:flex">
          {links.map((link) => (
            <li key={link}>
              <Link href={`#${link.toLowerCase()}`} className="transition-colors hover:text-primary">
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Button size="sm">Join Now</Button>
      </nav>
    </motion.header>
  );
}
