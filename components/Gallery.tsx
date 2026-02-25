"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  "https://images.unsplash.com/photo-1649789261044-0c6a9fb528ff",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  "https://images.unsplash.com/photo-1549476464-37392f717541",
  "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a",
  "https://images.unsplash.com/photo-1584863231364-2edc166de576",
  "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c",
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((src, index) => (
        <motion.div key={src} whileHover={{ scale: 1.04 }} className="group relative overflow-hidden rounded-xl border border-white/10">
          <Image
            src={`${src}?auto=format&fit=crop&w=800&q=80`}
            alt={`Gym gallery ${index + 1}`}
            width={400}
            height={300}
            className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
          />
        </motion.div>
      ))}
    </div>
  );
}
