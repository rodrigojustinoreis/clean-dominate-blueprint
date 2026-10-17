import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CalendarDays, Check, Clock, Home, Loader2, Lock, Phone, Plus, ShieldCheck, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Calendar } from "@/components/ui/calendar";
import { useSEO } from "@/hooks/useSEO";
import { PRICE_SERVICES, PRICE_ADDONS } from "@/data/price-data";
import {
  BOOKABLE_SERVICES,
  BOOKING_SLOTS,
  DEPOSIT_RATE,
  FREQUENCIES,
  addDays,
  formatLongDate,
  isDateOpen,
  quoteBooking,
  slotLabel,
  todayInBusinessTz,
  type UnavailableMap,
} from "@/lib/booking";

/**
 * /book — online booking (owner request 17/10/2026). The client picks the service, home size, add-ons,
 * a date and one of the arrival windows the owner offers (BOOKING_SLOTS in src/lib/booking.ts), then
 * pays a 30% deposit on Stripe. Price shown here = price charged: the server recomputes it from the same file.
 */

const SHORT: Record<string, string> = {
  recurring: "Recurring",
  standard: "One-time",
  deep: "Deep clean",
  move: "Move in/out",
  "post-construction": "Post-construction",
};

const money = (n: number) => `$${n.toLocaleString("en-US")}`;
const toYmd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromYmd = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const Step = ({ n, title, icon: Icon, children }: { n: number; title: string; icon: typeof Home; children: React.ReactNode }) => (
  <section className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
    <h2 className="mb-4 flex items-center gap-3 font-heading text-lg font-bold text-foreground md:text-xl">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">{n}</span>
      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
      {title}
    </h2>
    {children}
  </section>
);

const chip = (on: boolean) =>
  `rounded-full border px-4 py-2 text-sm font-semibold transition-all ${on ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-background text-foreground hover:border-primary/40"}`;

const BookingPage = () => {
  const { seoHelmet } = useSEO({
    title: "Book House Cleaning Online",
    description: "Pick your cleaning, see your flat price, choose a date and arrival time, and reserve it with a 30% deposit. Capital Clean Care, Montgomery County & the DMV.",
    canonical: "https://capitalcleancare.com/book",
    noIndex: true,
  });
  const [params] = useSearchParams();
  const canceled = params.get("canceled") === "1";

  const [service, setService] = useState<string>("deep");
  const [sizeIndex, setSizeIndex] = useState(3);
  const [frequency, setFrequency] = useState("biweekly");
  const [addons, setAddons] = useState<string[]>([]);
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", zip: "", notes: "", smsConsent: false, agree: false });

  const [unavailable, setUnavailable] = useState<UnavailableMap>({});
  const [availState, setAvailState] = useState<"loading" | "ok" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAvailability = () => {
    setAvailState("loading");
    fetch("/api/booking-availability")
      // 503 = backend not configured yet (e.g. a deploy preview): show the calendar from the date rules
      // alone; the pay button then returns the server's "not configured" message instead of charging.
      .then((r) => (r.ok ? r.json() : r.status === 503 ? { unavailable: {} } : Promise.reject(r)))
      .then((d) => {
        setUnavailable(d.unavailable ?? {});
        setAvailState("ok");
      })
      .catch(() => setAvailState("error"));
  };
  useEffect(loadAvailability, []);

  const svc = PRICE_SERVICES.find((s) => s.id === service)!;
  const safeSize = Math.min(sizeIndex, svc.rows.length - 1);
  const quote = useMemo(() => quoteBooking({ service, sizeIndex: safeSize, frequency, addons }), [service, safeSize, frequency, addons]);

  const slotsFor = (ymd: string) => {
    const off = unavailable[ymd] ?? [];
    if (off.includes("*")) return [];
    return BOOKING_SLOTS.filter((s) => !off.includes(s.id));
  };
  const dayDisabled = (d: Date) => {
    const ymd = toYmd(d);
    return !isDateOpen(ymd) || slotsFor(ymd).length === 0;
  };

  // A date/slot that became unavailable (fresh availability) is cleared.
  useEffect(() => {
    if (date && slotsFor(date).length === 0) setDate(null);
    if (date && slot && !slotsFor(date).some((s) => s.id === slot)) setSlot(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unavailable]);

  const today = todayInBusinessTz();
  const contactOk =
    form.name.trim() && /^\S+@\S+\.\S+$/.test(form.email) && form.phone.replace(/\D/g, "").length >= 10 && form.address.trim() && /^\d{5}$/.test(form.zip);
  const ready = quote.ok && date && slot && contactOk && form.agree && availState === "ok";

  const submit = async () => {
    if (!ready || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/create-booking-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, sizeIndex: safeSize, frequency, addons, date, slot, ...form }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) {
        window.location.assign(data.url);
        return;
      }
      setError(data.error || "Something went wrong. Please try again.");
      if (res.status === 409) {
        setSlot(null);
        loadAvailability();
      }
    } catch {
      setError("Connection problem. Please try again or call (240) 704-2551.");
    }
    setSubmitting(false);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));
  const inputCls = "h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <Layout>
      {seoHelmet}
      <section className="bg-gradient-to-b from-sky-50 via-background to-background pb-6 pt-8 md:pt-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-5xl">Book your cleaning online</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
            Choose your service, see your flat price, pick a date and arrival time, and reserve it with a {Math.round(DEPOSIT_RATE * 100)}% deposit. The rest is paid on the day.
          </p>
          {canceled && (
            <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Payment was canceled, so nothing was charged and your time was not reserved. You can try again below.
            </p>
          )}
        </div>
      </section>

      <div className="container mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <Step n={1} title="Type of cleaning" icon={Sparkles}>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Type of cleaning">
              {BOOKABLE_SERVICES.map((id) => (
                <button key={id} type="button" role="radio" aria-checked={service === id} className={chip(service === id)} onClick={() => setService(id)}>
                  {SHORT[id]}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{svc.description}</p>
            {service === "recurring" && (
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">How often?</p>
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Frequency">
                  {FREQUENCIES.map((f) => (
                    <button key={f.id} type="button" role="radio" aria-checked={frequency === f.id} className={chip(frequency === f.id)} onClick={() => setFrequency(f.id)}>
                      {f.label}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">You're booking your first visit; we confirm the recurring schedule with you after it.</p>
              </div>
            )}
          </Step>

          <Step n={2} title="Your home" icon={Home}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Home size">
              {svc.rows.map((r, i) => {
                const on = i === safeSize;
                const custom = !/\d/.test(r.price);
                return (
                  <button key={r.config} type="button" role="radio" aria-checked={on} onClick={() => setSizeIndex(i)}
                    className={`rounded-xl border px-3 py-2.5 text-left transition-all ${on ? "border-accent bg-accent/10 ring-1 ring-accent" : "border-border bg-background hover:border-accent/40"}`}>
                    <span className="block text-sm font-semibold leading-tight text-foreground">{r.config}</span>
                    <span className="block text-[11px] leading-tight text-muted-foreground">{custom ? "Custom quote" : r.sqft}</span>
                  </button>
                );
              })}
            </div>
            {!quote.ok && (
              <p className="mt-3 rounded-lg bg-secondary px-4 py-3 text-sm">
                Homes this size get a custom quote. <a href="tel:+12407042551" className="font-semibold text-accent underline">Call (240) 704-2551</a> or{" "}
                <Link to="/#quote" className="font-semibold text-accent underline">request a quote</Link>.
              </p>
            )}
          </Step>

          <Step n={3} title="Add-ons (optional)" icon={Plus}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {PRICE_ADDONS.map((a) => {
                const on = addons.includes(a.label);
                return (
                  <button key={a.label} type="button" aria-pressed={on}
                    onClick={() => setAddons((p) => (on ? p.filter((x) => x !== a.label) : [...p, a.label]))}
                    className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${on ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent/40"}`}>
                    <span className="flex items-center gap-2">
                      <span className={`flex h-5 w-5 items-center justify-center rounded border ${on ? "border-accent bg-accent text-white" : "border-border"}`}>{on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}</span>
                      {a.label}
                    </span>
                    <span className="font-semibold text-accent">+{a.price}</span>
                  </button>
                );
              })}
            </div>
          </Step>

          <Step n={4} title="Pick a date" icon={CalendarDays}>
            {availState === "error" ? (
              <p className="text-sm">
                We couldn't load the calendar.{" "}
                <button type="button" className="font-semibold text-accent underline" onClick={loadAvailability}>Try again</button> or call (240) 704-2551.
              </p>
            ) : (
              <div className="relative flex justify-center">
                {availState === "loading" && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-card/70"><Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading availability" /></div>
                )}
                <Calendar
                  mode="single"
                  selected={date ? fromYmd(date) : undefined}
                  onSelect={(d) => {
                    setDate(d ? toYmd(d) : null);
                    setSlot(null);
                  }}
                  disabled={dayDisabled}
                  fromDate={fromYmd(addDays(today, 0))}
                  toDate={fromYmd(addDays(today, 60))}
                  className="rounded-xl border border-border"
                />
              </div>
            )}
          </Step>

          <Step n={5} title="Arrival time" icon={Clock}>
            {!date ? (
              <p className="text-sm text-muted-foreground">Pick a date first to see the open arrival times.</p>
            ) : (
              <>
                <p className="mb-3 text-sm text-muted-foreground">{formatLongDate(date)}</p>
                <div className="grid grid-cols-2 gap-3">
                  {BOOKING_SLOTS.map((s) => {
                    const open = slotsFor(date).some((x) => x.id === s.id);
                    const on = slot === s.id;
                    return (
                      <button key={s.id} type="button" disabled={!open} aria-pressed={on} onClick={() => setSlot(s.id)}
                        className={`rounded-xl border px-4 py-3 text-left transition-all disabled:cursor-not-allowed disabled:opacity-40 ${on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/40"}`}>
                        <span className="block font-heading text-lg font-bold">{s.label}</span>
                        <span className={`block text-xs ${on ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{open ? s.hint : "Booked"}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">This is your team's arrival window. Cleaning length depends on the service and home size.</p>
              </>
            )}
          </Step>

          <Step n={6} title="Your details" icon={Phone}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm font-medium">Full name<input className={`${inputCls} mt-1`} value={form.name} onChange={set("name")} autoComplete="name" /></label>
              <label className="text-sm font-medium">Phone<input className={`${inputCls} mt-1`} value={form.phone} onChange={set("phone")} type="tel" autoComplete="tel" /></label>
              <label className="text-sm font-medium sm:col-span-2">E-mail<input className={`${inputCls} mt-1`} value={form.email} onChange={set("email")} type="email" autoComplete="email" /></label>
              <label className="text-sm font-medium">Street address<input className={`${inputCls} mt-1`} value={form.address} onChange={set("address")} autoComplete="street-address" /></label>
              <label className="text-sm font-medium">ZIP code<input className={`${inputCls} mt-1`} value={form.zip} onChange={set("zip")} inputMode="numeric" maxLength={5} autoComplete="postal-code" /></label>
              <label className="text-sm font-medium sm:col-span-2">Notes for the team (optional)
                <textarea className="mt-1 min-h-[80px] w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" value={form.notes} onChange={set("notes")} placeholder="Gate code, pets, parking, areas to focus on…" />
              </label>
            </div>
            <label className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="mt-1" checked={form.smsConsent} onChange={set("smsConsent")} />
              Text me reminders about this booking. Msg &amp; data rates may apply; reply STOP to opt out.
            </label>
            <label className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="mt-1" checked={form.agree} onChange={set("agree")} />
              <span>I understand the {Math.round(DEPOSIT_RATE * 100)}% deposit is non-refundable and the balance is due on the day of service. See our <Link to="/terms-of-service" className="text-accent underline">terms</Link>.</span>
            </label>
          </Step>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-sky-700 p-6 text-primary-foreground shadow-xl" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/75">Your booking</p>
            {quote.ok ? (
              <>
                <p className="mt-2 font-heading text-lg font-bold">{quote.serviceName}</p>
                <p className="text-sm text-primary-foreground/85">{[quote.frequencyLabel, quote.sizeLabel].filter(Boolean).join(" · ")}</p>
                <dl className="mt-4 space-y-1.5 text-sm">
                  <div className="flex justify-between"><dt>Cleaning</dt><dd>{money(quote.base)}</dd></div>
                  {quote.addonLines.map((a) => (
                    <div key={a.label} className="flex justify-between text-primary-foreground/85"><dt>{a.label}</dt><dd>+{money(a.price)}</dd></div>
                  ))}
                  <div className="flex justify-between border-t border-white/25 pt-2 font-semibold"><dt>Total</dt><dd>{money(quote.total)}</dd></div>
                  <div className="flex justify-between text-primary-foreground/85"><dt>Due on the day</dt><dd>{money(quote.balance)}</dd></div>
                </dl>
                <div className="mt-4 rounded-xl bg-white/10 p-3">
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/75">Deposit today ({Math.round(DEPOSIT_RATE * 100)}%)</p>
                  <p className="font-heading text-3xl font-bold">{money(quote.deposit)}</p>
                </div>
                <p className="mt-3 text-sm">
                  {date ? formatLongDate(date) : "No date yet"}
                  {slot ? ` · ${slotLabel(slot)}` : ""}
                </p>
              </>
            ) : (
              <p className="mt-2 text-sm">Custom quote needed for this home size.</p>
            )}
            {error && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>}
            <button type="button" onClick={submit} disabled={!ready || submitting}
              className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-primary shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Lock className="h-4 w-4" aria-hidden="true" />}
              {quote.ok ? `Pay ${money(quote.deposit)} deposit` : "Pay deposit"}
              {!submitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
            </button>
            {!ready && quote.ok && (
              <p className="mt-2 text-center text-xs text-primary-foreground/75">
                {!date ? "Pick a date" : !slot ? "Pick an arrival time" : !contactOk ? "Fill in your details" : !form.agree ? "Accept the deposit terms" : "Loading…"}
              </p>
            )}
            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-primary-foreground/75">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Secure payment by Stripe
            </p>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Questions? <a href="tel:+12407042551" className="font-semibold text-accent">(240) 704-2551</a>
          </p>
        </aside>
      </div>
    </Layout>
  );
};

export default BookingPage;
