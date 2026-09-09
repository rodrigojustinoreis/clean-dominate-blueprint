import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  faqs: { q: string; a: string }[];
}

// Answers are part of the initial HTML/DOM (`forceMount`), so the text the FAQPage schema declares is
// present in the server-rendered HTML and extractable without a click (SEO diagnostic 2026-09-09,
// lot A). Opening a panel is still an interactive action that needs the client script.
// Visibility is controlled per panel with the native `hidden` attribute of the closed panels: collapsed
// answers stay invisible, out of the tab order and out of the accessibility tree even before any
// stylesheet loads, so there is no flash or layout shift. Radix keeps the keyboard model,
// `aria-expanded`, and the trigger/region id relations. This is instance-scoped: the shared
// `ui/accordion` component and every other accordion on the site keep their default behaviour.
const FAQ = ({ faqs }: FAQProps) => {
  const [open, setOpen] = useState("");
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full [&_[role=region]]:!animate-none"
      value={open}
      onValueChange={setOpen}
    >
      {faqs.map((faq, i) => {
        const value = `faq-${i}`;
        return (
          <AccordionItem key={i} value={value}>
            <AccordionTrigger className="text-left font-heading font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent
              forceMount
              hidden={open !== value}
              className="text-muted-foreground leading-relaxed"
            >
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQ;
