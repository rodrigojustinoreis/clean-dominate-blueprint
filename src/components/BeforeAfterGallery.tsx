import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import kitchenStove from "@/assets/before-after/kitchen-stove.webp";
import bedroom from "@/assets/before-after/bedroom.webp";
import kidsRoom from "@/assets/before-after/kids-room.webp";
import teenRoom from "@/assets/before-after/teen-room.webp";
import cleanKitchen from "@/assets/gallery/clean-kitchen.webp";
import cleanBathroom from "@/assets/gallery/clean-bathroom.webp";
import cleanLivingRoom from "@/assets/gallery/clean-living-room.webp";
import cleanBedroom from "@/assets/gallery/clean-bedroom.webp";
import cleanDining from "@/assets/gallery/clean-dining.webp";
import cleanEntryway from "@/assets/gallery/clean-entryway.webp";

const transformations = [
  { src: kitchenStove, alt: "Kitchen stovetop before and after deep cleaning", label: "Kitchen Deep Clean" },
  { src: cleanKitchen, alt: "Professionally cleaned kitchen — Capital Clean Care", label: "Spotless Kitchen" },
  { src: bedroom, alt: "Bedroom before and after professional cleaning", label: "Bedroom Transformation" },
  { src: cleanBedroom, alt: "Professionally cleaned bedroom — Capital Clean Care", label: "Fresh Bedroom" },
  { src: cleanBathroom, alt: "Professionally cleaned bathroom — Capital Clean Care", label: "Sparkling Bathroom" },
  { src: cleanLivingRoom, alt: "Professionally cleaned living room — Capital Clean Care", label: "Living Room Reset" },
  { src: cleanDining, alt: "Professionally cleaned dining room — Capital Clean Care", label: "Dining Room Shine" },
  { src: cleanEntryway, alt: "Professionally cleaned entryway — Capital Clean Care", label: "Entryway Welcome" },
  { src: kidsRoom, alt: "Kids room before and after cleaning service", label: "Kids Room Reset" },
  { src: teenRoom, alt: "Teen room before and after organizing and cleaning", label: "Full Room Cleanup" },
];

const BeforeAfterGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            See the Difference We Make
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real homes across the DMV. Every transformation powered by our eco-friendly cleaning process.
          </p>
        </div>

        {/* Featured image */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={transformations[activeIndex].src}
              alt={transformations[activeIndex].alt}
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
            {transformations[activeIndex].label}
          </p>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {transformations.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "rounded-lg overflow-hidden border-2 transition-all w-16 h-16 md:w-20 md:h-20",
                i === activeIndex
                  ? "border-accent shadow-md scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <img src={t.src} alt={t.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">
              Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
