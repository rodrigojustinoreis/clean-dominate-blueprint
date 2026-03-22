import { ArrowRight, Phone, Check, Star, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.webp";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

const avatars = [
  { initials: "SM", color: "bg-emerald-500" },
  { initials: "JT", color: "bg-sky-500" },
  { initials: "LK", color: "bg-violet-500" },
  { initials: "DR", color: "bg-amber-500" },
];

const HeroSection = () => (
  <section className="relative min-h-[580px] md:min-h-[700px] lg:min-h-[820px] flex items-center overflow-hidden">
    {/* Animated background blobs for depth behind the image */}
    <div className="absolute top-0 -left-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
    <div className="absolute top-0 -right-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img
        src={teamPhoto}
        alt="Capital Clean Care team of professional cleaners"
        className="w-full h-full object-cover object-top scale-105"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />
      {/* Richer gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-mesh opacity-20" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Same-day availability in DMV Region</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-foreground leading-[1.1] mb-6 animate-fade-up drop-shadow-sm" style={{ animationDelay: "100ms" }}>
          Come Home to a
          <br />
          <span className="text-gradient">Spotless House.</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-lg mb-8 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
          Background-checked professionals. Eco-friendly products safe for kids and pets. A 24-hour satisfaction guarantee — or we re-clean free.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-up" style={{ animationDelay: "300ms" }}>
          {[
            { icon: Star, label: "5-Star Rated" },
            { icon: Shield, label: "Licensed & Insured" },
            { icon: Leaf, label: "Eco-Friendly" },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm font-medium text-foreground">
              <Icon className="h-4 w-4 text-accent" />
              {label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <Button variant="default" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
            <a href="#quote" onClick={() => trackBookNowClick("hero_section")}>Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300"
            asChild
          >
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("hero_section")}><Phone className="mr-2 h-4 w-4" /> (240) 704-2551</a>
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="flex -space-x-3">
            {avatars.map((a) => (
              <div
                key={a.initials}
                className={`w-10 h-10 rounded-full ${a.color} border-2 border-background flex items-center justify-center shadow-sm`}
              >
                <span className="text-white text-xs font-bold">{a.initials}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm text-foreground ml-1.5 font-bold">5.0</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 font-medium">Trusted by 150+ homeowners in MD, DC & VA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
