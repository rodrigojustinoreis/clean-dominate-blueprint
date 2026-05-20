import { useState, useEffect } from "react";
import { Phone, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const quoteEl = document.getElementById("quote");
      const pastHero = window.scrollY > 500;
      const atQuote = quoteEl
        ? quoteEl.getBoundingClientRect().top < window.innerHeight * 0.75
        : false;
      setVisible(pastHero && !atQuote);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/97 backdrop-blur border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.12)] px-3 py-3 flex items-center gap-2 animate-fade-up">
      <a
        href="tel:+12407042551"
        className="flex items-center justify-center gap-1.5 h-12 px-4 rounded-full border-2 border-border font-bold text-sm text-foreground hover:bg-secondary transition-colors shrink-0"
        onClick={() => trackPhoneClick("sticky_mobile_cta")}
        aria-label="Call us"
      >
        <Phone className="h-4 w-4 text-accent" />
        Call
      </a>
      <Button variant="cta" className="flex-1 h-12 rounded-full text-sm font-bold shadow-lg shadow-accent/25" asChild>
        <a href="#quote" onClick={() => trackBookNowClick("sticky_mobile_cta")}>
          Free Quote <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
      <button
        onClick={() => setDismissed(true)}
        className="w-8 h-8 flex items-center justify-center text-muted-foreground/50 hover:text-foreground"
        aria-label="Dismiss"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default StickyMobileCTA;
