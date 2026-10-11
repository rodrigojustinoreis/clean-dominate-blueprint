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
import { CheckCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";

/**
 * Job-application form for the Careers page.
 * Submits through Netlify Forms (form-name="careers") — the hidden static form
 * is registered in index.html so Netlify captures it at build time. Submissions
 * appear in the Netlify dashboard (and email, if a notification is enabled).
 */
const CareerApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    position: "",
    availability: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const update = (field: string, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const encode = (data: Record<string, string>) =>
        Object.keys(data)
          .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
          .join("&");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "careers",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          position: formData.position,
          availability: formData.availability,
          message: formData.message || "",
        }),
      });

      // Email the application straight to the owner (non-blocking — succeeds regardless)
      fetch("/api/send-career-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          position: formData.position,
          availability: formData.availability,
          message: formData.message || null,
        }),
      }).catch((err) => console.error("Career email notification failed (non-critical):", err));

      setSubmittedName(formData.name.split(" ")[0]);
      setFormData({ name: "", phone: "", email: "", city: "", position: "", availability: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      console.error("Career application error:", err);
      toast.error("Something went wrong. Please email capitalcleancare@gmail.com or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-8 px-4 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold mb-2">
            Thank you{submittedName ? `, ${submittedName}` : ""}! 🎉
          </h3>
          <p className="text-muted-foreground max-w-md">
            We received your application and our team will review it shortly. We typically respond
            within <strong className="text-foreground">24 hours</strong>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" asChild className="rounded-full gap-2">
            <a href="tel:+12407042551"><Phone className="h-4 w-4" /> Call (240) 704-2551</a>
          </Button>
          <Button variant="ghost" className="rounded-full text-muted-foreground" onClick={() => setSubmitted(false)}>
            Submit another application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      name="careers"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Netlify hidden inputs */}
      <input type="hidden" name="form-name" value="careers" />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="ca-name">Full Name *</Label>
          <Input id="ca-name" name="name" required value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Maria Garcia" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ca-phone">Phone *</Label>
          <Input id="ca-phone" name="phone" type="tel" required value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(301) 555-0123" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ca-email">Email *</Label>
          <Input id="ca-email" name="email" type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="maria@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ca-city">City / Area *</Label>
          <Input id="ca-city" name="city" required value={formData.city} onChange={(e) => update("city", e.target.value)} placeholder="Silver Spring, MD" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Position *</Label>
          <Select required value={formData.position} onValueChange={(v) => update("position", v)}>
            <SelectTrigger><SelectValue placeholder="Which role?" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Residential Cleaning Professional">Residential Cleaning Professional</SelectItem>
              <SelectItem value="Airbnb Turnover Specialist">Airbnb Turnover Specialist</SelectItem>
              <SelectItem value="Team Lead">Team Lead</SelectItem>
              <SelectItem value="Any / Not Sure">Any / Not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Availability *</Label>
          <Select required value={formData.availability} onValueChange={(v) => update("availability", v)}>
            <SelectTrigger><SelectValue placeholder="When can you work?" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Weekends only">Weekends only</SelectItem>
              <SelectItem value="Flexible / On-call">Flexible / On-call</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ca-message">Tell us about yourself (optional)</Label>
        <Textarea
          id="ca-message"
          name="message"
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Years of cleaning experience, languages spoken, whether you have your own transportation…"
          rows={4}
        />
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full text-base gap-2" disabled={submitting}>
        {submitting ? "Sending…" : <>Submit Application <Send className="h-4 w-4" /></>}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We respond within 24 hours · Capital Clean Care is an equal opportunity employer
      </p>
    </form>
  );
};

export default CareerApplicationForm;
