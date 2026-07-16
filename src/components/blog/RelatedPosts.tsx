import AuthorBio from "@/components/blog/AuthorBio";
import TransformationsGallery from "@/components/TransformationsGallery";
import { GuideCards, LinkList } from "@/components/RelatedContent";
import { guidesForPost, servicesForPost } from "@/data/related-content";

interface RelatedPostsProps {
  currentSlug: string;
}

// Post tail: author bio + video proof, then the automatic internal-linking blocks —
// "Related Guides" (same Resource Center category, supplemented by hand-curated relations)
// and "Related Services" (the service / city×service pages the post's topic maps to). All
// targets are indexable and never the current page (enforced in @/data/related-content).
const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const guides = guidesForPost(currentSlug, 6);
  const services = servicesForPost(currentSlug, 4);

  return (
    <>
      <AuthorBio />
      <TransformationsGallery
        heading="See the Results: Real Before & After Videos"
        subtext="Every clip is unedited footage from our own DMV team, using the same eco-friendly products we bring to every home. This is the standard behind everything we write."
      />
      <GuideCards heading="Related Guides" guides={guides} />
      {services.length > 0 && (
        <section className="mt-12 pt-10 border-t border-border">
          <LinkList heading="Related Services" links={services} />
        </section>
      )}
    </>
  );
};

export default RelatedPosts;
