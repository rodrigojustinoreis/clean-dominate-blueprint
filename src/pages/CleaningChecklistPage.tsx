import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/Breadcrumbs";

// The Capital Clean Care 49-Point Cleaning Checklist — the room-by-room tasks our crews
// work through on a full clean. Counts sum to 49 (12 + 10 + 8 + 9 + 10).
const SECTIONS: { room: string; items: string[] }[] = [
  {
    room: "Kitchen",
    items: [
      "Countertops wiped and sanitized",
      "Stovetop and control knobs degreased",
      "Range hood and backsplash wiped down",
      "Microwave cleaned inside and out",
      "Exterior of oven, refrigerator, and dishwasher wiped",
      "Sink scrubbed and faucet polished",
      "Cabinet fronts and handles spot-cleaned",
      "Small appliance exteriors (toaster, kettle, coffee maker) wiped",
      "Dishes washed or loaded into the dishwasher",
      "Trash emptied and liner replaced",
      "Floor swept",
      "Floor mopped",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Toilet cleaned and disinfected inside and out",
      "Shower and tub scrubbed",
      "Shower glass and tile cleaned",
      "Sink and countertop wiped and disinfected",
      "Faucet and fixtures polished",
      "Mirror cleaned streak-free",
      "Fresh towels folded and staged",
      "Trash emptied",
      "Floor swept",
      "Floor mopped",
    ],
  },
  {
    room: "Bedrooms",
    items: [
      "Beds made and linens straightened",
      "Nightstands and dressers wiped",
      "Surfaces and décor dusted",
      "Mirrors and glass cleaned",
      "Accessible areas under furniture reached",
      "Closet doors and handles wiped",
      "Carpets and rugs vacuumed",
      "Hard floors mopped",
    ],
  },
  {
    room: "Living & Dining Areas",
    items: [
      "All accessible surfaces dusted",
      "Coffee and side tables wiped",
      "TV screen and electronics gently dusted",
      "Cushions fluffed and throws folded",
      "Upholstery vacuumed",
      "Accessible corners and under cushions reached",
      "Dining table and chairs wiped",
      "Floors vacuumed",
      "Floors mopped",
    ],
  },
  {
    room: "Whole-Home Finishing",
    items: [
      "Baseboards wiped",
      "Light switches and outlet covers sanitized",
      "Door handles and door frames wiped",
      "Interior glass and mirrors cleaned",
      "Windowsills and window tracks wiped",
      "Cobwebs removed from accessible corners",
      "Reachable vents and return grilles dusted",
      "Stairs and landings vacuumed",
      "All wastebaskets emptied and relined",
      "Final walkthrough and quality check",
    ],
  },
];

const TOTAL = SECTIONS.reduce((n, s) => n + s.items.length, 0); // 49

const CleaningChecklistPage = () => {
  const { seoHelmet } = useSEO({
    title: "Our 49-Point Cleaning Checklist | Capital Clean Care",
    description:
      "The 49-point room-by-room checklist Capital Clean Care crews follow on every clean — kitchen, bathrooms, bedrooms, living areas, and whole-home finishing.",
    canonical: "https://capitalcleancare.com/checklist",
    noIndex: true,
  });

  return (
    <Layout>
      {seoHelmet}

      <section className="bg-gradient-to-br from-[#EAF6EA] via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cleaning Checklist" }]} className="mb-6" />
          <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {TOTAL}-Point Checklist
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">Our {TOTAL}-Point Cleaning Checklist</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every Capital Clean Care visit follows the same detailed, room-by-room routine, so nothing gets left to memory.
            Here is exactly what our background-checked crews work through on a full clean — using EPA Safer Choice™
            plant-based products in every room.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            {SECTIONS.map((s) => (
              <div key={s.room} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="font-heading text-2xl font-bold text-foreground">{s.room}</h2>
                  <span className="text-sm font-semibold text-muted-foreground">{s.items.length} points</span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2.5 items-start text-[15px] text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Want this checklist done for you?</h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-2xl mx-auto">
              Rated 5.0 stars across 45 Google reviews. Book a clean and our team works through every point, then finishes
              with a quality check — backed by our 24-hour re-clean guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/#quote">Get My Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="tel:+12407042551">Call (240) 704-2551</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CleaningChecklistPage;
