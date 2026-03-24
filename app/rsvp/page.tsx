import RSVPForm from "../../components/RSVPForm";
import SectionTitle from "../../components/SectionTitle";

export default function RSVPPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="RSVP" 
          subtitle="Kindly respond. We look forward to celebrating with you." 
          theme="dark"
        />
        <RSVPForm />
      </div>
    </div>
  );
}
