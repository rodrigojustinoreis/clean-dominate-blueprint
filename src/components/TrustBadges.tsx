import { Shield, Search, Leaf, CheckCircle, Star, Home } from "lucide-react";

interface TrustBadgesProps {
  /** Compact mode: 3-col grid, no section heading, less padding — for embedding near CTAs */
  compact?: boolean;
  /** Show a muted background section wrapper */
  withBackground?: boolean;
}

// Copy revised 2026-09-10 (trust batch 2): descriptions describe what the client can ask for or read,
// without universal safety, coverage, timing or customer-count claims. Titles, icons, order and
// layout are unchanged; only the product card title changed (no certification claim).
const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Ask us about business and insurance documentation before booking.",
  },
  {
    icon: Search,
    title: "Background-Checked Teams",
    description: "Ask us about the screening process for the team assigned to your home.",
  },
  {
    icon: Leaf,
    title: "Products Chosen for Your Home",
    description: "We follow product labels and surface guidance. Tell us about pets, allergies or fragrance sensitivities before your visit.",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description: "Something missed? Contact us about our re-clean guarantee.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Read customer feedback on our official review profiles.",
  },
  {
    icon: Home,
    title: "Serving the DMV Since 2015",
    description: "Residential cleaning across Maryland, Washington DC and Northern Virginia.",
  },
];

const TrustBadges = ({ compact = false, withBackground = true }: TrustBadgesProps) => {
  const inner = (
    <div className="container mx-auto px-4">
      {!compact && (
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
            <Shield className="h-4 w-4" /> Why Clients Trust Us
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
            Your Home Deserves a Team You Can Trust
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm md:text-base">
            Learn about our team, product choices and re-clean guarantee before you book.
          </p>
        </div>
      )}
      <div className={`grid gap-4 ${compact ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="flex items-start gap-3 bg-white rounded-xl border border-border p-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-200"
          >
            <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              <badge.icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground leading-tight">{badge.title}</p>
              {!compact && (
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{badge.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!withBackground) return <div className={compact ? "py-6" : "py-12"}>{inner}</div>;

  return (
    <section className={`${compact ? "py-8" : "py-14 md:py-20"} bg-secondary/50`}>
      {inner}
    </section>
  );
};

export default TrustBadges;
