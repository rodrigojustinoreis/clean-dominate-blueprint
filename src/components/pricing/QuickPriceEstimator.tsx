import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, Phone, Plus } from "lucide-react";
import { PRICE_SERVICES, PRICE_ADDONS } from "@/components/PricingTable";
import { trackBookNowClick, trackPhoneClick } from "@/lib/analytics";

/**
 * Instant estimator for /pricing (owner request, 30/09/2026): shows a price the moment the page
 * loads, from the SAME ranges as the price table (PRICE_SERVICES / PRICE_ADDONS), so the estimate
 * can never disagree with the table. No lead is submitted here; the CTA goes to the page's #quote form.
 */

const money = (n: number) => `$${n.toLocaleString("en-US")}`;
const nums = (s: string) => (s.match(/\d[\d,]*/g) || []).map((x) => Number(x.replace(/,/g, "")));

const SHORT_SERVICE: Record<string, string> = {
  recurring: "Recurring",
  standard: "One-time",
  deep: "Deep",
  move: "Move in/out",
  "post-construction": "Post-construction",
};

const QuickPriceEstimator = ({ quoteHref = "#quote" }: { quoteHref?: string }) => {
  const [serviceId, setServiceId] = useState("recurring");
  const [rowIdx, setRowIdx] = useState(3); // 3 bed · 2 bath (or 2,000–2,500 sq ft)
  const [picked, setPicked] = useState<string[]>([]);

  const service = PRICE_SERVICES.find((s) => s.id === serviceId) ?? PRICE_SERVICES[0];
  const row = service.rows[Math.min(rowIdx, service.rows.length - 1)];

  const result = useMemo(() => {
    const addonTotal = PRICE_ADDONS.filter((a) => picked.includes(a.label)).reduce((sum, a) => sum + (nums(a.price)[0] ?? 0), 0);
    const n = nums(row.price);
    if (n.length === 0) return { kind: "custom" as const, addonTotal };
    if (n.length === 1) return { kind: "from" as const, low: n[0] + addonTotal, addonTotal };
    return { kind: "range" as const, low: n[0] + addonTotal, high: n[1] + addonTotal, addonTotal };
  }, [row.price, picked]);

  const toggle = (label: string) => setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));

  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-primary/10 ring-1 ring-black/5 md:p-7">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent"><Calculator className="h-5 w-5" aria-hidden="true" /></span>
        <p className="font-heading text-lg font-bold text-foreground">Instant price estimate</p>
      </div>

      {/* 1. Service */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">1. Type of clean</p>
      <div className="mb-4 flex flex-wrap gap-2" role="radiogroup" aria-label="Type of clean">
        {PRICE_SERVICES.map((s) => {
          const on = s.id === serviceId;
          return (
            <button key={s.id} type="button" role="radio" aria-checked={on} onClick={() => setServiceId(s.id)}
              className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-all ${on ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-background text-foreground hover:border-primary/40"}`}>
              {SHORT_SERVICE[s.id] ?? s.label}
            </button>
          );
        })}
      </div>

      {/* 2. Home size */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">2. Your home</p>
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Home size">
        {service.rows.map((r, i) => {
          const on = i === Math.min(rowIdx, service.rows.length - 1);
          return (
            <button key={r.config} type="button" role="radio" aria-checked={on} onClick={() => setRowIdx(i)}
              className={`rounded-xl border px-3 py-2 text-left transition-all ${on ? "border-accent bg-accent/10 ring-1 ring-accent" : "border-border bg-background hover:border-accent/40"}`}>
              <span className="block text-sm font-semibold leading-tight text-foreground">{r.config}</span>
              <span className="block text-[11px] leading-tight text-muted-foreground">{r.sqft}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Add-ons */}
      <details className="group mb-5">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Plus className="h-3.5 w-3.5 transition-transform group-open:rotate-45" aria-hidden="true" /> 3. Add-ons (optional){picked.length > 0 ? ` · ${picked.length} selected` : ""}
        </summary>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {PRICE_ADDONS.map((a) => {
            const on = picked.includes(a.label);
            return (
              <button key={a.label} type="button" aria-pressed={on} onClick={() => toggle(a.label)}
                className={`flex items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 text-left text-xs transition-colors ${on ? "border-accent bg-accent/10 text-foreground" : "border-border bg-background text-muted-foreground hover:border-accent/40"}`}>
                <span className="flex min-w-0 items-center gap-1.5"><span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${on ? "border-accent bg-accent text-white" : "border-border"}`}>{on && <Check className="h-3 w-3" aria-hidden="true" />}</span><span className="truncate">{a.label}</span></span>
                <span className="shrink-0 font-semibold text-accent">+{a.price}</span>
              </button>
            );
          })}
        </div>
      </details>

      {/* Result */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-sky-700 p-5 text-primary-foreground" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/75">
          Estimated {serviceId === "recurring" ? "price per visit (bi-weekly)" : "price"}
        </p>
        <p className="mt-1 font-heading text-4xl font-bold tracking-tight md:text-5xl">
          {result.kind === "range" && <>{money(result.low)} <span className="text-2xl md:text-3xl font-semibold text-primary-foreground/70">–</span> {money(result.high)}</>}
          {result.kind === "from" && <>From {money(result.low)}</>}
          {result.kind === "custom" && <>Custom quote</>}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-primary-foreground/80">
          {service.note}
          {result.addonTotal > 0 && ` Includes ${money(result.addonTotal)} in add-ons.`}
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a href={quoteHref} onClick={() => trackBookNowClick("pricing_estimator")}
            className="inline-flex h-12 items-center sm:flex-1 justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-primary shadow-md transition-transform hover:-translate-y-0.5">
            Get my exact price <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="tel:+12407042551" onClick={() => trackPhoneClick("pricing_estimator")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-sm font-semibold text-white hover:bg-white/10">
            <Phone className="h-4 w-4" aria-hidden="true" /> (240) 704-2551
          </a>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">Typical 2026 DMV ranges. Flat price, products and equipment included.</p>
    </div>
  );
};

export default QuickPriceEstimator;
