"use client";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";

export default function GiftsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative bg-background">
      <SectionTitle 
        title="Gifts & Contributions" 
        subtitle="Your presence at our wedding is the greatest gift of all." 
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto glass-card p-8 md:p-14 text-center"
      >
        <p className="font-sans text-sm tracking-wide text-foreground/80 leading-relaxed mb-10">
          Should you wish to honor us with a gift, a contribution towards our future together would be sincerely appreciated.
        </p>

        <div className="bg-foreground/5 p-8 rounded-sm mb-10 text-left border border-foreground/10">
          <h3 className="font-display text-2xl text-gold mb-6 border-b border-foreground/10 pb-4">Digital Registry</h3>
          <div className="space-y-6 font-sans text-sm">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-1">Account Holder</span>
              <span className="font-medium text-foreground tracking-widest text-base">Esther Derveld</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-1">IBAN</span>
              <span className="font-medium text-foreground tracking-widest font-mono">NL15 REVO 8313 6603 14</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-1">BIC/SWIFT</span>
              <span className="font-medium text-foreground tracking-widest font-mono">REVONL22</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#" className="flex-1 bg-foreground text-background hover:bg-gold hover:text-white py-5 uppercase tracking-[0.2em] text-[10px] font-semibold transition-all duration-300">
            Revolut Contribution
          </a>
          <a href="#" className="flex-1 border border-foreground text-foreground hover:bg-foreground hover:text-background py-5 uppercase tracking-[0.2em] text-[10px] font-semibold transition-all duration-300">
            PayPal Contribution
          </a>
        </div>
      </motion.div>
    </div>
  );
}
