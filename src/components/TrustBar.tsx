import { Shield, CheckCircle, Leaf, Star, Clock, Award, type LucideIcon } from "lucide-react";

export interface TrustBarItem {
  icon: LucideIcon;
  label: string;
}

interface TrustBarProps {
  variant?: "light" | "dark";
  /** Page-specific facts (e.g. the Rockville hub); the default list is unchanged elsewhere. */
  items?: TrustBarItem[];
}

const trustItems: TrustBarItem[] = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: CheckCircle, label: "Background-Checked" },
  { icon: Leaf, label: "100% Eco-Friendly" },
  { icon: Star, label: "Satisfaction Guaranteed" },
  { icon: Clock, label: "Flexible Scheduling" },
  { icon: Award, label: "5-Star Rated" },
];

const TrustBar = ({ variant = "light", items = trustItems }: TrustBarProps) => {
  const bg = variant === "dark" ? "bg-primary" : "bg-secondary";
  const text = variant === "dark" ? "text-primary-foreground/80" : "text-muted-foreground";
  const iconColor = "text-accent";

  return (
    <div className={`${bg} py-4 md:py-5 overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <span key={item.label} className={`flex items-center gap-2 text-sm font-medium ${text}`}>
              <item.icon className={`h-4 w-4 ${iconColor} shrink-0`} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
