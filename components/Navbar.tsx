"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "RSVP", href: "/rsvp" },
  { name: "Guidelines", href: "/rules" },
  { name: "Gallery", href: "/gallery" },
  { name: "Hotels", href: "/hotels" },
  { name: "Gifts", href: "/gifts" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // On home page before scrolling, text should be white if hero has dark overlay.
  // Actually, we can just stick to white text on transparent home, and dark text otherwise.
  const navbarClasses = scrolled 
    ? "bg-background/95 backdrop-blur-md shadow-sm py-4 text-foreground" 
    : isHome 
      ? "bg-transparent py-6 text-white" 
      : "bg-transparent py-6 text-foreground";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-display font-semibold text-xl tracking-widest uppercase">
          Clement & Esther
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${
                  isActive ? "text-gold font-medium" : "opacity-80 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background text-foreground border-b border-foreground/10 shadow-lg py-6 flex flex-col items-center space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href ? "text-gold font-medium" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
