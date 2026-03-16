import { Link } from "react-router-dom";
import { CheckCircle, Heart, DollarSign, Clock, Users, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

const Careers = () => {
  const { seoHelmet } = useSEO({
    title: "Join Our Team — Cleaning Jobs in MD, DC & VA | Capital Clean Care",
    description: "Join the Capital Clean Care team! We're hiring professional house cleaners in Maryland, DC & Northern Virginia. Competitive pay, flexible hours, eco-friendly products. Apply today.",
    canonical: "https://capitalcleancare.com/careers",
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Join Our Team", href: "/careers" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">We're Hiring</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">
            Join the Capital Clean Care Family
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We're looking for dedicated, professional cleaners to join our growing team in Maryland, Washington DC, and Northern Virginia. If you take pride in your work and care about quality, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="mailto:capitalcleancare@gmail.com?subject=Job Application - Cleaning Professional">
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Why Join Capital Clean Care?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: "Competitive Pay", desc: "Above-market wages with performance bonuses and tips. We believe great work deserves great compensation." },
              { icon: Clock, title: "Flexible Scheduling", desc: "Choose shifts that work for your life. Part-time and full-time positions available across MD, DC & VA." },
              { icon: Heart, title: "Eco-Friendly Products", desc: "We use only plant-based, non-toxic products. No harsh chemicals — better for you and our clients." },
              { icon: Users, title: "Supportive Team", desc: "Work alongside a professional, respectful team. We treat every team member like family." },
              { icon: CheckCircle, title: "Training Provided", desc: "Full training included. No experience required — we'll teach you our proven cleaning methods." },
              { icon: ArrowRight, title: "Growth Opportunities", desc: "Grow with us. Many of our team leads started as cleaners and built careers with Capital Clean Care." },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">What We're Looking For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Reliable transportation to job sites in MD, DC & VA",
              "Strong attention to detail and pride in quality work",
              "Professional, friendly attitude with clients",
              "Physical ability to perform cleaning tasks",
              "Smartphone for scheduling and communication",
              "Background check clearance (required)",
              "Legal authorization to work in the United States",
              "Ability to follow detailed cleaning checklists",
            ].map((req) => (
              <div key={req} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Previous cleaning experience is a plus but not required. We provide all training, supplies, and equipment.
          </p>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">Open Positions</h2>
          <div className="space-y-4">
            {[
              { title: "Residential Cleaning Professional", location: "Silver Spring, MD area", type: "Full-time / Part-time" },
              { title: "Residential Cleaning Professional", location: "Rockville / Bethesda, MD", type: "Full-time / Part-time" },
              { title: "Residential Cleaning Professional", location: "Frederick, MD area", type: "Part-time" },
              { title: "Residential Cleaning Professional", location: "Arlington / McLean, VA", type: "Full-time / Part-time" },
              { title: "Airbnb Turnover Specialist", location: "Washington, DC area", type: "Flexible / On-call" },
            ].map((job) => (
              <Card key={job.title + job.location}>
                <CardContent className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.location} · {job.type}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:capitalcleancare@gmail.com?subject=Job Application - Cleaning Professional">Apply</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="mb-8 opacity-90">Send your name, contact info, and available hours to get started. We respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="mailto:capitalcleancare@gmail.com?subject=Job Application - Cleaning Professional">
                Email Your Application
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-accent-foreground hover:bg-white/10" asChild>
              <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call to Apply</a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">Capital Clean Care is an equal opportunity employer.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
