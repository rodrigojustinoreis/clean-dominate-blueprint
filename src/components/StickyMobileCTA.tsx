import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-sm border-t border-border/20 px-3 py-2 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-area-bottom">
    <Button variant="cta" size="default" className="flex-1 text-sm font-semibold" asChild>
      <a href="/#quote" onClick={() => trackBookNowClick("sticky_mobile_cta")}>
        Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </Button>
    <Button variant="secondary" size="lg" className="px-4" asChild>
      <a href="tel:+12407042551" aria-label="Call Capital Clean Care" onClick={() => trackPhoneClick("sticky_mobile_cta")}>
        <Phone className="h-5 w-5" />
      </a>
    </Button>
  </div>
);

export default StickyMobileCTA;
