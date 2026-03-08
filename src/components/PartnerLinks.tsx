import { ExternalLink } from "lucide-react";

const partners = [
  { name: "Montgomery County Chamber of Commerce", url: "https://www.montgomerycountychamber.com" },
  { name: "Greater Silver Spring Chamber", url: "https://www.silverspringchamber.com" },
  { name: "Arlington Chamber of Commerce", url: "https://www.arlingtonchamber.org" },
  { name: "DC Chamber of Commerce", url: "https://www.dcchamber.org" },
  { name: "Fairfax County Chamber", url: "https://www.fairfaxcountychamber.org" },
];

const PartnerLinks = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <h4 className="font-heading font-semibold mb-3 text-sm">Community Partners</h4>
    <ul className="space-y-1.5">
      {partners.map((p) => (
        <li key={p.url}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary-foreground/60 hover:text-accent transition-colors inline-flex items-center gap-1"
            aria-label={`Visit ${p.name} website`}
          >
            {p.name}
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default PartnerLinks;
