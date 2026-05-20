import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import BeforeAfterTabs from "@/components/BeforeAfterTabs";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";

const SpringCarpetCleaningBlog = () => {
  const { seoHelmet } = useSEO({
    title: "Spring Carpet Cleaning: Why It Matters & How to Do It Right | Capital Clean Care",
    description: "Discover why spring carpet cleaning is essential for Montgomery County homes. Learn what hides in your carpet after winter and how Capital Clean Care removes it all.",
    canonical: "https://capitalcleancare.com/blog/spring-carpet-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="spring carpet cleaning, carpet cleaning Montgomery County, deep clean carpet, carpet cleaning Maryland, house cleaning spring" />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Spring Carpet Cleaning" }]} />
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog/carpet-steam-cleaning-hero.jpg"
            alt="Professional cleaner steam-cleaning a carpet in a bright, clean home"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider backdrop-blur-sm border border-accent/30">
            Seasonal Advice
          </span>
          <h1 className="font-heading border-b border-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Spring Carpet Cleaning: The Most Important Clean of the Year
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium">
            After a long Maryland winter, your carpet is holding more dirt, allergens, and bacteria than you realize.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-blue">
          
          {/* SECTION 1 */}
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">Why Your Carpet Needs a Spring Deep Clean</h2>
          <div className="my-8 rounded-xl overflow-hidden shadow-md">
            <img 
              src="/images/blog/dirty-carpet-fibers.jpg" 
              alt="dirty carpet fibers after winter" 
              className="w-full max-h-[400px] object-cover m-0"
            />
          </div>
          <p>
            Your carpet is your home's largest air filter — and it's been working overtime all winter. During a typical winter in <strong>Montgomery County</strong>, carpets endure months of salt, slush, wet boots, and being sealed indoors with no fresh air circulation.
          </p>
          <p>
            According to the Carpet and Rug Institute, the average carpet traps up to 4x its weight in dirt and debris. Even a "clean-looking" carpet can host thousands of dust mites per square inch. Here is exactly what hides in your carpet fibers after winter:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 my-6">
            <li className="flex items-start gap-2 m-0 p-0 before:content-hidden"><CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" /> <span><strong>Dust mites</strong> and their droppings</span></li>
            <li className="flex items-start gap-2 m-0 p-0 before:content-hidden"><CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" /> <span><strong>Pet dander</strong> and shedding</span></li>
            <li className="flex items-start gap-2 m-0 p-0 before:content-hidden"><CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" /> <span><strong>Mold spores</strong> from tracked moisture</span></li>
            <li className="flex items-start gap-2 m-0 p-0 before:content-hidden"><CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" /> <span><strong>Bacteria</strong> and microbes</span></li>
            <li className="flex items-start gap-2 m-0 p-0 before:content-hidden"><CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" /> <span><strong>Salt residue</strong> from treated sidewalks</span></li>
            <li className="flex items-start gap-2 m-0 p-0 before:content-hidden"><CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" /> <span><strong>VOCs</strong> from indoor and outdoor pollution</span></li>
          </ul>

          <hr className="my-12 border-gray-200" />

          {/* SECTION 2 */}
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">The Health Impact of Dirty Carpets</h2>
          <div className="my-8 rounded-xl overflow-hidden shadow-md">
            <img 
              src="/images/blog/family-clean-carpet.jpg" 
              alt="Happy family sitting on a perfectly clean carpet" 
              className="w-full max-h-[400px] object-cover m-0"
            />
          </div>
          <p>
            The EPA states that indoor air can be <strong>2 to 5 times more polluted</strong> than outdoor air. When walking across a dirty carpet, trapped pollutants are released back into the air you breathe. Dust mite droppings are the #1 trigger for indoor allergies, worsening conditions like asthma, eczema, and seasonal allergies.
          </p>
          <div className="bg-blue-50 border-l-4 border-accent p-6 rounded-r-lg my-8">
            <p className="text-lg font-semibold text-gray-800 m-0">
              Spring is allergy season in Maryland — don't let your carpet make it worse. Studies show that professional carpet cleaning reduces allergen levels in the home by up to 98%.
            </p>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* SECTION 3 */}
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">Professional vs. DIY Carpet Cleaning</h2>
          <div className="my-8 rounded-xl overflow-hidden shadow-md">
             <img 
              src="/images/blog/professional-vs-diy-cleaning.jpg" 
              alt="Professional steam cleaning equipment vs. rental machine comparison" 
              className="w-full max-h-[400px] object-cover m-0"
            />
          </div>
          <p>
            Why hire a professional when you could rent a machine or just vacuum thoroughly? It all comes down to the backing of the carpet, where mold and the worst bacteria live.
          </p>
          <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full m-0 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-gray-700 border-b border-gray-200">Feature</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-700 border-b border-gray-200 border-l">DIY Vacuum</th>
                  <th className="py-4 px-6 text-left font-bold text-gray-700 border-b border-gray-200 border-l">DIY Steam Rental</th>
                  <th className="py-4 px-6 text-left font-bold text-accent border-b-2 border-accent border-l bg-blue-50/50">Professional Cleaning</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200">Cost</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">$0 (already own)</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">~$30-50/day + soaps</td>
                  <td className="py-4 px-6 font-semibold shadow-[inset_0_0_0_9999px_rgba(239,246,255,0.5)] border-b border-gray-200 border-l text-accent">Value-priced ($99+)</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="py-4 px-6 font-medium border-b border-gray-200">Depth of Clean</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">Surface level</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">Mid-level fibers</td>
                  <td className="py-4 px-6 font-semibold shadow-[inset_0_0_0_9999px_rgba(239,246,255,0.5)] border-b border-gray-200 border-l text-accent">Reaches carpet BACKING</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium border-b border-gray-200">Drying Time</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">N/A</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">12-24 hours</td>
                  <td className="py-4 px-6 font-semibold shadow-[inset_0_0_0_9999px_rgba(239,246,255,0.5)] border-b border-gray-200 border-l text-accent">2-4 hours</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="py-4 px-6 font-medium border-b border-gray-200">Allergen Removal</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">Low</td>
                  <td className="py-4 px-6 border-b border-gray-200 border-l">Medium</td>
                  <td className="py-4 px-6 font-semibold shadow-[inset_0_0_0_9999px_rgba(239,246,255,0.5)] border-b border-gray-200 border-l text-accent">Excellent (Up to 98%)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Recommended For</td>
                  <td className="py-4 px-6 border-l border-gray-200">Daily maintenance</td>
                  <td className="py-4 px-6 border-l border-gray-200">Light stains</td>
                  <td className="py-4 px-6 font-semibold shadow-[inset_0_0_0_9999px_rgba(239,246,255,0.5)] border-l border-gray-200 text-accent">True deep healing &amp; extraction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* SECTION 4 */}
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">The Capital Clean Care Carpet Process</h2>
          <div className="my-8 rounded-xl overflow-hidden shadow-md">
            <img 
              src="/images/blog/carpet-cleaning-process.jpg" 
              alt="Step by step carpet cleaning process" 
              className="w-full max-h-[400px] object-cover m-0"
            />
          </div>
          <p>
            When we arrive at your Montgomery County home, we don't just dump water onto your rugs. We follow a strict 7-step process:
          </p>
          <div className="space-y-4 my-8 pl-4 border-l-2 border-accent">
            <div className="flex gap-4">
              <span className="font-bold text-accent">Step 1:</span>
              <p className="m-0"><strong>Pre-inspection & Furniture Moving:</strong> We evaluate stains and carefully move standard furniture.</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-accent">Step 2:</span>
              <p className="m-0"><strong>Dry Vacuuming:</strong> We use industrial-grade vacuums to pull up loose dirt before adding moisture.</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-accent">Step 3:</span>
              <p className="m-0"><strong>Pre-treatment:</strong> Stubborn stains and high-traffic areas get eco-friendly targeted treatments.</p>
            </div>
             <div className="flex gap-4">
              <span className="font-bold text-accent">Step 4:</span>
              <p className="m-0"><strong>Hot Water Extraction:</strong> Sometimes called "steam cleaning," this flushes out dirt from the backing while simultaneously extracting it.</p>
            </div>
             <div className="flex gap-4">
              <span className="font-bold text-accent">Step 5:</span>
              <p className="m-0"><strong>Deodorizing:</strong> Eco-safe treatments that kill odor-causing bacteria instead of just masking it.</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-accent">Step 6:</span>
              <p className="m-0"><strong>Speed-drying:</strong> We utilize professional air movers so <em>most carpets dry within 2-4 hours.</em></p>
            </div>
             <div className="flex gap-4">
              <span className="font-bold text-accent">Step 7:</span>
              <p className="m-0"><strong>Walk-through:</strong> We review the results with you to ensure 100% satisfaction.</p>
            </div>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* SECTION 5 */}
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">Before & After Gallery</h2>
          <p>
            See the Capital Clean Care difference for yourself. Use the tabs below to toggle between the dirty "Before" and the fully "After" clean.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <BeforeAfterTabs 
              combinedImage="/images/blog/carpet-before-after-1.jpg" 
              caption="High-Traffic Living Room Cleanup" 
              alt="Living Room Carpet Before and After" 
            />
            <BeforeAfterTabs 
              combinedImage="/images/blog/carpet-before-after-2.jpg" 
              caption="Tough Pet Stain Removal" 
              alt="Pet Stain Removal Before and After" 
            />
          </div>

          <hr className="my-12 border-gray-200" />

          {/* SECTION 6 */}
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">Service Area & Pricing</h2>
          <p>
            We proudly serve all of <strong>Montgomery County, MD</strong> including: <Link to="/locations/rockville-md" className="text-accent underline hover:no-underline">Rockville</Link>, <Link to="/locations/bethesda-md" className="text-accent underline hover:no-underline">Bethesda</Link>, <Link to="/locations/gaithersburg-md" className="text-accent underline hover:no-underline">Gaithersburg</Link>, <Link to="/locations/silver-spring-md" className="text-accent underline hover:no-underline">Silver Spring</Link>, <Link to="/locations/germantown-md" className="text-accent underline hover:no-underline">Germantown</Link>, <Link to="/locations/potomac-md" className="text-accent underline hover:no-underline">Potomac</Link>, and Chevy Chase.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 my-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mt-0 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 mb-0">Professional deep cleaning starting at just <strong>$99 for a single room</strong>. Discounts available for multi-room packages.</p>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full whitespace-nowrap" asChild>
              <Link to="/contact">Request Your Free Quote</Link>
            </Button>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* FAQ SECTION */}
          <h2 className="text-3xl font-bold font-heading mb-8 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mt-0 mb-2 text-gray-900">How often should I have my carpets professionally cleaned?</h3>
              <p className="text-gray-600 mb-0">Every 12-18 months for most homes, or every 6-12 months if you have pets or suffer from allergies.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mt-0 mb-2 text-gray-900">How long will my carpets take to dry?</h3>
              <p className="text-gray-600 mb-0">Typically 2-4 hours with our professional air movers.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mt-0 mb-2 text-gray-900">Do you move furniture?</h3>
              <p className="text-gray-600 mb-0">Yes, we move standard furniture as part of our service so we can clean thoroughly underneath.</p>
            </div>
             <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mt-0 mb-2 text-gray-900">Is your cleaning safe for kids and pets?</h3>
              <p className="text-gray-600 mb-0">Absolutely. We use eco-friendly, non-toxic, and EPA Safer Choice plant-based cleaning solutions.</p>
            </div>
             <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mt-0 mb-2 text-gray-900">Can you remove pet odors and stains?</h3>
              <p className="text-gray-600 mb-0">Yes, we specialize in pet odor and stain removal using advanced enzyme-based treatments that attack the source of the odor.</p>
            </div>
          </div>
        </div>
      </article>

      {/* FINAL CTA SECTION */}
      <section className="relative py-20 bg-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog/carpet-clean-cta-bg.jpg" 
            alt="Clean, bright carpet after professional cleaning" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          />
        </div>
         <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl text-white">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white drop-shadow">
            Ready for the Cleanest Carpets in Montgomery County?
          </h2>
          <p className="text-xl mb-10 text-blue-50">
            Capital Clean Care has served Maryland homeowners since 2017. Book your spring carpet cleaning today and breathe easier.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold transition-all shadow-lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-accent bg-transparent border-white/50 hover:bg-white/10 px-8 py-6 rounded-full text-lg font-semibold transition-all backdrop-blur-sm" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpringCarpetCleaningBlog;
