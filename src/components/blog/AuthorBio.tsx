import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

/**
 * Visible author entity that matches the BlogPosting schema (Person "Rodrigo Reis").
 * Surfaces real E-E-A-T authorship on every post. Uses the brand mark as the avatar
 * (no invented headshot) until a real founder photo is added.
 */
const AuthorBio = () => (
  <div className="mt-14 flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-6">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card ring-1 ring-border shadow-sm">
      <img src={logo} alt="Rodrigo Reis, Capital Clean Care" className="h-8 w-8 object-contain" loading="lazy" />
    </div>
    <div>
      <p className="font-heading font-bold text-foreground leading-tight">Rodrigo Reis</p>
      <p className="text-sm text-accent font-medium mb-2">Founder &amp; Owner, Capital Clean Care</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Rodrigo founded Capital Clean Care in 2015 and still runs it as a family-owned, Latino-operated
        business. Over 10+ years his team has cleaned 500+ homes across Montgomery County and the wider
        DMV, and the pricing and checklists in these guides come from the real quotes and jobs they run
        every week, not national averages.{" "}
        <Link to="/about" className="text-accent font-medium hover:underline">Read our story →</Link>
      </p>
    </div>
  </div>
);

export default AuthorBio;
