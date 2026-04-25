import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { autoBlogPosts } from "@/data/auto-blog-posts";
import TrustBadges from "@/components/TrustBadges";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
  canonical?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "spring-cleaning-checklist-maryland-2026",
    title: "Spring Cleaning Checklist for Maryland Homes 2026",
    excerpt: "Tackle spring cleaning the right way with this room-by-room checklist built for Maryland's climate — pollen season, humidity, and all. Includes Rockville, Bethesda & Silver Spring tips.",
    date: "2026-03-10",
    readTime: "7 min read",
    category: "Seasonal Guides",
    coverImage: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "eco-cleaning-tips-maryland-homes",
    title: "Eco-Friendly Cleaning Tips for Maryland Homes",
    excerpt: "Discover how plant-based, non-toxic products can keep your Maryland home sparkling while protecting your family, pets, and the Chesapeake Bay watershed.",
    date: "2026-03-01",
    readTime: "6 min read",
    category: "Eco Living",
    coverImage: "https://images.pexels.com/photos/4099356/pexels-photo-4099356.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "house-cleaning-prices-maryland-2026",
    title: "House Cleaning Prices in Maryland: What to Expect in 2026",
    excerpt: "How much does house cleaning cost in Maryland, DC & Virginia? A transparent pricing breakdown by home size, service type, and city — updated for 2026.",
    date: "2026-02-22",
    readTime: "6 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "deep-cleaning-checklist-dmv-homeowners",
    title: "The Ultimate Deep Cleaning Checklist for DMV Homeowners",
    excerpt: "A room-by-room guide to deep cleaning your home in Maryland, DC, or Virginia — including seasonal tips for mid-Atlantic humidity and pollen.",
    date: "2026-02-15",
    readTime: "8 min read",
    category: "Cleaning Guides",
    coverImage: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "airbnb-cleaning-tips-dmv-hosts",
    title: "Airbnb Cleaning Tips for DMV Hosts: How to Get 5 Stars Every Time",
    excerpt: "Running an Airbnb in Washington DC, Maryland or Northern Virginia? These professional turnover cleaning tips will help you earn 5-star guest reviews consistently.",
    date: "2026-02-08",
    readTime: "7 min read",
    category: "Airbnb & Rentals",
    coverImage: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "how-to-choose-cleaning-service-silver-spring",
    title: "How to Choose a Cleaning Service in Silver Spring, MD",
    excerpt: "What to look for when hiring a house cleaning company in Silver Spring — from background checks and insurance to eco-friendly products and satisfaction guarantees.",
    date: "2026-02-01",
    readTime: "5 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "move-out-cleaning-checklist-maryland-tenants",
    title: "Move-Out Cleaning Checklist for Maryland Tenants: Get Your Deposit Back",
    excerpt: "Moving out in Rockville, Bethesda or Silver Spring? Use this landlord-approved move-out cleaning checklist to ensure your full security deposit is returned.",
    date: "2026-01-25",
    readTime: "7 min read",
    category: "Cleaning Guides",
    coverImage: "https://images.pexels.com/photos/1909652/pexels-photo-1909652.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "eco-cleaning-tips-winters-maryland",
    title: "Eco Cleaning Tips for Winters in Maryland",
    excerpt: "Keep your Maryland home clean and healthy through winter with these eco-friendly strategies — from salt stain removal to humidity control in Rockville, Bethesda & beyond.",
    date: "2026-01-15",
    readTime: "7 min read",
    category: "Seasonal Guides",
    coverImage: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "best-cleaning-schedule-busy-families-dmv",
    title: "The Best Cleaning Schedule for Busy DMV Families",
    excerpt: "A practical weekly and monthly cleaning plan for busy families in Silver Spring, Arlington & DC — plus how recurring service saves time and money.",
    date: "2026-01-01",
    readTime: "6 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/3935349/pexels-photo-3935349.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "remove-pet-hair-odors-dmv-homes",
    title: "How to Remove Pet Hair and Odors: A Guide for DMV Pet Owners",
    excerpt: "Dogs and cats love Maryland homes — but pet hair, dander, and odors don't have to. Here's how DMV pet owners can keep a clean, fresh home year-round.",
    date: "2025-12-28",
    readTime: "6 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "post-renovation-cleaning-guide-maryland",
    title: "Post-Renovation Cleaning Guide for Maryland Homeowners",
    excerpt: "Just finished a remodel in Germantown or Frederick? Here's a step-by-step post-construction cleaning checklist to make your renovated home move-in ready.",
    date: "2025-12-15",
    readTime: "8 min read",
    category: "Cleaning Guides",
    coverImage: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "recurring-cleaning-weekly-biweekly-monthly",
    title: "Weekly vs. Bi-Weekly vs. Monthly Cleaning: Which Plan Is Right for You?",
    excerpt: "Can't decide how often to schedule professional house cleaning in Maryland? This guide helps DMV homeowners choose the right recurring cleaning frequency for their lifestyle and budget.",
    date: "2025-12-01",
    readTime: "5 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "house-cleaning-bethesda-md",
    title: "House Cleaning in Bethesda, MD: What Homeowners Should Expect",
    excerpt: "A local guide to professional house cleaning in Bethesda — pricing, what's included, how to vet companies, and why eco-friendly matters in this health-conscious community.",
    date: "2026-04-08",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/bethesda-md",
  },
  {
    slug: "cleaning-service-arlington-va",
    title: "Finding the Best Cleaning Service in Arlington, VA: A Resident's Guide",
    excerpt: "Arlington condos, townhomes, and apartments have unique cleaning needs. Here's how Northern Virginia residents find and evaluate the right professional cleaning service.",
    date: "2026-04-05",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/arlington-va",
  },
  {
    slug: "deep-cleaning-rockville-md",
    title: "Deep Cleaning in Rockville, MD: The Complete Homeowner's Guide",
    excerpt: "Rockville homeowners face specific challenges — suburban home sizes, pollen season, and busy schedules. Here's everything you need to know about professional deep cleaning in Rockville.",
    date: "2026-04-02",
    readTime: "7 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/rockville-md",
  },
  {
    slug: "house-cleaning-washington-dc",
    title: "House Cleaning in Washington DC: What DC Residents Need to Know",
    excerpt: "From Capitol Hill rowhouses to Georgetown condos and Adams Morgan apartments — DC homes have unique cleaning needs. Here's your guide to professional house cleaning in Washington DC.",
    date: "2026-03-30",
    readTime: "7 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/washington-dc",
  },
  {
    slug: "cleaning-service-fairfax-va",
    title: "Professional House Cleaning in Fairfax, VA: A Homeowner's Overview",
    excerpt: "Fairfax families are busy — between commutes, schools, and activities. Discover how professional cleaning services in Fairfax, VA can help you reclaim your weekends.",
    date: "2026-03-27",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/fairfax-va",
  },
  {
    slug: "cleaning-service-georgetown-dc",
    title: "Cleaning Historic Georgetown Homes: What Makes DC's Oldest Neighborhood Different",
    excerpt: "Georgetown's historic rowhouses and Federal-style homes require specialized cleaning care. Here's how professional cleaners approach DC's most architecturally rich neighborhood.",
    date: "2026-03-24",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/georgetown-dc",
  },
  {
    slug: "cleaning-service-alexandria-va",
    title: "House Cleaning in Alexandria, VA: Old Town to Del Ray and Beyond",
    excerpt: "Alexandria's mix of historic Old Town row homes, modern condos, and suburban neighborhoods each have unique cleaning challenges. Here's the local guide for Alexandria homeowners.",
    date: "2026-03-21",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/alexandria-va",
  },
  {
    slug: "move-in-cleaning-guide-dmv",
    title: "Move-In Cleaning Guide for DMV Buyers and Renters",
    excerpt: "Moving into a new home in Maryland, DC or Virginia? Don't unpack until after a professional move-in clean. Here's exactly what to ask for — and why it matters.",
    date: "2026-03-18",
    readTime: "6 min read",
    category: "Cleaning Guides",
    coverImage: "https://images.pexels.com/photos/1909652/pexels-photo-1909652.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "allergy-proofing-home-dmv",
    title: "How to Allergy-Proof Your Home in Maryland, DC & Virginia",
    excerpt: "The DMV's pollen season is one of the worst in the country. Here's how to minimize indoor allergens — dust, mold, dander, and pollen — with eco-friendly cleaning strategies.",
    date: "2026-03-15",
    readTime: "7 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/4099356/pexels-photo-4099356.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "fall-cleaning-checklist-maryland",
    title: "Fall Cleaning Checklist for Maryland Homes: Prepare for Winter the Right Way",
    excerpt: "Before the cold sets in, Maryland homes need a thorough fall cleaning — from HVAC prep to weatherizing entryways. This seasonal checklist covers every room.",
    date: "2026-03-12",
    readTime: "7 min read",
    category: "Seasonal Guides",
    coverImage: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
  {
    slug: "house-cleaning-gaithersburg-md",
    title: "House Cleaning in Gaithersburg, MD: The Local Homeowner's Guide",
    excerpt: "From Kentlands to Crown Farm and Rio — Gaithersburg homeowners have unique cleaning needs. Here's your local guide to professional house cleaning in Gaithersburg, MD.",
    date: "2026-04-14",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/gaithersburg-md",
  },
  {
    slug: "cleaning-service-mclean-va",
    title: "Professional House Cleaning in McLean, VA: High-End Homes Done Right",
    excerpt: "McLean's luxury estates and executive homes demand precision and discretion. Here's what McLean, VA homeowners should expect from a professional cleaning service.",
    date: "2026-04-13",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/mclean-va",
  },
  {
    slug: "cleaning-service-columbia-md",
    title: "House Cleaning in Columbia, MD: A Guide for Howard County Homeowners",
    excerpt: "Columbia's planned community design means thoughtfully built homes and busy families. Discover what professional cleaning services offer Columbia and Howard County residents.",
    date: "2026-04-12",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/columbia-md",
  },
  {
    slug: "house-cleaning-potomac-md",
    title: "House Cleaning in Potomac, MD: Professional Services for Luxury Homes",
    excerpt: "Potomac's estate homes and large properties require specialized professional cleaning care. Here's what Potomac, MD homeowners should know when choosing a cleaning service.",
    date: "2026-04-11",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/potomac-md",
  },
  {
    slug: "cleaning-service-chevy-chase-md",
    title: "Cleaning Services in Chevy Chase, MD: A Homeowner's Guide",
    excerpt: "Chevy Chase's historic Craftsman homes, Tudor revivals, and luxury condos each need a different cleaning touch. Here's what residents should look for in a professional cleaning service.",
    date: "2026-04-10",
    readTime: "5 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/chevy-chase-md",
  },
  {
    slug: "house-cleaning-frederick-md",
    title: "House Cleaning in Frederick, MD: The Complete Local Guide",
    excerpt: "Frederick's growing community, historic downtown, and mix of antique row homes and new subdivisions bring unique cleaning needs. Here's your guide to professional house cleaning in Frederick.",
    date: "2026-04-09",
    readTime: "7 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/3935349/pexels-photo-3935349.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/frederick-md",
  },
  {
    slug: "deep-cleaning-montgomery-county-md",
    title: "Deep Cleaning in Montgomery County, MD: The Complete Homeowner's Guide",
    excerpt: "From Rockville and Bethesda to Silver Spring and Germantown — Montgomery County homeowners share common deep cleaning challenges. Here's the county-wide guide.",
    date: "2026-04-08",
    readTime: "7 min read",
    category: "Cleaning Guides",
    coverImage: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/maryland",
  },
  {
    slug: "cleaning-service-reston-va",
    title: "Professional Cleaning Services in Reston, VA: What Residents Need to Know",
    excerpt: "Reston's mix of townhomes, condos, and single-family homes all have distinct cleaning needs. Here's the local guide for Reston, VA homeowners and renters.",
    date: "2026-04-07",
    readTime: "6 min read",
    category: "Local Guides",
    coverImage: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    canonical: "https://capitalcleancare.com/locations/reston-va",
  },
  {
    slug: "office-cleaning-small-business-dmv",
    title: "Office Cleaning for Small Businesses in MD, DC & Virginia",
    excerpt: "A clean office boosts productivity, impresses clients, and protects employee health. Here's what small business owners in the DMV should know about professional office cleaning services.",
    date: "2026-04-06",
    readTime: "6 min read",
    category: "Tips & Advice",
    coverImage: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
  },
];

// Merge manual + auto-generated posts, sorted newest first
const allPosts = [...blogPosts, ...autoBlogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const Blog = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning Tips & Blog for MD, DC & VA | Capital Clean Care",
    description: "Expert eco-friendly cleaning tips, deep-cleaning guides & advice for Maryland, DC & Virginia homeowners. Stay spotless with Capital Clean Care's blog!",
    canonical: "https://capitalcleancare.com/blog",
  });

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} className="mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Cleaning Tips & Insights</h1>
          <p className="text-muted-foreground text-lg mb-12">Expert advice for keeping your Maryland, DC & Virginia home spotless with eco-friendly methods.</p>

          <div className="space-y-6">
            {allPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <Link to={`/blog/${post.slug}`} className="md:flex">
                  {post.coverImage && (
                    <div className="md:w-64 md:flex-shrink-0 h-48 md:h-auto overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-accent w-fit">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges compact withBackground={false} />
    </Layout>
  );
};

export default Blog;
