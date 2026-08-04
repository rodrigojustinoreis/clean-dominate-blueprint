import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";

// The GreenShield 50-Point Cleaning Checklist — the room-by-room tasks our crews work through on
// a full clean, in our own wording. Counts sum to 50 (12 + 10 + 8 + 10 + 10).
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
      "Ceiling fans and light fixtures dusted where reachable",
      "Dining table and chairs wiped",
      "Accessible corners and under cushions reached",
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

const TOTAL = SECTIONS.reduce((n, s) => n + s.items.length, 0); // 50

const CleaningChecklistPage = () => {
  const { seoHelmet } = useSEO({
    title: `The GreenShield ${TOTAL}-Point Cleaning Checklist | Capital Clean Care`,
    description:
      `The GreenShield ${TOTAL}-point room-by-room checklist Capital Clean Care crews follow on every clean — kitchen, bathrooms, bedrooms, living areas, and whole-home finishing.`,
    canonical: "https://capitalcleancare.com/checklist",
    noIndex: true,
  });

  return (
    <Layout>
      {seoHelmet}

      {/* ── Navy intro (team photo background) ── */}
      <section className="relative overflow-hidden text-white py-14 md:py-20">
        <div className="absolute inset-0">
          <img
            src="/images/team/real-team-luxury-home.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D2B5E]/90 via-[#0D2B5E]/82 to-[#0D2B5E]/92" />
        </div>
        <div className="relative container mx-auto px-4 max-w-3xl text-center">
          <span className="inline-block bg-accent/20 text-white font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4 border border-accent/30">
            GreenShield {TOTAL}-Point Checklist
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">
            The GreenShield {TOTAL}-Point Cleaning Checklist
          </h1>
          <p className="text-white/85 text-lg leading-relaxed mb-4">
            When you book Capital Clean Care, you never have to wonder what will get done. Every clean follows our
            GreenShield {TOTAL}-Point Checklist, so the same thorough, room-by-room routine happens on every single visit —
            with EPA Safer Choice™ plant-based products in every room.
          </p>
          <p className="text-white/85 text-lg leading-relaxed mb-6">
            Have something you'd like cleaned that isn't on the list? Just ask — we offer customizable cleans so you get
            exactly the result you want.
          </p>
          <p className="font-heading font-bold text-xl">Our {TOTAL}-point checklist includes:</p>
        </div>
      </section>

      {/* ── Checklist by room ── */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {SECTIONS.map((s) => (
              <div key={s.room} className="relative bg-card border border-border rounded-2xl p-6 pt-7 shadow-sm">
                <span className="absolute -top-2 -left-2 h-9 w-9 border-t-4 border-l-4 border-accent rounded-tl-xl" aria-hidden="true" />
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="font-heading text-2xl font-bold text-foreground">{s.room}</h2>
                  <span className="text-sm font-semibold text-muted-foreground">{s.items.length} points</span>
                </div>
                <ul className="space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2.5 items-start text-[15px] text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Standard Behind Every Clean (2-col + photo) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">The Standard Behind Every Clean</h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-foreground">
                <p>
                  Our {TOTAL}-Point Checklist keeps every clean consistent, thorough, and never left to chance. By following
                  a proven, step-by-step routine, our team focuses on the details that matter most, so nothing gets
                  overlooked.
                </p>
                <p>
                  The checklist creates accountability, delivers reliable results, and gives you confidence that your home
                  is cleaned to the same high standard every visit.
                </p>
                <p className="font-bold text-foreground">It's how we turn "clean" into professionally, reliably clean.</p>
              </div>
              <div className="mt-6">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/#quote">Get My Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:pl-4">
              <span className="absolute -top-3 -left-3 h-12 w-12 border-t-4 border-l-4 border-accent rounded-tl-xl hidden sm:block" aria-hidden="true" />
              <span className="absolute -bottom-3 -right-3 h-12 w-12 border-b-4 border-r-4 border-accent rounded-br-xl hidden sm:block" aria-hidden="true" />
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border aspect-[4/3]">
                <img
                  src="/images/blog/condo-interior.webp"
                  alt="A home cleaned to the Capital Clean Care standard — spotless, staged, and consistent"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={750}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-14 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg">
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
