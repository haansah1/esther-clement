"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="relative aspect-square md:aspect-[4/5] overflow-hidden group shadow-lg"
        >
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </motion.div>
      ))}
    </div>
  );
}
