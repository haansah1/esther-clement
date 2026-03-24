import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-10">Our Love Story</h2>
           <div className="w-16 h-px bg-gold mx-auto mb-10" />
          <p className="font-sans text-foreground/70 leading-relaxed text-sm md:text-base tracking-[0.05em] uppercase max-w-2xl mx-auto">
            We are thrilled to share this beautiful moment with our closest family and friends. 
            From the bottom of our hearts, thank you for being a part of our journey.
          </p>
        </div>
      </section>
    </>
  );
}
