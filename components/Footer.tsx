export default function Footer() {
  return (
    <footer className="w-full bg-background py-16 mt-auto border-t border-foreground/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="font-script text-4xl lg:text-5xl text-gold pb-2">Clement & Esther</h2>
        <div className="flex space-x-6 text-sm uppercase tracking-widest text-foreground/60">
          <p>We look forward to celebrating with you.</p>
        </div>
        <p className="text-xs text-foreground/40 mt-8 tracking-widest uppercase">
          © {new Date().getFullYear()} Clement & Esther. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
