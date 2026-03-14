import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";

const categories = [
  {
    id: "weekly",
    label: "Weekly",
    rows: [
      { size: "1,000 – 2,000 sq ft", price: "$100 – $150" },
      { size: "2,000 – 3,000 sq ft", price: "$150 – $250" },
      { size: "3,000 – 4,000+ sq ft", price: "$250 – $350+" },
    ],
  },
  {
    id: "biweekly",
    label: "Every 2 Weeks",
    rows: [
      { size: "1,000 – 2,000 sq ft", price: "$150 – $200" },
      { size: "2,000 – 3,000 sq ft", price: "$150 – $250" },
      { size: "3,000 – 4,000+ sq ft", price: "$300 – $400+" },
    ],
  },
  {
    id: "monthly",
    label: "Every 4 Weeks",
    rows: [
      { size: "1,000 – 2,000 sq ft", price: "$150 – $250" },
      { size: "2,000 – 3,000 sq ft", price: "$150 – $300" },
      { size: "3,000 – 4,000+ sq ft", price: "$350 – $450+" },
    ],
  },
  {
    id: "deep",
    label: "Deep / Move In-Out",
    rows: [
      { size: "1,000 – 2,000 sq ft", price: "$250 – $350" },
      { size: "2,000 – 3,000 sq ft", price: "$350 – $450" },
      { size: "3,000 – 4,000+ sq ft", price: "$400+" },
    ],
  },
];

const PricingTable = () => {
  const [active, setActive] = useState("weekly");

  return (
    <div className="space-y-6">
      <Tabs value={active} onValueChange={setActive} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto gap-1 bg-secondary p-1">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="text-xs md:text-sm py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-4">
            <div className="space-y-3">
              {cat.rows.map((row, i) => (
                <Card key={i} className="group hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center justify-between p-4 md:p-5">
                    <span className="text-sm md:text-base text-foreground font-medium">
                      {row.size}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-accent">
                      {row.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Pricing note */}
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-4 flex gap-3 items-start">
          <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Prices shown are typical ranges based on home size. Your exact quote is tailored to your home's specific details — bedrooms, bathrooms, cleaning type, and condition. <strong>Request a free quote for your personalized price.</strong>
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="cta" size="lg" asChild>
          <a href="/#quote">
            Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PricingTable;
