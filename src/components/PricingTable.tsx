import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Info, CheckCircle2, Plus } from "lucide-react";

const services = [
  {
    id: "recurring",
    label: "Recurring",
    sublabel: "Weekly · Bi-weekly · Monthly",
    color: "bg-emerald-50 border-emerald-200",
    badge: "Most Popular",
    badgeColor: "bg-emerald-600 text-white",
    description: "Ongoing maintenance cleaning. Price shown is per visit at bi-weekly frequency.",
    note: "Bi-weekly pricing shown. Weekly saves 25% · Monthly adds 5%.",
    rows: [
      { config: "Studio / 1 Bed · 1 Bath", sqft: "up to 900 sq ft",   price: "$140 – $165" },
      { config: "2 Bed · 1 Bath",           sqft: "900 – 1,300 sq ft", price: "$160 – $190" },
      { config: "2 Bed · 2 Bath",           sqft: "1,300 – 1,700 sq ft", price: "$180 – $215" },
      { config: "3 Bed · 2 Bath",           sqft: "1,700 – 2,200 sq ft", price: "$215 – $260" },
      { config: "4 Bed · 2–3 Bath",         sqft: "2,200 – 3,000 sq ft", price: "$265 – $325" },
      { config: "5+ Bed · 3+ Bath",         sqft: "3,000+ sq ft",       price: "From $350" },
    ],
  },
  {
    id: "standard",
    label: "One-Time",
    sublabel: "Standard clean",
    color: "bg-blue-50 border-blue-200",
    badge: null,
    badgeColor: "",
    description: "Single visit standard cleaning. No commitment required.",
    note: "Includes all main areas, kitchen, bathrooms, vacuuming and mopping.",
    rows: [
      { config: "Studio / 1 Bed · 1 Bath", sqft: "up to 900 sq ft",      price: "$160 – $195" },
      { config: "2 Bed · 1 Bath",           sqft: "900 – 1,300 sq ft",    price: "$190 – $225" },
      { config: "2 Bed · 2 Bath",           sqft: "1,300 – 1,700 sq ft",  price: "$215 – $255" },
      { config: "3 Bed · 2 Bath",           sqft: "1,700 – 2,200 sq ft",  price: "$255 – $310" },
      { config: "4 Bed · 2–3 Bath",         sqft: "2,200 – 3,000 sq ft",  price: "$315 – $385" },
      { config: "5+ Bed · 3+ Bath",         sqft: "3,000+ sq ft",         price: "From $400" },
    ],
  },
  {
    id: "deep",
    label: "Deep Clean",
    sublabel: "Top-to-bottom",
    color: "bg-violet-50 border-violet-200",
    badge: "Best Value",
    badgeColor: "bg-violet-600 text-white",
    description: "Detailed, top-to-bottom clean of every surface, corner, and fixture.",
    note: "Includes baseboards, blinds, ceiling fans, grout scrubbing and interior appliances.",
    rows: [
      { config: "Studio / 1 Bed · 1 Bath", sqft: "up to 900 sq ft",      price: "$230 – $285" },
      { config: "2 Bed · 1 Bath",           sqft: "900 – 1,300 sq ft",    price: "$275 – $330" },
      { config: "2 Bed · 2 Bath",           sqft: "1,300 – 1,700 sq ft",  price: "$310 – $375" },
      { config: "3 Bed · 2 Bath",           sqft: "1,700 – 2,200 sq ft",  price: "$375 – $445" },
      { config: "4 Bed · 2–3 Bath",         sqft: "2,200 – 3,000 sq ft",  price: "$450 – $540" },
      { config: "5+ Bed · 3+ Bath",         sqft: "3,000+ sq ft",         price: "From $570" },
    ],
  },
  {
    id: "move",
    label: "Move In/Out",
    sublabel: "Lease-end ready",
    color: "bg-amber-50 border-amber-200",
    badge: null,
    badgeColor: "",
    description: "Complete cleaning for move-out or move-in. Security deposit approved.",
    note: "Includes inside cabinets, all appliances, closets, and garage sweep upon request.",
    rows: [
      { config: "Studio / 1 Bed · 1 Bath", sqft: "up to 900 sq ft",      price: "$260 – $320" },
      { config: "2 Bed · 1 Bath",           sqft: "900 – 1,300 sq ft",    price: "$310 – $375" },
      { config: "2 Bed · 2 Bath",           sqft: "1,300 – 1,700 sq ft",  price: "$355 – $420" },
      { config: "3 Bed · 2 Bath",           sqft: "1,700 – 2,200 sq ft",  price: "$420 – $500" },
      { config: "4 Bed · 2–3 Bath",         sqft: "2,200 – 3,000 sq ft",  price: "$505 – $600" },
      { config: "5+ Bed · 3+ Bath",         sqft: "3,000+ sq ft",         price: "From $625" },
    ],
  },
  {
    id: "post-construction",
    label: "Post-Construction",
    sublabel: "After renovation",
    color: "bg-orange-50 border-orange-200",
    badge: null,
    badgeColor: "",
    description: "Heavy-duty clean after construction, renovation or remodeling work.",
    note: "Priced by square footage. Includes dust removal, debris, paint residue and detail clean.",
    rows: [
      { config: "Up to 1,000 sq ft",    sqft: "~Studio / 1 Bed",  price: "$280 – $400" },
      { config: "1,000 – 1,500 sq ft",  sqft: "~1–2 Bed",         price: "$360 – $510" },
      { config: "1,500 – 2,000 sq ft",  sqft: "~2–3 Bed",         price: "$450 – $640" },
      { config: "2,000 – 2,500 sq ft",  sqft: "~3 Bed",           price: "$560 – $770" },
      { config: "2,500 – 3,000 sq ft",  sqft: "~4 Bed",           price: "$680 – $900" },
      { config: "3,000+ sq ft",         sqft: "~5+ Bed",          price: "Custom quote" },
    ],
  },
];

const frequencyDiscounts = [
  { label: "Weekly",     discount: "25% off",  example: "Save ~$50/visit on a 3-bed home" },
  { label: "Bi-Weekly",  discount: "15% off",  example: "Save ~$35/visit on a 3-bed home" },
  { label: "Monthly",    discount: "5% off",   example: "Save ~$12/visit on a 3-bed home" },
];

const addons = [
  { label: "Inside Refrigerator",      price: "$30" },
  { label: "Inside Oven",              price: "$35" },
  { label: "Inside Cabinets",          price: "$45" },
  { label: "Laundry (wash & fold)",    price: "$25" },
  { label: "Interior Windows",         price: "$40" },
  { label: "Garage Sweep & Mop",       price: "$35" },
  { label: "Blinds / Shutters",        price: "$25" },
  { label: "Baseboards Detail Clean",  price: "$20" },
];

const whatsIncluded = [
  "Eco-friendly, EPA Safer Choice products",
  "Background-checked & insured team",
  "All equipment & supplies included",
  "Satisfaction guarantee — free re-clean if needed",
];

const PricingTable = () => {
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

      {/* Service tabs */}
      <Tabs value={active} onValueChange={setActive} className="w-full">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-secondary p-1 w-full">
          {services.map((s) => (
            <TabsTrigger
              key={s.id}
              value={s.id}
              className="flex-1 min-w-[120px] flex flex-col py-2.5 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <span className="font-semibold">{s.label}</span>
              <span className="opacity-70 font-normal text-[10px] leading-tight">{s.sublabel}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {services.map((s) => (
          <TabsContent key={s.id} value={s.id} className="mt-4 space-y-3">

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
          </TabsContent>
        ))}
      </Tabs>

      {/* Recurring discounts */}
      <div>
        <h4 className="font-heading text-base font-bold mb-3 flex items-center gap-2">
          Recurring Service Discounts
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {frequencyDiscounts.map((d, i) => (
            <Card key={i} className="border-accent/20 hover:border-accent/50 transition-colors">
              <CardContent className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground mb-1">{d.label}</p>
                <p className="text-2xl font-bold text-accent mb-1">{d.discount}</p>
                <p className="text-xs text-muted-foreground">{d.example}</p>
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
          {addons.map((a, i) => (
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
          <a href="/#quote">
            Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PricingTable;
