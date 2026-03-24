"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/assets/dresscode/IMG_0916.JPG",
  "/assets/dresscode/IMG_0917.JPG",
  "/assets/dresscode/IMG_0918.JPG",
  "/assets/dresscode/IMG_0919.JPG",
  "/assets/dresscode/IMG_0920.JPG",
  "/assets/dresscode/IMG_0921.JPG",
  "/assets/dresscode/IMG_0922.JPG",
  "/assets/dresscode/IMG_0923.JPG",
  "/assets/dresscode/IMG_0924.JPG",
];

export default function DresscodeGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key and navigate on arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex !== null) handleNext(e);
      if (e.key === "ArrowLeft" && selectedIndex !== null) handlePrev(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = (e?: React.MouseEvent | KeyboardEvent | React.KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  };

  const handlePrev = (e?: React.MouseEvent | KeyboardEvent | React.KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  };

  return (
    <div className="mt-12">
      {/* 3x3 Grid on all screens */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="relative aspect-[3/4] cursor-pointer overflow-hidden group rounded-sm bg-foreground/5"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={src}
              alt={`Dresscode Inspiration ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50 transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/50 hover:text-white p-4 z-50 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl h-[70vh] md:h-[85vh] mx-16 md:mx-0 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Dresscode Lightbox ${selectedIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>

            <button 
              className="absolute right-4 md:right-10 text-white/50 hover:text-white p-4 z-50 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-sans text-xs tracking-widest">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
