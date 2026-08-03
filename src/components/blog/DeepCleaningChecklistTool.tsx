import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Loader2, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeepCleaningChecklistToolProps {
  /** Room-by-room checklist: [roomName, items[]] — the real GreenShield scope. */
  checklist: [string, string[]][];
  /** Optional "on request" add-ons, shown as a separate group. */
  onRequest: string[];
}

const STORAGE_KEY = "ccc-deep-cleaning-checklist-v1";

type Group = { title: string; items: string[]; optional: boolean };

/**
 * Interactive Deep Cleaning Checklist.
 *
 * SSR renders every task as real, unchecked HTML (the text is always in the
 * markup, so it's fully crawlable). Interactivity — checkboxes, progress, the
 * per-device saved state, and the PDF export — is client-only. jsPDF is loaded
 * with a dynamic import so it never touches the initial page bundle.
 */
const DeepCleaningChecklistTool = ({ checklist, onRequest }: DeepCleaningChecklistToolProps) => {
  const groups: Group[] = [
    ...checklist.map(([title, items]) => ({ title, items, optional: false })),
    ...(onRequest.length ? [{ title: "Optional add-ons (on request)", items: onRequest, optional: true }] : []),
  ];

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const idBase = useRef(0);

  // Load saved progress after mount only — keeps the first client render identical
  // to the SSR output (all unchecked), so hydration never mismatches.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore corrupt/blocked storage */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore quota/blocked storage */
    }
  }, [checked, loaded]);

  const checkedCount = groups.reduce(
    (n, g, gi) => n + g.items.reduce((m, _it, i) => m + (checked[`${gi}:${i}`] ? 1 : 0), 0),
    0
  );
  const pct = total ? Math.round((checkedCount / total) * 100) : 0;

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const reset = () => setChecked({});

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });

      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const margin = 48;
      const contentW = pageW - margin * 2;
      const bottom = pageH - 44;

      // Brand palette (from the site's design tokens), as RGB for jsPDF.
      const INK: [number, number, number] = [17, 26, 44];
      const BLUE: [number, number, number] = [23, 69, 130];
      const TEAL: [number, number, number] = [17, 164, 212];
      const GREY: [number, number, number] = [110, 120, 135];
      const TRACK: [number, number, number] = [228, 233, 239];

      let y = margin;

      const footer = () => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(...GREY);
        doc.text("Capital Clean Care  ·  capitalcleancare.com  ·  (240) 704-2551", margin, pageH - 26);
        doc.text(String(doc.internal.pages.length - 1), pageW - margin, pageH - 26, { align: "right" });
      };

      const ensureSpace = (needed: number) => {
        if (y + needed > bottom) {
          footer();
          doc.addPage();
          y = margin;
        }
      };

      const drawCheckbox = (x: number, baseline: number, on: boolean) => {
        const s = 9;
        const top = baseline - s + 0.5;
        doc.setDrawColor(...TEAL);
        doc.setLineWidth(1);
        if (on) {
          doc.setFillColor(...TEAL);
          doc.roundedRect(x, top, s, s, 1.5, 1.5, "FD");
          doc.setDrawColor(255, 255, 255);
          doc.setLineWidth(1.3);
          doc.line(x + 2, top + 4.8, x + 3.7, top + 6.6);
          doc.line(x + 3.7, top + 6.6, x + 7.2, top + 2.4);
        } else {
          doc.roundedRect(x, top, s, s, 1.5, 1.5, "D");
        }
      };

      // Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(...BLUE);
      doc.text("Deep Cleaning Checklist", margin, y);
      y += 20;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...GREY);
      doc.text("Room by room — the GreenShield 5-Step Clean scope from Capital Clean Care.", margin, y);
      y += 22;

      // Progress
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...INK);
      doc.text(`${checkedCount} of ${total} tasks checked  (${pct}%)`, margin, y);
      y += 8;
      doc.setFillColor(...TRACK);
      doc.roundedRect(margin, y, contentW, 6, 3, 3, "F");
      if (checkedCount > 0) {
        doc.setFillColor(...TEAL);
        doc.roundedRect(margin, y, Math.max(6, contentW * (checkedCount / total)), 6, 3, 3, "F");
      }
      y += 26;

      groups.forEach((g, gi) => {
        ensureSpace(46);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11.5);
        doc.setTextColor(...TEAL);
        doc.text(g.title.toUpperCase(), margin, y);
        y += 7;
        doc.setDrawColor(...TEAL);
        doc.setLineWidth(0.5);
        doc.line(margin, y, margin + contentW, y);
        y += 15;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        g.items.forEach((it, i) => {
          const on = !!checked[`${gi}:${i}`];
          const textX = margin + 18;
          const lines = doc.splitTextToSize(it, contentW - 18) as string[];
          const needed = lines.length * 12 + 6;
          ensureSpace(needed);
          drawCheckbox(margin, y, on);
          doc.setTextColor(...(on ? GREY : INK));
          doc.text(lines, textX, y);
          y += needed;
        });
        y += 10;
      });

      footer();
      doc.save("capital-clean-care-deep-cleaning-checklist.pdf");
    } catch {
      /* If the export chunk fails to load, leave the on-screen checklist untouched. */
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      {/* Progress + actions */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6 mb-6">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-3">
          <div>
            <p className="font-heading font-bold text-foreground text-lg" aria-live="polite">
              You&apos;ve completed <span className="text-accent">{checkedCount}</span> of {total} tasks
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">Tick off each task as you go — your progress is saved on this device.</p>
          </div>
          <span className="font-heading font-extrabold text-2xl text-accent tabular-nums">{pct}%</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-secondary overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Checklist completion">
          <div className="h-full rounded-full bg-accent transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <Button onClick={handleDownload} disabled={isGenerating} className="bg-accent hover:bg-accent/90 text-white rounded-full font-semibold">
            {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
            {isGenerating ? "Preparing PDF…" : "Download PDF"}
          </Button>
          <Button onClick={reset} variant="outline" disabled={checkedCount === 0} className="rounded-full">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>
      </div>

      {/* Checklist groups */}
      <div className="space-y-5">
        {groups.map((g, gi) => (
          <div
            key={g.title}
            className={`rounded-2xl p-5 border ${g.optional ? "border-accent/30 bg-accent/5" : "border-border bg-secondary/30"}`}
          >
            <p className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" /> {g.title}
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
              {g.items.map((it, i) => {
                const id = `${gi}:${i}`;
                const on = !!checked[id];
                return (
                  <li key={it}>
                    <label className="flex items-start gap-3 py-2 cursor-pointer select-none group min-h-[44px]">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={on}
                        onChange={() => toggle(id)}
                      />
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border-2 transition-colors ${
                          on ? "bg-accent border-accent text-white" : "border-muted-foreground/40 bg-white group-hover:border-accent"
                        }`}
                      >
                        {on && (
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className={`text-sm leading-snug transition-colors ${on ? "text-muted-foreground line-through" : "text-foreground"}`}>
                        {it}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Contextual conversion CTA */}
      <div className="rounded-2xl border border-border bg-primary text-primary-foreground p-6 md:p-7 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-heading font-bold text-lg md:text-xl">Prefer to let professionals handle it?</p>
          <p className="text-primary-foreground/80 text-sm mt-1 leading-relaxed">
            Our eco-friendly teams run this exact checklist — with EPA Safer Choice™ products and a satisfaction guarantee — across Maryland, DC, and Northern Virginia.
          </p>
        </div>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full font-semibold shrink-0">
          <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
};

export default DeepCleaningChecklistTool;
