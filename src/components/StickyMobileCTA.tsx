import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary border-t border-border p-3 flex gap-2">
    <Button variant="cta" size="lg" className="flex-1" asChild>
      <Link to="/contact">Get a Free Quote</Link>
    </Button>
    <Button variant="secondary" size="lg" asChild>
      <a href="tel:+12407042551" aria-label="Call us">
        <Phone className="h-5 w-5" />
      </a>
    </Button>
  </div>
);

export default StickyMobileCTA;
