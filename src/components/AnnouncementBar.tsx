import { useState } from "react";
import { X, Gift } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("announcementDismissed") !== "1";
  });

  const dismiss = () => {
    sessionStorage.setItem("announcementDismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-accent text-accent-foreground text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
      <Gift className="h-4 w-4 shrink-0" />
      <span className="font-medium">
        <strong>$25 OFF</strong> your first cleaning —{" "}
        <a href="/#quote" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          Claim your discount →
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
