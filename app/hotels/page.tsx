"use client";
import SectionTitle from "../../components/SectionTitle";
import HotelCard from "../../components/HotelCard";

const hotels = [
  {
    category: "Luxury & Chic",
    name: "The Grand Palace",
    description: "Experience unparalleled luxury with breathtaking views. Perfect for a truly memorable stay.",
  },
  {
    category: "Stylish & Mid-range",
    name: "Aura Boutique Hotel",
    description: "Modern design meets comfort in the heart of the city, just minutes away from the venue.",
  },
  {
    category: "Budget-friendly",
    name: "Comfort Inn Suites",
    description: "Clean, comfortable, and affordable accommodations with essential amenities for everyone.",
  },
  {
    category: "Boutique & Unique",
    name: "The Artisan Hideaway",
    description: "A charming, art-filled hotel offering a unique and intimate atmosphere for guests.",
  },
  {
    category: "Beach Area",
    name: "Oceanside Resort",
    description: "Relax by the water before the big day. Features private beach access and spa facilities.",
  },
  {
    category: "Nearby Hotels",
    name: "Venue Adjacent Lodge",
    description: "The most convenient option, located practically next door to our wedding venue.",
  }
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative bg-background">
      <SectionTitle 
        title="Accommodations" 
        subtitle="We have curated a selection of hotels for your comfort." 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {hotels.map((hotel, index) => (
          <HotelCard 
            key={index}
            {...hotel}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
