import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator, Home, Bath, BedDouble, Sparkles } from "lucide-react";

const basePrices: Record<string, number> = {
  standard: 120,
  deep: 250,
  move: 300,
  "post-construction": 350,
  recurring: 110,
  "eco-friendly": 140,
};

const bedroomAddon: Record<string, number> = {
  "1": 0, "2": 25, "3": 50, "4": 80, "5+": 110,
};

const bathroomAddon: Record<string, number> = {
  "1": 0, "1.5": 15, "2": 30, "2.5": 45, "3": 60, "4+": 80,
};

const frequencyMultiplier: Record<string, { mult: number; label: string }> = {
  once: { mult: 1, label: "One-Time" },
  weekly: { mult: 0.75, label: "Weekly (25% off)" },
  biweekly: { mult: 0.85, label: "Bi-Weekly (15% off)" },
  monthly: { mult: 0.95, label: "Monthly (5% off)" },
};

const sqftTiers = [
  { max: 1000, addon: 0 },
  { max: 1500, addon: 20 },
  { max: 2000, addon: 45 },
  { max: 2500, addon: 70 },
  { max: 3000, addon: 100 },
  { max: 4000, addon: 140 },
  { max: 5000, addon: 190 },
];

function sqftAddon(sqft: number): number {
  for (const t of sqftTiers) {
    if (sqft <= t.max) return t.addon;
  }
  return 240;
}

interface Addon {
  id: string;
  label: string;
  price: number;
}

const addons: Addon[] = [
  { id: "inside-fridge", label: "Inside Fridge", price: 30 },
  { id: "inside-oven", label: "Inside Oven", price: 35 },
  { id: "inside-cabinets", label: "Inside Cabinets", price: 45 },
  { id: "laundry", label: "Laundry (wash & fold)", price: 25 },
  { id: "windows-interior", label: "Interior Windows", price: 40 },
  { id: "garage", label: "Garage Sweep & Mop", price: 35 },
];

const PriceCalculator = () => {
  const [service, setService] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [frequency, setFrequency] = useState("");
  const [sqft, setSqft] = useState([1500]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    if (!service || !bedrooms || !bathrooms || !frequency) return null;
    const base = basePrices[service] ?? 120;
    const beds = bedroomAddon[bedrooms] ?? 0;
    const baths = bathroomAddon[bathrooms] ?? 0;
    const area = sqftAddon(sqft[0]);
    const mult = frequencyMultiplier[frequency]?.mult ?? 1;
    const addonTotal = addons
      .filter((a) => selectedAddons.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    const subtotal = base + beds + baths + area + addonTotal;
    const total = Math.round(subtotal * mult);
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.15);
    const savings = frequency !== "once" ? Math.round(subtotal - total) : 0;
    return { low, high, savings, subtotal, total };
  }, [service, bedrooms, bathrooms, frequency, sqft, selectedAddons]);

  return (
    <Card className="border-accent/20">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="h-6 w-6 text-accent" />
          <h3 className="font-heading text-2xl font-bold">Instant Price Estimator</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-6">
          Get a detailed estimate based on your home. For an exact quote, contact us directly.
        </p>

        {/* Core selections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> Service Type</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Cleaning</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="move">Move In/Out</SelectItem>
                <SelectItem value="post-construction">Post-Construction</SelectItem>
                <SelectItem value="recurring">Recurring Cleaning</SelectItem>
                <SelectItem value="eco-friendly">Eco-Friendly Cleaning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Frequency</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger><SelectValue placeholder="How often?" /></SelectTrigger>
              <SelectContent>
                {Object.entries(frequencyMultiplier).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> Bedrooms</Label>
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
            <Label className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> Bathrooms</Label>
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

        {/* Square footage slider */}
        <div className="mb-6 space-y-3">
          <Label className="flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Approx. Square Footage: <span className="font-bold text-accent ml-1">{sqft[0].toLocaleString()} sq ft</span>
          </Label>
          <Slider
            value={sqft}
            onValueChange={setSqft}
            min={500}
            max={5000}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>500 sq ft</span>
            <span>5,000 sq ft</span>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mb-6">
          <Label className="mb-3 block">Optional Add-Ons</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {addons.map((addon) => (
              <label
                key={addon.id}
                className="flex items-center gap-2 p-2 rounded-lg border border-border hover:bg-accent/5 cursor-pointer transition-colors"
              >
                <Checkbox
                  checked={selectedAddons.includes(addon.id)}
                  onCheckedChange={() => toggleAddon(addon.id)}
                />
                <span className="text-sm flex-1">{addon.label}</span>
                <span className="text-xs font-medium text-muted-foreground">+${addon.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Result */}
        {estimate && (
          <div className="bg-accent/10 rounded-xl p-6 text-center mb-6 animate-in fade-in duration-300">
            <p className="text-sm text-muted-foreground mb-1">Estimated Price Range</p>
            <p className="font-heading text-4xl font-bold text-accent">
              ${estimate.low} – ${estimate.high}
            </p>
            {estimate.savings > 0 && (
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
                You save ~${estimate.savings} per visit with recurring service!
              </p>
            )}
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
