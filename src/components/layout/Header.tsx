import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dirServiceCards as services } from "@/data/home-directory";
import { hubs } from "@/data/locations";
import logo from "@/assets/logo.webp";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const ES_SERVICES = [
  { path: "/es/limpieza-de-casas",        label: "Limpieza Regular" },
  { path: "/es/limpieza-profunda",         label: "Limpieza Profunda" },
  { path: "/es/limpieza-de-mudanza",       label: "Limpieza de Mudanza" },
  { path: "/es/limpieza-airbnb",           label: "Limpieza Airbnb" },
  { path: "/es/limpieza-post-construccion",label: "Post-Construcción" },
  { path: "/es/limpieza-recurrente",       label: "Limpieza Recurrente" },
];

const ES_AREAS = [
  { path: "/es/areas/silver-spring-md",      label: "Silver Spring" },
  { path: "/es/areas/wheaton-md",            label: "Wheaton" },
  { path: "/es/areas/rockville-md",          label: "Rockville" },
  { path: "/es/areas/gaithersburg-md",       label: "Gaithersburg" },
  { path: "/es/areas/germantown-md",         label: "Germantown" },
  { path: "/es/areas/aspen-hill-md",         label: "Aspen Hill" },
  { path: "/es/areas/takoma-park-md",        label: "Takoma Park" },
  { path: "/es/areas/montgomery-village-md", label: "Montgomery Village" },
];

// Desktop "Services" mega-menu — grouped columns, real pages only (no 404s).
const SERVICE_MENU: { heading: string; items: { to: string; label: string }[] }[] = [
  {
    heading: "Cleaning Types",
    items: [
      { to: "/services/house-cleaning", label: "House Cleaning" },
      { to: "/services/maid-service", label: "Maid Service" },
      { to: "/services/condo-cleaning", label: "Condo Cleaning" },
      { to: "/services/deep-cleaning", label: "Deep Clean" },
      { to: "/services/kitchen-cleaning", label: "Kitchen Cleaning" },
      { to: "/services/bathroom-cleaning", label: "Bathroom Cleaning" },
      { to: "/services/eco-friendly-cleaning", label: "Eco-Friendly Cleaning" },
      { to: "/services/office-cleaning", label: "Commercial Cleaning" },
    ],
  },
  {
    heading: "Areas We Clean",
    items: [
      { to: "/services/kitchen-cleaning", label: "Kitchens" },
      { to: "/services/bathroom-cleaning", label: "Bathrooms" },
      { to: "/services/living-area-cleaning", label: "Living Areas" },
      { to: "/services/deep-cleaning", label: "Sleeping Areas" },
    ],
  },
  {
    heading: "Cleaning Schedules",
    items: [
      { to: "/services/recurring-cleaning", label: "Recurring Cleaning" },
      { to: "/services/move-out-cleaning", label: "Move In / Move Out" },
      { to: "/services/house-cleaning", label: "One-Time Cleaning" },
      { to: "/#quote", label: "Customized Cleaning" },
    ],
  },
  {
    heading: "Specialty Cleaning",
    items: [
      { to: "/services/post-construction-cleaning", label: "Post-Construction" },
      { to: "/services/airbnb-cleaning", label: "Airbnb Turnover" },
      { to: "/senior-home-cleaning-montgomery-county-md", label: "Senior Home Cleaning" },
      { to: "/resources/holiday-cleaning-checklist-dmv", label: "Holiday Cleaning" },
      { to: "/resources/how-to-clean-up-after-a-party", label: "Post-Party Cleanup" },
    ],
  },
];

// Short, clean labels for the Locations dropdown (the hub `name` fields are long, SEO-y titles).
const HUB_LABELS: Record<string, string> = {
  "maryland": "Maryland",
  "washington-dc": "Washington, DC",
  "virginia": "Northern Virginia",
};

const Header = () => {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es/") || pathname === "/es";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-4">
            <a href="tel:+12407042551" className="hover:text-foreground flex items-center gap-1" onClick={() => trackPhoneClick("header_topbar")}>
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
            <img src={logo} alt="Capital Clean Care logo" width="940" height="788" className="h-7 w-7 md:h-8 md:w-8 object-contain shrink-0" />
            <span className="font-heading font-bold text-sm sm:text-lg md:text-xl text-foreground whitespace-nowrap leading-tight">Capital Clean Care</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {isSpanish ? (
              <>
                <Link to="/es" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Inicio</Link>

                <div className="relative group">
                  <button className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                    Servicios <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                      {ES_SERVICES.map((s) => (
                        <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                    Áreas <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                      {ES_AREAS.map((a) => (
                        <Link key={a.path} to={a.path} className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/es/nosotros" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Nosotros</Link>
                <Link to="/es/contacto" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Contacto</Link>
              </>
            ) : (
              <>
                <Link to="/" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Home</Link>

                <div className="relative group">
                  <button className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                    Services <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <div className="bg-card border border-border rounded-xl shadow-xl p-6 w-[min(95vw,900px)]">
                      <div className="grid grid-cols-4 gap-x-6">
                        {SERVICE_MENU.map((col) => (
                          <div key={col.heading}>
                            <p className="font-heading font-bold text-[14px] uppercase tracking-wider text-[#0D2B5E] mb-3">{col.heading}</p>
                            <ul className="space-y-0.5">
                              {col.items.map((it) => (
                                <li key={it.label}>
                                  <Link to={it.to} className="block py-1.5 font-heading font-medium text-[16px] text-[#1A6BAD] hover:text-[#0D2B5E] transition-colors">
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center justify-between gap-4 bg-[#1A6BAD] text-white rounded-lg px-5 py-4">
                        <div>
                          <p className="font-heading font-bold text-base">🎁 15% OFF Your First Clean</p>
                          <p className="text-white/85 text-xs">New clients in MD, DC &amp; VA — mention it when you book.</p>
                        </div>
                        <Button variant="cta" size="sm" asChild>
                          <a href="/#quote">Get a Free Quote →</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                    Locations <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180 duration-200" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <div className="bg-card border border-border rounded-xl shadow-xl p-6 min-w-[240px]">
                      <p className="font-heading font-bold text-[14px] uppercase tracking-wider text-[#0D2B5E] mb-3">Areas We Serve</p>
                      <ul className="space-y-0.5">
                        {hubs.map((h) => (
                          <li key={h.slug}>
                            <Link to={`/${h.slug}`} className="block py-1.5 font-heading font-medium text-[16px] text-[#1A6BAD] hover:text-[#0D2B5E] transition-colors">
                              {HUB_LABELS[h.slug] ?? h.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Link to="/pricing" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Pricing</Link>
                <Link to="/resources" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Resources</Link>
                <Link to="/about" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">About</Link>
                <Link to="/contact" className="whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">Contact</Link>
              </>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <LanguageSwitcher />
            <a href="tel:+12407042551" className="text-sm font-semibold text-foreground flex items-center gap-1 whitespace-nowrap" onClick={() => trackPhoneClick("header_desktop_nav")}>
              <Phone className="h-4 w-4" /> (240) 704-2551
            </a>
            <Button variant="cta" asChild>
              {isSpanish
                ? <Link to="/es/contacto" onClick={() => trackBookNowClick("header_desktop_nav")}>Cotización Gratis</Link>
                : <a href="/#quote" onClick={() => trackBookNowClick("header_desktop_nav")}>Free Quote</a>
              }
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <a href="tel:+12407042551" className="hidden min-[390px]:flex items-center shrink-0 p-1.5 -m-1.5" aria-label="Call us" onClick={() => trackPhoneClick("header_mobile_topbar")}>
              <Phone className="h-5 w-5 text-accent" />
            </a>
            <Button variant="cta" size="sm" className="text-xs px-3 h-9 rounded-full shrink-0 whitespace-nowrap" asChild>
              {isSpanish
                ? <Link to="/es/contacto" onClick={() => trackBookNowClick("header_mobile_cta")}>Cotización</Link>
                : <a href="/#quote" onClick={() => trackBookNowClick("header_mobile_cta")}>Free Quote</a>
              }
            </Button>
            <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            <div className="flex items-center justify-between px-3 pb-3 mb-1 border-b border-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Language / Idioma</span>
              <LanguageSwitcher />
            </div>
            {isSpanish ? (
              <>
                <Link to="/es" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Inicio</Link>

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setServicesOpen(!servicesOpen)}>
                  Servicios <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-6 space-y-1">
                    {ES_SERVICES.map((s) => (
                      <Link key={s.path} to={s.path} className="block px-3 py-2 text-sm hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}

                <button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setLocationsOpen(!locationsOpen)}>
                  Áreas <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
                </button>
                {locationsOpen && (
                  <div className="pl-6 space-y-1">
                    {ES_AREAS.map((a) => (
                      <Link key={a.path} to={a.path} className="block px-3 py-2 text-sm hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link to="/es/nosotros" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Nosotros</Link>
                <Link to="/es/contacto" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Contacto</Link>

                <div className="pt-3 space-y-2">
                  <a href="tel:+12407042551" className="block text-center font-semibold text-foreground" onClick={() => trackPhoneClick("header_mobile_menu")}>
                    <Phone className="h-4 w-4 inline mr-1" /> (240) 704-2551
                  </a>
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/es/contacto" onClick={() => { setMobileOpen(false); trackBookNowClick("header_mobile_menu"); }}>Cotización Gratis</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link to="/" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Home</Link>

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

                <Link to="/pricing" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Pricing</Link>
                <Link to="/resources" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Resources</Link>
                <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>About</Link>
                <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-secondary" onClick={() => setMobileOpen(false)}>Contact</Link>

                <div className="pt-3 space-y-2">
                  <a href="tel:+12407042551" className="block text-center font-semibold text-foreground" onClick={() => trackPhoneClick("header_mobile_menu")}>
                    <Phone className="h-4 w-4 inline mr-1" /> (240) 704-2551
                  </a>
                  <Button variant="cta" className="w-full" asChild>
                    <a href="/#quote" onClick={() => { setMobileOpen(false); trackBookNowClick("header_mobile_menu"); }}>Get a Free Quote</a>
                  </Button>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
