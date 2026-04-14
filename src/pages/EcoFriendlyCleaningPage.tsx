import { Link } from "react-router-dom";
import { CheckCircle, Leaf, Shield, Star, Phone, ArrowRight, UserCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import GreenShield5Step from "@/components/GreenShield5Step";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { useSEO } from "@/hooks/useSEO";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cities } from "@/data/locations";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const topCities = cities.filter((c) => !c.slug.includes("county")).slice(0, 8);

const faqs = [
  {
    q: "What eco-friendly products does Capital Clean Care use?",
    a: "We use EPA Safer Choice certified, plant-based cleaning solutions free from chlorine, ammonia, formaldehyde, phthalates, and synthetic fragrances. Our products are biodegradable, low-VOC, and safe for children, pets, and allergy sufferers.",
  },
  {
    q: "Are eco-friendly products as effective as chemical cleaners?",
    a: "Yes. Our plant-based formulas remove bacteria, grease, soap scum, and grime as effectively as conventional cleaners — without toxic residues. EPA Safer Choice products undergo rigorous efficacy testing.",
  },
  {
    q: "Is eco-friendly cleaning safe for my baby or toddler?",
    a: "Absolutely. Our products leave no harmful residues on floors or surfaces, making your home genuinely safer for infants and toddlers who crawl on floors and put hands in their mouths.",
  },
  {
    q: "Does eco-friendly cleaning cost more?",
    a: "No. Eco-friendly cleaning is our standard for every service — at no extra charge. You don't pay a green premium at Capital Clean Care.",
  },
  {
    q: "Are the products safe for pets?",
    a: "Yes. Our plant-based products are safe for dogs, cats, and other household pets. No toxic fumes, no harmful residues on surfaces pets walk on or groom from.",
  },
  {
    q: "Can I request eco-friendly products for any service?",
    a: "Yes — eco-friendly products are our default for all services: standard cleaning, deep cleaning, move-out, recurring plans, and post-construction. You don't need to request it separately.",
  },
  {
    q: "What areas do you serve for eco-friendly cleaning?",
    a: "We serve all of Maryland (Montgomery, Frederick, Howard & Prince George's Counties), Washington DC, and Northern Virginia (Arlington, McLean, Fairfax, Alexandria, Reston & more).",
  },
  {
    q: "Do eco-friendly products disinfect and kill germs?",
    a: "Yes. Our plant-based disinfectants use hydrogen peroxide and citric acid as active antimicrobials, proven to kill 99.9% of common household bacteria and viruses without chlorine or synthetic biocides.",
  },
];

const trustBadges = [
  { Icon: Leaf, text: "EPA Safer Choice Products" },
  { Icon: Shield, text: "Licensed & Insured" },
  { Icon: UserCheck, text: "Background-Checked" },
  { Icon: Award, text: "Satisfaction Guaranteed" },
];

const whatWeUse = [
  {
    category: "Surfaces & Multi-Purpose",
    description: "Plant-derived surfactant sprays that cut through grease, fingerprints, and grime without leaving chemical films on countertops, appliances, or tabletops.",
  },
  {
    category: "Bathroom Disinfection",
    description: "Hydrogen peroxide-based disinfectants that kill 99.9% of bacteria and viruses on toilets, sinks, and tiles — no bleach, no chlorine gas risk.",
  },
  {
    category: "Kitchen Degreasing",
    description: "Citrus and plant-derived degreasers that dissolve cooking grease and food residue safely on stovetops, ovens, and range hoods.",
  },
  {
    category: "Floor Cleaning",
    description: "pH-neutral, plant-based floor cleaners safe for hardwood, tile, vinyl, and laminate — no residue, no dulling, no chemical off-gassing.",
  },
  {
    category: "Glass & Mirrors",
    description: "Streak-free, ammonia-free glass cleaner for windows, mirrors, and glass surfaces — without the toxic fumes of conventional ammonia sprays.",
  },
  {
    category: "Odor Elimination",
    description: "Enzyme-based odor neutralizers (not synthetic maskers) that break down organic compounds at the source — safe for homes with pets and allergy sufferers.",
  },
];

const EcoFriendlyCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Eco-Friendly House Cleaning Service | Plant-Based, Non-Toxic | MD, DC & VA",
    description:
      "Capital Clean Care's eco-friendly cleaning uses EPA Safer Choice certified, plant-based products safe for children, pets, and allergy sufferers. Serving Maryland, DC & Northern Virginia. 15% off first clean.",
    canonical: "https://capitalcleancare.com/services/eco-friendly-cleaning",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/house-cleaning" },
          { label: "Eco-Friendly Cleaning", href: "/services/eco-friendly-cleaning" },
        ]}
      />
      <ServiceSchema
        serviceName="Eco-Friendly House Cleaning"
        description="Plant-based, non-toxic house cleaning using EPA Safer Choice certified products. Safe for children, pets, and allergy sufferers across Maryland, DC, and Northern Virginia."
        url="https://capitalcleancare.com/services/eco-friendly-cleaning"
      />
      <FAQSchema faqs={faqs} />

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: "Eco-Friendly Cleaning" },
            ]}
            className="mb-6"
          />
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Leaf className="h-3.5 w-3.5" /> Plant-Based · EPA Certified · Non-Toxic
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Eco-Friendly House Cleaning in Maryland, DC & Virginia
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            A genuinely clean home shouldn't come with chemical residues, toxic fumes, or health risks. Capital Clean Care uses exclusively EPA Safer Choice certified, plant-based products — safer for your children, your pets, your family, and the environment. At no extra charge.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-8 py-3 rounded-md shadow-lg transition-colors"
            >
              Get My Free Quote →
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/5 font-bold text-base px-8 py-3 rounded-md transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" /> {PHONE}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {["EPA Safer Choice Certified", "No Chlorine or Ammonia", "Safe for Children & Pets", "15% Off First Clean"].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map(({ Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2 py-4 px-3 rounded-lg bg-card border border-border text-center">
                <Icon className="h-6 w-6 text-[#2E7D32]" />
                <span className="text-xs font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Why Eco-Friendly Cleaning Matters for Your Home
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              Most conventional cleaning products contain chemicals that never appear on the label. Under U.S. law, manufacturers aren't required to disclose every ingredient — only "active" disinfectants. The rest hide under terms like "fragrance," which can represent dozens of synthetic compounds including phthalates, synthetic musks, and VOCs.
            </p>
            <p>
              The EPA reports that indoor air can be 2–5x more polluted than outdoor air, with cleaning product VOCs being a major contributor. Children — who spend more time on floors and put their hands in their mouths — are most at risk. Pets absorb chemicals through their paw pads when they groom.
            </p>
            <p>
              Capital Clean Care was founded on the conviction that your home should be both clean and safe. Our plant-based products deliver the same cleaning power as chemical alternatives — removing bacteria, grease, soap scum, and grime — without the residues, fumes, or long-term health risks.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-accent" /> What We Never Use
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Chlorine bleach", "Ammonia", "Phthalates",
                "Formaldehyde", "Synthetic fragrances", "Triclosan",
                "Sodium lauryl sulfate (SLS)", "Petroleum-based solvents",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-red-500 font-bold text-base leading-none">✕</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Use ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Our Products
            </span>
            <h2 className="font-heading text-3xl font-bold mb-4">
              What We Use in Your Home
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product in our toolkit meets EPA Safer Choice standards. Here's how we clean each area of your home safely and effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatWeUse.map((item) => (
              <div key={item.category} className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.category}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/why-eco-friendly-cleaning"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Learn more about our eco-friendly approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GreenShield 5-Step ── */}
      <GreenShield5Step compact showCTA={false} />

      {/* ── Before & After ── */}
      <BeforeAfterGallery />

      {/* ── Testimonials ── */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">
            What DMV Homeowners Say About Our Eco-Clean
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Angela T.", location: "Silver Spring, MD", text: "I love that they use eco-friendly products. With two kids and a dog, knowing the products are safe gives me real peace of mind." },
              { name: "Kevin R.", location: "Rockville, MD", text: "My wife has severe allergies. Since switching to Capital Clean Care we've had zero allergy attacks post-cleaning. The difference is real." },
              { name: "Sarah M.", location: "Bethesda, MD", text: "I was skeptical green products would clean as well. I was completely wrong. My bathroom has never looked better without that bleach smell." },
              { name: "Maria G.", location: "Arlington, VA", text: "We have cats and were always worried about chemical exposure. Now I don't have to think about it. The clean lasts longer too somehow." },
            ].map((t) => (
              <Card key={t.name}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-sm italic text-foreground mb-3 leading-relaxed">"{t.text}"</p>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">
            Eco-Friendly Cleaning Available In These Areas
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Also serving{" "}
            <Link to="/maryland" className="text-accent hover:underline">all of Maryland</Link>,{" "}
            <Link to="/washington-dc" className="text-accent hover:underline">Washington DC</Link>, and{" "}
            <Link to="/virginia" className="text-accent hover:underline">Northern Virginia</Link>.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Eco-Friendly Cleaning FAQ</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote-form" className="py-16 bg-secondary" style={{ scrollMarginTop: 80 }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Eco-Friendly Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving MD, DC & VA — 15% off your first eco-clean, new clients only
          </p>
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🌿 EPA Safer Choice certified products — included in every service at no extra charge
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Get My Free Eco-Clean Quote →" />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Or call{" "}
            <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">{PHONE}</a>{" "}
            — Mon–Sat 8AM–6PM
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EcoFriendlyCleaningPage;
