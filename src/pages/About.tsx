import { Shield, Leaf, Users, Heart, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
import teamPhoto from "@/assets/team-photo.png";
import cleanerBlinds from "@/assets/cleaner-blinds.png";
import cleanerSupplies from "@/assets/cleaner-supplies.png";
import happyClient from "@/assets/happy-client.png";

const About = () => {
  useSEO({
    title: "About Capital Clean Care | Eco-Friendly Cleaning in MD, DC & VA",
    description: "Learn about Capital Clean Care's mission, eco-friendly values, and commitment to premium residential cleaning across Maryland, DC & Virginia.",
  });

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero with team photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Capital Clean Care</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Capital Clean Care was founded with a simple belief: every family deserves a clean, healthy home — and achieving that shouldn't require toxic chemicals or unreliable service.
              </p>
              <p className="text-foreground leading-relaxed">
                Based in the Washington DC metropolitan area, we serve homeowners across Maryland, Washington DC, and Northern Virginia with premium residential cleaning services that prioritize quality, consistency, and environmental responsibility.
              </p>
            </div>
            <img
              src={teamPhoto}
              alt="Capital Clean Care team members in branded uniforms"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
              loading="eager"
            />
          </div>

          {/* Action photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <img src={cleanerBlinds} alt="Team member cleaning window blinds" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={cleanerSupplies} alt="Professional carrying eco-friendly cleaning supplies" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={happyClient} alt="Happy client relaxing while our team cleans" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" loading="lazy" />
          </div>

          <div className="max-w-4xl mx-auto">
          <p className="text-foreground leading-relaxed mb-6">
            Our teams are carefully selected and thoroughly vetted. Every cleaning professional undergoes comprehensive background checks, professional training, and ongoing quality assessments. When you open your door to a Capital Clean Care team, you can trust that you're welcoming experienced, trustworthy professionals into your home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {[
              { icon: Leaf, title: "Eco-Friendly Promise", desc: "We use only plant-based, non-toxic cleaning products. No harsh chemicals, no artificial fragrances — just effective, safe cleaning." },
              { icon: Shield, title: "Fully Protected", desc: "Licensed, bonded, and insured with comprehensive liability coverage. Every team member is background-checked for your peace of mind." },
              { icon: Heart, title: "Satisfaction Guaranteed", desc: "If you're not completely satisfied with any cleaning visit, we'll return to make it right at no additional charge." },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6 text-foreground">
            <h2 className="font-heading text-2xl font-bold">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: "Consistency over shortcuts — every visit follows our detailed checklist" },
                { icon: Users, text: "Dedicated teams who learn your home and preferences" },
                { icon: Award, text: "Continuous training and quality improvement" },
                { icon: Leaf, text: "Environmental responsibility in everything we do" },
              ].map((v, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <v.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">Get Your Free Quote</h2>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
