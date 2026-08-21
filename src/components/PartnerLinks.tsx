import { ExternalLink } from "lucide-react";

const partners = [
  { name: "Montgomery County Chamber of Commerce", url: "https://www.mcccmd.com/" },
  { name: "Greater Silver Spring Chamber", url: "https://www.gsscc.org/" },
  { name: "Arlington Chamber of Commerce", url: "https://www.arlingtonchamber.org" },
  { name: "DC Chamber of Commerce", url: "https://www.dcchamber.org" },
  { name: "Northern Virginia Chamber of Commerce", url: "https://nvcbusiness.org/" },
];

const PartnerLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col gap-2.5 lg:flex-row lg:items-center ${className}`}>
    <h4 className="shrink-0 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">Community Partners</h4>
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
      {partners.map((p) => (
        <li key={p.url}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-primary-foreground/60 transition-colors hover:text-accent"
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
