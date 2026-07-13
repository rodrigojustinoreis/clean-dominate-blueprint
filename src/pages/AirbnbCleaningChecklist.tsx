import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/airbnb-bedroom-turnover.webp";
const URL = "https://capitalcleancare.com/blog/airbnb-cleaning-checklist";

const toc: { href: string; label: string }[] = [
  { href: "#room-by-room", label: "The room-by-room turnover checklist" },
  { href: "#restocking", label: "Restocking essentials guests notice" },
  { href: "#timeline", label: "The 60-90 minute turnover timeline" },
  { href: "#guest-checks", label: "What 5-star guests actually check" },
  { href: "#diy-vs-pro", label: "DIY vs hiring a professional turnover service" },
];

const rooms: { room: string; items: string[] }[] = [
  { room: "Bedroom", items: ["Strip every bed completely and remake it with fresh linens, never reused between guests", "Check under the bed and between the mattress and headboard for hair, socks, and forgotten items", "Dust nightstands, lamps, and the headboard, and wipe light switches", "Empty the trash and check every drawer and closet shelf for anything left behind", "Stage the bed hotel-style: tight corners, plumped pillows, folded throw at the foot"] },
  { room: "Bathroom", items: ["Sanitize the toilet inside and out, including the base and behind the seat hinges", "Scrub the shower, tub, and sink, and clear every strand of hair from the drain and floor", "Polish the mirror and faucet until they are completely spot-free", "Hang fresh towels folded hotel-style: a bath towel and hand towel per guest, plus washcloths", "Restock toilet paper, hand soap, shampoo, and conditioner"] },
  { room: "Kitchen", items: ["Wash, dry, and put away every dish, or run and fully empty the dishwasher", "Wipe appliances inside and out, including the inside of the microwave", "Check the refrigerator for leftovers and wipe down the shelves", "Reset the coffee station: clean the machine, refill pods or grounds, line up the mugs", "Degrease the stovetop and wipe counters, backsplash, and sink before mopping the floor"] },
  { room: "Living areas", items: ["Dust every surface, including the TV screen, remote controls, and window sills", "Fluff and straighten cushions, fold throws, and return furniture to its staged position", "Vacuum upholstery for hair first, then vacuum and mop the floors last", "Do a final staging pass: guidebook out, chargers in place, blinds set the way your photos show them"] },
];

const restock: string[] = [
  "Toilet paper: at least two rolls per bathroom, one on the holder and one clearly visible",
  "Paper towels: a full roll on the counter, plus a spare under the sink",
  "Hand soap and dish soap, topped up rather than nearly empty",
  "Coffee, tea, and sugar for at least the first morning",
  "Trash bags: a fresh liner in every bin and spares underneath",
  "Dishwasher pods, a new sponge, and basic cleaning spray for guest spills",
];

const timeline: { time: string; task: string }[] = [
  { time: "0-15 min", task: "Strip all beds, start laundry if the unit has a washer, gather every trash bag, and open windows to air the space out." },
  { time: "15-40 min", task: "Bathroom and kitchen, the two rooms that decide your cleanliness rating. Full sanitize, no shortcuts." },
  { time: "40-60 min", task: "Bedrooms and living areas: dust top to bottom, wipe high-touch surfaces, then vacuum and mop your way toward the door." },
  { time: "60-75 min", task: "Remake the beds with fresh linens, hang towels, restock every consumable from the owner's closet." },
  { time: "75-90 min", task: "The guest-eye inspection: walk the unit like a first-time guest, fix the staging, and take photos of the finished space." },
];

const guestChecks: { title: string; text: string }[] = [
  { title: "Smells at the door", text: "The entry scent is the first impression, formed before a guest sees a single surface. Air the unit, take out all trash, and never mask odors with heavy fragrance." },
  { title: "Hair, anywhere", text: "One hair on a white towel or a bathroom floor reads as an unclean unit, even if everything else is perfect. It is the most common trigger for cleanliness complaints." },
  { title: "Under and behind things", text: "Guests drop phones and look under beds and sofas. If they find dust or a previous guest's sock, it lands in the review." },
  { title: "Glasses and silverware", text: "Water spots and fingerprints on drinkware read as dirty dishes. Hold glasses up to the light before putting them back on the shelf." },
  { title: "High-touch grime", text: "Remote controls, light switches, and the fridge handle get touched by every guest and skipped by rushed cleaners. Wipe them on every single turnover." },
];

const faqs = [
  { q: "How long does an Airbnb turnover cleaning take?", a: "For a one-bedroom rental, a complete turnover takes 60 to 90 minutes for an experienced cleaner: stripping and remaking beds, sanitizing the bathroom and kitchen, restocking, and a final inspection. Add roughly 30 minutes for each additional bedroom and bathroom. A first clean of a new listing takes longer, closer to a deep clean, because you are setting the baseline that every turnover afterward maintains." },
  { q: "How much does Airbnb cleaning cost?", a: "Turnover cleaning in the DMV generally follows standard cleaning rates: about $150 to $180 for a 1-2 bedroom and $200 to $400+ for larger homes, with a first-time deep clean running $230 to $540+. Most hosts pass this cost straight through to guests as the cleaning fee on the listing, so a professional turnover effectively pays for itself while protecting your reviews." },
  { q: "Do Airbnb cleaners restock supplies?", a: "A dedicated turnover service will, and it should be part of every visit. Cleaners restock toilet paper, paper towels, soap, coffee, and trash bags from a backstock the host keeps in an owner's closet, and they flag when supplies run low so you can reorder before it becomes a guest problem. Confirm restocking is included before you hire, because a standard house cleaning service may not offer it." },
  { q: "What happens if a guest leaves a big mess?", a: "Your cleaner should photograph the damage before touching anything, since Airbnb requires documentation for reimbursement claims through AirCover. The extra cleaning time is then billed beyond the standard turnover rate. Capital Clean Care crews photo-verify every turnover, and if anything is ever missed on a clean, our 24-hour re-clean guarantee covers it at no charge." },
];

const AirbnbCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning Checklist: The 5-Star Turnover Guide",
    description:
      "Airbnb cleaning checklist for 5-star turnovers: room-by-room tasks, restocking essentials, a 60-90 minute timeline, and what picky guests actually check.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="airbnb cleaning checklist, airbnb turnover cleaning, vacation rental cleaning checklist, airbnb cleaning service, short term rental turnover" />
      </Helmet>
      <ArticleSchema
        title="Airbnb Cleaning Checklist: The 5-Star Turnover Guide"
        description="Room-by-room Airbnb turnover checklist: fresh linens, bathroom and kitchen sanitizing, restocking essentials, a 60-90 minute timeline, and what 5-star guests inspect first."
        url={URL}
        datePublished="2026-07-08"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Airbnb cleaning checklist: a freshly made bed during a vacation rental turnover">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Airbnb Cleaning Checklist: The 5-Star Turnover Guide</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The exact turnover routine that protects your cleanliness rating, guest after guest</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A complete Airbnb turnover covers four things: <strong>fresh linens and towels, a full bathroom and kitchen
              sanitize, restocking the essentials, and a final guest-eye inspection</strong> before you lock up. For a typical
              one-bedroom, an experienced cleaner finishes the whole routine in 60 to 90 minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Turnover cleaning is not the same as cleaning your own home. A guest walks in with hotel expectations and a
              review form, and cleanliness is the most common theme in negative Airbnb reviews. This is the checklist our
              crews use on short-term rentals across Montgomery County, organized by room and by the clock, so nothing is
              left to memory on a busy changeover day.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hosting in the DMV? <a href="/#quote" className="text-accent font-semibold underline hover:no-underline">Get a free turnover quote</a>{" "}
                from a 5.0-star, bonded and insured team that has cleaned 500+ homes since 2015.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <nav aria-label="Table of contents" className="border border-border rounded-2xl p-5 bg-secondary/30 mb-10">
              <p className="font-heading font-bold text-foreground mb-2 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5">
                {toc.map((t) => (
                  <li key={t.href}>
                    <a href={t.href} className="text-sm text-accent underline hover:no-underline">{t.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="room-by-room" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Home className="h-6 w-6 text-accent shrink-0" /> The Room-by-Room Turnover Checklist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Work in the same order every time. A consistent route means nothing gets skipped when you are tired or rushed,
              and it is what makes the timeline further down realistic. Start where the stakes are highest: the bed and the
              bathroom.
            </p>
          </FadeInSection>

          {rooms.map((r) => (
            <FadeInSection key={r.room}>
              <h3 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{r.room}</h3>
              <ul className="space-y-2.5 mb-6">
                {r.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          ))}

          <FadeInSection>
            <img
              src="/images/blog/sparkling-kitchen.webp"
              alt="Airbnb kitchen cleaned and reset between guests"
              loading="lazy"
              width={1000}
              height={563}
              className="w-full rounded-2xl shadow-md my-8"
            />
          </FadeInSection>

          <FadeInSection>
            <h2 id="restocking" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Restocking Essentials Guests Notice</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A missing roll of toilet paper can undo 90 minutes of perfect cleaning. Guests rarely mention supplies in
              reviews when everything is there, but they always mention them when something is not. Restock these on every
              single turnover:
            </p>
            <ul className="space-y-2.5 mb-6">
              {restock.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Keep a locked owner's closet with backstock inside the unit. It means whoever cleans never has to leave
              mid-turnover, and you always know exactly what is running low.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Turnovers on autopilot for DMV hosts" subtext="Booking-synced schedules, restocking from your supply closet, and photo verification after every clean. Eco-friendly products, background-checked crews, flat per-turnover pricing." ctaLabel="Get My Turnover Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 id="timeline" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-accent shrink-0" /> The 60-90 Minute Turnover Timeline
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Here is how a one-bedroom turnover actually breaks down when the checkout is at 11 a.m. and the next guest
              lands at 3 p.m. Larger homes scale up: add roughly 30 minutes per additional bedroom and bathroom.
            </p>
            <div className="space-y-4 mb-8">
              {timeline.map((t) => (
                <div key={t.time} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1">{t.time}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.task}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The laundry is the bottleneck. If the unit has no washer, or back-to-back bookings leave no drying time, run
              two full linen sets per bed so the clean set goes on immediately and the dirty set leaves with the cleaner.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="guest-checks" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What 5-Star Guests Actually Check</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Read the one-star reviews on any listing and the same complaints repeat. Guests do not inspect like cleaners,
              they inspect like detectives, and these are the first places they look:
            </p>
            <div className="space-y-4 mb-8">
              {guestChecks.map((g) => (
                <div key={g.title} className="border border-border rounded-2xl p-5 bg-white">
                  <p className="font-heading font-bold text-foreground mb-1.5">{g.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 id="diy-vs-pro" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">DIY vs Hiring a Professional Turnover Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The math changes with volume. One or two turnovers a month is a very manageable DIY job. At two to four
              turnovers a week, cleaning becomes a part-time job stapled to your calendar, and a single same-day turnover
              with an 11 a.m. checkout and a 3 p.m. check-in can hold your entire day hostage.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That four-hour window is exactly where a professional{" "}
              <Link to="/services/airbnb-cleaning" className="text-accent underline hover:no-underline">Airbnb cleaning service</Link>{" "}
              earns its fee. A dedicated turnover crew works from a schedule synced to your booking calendar, follows a fixed
              checklist, restocks from your owner's closet, and sends photo verification of the finished, staged unit before
              locking up. Hosts in Rockville and Silver Spring who juggle multiple listings tell us the photos alone are
              worth it: you can confirm a unit is guest-ready from anywhere, including when a same-day turnover leaves no
              time to drive over yourself.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Capital Clean Care has cleaned 500+ homes since 2015 with bonded, insured, background-checked crews and EPA
              Safer Choice products, and every visit is backed by a 24-hour re-clean guarantee. If your rental is near
              downtown Bethesda, see our{" "}
              <Link to="/locations/bethesda-md/airbnb-cleaning" className="text-accent underline hover:no-underline">Airbnb cleaning in Bethesda</Link>{" "}
              page for local details.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14 mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Turnovers Handled, Reviews Protected</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Rated 5.0 stars across 45 Google reviews. Booking-synced turnovers, restocking, and photo verification for
                hosts in Bethesda, Rockville, Silver Spring, and across the DMV.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="tel:+12407042551">Call (240) 704-2551</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Airbnb Cleaning FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="airbnb-cleaning-checklist" />
      <StickyCTA />
    </Layout>
  );
};

export default AirbnbCleaningChecklist;
