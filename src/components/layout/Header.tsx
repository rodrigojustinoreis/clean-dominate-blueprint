import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { hubs } from "@/data/locations";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-4">
            <a href="tel:+12407042551" className="hover:text-foreground flex items-center gap-1">
              <Phone className="h-3 w-3" /> (240) 704-2551
            </a>
            <span>Serving MD • DC • VA</span>
          </div>
          <div className="flex items-center gap-1">
            <Leaf className="h-3 w-3 text-accent" />
            <span>Eco-Friendly & Non-Toxic Products</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Capital Clean Care logo" className="h-8 w-8 object-contain" />
            <span className="font-heading font-bold text-lg md:text-xl text-foreground">Capital Clean Care</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">About Us</Link>

            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                Services <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                Locations <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                {hubs.map((h) => (
                  <Link key={h.slug} to={`/${h.slug}`} className="block px-4 py-2 text-sm font-semibold hover:bg-secondary transition-colors">
                    {h.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/reviews" className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Reviews</Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Contact Us</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+12407042551" className="text-sm font-semibold text-foreground flex items-center gap-1">
              <Phone className="h-4 w-4" /> (240) 704-2551
            </a>
            <Button variant="cta" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>About Us</Link>

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-6 space-y-1">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="block px-3 py-2 text-sm hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setLocationsOpen(!locationsOpen)}>
              Locations <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
            </button>
            {locationsOpen && (
              <div className="pl-6 space-y-1">
                {hubs.map((h) => (
                  <Link key={h.slug} to={`/${h.slug}`} className="block px-3 py-2 text-sm font-semibold hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
                    {h.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/reviews" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Reviews</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Contact Us</Link>

            <div className="pt-3 space-y-2">
              <a href="tel:+12407042551" className="block text-center font-semibold text-foreground">
                <Phone className="h-4 w-4 inline mr-1" /> (240) 704-2551
              </a>
              <Button variant="cta" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
