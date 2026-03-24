import SectionTitle from "../../components/SectionTitle";
import GalleryGrid from "../../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative bg-background">
      <SectionTitle 
        title="Our Gallery" 
        subtitle="Moments we cherish, captured in time." 
      />
      <GalleryGrid />
    </div>
  );
}
