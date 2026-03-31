import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Leaf, UserCheck, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { slCities, slServices } from "@/data/service-locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("deep-cleaning")!;
const topCities = cities.filter((c) => !c.slug.includes("county")).slice(0, 8);

const checklistGroups = [
  { icon: "🍳", title: "Kitchen", items: service.whatsIncluded.slice(0, 20) },
  { icon: "🚿", title: "Bathrooms", items: service.whatsIncluded.slice(20, 35) },
  { icon: "🛏", title: "Bedrooms & Living Areas", items: service.whatsIncluded.slice(35, 50) },
  { icon: "🏠", title: "Whole Home", items: service.whatsIncluded.slice(50) },
];

const trustBadges = [
  { Icon: Shield, text: "Licensed & Insured" },
  { Icon: Leaf, text: "Eco-Friendly" },
  { Icon: UserCheck, text: "Background-Checked" },
  { Icon: Award, text: "Satisfaction Guaranteed" },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const DeepCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/deep-cleaning",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Deep Cleaning", href: "/services/deep-cleaning" }]}
      />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/deep-cleaning"
        reviews={service.testimonials?.map((t) => ({ name: t.name, text: t.text, location: t.location }))}
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
            🎁 $25 OFF Your First Deep Clean
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: service.name }]}
            className="mb-6"
          />

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Professional Deep Cleaning in Montgomery County, MD
          </h1>

          {/* Dual CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
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
              <Phone className="h-4 w-4 mr-2" /> Call {PHONE}
            </a>
          </div>

          {/* Trust badges inline */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-10">
            {["Licensed & Insured", "Eco-Friendly Products", "Satisfaction Guaranteed", "Background-Checked"].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0" /> {b}
              </span>
            ))}
          </div>

          {/* Intro */}
          <div className="space-y-4 text-foreground leading-relaxed mb-12">
            {service.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency Block ── */}
      <div className="w-full bg-[#FFFDE7] border-y border-yellow-300 py-4 px-4 text-center">
        <p className="font-bold text-foreground text-base">
          🗓 We have availability this week in Rockville, Bethesda &amp; Silver Spring
        </p>
      </div>

      {/* ── Checklist Section ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#2E7D32] text-white text-center font-bold py-3 px-6 rounded-t-lg text-base md:text-lg">
            60-Point Deep Clean Checklist — Nothing Gets Missed
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {checklistGroups.map((group) => (
              <Card key={group.title} className="border border-border">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl" role="img" aria-label={group.title}>{group.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-base">{group.title}</h3>
                      <span className="text-xs text-muted-foreground">{group.items.length} items</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <span className="text-[#2E7D32] font-bold shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-8 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustBadges.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex flex-col items-center gap-2 py-5 px-3 rounded-lg border border-border bg-card text-center"
              >
                <Icon className="h-6 w-6 text-[#2E7D32]" />
                <span className="text-xs font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Benefits</h2>
          <div className="space-y-3">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex gap-2 items-start">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              What Montgomery County Homeowners Say
            </p>
            <h2 className="font-heading text-2xl font-bold mb-8 text-center">
              Real Results From Real Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.testimonials.map((t, i) => (
                <Card key={i}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <GoogleLogo />
                      <span className="text-xs text-muted-foreground">Google</span>
                    </div>
                    <p className="text-foreground italic mb-3 text-sm leading-relaxed">"{t.text}"</p>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-8 py-3 rounded-md shadow-lg transition-colors"
              >
                Join Our Happy Clients — Get a Free Quote
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Service Areas ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Deep Cleaning Available In These Areas</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Deep Cleaning in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
          {slServices.some((sl) => sl.slug === "deep-cleaning" || sl.name.toLowerCase().includes("deep")) && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Detailed Deep Cleaning pages by city:</p>
              <div className="flex flex-wrap gap-2">
                {slCities.slice(0, 6).map((c) => {
                  const matched = slServices.find(
                    (sl) => sl.slug === "deep-cleaning" || sl.name.toLowerCase().includes("deep")
                  );
                  if (!matched) return null;
                  return (
                    <Link
                      key={c.slug}
                      to={`/locations/${c.slug}/${matched.slug}`}
                      className="text-sm text-accent hover:underline"
                    >
                      Deep Cleaning in {c.name} →
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Deep Cleaning FAQ</h2>
          <FAQ faqs={service.faqs} />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section
        id="quote-form"
        className="py-16 bg-secondary"
        style={{ scrollMarginTop: 120 }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Deep Cleaning Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
          </p>

          {/* Offer callout */}
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 $25 OFF your first deep cleaning — mention this offer when booking
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm
                submitLabel="Send My Free Quote Request →"
                defaultService="deep"
              />
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 No spam. No commitment. We'll call you back within 2 hours.
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

      <ExitIntentPopup />
    </div>
  );
};

export default DeepCleaningPage;
