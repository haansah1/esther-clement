"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
}

export default function SectionTitle({ title, subtitle, theme = "dark" }: SectionTitleProps) {
  const textColor = theme === "dark" ? "text-foreground" : "text-white";
  const subtitleColor = theme === "dark" ? "text-foreground/60" : "text-white/80";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 flex flex-col items-center"
    >
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl mb-6 ${textColor}`}>
        {title}
      </h2>
      <div className="w-16 h-[2px] bg-gold mb-6" />
      {subtitle && (
        <p className={`max-w-2xl mx-auto font-sans text-sm tracking-widest leading-relaxed uppercase ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
