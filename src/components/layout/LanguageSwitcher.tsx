import { Link, useLocation } from "react-router-dom";
import { ROUTE_MAP_EN_TO_ES, ROUTE_MAP_ES_TO_EN } from "@/data/route-map";

// Text-only "EN | ES" labels (no flag emojis — US-Latino audience, Spain's flag is wrong).
// `compact` = mobile header: tighter padding so it never wraps or crowds the hamburger
// on narrow viewports.
export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es/") || pathname === "/es";

  const alternateUrl = isSpanish ? ROUTE_MAP_ES_TO_EN[pathname] : ROUTE_MAP_EN_TO_ES[pathname];
  const fallbackUrl = isSpanish ? "/" : "/es/";
  const targetUrl = alternateUrl || fallbackUrl;
  const pad = compact ? "px-1" : "px-2";

  return (
    <div className="flex items-center gap-0.5 text-sm whitespace-nowrap" aria-label="Language selector">
      <Link
        to={isSpanish ? targetUrl : pathname}
        className={`${pad} py-1 rounded transition-colors whitespace-nowrap ${
          !isSpanish ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        hrefLang="en"
        aria-current={!isSpanish ? "page" : undefined}
      >
        EN
      </Link>
      <span className="text-border" aria-hidden="true">|</span>
      <Link
        to={isSpanish ? pathname : targetUrl}
        className={`${pad} py-1 rounded transition-colors whitespace-nowrap ${
          isSpanish ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        hrefLang="es"
        aria-current={isSpanish ? "page" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
