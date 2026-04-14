import { useParams, Link } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Phone, Shield, Leaf, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/PricingTable";
import TrustBar from "@/components/TrustBar";
import TrustBadges from "@/components/TrustBadges";
import ConversionCTA from "@/components/ConversionCTA";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getCityBySlug, getExpandedCityFaqs } from "@/data/locations";
import { services } from "@/data/services";
import { slServices, slCities } from "@/data/service-locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import NotFound from "./NotFound";
import regionMD from "@/assets/region-maryland.webp";
import regionDC from "@/assets/region-dc.webp";
import regionVA from "@/assets/region-virginia.webp";

const regionImages: Record<string, string> = {
  maryland: regionMD,
  "washington-dc": regionDC,
  virginia: regionVA,
};

/** Specific neighborhoods served per city — boosts local SEO relevance */
const cityNeighborhoods: Record<string, string[]> = {
  "rockville-md": ["Fallsgrove", "King Farm", "Twinbrook", "West End", "Town Center", "Potomac Woods", "Hungerford", "Montrose", "Brightview", "Congressional"],
  "silver-spring-md": ["Downtown Silver Spring", "Woodside", "Forest Glen", "Four Corners", "Long Branch", "Colesville", "White Oak", "Wheaton Hills", "Kemp Mill", "Burnt Mills"],
  "bethesda-md": ["Chevy Chase", "Friendship Heights", "Edgemoor", "Wildwood", "Burning Tree", "Woodmont Triangle", "Battery Park", "Somerset", "Westmoreland Hills", "Bradley Hills"],
  "germantown-md": ["Churchill Village", "Seneca Valley", "Middlebrook", "Gunners Lake", "Milestone", "Neelsville", "Clopper Mill", "Waring Station", "Kingsview", "Fox Chapel"],
  "gaithersburg-md": ["Kentlands", "Lakelands", "Crown Farm", "Montgomery Village", "Rio District", "Quince Orchard", "Shady Grove", "Flower Hill", "Goshen Estate", "Darnestown"],
  "potomac-md": ["Cabin John", "River Falls", "Avenel", "Brickyard", "Old Potomac", "Tara", "Westmore", "Inverness", "Regency Estates", "Piney Glen"],
  "frederick-md": ["Downtown Frederick", "Westside", "Ballenger Creek", "Rosemont", "Worman's Mill", "Whittier", "Clover Hill", "Tuscarora", "Amber Meadows", "Shookstown"],
  "urbana-md": ["Urbana Village", "Landsdale", "Maryland Point", "Sugarloaf Crossing", "Woodlands", "Victory Farm", "Waverly", "Greenleigh at Crossroads", "Ijamsville border", "New Market border"],
  "clarksburg-md": ["Clarksburg Village", "Cabin Branch", "Clarksburg Town Center", "Briar Creek", "Ten Mile Creek", "West Clarksburg", "Arora Hills", "Snowden Farm", "Little Seneca Creek area", "Black Hill"],
  "damascus-md": ["Damascus Village", "Goshen", "Laytonsville", "Upper Damascus", "Meadowside", "Damascus South", "Arora Hills", "Brink Road area", "Sweepstakes Road area", "Prices Distillery Road area"],
  "monrovia-md": ["Monrovia Village", "New Market", "Ijamsville", "Hyattstown", "Green Valley", "Fingerboard", "Detrick area", "Boyers Mill", "Kemptown", "Lilypons"],
  "takoma-park-md": ["Old Town Takoma Park", "Langley Park", "East Silver Spring", "Flower Avenue", "Carroll Avenue", "Sligo Creek", "Columbia Road", "Manor", "Maple Avenue area", "New Hampshire Avenue corridor"],
  "columbia-md": ["Owen Brown", "Harper's Choice", "Oakland Mills", "Wilde Lake", "Hickory Ridge", "Long Reach", "River Hill", "Kings Contrivance", "Town Center", "Dorsey's Search"],
  "ellicott-city-md": ["Historic Ellicott City", "Turf Valley", "Centennial", "Oella", "Daniels", "Plumtree", "Dunloggin", "Dorsey Hall", "Lawyers Hill", "Stone Gate"],
  "new-market-md": ["New Market Village", "Lake Linganore", "Kemptown", "Eaglehead", "Pinehurst", "Rosemont Manor", "Greenfield", "Linganore area", "Ijamsville border", "Monrovia border"],
  "wheaton-md": ["Wheaton Hills", "Glenmont", "Arcola", "White Oak border", "Westover Hills", "Kemp Mill", "Layhill", "Shorefield", "Norbeck", "Randolph Hills"],
  "washington-dc": ["Georgetown", "Friendship Heights", "Tenleytown", "Cleveland Park", "Woodley Park", "Cathedral Heights", "Palisades", "Spring Valley", "American University Park", "Wesley Heights"],
  "washington-dc-ne": ["Brookland", "Eckington", "Edgewood", "Woodridge", "Ivy City", "Trinidad", "Brentwood", "Langdon", "Rigby", "Fort Lincoln"],
  "capitol-hill-dc": ["Eastern Market", "Barracks Row", "Lincoln Park", "SE Capitol Hill", "H Street NE", "Union Station area", "Navy Yard", "Stanton Park", "Hill East", "Kingman Park"],
  "georgetown-dc": ["West Village", "East Village", "Burleith", "Hillandale", "Foxhall", "Georgetown Heights", "Glover Park border", "Canal Road area", "Whitehaven", "Battery Kemble"],
  "dupont-circle-dc": ["Logan Circle", "Scott Circle", "Kalorama", "U Street", "Embassy Row", "P Street Beach", "17th Street corridor", "Connecticut Avenue", "Adams Morgan border", "West Dupont"],
  "adams-morgan-dc": ["Mount Pleasant", "Columbia Heights", "Lanier Heights", "Kalorama", "Meridian Hill", "Pleasant Plains", "Park View", "16th Street Heights", "Woodley Park border", "Harvard Street"],
  "downtown-dc": ["Penn Quarter", "Chinatown", "Gallery Place", "Federal Triangle", "L'Enfant Plaza", "NoMa", "Mount Vernon Square", "Shaw", "City Center", "Union Station area"],
  "arlington-va": ["Clarendon", "Ballston", "Rosslyn", "Crystal City", "Pentagon City", "Lyon Village", "Cherrydale", "Shirlington", "Buckingham", "Aurora Hills"],
  "fairfax-va": ["Fair Lakes", "Fairfax City", "Burke", "Centreville", "Clifton", "Annandale", "Oakton", "Chantilly border", "Fairfax Station", "Greenbriar"],
  "mclean-va": ["Great Falls border", "Langley", "Chain Bridge", "Spring Hill", "Chesterbrook", "Lewinsville", "Dolley Madison", "Old Dominion", "Turkey Run", "Balls Hill"],
  "alexandria-va": ["Old Town", "Del Ray", "Eisenhower Valley", "Cameron Station", "Rosemont", "West End", "Mount Vernon", "Potomac Yard", "Carlyle", "Seminary Hill"],
  "falls-church-va": ["City of Falls Church", "Pimmit Hills", "West Falls Church", "Seven Corners", "Tuckahoe", "Holmes Run", "Bren Mar", "Lake Barcroft border", "Baileys Crossroads", "Willston"],
  "vienna-va": ["Tysons border", "Vienna Woods", "Courthouse Road area", "Maple Ave corridor", "Windover Heights", "Nottoway Park area", "Old Courthouse Road", "Westwood Hills", "Swinks Mill", "Center Street"],
  "tysons-va": ["Tysons Corner", "Greensboro", "Spring Hill", "McLean border", "Wolf Trap", "Westpark", "Scotts Run", "Chain Bridge Road", "International Drive", "Westwood"],
  "kensington-md": ["Kensington Heights", "Rock Creek Hills", "Alta Vista", "Strathmore", "Connecticut Ave corridor", "Detrick area", "Armory area", "Kensington Estates", "Knowles area", "Howard Avenue Historic District"],
  "chevy-chase-md": ["Chevy Chase Section 3", "Chevy Chase Section 5", "Chevy Chase Village border", "Somerset", "Bradley Hills", "North Chevy Chase", "Connecticut Ave corridor", "East Chevy Chase", "Western Ave border", "Brookdale"],
  "college-park-md": ["Old Town College Park", "Hollywood", "Berwyn", "Calvert Hills", "College Park Woods", "University Park border", "Lakeland", "Greenbelt border", "Adelphi border", "Guilford"],
  "laurel-md": ["Old Town Laurel", "Montpelier", "Pheasant Ridge", "Russett", "Bond Mill", "South Laurel", "Quaint Acres", "Laurel Lakes", "Stone Lake", "Carillon"],
  "bowie-md": ["Belair", "Mitchellville", "Pointer Ridge", "Whitehall", "Kenilworth", "Westgate", "Bowie Town Center area", "Tulip Grove", "Millbrook", "Foxhill"],
  "reston-va": ["Reston Town Center", "North Point", "South Lakes", "Lake Newport", "Hunters Woods", "Tall Oaks", "Lakepoint", "Willowpond", "Baron Cameron", "Sunrise Valley"],
  "montgomery-county-md": ["Silver Spring", "Rockville", "Bethesda", "Gaithersburg", "Germantown", "Potomac", "Wheaton", "Kensington", "Chevy Chase MD", "Takoma Park", "Clarksburg", "Damascus", "Glenmont", "Laytonsville", "Boyds"],
  "frederick-county-md": ["Frederick City", "Urbana", "New Market", "Monrovia", "Middletown", "Walkersville", "Thurmont", "Brunswick", "Mount Airy border", "Jefferson"],
  "howard-county-md": ["Columbia", "Ellicott City", "Savage", "Jessup", "Elkridge", "Fulton", "Clarksville", "Dayton", "Woodstock", "Glenwood"],
  "prince-georges-county-md": ["College Park", "Bowie", "Laurel", "Greenbelt", "Hyattsville", "Upper Marlboro", "Langley Park", "Seat Pleasant", "Capitol Heights", "Riverdale Park"],
};

/** City-specific "why choose us" openers to reduce template feel */
const cityWhyIntros: Record<string, string> = {
  "rockville-md": "Rockville families trust us for consistent, thorough cleaning that fits their busy Montgomery County lifestyles.",
  "silver-spring-md": "Silver Spring's diverse community deserves a cleaning team that adapts to every home style — from mid-century ranchers to modern apartments.",
  "bethesda-md": "Bethesda homeowners expect premium quality, and our meticulous approach delivers the elevated cleaning experience this community deserves.",
  "germantown-md": "Germantown families enjoy reliable, hassle-free cleaning from a team that understands the upcounty lifestyle.",
  "gaithersburg-md": "From Kentlands to Lakelands, Gaithersburg homeowners count on us for dependable, eco-conscious cleaning.",
  "potomac-md": "Potomac's elegant estates require a cleaning team with attention to detail and respect for fine finishes — that's our specialty.",
  "frederick-md": "Frederick homeowners appreciate our blend of small-town reliability and professional-grade cleaning expertise.",
  "columbia-md": "Columbia's planned communities deserve a cleaning service as thoughtful and organized as the neighborhoods themselves.",
  "ellicott-city-md": "From historic Main Street homes to modern developments, Ellicott City trusts our gentle yet thorough approach.",
  "arlington-va": "Arlington's fast-paced professionals rely on our flexible scheduling and consistent quality to keep their homes spotless.",
  "fairfax-va": "Fairfax families choose us for our eco-friendly products and the peace of mind that comes with background-checked teams.",
  "mclean-va": "McLean's distinguished homes receive the white-glove treatment they deserve — premium products, expert teams, impeccable results.",
  "alexandria-va": "From Old Town rowhouses to West End condos, Alexandria homeowners trust our versatile, professional cleaning teams.",
  "georgetown-dc": "Georgetown's historic homes and modern residences alike benefit from our careful, detail-oriented cleaning approach.",
  "capitol-hill-dc": "Capitol Hill residents count on our reliable, eco-friendly service to keep their homes pristine amid busy District schedules.",
  "kensington-md": "Kensington's historic Victorian and craftsman homes deserve a cleaning team that understands their unique character — we bring the care and expertise these properties require.",
  "chevy-chase-md": "Chevy Chase homeowners expect premium quality and meticulous attention to detail — we deliver the white-glove cleaning experience this distinguished community deserves.",
  "college-park-md": "College Park families and residents count on our reliable, eco-friendly cleaning to maintain healthy, beautiful homes close to one of the nation's top universities.",
  "laurel-md": "Laurel residents value reliability and professionalism, and our consistent, eco-friendly cleaning service delivers exactly that — every single visit.",
  "bowie-md": "Bowie families trust us for thorough, dependable cleaning that keeps their homes pristine while our plant-based products keep everyone safe.",
  "reston-va": "Reston's innovation-driven community appreciates our modern, eco-conscious approach — professional cleaning that aligns with the values of this forward-thinking planned community.",
  "montgomery-county-md": "Montgomery County homeowners across all communities count on our reliable eco-friendly cleaning services to maintain beautiful, healthy homes.",
  "frederick-county-md": "From Frederick City to Urbana, Frederick County families trust our professional teams to deliver consistent, high-quality cleaning throughout this growing region.",
  "howard-county-md": "Howard County consistently ranks among America's best counties — our premium cleaning services match the exceptional quality of life this community provides.",
  "prince-georges-county-md": "Prince George's County families deserve the same premium, eco-friendly cleaning quality we deliver across the broader DMV region.",
};

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");

  if (!city) return <NotFound />;

  const { seoHelmet } = useSEO({ title: city.metaTitle, description: city.metaDescription, canonical: `https://capitalcleancare.com/locations/${city.slug}` });

  const nearbyCities = city.nearbySlugs.map(getCityBySlug).filter(Boolean);
  const expandedFaqs = getExpandedCityFaqs(city);
  const stateLabel = city.stateSlug === "maryland" ? "Maryland" : city.stateSlug === "washington-dc" ? "Washington DC" : "Virginia";
  const cityLabel = city.state !== "DC" ? `${city.name}, ${city.state}` : city.name;
  const whyIntro = cityWhyIntros[city.slug] || `${city.name} homeowners choose Capital Clean Care for our reliable, eco-friendly cleaning services.`;
  const hasServiceLocationPages = slCities.some((c) => c.slug === city.slug);

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: stateLabel, href: `/${city.stateSlug}` }, { label: city.name, href: `/locations/${city.slug}` }]} />
      <FAQSchema faqs={expandedFaqs} />
      <ServiceSchema
        serviceName={`House Cleaning in ${city.name}`}
        description={`Professional eco-friendly house cleaning services in ${cityLabel}. Licensed, insured, background-checked teams.`}
        url={`https://capitalcleancare.com/locations/${city.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={regionImages[city.stateSlug] || regionMD}
            alt={`Eco-friendly house cleaning team serving ${city.name}, ${city.state} — Capital Clean Care`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl py-16 md:py-24">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: stateLabel, href: `/${city.stateSlug}` }, { label: city.name }]}
            className="mb-4 text-primary-foreground/60 [&_a]:text-primary-foreground/60 [&_a:hover]:text-primary-foreground [&_span[aria-current]]:text-primary-foreground/80 [&_svg]:text-primary-foreground/40"
          />
          <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.25rem] font-bold mb-5 text-primary-foreground leading-tight">
            House Cleaning Services in {cityLabel}
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Professional, eco-friendly house cleaning for {city.name} homes. Licensed, insured, and background-checked teams you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" className="text-base" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="secondary" size="lg" className="text-base" asChild>
              <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="dark" />

      {/* About Our Work */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Our Work in {city.name}
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            {city.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page Conversion CTA */}
      <ConversionCTA cityName={city.name} variant="full" />

      {/* Services Available — links to service-location pages when available */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Cleaning Services in {city.name}</h2>
          <p className="text-muted-foreground mb-8">We bring the full range of Capital Clean Care services to {city.name}. Click any service to learn more about how we serve your area.</p>

          {/* Service-location specific links */}
          {hasServiceLocationPages && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {slServices.map((sl) => (
                <Card key={sl.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <Link to={`/locations/${city.slug}/${sl.slug}`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Sparkles className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{sl.name} in {city.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Professional {sl.shortName} tailored for {city.name} homes</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* General service links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Card key={s.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <Link to={`/services/${s.slug}`} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{s.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.shortDescription}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — city-specific intro */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Why {city.name} Homeowners Choose Us</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{whyIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Leaf, text: "Eco-friendly, non-toxic products safe for your family and pets" },
              { icon: Shield, text: "Fully licensed and insured for your complete protection" },
              { icon: CheckCircle, text: "Every team member is background-checked and trained" },
              { icon: Star, text: "100% satisfaction guarantee — we'll re-clean if needed" },
              { icon: MapPin, text: `Local teams that know ${city.name} neighborhoods` },
              { icon: Sparkles, text: "Flexible scheduling including weekday and Saturday" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-4.5 w-4.5 text-accent" />
                </div>
                <span className="text-sm text-foreground mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Pricing in {city.name}</h2>
            <p className="text-muted-foreground">Estimated ranges by home size. Your actual price depends on bedrooms, bathrooms, condition, and cleaning type.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">What Affects Your Price in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Number of bedrooms & bathrooms",
              "Type of service requested",
              "Current condition of the home",
              "Frequency (one-time vs. recurring)",
              "Number of levels / floors",
              "Special requests or add-ons",
            ].map((f, i) => (
              <div key={i} className="flex gap-2 items-center p-3 rounded-lg bg-secondary text-sm">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">{city.name} Cleaning FAQ</h2>
          <FAQ faqs={expandedFaqs} />
        </div>
      </section>

      {/* Neighborhoods */}
      {cityNeighborhoods[city.slug] && (
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Neighborhoods We Serve in {city.name}
            </h2>
            <p className="text-muted-foreground mb-8">
              Our cleaning teams are familiar with {city.name}'s specific neighborhoods — from the street layout to the home styles. We serve all of the following areas and everything in between.
            </p>
            <div className="flex flex-wrap gap-2">
              {cityNeighborhoods[city.slug].map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/15 transition-colors"
                >
                  <MapPin className="h-3 w-3 shrink-0" />
                  {neighborhood}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Don't see your neighborhood? <a href="tel:+12407042551" className="text-accent font-semibold hover:underline">Call (240) 704-2551</a> — we likely serve your area.
            </p>
          </div>
        </section>
      )}

      {/* Google Map */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Our {city.name} Service Area</h2>
          <p className="text-muted-foreground mb-6">We serve all neighborhoods in and around {cityLabel}. See our coverage area below.</p>
          <GoogleMapEmbed cityName={city.name} state={city.state === "DC" ? "DC" : city.state} />
          <div className="mt-6">
            <GoogleBusinessLinks />
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Nearby Areas We Serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {nearbyCities.map((nc) => nc && (
                <Button key={nc.slug} variant="outline" className="h-auto py-3 flex-col gap-1" asChild>
                  <Link to={`/locations/${nc.slug}`}>
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium">{nc.name}{nc.state !== "DC" ? `, ${nc.state}` : ""}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <TrustBadges compact />

      {/* Quote Form */}
      <section className="py-16 md:py-20 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Get a Free Quote in {city.name}</h2>
            <p className="text-muted-foreground">Tell us about your {city.name} home and we'll respond with a personalized estimate.</p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
