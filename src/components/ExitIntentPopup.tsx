import { useState, useEffect, useCallback } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const EXIT_INTENT_KEY = "ccc_exit_popup_dismissed";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem(EXIT_INTENT_KEY)) {
      setShow(true);
      sessionStorage.setItem(EXIT_INTENT_KEY, "1");
    }
  }, []);

  useEffect(() => {
    // Only show on desktop — mobile doesn't have reliable exit intent
    if (window.innerWidth < 768) return;
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    try {
      await supabase.from("quote_requests").insert({
        name,
        phone,
        service: "deep",
        message: "Exit intent popup — $25 discount claimed",
      });
      await fetch("https://formsubmit.co/ajax/capitalcleancare@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Exit Intent Lead: ${name}`,
          Name: name,
          Phone: phone,
          Source: "Exit Intent Popup — $25 Discount",
        }),
      });
      toast.success("Got it! We'll call you shortly with your $25 discount.");
      setShow(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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

        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-7 w-7 text-accent" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-2">
            Wait — Don't Leave Without Your $25 Discount!
          </h2>
          <p className="text-muted-foreground text-sm">
            Get <span className="text-accent font-bold text-lg">$25 OFF</span> your first deep
            cleaning in Montgomery County. Enter your info and we'll call you back.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button variant="cta" size="lg" className="w-full" type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Claim My $25 Discount"}
          </Button>
        </form>

        <button
          onClick={() => setShow(false)}
          className="block w-full text-center mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks, I'll pay full price
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
