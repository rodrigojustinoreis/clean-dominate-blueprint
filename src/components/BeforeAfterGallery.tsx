import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import stoveBefore from "@/assets/before-after/stove-before.webp";
import stoveAfter from "@/assets/before-after/stove-after.webp";
import kitchenIslandBefore from "@/assets/before-after/kitchen-island-before.webp";
import kitchenIslandAfter from "@/assets/before-after/kitchen-island-after.webp";
import kitchenBrownBefore from "@/assets/before-after/kitchen-brown-before.webp";
import kitchenBrownAfter from "@/assets/before-after/kitchen-brown-after.webp";
import kitchenGraniteBefore from "@/assets/before-after/kitchen-granite-before.webp";
import kitchenGraniteAfter from "@/assets/before-after/kitchen-granite-after.webp";

const sliders = [
  {
    beforeImage: kitchenIslandBefore,
    afterImage: kitchenIslandAfter,
    caption: "Kitchen Deep Clean — Silver Spring, MD",
  },
  {
    beforeImage: kitchenBrownBefore,
    afterImage: kitchenBrownAfter,
    caption: "Full Kitchen Transformation — Rockville, MD",
  },
  {
    beforeImage: kitchenGraniteBefore,
    afterImage: kitchenGraniteAfter,
    caption: "Deep Clean — Bethesda, MD",
  },
  {
    beforeImage: stoveBefore,
    afterImage: stoveAfter,
    caption: "Stovetop Restoration — Silver Spring, MD",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
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
