import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import kitchenStove from "@/assets/before-after/kitchen-stove.png";
import bedroom from "@/assets/before-after/bedroom.png";
import kidsRoom from "@/assets/before-after/kids-room.png";
import teenRoom from "@/assets/before-after/teen-room.png";

const transformations = [
  { src: kitchenStove, alt: "Kitchen stovetop before and after deep cleaning", label: "Kitchen Deep Clean" },
  { src: bedroom, alt: "Bedroom before and after professional cleaning", label: "Bedroom Transformation" },
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
        <div className="flex justify-center gap-3 mb-8">
          {transformations.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "rounded-lg overflow-hidden border-2 transition-all w-20 h-20 md:w-24 md:h-24",
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
