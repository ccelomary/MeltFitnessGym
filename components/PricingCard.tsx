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
      className={`rounded-xl border p-6 shadow-2xl ${featured ? "border-secondary bg-gradient-to-b from-[#241d00] to-[#111723]" : "border-white/10 bg-[#0f1422]"}`}
    >
      <div className="mb-4 inline-block rounded bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
        {plan}
      </div>
      <p className="text-4xl font-black text-white">{price}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-secondary" /> {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-6 w-full" variant={featured ? "secondary" : "default"}>Join Now</Button>
    </motion.div>
  );
}
