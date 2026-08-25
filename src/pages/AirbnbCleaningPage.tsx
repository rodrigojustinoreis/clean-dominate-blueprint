import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { pickReviews } from "@/data/realReviews";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { slCities, slServices } from "@/data/service-locations";
import { GuideCards } from "@/components/RelatedContent";
import { isIndexable, guidesBySlugs } from "@/data/related-content";
import { COST_PRICE_ROWS } from "@/data/cost-cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import TestimonialVideo from "@/components/TestimonialVideo";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("airbnb-cleaning")!;
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

// Airbnb / short-term-rental cluster spokes, in reading order. guidesBySlugs() drops any that
// are noindex / canonicalised away / missing, so a stray slug never renders a broken card.
const AIRBNB_SPOKES = [
  "airbnb-cleaning-checklist",
  "airbnb-cleaning-fee",
  "airbnb-cleaning-tips-dmv-hosts",
  "move-in-cleaning-checklist",
  "how-often-should-you-hire-a-cleaning-service",
];

// What a full turnover covers, grouped by area — the same guest-ready routine our crews run on
// every changeover. Mirrors the service's whatsIncluded list, organised for scannability.
const BY_AREA: { room: string; tasks: string[] }[] = [
  {
    room: "Kitchen reset",
    tasks: [
      "All surfaces, appliances and sink wiped and sanitized",
      "Dishes washed and put away, or dishwasher run and emptied",
      "Coffee station reset and guest essentials restocked",
      "Stovetop degreased, backsplash and counters wiped",
      "Trash emptied and floor mopped",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Toilet, shower, tub and sink deep-cleaned and disinfected",
      "Mirror and fixtures polished spot-free",
      "Used toiletries replaced, amenities restocked",
      "Fresh towels folded and staged hotel-style",
      "Hair cleared from drains and floor, floor washed",
    ],
  },
  {
    room: "Bedrooms & linens",
    tasks: [
      "Every bed stripped and remade with fresh linens",
      "Under-bed and nightstands checked for left-behind items",
      "Surfaces, lamps and headboards dusted",
      "Carpets and rugs vacuumed, hard floors mopped",
      "Closets and drawers cleared and wiped",
    ],
  },
  {
    room: "Living areas & final check",
    tasks: [
      "Living spaces dusted, including TV, remotes and sills",
      "Cushions fluffed, throws folded, décor staged",
      "High-touch points — switches, handles — sanitized",
      "Left-behind guest items collected and set aside",
      "Guest-eye walkthrough and photo-ready inspection",
    ],
  },
];

// The turnover timeline — how a changeover actually runs between an 11am checkout and a 3pm
// check-in. Keeps the "same-day turnover" claim concrete without over-promising.
const TURNOVER_STEPS: { step: string; text: string }[] = [
  {
    step: "Checkout",
    text: "As soon as your guest checks out, we're notified from your synced calendar. Beds get stripped and laundry started first so linens have the most time to turn around.",
  },
  {
    step: "The turnover",
    text: "Bathrooms and the kitchen first — the two rooms that decide your cleanliness rating — then bedrooms, living areas, restocking, and staging. A one-bedroom takes 60–90 minutes; larger homes scale up.",
  },
  {
    step: "Guest-ready",
    text: "A final guest-eye walkthrough, then photo verification of the finished, staged unit before we lock up — so you can confirm it's ready from anywhere, even on a same-day turnover.",
  },
];

// Who professional turnover cleaning fits best — host personas, mirroring the recurring page's
// "is this right for you" block.
const HOST_TYPES: { title: string; text: string }[] = [
  {
    title: "Single-listing hosts",
    text: "One property, but every review counts. A consistent professional turnover protects your rating and hands back the hours you'd otherwise spend cleaning between guests.",
  },
  {
    title: "Multi-listing & portfolio hosts",
    text: "Two to four turnovers a week turn cleaning into a second job. A dedicated crew on a fixed checklist keeps every unit to the same standard without you driving between them.",
  },
  {
    title: "Co-hosts & property managers",
    text: "You answer to owners. Photo-verified turnovers give you documentation for every clean and a reliable partner you can schedule straight off the booking calendar.",
  },
  {
    title: "Back-to-back bookings",
    text: "An 11am checkout and a 3pm check-in leaves a four-hour window with no room for error. Same-day turnovers, synced to your calendar, are exactly what that window is built for.",
  },
];

const AirbnbCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/airbnb-cleaning",
    ogImage: "/images/blog/airbnb-service-og.jpg",
    preloadImage: "/images/blog/airbnb-service-hero.webp",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Airbnb Cleaning", href: "/services/airbnb-cleaning" }]}
      />
      {/* Defines the #business LocalBusiness entity that ServiceSchema's provider references —
          same shared entity (+ real 5.0/45 aggregateRating) the home & city pages already emit.
          Without this the provider @id dangled. */}
      <LocalBusinessSchema reviews={pickReviews("services/airbnb-cleaning", 2)} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/airbnb-cleaning"
        serviceType="Airbnb Cleaning"
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Sticky Top Bar (44px, green) ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[70] bg-[#2E7D32] text-white"
        style={{ height: 44 }}
      >
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <span className="hidden md:block text-xs font-medium whitespace-nowrap">
            ⭐⭐⭐⭐⭐ 5-Star Rated in Montgomery County
          </span>
          <span className="text-sm font-bold text-center flex-1 md:flex-none">
            🎁 15% OFF Your First Airbnb Turnover
          </span>
          <a
            href={PHONE_HREF}
            className="hidden sm:block bg-white text-[#2E7D32] font-bold text-xs px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Call {PHONE}
          </a>
        </div>
      </div>

      {/* Spacer for fixed bar */}
      <div style={{ height: 44 }} />

      {/* ── Header (simplified for ad traffic) ── */}
      {isAdTraffic ? (
        <header className="sticky top-[44px] z-50 bg-card/95 backdrop-blur border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Capital Clean Care logo" className="h-8 w-8 object-contain" />
              <span className="font-heading font-bold text-lg text-foreground">Capital Clean Care</span>
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 font-semibold text-sm text-accent hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </header>
      ) : (
        <div className="[&>header]:!top-[44px]">
          <Header />
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF6EA] via-background to-accent/5 py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 bg-white border border-[#2E7D32]/20 rounded-full px-3.5 py-1.5 shadow-sm mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· 45 Google reviews</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">
                {service.h1}
              </h1>

              <p className="text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                {service.shortDescription} We sync to your booking calendar and turn the property over
                between checkout and check-in — every stay guest-ready, every time.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg shadow-[#2E7D32]/20 transition-colors"
                >
                  Get My Free Quote →
                </button>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/5 font-bold text-base px-8 py-3.5 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Booking-Synced", "Same-Day Turnovers", "Linen Changes Included", "Insured & Background-Checked"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0" /> {b}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:pl-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                  <img
                    src="/images/blog/airbnb-service-hero.webp"
                    alt="A bright, spotless open-plan short-term rental living and dining area, staged guest-ready after a Capital Clean Care Airbnb turnover in the DMV"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center gap-3">
                  <span className="text-3xl font-heading font-extrabold text-[#2E7D32] leading-none">9+</span>
                  <span className="text-xs text-muted-foreground leading-tight">years keeping<br />DMV homes clean</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Client video testimonial (autoplay-on-scroll) — replaces the video carousel ── */}
      <TestimonialVideo
        src="/videos/client-testimonial-0805.mp4"
        poster="/videos/client-testimonial-0805-poster.jpg"
        label="Capital Clean Care client testimonial — a DMV Airbnb host on turnovers with our team"
        heading="Hear It From an Airbnb Host"
        subtext="A DMV Airbnb host on what it's like to have Capital Clean Care handle turnovers."
      />

      {/* ── Intro / About ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <div className="space-y-4 text-foreground leading-relaxed text-[17px]">
              {service.intro.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════ SERVICE CONTENT ═══════════ */}

      {/* ── Google reviews carousel ── */}
      <TestimonialsCarousel />

      {/* ── Before & After photo carousel ── */}
      <BeforeAfterGallery />

      {/* ── What's included, by area ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">What's included</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">What's Included in Every Turnover Cleaning</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground mb-8">
              <p>
                A turnover clean resets your rental to hotel standard between guests — fresh linens and towels,
                a full bathroom and kitchen sanitize, restocked essentials, and a final guest-eye inspection.
                Every changeover follows the same room-by-room routine below, so nothing is left to memory on a
                busy same-day turnover.
              </p>
              <p>
                We coordinate with your booking calendar, restock from a supply closet you keep on-site, and
                finish with photo verification of the staged unit. Everything uses our EPA Safer Choice™
                plant-based products — safe for guests, and no harsh chemical smell at check-in.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {BY_AREA.map((r) => (
                <div key={r.room} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold mb-3">{r.room}</h3>
                  <ul className="space-y-2">
                    {r.tasks.map((t) => (
                      <li key={t} className="flex gap-2 items-start text-[15px] text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0 mt-0.5" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <details className="group mt-6 rounded-xl border border-border bg-card">
              <summary className="cursor-pointer list-none px-5 py-4 font-heading font-bold text-foreground flex items-center justify-between gap-3">
                <span>See the full turnover checklist — every task, every visit ({service.whatsIncluded.length} points)</span>
                <span className="text-[#2E7D32] transition-transform group-open:rotate-180 shrink-0" aria-hidden="true">▾</span>
              </summary>
              <ul className="px-5 pb-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex gap-2 items-start text-[15px] text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </details>
            <p className="text-sm text-muted-foreground mt-6">
              Want the full room-by-room routine? See our{" "}
              <Link to="/resources/airbnb-cleaning-checklist" className="text-accent hover:underline font-medium">
                Airbnb cleaning checklist
              </Link>{" "}
              — the exact 5-star turnover our crews follow.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── How a turnover works (timeline) ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">How a Same-Day Turnover Works</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              The window between one guest leaving and the next arriving is tight and unforgiving. Here's how we
              run a turnover so your rental is guest-ready on time, every time.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {TURNOVER_STEPS.map((s) => (
                <div key={s.step} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <span className="inline-block text-[#2E7D32] font-heading font-bold text-lg mb-1">{s.step}</span>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Passing the cost to guests? See how to{" "}
              <Link to="/resources/airbnb-cleaning-fee" className="text-accent hover:underline font-medium">add and price a cleaning fee on your listing</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Turnover pricing (one-time / per-clean, column [3]) ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Turnover Cleaning Prices by Home Size</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Every turnover is quoted as a <strong>flat per-clean price</strong> based on the size of your
              rental — never an open-ended hourly rate — so you know exactly what to build your{" "}
              <Link to="/resources/airbnb-cleaning-fee" className="text-accent hover:underline font-medium">cleaning fee</Link>{" "}
              around. The first clean of a new listing runs closer to a deep clean, since it sets the baseline
              every future turnover maintains. The ranges below are real per-clean turnover prices across the DMV.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">Home size</th>
                    <th className="p-3 font-heading font-bold">Approx. size</th>
                    <th className="p-3 font-heading font-bold">Turnover (per clean)</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_PRICE_ROWS.map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{row[0]}</td>
                      <td className="p-3 text-muted-foreground">{row[1]}</td>
                      <td className="p-3 font-semibold text-[#2E7D32]">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Most hosts pass this straight through to guests as the listing's cleaning fee, so a professional
              turnover effectively pays for itself while protecting your reviews.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Is turnover cleaning right for your rental? ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Is Professional Turnover Cleaning Right for Your Rental?</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Professional turnover cleaning pays off the moment cleanliness reviews and back-to-back bookings
              start to matter. If any of these sound like you, a dedicated turnover crew is likely the right fit.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {HOST_TYPES.map((h) => (
                <div key={h.title} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold mb-2">{h.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Compare our services (helps mis-matched visitors find the right page) ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Compare Our Cleaning Services</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Not sure Airbnb &amp; Short-Term Rental Cleaning is the right fit? Here's how it compares to our
              other services, so you can book the one that actually matches your property and schedule.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-card border-2 border-accent rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Airbnb &amp; Short-Term Rental Cleaning</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  You're on this page. Fast turnover cleanings between guests, coordinated around your booking
                  calendar — built for hosts who need speed and consistency, every checkout.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Recurring Cleaning</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Weekly, biweekly, or monthly cleanings for a home you live in full-time. Best if you own the
                  property and want ongoing upkeep instead of per-checkout turnovers.
                </p>
                <Link to="/services/recurring-cleaning" className="text-accent hover:underline font-medium inline-block mt-3">See Recurring Cleaning →</Link>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Deep Cleaning</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  A one-time, top-to-bottom reset — baseboards, inside appliances, grout, and every detail a
                  standard clean skips. Great before your rental's first listing photos or after a hard season
                  of bookings.
                </p>
                <Link to="/services/deep-cleaning" className="text-accent hover:underline font-medium inline-block mt-3">See Deep Cleaning →</Link>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Move In / Move Out Cleaning</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  For an empty property, not an active listing — ideal if you're converting a home into a rental
                  for the first time, or handing it back to an owner between long-term tenants.
                </p>
                <Link to="/services/move-out-cleaning" className="text-accent hover:underline font-medium inline-block mt-3">See Move In / Move Out Cleaning →</Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Urgency Block ── */}
      <div className="w-full bg-[#FFFDE7] border-y border-yellow-300 py-4 px-4 text-center">
        <p className="font-bold text-foreground text-base">
          🗓 Now booking Airbnb &amp; short-term rental turnovers in Rockville, Bethesda &amp; Silver Spring
        </p>
      </div>

      {/* ── Stats band ── */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { v: "5.0★", l: "Google rating" },
              { v: "45", l: "Five-star reviews" },
              { v: "9+ yrs", l: "Serving the DMV" },
              { v: "100%", l: "Satisfaction guarantee" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-center gap-1 py-5 px-3 rounded-xl border border-border bg-card text-center shadow-sm"
              >
                <span className="font-heading text-2xl md:text-3xl font-extrabold text-[#2E7D32] leading-none">{s.v}</span>
                <span className="text-xs font-medium text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">Why hosts choose us</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">What You Get With Our Airbnb Cleaning</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2E7D32]/10">
                    <CheckCircle className="h-5 w-5 text-[#2E7D32]" />
                  </div>
                  <span className="text-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Social Proof — real Google reviews + brand trust video ── */}
      <LocationSocialProof
        cityName="Montgomery County"
        citySlug="services"
        serviceSlug="airbnb-cleaning"
        serviceLabel="Airbnb Cleaning"
      />

      {/* ── Service Areas ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Airbnb Cleaning Available In These Areas</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Airbnb Cleaning in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
          {slServices.some((sl) => sl.slug === "airbnb-cleaning" || sl.name.toLowerCase().includes("airbnb")) && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Detailed Airbnb Cleaning pages by city:</p>
              <div className="flex flex-wrap gap-2">
                {slCities
                  .filter((c) => isIndexable(`/locations/${c.slug}/airbnb-cleaning`))
                  .slice(0, 6)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/locations/${c.slug}/airbnb-cleaning`}
                      className="text-sm text-accent hover:underline"
                    >
                      Airbnb Cleaning in {c.name} →
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Airbnb Cleaning Guides (cluster posts) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GuideCards heading="Airbnb & Short-Term Rental Cleaning Guides" guides={guidesBySlugs(AIRBNB_SPOKES)} />
        </div>
      </section>

      {/* ── GreenShield 5-Step Clean ── */}
      <GreenShield5Step compact showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Airbnb Cleaning FAQ</h2>
          <FAQ faqs={service.faqs} />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section
        id="quote"
        className="py-16 bg-secondary"
        style={{ scrollMarginTop: 120 }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Airbnb Cleaning Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
          </p>

          {/* Offer callout */}
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 15% OFF your first Airbnb turnover — mention this offer when booking
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm
                submitLabel="Send My Free Quote Request →"
                defaultService="airbnb"
                compact
              />
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 No spam. We'll call you back within 2 hours.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Prefer to call?{" "}
            <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">
              {PHONE}
            </a>{" "}
            — Mon–Sat 8AM–6PM
          </p>
        </div>
      </section>

      {!isAdTraffic && <Footer />}

      {/* ── Mobile Split CTA (fixed bottom) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex" style={{ height: 56 }}>
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center bg-[#2E7D32] text-white font-bold text-sm gap-1.5"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <button
          onClick={scrollToForm}
          className="flex-1 flex items-center justify-center bg-gray-900 text-white font-bold text-sm"
        >
          Get Quote
        </button>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="h-14 md:hidden" />
    </div>
  );
};

export default AirbnbCleaningPage;
