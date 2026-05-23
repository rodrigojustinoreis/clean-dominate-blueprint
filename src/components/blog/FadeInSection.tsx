import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className }: FadeInSectionProps) => (
  <ScrollReveal className={className}>{children}</ScrollReveal>
);

export default FadeInSection;
