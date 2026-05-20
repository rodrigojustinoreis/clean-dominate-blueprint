import { Link, useLocation } from "react-router-dom";
import { ROUTE_MAP_EN_TO_ES, ROUTE_MAP_ES_TO_EN } from "@/data/route-map";

export default function LanguageSwitcher() {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es/") || pathname === "/es";

  const alternateUrl = isSpanish ? ROUTE_MAP_ES_TO_EN[pathname] : ROUTE_MAP_EN_TO_ES[pathname];
  const fallbackUrl = isSpanish ? "/" : "/es/";
  const targetUrl = alternateUrl || fallbackUrl;

  return (
    <div className="flex items-center gap-0.5 text-sm" aria-label="Language selector">
      <Link
        to={isSpanish ? targetUrl : pathname}
        className={`px-2 py-1 rounded transition-colors ${
          !isSpanish ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        hrefLang="en-us"
        aria-current={!isSpanish ? "page" : undefined}
      >
        🇺🇸 EN
      </Link>
      <span className="text-border" aria-hidden="true">|</span>
      <Link
        to={isSpanish ? pathname : targetUrl}
        className={`px-2 py-1 rounded transition-colors ${
          isSpanish ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        hrefLang="es-us"
        aria-current={isSpanish ? "page" : undefined}
      >
        🇪🇸 ES
      </Link>
    </div>
  );
}
