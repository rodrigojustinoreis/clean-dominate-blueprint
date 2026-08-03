import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/SchemaMarkup";
import TrustBadges from "@/components/TrustBadges";
import ResourceCategoryNav from "@/components/blog/ResourceCategoryNav";
import FeaturedResourceCard from "@/components/blog/FeaturedResourceCard";
import { getResourceCategoryBySlug, postsInCategory } from "@/data/resource-categories";
import { allPosts } from "@/pages/Blog";
import NotFound from "./NotFound";

// Indexable category index at /resources/<slug> — lists every post the classifier assigns to this
// category, with a unique H1 + 100–150 word intro (never thin), the category pill nav, breadcrumbs,
// and CollectionPage schema. The category set is fixed (resource-categories.ts); the post list is
// derived from allPosts at render, so new articles appear here automatically (see CONTENT.md).
const ResourceCategory = ({ slug }: { slug: string }) => {
  const category = getResourceCategoryBySlug(slug);
  if (!category) return <NotFound />;

  const posts = postsInCategory(category.slug, allPosts);
  const url = `https://capitalcleancare.com/resources/${category.slug}`;

  const { seoHelmet } = useSEO({
    title: category.seoTitle,
    description: category.seoDescription,
    canonical: url,
  });

  return (
    <Layout>
      {seoHelmet}
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

          <ResourceCategoryNav active={category.slug} />

          <p className="text-sm font-medium text-muted-foreground mb-6">
            {posts.length} {posts.length === 1 ? "guide" : "guides"}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <FeaturedResourceCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <TrustBadges compact withBackground={false} />
    </Layout>
  );
};

export default ResourceCategory;
