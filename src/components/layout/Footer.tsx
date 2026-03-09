import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { mdCities, dcCities, vaCities } from "@/data/locations";
import PartnerLinks from "@/components/PartnerLinks";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* CTA Band */}
    <div className="bg-accent">
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-accent-foreground text-center md:text-left">
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold">Ready for a Spotless Home?</h3>
          <p className="opacity-90 text-sm md:text-base">Get your free, no-obligation quote in minutes.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> Call Now</a>
          </Button>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Capital Clean Care logo" className="h-7 w-7 object-contain" />
            <span className="font-heading font-bold text-lg">Capital Clean Care</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premium residential cleaning with eco-friendly, non-toxic products. Licensed &amp; insured with background-checked teams across Maryland, Washington DC, and Northern Virginia.
          </p>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 4111 Postgate Terrace, Silver Spring, MD 20906</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (240) 704-2551</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> capitalcleancare@gmail.com</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat: 7 AM – 7 PM</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-accent transition-colors">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MD Locations */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Maryland</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li><Link to="/maryland" className="hover:text-accent transition-colors font-medium">All Maryland →</Link></li>
            {mdCities.filter(c => !c.slug.includes("county")).slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to={`/locations/${c.slug}`} className="hover:text-accent transition-colors">{c.name}, {c.state}</Link>
              </li>
            ))}
          </ul>
          <h4 className="font-heading font-semibold mt-6 mb-4">DC</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li><Link to="/washington-dc" className="hover:text-accent transition-colors font-medium">All DC →</Link></li>
            {dcCities.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link to={`/locations/${c.slug}`} className="hover:text-accent transition-colors">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* VA Locations */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Virginia</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li><Link to="/virginia" className="hover:text-accent transition-colors font-medium">All Virginia →</Link></li>
            {vaCities.map((c) => (
              <li key={c.slug}>
                <Link to={`/locations/${c.slug}`} className="hover:text-accent transition-colors">{c.name}, {c.state}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Partners & GBP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-primary-foreground/10">
        <PartnerLinks />
        <div>
          <h4 className="font-heading font-semibold mb-3 text-sm">Find Us Online</h4>
          <a 
            href="https://www.capitalcleancare.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 mb-3 hover:text-accent transition-colors"
          >
            <img src={logo} alt="Capital Clean Care" className="h-5 w-5 object-contain" />
            <span className="text-sm">www.capitalcleancare.com</span>
          </a>
          <GoogleBusinessLinks className="mb-3" />
          <div className="space-y-1 text-xs text-primary-foreground/60">
            <Link to="/blog" className="hover:text-accent transition-colors block">Read Our Blog →</Link>
            <Link to="/reviews" className="hover:text-accent transition-colors block">Client Reviews →</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p>© {new Date().getFullYear()} Capital Clean Care. All rights reserved.</p>
          <span className="hidden sm:inline">·</span>
          <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/capital_cleancare" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/capitalcleancare" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
        <p>Serving Maryland • Washington DC • Northern Virginia</p>
      </div>
    </div>
  </footer>
);

export default Footer;
