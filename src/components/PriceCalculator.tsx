import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Calculator } from "lucide-react";

const basePrices: Record<string, number> = {
  standard: 120,
  deep: 250,
  move: 300,
  "post-construction": 350,
  recurring: 110,
};

const bedroomAddon: Record<string, number> = {
  "1": 0, "2": 25, "3": 50, "4": 80, "5+": 110,
};

const bathroomAddon: Record<string, number> = {
  "1": 0, "1.5": 15, "2": 30, "2.5": 45, "3": 60, "4+": 80,
};

const frequencyMultiplier: Record<string, number> = {
  once: 1,
  weekly: 0.75,
  biweekly: 0.85,
  monthly: 0.95,
};

const PriceCalculator = () => {
  const [service, setService] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [frequency, setFrequency] = useState("");

  const estimate = useMemo(() => {
    if (!service || !bedrooms || !bathrooms || !frequency) return null;
    const base = basePrices[service] ?? 120;
    const beds = bedroomAddon[bedrooms] ?? 0;
    const baths = bathroomAddon[bathrooms] ?? 0;
    const mult = frequencyMultiplier[frequency] ?? 1;
    const total = Math.round((base + beds + baths) * mult);
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.15);
    return { low, high };
  }, [service, bedrooms, bathrooms, frequency]);

  return (
    <Card className="border-accent/20">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="h-6 w-6 text-accent" />
          <h3 className="font-heading text-2xl font-bold">Instant Price Estimator</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-6">
          Get a quick estimate based on your home details. For an accurate quote, contact us directly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label>Service Type</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Cleaning</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="move">Move In/Out</SelectItem>
                <SelectItem value="post-construction">Post-Construction</SelectItem>
                <SelectItem value="recurring">Recurring Cleaning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Frequency</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger><SelectValue placeholder="How often?" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="once">One-Time</SelectItem>
                <SelectItem value="weekly">Weekly (25% off)</SelectItem>
                <SelectItem value="biweekly">Bi-Weekly (15% off)</SelectItem>
                <SelectItem value="monthly">Monthly (5% off)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Bedrooms</Label>
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger><SelectValue placeholder="Beds" /></SelectTrigger>
              <SelectContent>
                {["1", "2", "3", "4", "5+"].map((n) => (
                  <SelectItem key={n} value={n}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Bathrooms</Label>
            <Select value={bathrooms} onValueChange={setBathrooms}>
              <SelectTrigger><SelectValue placeholder="Baths" /></SelectTrigger>
              <SelectContent>
                {["1", "1.5", "2", "2.5", "3", "4+"].map((n) => (
                  <SelectItem key={n} value={n}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {estimate && (
          <div className="bg-accent/10 rounded-xl p-6 text-center mb-6 animate-in fade-in duration-300">
            <p className="text-sm text-muted-foreground mb-1">Estimated Price Range</p>
            <p className="font-heading text-4xl font-bold text-accent">
              ${estimate.low} – ${estimate.high}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Final price may vary based on home condition and specific requirements.
            </p>
          </div>
        )}

        <Button variant="cta" size="lg" className="w-full" asChild>
          <Link to="/contact">
            Get an Exact Quote <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
