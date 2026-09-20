import { useParams, Link } from "react-router-dom";
import { CheckCircle, Star, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import VideoShowcase from "@/components/VideoShowcase";
import FAQ from "@/components/FAQ";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema, WebPageSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import { slCities, slServices } from "@/data/service-locations";
import NotFound from "./NotFound";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import ServiceRelatedContent from "@/components/ServiceRelatedContent";
import { isIndexable } from "@/data/related-content";

// Only link to indexable city hubs (7 STATIC_CITIES hubs + many others are noindex).
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

// Representative real team photo per service (real photos build more trust than stock/AI).
const SERVICE_IMAGES: Record<string, string> = {
  "move-out-cleaning": "/images/services/move-out-cleaning.webp",
  "post-construction-cleaning": "/images/team/team-post-construction.jpg",
  "recurring-cleaning": "/images/services/recurring-cleaning.webp",
  "airbnb-cleaning": "/images/services/airbnb-cleaning.webp",
  "office-cleaning": "/images/locations/bethesda-house-cleaning/capital-clean-care-team.webp",
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const { seoHelmet } = useSEO({
    title: service?.metaTitle || "Cleaning Service Not Found",
    description: service?.metaDescription || "The requested cleaning service could not be found.",
    canonical: service ? `https://capitalcleancare.com/services/${service.slug}` : undefined,
    noIndex: !service,
  });

  if (!service) return <NotFound />;

  const heroImg = SERVICE_IMAGES[service.slug] || "/images/team/real-team-two-members.webp";
  const isOfficeCleaning = service.slug === "office-cleaning";
  const isMoveOutCleaning = service.slug === "move-out-cleaning";
  const isPostConstruction = service.slug === "post-construction-cleaning";

  const matchedSlService = slServices.find(
    (sl) => sl.slug === service.slug || sl.name.toLowerCase().includes(service.name.toLowerCase().split(" ")[0]),
  );

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name, href: `/services/${service.slug}` }]} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url={`https://capitalcleancare.com/services/${service.slug}`}
        serviceType={service.name}
      />
      <FAQSchema faqs={service.faqs} />
      {(isOfficeCleaning || isMoveOutCleaning) && (
        <>
          <LocalBusinessSchema areaServed={["Maryland", "Washington, DC", "Northern Virginia"]} />
          <WebPageSchema
            name={service.metaTitle}
            description={service.metaDescription}
            url={`https://capitalcleancare.com/services/${service.slug}`}
            cityName="Silver Spring"
            stateCode="Maryland"
            primaryImage="https://capitalcleancare.com/images/locations/bethesda-house-cleaning/capital-clean-care-team.webp"
          />
        </>
      )}

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F1F8F1] via-background to-accent/5 py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 bg-white border border-accent/20 rounded-full px-3.5 py-1.5 shadow-sm mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· Google reviews</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">
                {service.h1 || service.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                {service.shortDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button variant="cta" size="lg" asChild>
                  <a href="#quote">Get My Free Quote →</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Licensed & Insured", "Eco-Friendly Products", "Satisfaction Guaranteed", "Background-Checked"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {b}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:pl-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                  <img
                    src={heroImg}
                    alt={`Capital Clean Care team providing ${service.name.toLowerCase()} in the DMV`}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center gap-3">
                  <span className="text-3xl font-heading font-extrabold text-accent leading-none">9+</span>
                  <span className="text-xs text-muted-foreground leading-tight">years serving<br />the DMV</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {isMoveOutCleaning && (
        <section className="border-b border-border bg-background py-10 md:py-14" aria-labelledby="move-out-answer">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="mb-3 text-sm font-semibold text-accent">Reviewed August 31, 2026 · Maryland, Washington DC & Northern Virginia</p>
            <h2 id="move-out-answer" className="font-heading text-2xl font-bold text-foreground md:text-3xl">What does a professional move-out cleaning service include?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A professional move-out cleaning prepares an empty or nearly empty home for its next occupant. Capital Clean Care cleans kitchens and bathrooms in detail, wipes cabinets and drawers, addresses appliance interiors included in the written quote, removes dust from baseboards, fixtures, doors and accessible surfaces, and vacuums or mops every floor. The best time to schedule is after belongings are removed and before the final walkthrough. Price depends on square footage, condition, appliance interiors, stairs and requested extras. We confirm the scope in writing; a landlord or property manager—not the cleaning company—makes the final inspection and deposit decision.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Best timing", "After movers finish, while the property is empty and utilities remain on."],
                ["Built for transitions", "For tenants, homeowners, landlords, property managers and move-in preparation."],
                ["Clear written scope", "Home size, condition and optional interiors are confirmed before the appointment."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-heading font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isOfficeCleaning && (
        <section className="border-b border-border bg-background py-10 md:py-14" aria-labelledby="office-cleaning-answer">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="mb-3 text-sm font-semibold text-accent">Updated August 30, 2026 · Maryland, Washington DC & Northern Virginia</p>
            <h2 id="office-cleaning-answer" className="font-heading text-2xl font-bold text-foreground md:text-3xl">What does professional office cleaning include?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Professional office cleaning covers the shared areas that affect employee comfort and client impressions: entrances, reception, desks and workstations, conference rooms, floors, trash and recycling, restrooms, break rooms, glass, and high-touch points. Capital Clean Care builds a written checklist around the workspace, access rules, business hours, occupancy, and required frequency. Background-checked, insured teams can work before opening, after closing, or on weekends across Maryland, Washington DC, and Northern Virginia. A small office under 1,000 square feet may start around $150–$250 per visit, but the written quote changes with restrooms, floor type, kitchens, traffic, consumable restocking, and daily versus weekly service. Medical treatment areas and regulated biohazards require specialized providers; our scope is routine professional cleaning for offices, waiting rooms, retail, coworking, and similar commercial spaces.
            </p>
          </div>
        </section>
      )}

      {isPostConstruction && (
        <section className="border-b border-border bg-background py-10 md:py-14" aria-labelledby="post-construction-answer">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="mb-3 text-sm font-semibold text-accent">Updated September 20, 2026 · Maryland, Washington DC & Northern Virginia</p>
            <h2 id="post-construction-answer" className="font-heading text-2xl font-bold text-foreground md:text-3xl">How much does post-construction cleaning cost?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We quote post-construction work after a technician has assessed the property, and we do not publish a
              price list for it. Two houses of identical size can take very different amounts of work depending on how
              the trades left them. What the assessment is reading: how much fine dust settled and how far it
              travelled, whether debris and packaging were hauled out or left behind, how much paint spatter, adhesive,
              sealant and label residue is on the surfaces, the condition of the floors and whether they can take
              moisture, and how many separate surfaces the finished rooms actually have.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Quoting that from a phone call would mean padding the number to cover the unknown, or giving you a figure
              that changes once we are inside. The assessment costs you nothing, and what comes out of it is a written
              scope with the price attached before anyone starts.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Best timing", "After contractors finish and debris is hauled out, before furniture and move-in."],
                ["What drives the number", "Dust load, leftover debris, paint and adhesive residue, floor condition, and how many separate surfaces the space holds."],
                ["Built for", "New builds, renovations, remodels, additions and basement finishes, residential and light commercial."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-heading font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isPostConstruction && (
        <section className="bg-secondary/30 py-12 md:py-16" aria-labelledby="post-construction-dust">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 id="post-construction-dust" className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Why construction dust needs different equipment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Construction dust behaves differently from household dust, and the difference is measurable. Particles
              below 10 microns stay suspended in the air instead of falling. Below 4 microns they pass the nose and
              throat and reach deep into the lungs. Drywall compound, concrete, mortar and tile cutting all release
              respirable crystalline silica, which OSHA regulates on jobsites for that reason. Most of the work on a
              post-construction clean goes into capturing that dust rather than into tidying.
            </p>

            <h3 className="mt-9 font-heading text-xl font-bold text-foreground">Dust keeps falling after the work stops</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              The finest particles stay airborne long after the contractors leave. Construction dust keeps settling out
              of the air for 48 to 72 hours. Clean the house once, on the day the crew finishes, and a grey film comes
              back on every horizontal surface two mornings later. Nothing was done wrong; the dust had not finished
              falling. This is why the work runs in phases instead of one visit.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                ["Rough clean", "During the build, once framing, rough-ins and drywall are done. Bulk debris, packaging and protective film come out and floors get cleared. The site becomes safe to work in. It does not look finished yet."],
                ["Final clean", "After the trades finish and debris is hauled out. This is the detailed pass: surfaces, cabinet and drawer interiors, appliances, fixtures, windows, frames and tracks, floors edge to edge."],
                ["Touch-up", "After the punch list closes and the dust has finished falling. Catches what later trades, inspections and the 48 to 72 hour settling window put back."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h4 className="font-heading font-bold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">Why a household or shop vacuum makes it worse</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              A standard vacuum pulls fine dust in and pushes much of it back out through the exhaust and the seams of
              the housing. The body is not sealed and the filter was never built for particles this small. The floor
              looks clean afterwards while the finest fraction has moved into the air of the room and onto the surfaces
              someone already wiped. What matters in the equipment is the seal: everything drawn in has to pass through
              the filter, with no path around it.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">We filter the air while we work</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Wiping a surface lifts part of the dust back into the room, where it drifts and lands again on everything
              already finished. So we run an air scrubber through the job instead of only cleaning surfaces. Ours is an{" "}
              <strong>XPOWER X-2580</strong>, a 1/2 HP unit moving up to 550 CFM through four stages of filtration:
              two washable nylon mesh screens that take out around 90% of the medium and large debris, an activated
              carbon stage for odours from paint, adhesive and sealants, and a true HEPA filter rated at 99.97% of
              particles at 0.3 microns. It has five speeds, so it can run quietly in an occupied part of the house.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The outlet takes a duct, which lets us pull the room to negative pressure and vent filtered air out
              instead of pushing dust toward rooms that are already done. That is the same approach used in
              remediation work. Very few residential cleaning companies bring this equipment to a house.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">What &ldquo;HEPA&rdquo; actually means</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              HEPA rates a filter, not a company. There is no such thing as a HEPA-certified cleaning company, so treat
              that phrase as a warning sign when you see it. The US Department of Energy standard requires a HEPA
              filter to capture at least 99.97% of particles at 0.3 microns. The European EN 1822 classes set 99.95%
              for H13 and 99.995% for H14.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              One detail gets misread constantly. At 0.3 microns a filter is being tested against the particle size it
              finds hardest to catch, not the smallest size it can catch. Performance improves both above and below
              that figure, so 99.97% describes the filter at its worst.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Three questions are worth asking anyone you hire for this work. Is the vacuum body sealed, or does it
              just take a HEPA cartridge? Ask how the visits are spaced against the settling window. And get the
              scope in writing before anyone starts.
            </p>

            <h3 className="mt-12 font-heading text-xl font-bold text-foreground">CleanBuild 360: how we work a property, ceiling to floor</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              We named our own sequence because the order of the work decides the result. Every surface we clean sends
              dust downward. Cleaning a room in the wrong order means cleaning parts of it twice. So the property gets
              worked from the highest surface to the lowest, and the floor is close to last.
            </p>
            <ol className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "Ceilings, upper walls, ledges and corners",
                "Light fixtures, fans, exhaust and HVAC register covers",
                "Walls, doors, frames, window glass, sills and tracks",
                "Cabinets, closets, shelving and built-ins",
                "Trim, molding and baseboards",
                "Edges, corners and transitions as a separate detail pass",
                "Floors: HEPA vacuum first, then wash",
                "Second look, and another pass wherever dust came back",
              ].map((step, n) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{n + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            {/* Owner-supplied photographs of real jobs. Captions describe only what is visible in each frame. */}
            <figure className="mt-8">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  {
                    src: "/images/services/post-construction/ceiling-first",
                    alt: "A Capital Clean Care team member on a step ladder cleaning the ceiling above a built-in closet during a post-construction clean",
                    caption: "High surfaces first, before anything below them",
                  },
                  {
                    src: "/images/services/post-construction/air-equipment",
                    alt: "A uniformed Capital Clean Care team member setting up air-handling equipment against the baseboard of an empty renovated room",
                    caption: "Equipment set along the baseboard in an empty room",
                  },
                  {
                    src: "/images/services/post-construction/vent-cover",
                    alt: "A Capital Clean Care team member washing an HVAC return cover heavily caked with construction dust in a bathroom sink",
                    caption: "A return cover taken down and washed separately",
                  },
                  {
                    src: "/images/services/post-construction/floor-dustreveal",
                    alt: "A wet-dry floor washer with its green dust-detection light switched on, showing construction dust still on hardwood next to the baseboard",
                    caption: "The floor washer's green light showing dust still on the boards",
                  },
                ].map((img) => (
                  <div key={img.src}>
                    <img
                      src={`${img.src}.webp`}
                      srcSet={`${img.src}-500.webp 500w, ${img.src}.webp 1000w`}
                      sizes="(min-width: 768px) 22vw, 45vw"
                      alt={img.alt}
                      width={1000}
                      height={1250}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full rounded-xl object-cover shadow-sm ring-1 ring-border"
                    />
                    <p className="mt-2 text-xs leading-snug text-muted-foreground">{img.caption}</p>
                  </div>
                ))}
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Photographs from our own post-construction jobs in the DMV.
              </figcaption>
            </figure>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              The sequence follows the same logic as the EPA&apos;s guidance for cleaning after renovation work, which
              also runs high to low, uses HEPA vacuuming and wet cleaning, and calls for re-inspecting and re-cleaning
              while dust or residue remains. We use that as a technical reference for how we work. It is not a
              certification, and we do not hold one.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">The air runs about two hours in each zone</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              In each cleaning zone the scrubber usually runs for around two hours while the detail work happens
              around it. That figure is our own operating protocol rather than a published standard. Room size,
              ceiling height and how much dust the job left behind all change it, and so does where the machine has to
              sit to pull air across the room instead of past it.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">The floor gets vacuumed before it gets washed</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              A wet-dry floor washer is built to vacuum and wash in one pass, and in a normal house that is exactly
              how it should be used. A house after construction carries far more dry particulate than the machine was
              designed to meet in one go. Put water on that floor first and the fine dust turns into a slurry that
              spreads into grout lines, board seams and corners instead of leaving the room.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              So we split it. The whole floor gets HEPA vacuumed dry, including the places the machine cannot reach:
              wall transitions, corners, door jambs, closets, stair treads, cabinet toe kicks and the perimeter. Only
              then does water come out. For sealed hard floors we use a Tineco FLOOR ONE S7 Master, which pulls at
              23,000 Pa, senses how dirty the floor is through its iLoop system and adjusts water and suction as it
              goes, cleans against both edges, and keeps recovered dirty water in a separate tank from the clean
              solution. Its DustReveal light shows fine dust still sitting on the floor, which is useful on exactly
              this kind of job.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Before any water goes down, someone identifies the floor. A renovated property often has three or four
              different materials in it. Sealed hardwood, engineered wood, laminate, luxury vinyl, tile, porcelain
              and natural stone do not take the same moisture, the same chemistry or the same machine. Unsealed wood,
              damaged flooring and anything the manufacturer says not to wet-clean by machine gets handled another
              way. We do not flood wood.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">What we look at before anyone starts cleaning</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              The first visit is spent reading the property. Where the dust concentrated, which surfaces took the worst
              of it, what the trades left behind, and which materials need a gentler hand. The kind of project decides
              a lot of that. A basement finish leaves a sealed box full of drywall dust. A kitchen remodel leaves
              grease-free but adhesive-heavy cabinetry and appliance film. A flooring job leaves fine sanding dust in
              every room the crew walked through. A whole-house renovation leaves all of it at once.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We clean after new builds, whole-house renovations, additions, basement finishes, kitchen and bathroom
              remodels, flooring installs, drywall work and repaints. The sequence stays the same. What changes is
              where the time goes, and that is decided before the first surface is touched rather than discovered
              halfway through.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">Three levels of dust control</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["Settled dust", "Captured off walls, ceilings, trim and fixtures with sealed HEPA equipment, so what comes off a surface stays in the machine."],
                ["Airborne dust", "Filtered out of the room while the work happens, because cleaning a surface puts part of its dust back into the air."],
                ["Dust that comes back", "Caught on the second look, after the settling window has run and the room has had time to show what returned."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h4 className="font-heading font-bold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Most cleaning handles the first level only. Treating construction dust as a surface problem alone is why
              a house can look finished on the day and grey again by the weekend.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">Where the time actually goes</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Kitchens and bathrooms take the longest, and not because they are dirtier. They hold the most separate
              surfaces. A kitchen has cabinet exteriors, interiors and drawers, countertops and backsplash, appliance
              exteriors, the gaps beside and under them, the toe kicks, the sink and fixtures, and the floor edges that
              run behind all of it. A bathroom adds tile and grout, shower glass, the tub, vanity and mirror, and an
              exhaust cover that usually comes down to be washed separately.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Window tracks get treated as their own job. Construction dust does not sit loose in a track, it packs
              into the corners and compacts, and vacuuming alone will not lift it. Walls get matched to their finish:
              flat paint, fresh paint and delicate surfaces each take a different amount of pressure and moisture, and
              the wrong choice burnishes or marks a wall that was perfect an hour earlier.
            </p>

            <h3 className="mt-10 font-heading text-xl font-bold text-foreground">The second look decides when the job is done</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              One pass is not assumed to be enough. After the first full cycle the room gets inspected again for dust
              haze, residue, dirty edges, streaking and missed corners, and whatever is still there gets cleaned
              again. On a job that involved heavy drywall or sanding, that second pass is normal rather than
              exceptional.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Some things stay outside our scope on purpose. We clean accessible register and return covers and the
              surfaces around them, which is not the same as professional duct cleaning. Anything requiring a licensed
              electrical, HVAC or mechanical trade is not part of a cleaning visit. We assess visually and by hand,
              and we do not perform measured air quality testing; an environmental testing service does that.
            </p>
          </div>
        </section>
      )}

      {/* ── Intro ── */}
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

      {/* ── Stats band ── */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { v: "5.0★", l: "Google rating" },
              { v: "24h", l: "Re-clean guarantee" },
              { v: "9+ yrs", l: "Serving the DMV" },
              { v: "100%", l: "Satisfaction guarantee" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-1 py-5 px-3 rounded-xl border border-border bg-card text-center shadow-sm">
                <span className="font-heading text-2xl md:text-3xl font-extrabold text-accent leading-none">{s.v}</span>
                <span className="text-xs font-medium text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">The checklist</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
                What's Included — {service.whatsIncluded.length}-Point Checklist
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.whatsIncluded.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-card border border-border rounded-xl p-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-4.5 w-4.5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why choose us</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">The Benefits of Our {service.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex gap-3 items-start bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Social Proof — real reviews + brand trust video ── */}
      <LocationSocialProof
        cityName="DMV"
        citySlug="services"
        serviceSlug={service.slug}
        serviceLabel={service.name}
      />

      {/* ── Service Areas ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">{service.name} Available Across the DMV</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {topCities.map((c) => (
                <Button key={c.slug} variant="outline" size="sm" asChild>
                  <Link to={`/locations/${c.slug}`} aria-label={`${service.name} in ${c.name}, ${c.state}`}>
                    {c.name}, {c.state}
                  </Link>
                </Button>
              ))}
            </div>
            {matchedSlService && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Detailed {service.name} pages by city:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {slCities
                    .filter((c) => isIndexable(`/locations/${c.slug}/${matchedSlService.slug}`))
                    .slice(0, 6)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        to={`/locations/${c.slug}/${matchedSlService.slug}`}
                        className="text-sm text-accent hover:underline"
                        aria-label={`${service.name} in ${c.name}`}
                      >
                        {service.name} in {c.name} →
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </FadeInSection>
        </div>
      </section>

      <GreenShield5Step compact showCTA={false} />

      {/* Guides & Resources (Service Areas already listed above) */}
      <ServiceRelatedContent serviceSlug={service.slug} showAreas={false} />

      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">{service.name} FAQ</h2>
            <FAQ faqs={service.faqs} />
          </FadeInSection>
        </div>
      </section>

      {/* Carrossel de vídeos — antes da cotação */}
      <VideoShowcase heading={`See our ${service.name.toLowerCase()} team in action 👇`} />

      {/* ── Quote Form ── */}
      <section id="quote" className="py-16 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get a Free {service.name} Quote
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Serving Maryland, DC &amp; Northern Virginia · We respond within 2 hours
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-border shadow-sm bg-card">
              <div className="bg-background px-4 py-2.5 border-b border-border flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground">Real Client Review</p>
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/xI602FI_iOU"
                  title="Capital Clean Care client video testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
            <Card className="order-1 lg:order-2">
              <CardContent className="p-6 md:p-8">
                <QuoteForm defaultService={service.slug.replace("-cleaning", "").replace("move-out", "move").replace("post-construction", "post-construction")} compact />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
