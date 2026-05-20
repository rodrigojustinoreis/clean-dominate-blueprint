import { Leaf, Shield, CheckCircle, Star } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    emoji: "🌿",
    photo: "/images/team/eco-friendly-products.png",
    photoAlt: "EPA Safer Choice certified non-toxic eco-friendly cleaning products",
    title: "100% Non-Toxic. EPA Certified.",
    desc: "Every product we use carries EPA Safer Choice™ certification — plant-based, biodegradable, free from bleach, ammonia, and synthetic fragrances. Safe for babies, toddlers, pets, and allergy sufferers from day one.",
    badge: "EPA Safer Choice™",
    iconBg: "bg-emerald-500",
    pillBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
  },
  {
    icon: Shield,
    emoji: "🛡️",
    photo: "/images/team/two-team-members.jpg",
    photoAlt: "Two Capital Clean Care background-checked professional cleaners",
    title: "Background-Checked. Fully Insured.",
    desc: "Every cleaner is thoroughly vetted before entering your home — full background screening, professional training, and complete liability insurance. Your property and family are always protected.",
    badge: "Licensed & Bonded",
    iconBg: "bg-blue-500",
    pillBg: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    icon: CheckCircle,
    emoji: "✅",
    photo: "/images/team/team-polishing-fridge.jpg",
    photoAlt: "Capital Clean Care team member performing white-glove quality inspection",
    title: "24-Hour Satisfaction Guarantee.",
    desc: "If anything isn't exactly right, call us within 24 hours and we return to re-clean — completely free. No excuses, no fine print. Your satisfaction is the only standard that counts.",
    badge: "Zero-Risk Guarantee",
    iconBg: "bg-amber-500",
    pillBg: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  },
  {
    icon: Star,
    emoji: "⭐",
    photo: "/images/team/team-mopping-bright-room.jpg",
    photoAlt: "Capital Clean Care team member mopping a bright client living room",
    title: "5.0 Stars. 500+ DMV Families.",
    desc: "From Bethesda to Arlington to Capitol Hill — 500+ families trust us with their homes. Our 5.0 Google rating isn't a marketing claim. It's earned visit by visit, family by family.",
    badge: "5.0 ★ Google",
    iconBg: "bg-violet-500",
    pillBg: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
  },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-gradient-to-b from-[#F0FBF5] to-background dark:from-[#0d1f0d] dark:to-background">
    <div className="container mx-auto px-4 max-w-5xl">

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          🏠 Your Home
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 leading-tight">
          Your Home. Non-Toxic.{" "}
          <span className="text-gradient">Guaranteed.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Four promises we make — and keep — on every single visit, in every home we clean.
        </p>
      </div>

      {/* Alternating pillars */}
      <div className="space-y-6 md:space-y-8">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-stretch bg-card rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group`}
          >
            {/* Photo */}
            <div className="w-full md:w-2/5 h-52 md:h-auto flex-shrink-0 overflow-hidden">
              <img
                src={p.photo}
                alt={p.photoAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center gap-4">
              {/* Icon + badge row */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className={`w-12 h-12 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-lg shrink-0`}>
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${p.pillBg}`}>
                  {p.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight">
                <span className="mr-2">{p.emoji}</span>{p.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom icon strip */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { emoji: "🧪", label: "No Bleach or Ammonia" },
          { emoji: "🐾", label: "Pet & Baby Safe" },
          { emoji: "🌎", label: "Eco-Certified Products" },
          { emoji: "🔒", label: "Licensed & Insured" },
        ].map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2 bg-accent/5 border border-accent/15 rounded-xl px-4 py-3"
          >
            <span className="text-xl shrink-0">{t.emoji}</span>
            <span className="text-xs font-semibold text-foreground leading-tight">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
