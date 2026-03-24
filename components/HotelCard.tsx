"use client";
import { motion } from "framer-motion";

interface HotelCardProps {
  category: string;
  name: string;
  description: string;
  price?: string;
  delay?: number;
}

export default function HotelCard({ category, name, description, price, delay = 0 }: HotelCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 flex flex-col h-full border-t-2 border-t-gold/50 hover:border-t-gold transition-colors duration-500 shadow-sm hover:shadow-md"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4 block">
        {category}
      </span>
      <h3 className="font-display text-2xl mb-4 text-foreground">{name}</h3>
      <p className="font-sans text-sm text-foreground/70 leading-relaxed flex-grow">
        {description}
      </p>
      {price && (
        <span className="text-xs font-semibold mt-6 block tracking-widest text-foreground/50">
          {price}
        </span>
      )}
    </motion.div>
  );
}
