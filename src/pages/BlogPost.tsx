import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { blogPosts } from "./Blog";
import NotFound from "./NotFound";

const blogContent: Record<string, React.ReactNode> = {
  "eco-cleaning-tips-maryland-homes": (
    <article className="prose prose-lg max-w-none">
      <p>Maryland homeowners are increasingly choosing eco-friendly cleaning products — and for good reason. The Chesapeake Bay watershed, which spans much of central Maryland, is directly affected by the chemicals we use in our homes. By switching to plant-based, non-toxic cleaning solutions, you protect both your family and the local environment.</p>

      <h2>Why Eco-Friendly Cleaning Matters in Maryland</h2>
      <p>Traditional cleaning products contain chemicals like chlorine, ammonia, and phosphates that can harm indoor air quality and eventually make their way into Maryland's waterways. In communities like <Link to="/locations/silver-spring-md" className="text-accent hover:underline">Silver Spring</Link>, <Link to="/locations/rockville-md" className="text-accent hover:underline">Rockville</Link>, and <Link to="/locations/bethesda-md" className="text-accent hover:underline">Bethesda</Link>, where families prioritize health-conscious living, the shift to green cleaning has been significant.</p>

      <h2>Top Eco-Friendly Cleaning Tips</h2>
      <ol>
        <li><strong>Choose EPA Safer Choice products:</strong> Look for the EPA Safer Choice label, which certifies that every ingredient meets strict safety standards.</li>
        <li><strong>Use microfiber cloths:</strong> They capture more dust and bacteria than cotton rags, reducing the need for chemical sprays.</li>
        <li><strong>Ventilate while cleaning:</strong> Maryland's humid climate means good airflow prevents mold growth — open windows when possible.</li>
        <li><strong>Tackle pollen seasonally:</strong> The DMV region experiences heavy pollen. Regular <Link to="/services/deep-cleaning" className="text-accent hover:underline">deep cleaning</Link> in spring reduces allergen buildup.</li>
        <li><strong>Switch to plant-based disinfectants:</strong> Thymol-based cleaners disinfect effectively without harsh fumes.</li>
      </ol>

      <h2>Professional Eco-Friendly Cleaning</h2>
      <p>At Capital Clean Care, every cleaning across <Link to="/maryland" className="text-accent hover:underline">Maryland</Link>, <Link to="/washington-dc" className="text-accent hover:underline">Washington DC</Link>, and <Link to="/virginia" className="text-accent hover:underline">Northern Virginia</Link> uses exclusively non-toxic, plant-based products. Our <Link to="/services/eco-friendly-cleaning" className="text-accent hover:underline">eco-friendly cleaning service</Link> ensures your home is spotless without compromising your family's health or the environment.</p>

      <p>Ready to experience the difference? <Link to="/contact" className="text-accent hover:underline font-semibold">Get a free quote today</Link> and join thousands of DMV families who've made the switch to green cleaning.</p>
    </article>
  ),
  "deep-cleaning-checklist-dmv-homeowners": (
    <article className="prose prose-lg max-w-none">
      <p>Whether you live in a <Link to="/locations/georgetown-dc" className="text-accent hover:underline">Georgetown</Link> rowhouse, a <Link to="/locations/arlington-va" className="text-accent hover:underline">Arlington</Link> condo, or a spacious <Link to="/locations/potomac-md" className="text-accent hover:underline">Potomac</Link> estate, deep cleaning is essential for maintaining a healthy home. The mid-Atlantic climate brings unique challenges — humidity, pollen, and seasonal temperature swings — that make periodic deep cleaning a necessity, not a luxury.</p>

      <h2>Kitchen Deep Cleaning Checklist</h2>
      <ul>
        <li>Degrease range hood, stovetop, and oven interior</li>
        <li>Clean inside refrigerator — shelves, drawers, and seals</li>
        <li>Scrub backsplash grout and tile</li>
        <li>Wipe inside all cabinets and drawers</li>
        <li>Clean under and behind appliances</li>
      </ul>

      <h2>Bathroom Deep Cleaning Checklist</h2>
      <ul>
        <li>Descale shower walls, doors, and fixtures</li>
        <li>Scrub tile grout with specialized cleaners</li>
        <li>Deep clean toilet — bowl, base, behind tank</li>
        <li>Clean exhaust fan cover</li>
        <li>Wash floor on hands and knees for detailed results</li>
      </ul>

      <h2>Living Areas & Bedrooms</h2>
      <ul>
        <li>Dust ceiling fans, light fixtures, and vent covers</li>
        <li>Clean behind and under all accessible furniture</li>
        <li>Wipe baseboards, crown molding, and door frames</li>
        <li>HEPA vacuum carpets with slow, deep passes</li>
        <li>Clean window blinds — individual slats</li>
      </ul>

      <h2>When to Schedule a Deep Clean</h2>
      <p>We recommend quarterly deep cleans for most DMV homes. Spring is especially important to address pollen buildup, and fall prepares your home for the winter months. Our <Link to="/services/deep-cleaning" className="text-accent hover:underline">deep cleaning service</Link> covers 60+ checklist items across every room.</p>

      <p><Link to="/contact" className="text-accent hover:underline font-semibold">Book your deep clean today</Link> — serving <Link to="/locations/rockville-md" className="text-accent hover:underline">Rockville</Link>, <Link to="/locations/bethesda-md" className="text-accent hover:underline">Bethesda</Link>, <Link to="/locations/fairfax-va" className="text-accent hover:underline">Fairfax</Link>, and 20+ more DMV communities.</p>
    </article>
  ),
  "how-to-choose-cleaning-service-silver-spring": (
    <article className="prose prose-lg max-w-none">
      <p><Link to="/locations/silver-spring-md" className="text-accent hover:underline">Silver Spring, MD</Link> is one of the DMV's most dynamic communities, and residents here have high standards when it comes to home services. Choosing the right cleaning company can feel overwhelming, but focusing on a few key factors makes the decision easy.</p>

      <h2>1. Verify Insurance and Licensing</h2>
      <p>Always confirm that your cleaning service is licensed and carries liability insurance. This protects you if anything is damaged during a cleaning. At Capital Clean Care, we're fully licensed and insured with comprehensive coverage.</p>

      <h2>2. Ask About Background Checks</h2>
      <p>You're inviting people into your home — make sure they've been vetted. Our entire team undergoes thorough background checks before their first day.</p>

      <h2>3. Check for Eco-Friendly Options</h2>
      <p>If you have children, pets, or allergies, non-toxic products are essential. Our <Link to="/services/eco-friendly-cleaning" className="text-accent hover:underline">eco-friendly cleaning</Link> uses only plant-based, EPA Safer Choice certified products.</p>

      <h2>4. Read Reviews from Local Clients</h2>
      <p>Look for reviews from other <Link to="/locations/silver-spring-md" className="text-accent hover:underline">Silver Spring</Link> homeowners. Local experience matters — a company familiar with your neighborhood understands the specific cleaning challenges of the area. Check our <Link to="/reviews" className="text-accent hover:underline">Google reviews</Link> for real feedback from DMV clients.</p>

      <h2>5. Compare Pricing Transparently</h2>
      <p>Beware of companies that won't give a clear estimate. We provide transparent pricing based on home size and service type — no hidden fees. See our <Link to="/#quote" className="text-accent hover:underline">free quote form</Link> for an instant estimate.</p>

      <h2>6. Look for a Satisfaction Guarantee</h2>
      <p>A company that stands behind its work will offer a guarantee. Capital Clean Care provides a 100% satisfaction guarantee — if you're not happy, we'll return within 24 hours to re-clean at no charge.</p>

      <p>Ready to experience Silver Spring's most trusted cleaning service? <Link to="/contact" className="text-accent hover:underline font-semibold">Get your free quote today</Link>.</p>
    </article>
  ),
  "eco-cleaning-tips-winters-maryland": (
    <article className="prose prose-lg max-w-none">
      <p>Maryland winters bring unique cleaning challenges — road salt tracked indoors, dry air creating static dust buildup, and holiday gatherings leaving extra messes. At <Link to="/" className="text-accent hover:underline">Capital Clean Care</Link>, we help families across <Link to="/locations/rockville-md" className="text-accent hover:underline">Rockville</Link>, <Link to="/locations/bethesda-md" className="text-accent hover:underline">Bethesda</Link>, and <Link to="/locations/germantown-md" className="text-accent hover:underline">Germantown</Link> keep their homes spotless through the coldest months — using only eco-friendly methods.</p>

      <h2>1. Tackle Salt and Slush Stains Immediately</h2>
      <p>Road salt from Maryland's treated highways gets tracked onto hardwood, tile, and carpet. White residue can damage finishes over time. Mix equal parts water and white vinegar — a natural, non-toxic solution — and wipe entryway floors daily during snowy weeks. Place washable mats at every entrance to reduce salt spread.</p>

      <h2>2. Combat Dry Indoor Air and Dust</h2>
      <p>Heating systems running constantly in Silver Spring and Frederick homes circulate dust and lower humidity. Use a HEPA-filter vacuum at least twice weekly and dust with damp microfiber cloths to trap particles instead of spreading them. Consider adding a humidifier to keep humidity between 30-50%, which reduces static dust.</p>

      <h2>3. Deep Clean Carpets and Rugs Before Holiday Guests</h2>
      <p>Maryland families host frequently during winter holidays. A professional <Link to="/services/deep-cleaning" className="text-accent hover:underline">deep cleaning</Link> before Thanksgiving or Christmas ensures carpets, upholstery, and guest rooms are fresh. Our eco-friendly steam cleaning eliminates allergens without harsh chemicals — perfect for homes with children and pets.</p>

      <h2>4. Clean Air Vents and Heating Registers</h2>
      <p>Before cranking up the heat, remove vent covers and wash them in warm soapy water. Vacuum inside the duct openings to remove accumulated dust. This simple step improves indoor air quality and heating efficiency — saving energy costs during Maryland's coldest months.</p>

      <h2>5. Use Plant-Based Disinfectants for Cold & Flu Season</h2>
      <p>Winter means cold and flu season. Disinfect high-touch surfaces — doorknobs, light switches, remote controls, faucets — with thymol-based or hydrogen peroxide cleaners. These EPA Safer Choice products kill 99.9% of germs without releasing harmful fumes into your sealed winter home.</p>

      <h2>6. Protect Hardwood from Winter Moisture</h2>
      <p>Melting snow and wet boots can warp hardwood floors common in <Link to="/locations/kensington-md" className="text-accent hover:underline">Kensington</Link> and <Link to="/locations/chevy-chase-md" className="text-accent hover:underline">Chevy Chase</Link> homes. Wipe spills immediately, avoid excess water when mopping, and use a plant-based floor cleaner designed for sealed hardwood.</p>

      <h2>Schedule Your Winter Deep Clean</h2>
      <p>Don't let winter grime build up. Our <Link to="/services/eco-friendly-cleaning" className="text-accent hover:underline">eco-friendly cleaning service</Link> is available throughout Maryland, DC, and Northern Virginia. <Link to="/contact" className="text-accent hover:underline font-semibold">Get your free winter cleaning quote today</Link> — $25 off your first service!</p>
    </article>
  ),
  "best-cleaning-schedule-busy-families-dmv": (
    <article className="prose prose-lg max-w-none">
      <p>Between commutes to DC, kids' activities, and weekend plans, DMV families are busy. Keeping a clean home shouldn't add stress. Here's a practical cleaning schedule designed for real life in <Link to="/locations/silver-spring-md" className="text-accent hover:underline">Silver Spring</Link>, <Link to="/locations/arlington-va" className="text-accent hover:underline">Arlington</Link>, and across the region.</p>

      <h2>Daily Tasks (10 Minutes)</h2>
      <ul>
        <li>Wipe kitchen counters and stovetop after cooking</li>
        <li>Load/unload dishwasher</li>
        <li>Quick bathroom counter wipe</li>
        <li>Sort mail and declutter entryway</li>
        <li>One load of laundry (wash, dry, fold)</li>
      </ul>

      <h2>Weekly Tasks (Handled by Your Cleaning Service)</h2>
      <ul>
        <li>Vacuum all floors and carpets</li>
        <li>Mop hard floors</li>
        <li>Clean all bathrooms — toilet, shower, sink, mirror</li>
        <li>Dust furniture, shelves, and ceiling fans</li>
        <li>Clean kitchen appliance exteriors</li>
        <li>Change bed linens</li>
        <li>Empty all trash cans</li>
      </ul>
      <p>This is exactly what our <Link to="/services/recurring-cleaning" className="text-accent hover:underline">recurring cleaning service</Link> covers — weekly or bi-weekly, so you never fall behind.</p>

      <h2>Monthly Tasks</h2>
      <ul>
        <li>Clean inside microwave and oven</li>
        <li>Wipe baseboards and door frames</li>
        <li>Vacuum under furniture</li>
        <li>Clean windows (interior)</li>
        <li>Sanitize trash cans</li>
      </ul>

      <h2>Quarterly Tasks (Deep Cleaning)</h2>
      <ul>
        <li>Inside refrigerator and cabinets</li>
        <li>Behind and under appliances</li>
        <li>Light fixtures and vent covers</li>
        <li>Carpet deep-cleaning</li>
        <li>Grout scrubbing in kitchens and baths</li>
      </ul>
      <p>Our <Link to="/services/deep-cleaning" className="text-accent hover:underline">quarterly deep cleaning</Link> handles all of this in a single visit.</p>

      <h2>How Recurring Service Saves Time and Money</h2>
      <p>Families on our weekly plan save 25% per visit. That's hundreds of dollars annually — plus the hours you reclaim each week. Most <Link to="/locations/rockville-md" className="text-accent hover:underline">Rockville</Link> and <Link to="/locations/bethesda-md" className="text-accent hover:underline">Bethesda</Link> clients tell us recurring service is their best household investment.</p>

      <p><Link to="/contact" className="text-accent hover:underline font-semibold">Start your recurring cleaning plan today</Link> — $25 off your first visit for new clients!</p>
    </article>
  ),
  "post-renovation-cleaning-guide-maryland": (
    <article className="prose prose-lg max-w-none">
      <p>Renovating your <Link to="/locations/germantown-md" className="text-accent hover:underline">Germantown</Link> kitchen or finishing a <Link to="/locations/frederick-md" className="text-accent hover:underline">Frederick</Link> basement? Construction dust, debris, and adhesive residue don't disappear on their own. Post-renovation cleaning requires specialized techniques — here's your complete guide.</p>

      <h2>Why Post-Construction Cleaning is Different</h2>
      <p>Standard cleaning products and methods can't handle construction dust. Fine particles from drywall, sawing, and sanding embed in HVAC systems, settle on every surface, and can irritate respiratory systems for weeks. A professional <Link to="/services/post-construction-cleaning" className="text-accent hover:underline">post-construction cleaning</Link> uses HEPA filtration and specialized techniques.</p>

      <h2>Phase 1: Rough Clean (Immediately After Construction)</h2>
      <ul>
        <li>Remove all large debris, packaging, and leftover materials</li>
        <li>Sweep and vacuum all surfaces with industrial HEPA vacuum</li>
        <li>Wipe down walls and ceilings to remove dust film</li>
        <li>Clean HVAC vents and replace filters</li>
        <li>Remove paint splatters from floors, windows, and fixtures</li>
      </ul>

      <h2>Phase 2: Detailed Clean</h2>
      <ul>
        <li>Wash all windows — interior and exterior glass, sills, and tracks</li>
        <li>Clean inside all cabinets, closets, and drawers</li>
        <li>Scrub tile grout and remove adhesive residue</li>
        <li>Polish all hardware — doorknobs, hinges, faucets</li>
        <li>Vacuum and mop all floors with appropriate solutions</li>
        <li>Clean light fixtures and ceiling fans</li>
      </ul>

      <h2>Phase 3: Final Touch</h2>
      <ul>
        <li>Sanitize all bathrooms and kitchen surfaces</li>
        <li>Dust and polish all countertops and surfaces</li>
        <li>Final HEPA vacuum of entire space</li>
        <li>Spot-check all rooms for missed areas</li>
        <li>Air quality check — ensure dust levels are safe</li>
      </ul>

      <h2>Timeline and Costs</h2>
      <p>A typical post-renovation clean for a Maryland home takes 4-8 hours depending on scope. Costs start at $350 for a single room and scale with square footage. Use our <Link to="/#price-calculator" className="text-accent hover:underline">price calculator</Link> for an instant estimate.</p>

      <h2>DIY vs. Professional: What Maryland Homeowners Should Know</h2>
      <p>While you can handle surface-level cleanup, construction dust in HVAC systems and embedded in carpets requires professional equipment. Our teams serving <Link to="/locations/gaithersburg-md" className="text-accent hover:underline">Gaithersburg</Link>, <Link to="/locations/potomac-md" className="text-accent hover:underline">Potomac</Link>, and surrounding areas use commercial HEPA vacuums and eco-friendly degreasers that won't damage new finishes.</p>

      <p><Link to="/contact" className="text-accent hover:underline font-semibold">Book your post-renovation cleaning today</Link> — serving all of Maryland, DC & Northern Virginia.</p>
    </article>
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const content = blogContent[post.slug];
  const { seoHelmet } = useSEO({
    title: `${post.title} | Capital Clean Care Blog`,
    description: post.excerpt,
    canonical: `https://capitalcleancare.com/blog/${post.slug}`,
  });

  return (
    <Layout>
      {seoHelmet}
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`https://capitalcleancare.com/blog/${post.slug}`}
        datePublished={post.date}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} className="mb-6" />
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>

          {content}

          <div className="mt-12 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
