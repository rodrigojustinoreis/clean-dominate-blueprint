import { useState, useEffect } from "react";
import { X, Gift, Clock } from "lucide-react";

const MESSAGES = [
  { text: <><strong>15% OFF</strong> your first cleaning — limited spots this week</>, cta: "Claim Now →" },
  { text: <>New clients save <strong>15%</strong> — eco-friendly, background-checked team</>, cta: "Book Today →" },
  { text: <>Same-day availability in DMV — <strong>15% OFF</strong> your first clean</>, cta: "Get Quote →" },
];

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("announcementDismissed") !== "1";
  });
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem("announcementDismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  const msg = MESSAGES[msgIndex];

  return (
    <div className="bg-accent text-accent-foreground text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
      <Gift className="h-4 w-4 shrink-0" />
      <span className="font-medium transition-all duration-500">
        {msg.text} —{" "}
        <a href="/#quote" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          {msg.cta}
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-accent-foreground/10 transition-colors"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
