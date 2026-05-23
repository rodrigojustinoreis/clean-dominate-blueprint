import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import ConversionCTA from "@/components/ConversionCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Home, Truck, Hammer, Repeat, Clock, Bed, Heart, PawPrint, Leaf, Building2, DollarSign } from "lucide-react";

const masterServicesFaqs = [
  {
    question: "What's the difference between standard cleaning and deep cleaning?",
    answer: "Standard cleaning maintains an already-clean home with surface cleaning, vacuuming, dusting, and bathroom/kitchen wipe-downs. Deep cleaning is more intensive — we move appliances, scrub baseboards, clean inside ovens and refrigerators (on request), wash interior windows, and tackle buildup that accumulates over time. Most homes need deep cleaning every 3-6 months and standard cleaning weekly or biweekly in between."
  },
  {
    question: "How much do your cleaning services cost in Maryland?",
    answer: "Pricing depends on home size, condition, and service type. Standard recurring cleaning for a typical 3-bedroom Maryland home runs $170-$220 per visit. Deep cleaning ranges $280-$420. Move-in/move-out cleaning $300-$500. Post-construction cleaning is priced per square foot. We provide free, transparent quotes in under 2 minutes online or by phone."
  },
  {
    question: "Do you bring your own supplies and equipment?",
    answer: "Yes. We bring all eco-friendly, non-toxic, plant-based cleaning products and professional-grade equipment (HEPA-filtered vacuums, microfiber, etc.) at no extra charge. If you prefer we use your own products (for allergy reasons, specific brands, etc.), just let us know — we accommodate."
  },
  {
    question: "Are your cleaning products safe for kids, pets, and people with allergies?",
    answer: "Absolutely. We use only EPA Safer Choice-certified products, plant-based ingredients, and fragrance-free options when requested. Our products are safe for newborns, pregnant women, asthma sufferers, chemical-sensitive individuals, and all household pets including birds and cats."
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No. Most of our clients aren't home during cleanings. We're fully bonded and insured, our team is background-checked, and we can accept a key or use a lockbox/garage code. We'll send a 'cleaning complete' notification when we leave."
  },
  {
    question: "Do you offer same-day or last-minute cleaning?",
    answer: "Yes, when our schedule allows. Call us directly — we frequently have flexibility in Rockville, Bethesda, Gaithersburg, and Silver Spring service areas. For guaranteed scheduling, book at least 48 hours ahead."
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "We offer a 100% satisfaction guarantee. If anything isn't right, call us within 24 hours and we'll send a team back to re-clean the affected areas at no charge. No questions asked."
  },
  {
    question: "Do you do one-time cleanings or only recurring?",
    answer: "Both. We offer single one-time cleanings (perfect for move-in/move-out, post-event, post-renovation, seasonal deep clean) and recurring service plans (weekly, biweekly, monthly) with priority booking and recurring-customer pricing."
  },
  {
    question: "Which cities and neighborhoods do you serve?",
    answer: "We serve all of Montgomery County, MD including Rockville, Bethesda, Gaithersburg, Silver Spring, Germantown, Potomac, Chevy Chase, North Bethesda, Kensington, Olney, Wheaton, plus Washington, DC. Check our locations page for a full list of neighborhoods."
  },
  {
    question: "Can I tip the cleaners?",
    answer: "Tipping is appreciated but never expected. Our team is paid fairly above industry standards. If you'd like to tip, $10-$20 per cleaner per visit is customary, and 100% of the tip goes directly to the cleaner."
  },
  {
    question: "Do you clean Airbnb and short-term rentals?",
    answer: "Yes. We specialize in Airbnb turnover cleaning with 3-4 hour turnaround, inventory checks, linen handling, and photo reports after each clean. We work with calendars from Airbnb, VRBO, and Booking.com to schedule automatically."
  },
  {
    question: "Do you offer cleaning for seniors aging in place?",
    answer: "Yes. We have a senior-friendly cleaning service designed for older adults living independently. Our team uses fragrance-free products, accommodates mobility considerations, schedules around medical appointments, and can coordinate with adult children or caregivers remotely."
  }
];

const MasterServicesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Cleaning Services in Maryland & DC | Capital Clean Care</title>
        <meta name="description" content="Professional eco-friendly cleaning services in Montgomery County, MD and Washington, DC. House cleaning, deep cleaning, move-in/out, post-construction, Airbnb, senior, and recurring cleaning. Free quotes." />
        <link rel="canonical" href="https://capitalcleancare.com/services/" />
      </Helmet>

      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" }
      ]} />
      <FAQSchema faqs={masterServicesFaqs.map(f => ({ q: f.question, a: f.answer }))} />

      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Cleaning Services in Maryland & DC
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Eco-friendly, family-owned, fully insured. Serving Rockville, Bethesda, Gaithersburg, Silver Spring, and the greater DMV with professional residential and commercial cleaning since 2017.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/#quote">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+12407042551">Call Now</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Home className="w-8 h-8 text-primary" />
                Standard House Cleaning
              </h2>
              <p className="text-muted-foreground mb-3">
                Our most popular service. Maintains an already-clean home with thorough surface cleaning, vacuuming, mopping, dusting, bathroom sanitization, kitchen wipe-down, and bedroom tidying. Perfect for busy professionals, families, and anyone who wants their home consistently spotless.
              </p>
              <p className="text-muted-foreground mb-3">
                Standard cleaning typically includes: all rooms vacuumed and mopped, bathrooms scrubbed (toilets, sinks, tubs, mirrors), kitchen counters and exterior appliances cleaned, dusting of all accessible surfaces, trash removal, bed making (on request).
              </p>
              <p className="text-muted-foreground">
                Available as one-time or recurring (weekly, biweekly, monthly). Most 2-3 bedroom Maryland homes complete in 2-3 hours with a team of 2 cleaners.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                Deep Cleaning Services
              </h2>
              <p className="text-muted-foreground mb-3">
                Intensive cleaning that goes beyond surface-level. We move furniture and appliances, scrub baseboards and door frames, hand-wash light switches and door handles, clean inside windows, detail bathroom grout, and address buildup that standard cleaning doesn't reach.
              </p>
              <p className="text-muted-foreground mb-3">
                Recommended for: first-time cleanings, homes that haven't been professionally cleaned in 3+ months, spring/fall refresh, before listing a home for sale, after holidays.
              </p>
              <p className="text-muted-foreground">
                Typical timeline: 4-7 hours depending on home size. Many clients schedule a deep cleaning every 3-6 months, then maintain with standard cleaning between.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Truck className="w-8 h-8 text-primary" />
                Move-In and Move-Out Cleaning
              </h2>
              <p className="text-muted-foreground mb-3">
                Specialized cleaning for empty homes — either to leave your old place spotless (and get your security deposit back) or to start fresh in a new home. Includes inside-cabinet cleaning, inside-oven and inside-refrigerator detail, baseboards, light fixtures, blinds, and full interior windows.
              </p>
              <p className="text-muted-foreground mb-3">
                We work with renters, real estate agents, and homeowners. Many of our move-out clients use our checklist to confirm landlord deposit requirements are met.
              </p>
              <p className="text-muted-foreground">
                Pricing typically $300-$500 for a 2-3 bedroom home, depending on condition. We provide before/after documentation on request.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Hammer className="w-8 h-8 text-primary" />
                Post-Construction & Post-Renovation Cleaning
              </h2>
              <p className="text-muted-foreground mb-3">
                Construction dust and debris are not the same as everyday dirt. Our post-construction service uses HEPA-filtered vacuums, dust-trapping microfiber, and a multi-pass cleaning protocol designed to capture fine particulate that ordinary cleaning leaves behind.
              </p>
              <p className="text-muted-foreground mb-3">
                We offer three phases: rough clean (during construction), final clean (before homeowner walkthrough), and touch-up clean (after final walkthrough fixes). Common for kitchen remodels, bathroom renovations, additions, and full-home remodels.
              </p>
              <p className="text-muted-foreground">
                Pricing per square foot. We work with general contractors, remodelers, and homeowners directly.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Repeat className="w-8 h-8 text-primary" />
                Recurring Cleaning (Weekly, Biweekly, Monthly)
              </h2>
              <p className="text-muted-foreground mb-3">
                A consistent cleaning team that knows your home, your preferences, and your schedule. Recurring clients get priority scheduling, locked-in pricing, and a dedicated team — meaning the same trusted faces every visit.
              </p>
              <p className="text-muted-foreground mb-3">
                Most popular frequency in Maryland is biweekly (every other week). Weekly is ideal for larger homes, families with young children, or homes with pets. Monthly is a maintenance option between deep cleanings.
              </p>
              <p className="text-muted-foreground">
                Recurring pricing is approximately 15-20% lower than one-time pricing per visit.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                One-Time Cleaning Services
              </h2>
              <p className="text-muted-foreground mb-3">
                Single cleaning visits for specific occasions: hosting guests, post-party cleanup, preparing for a showing, returning from vacation, seasonal refresh. No commitment, no contracts.
              </p>
              <p className="text-muted-foreground">
                Available as standard or deep cleaning depending on need. Book online or by phone with as little as 48 hours notice.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Bed className="w-8 h-8 text-primary" />
                Airbnb & Short-Term Rental Turnover Cleaning
              </h2>
              <p className="text-muted-foreground mb-3">
                Specialized turnover cleaning for Airbnb, VRBO, and Booking.com hosts. We complete turnovers in 3-4 hours, handle linen changes (if you provide them), restock amenities, complete an inventory check, and send a photo report after every turn.
              </p>
              <p className="text-muted-foreground mb-3">
                Integrates with your booking calendar so cleanings are scheduled automatically as guests check out. Available 7 days/week including same-day turnovers when our schedule allows.
              </p>
              <p className="text-muted-foreground">
                Hosts can pay per turn or move to a monthly retainer for high-volume rentals.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Senior-Friendly Cleaning Service
              </h2>
              <p className="text-muted-foreground mb-3">
                Designed for older adults living independently and families helping aging parents. Our team uses fragrance-free products (important for seniors with chemical sensitivities), accommodates mobility considerations, and works with consistent scheduling so seniors recognize their cleaning team.
              </p>
              <p className="text-muted-foreground mb-3">
                We coordinate easily with adult children, caregivers, geriatric care managers, and home health agencies. Payment can be made by a third party (adult child paying for parent's cleaning is common).
              </p>
              <p className="text-muted-foreground">
                Especially popular in Bethesda, Chevy Chase, Potomac, and Silver Spring senior communities.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <PawPrint className="w-8 h-8 text-primary" />
                Pet-Safe Cleaning Service
              </h2>
              <p className="text-muted-foreground mb-3">
                Most household cleaners are toxic to pets — especially cats, birds, and reptiles. Our cleaning products are 100% pet-safe, plant-based, and free of ammonia, bleach, and synthetic fragrances that can harm or stress pets.
              </p>
              <p className="text-muted-foreground">
                Includes additional pet-specific care: deeper vacuum cycles for pet hair, odor-neutralizing treatments for litter and crate areas, and extra attention to pet bedding and feeding zones. We're also pet-friendly during cleanings — happy to work around cats and dogs at home.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-primary" />
                Eco-Friendly Cleaning Products
              </h2>
              <p className="text-muted-foreground mb-3">
                Every Capital Clean Care visit uses 100% eco-friendly, non-toxic, plant-based cleaning products. We do not use ammonia, chlorine bleach, phosphates, parabens, or synthetic fragrances. All products are EPA Safer Choice-certified or equivalent.
              </p>
              <p className="text-muted-foreground mb-3">
                Why it matters: indoor air quality after a conventional cleaning often gets WORSE before it gets better, due to VOC residue from chemical cleaners. Our products leave indoor air measurably cleaner than when we arrived.
              </p>
              <p className="text-muted-foreground">
                Safe for newborns, pregnant women, asthma and allergy sufferers, chemically sensitive individuals, and pets.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Apartment & Condo Cleaning
              </h2>
              <p className="text-muted-foreground mb-3">
                Smaller spaces, same standards. Apartment and condo cleaning in Rockville, Bethesda, Silver Spring, and DC apartment buildings. We're familiar with building requirements (elevator reservations, concierge check-ins, etc.).
              </p>
              <p className="text-muted-foreground">
                Studio and 1-bedroom: typically 90 minutes. 2-bedroom: typically 2-2.5 hours. Pricing starts at $120 for studios.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Office & Small Commercial Cleaning
              </h2>
              <p className="text-muted-foreground mb-3">
                Light commercial cleaning for small offices, medical practices, dental offices, professional services, and retail spaces under 5,000 sq ft. After-hours or weekend scheduling available to minimize business disruption.
              </p>
              <p className="text-muted-foreground">
                Our eco-friendly products are also better for office air quality — important for medical and dental practices where patients with allergies/sensitivities visit daily.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                Transparent, Honest Pricing
              </h2>
              <p className="text-muted-foreground mb-3">
                We believe in pricing you can see before you book. No hidden fees, no surprise add-ons, no high-pressure sales calls.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Approximate Maryland pricing (varies by home condition):</strong>
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-3">
                <li>Studio / 1BR standard cleaning: $140-$170</li>
                <li>2BR standard cleaning: $170-$220</li>
                <li>3BR standard cleaning: $210-$290</li>
                <li>4BR+ standard cleaning: $280-$420</li>
                <li>Deep cleaning: add 30-50% to standard pricing</li>
                <li>Move-in/move-out: $300-$500 depending on size</li>
                <li>Recurring discount: 15-20% off one-time pricing</li>
              </ul>
              <p className="text-muted-foreground">
                Get an exact quote in under 2 minutes using our online form, or call for a same-day estimate over the phone.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal>
            <article className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cities & Neighborhoods We Serve</h2>
              <p className="text-muted-foreground mb-3">
                We serve all of Montgomery County, Maryland and Washington, DC. Major cities served include:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground mb-3">
                <li><Link to="/locations/rockville-md" className="hover:text-primary">Rockville, MD</Link></li>
                <li><Link to="/locations/bethesda-md" className="hover:text-primary">Bethesda, MD</Link></li>
                <li><Link to="/locations/gaithersburg-md" className="hover:text-primary">Gaithersburg, MD</Link></li>
                <li><Link to="/locations/silver-spring-md" className="hover:text-primary">Silver Spring, MD</Link></li>
                <li><Link to="/locations/germantown-md" className="hover:text-primary">Germantown, MD</Link></li>
                <li><Link to="/locations/potomac-md" className="hover:text-primary">Potomac, MD</Link></li>
                <li><Link to="/locations/chevy-chase-md" className="hover:text-primary">Chevy Chase, MD</Link></li>
                <li><Link to="/locations/north-bethesda-md" className="hover:text-primary">North Bethesda, MD</Link></li>
                <li><Link to="/locations/kensington-md" className="hover:text-primary">Kensington, MD</Link></li>
                <li><Link to="/locations/olney-md" className="hover:text-primary">Olney, MD</Link></li>
                <li><Link to="/locations/wheaton-md" className="hover:text-primary">Wheaton, MD</Link></li>
              </ul>
            </article>
          </ScrollReveal>

        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions About Our Services</h2>
            <div className="space-y-6">
              {masterServicesFaqs.map((faq, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA cityName="Montgomery County" />

    </Layout>
  );
};

export default MasterServicesPage;
