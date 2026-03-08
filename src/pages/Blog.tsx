import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "eco-cleaning-tips-maryland-homes",
    title: "Eco-Friendly Cleaning Tips for Maryland Homes",
    excerpt: "Discover how plant-based, non-toxic products can keep your Maryland home sparkling while protecting your family, pets, and the Chesapeake Bay watershed.",
    date: "2026-03-01",
    readTime: "6 min read",
    category: "Eco Living",
  },
  {
    slug: "deep-cleaning-checklist-dmv-homeowners",
    title: "The Ultimate Deep Cleaning Checklist for DMV Homeowners",
    excerpt: "A room-by-room guide to deep cleaning your home in Maryland, DC, or Virginia — including seasonal tips for mid-Atlantic humidity and pollen.",
    date: "2026-02-15",
    readTime: "8 min read",
    category: "Cleaning Guides",
  },
  {
    slug: "how-to-choose-cleaning-service-silver-spring",
    title: "How to Choose a Cleaning Service in Silver Spring, MD",
    excerpt: "What to look for when hiring a house cleaning company in Silver Spring — from background checks and insurance to eco-friendly products and satisfaction guarantees.",
    date: "2026-02-01",
    readTime: "5 min read",
    category: "Tips & Advice",
  },
];

const Blog = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning Tips & Blog | Capital Clean Care",
    description: "Expert cleaning tips, eco-friendly guides, and advice for Maryland, DC & Virginia homeowners from Capital Clean Care.",
    canonical: "https://capitalcleancare.com/blog",
  });

  return (
    <Layout>
      {seoHelmet}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} className="mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Cleaning Tips & Insights</h1>
          <p className="text-muted-foreground text-lg mb-12">Expert advice for keeping your Maryland, DC & Virginia home spotless with eco-friendly methods.</p>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-accent" asChild>
                    <Link to={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
