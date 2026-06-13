import { Link, useLocation } from "react-router-dom";
import { ROUTE_MAP_EN_TO_ES, ROUTE_MAP_ES_TO_EN } from "@/data/route-map";

// Variants:
//  - default     → "🇺🇸 EN | 🇪🇸 ES"  (flag + label): desktop header & mobile menu
//  - flagsOnly   → "🇺🇸 | 🇪🇸"        (flag emoji only, no text): mobile top bar, where
//                  space is tight — keeps the flags visible without crowding the hamburger.
//  - compact     → "EN | ES"          (text only, no flag): kept for back-compat.
export default function LanguageSwitcher({
  compact = false,
  flagsOnly = false,
}: { compact?: boolean; flagsOnly?: boolean }) {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es/") || pathname === "/es";

  const alternateUrl = isSpanish ? ROUTE_MAP_ES_TO_EN[pathname] : ROUTE_MAP_EN_TO_ES[pathname];
  const fallbackUrl = isSpanish ? "/" : "/es/";
  const targetUrl = alternateUrl || fallbackUrl;
  const pad = compact || flagsOnly ? "px-1" : "px-2";

  const enLabel = flagsOnly ? "🇺🇸" : compact ? "EN" : "🇺🇸 EN";
  const esLabel = flagsOnly ? "🇪🇸" : compact ? "ES" : "🇪🇸 ES";

  return (
    <div
      className={`flex items-center gap-0.5 whitespace-nowrap ${flagsOnly ? "text-base" : "text-sm"}`}
      aria-label="Language selector"
    >
      <Link
        to={isSpanish ? targetUrl : pathname}
        className={`${pad} py-1 rounded transition-colors whitespace-nowrap ${
          !isSpanish ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        hrefLang="en"
        aria-label="English"
        title="English"
        aria-current={!isSpanish ? "page" : undefined}
      >
        {enLabel}
      </Link>
      <span className="text-border" aria-hidden="true">|</span>
      <Link
        to={isSpanish ? pathname : targetUrl}
        className={`${pad} py-1 rounded transition-colors whitespace-nowrap ${
          isSpanish ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        hrefLang="es"
        aria-label="Español"
        title="Español"
        aria-current={isSpanish ? "page" : undefined}
      >
        {esLabel}
      </Link>
    </div>
  );
}
