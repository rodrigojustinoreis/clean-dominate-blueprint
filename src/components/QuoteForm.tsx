import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: "",
    bedrooms: "",
    bathrooms: "",
    frequency: "",
    date: "",
    message: "",
    smsConsent: false,
    emailConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", phone: "", email: "", zip: "", service: "", bedrooms: "", bathrooms: "", frequency: "", date: "", message: "" });
  };

  const update = (field: string, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" required value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(301) 555-0123" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">Zip Code *</Label>
          <Input id="zip" required value={formData.zip} onChange={(e) => update("zip", e.target.value)} placeholder="20850" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Service Type *</Label>
        <Select required value={formData.service} onValueChange={(v) => update("service", v)}>
          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard Cleaning</SelectItem>
            <SelectItem value="deep">Deep Cleaning</SelectItem>
            <SelectItem value="move">Move In / Move Out</SelectItem>
            <SelectItem value="post-construction">Post-Construction</SelectItem>
            <SelectItem value="recurring">Recurring Cleaning</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Bedrooms</Label>
          <Select value={formData.bedrooms} onValueChange={(v) => update("bedrooms", v)}>
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
          <Select value={formData.bathrooms} onValueChange={(v) => update("bathrooms", v)}>
            <SelectTrigger><SelectValue placeholder="Baths" /></SelectTrigger>
            <SelectContent>
              {["1", "1.5", "2", "2.5", "3", "4+"].map((n) => (
                <SelectItem key={n} value={n}>{n}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Frequency</Label>
          <Select value={formData.frequency} onValueChange={(v) => update("frequency", v)}>
            <SelectTrigger><SelectValue placeholder="How often?" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="once">One-Time</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="biweekly">Bi-Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Preferred Date</Label>
        <Input id="date" type="date" value={formData.date} onChange={(e) => update("date", e.target.value)} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea id="message" value={formData.message} onChange={(e) => update("message", e.target.value)} placeholder="Special requests, access instructions, etc." rows={3} />
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full text-base">
        Get My Free Quote
      </Button>
    </form>
  );
};

export default QuoteForm;
