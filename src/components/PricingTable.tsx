import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Info, CheckCircle2, Plus } from "lucide-react";

import { PRICE_SERVICES, PRICE_ADDONS } from "@/data/price-data";
// Re-exported so existing imports from this file keep working.
export { PRICE_SERVICES, PRICE_ADDONS };

const frequencyDiscounts = [
  { label: "Weekly",     discount: "25% off" },
  { label: "Bi-Weekly",  discount: "15% off" },
  { label: "Monthly",    discount: "5% off"  },
];



const whatsIncluded = [
  "Eco-friendly, EPA Safer Choice products",
  "Background-checked & insured team",
  "All equipment & supplies included",
  "Satisfaction guarantee — free re-clean if needed",
];

/** ctaHref: where "Get Your Free Quote" points. Default "/#quote" (home form); pages with their own
 *  #quote section (e.g. /pricing) pass "#quote" so the visitor stays on the page. */
const PricingTable = ({ ctaHref = "/#quote" }: { ctaHref?: string } = {}) => {
  const [active, setActive] = useState("recurring");
  return (
    <div className="space-y-8">

      {/* What's always included */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {whatsIncluded.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Service tabs. Native controls keep SSR and hydration deterministic while
          every price table remains present in the crawlable HTML. */}
      <div className="w-full">
        <div className="flex flex-wrap h-auto gap-1 rounded-md bg-secondary p-1 w-full" role="group" aria-label="Choose a cleaning service">
          {PRICE_SERVICES.map((s) => (
            <button
              type="button"
              key={s.id}
              aria-pressed={active === s.id}
              onClick={() => setActive(s.id)}
              className={`flex-1 min-w-[120px] flex flex-col items-center rounded-sm py-2.5 text-xs transition-colors ${
                active === s.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
              }`}
            >
              <span className="font-semibold">{s.label}</span>
              <span className="opacity-70 font-normal text-[10px] leading-tight">{s.sublabel}</span>
            </button>
          ))}
        </div>

        {PRICE_SERVICES.map((s) => (
          <section
            key={s.id}
            aria-label={`${s.label} cleaning prices`}
            hidden={active !== s.id}
            className="mt-4 space-y-3"
          >

            {/* Description + badge */}
            <div className={`rounded-xl border p-4 flex items-start justify-between gap-3 ${s.color}`}>
              <p className="text-sm text-foreground/80 leading-relaxed">{s.description}</p>
              {s.badge && (
                <Badge className={`shrink-0 text-xs ${s.badgeColor}`}>{s.badge}</Badge>
              )}
            </div>

            {/* Price rows */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Home Configuration</th>
                    <th className="px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Approx. Size</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {s.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-border transition-colors hover:bg-accent/5 ${
                        i % 2 === 0 ? "bg-background" : "bg-secondary/30"
                      }`}
                    >
                      <td className="px-4 py-3.5 font-medium text-foreground">{row.config}</td>
                      <td className="px-4 py-3.5 text-muted-foreground hidden sm:table-cell">{row.sqft}</td>
                      <td className="px-4 py-3.5 text-right font-bold text-accent text-base whitespace-nowrap">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground px-1">
              <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 text-accent" />
              <span>{s.note}</span>
            </div>
          </section>
        ))}
      </div>

      {/* Recurring discounts */}
      <div>
        <h4 className="font-heading text-base font-bold mb-3 flex items-center gap-2">
          Recurring Service Discounts
        </h4>
        <p className="text-sm text-muted-foreground mb-3">
          Each percentage is off our one-time (single-visit) rate for the same home — the same base the price calculator uses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {frequencyDiscounts.map((d, i) => (
            <Card key={i} className="border-accent/20 hover:border-accent/50 transition-colors">
              <CardContent className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground mb-1">{d.label}</p>
                <p className="text-2xl font-bold text-accent mb-1">{d.discount}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div>
        <h4 className="font-heading text-base font-bold mb-3 flex items-center gap-2">
          <Plus className="h-4 w-4 text-accent" /> Optional Add-Ons
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PRICE_ADDONS.map((a, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5 bg-secondary/20 hover:bg-accent/5 transition-colors"
            >
              <span className="text-sm text-foreground">{a.label}</span>
              <span className="text-sm font-bold text-accent">+{a.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing note */}
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-4 flex gap-3 items-start">
          <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Prices shown are typical ranges for the DMV area. Your exact quote depends on your home's specific layout, current condition, and any add-ons selected.{" "}
            <strong>Get your personalized quote in under 2 minutes.</strong>
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="cta" size="lg" asChild>
          <a href={ctaHref}>
            Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PricingTable;
