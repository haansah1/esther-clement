"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plusOne: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center max-w-xl mx-auto"
      >
        <h3 className="font-display text-4xl text-gold mb-6">Thank You</h3>
        <p className="text-foreground/70 font-sans tracking-wide leading-relaxed text-sm uppercase">
          Your RSVP has been confirmed. We can't wait to celebrate this special day with you.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="glass-card p-8 md:p-14 max-w-2xl mx-auto flex flex-col space-y-8"
    >
      <div className="flex flex-col space-y-3">
        <label htmlFor="name" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/60 font-semibold">Full Name</label>
        <input 
          type="text" 
          id="name"
          required
          className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-gold transition-colors text-foreground font-sans placeholder-foreground/20 text-sm md:text-base"
          placeholder="e.g. John Doe"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="email" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/60 font-semibold">Email Address</label>
        <input 
          type="email" 
          id="email"
          required
          className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-gold transition-colors text-foreground font-sans placeholder-foreground/20 text-sm md:text-base"
          placeholder="e.g. john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="phone" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/60 font-semibold">Phone Number</label>
        <input 
          type="tel" 
          id="phone"
          required
          className="bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-gold transition-colors text-foreground font-sans placeholder-foreground/20 text-sm md:text-base"
          placeholder="+1 234 567 890"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 gap-4">
        <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/60 font-semibold">Bring a Plus One?</label>
        <div className="flex bg-foreground/5 p-1 rounded-sm">
          <button 
            type="button"
            className={`px-8 py-3 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 ${!formData.plusOne ? 'bg-background shadow-sm text-foreground font-semibold' : 'text-foreground/50 hover:text-foreground/80'}`}
            onClick={() => setFormData({...formData, plusOne: false})}
          >
            No
          </button>
          <button 
            type="button"
            className={`px-8 py-3 text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 ${formData.plusOne ? 'bg-background shadow-sm text-foreground font-semibold' : 'text-foreground/50 hover:text-foreground/80'}`}
            onClick={() => setFormData({...formData, plusOne: true})}
          >
            Yes
          </button>
        </div>
      </div>

      <div className="pt-10">
        <button 
          type="submit" 
          className="w-full bg-foreground text-background hover:bg-gold hover:text-white py-5 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-500"
        >
          Confirm Attendance
        </button>
      </div>
    </motion.form>
  );
}
