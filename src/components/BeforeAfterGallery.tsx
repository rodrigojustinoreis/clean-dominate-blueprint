import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import kitchenStove from "@/assets/before-after/kitchen-stove.webp";
import bedroom from "@/assets/before-after/bedroom.webp";
import kidsRoom from "@/assets/before-after/kids-room.webp";
import cleanKitchen from "@/assets/gallery/clean-kitchen.webp";
import cleanBedroom from "@/assets/gallery/clean-bedroom.webp";
import cleanLivingRoom from "@/assets/gallery/clean-living-room.webp";

const sliders = [
  {
    beforeImage: kitchenStove,
    afterImage: cleanKitchen,
    caption: "Kitchen Deep Clean — Rockville, MD",
  },
  {
    beforeImage: bedroom,
    afterImage: cleanBedroom,
    caption: "Bedroom Transformation — Bethesda, MD",
  },
  {
    beforeImage: kidsRoom,
    afterImage: cleanLivingRoom,
    caption: "Living Room Refresh — Silver Spring, MD",
  },
];

const BeforeAfterGallery = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Our Work
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3">
          See the Difference We Make
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Drag the slider to reveal the transformation — real results from real homes across the DMV.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {sliders.map((s) => (
          <BeforeAfterSlider
            key={s.caption}
            beforeImage={s.beforeImage}
            afterImage={s.afterImage}
            caption={s.caption}
            height={300}
          />
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

export default BeforeAfterGallery;
