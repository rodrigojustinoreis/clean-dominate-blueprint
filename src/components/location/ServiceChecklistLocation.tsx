import { CheckCircle } from "lucide-react";

export interface ChecklistCategory {
  heading: string;
  items: string[];
}

interface ServiceChecklistLocationProps {
  title: string;
  categories: ChecklistCategory[];
}

// Lote 1b — reorder categories and their items deterministically by the (city-bearing)
// title, so copy-pasted dedicated-page checklists stop reading as one identical block.
// Same items, factual content unchanged — only the order differs per city.
function rotate<T>(arr: T[], by: number): T[] {
  if (arr.length < 2) return arr;
  const k = ((by % arr.length) + arr.length) % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

const ServiceChecklistLocation = ({ title, categories }: ServiceChecklistLocationProps) => {
  let h = 0;
  for (const c of title) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  const ordered = rotate(categories, h).map((cat, ci) => ({
    ...cat,
    items: rotate(cat.items, h + ci),
  }));
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {ordered.map((cat) => (
            <div
              key={cat.heading}
              className="bg-background rounded-xl border border-border/50 p-5"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                {cat.heading}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceChecklistLocation;
