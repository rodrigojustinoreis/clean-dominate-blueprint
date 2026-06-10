import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, MapPin, Shield, Search, Leaf, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { mdCities, dcCities, vaCities } from "@/data/locations";
import { slCities, slServices } from "@/data/service-locations";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import PartnerLinks from "@/components/PartnerLinks";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import logo from "@/assets/logo.webp";

const TOP_SERVICE_CITIES = ["rockville-md", "bethesda-md", "silver-spring-md", "arlington-va", "alexandria-va", "washington-dc", "fairfax-va", "gaithersburg-md"];
const TOP_SERVICES = ["house-cleaning", "deep-cleaning", "move-out-cleaning", "recurring-cleaning"];

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
            <a href="/#quote" onClick={() => trackBookNowClick("footer_cta_band")}>Get a Free Quote</a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("footer_cta_band")}><Phone className="h-4 w-4 mr-2" /> Call Now</a>
          </Button>
        </div>
      </div>
    </div>

    {/* ====== TRUST BAR ====== */}
    <div className="border-y border-border bg-muted/30 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">Licensed & Insured</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Search className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">Background-Checked</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">100% Eco-Friendly</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">Family & Latino-Owned</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Star className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">5.0★ Rated</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">Satisfaction Guarantee</span>
          </div>
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
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:capitalcleancare@gmail.com" className="hover:text-primary-foreground transition-colors">capitalcleancare@gmail.com</a></p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat: 8 AM – 6 PM</p>
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
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1 text-sm text-primary-foreground/70">
            <Link to="/maryland" className="hover:text-accent transition-colors font-medium col-span-2 md:col-span-1 mb-1">All Maryland →</Link>
            {mdCities.filter(c => !c.slug.includes("county")).slice(0, 8).map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
          <h4 className="font-heading font-semibold mt-6 mb-4">DC</h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1 text-sm text-primary-foreground/70">
            <Link to="/washington-dc" className="hover:text-accent transition-colors font-medium col-span-2 md:col-span-1 mb-1">All DC →</Link>
            {dcCities.slice(0, 4).map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
        </div>

        {/* VA Locations */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Virginia</h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1 text-sm text-primary-foreground/70">
            <Link to="/virginia" className="hover:text-accent transition-colors font-medium col-span-2 md:col-span-1 mb-1">All Virginia →</Link>
            {vaCities.map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Service + City Links */}
      <div className="mt-10 pt-8 border-t border-primary-foreground/10">
        <h4 className="font-heading font-semibold mb-4 text-sm">Popular Services by Area</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1">
          {slCities.filter(c => TOP_SERVICE_CITIES.includes(c.slug)).flatMap(city =>
            slServices.filter(s => TOP_SERVICES.includes(s.slug)).map(svc => (
              <Link
                key={`${city.slug}-${svc.slug}`}
                to={`/locations/${city.slug}/${svc.slug}`}
                className="text-xs text-primary-foreground/50 hover:text-accent transition-colors truncate"
              >
                {svc.shortName} – {city.name}
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Partners & GBP */}
      <div className="mt-6 pt-6 border-t border-primary-foreground/10">
        <PartnerLinks />
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p>© {new Date().getFullYear()} Capital Clean Care. All rights reserved.</p>
          <span className="hidden sm:inline">·</span>
          <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/careers" className="hover:text-accent transition-colors">Join Our Team</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/capital_cleancare" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/capital.clean.care" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.tiktok.com/@capitalcleancare1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-.94 0-2.43-.39-3.24-1.48z" />
            </svg>
          </a>
        </div>
        <p>Serving Maryland • Washington DC • Northern Virginia</p>
      </div>
      <p className="text-center text-xs text-primary-foreground/30 pb-4">
        Capital Clean Care LLC is not affiliated with any other cleaning company with a similar name operating in the Maryland area.
      </p>
    </div>

  </footer>
);

export default Footer;
