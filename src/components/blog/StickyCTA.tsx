import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <Link
        to="/#quote"
        className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-5 py-3 rounded-full shadow-xl transition-all hover:shadow-2xl hover:gap-3"
      >
        Get Free Quote <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default StickyCTA;
