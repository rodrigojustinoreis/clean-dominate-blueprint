import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import kitchenIslandBefore from "@/assets/real-work/kitchen-island-before.png";
import kitchenIslandAfter from "@/assets/real-work/kitchen-island-after.png";
import kitchenDarkBefore from "@/assets/real-work/kitchen-dark-before.png";
import kitchenDarkAfter from "@/assets/real-work/kitchen-dark-after.png";
import kitchenGraniteBefore from "@/assets/real-work/kitchen-granite-before.png";
import kitchenGraniteAfter from "@/assets/real-work/kitchen-granite-after.png";
import stoveBefore from "@/assets/real-work/stove-before.png";
import stoveAfter from "@/assets/real-work/stove-after.png";
import deepCleanBefore from "@/assets/real-work/deep-clean-before.png";
import deepCleanAfter from "@/assets/real-work/deep-clean-after.png";

const sliders = [
  {
    beforeImage: kitchenIslandBefore,
    afterImage: kitchenIslandAfter,
    caption: "Luxury Kitchen Deep Clean — DMV Area",
  },
  {
    beforeImage: kitchenDarkBefore,
    afterImage: kitchenDarkAfter,
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
  {
    beforeImage: deepCleanBefore,
    afterImage: deepCleanAfter,
    caption: "Specialists Deep Clean — Maryland",
  },
];

const BeforeAfterGallery = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Our Real Work
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3">
          See the Difference We Make
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Drag the slider to reveal the transformation — real results from real homes across the DMV.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
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
