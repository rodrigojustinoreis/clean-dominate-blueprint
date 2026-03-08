import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator, Home, Bath, BedDouble, Sparkles, User, Phone, Mail, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [service, setService] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [frequency, setFrequency] = useState("");
  const [sqft, setSqft] = useState([1500]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Client Details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !address) {
      toast({
        title: "Missing fields",
        description: "Please fill in all contact details to receive your quote.",
        variant: "destructive",
      });
      return;
    }
    
    if (!estimate) {
       toast({
        title: "Incomplete estimate",
        description: "Please fill out the home details above first.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save to Supabase (assuming a basic quote_requests table structure)
      // Since address isn't in the default quote_requests schema, we'll map it to zip or message
      // or if your schema supports it, add it. Here we add it to the message field for now
      const { error: dbError } = await supabase.from("quote_requests").insert({
        name,
        phone,
        email,
        service: service || "Not specified",
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        frequency: frequency,
        zip: address, // mapping address to zip temporarily to satisfy constraints
        message: `Calculated Estimate: $${estimate.low} - $${estimate.high}. SqFt: ${sqft[0]}. Addons: ${selectedAddons.join(', ')}. Full Address: ${address}`,
      });

      if (dbError) throw dbError;

      // 2. Send via FormSubmit
      const formPayload = {
        name,
        phone,
        email,
        address,
        service,
        bedrooms,
        bathrooms,
        frequency,
        square_feet: sqft[0],
        selected_addons: selectedAddons.join(', '),
        estimated_price_low: estimate.low,
        estimated_price_high: estimate.high,
        _subject: "New Instant Quote Request!",
      };

      await fetch("https://formsubmit.co/ajax/capitalcleancare@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      toast({
        title: "Quote Sent Successfully!",
        description: "We'll be in touch shortly to confirm your booking.",
      });

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p className="font-heading text-3xl md:text-4xl font-bold text-accent">
              ${estimate.low} – ${estimate.high}
            </p>
            {estimate.savings > 0 && (
              <p className="text-sm font-medium mt-2 text-accent">
                You save ~${estimate.savings} per visit with recurring service!
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              Final price may vary based on home condition and specific requirements.
            </p>
          </div>
        )}

        {/* Client Details Form */}
        {estimate && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-6 animate-in fade-in duration-300">
            <h4 className="font-semibold text-lg border-b pb-2">Send me this quote</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="calc-name" className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> Full Name</Label>
                <Input id="calc-name" value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-phone" className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> Phone</Label>
                <Input id="calc-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 123-4567" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-email" className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> Email</Label>
                <Input id="calc-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-address" className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Address / Zip</Label>
                <Input id="calc-address" value={address} onChange={e => setAddress(e.target.value)} placeholder="123 Main St, City, State" required />
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting} variant="cta" size="lg" className="w-full mt-4">
              {isSubmitting ? "Sending..." : "Submit Quote & Contact Info"} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        )}
        
        {!estimate && (
          <Button disabled variant="cta" size="lg" className="w-full opacity-50 cursor-not-allowed">
            Fill details to get quote <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
