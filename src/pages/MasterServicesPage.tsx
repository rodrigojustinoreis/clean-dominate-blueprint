import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Leaf, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import { BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://capitalcleancare.com/services";

const services = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    description: "Thorough top-to-bottom home cleaning using non-toxic, EPA Safer Choice certified products. Perfect for regular maintenance of any home.",
    icon: <Shield className="h-7 w-7 text-primary" />,
    price: "From $120",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    description: "Intensive detail cleaning that covers areas standard cleaning misses — baseboards, inside appliances, grout lines, and more.",
    icon: <Star className="h-7 w-7 text-primary" />,
    price: "From $200",
  },
  {
    slug: "recurring-cleaning",
    name: "Recurring Cleaning",
    description: "Weekly, bi-weekly, or monthly plans with consistent teams and up to 25% savings over one-time rates.",
    icon: <CheckCircle className="h-7 w-7 text-primary" />,
    price: "From $110/visit",
  },
  {
    slug: "move-out-cleaning",
    name: "Move-Out Cleaning",
    description: "Deposit-back ready deep cleans for renters and sellers. Covers every surface, appliance, and fixture before handover.",
    icon: <ArrowRight className="h-7 w-7 text-primary" />,
    price: "From $220",
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    description: "Fast-turnaround cleans between guest stays. Linen refresh, restocking checklist, and photo-ready presentation.",
    icon: <Users className="h-7 w-7 text-primary" />,
    price: "From $100",
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    description: "Specialized dust and debris removal after remodels or new builds. Includes HEPA vacuuming, surface wipe-downs, and window detailing.",
    icon: <Shield className="h-7 w-7 text-primary" />,
    price: "Custom quote",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    description: "Professional small-business and commercial space cleaning. Recurring or one-time plans, after-hours available.",
    icon: <Users className="h-7 w-7 text-primary" />,
    price: "Custom quote",
  },
  {
    slug: "eco-friendly-cleaning",
    name: "Eco-Friendly Cleaning",
    description: "Every clean uses EPA Safer Choice and Green Seal certified products — safe for children, pets, and allergy sufferers.",
    icon: <Leaf className="h-7 w-7 text-primary" />,
    price: "Standard rates",
  },
];

const pricingRows = [
  { size: "1 BR / 1 BA", standard: "$120–$150", deep: "$180–$220", moveOut: "$200–$250" },
  { size: "2 BR / 2 BA", standard: "$150–$200", deep: "$220–$290", moveOut: "$260–$330" },
  { size: "3 BR / 2 BA", standard: "$200–$270", deep: "$280–$380", moveOut: "$320–$430" },
  { size: "4 BR+",       standard: "$260–$370", deep: "$360–$520", moveOut: "$400–$580" },
];

const mdCities = ["Silver Spring", "Rockville", "Bethesda", "Gaithersburg", "Germantown", "Potomac", "Frederick", "Chevy Chase", "Kensington", "Wheaton", "Olney", "North Bethesda"];
const dcAreas  = ["Washington DC", "Georgetown", "Capitol Hill", "Dupont Circle", "Adams Morgan", "Shaw"];
const vaCities = ["Arlington", "Alexandria", "McLean", "Fairfax", "Falls Church", "Vienna", "Tysons", "Reston"];

const faqs = [
  {
    q: "How do I choose between a standard clean and a deep clean?",
    a: "A standard clean is ideal for homes cleaned regularly (every 1–4 weeks). A deep clean is recommended for first-time cleans, homes not cleaned in 2+ months, or before a major event. Deep cleans cover inside appliances, baseboards, grout, and other detail areas.",
  },
  {
    q: "Do you use eco-friendly products on every service?",
    a: "Yes. Every service uses EPA Safer Choice and Green Seal certified products by default. We never use bleach, ammonia, or synthetic fragrances unless you specifically request otherwise.",
  },
  {
    q: "Can I book a recurring plan and change the frequency later?",
    a: "Absolutely. You can switch between weekly, bi-weekly, and monthly at any time. Recurring clients also receive 15–25% discounts over one-time rates.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Yes. Every team member undergoes a thorough background check before joining. We are also fully bonded and insured, so you are covered if anything is damaged.",
  },
  {
    q: "Do you serve all of Maryland, DC, and Virginia?",
    a: "We serve Montgomery County MD, Washington DC, and Northern Virginia (Arlington, Fairfax, Alexandria, and surrounding areas). See our location pages for specific cities.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We typically have availability within 48–72 hours. Same-week bookings are usually possible, and we offer priority scheduling for recurring clients.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for 24 hours' notice to cancel or reschedule without charge. Late cancellations (under 24 hours) may incur a small fee to compensate the assigned team.",
  },
];

const MasterServicesPage = () => {
  useSEO({
    title: "All Cleaning Services | Capital Clean Care — MD, DC & VA",
    description: "Browse all cleaning services by Capital Clean Care: house cleaning, deep cleaning, move-out, recurring, Airbnb, post-construction, office, and eco-friendly. Serving Maryland, Washington DC, and Northern Virginia.",
    canonical: PAGE_URL,
    ogTitle: "All Cleaning Services | Capital Clean Care",
    ogDescription: "House cleaning, deep cleaning, move-out, recurring, Airbnb, and more. Eco-friendly products. Serving MD, DC & VA.",
    ogImage: "https://capitalcleancare.com/og-image.jpg",
    ogUrl: PAGE_URL,
  });

  return (
    <Layout>
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
            className="mb-6 justify-center text-primary-foreground/60"
          />
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            All Cleaning Services
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Eco-friendly residential and commercial cleaning across Maryland, Washington DC, and Northern Virginia. Licensed, insured, and background-checked teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/#quote">Get a Free Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+12407042551">Call (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">Choose Your Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all flex flex-col gap-3"
              >
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg">{svc.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold text-primary">{svc.price}</span>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-10">Flat-rate estimates — no hidden fees. Final quote confirmed after home walk-through or phone consultation.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-semibold">Home Size</th>
                  <th className="text-center px-4 py-3 font-semibold">Standard</th>
                  <th className="text-center px-4 py-3 font-semibold">Deep Clean</th>
                  <th className="text-center px-4 py-3 font-semibold">Move-Out</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? "bg-background" : "bg-secondary"}>
                    <td className="px-4 py-3 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-center">{row.standard}</td>
                    <td className="px-4 py-3 text-center">{row.deep}</td>
                    <td className="px-4 py-3 text-center">{row.moveOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">Recurring clients (weekly/bi-weekly) receive 15–25% off standard rates. Prices vary by home condition and add-ons.</p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Maryland
              </h3>
              <ul className="space-y-2">
                {mdCities.map((city) => (
                  <li key={city}>
                    <Link
                      to={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}-md`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="h-3 w-3" /> {city}, MD
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/maryland" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                All Maryland <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Washington DC
              </h3>
              <ul className="space-y-2">
                {dcAreas.map((area) => (
                  <li key={area} className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <ArrowRight className="h-3 w-3" /> {area}
                  </li>
                ))}
              </ul>
              <Link to="/washington-dc" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                All DC <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Northern Virginia
              </h3>
              <ul className="space-y-2">
                {vaCities.map((city) => (
                  <li key={city}>
                    <Link
                      to={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}-va`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="h-3 w-3" /> {city}, VA
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/virginia" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                All Virginia <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">Why Capital Clean Care</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Leaf className="h-6 w-6" />, title: "100% Eco Products", body: "EPA Safer Choice certified. Safe for kids, pets, and allergy sufferers." },
              { icon: <Shield className="h-6 w-6" />, title: "Licensed & Insured", body: "Fully bonded. Every cleaner passes a background check before their first job." },
              { icon: <Star className="h-6 w-6" />, title: "5★ Rated", body: "47+ five-star Google reviews from homeowners across MD, DC & VA." },
              { icon: <Users className="h-6 w-6" />, title: "Family-Owned", body: "Latino-owned business. You talk to the owner, not a call center." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3">
                <div className="bg-primary/10 rounded-lg w-10 h-10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <ConversionCTA cityName="Your Area" />
    </Layout>
  );
};

export default MasterServicesPage;
