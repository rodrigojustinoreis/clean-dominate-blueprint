import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DiscountBannerProps {
  city?: string;
}

const DiscountBanner = ({ city }: DiscountBannerProps) => (
  <section className="bg-accent text-accent-foreground py-4">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
      <Gift className="h-5 w-5 shrink-0" />
      <p className="font-heading font-semibold text-sm md:text-base">
        🎉 New Client Special: <strong>15% OFF</strong> your first cleaning
        {city ? ` in ${city}` : ""}!
      </p>
      <Button
        variant="secondary"
        size="sm"
        className="text-xs"
        asChild
      >
        <Link to="/contact">
          Claim Offer <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </Button>
    </div>
  </section>
);

export default DiscountBanner;
