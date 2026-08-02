import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

import kitchenIslandBefore from "@/assets/real-work/kitchen-island-before.webp";
import kitchenIslandAfter from "@/assets/real-work/kitchen-island-after.webp";
import kitchenDarkBefore from "@/assets/real-work/kitchen-dark-before.webp";
import kitchenDarkAfter from "@/assets/real-work/kitchen-dark-after.webp";
import kitchenGraniteBefore from "@/assets/real-work/kitchen-granite-before.webp";
import kitchenGraniteAfter from "@/assets/real-work/kitchen-granite-after.webp";
import stoveBefore from "@/assets/real-work/stove-before.webp";
import stoveAfter from "@/assets/real-work/stove-after.webp";
import deepCleanBefore from "@/assets/real-work/deep-clean-before.webp";
import deepCleanAfter from "@/assets/real-work/deep-clean-after.webp";

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

const BeforeAfterGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  // Auto-rotate — same cadence as the video carousel (2.5s, glide duration 18) so movement is
  // uniform across the page. Pauses on hover/focus, while the user is dragging a reveal, and for
  // reduced-motion.
  useEffect(() => {
    if (!api || paused) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => api.scrollNext(), 2500);
    return () => clearInterval(id);
  }, [api, paused]);

  return (
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

        {/* Carousel — auto-rotates uniformly with the video carousel. Carousel drag is OFF
            (watchDrag) so the before/after "drag to reveal" slider isn't hijacked by the swipe;
            arrows navigate. Interaction pauses the auto-rotation. */}
        <Carousel
          opts={{ align: "start", loop: true, duration: 18, watchDrag: false }}
          setApi={setApi}
          className="max-w-6xl mx-auto mb-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {sliders.map((s) => (
              <CarouselItem key={s.caption} className="pl-3 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <BeforeAfterSlider
                  beforeImage={s.beforeImage}
                  afterImage={s.afterImage}
                  caption={s.caption}
                  aspectClassName="aspect-[9/16]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-5 h-10 w-10 bg-white/95 hover:bg-white border-border text-foreground shadow-lg" />
          <CarouselNext className="right-1 md:-right-5 h-10 w-10 bg-white/95 hover:bg-white border-border text-foreground shadow-lg" />
        </Carousel>

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
