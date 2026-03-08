import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoogleBusinessLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
    <Button variant="outline" size="sm" asChild>
      <a
        href="https://www.google.com/maps/place/Capital+Clean+Care"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Capital Clean Care on Google Maps"
      >
        <Star className="h-4 w-4 mr-2 text-accent" />
        View on Google
        <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    </Button>
    <Button variant="outline" size="sm" asChild>
      <a
        href="https://g.page/r/capitalcleancare/review"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Leave a review for Capital Clean Care on Google"
      >
        Leave a Google Review
        <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    </Button>
  </div>
);

export default GoogleBusinessLinks;
