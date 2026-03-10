import { Shield, Leaf, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Users,
    title: "Local Experts Who Care",
    desc: "We're not just another cleaning company — we're your neighbors. Personalized service for every DMV home.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Vetted",
    desc: "Peace of mind comes standard. Every team member is background-checked, insured, and professionally trained.",
  },
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    desc: "Safe for your family, pets, and planet. EPA Safer Choice certified, plant-based, no harsh chemicals.",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    desc: "Not happy? We'll re-clean at no extra charge within 24 hours. Your satisfaction is our top priority.",
  },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Us</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Why Homeowners Choose Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Consistent, reliable cleaning with a personal touch that big franchises can't match.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <Card key={item.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-accent/20">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
