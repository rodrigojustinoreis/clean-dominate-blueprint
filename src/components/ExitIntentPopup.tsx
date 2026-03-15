import { useState, useEffect, useCallback } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXIT_INTENT_KEY = "ccc_exit_popup_dismissed";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem(EXIT_INTENT_KEY)) {
      setShow(true);
      sessionStorage.setItem(EXIT_INTENT_KEY, "1");
    }
  }, []);

  useEffect(() => {
    // Only show on desktop — mobile doesn't have reliable exit intent
    if (window.innerWidth < 768) return;
    // Delay listener to avoid triggering on initial scroll
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Special discount offer"
      onClick={() => setShow(false)}
    >
      <div
        className="bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-7 w-7 text-accent" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-2">Wait — Before You Go!</h2>
          <p className="text-muted-foreground mb-4">
            Get <span className="text-accent font-bold text-xl">$25 OFF</span> your first cleaning — automatically applied, no code needed.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Eco-friendly, background-checked teams across MD, DC & VA. Takes 60 seconds to request your free quote.
          </p>
          <div className="space-y-3">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a href="/#quote" onClick={() => setShow(false)}>
                Claim My $25 Discount →
              </a>
            </Button>
            <button
              onClick={() => setShow(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
