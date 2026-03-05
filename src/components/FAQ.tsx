import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  faqs: { q: string; a: string }[];
}

const FAQ = ({ faqs }: FAQProps) => (
  <Accordion type="single" collapsible className="w-full">
    {faqs.map((faq, i) => (
      <AccordionItem key={i} value={`faq-${i}`}>
        <AccordionTrigger className="text-left font-heading font-semibold">
          {faq.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          {faq.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FAQ;
