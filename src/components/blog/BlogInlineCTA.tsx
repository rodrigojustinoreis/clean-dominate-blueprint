import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogInlineCTAProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const BlogInlineCTA = ({
  headline = "Ready for a Professionally Clean Home?",
  subtext = "Capital Clean Care serves Maryland, DC & Northern Virginia with eco-friendly, background-checked cleaning teams. New clients get 15% OFF their first visit.",
  ctaLabel = "Get My Free Quote →",
  ctaTo = "/contact",
}: BlogInlineCTAProps) => (
  <div className="my-10 rounded-2xl bg-gradient-to-br from-[#F1F8F1] to-white border border-accent/20 p-6 md:p-8 not-prose">
    <div className="flex flex-col md:flex-row md:items-center gap-6">
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Capital Clean Care</p>
        <h3 className="font-heading text-xl font-bold text-foreground mb-2 leading-tight">
          {headline}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{subtext}</p>
      </div>
      <div className="flex flex-col gap-2 shrink-0">
        <Button variant="cta" size="sm" asChild>
          <Link to={ctaTo}>
            {ctaLabel} <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
        <a
          href="tel:+12407042551"
          className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          <Phone className="h-3 w-3" /> (240) 704-2551
        </a>
      </div>
    </div>
  </div>
);

export default BlogInlineCTA;
