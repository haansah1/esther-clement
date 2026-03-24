"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/breadcrumb/clemest2.png" 
          alt="Clement and Esther Mobile" 
          fill
          priority
          className="object-cover md:hidden"
        />
        <Image 
          src="/assets/breadcrumb/clemest1.png" 
          alt="Clement and Esther Desktop" 
          fill
          priority
          className="object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 text-white max-w-4xl flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-6xl md:text-8xl lg:text-[10rem] mb-6 text-gold drop-shadow-lg"
        >
          Clement & Esther
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-xs md:text-sm tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-12 max-w-2xl mx-auto leading-loose text-white/90"
        >
          Together with love, we invite you to celebrate our wedding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link 
            href="/rsvp" 
            className="inline-block px-12 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-500 font-sans tracking-[0.2em] text-xs uppercase"
          >
            RSVP Now
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
