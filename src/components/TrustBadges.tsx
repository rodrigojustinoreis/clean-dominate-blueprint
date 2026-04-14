import { Shield, Search, Leaf, CheckCircle, Star, Home } from "lucide-react";

interface TrustBadgesProps {
  /** Compact mode: 3-col grid, no section heading, less padding — for embedding near CTAs */
  compact?: boolean;
  /** Show a muted background section wrapper */
  withBackground?: boolean;
}

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full business license + general liability insurance covers every visit in your home.",
  },
  {
    icon: Search,
    title: "Background-Checked Teams",
    description: "Every cleaner passes rigorous background screening before entering any client's home.",
  },
  {
    icon: Leaf,
    title: "EPA Safer Choice Certified",
    description: "Only plant-based, non-toxic products — safe for children, pets, and allergy sufferers.",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description: "Not happy? We return within 24 hours to re-clean at no charge — no questions asked.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars on Google and Facebook by real DMV-area families.",
  },
  {
    icon: Home,
    title: "9+ Years Serving the DMV",
    description: "Trusted by hundreds of homeowners across Maryland, DC, and Northern Virginia.",
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
            Every guarantee, certification, and standard that makes Capital Clean Care the DMV's most trusted eco-friendly cleaning service.
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
