"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export default function PricingCard({ plan, price, features, featured }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className={`rounded-3xl border p-6 shadow-lg ${featured ? "border-primary bg-gradient-to-b from-primary/10 to-white" : "bg-white"}`}
    >
      <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
        {plan}
      </div>
      <p className="text-4xl font-black text-primary">{price}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-secondary" /> {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-6 w-full">Join Now</Button>
    </motion.div>
  );
}
