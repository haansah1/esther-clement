import SectionTitle from "../../components/SectionTitle";

export default function RulesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-16">
        <SectionTitle title="Wedding Guidelines" subtitle="Please read carefully to ensure a smooth and joyful celebration." />

        <div className="space-y-12">
          <section className="glass-card p-8 md:p-12">
            <h3 className="font-display text-3xl text-gold mb-6">Rules from Clement</h3>
            <ul className="space-y-4 font-sans text-sm tracking-wide text-foreground/80 leading-relaxed list-none">
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> Be on time</li>
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> No loitering or roaming around</li>
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> No standing in the corridor</li>
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> Respect the program outline</li>
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> Respect the people in charge of the day</li>
            </ul>
          </section>

          <section className="glass-card p-8 md:p-12">
            <h3 className="font-display text-3xl text-gold mb-6">FAQ & Plus 1</h3>
            <p className="font-sans text-sm tracking-wide text-foreground/80 leading-relaxed">
              You are allowed to bring <strong className="text-gold font-medium">only 1 extra guest</strong>. Please make sure to RSVP for your guest as well.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12">
            <h3 className="font-display text-3xl text-gold mb-8">Dress Code</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-4 text-foreground/60 border-b border-foreground/10 pb-2">Schedule</h4>
                <ul className="space-y-3 font-sans text-sm tracking-wide text-foreground/80">
                  <li><strong className="font-semibold text-foreground">Ceremony:</strong> Dress to impress</li>
                  <li><strong className="font-semibold text-foreground">Reception:</strong> Strictly black</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-4 text-foreground/60 border-b border-foreground/10 pb-2">Attire</h4>
                <ul className="space-y-3 font-sans text-sm tracking-wide text-foreground/80">
                  <li><strong className="font-semibold text-foreground">Ladies:</strong> Black dress</li>
                  <li><strong className="font-semibold text-foreground">Men:</strong> Black tie</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass-card p-8 md:p-12">
            <h3 className="font-display text-3xl text-gold mb-6">Children</h3>
            <p className="font-sans text-sm tracking-wide text-foreground/80 leading-relaxed">
              While we love your little ones, we have decided to make our wedding an adults-only celebration.
            </p>
          </section>

          <section className="glass-card p-8 md:p-12">
            <h3 className="font-display text-3xl text-gold mb-6">Parking</h3>
            <ul className="space-y-4 font-sans text-sm tracking-wide text-foreground/80 leading-relaxed list-none">
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> Parking is free before 6 PM (18:00).</li>
              <li className="flex items-start"><span className="text-gold mr-3">✦</span> From 6 PM to 12 AM (18:00–00:00), parking costs €2.75 per hour, up to €7.00.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
