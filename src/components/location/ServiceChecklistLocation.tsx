import { CheckCircle } from "lucide-react";

export interface ChecklistCategory {
  heading: string;
  items: string[];
}

interface ServiceChecklistLocationProps {
  title: string;
  categories: ChecklistCategory[];
}

const ServiceChecklistLocation = ({ title, categories }: ServiceChecklistLocationProps) => (
  <section className="py-12 md:py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {categories.map((cat) => (
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

export default ServiceChecklistLocation;
