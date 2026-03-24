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
          <div className="font-sans text-foreground/80 leading-[2] text-sm md:text-base tracking-wide max-w-3xl mx-auto space-y-6 text-left md:text-center">
            <p>
              Who would have imagined that a message sent in 2015, one that never even made it through, was only the beginning of a love story patiently waiting for its perfect time?
            </p>
            <p>
              In December 2023, in Den Haag, fate gently brought us back into each other&apos;s lives. What seemed like a simple moment became the start of something extraordinary. Then, on 13 February 2024, a belated birthday wish opened the door to endless conversations, laughter, and a connection that grew deeper with every passing day. Though miles stood between us, love bridged every distance and turned our journey into something beautifully unbreakable.
            </p>
            <p>
              From exchanging numbers to sharing dreams, from long-distance calls to building a future together, every step has felt guided, intentional, and truly blessed. On 11 April 2025, we said &ldquo;yes&rdquo; to forever, and on 27 June 2026, we will stand together and say &ldquo;I do.&rdquo;
            </p>
            <p>
              Ours is a story of timing, faith, and a love that found its way, exactly when it was meant to. In each other, we have found not only love, but peace, joy, and a home.
            </p>
            <p>
              And now, with grateful hearts, we invite you to celebrate this beautiful journey with us as we begin our forever.
            </p>
            <p className="pt-8 font-display text-3xl text-gold pb-4">
              With love,<br/>
              Esther & Clement 💕
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
