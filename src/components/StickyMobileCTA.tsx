import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-sm border-t border-border/20 p-3 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
    <Button variant="cta" size="lg" className="flex-1 text-sm font-semibold" asChild>
      <Link to="/contact">
        Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </Button>
    <Button variant="secondary" size="lg" className="px-4" asChild>
      <a href="tel:+12407042551" aria-label="Call Capital Clean Care">
        <Phone className="h-5 w-5" />
      </a>
    </Button>
  </div>
);

export default StickyMobileCTA;
