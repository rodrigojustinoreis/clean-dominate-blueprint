import { Link } from "react-router-dom";
import { CheckCircle, Leaf, Shield, Heart, AlertTriangle, ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "Are eco-friendly cleaning products as effective as chemical cleaners?",
    a: "Yes — modern plant-based formulas remove bacteria, grease, soap scum, mold, and grime as effectively as conventional chemical cleaners. EPA Safer Choice certified products undergo rigorous efficacy testing. The difference is what they leave behind: no toxic residues, no harmful fumes, no risk to your family.",
  },
  {
    q: "What exactly does 'non-toxic' mean for cleaning products?",
    a: "Non-toxic means the product doesn't contain ingredients classified as hazardous by the EPA or OSHA — including chlorine bleach, ammonia, formaldehyde, synthetic musks, and phthalates. Our products are plant-derived, biodegradable, and free from VOCs (volatile organic compounds) that cause indoor air pollution.",
  },
  {
    q: "Is eco-friendly cleaning safe for babies and toddlers?",
    a: "Absolutely. Infants and toddlers are especially vulnerable to chemical residues because they crawl on floors and put hands in their mouths. Our plant-based products leave no harmful residues, making your home genuinely safer for the youngest family members.",
  },
  {
    q: "Does eco-friendly cleaning cost more?",
    a: "At Capital Clean Care, eco-friendly cleaning is our standard — it's what we use in every home at no extra charge. You don't pay a green premium. Every cleaning, regardless of service type, uses our EPA Safer Choice certified products.",
  },
  {
    q: "Are the products safe for pets?",
    a: "Yes. Dogs and cats are particularly sensitive to cleaning chemicals because they walk on cleaned floors and lick their paws. Our plant-based products are formulated to be safe for household pets. No fumes, no residues that could harm animals.",
  },
  {
    q: "What's the difference between 'green' and 'EPA Safer Choice'?",
    a: "'Green' is a marketing term with no regulatory standard. EPA Safer Choice is a rigorous government certification — every ingredient must be evaluated for human health and environmental safety before a product can carry the label. We only use products that meet this standard.",
  },
  {
    q: "Can eco-friendly products disinfect and kill germs?",
    a: "Yes. Our sanitizing products use plant-derived active ingredients like citric acid and hydrogen peroxide that are proven to kill 99.9% of common household bacteria and viruses — without chlorine or synthetic biocides.",
  },
  {
    q: "Do eco-friendly products have a natural scent or no smell?",
    a: "Our products have a light, natural scent derived from essential oils — or are unscented entirely. There's no artificial fragrance, no overpowering chemical smell. Your home will smell clean and fresh, not like it was just bleached.",
  },
];

const chemicalsToAvoid = [
  {
    name: "Chlorine Bleach",
    risk: "Irritates airways, triggers asthma attacks, damages lung tissue with repeated exposure. Creates toxic chloramine gas when mixed with ammonia.",
    found: "Bathroom cleaners, disinfectant sprays, mold removers",
  },
  {
    name: "Ammonia",
    risk: "Causes respiratory inflammation, eye irritation, and chemical burns at high concentrations. Especially dangerous for asthma and COPD sufferers.",
    found: "Glass cleaners, multi-surface sprays, floor cleaners",
  },
  {
    name: "Phthalates",
    risk: "Endocrine disruptors linked to hormonal imbalances and developmental issues in children. Often hidden under 'fragrance' on product labels.",
    found: "Synthetic fragranced products, air fresheners",
  },
  {
    name: "Triclosan",
    risk: "Antimicrobial agent linked to antibiotic resistance. Disrupts thyroid function and accumulates in body tissue.",
    found: "Antibacterial soaps, some multi-surface cleaners",
  },
  {
    name: "Formaldehyde",
    risk: "Known human carcinogen. Causes nose and throat irritation, watery eyes, and long-term respiratory damage.",
    found: "Some furniture polish and disinfectant products",
  },
  {
    name: "Sodium Lauryl Sulfate (SLS)",
    risk: "Skin and eye irritant that penetrates skin and may disrupt hormonal function. Causes contact dermatitis in sensitive individuals.",
    found: "Degreasers, dish soaps, bathroom cleaners",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Safer for Children",
    description:
      "Kids spend 80% of their time indoors and are exposed to 3x more airborne chemicals than adults relative to body weight. Plant-based products eliminate that risk. No toxic residues on floors where babies crawl. No chemical off-gassing in bedrooms where children sleep.",
  },
  {
    icon: Shield,
    title: "Safe for Allergy & Asthma Sufferers",
    description:
      "Synthetic fragrances and VOCs in conventional cleaners are among the top triggers for asthma attacks and allergic reactions. Our fragrance-free and low-VOC formulas are recommended by allergists and pulmonologists for chemically sensitive individuals.",
  },
  {
    icon: Leaf,
    title: "Pet-Safe Every Visit",
    description:
      "Dogs and cats absorb chemicals through paw pads and grooming. Studies show pets in chemically-cleaned homes have significantly higher concentrations of toxic compounds in their blood. Our plant-based approach protects four-legged family members.",
  },
  {
    icon: CheckCircle,
    title: "Cleaner Indoor Air",
    description:
      "The EPA reports indoor air can be 2–5x more polluted than outdoor air — largely due to cleaning product VOCs. Our low-VOC, biodegradable formulas dramatically reduce chemical off-gassing, giving your family genuinely cleaner air to breathe.",
  },
  {
    icon: Star,
    title: "No Toxic Residues",
    description:
      "Conventional cleaners leave chemical films on counters, floors, and appliances that persist for days. Our plant-based products break down completely, leaving surfaces clean with no harmful residue — safer for food prep, for touching, for living.",
  },
  {
    icon: AlertTriangle,
    title: "Environmental Responsibility",
    description:
      "Harsh chemicals wash down drains into waterways, harming aquatic ecosystems and entering the drinking water supply. Biodegradable plant-based products break down naturally, protecting Maryland's rivers, the Chesapeake Bay, and the water your family drinks.",
  },
];

const WhyEcoFriendlyPage = () => {
  const { seoHelmet } = useSEO({
    title: "Why Eco-Friendly Cleaning Matters | Non-Toxic Home Cleaning MD, DC & VA | Capital Clean Care",
    description:
      "Discover why non-toxic, plant-based cleaning is safer for your children, pets, and health. Capital Clean Care uses EPA Safer Choice certified products across Maryland, DC & Virginia. Learn the science behind green cleaning.",
    canonical: "https://capitalcleancare.com/why-eco-friendly-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Why Eco-Friendly Cleaning", href: "/why-eco-friendly-cleaning" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Why Eco-Friendly Cleaning" },
            ]}
            className="mb-6"
          />
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Leaf className="h-3.5 w-3.5" /> The Science of Green Cleaning
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Eco-Friendly Cleaning Is the Safer Choice for Your Family
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Most households use cleaning products that contain dozens of chemicals never tested for long-term safety. Here's what the science says — and why Capital Clean Care made the switch to plant-based, EPA-certified products for every home we clean across Maryland, DC, and Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get a Free Eco-Clean Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] font-bold px-6 py-3 rounded-md hover:bg-[#2E7D32]/5 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── The Problem with Conventional Cleaners ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-red-50 text-red-600 font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            The Hidden Problem
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            What's Really in Your Cleaning Products?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              According to the Environmental Working Group (EWG), fewer than half of cleaning product ingredients are disclosed on labels. Under U.S. law, manufacturers are not required to list every ingredient — only "active" disinfectants. The rest can be hidden under umbrella terms like "fragrance," a single word that may represent a cocktail of dozens of synthetic chemicals.
            </p>
            <p>
              The EPA reports that indoor air is typically <strong className="text-foreground">2 to 5 times more polluted than outdoor air</strong> — and cleaning products are a significant contributor. Volatile organic compounds (VOCs) released during cleaning linger in the air for hours after use, concentrating in poorly ventilated spaces like bathrooms, kitchens, and bedrooms.
            </p>
            <p>
              Children are the most vulnerable. They breathe more air relative to body weight than adults, spend more time on floors where residues concentrate, and put their hands in their mouths regularly. The American Academy of Pediatrics recommends minimizing children's exposure to chemical cleaning agents — advice that aligns with everything Capital Clean Care does.
            </p>
            <p>
              Pets face similar risks. Dogs and cats absorb chemicals through the paw pads they lick when grooming. A 2008 study found significantly elevated levels of flame retardants and other household chemicals in the blood of pets — many of which are linked to cleaning products used in the home.
            </p>
          </div>

          {/* Chemical cards */}
          <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
            6 Common Cleaning Chemicals to Avoid
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chemicalsToAvoid.map((c) => (
              <div key={c.name} className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{c.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{c.risk}</p>
                    <p className="text-xs text-muted-foreground/70">
                      <span className="font-medium">Found in:</span> {c.found}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Eco-Friendly Solution ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Leaf className="h-3.5 w-3.5" /> The Green Solution
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            What Makes a Cleaning Product Truly Safe?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              Not all "green" products are created equal. The word "natural" has no legal definition and is often used as a marketing term with no standards behind it. At Capital Clean Care, we look beyond marketing claims to certifications with real scientific backing.
            </p>
            <p>
              The gold standard is the <strong className="text-foreground">EPA Safer Choice certification</strong>. To earn this label, every single ingredient in a product must be evaluated by EPA scientists for human health and environmental safety. Products must be biodegradable, free from carcinogens, and safe for aquatic ecosystems. It's the most rigorous third-party standard for cleaning product safety available in the United States.
            </p>
            <p>
              Our plant-based formulas use active ingredients derived from coconut, corn, and other renewable plant sources. They clean through surfactant action — breaking the bond between dirt and surfaces — rather than through toxic chemical reactions. The result is equally effective cleaning with zero harmful residues.
            </p>
            <p>
              Plant-based disinfectants use hydrogen peroxide, citric acid, and thymol (derived from thyme) as active antimicrobials. These compounds kill 99.9% of common household bacteria and viruses, including E. coli, Salmonella, and influenza — and they break down into water and oxygen after use, leaving no toxic byproducts.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Capital Clean Care's Product Standard
                </h3>
                <ul className="space-y-1.5">
                  {[
                    "EPA Safer Choice certified or equivalent third-party verified",
                    "Plant-derived surfactants — no petroleum-based ingredients",
                    "Free from chlorine, ammonia, formaldehyde, and phthalates",
                    "Biodegradable — breaks down safely in waterways",
                    "Low or zero VOC — no harmful off-gassing",
                    "Cruelty-free — never tested on animals",
                    "Free from synthetic fragrances and artificial dyes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 Benefits ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Why It Matters
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              6 Reasons to Choose Eco-Friendly Cleaning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The science is clear. Switching to plant-based cleaning products delivers measurable benefits for your family, your home, and the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <b.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eco Cleaning in the DMV ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Eco-Friendly Cleaning in Maryland, DC & Virginia
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              The DMV region has some of the most environmentally conscious homeowners in the country — and for good reason. The Chesapeake Bay watershed, which covers most of Maryland and parts of Virginia, is one of the most ecologically sensitive areas on the East Coast. Every chemical poured down a drain in Montgomery County, Fairfax, or Washington DC has the potential to reach this ecosystem.
            </p>
            <p>
              Maryland's Department of the Environment actively encourages residents and businesses to reduce their use of toxic cleaning agents. The Maryland Green Registry recognizes businesses that commit to environmental standards — a recognition that aligns with Capital Clean Care's approach to every single client we serve.
            </p>
            <p>
              In Washington DC, the Department of Energy and Environment (DOEE) has specific guidelines for safer chemical use. Northern Virginia communities from Arlington to Alexandria have increasingly adopted green building and living standards that extend to household cleaning practices.
            </p>
            <p>
              When you choose Capital Clean Care, you're not just protecting your family — you're making a choice that benefits the broader DMV community. Our biodegradable products don't contribute to chemical runoff. Our low-VOC formulas don't add to regional air quality issues. It's green cleaning that goes beyond the label.
            </p>
            <p>
              We serve <Link to="/maryland" className="text-accent hover:underline font-medium">Maryland</Link> homeowners across Montgomery County, Frederick County, Howard County, and Prince George's County, <Link to="/washington-dc" className="text-accent hover:underline font-medium">Washington DC</Link> across all quadrants, and <Link to="/virginia" className="text-accent hover:underline font-medium">Northern Virginia</Link> from Arlington to McLean to Fairfax. Eco-friendly cleaning is available for every service type — standard, deep cleaning, move-in/move-out, recurring plans, and post-construction cleanup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Maryland", slug: "/maryland", desc: "Montgomery, Frederick, Howard & Prince George's Counties" },
              { label: "Washington DC", slug: "/washington-dc", desc: "All DC quadrants — NW, NE, SW, SE" },
              { label: "Northern Virginia", slug: "/virginia", desc: "Arlington, McLean, Fairfax, Alexandria & more" },
            ].map((area) => (
              <Link
                key={area.slug}
                to={area.slug}
                className="block p-5 rounded-xl border border-border hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">{area.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{area.desc}</p>
                <span className="text-accent text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View locations <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GreenShield Process ── */}
      <GreenShield5Step showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              What Clients Say
            </span>
            <h2 className="font-heading text-3xl font-bold">
              DMV Families Who Made the Switch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Sarah M.",
                location: "Bethesda, MD",
                stars: 5,
                text: "I have two kids under 5 and a dog. Knowing Capital Clean Care only uses plant-based products means I don't have to worry about what they're touching after the house is cleaned. Game changer.",
              },
              {
                name: "David K.",
                location: "Arlington, VA",
                stars: 5,
                text: "My wife has asthma and we'd always struggle with cleaning smells. We haven't had a single reaction since switching to Capital Clean Care. Their eco products are genuinely different.",
              },
              {
                name: "Michelle R.",
                location: "Silver Spring, MD",
                stars: 5,
                text: "I was skeptical that 'green' products would actually clean as well. I was completely wrong. My bathroom has never looked this good and there's none of that harsh bleach smell.",
              },
              {
                name: "Thomas L.",
                location: "Washington, DC",
                stars: 5,
                text: "We have three cats. The fact that these products are safe if our cats walk on freshly cleaned floors and then groom themselves — that was the deciding factor for us. Highly recommend.",
              },
            ].map((t) => (
              <Card key={t.name}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground italic mb-3 leading-relaxed">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links / Related Pages ── */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">Explore Our Eco-Friendly Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Eco-Friendly Cleaning Service", href: "/services/eco-friendly-cleaning" },
              { label: "Deep Cleaning (Green)", href: "/services/deep-cleaning" },
              { label: "Recurring Cleaning Plans", href: "/services/recurring-cleaning" },
              { label: "Move-In / Move-Out Cleaning", href: "/services/move-out-cleaning" },
              { label: "Post-Construction Cleanup", href: "/services/post-construction-cleaning" },
              { label: "Spring Cleaning Maryland", href: "/spring-cleaning-md" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-white hover:border-accent hover:shadow-sm transition-all text-sm font-medium text-foreground hover:text-accent"
              >
                <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Eco-Friendly Cleaning FAQ
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Get a Free Eco-Friendly Cleaning Quote
            </h2>
            <p className="text-muted-foreground">
              Serving Maryland, DC & Northern Virginia. 15% off your first clean — new clients only.
            </p>
          </div>
          <div className="bg-accent text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🌿 All services use EPA Safer Choice certified plant-based products — at no extra charge
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Get My Free Eco-Clean Quote →" />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Or call <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">{PHONE}</a> — Mon–Sat 8AM–6PM
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WhyEcoFriendlyPage;
