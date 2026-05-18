import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";

const HowToCleanCarpetBlog = () => {
  const { seoHelmet } = useSEO({
    title: "How to Clean the Carpet in Your Home or Apartment | Capital Clean Care",
    description: "Step-by-step guide to deep cleaning your carpet — vacuuming, stain removal, steam cleaning, and drying. Plus apartment renter tips and when to call a pro.",
    canonical: "https://capitalcleancare.com/blog/how-to-clean-carpet-home-apartment",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how to clean carpet in my apartment, how to clean carpet in my house, spring cleaning carpet, carpet cleaning apartment, deep clean carpet, carpet cleaning Montgomery County MD, professional carpet cleaning Maryland, move out carpet cleaning" />
      </Helmet>
      <ArticleSchema
        title="How to Clean the Carpet in Your Home or Apartment (And Why It Matters More Than You Think)"
        description="Step-by-step guide to deep cleaning your carpet — vacuuming, stain removal, steam cleaning, and drying. Plus apartment renter tips and when to call a pro."
        url="https://capitalcleancare.com/blog/how-to-clean-carpet-home-apartment"
        datePublished="2026-05-18"
        image="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Clean the Carpet in Your Home or Apartment", href: "/blog/how-to-clean-carpet-home-apartment" }]} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Clean Your Carpet" }]} />
        </div>
      </div>

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Professional cleaning a carpet with steam cleaner in bright home"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
            Home Care Guide
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            How to Clean the Carpet in Your Home or Apartment
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
            And Why It Matters More Than You Think
          </p>
          <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
            By Capital Clean Care · Montgomery County, MD · May 2026
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
            <Link to="/contact">Get a Free Carpet Cleaning Quote</Link>
          </Button>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Intro */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Spring is here — and if you haven't thought about your carpet yet, now is the time. Whether you live in a house in <strong>Rockville</strong> or an apartment in <strong>Silver Spring</strong>, your carpet is one of the hardest-working surfaces in your home. It quietly collects everything: dust, pet hair, bacteria, allergens, and years of foot traffic.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            The good news? You don't need to replace it. You need to clean it — properly. In this guide, we'll walk you through why carpet cleaning matters, how to clean it step by step, and when it's time to call in the professionals.
          </p>

          {/* Section 1 — Why */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why You Should Clean Your Carpet (Beyond the Obvious)</h2>

          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <img
              src="https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
              alt="Close-up of carpet fibers showing embedded dirt and dust"
              className="w-full max-h-[400px] object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-muted-foreground bg-gray-50 py-2 px-4">
              Vacuuming removes only ~15% of what's actually trapped in carpet fibers.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Most people vacuum once a week and call it a day. But vacuuming only removes surface-level dirt — about <strong>15% of what's actually living in your carpet fibers</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Here's what's hiding deeper:</p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {[
              ["Dust mites", "microscopic creatures that trigger allergies and asthma"],
              ["Bacteria", "including E. coli, salmonella, and staph — especially with kids or pets"],
              ["Mold spores", "trapped moisture leads to mold growth beneath the surface"],
              ["Allergens", "pollen, pet dander, and air pollutants that settle into the pile"],
              ["VOCs", "volatile organic compounds tracked in from outside"],
            ].map(([term, desc]) => (
              <li key={term} className="flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground"><strong>{term}</strong> — {desc}</span>
              </li>
            ))}
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex gap-4 items-start">
            <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              A study by Philip Tierno, Ph.D., found that a carpet can hold up to <strong>4,000 times more bacteria per square inch than a toilet seat</strong>. That's not meant to scare you — it's meant to motivate you.
            </p>
          </div>

          {/* Benefits */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Real Benefits of Clean Carpets</h2>
          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <img
              src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
              alt="Child playing on a clean, freshly cleaned carpet in a bright living room"
              className="w-full max-h-[400px] object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-muted-foreground bg-gray-50 py-2 px-4">
              Children and pets spend more time on the floor than anyone — clean carpets protect them.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {[
              ["Better air quality", "Every time someone walks across a dirty carpet, particles are released back into the air you breathe. A clean carpet traps and holds those particles until your next vacuum — instead of sending them airborne."],
              ["Fewer allergy symptoms", "Professional cleaning removes up to 94% of common household allergens. If someone in your home suffers from seasonal allergies or asthma, carpet cleanliness directly impacts how they feel every day."],
              ["Longer carpet life", "Dirt and grit are abrasive. Over time, they cut carpet fibers from the inside out. Regular cleaning can extend your carpet's life by 5–10 years — a significant savings compared to replacement costs."],
              ["A healthier home for kids and pets", "Children and pets spend more time on the floor than anyone. Clean carpets mean a safer surface for them to play, crawl, and nap on."],
            ].map(([title, text]) => (
              <div key={title as string} className="flex gap-4 p-5 bg-secondary/50 rounded-xl border border-border">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Spring timing */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Spring Cleaning and Your Carpet: Why Timing Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Spring is the single best time of year to deep clean your carpets — and there's a practical reason for it. During winter, windows stay shut. Foot traffic tracks in salt, mud, and moisture. Humidity stays trapped inside. By the time spring arrives, your carpet has absorbed months of buildup that a regular vacuum simply can't reach.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Moderate temperatures and lower humidity from <strong>March through May</strong> create ideal drying conditions — your carpet dries faster and mold has less chance to grow.
          </p>
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10">
            <p className="text-foreground font-medium text-center">
              📅 Rule of thumb: deep clean at least <strong>once a year</strong>. With pets, kids, or high foot traffic — every <strong>6 months</strong>.
            </p>
          </div>

          <BlogInlineCTA />

          {/* Step by Step */}
          <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-6">How to Clean the Carpet in Your Apartment or House — Step by Step</h2>

          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <img
              src="/images/team/team-vacuuming-furniture.jpg"
              alt="Capital Clean Care team vacuuming carpet thoroughly in a home in Montgomery County, MD"
              className="w-full max-h-[400px] object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-muted-foreground bg-gray-50 py-2 px-4">
              Our team vacuuming in multiple directions before the deep clean — the step most DIYers skip.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {[
              {
                step: "01",
                title: "Clear the Space",
                content: "Move lightweight furniture out of the room: chairs, side tables, lamps. For heavier pieces like sofas and beds, clean in sections around them — or use furniture sliders to access the full floor.",
              },
              {
                step: "02",
                title: "Vacuum Thoroughly (The Right Way)",
                content: "This step is more important than most people realize. Before any wet cleaning, remove all loose dirt, hair, and debris. Vacuum in three directions: forward-to-back, side-to-side, and diagonal. On heavy-traffic areas, do two slow passes. Use an attachment along baseboards and edges.",
              },
              {
                step: "03",
                title: "Treat Stains First",
                content: null,
                extra: (
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">Pre-treating stains before deep cleaning makes them much easier to remove.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      {[
                        ["Dish soap + warm water", "Most food & beverage stains"],
                        ["White vinegar + water (1:2)", "Odors & pet accidents on synthetic carpet"],
                        ["Baking soda (dry)", "Sprinkle, sit 15–20 min, vacuum first"],
                      ].map(([solution, use]) => (
                        <div key={solution as string} className="bg-secondary/50 rounded-xl p-4 border border-border">
                          <p className="font-semibold text-sm text-foreground mb-1">{solution}</p>
                          <p className="text-xs text-muted-foreground">{use}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <strong>Golden rule:</strong> Always <strong>blot, never rub</strong>. Rubbing spreads the stain and pushes it deeper. Work from the outside edges toward the center. Always test on a hidden corner first.
                    </p>
                  </div>
                ),
              },
              {
                step: "04",
                title: "Deep Clean with a Steam Cleaner",
                content: "For a true deep clean, you need a steam cleaner (hot water extraction machine). Rent one from most hardware stores for $30–$50/day. Work in small sections, moving slowly — forward to release water, backward to extract it. Overlap each pass slightly. Don't over-saturate.",
              },
              {
                step: "05",
                title: "Deodorize",
                content: "Mix 1 box of baking soda with 15–20 drops of essential oil (lavender or lemon). Sprinkle over the dry carpet, let sit 15–30 minutes, then vacuum completely.",
              },
              {
                step: "06",
                title: "Dry Properly",
                content: null,
                extra: (
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-3">This step is critical. A damp carpet is a breeding ground for mold and mildew.</p>
                    <ul className="space-y-2">
                      {[
                        "Open windows and doors to maximize airflow",
                        "Run fans or a dehumidifier",
                        "Avoid heavy foot traffic for at least 4–6 hours",
                        "Full drying can take up to 24 hours — don't replace furniture until completely dry",
                      ].map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center shadow-md">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  {item.content && <p className="text-muted-foreground leading-relaxed">{item.content}</p>}
                  {item.extra && item.extra}
                </div>
              </div>
            ))}
          </div>

          {/* Apartment tips */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Apartment-Specific Tips: What Renters Should Know</h2>
          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
              alt="Modern apartment living room with clean carpeted floor"
              className="w-full max-h-[400px] object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-muted-foreground bg-gray-50 py-2 px-4">
              Renters: your security deposit may depend on the condition of your carpet.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {[
              ["Check your lease first", "Many leases require professional carpet cleaning before move-out. DIY cleaning may not satisfy that requirement."],
              ["Address pet odors early", "Enzyme-based cleaners (available at pet stores) are the most effective at breaking down pet urine at the molecular level. Regular cleaners mask the smell — enzyme cleaners eliminate it."],
              ["Protect high-traffic areas", "Area rugs in hallways, living rooms, and near the front door dramatically reduce wear and buildup on the wall-to-wall carpet underneath."],
              ["Document before and after", "If you clean before moving out, take photos and keep receipts. It protects you in any security deposit dispute."],
            ].map(([title, text]) => (
              <div key={title as string} className="flex gap-4 p-5 border border-border rounded-xl bg-card">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DIY vs Pro comparison */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">DIY vs. Professional Carpet Cleaning: Honest Comparison</h2>
          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <img
              src="/images/team/team-tile-scrubber.jpg"
              alt="Capital Clean Care professional deep cleaning a floor surface in a Maryland home"
              className="w-full max-h-[400px] object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-muted-foreground bg-gray-50 py-2 px-4">
              Professional equipment extracts what rental machines leave behind.
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="p-4 text-left font-semibold rounded-tl-xl">Factor</th>
                  <th className="p-4 text-center font-semibold">DIY</th>
                  <th className="p-4 text-center font-semibold rounded-tr-xl">Professional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "$30–$80 (machine rental)", "$120–$300+ per visit"],
                  ["Results", "Good for maintenance", "Deep extraction — removes what DIY can't"],
                  ["Time", "3–5 hours", "1–2 hours"],
                  ["Drying time", "Up to 24 hours", "6–12 hours (hot water extraction)"],
                  ["Allergen removal", "Partial", "Up to 94%"],
                  ["Recommended for", "Regular maintenance", "Annual deep clean, move-out, post-renovation"],
                ].map(([factor, diy, pro], i) => (
                  <tr key={factor as string} className={i % 2 === 0 ? "bg-secondary/30" : "bg-white"}>
                    <td className="p-4 font-medium text-foreground border-b border-border">{factor}</td>
                    <td className="p-4 text-center text-muted-foreground border-b border-border">{diy}</td>
                    <td className="p-4 text-center text-accent font-medium border-b border-border">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-12">
            <p className="text-foreground leading-relaxed text-center text-sm">
              <strong>The honest answer:</strong> DIY cleaning is great for maintenance between professional visits. But once a year, a professional deep clean is worth every dollar — especially if you have allergies, pets, or young children.
            </p>
          </div>

          {/* 5 Habits */}
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">5 Habits That Keep Your Carpet Cleaner, Longer</h2>
          <div className="rounded-2xl overflow-hidden shadow-md mb-8">
            <img
              src="https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
              alt="Clean entryway with doormat preventing dirt from reaching carpet"
              className="w-full max-h-[400px] object-cover"
              loading="lazy"
            />
          </div>

          <ol className="space-y-4 mb-12">
            {[
              ["No shoes inside", "The single most impactful change you can make. Shoes track in 80% of the dirt and bacteria in your home."],
              ["Vacuum twice a week in high-traffic areas", "Weekly everywhere else."],
              ["Deal with spills immediately", "The longer a stain sits, the harder it is to remove. Blot it up within the first few minutes."],
              ["Use doormats at every entrance", "A good doormat catches grit before it ever reaches your carpet."],
              ["Rotate furniture annually", "This prevents permanent indentations and evens out wear patterns."],
            ].map(([title, text], i) => (
              <li key={title as string} className="flex gap-4 items-start p-5 bg-secondary/40 rounded-xl border border-border">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Final CTA */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready for a Professional Deep Clean in Montgomery County?
            </h2>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              At Capital Clean Care, we serve homeowners and renters across Montgomery County — including <strong>Rockville, Bethesda, Silver Spring, Gaithersburg, Germantown,</strong> and <strong>Potomac</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
              {["Deep cleaning", "Move-in / Move-out", "Recurring plans (weekly or biweekly)", "Airbnb & short-term rental turnover"].map((s) => (
                <div key={s} className="flex items-center gap-1.5 justify-center text-primary-foreground/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
              <Link to="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <p className="text-xs text-primary-foreground/60 mt-4">
              Capital Clean Care is a licensed, insured residential cleaning company serving Montgomery County, MD. We bring the supplies. You get to relax.
            </p>
          </div>

        </div>
      </article>
    </Layout>
  );
};

export default HowToCleanCarpetBlog;
