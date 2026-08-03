import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarClock, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COST_PRICE_ROWS } from "@/data/cost-cities";

/**
 * Cleaning Frequency Calculator (client-side).
 *
 * Recommends a maintenance cadence (weekly / bi-weekly / monthly, and whether to
 * start with a one-time deep clean) from six honest household signals. Every rule
 * is derived from real, published content:
 *   - /pricing "best for" mapping: monthly = smaller/light homes · bi-weekly = the
 *     popular steady-upkeep default · weekly = busy homes, pets, and kids.
 *   - /resources/how-often-should-you-deep-clean: pets/kids -> deep clean every
 *     3-4 months, allergies -> every 2-3 months, otherwise 1-2x a year.
 * Price ranges come verbatim from COST_PRICE_ROWS (cost-cities.ts); the per-visit
 * modifiers (weekly saves up to ~25%, monthly ~5% more than bi-weekly) are the real
 * ones shown on /pricing. Nothing here is invented.
 *
 * SSR renders the default selections and their resulting recommendation as real
 * HTML; only the recompute-on-change is client-side.
 */

type Pets = "none" | "one" | "multiple";
type Cooking = "rarely" | "sometimes" | "daily";
type Cadence = "weekly" | "bi-weekly" | "monthly";

interface Inputs {
  size: number; // index into COST_PRICE_ROWS
  pets: Pets;
  kids: boolean;
  allergies: boolean;
  cooking: Cooking;
  homeOffice: boolean;
}

interface Result {
  cadence: Cadence;
  why: string;
  deepFirst: boolean;
  deepCadence: string;
  recurringRange: string;
  deepRange: string;
  priceNote: string;
}

const CADENCE_LABEL: Record<Cadence, string> = {
  weekly: "Weekly cleaning",
  "bi-weekly": "Bi-weekly cleaning",
  monthly: "Monthly cleaning",
};

const PRICE_NOTE: Record<Cadence, string> = {
  weekly: "Weekly is the lowest per-visit recurring rate — up to ~25% less per visit than a one-time clean.",
  "bi-weekly": "Bi-weekly is our most popular plan — the baseline recurring rate.",
  monthly: "Monthly runs about 5% more per visit than bi-weekly (a little more buildup between visits).",
};

function recommend(i: Inputs): Result {
  const petsScore = i.pets === "multiple" ? 2 : i.pets === "one" ? 1 : 0;
  const load = petsScore + (i.kids ? 1 : 0) + (i.allergies ? 1 : 0) + (i.cooking === "daily" ? 1 : 0) + (i.homeOffice ? 1 : 0);

  let cadence: Cadence;
  if (load >= 3) cadence = "weekly";
  else if (load >= 1) cadence = "bi-weekly";
  else cadence = i.size <= 1 ? "monthly" : "bi-weekly";

  // Drivers for the plain-language justification.
  const drivers: string[] = [];
  if (petsScore === 2) drivers.push("multiple shedding pets");
  else if (petsScore === 1) drivers.push("a shedding pet");
  if (i.kids) drivers.push("young children at home");
  if (i.allergies) drivers.push("allergies or asthma in the family");
  if (i.cooking === "daily") drivers.push("daily cooking");
  if (i.homeOffice) drivers.push("someone home most days");

  const list =
    drivers.length === 0
      ? ""
      : drivers.length === 1
      ? drivers[0]
      : drivers.slice(0, -1).join(", ") + " and " + drivers[drivers.length - 1];

  let why: string;
  if (cadence === "weekly") {
    why = `With ${list}, hair, dust, and everyday grime build up fast — weekly visits keep a high-use home ahead of it.`;
  } else if (cadence === "bi-weekly" && load >= 1) {
    why = `With ${list}, a bi-weekly rhythm keeps the home consistently clean without over-cleaning — the plan most DMV households land on.`;
  } else if (cadence === "bi-weekly") {
    why = "No pets, kids, or allergies — but a larger home still has more square footage to keep up with, so bi-weekly is the steady, cost-effective middle ground.";
  } else {
    why = "A smaller, low-traffic home with no pets, kids, or allergies stays fresh with a lighter monthly maintenance clean.";
  }

  const deepFirst = i.allergies || petsScore >= 1 || i.kids;
  const deepCadence = i.allergies
    ? "every 2–3 months"
    : petsScore >= 1 || i.kids
    ? "every 3–4 months"
    : "once or twice a year (spring and fall)";

  const row = COST_PRICE_ROWS[i.size];
  return {
    cadence,
    why,
    deepFirst,
    deepCadence,
    recurringRange: row[2],
    deepRange: row[4],
    priceNote: PRICE_NOTE[cadence],
  };
}

const SIZE_OPTIONS = COST_PRICE_ROWS.map((r, idx) => ({ value: String(idx), label: r[0] }));

function OptionGroup<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string;
  name: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="font-heading font-semibold text-foreground text-sm mb-2">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <label
              key={o.value}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium cursor-pointer transition-colors min-h-[44px] ${
                active
                  ? "bg-accent border-accent text-white"
                  : "bg-white border-border text-foreground hover:border-accent"
              }`}
            >
              <input type="radio" name={name} value={o.value} checked={active} onChange={() => onChange(o.value)} className="sr-only" />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

const CleaningFrequencyCalculator = () => {
  const [inputs, setInputs] = useState<Inputs>({
    size: 2,
    pets: "none",
    kids: false,
    allergies: false,
    cooking: "sometimes",
    homeOffice: false,
  });

  const set = <K extends keyof Inputs>(k: K, v: Inputs[K]) => setInputs((prev) => ({ ...prev, [k]: v }));
  const result = recommend(inputs);
  const sizeLabel = COST_PRICE_ROWS[inputs.size][0];

  return (
    <div className="grid lg:grid-cols-5 gap-6 items-start">
      {/* Inputs */}
      <div className="lg:col-span-3 rounded-2xl border border-border bg-white p-5 md:p-6 space-y-5">
        <OptionGroup
          legend="How big is your home?"
          name="size"
          value={String(inputs.size)}
          options={SIZE_OPTIONS}
          onChange={(v) => set("size", Number(v))}
        />
        <OptionGroup
          legend="Any pets that shed?"
          name="pets"
          value={inputs.pets}
          options={[
            { value: "none", label: "No pets" },
            { value: "one", label: "1 pet" },
            { value: "multiple", label: "2+ pets" },
          ]}
          onChange={(v) => set("pets", v)}
        />
        <OptionGroup
          legend="Young children at home?"
          name="kids"
          value={inputs.kids ? "yes" : "no"}
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ]}
          onChange={(v) => set("kids", v === "yes")}
        />
        <OptionGroup
          legend="Allergies or asthma in the family?"
          name="allergies"
          value={inputs.allergies ? "yes" : "no"}
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ]}
          onChange={(v) => set("allergies", v === "yes")}
        />
        <OptionGroup
          legend="How often do you cook at home?"
          name="cooking"
          value={inputs.cooking}
          options={[
            { value: "rarely", label: "Rarely" },
            { value: "sometimes", label: "Sometimes" },
            { value: "daily", label: "Daily" },
          ]}
          onChange={(v) => set("cooking", v)}
        />
        <OptionGroup
          legend="Is someone home most days (home office)?"
          name="homeOffice"
          value={inputs.homeOffice ? "yes" : "no"}
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ]}
          onChange={(v) => set("homeOffice", v === "yes")}
        />
      </div>

      {/* Result */}
      <div className="lg:col-span-2 lg:sticky lg:top-24">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Our recommendation</p>
          <p className="font-heading text-2xl font-extrabold text-foreground flex items-center gap-2 mb-2">
            <CalendarClock className="h-6 w-6 text-accent shrink-0" aria-hidden="true" />
            {CADENCE_LABEL[result.cadence]}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{result.why}</p>

          {result.deepFirst && (
            <div className="rounded-xl border border-border bg-white p-4 mb-4">
              <p className="text-sm font-semibold text-foreground flex items-center gap-1.5 mb-1">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" /> Start with a one-time deep clean
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reset the baseline first, then your recurring visits stay quick and effective. Plan a full deep clean{" "}
                <strong>{result.deepCadence}</strong> after that.
              </p>
            </div>
          )}

          <div className="rounded-xl bg-white border border-border p-4 mb-4">
            <p className="text-xs text-muted-foreground mb-1">
              Typical range for a <strong className="text-foreground">{sizeLabel}</strong> home
            </p>
            <p className="font-heading text-lg font-bold text-foreground">
              {result.recurringRange} <span className="text-sm font-medium text-muted-foreground">/ recurring visit</span>
            </p>
            {result.deepFirst && (
              <p className="text-sm text-muted-foreground mt-1">
                One-time deep clean to start: <strong className="text-foreground">{result.deepRange}</strong>
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{result.priceNote}</p>
          </div>

          <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-semibold">
            <a href="/#quote">Get an exact quote <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <a
            href="tel:+12407042551"
            className="mt-2 flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <Phone className="h-4 w-4" /> Or call (240) 704-2551
          </a>
          <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
            Estimates are typical flat-rate ranges from our pricing — your exact price depends on your specific home. No obligation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CleaningFrequencyCalculator;
