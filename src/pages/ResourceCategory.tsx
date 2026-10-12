import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema, CollectionPageSchema, FAQSchema } from "@/components/SchemaMarkup";
import TrustBadges from "@/components/TrustBadges";
import ResourceCategoryNav from "@/components/blog/ResourceCategoryNav";
import FeaturedResourceCard from "@/components/blog/FeaturedResourceCard";
import HomeTrustMarquee from "@/components/home/HomeTrustMarquee";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";
import { getResourceCategoryBySlug, postsInCategory, type ResourceCategory as Category } from "@/data/resource-categories";
import { allPosts } from "@/pages/Blog";
import NotFound from "./NotFound";

// Indexable category index at /resources/<slug> — lists every post the classifier assigns to this
// category, with a unique H1 + 100–150 word intro (never thin), the category pill nav, breadcrumbs,
// and CollectionPage schema. The category set is fixed (resource-categories.ts); the post list is
// derived from allPosts at render, so new articles appear here automatically (see CONTENT.md).
// 2026-10-11: a category with `premium` data (apartment-cleaning) also gets the premium layout used
// by the main pages: real-photo hero with the credentials strip, fact sheet, service routes, FAQ and
// a quote form. Categories without it render exactly as before.
const ResourceCategory = ({ slug }: { slug: string }) => {
  const category = getResourceCategoryBySlug(slug);
  if (!category) return <NotFound />;

  const posts = postsInCategory(category.slug, allPosts);
  const url = `https://capitalcleancare.com/resources/${category.slug}`;

  const { seoHelmet } = useSEO({
    title: category.seoTitle,
    description: category.seoDescription,
    canonical: url,
    ...(category.premium ? { ogImage: `https://capitalcleancare.com${category.premium.heroImage.src}` } : {}),
  });

  const schemas = (
    <>
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: category.label, href: `/resources/${category.slug}` },
        ]}
      />
      <CollectionPageSchema
        name={category.h1}
        description={category.seoDescription}
        url={url}
        items={posts.map((p) => ({ title: p.title, slug: p.slug }))}
      />
    </>
  );

  const guides = (
    <>
      <ResourceCategoryNav active={category.slug} />
      <p className="text-sm font-medium text-muted-foreground mb-6">
        {posts.length} {posts.length === 1 ? "guide" : "guides"}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <FeaturedResourceCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );

  if (category.premium) return <PremiumCategory category={category} schemas={schemas} guides={guides} seoHelmet={seoHelmet} />;

  return (
    <Layout>
      {seoHelmet}
      {schemas}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: category.label },
            ]}
            className="mb-6"
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-[-0.03em] leading-[1.1]">
            <span aria-hidden="true">{category.emoji}</span> {category.h1}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl leading-relaxed">{category.intro}</p>
          {guides}
        </div>
      </section>

      <TrustBadges compact withBackground={false} />
    </Layout>
  );
};

const H2 = "font-heading text-2xl md:text-3xl font-bold tracking-[-0.02em] leading-tight";

const PremiumCategory = ({ category, schemas, guides, seoHelmet }: { category: Category; schemas: JSX.Element; guides: JSX.Element; seoHelmet: JSX.Element }) => {
  const p = category.premium!;
  return (
    <Layout>
      {seoHelmet}
      {schemas}
      <FAQSchema faqs={p.faqs} />

      {/* Hero: answer, CTAs, credentials strip (owner rule 2026-10-11) and a real team photo */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.06] py-10 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: category.label }]}
            className="mb-6"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Resource Center · Apartments &amp; rentals</p>
              <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.1] tracking-[-0.03em] md:text-5xl">{category.h1}</h1>
              <p className="mb-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{p.lead}</p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="cta" size="lg" className="text-base" asChild>
                  <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></a>
                </Button>
                <Button variant="outline" size="lg" className="text-base" asChild>
                  <a href="tel:+12407042551" onClick={() => trackPhoneClick(`resource_category_${category.slug}`)}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> (240) 704-2551
                  </a>
                </Button>
              </div>
              <HomeTrustMarquee className="-mt-2 max-w-xl" pxPerSecond={28} trackClassName="gap-6 py-1 sm:gap-8" />
            </div>
            <figure className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
                <img
                  src={p.heroImage.src}
                  alt={p.heroImage.alt}
                  width={p.heroImage.width}
                  height={p.heroImage.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">{p.heroImage.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* What these guides cover + fact sheet (citable by search engines and AI assistants) */}
      <section className="border-y border-border bg-card py-12 md:py-14">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className={`${H2} mb-4`}>How apartment cleaning differs from a house</h2>
          <p className="text-[17px] leading-relaxed text-foreground">{category.intro}</p>
          <div className="mt-8 rounded-2xl border border-border bg-secondary/60 p-5 md:p-6">
            <h3 className="mb-4 font-heading text-lg font-bold">Apartment cleaning at a glance</h3>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[max-content_minmax(0,1fr)]">
              {p.facts.map((f) => (
                <div key={f.label} className="contents">
                  <dt className="text-sm font-semibold text-foreground">{f.label}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* The guides themselves */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className={`${H2} mb-6`}>Apartment, condo and Airbnb cleaning guides</h2>
          {guides}
        </div>
      </section>

      {/* Hiring intent goes to the service pages (this hub stays informational) */}
      <section className="border-t border-border bg-secondary/40 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className={`${H2} mb-2`}>Rather have us clean it?</h2>
          <p className="mb-6 text-muted-foreground">Each service has its own page with the full scope and a free written quote.</p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {p.services.map((s) => (
              <li key={s.href}>
                <Link
                  to={s.href}
                  className="group flex min-h-11 items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-sm motion-safe:transition-all motion-safe:duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-foreground group-hover:text-primary">{s.label}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{s.scope}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className={`${H2} mb-6 text-center`}>Apartment cleaning FAQ</h2>
          <FAQ faqs={p.faqs} />
        </div>
      </section>

      <TrustBadges compact withBackground={false} />

      {/* Quote form with the credentials carousel (owner rule 2026-10-11) */}
      <section id="quote" className="scroll-mt-20 bg-secondary py-16 md:py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-3 font-heading text-3xl font-bold">Get a Free Apartment Cleaning Quote</h2>
            <p className="text-muted-foreground">Tell us the size, the building rules and how often you want us, and we reply with a written quote.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <QuoteForm defaultService="condo" trustVariant="credentials-row" trustMarqueeSpeed={28} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourceCategory;
