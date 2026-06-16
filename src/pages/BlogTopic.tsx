import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import TrustBadges from "@/components/TrustBadges";
import BlogTopicNav from "@/components/blog/BlogTopicNav";
import PostCard from "@/components/blog/PostCard";
import { getTopicBySlug } from "@/data/blog-topics";
import { allPosts } from "@/pages/Blog";
import NotFound from "./NotFound";

// Indexable topic hub at /blog/topic/<slug> — lists every post whose category maps to the
// topic, with a unique H1 + intro (so it's never thin) and the shared pill nav. Part of the
// blog hub-and-spoke: builds topical authority and gives each cluster a crawlable home.
const BlogTopic = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return <NotFound />;

  const posts = allPosts.filter((p) => topic.categories.includes(p.category));
  const url = `https://capitalcleancare.com/blog/topic/${topic.slug}`;

  const { seoHelmet } = useSEO({
    title: topic.seoTitle,
    description: topic.seoDescription,
    canonical: url,
  });

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: topic.label, href: `/blog/topic/${topic.slug}` },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: topic.label },
            ]}
            className="mb-6"
          />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span aria-hidden="true">{topic.emoji}</span> {topic.h1}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl leading-relaxed">{topic.intro}</p>

          <BlogTopicNav active={topic.slug} />

          <p className="text-sm font-medium text-muted-foreground mb-6">
            {posts.length} {posts.length === 1 ? "guide" : "guides"}
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <TrustBadges compact withBackground={false} />
    </Layout>
  );
};

export default BlogTopic;
