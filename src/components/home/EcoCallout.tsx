import { Link } from "react-router-dom";
import { ArrowRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const NEVER_USE = [
  "Chlorine bleach & ammonia",
  "Artificial fragrances (phthalates)",
  "Formaldehyde-releasing agents",
  "Triclosan (antibacterial)",
  "Sodium Lauryl Sulfate (SLS)",
  "Volatile Organic Compounds (VOCs)",
];

const WE_USE = [
  "EPA Safer Choice certified solutions",
  "Plant-based degreasers & surfactants",
  "Hydrogen peroxide sanitizers",
  "Essential-oil based fresheners",
  "Microfiber technology (no chemical residue)",
  "HEPA-filtered vacuums",
];

const EcoCallout = () => (
  <section className="relative py-20 md:py-28 bg-[#1A2E1A] text-white overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-400 filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-emerald-300 filter blur-3xl" />
    </div>

    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-white/10 text-green-300 font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
          🌿 Our Eco Commitment
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Your Home. No Toxic Chemicals. <span className="text-green-400">Ever.</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
          Most cleaning companies use the same harsh chemicals found in industrial facilities.
          We made a different choice — and your family's health is better for it.
        </p>
      </div>

      {/* Two-column comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
        {/* What we NEVER use */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
              <X className="h-4 w-4 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">What We NEVER Use</h3>
          </div>
          <ul className="space-y-3">
            {NEVER_USE.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                <X className="h-3.5 w-3.5 text-red-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What we DO use */}
        <div className="bg-green-900/40 border border-green-700/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <Check className="h-4 w-4 text-green-400" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">What We Use Instead</h3>
          </div>
          <ul className="space-y-3">
            {WE_USE.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                <Check className="h-3.5 w-3.5 text-green-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Eco stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
        {[
          { value: "0", label: "Toxic chemicals used" },
          { value: "EPA", label: "Safer Choice certified" },
          { value: "100%", label: "Safe for kids & pets" },
          { value: "9+", label: "Years chemical-free" },
        ].map((stat) => (
          <div key={stat.label} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="font-heading font-bold text-2xl md:text-3xl text-green-400">{stat.value}</p>
            <p className="text-xs text-white/60 mt-1 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-400 text-white rounded-full font-semibold shadow-lg shadow-green-900/40"
        >
          <Link to="/why-eco-friendly-cleaning">
            Why Eco-Friendly Matters <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <p className="text-white/50 text-xs mt-3">
          Learn about the 6 common household chemicals we've eliminated — and what we use instead.
        </p>
      </div>
    </div>
  </section>
);

export default EcoCallout;
