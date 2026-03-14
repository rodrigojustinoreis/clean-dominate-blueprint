import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Step =
  | "greeting"
  | "service"
  | "bedrooms"
  | "bathrooms"
  | "frequency"
  | "zip"
  | "name"
  | "phone"
  | "result";

interface Message {
  from: "bot" | "user";
  text: string;
  options?: string[];
}

const botQuestions: Record<Step, { text: string; options?: string[]; placeholder?: string }> = {
  greeting: {
    text: "Hi! 👋 I can get you an instant estimate. What type of cleaning do you need?",
    options: ["Standard Cleaning", "Deep Cleaning", "Move In/Out", "Post-Construction"],
  },
  service: {
    text: "Great! How many bedrooms does your home have?",
    options: ["1", "2", "3", "4", "5+"],
  },
  bedrooms: {
    text: "And how many bathrooms?",
    options: ["1", "1.5", "2", "2.5", "3", "4+"],
  },
  bathrooms: {
    text: "How often would you like us to clean?",
    options: ["One-Time", "Weekly", "Bi-Weekly", "Monthly"],
  },
  frequency: {
    text: "What's your zip code? (We serve MD, DC & VA)",
    placeholder: "e.g. 20850",
  },
  zip: {
    text: "Almost there! What's your first name?",
    placeholder: "Your first name",
  },
  name: {
    text: "And your best phone number? We'll text you the full quote.",
    placeholder: "(301) 555-0123",
  },
  phone: { text: "" },
  result: { text: "" },
};

const basePrices: Record<string, number> = {
  "Standard Cleaning": 120,
  "Deep Cleaning": 250,
  "Move In/Out": 300,
  "Post-Construction": 350,
};
const bedAddon = [0, 0, 25, 50, 80, 110];
const bathAddon: Record<string, number> = {
  "1": 0, "1.5": 15, "2": 30, "2.5": 45, "3": 60, "4+": 80,
};
const freqMult: Record<string, number> = {
  "One-Time": 1, Weekly: 0.75, "Bi-Weekly": 0.85, Monthly: 0.95,
};

const stepOrder: Step[] = [
  "greeting", "service", "bedrooms", "bathrooms", "frequency", "zip", "name", "phone", "result",
];

const answerKey: Partial<Record<Step, string>> = {
  greeting: "service",
  service: "bedrooms",
  bedrooms: "bathrooms",
  bathrooms: "frequency",
  frequency: "zip",
  zip: "name",
  name: "phone",
};

const QuoteChatbot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      const q = botQuestions.greeting;
      setMessages([{ from: "bot", text: q.text, options: q.options }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const advance = async (userText: string, currentStep: Step) => {
    const newAnswers = { ...answers };
    const key = answerKey[currentStep];
    if (key) newAnswers[key] = userText;
    setAnswers(newAnswers);

    const currentIdx = stepOrder.indexOf(currentStep);
    const nextStep = stepOrder[currentIdx + 1] as Step;

    // Show user message immediately
    const addUser = (text: string): Message => ({ from: "user", text });

    if (nextStep === "result") {
      const base = basePrices[newAnswers.service] ?? 120;
      const beds = bedAddon[parseInt(newAnswers.bedrooms) || 1] ?? 0;
      const baths = bathAddon[newAnswers.bathrooms] ?? 0;
      const mult = freqMult[newAnswers.frequency] ?? 1;
      const total = Math.round((base + beds + baths) * mult);
      const low = Math.round(total * 0.9);
      const high = Math.round(total * 1.15);

      setMessages((prev) => [
        ...prev,
        addUser(userText),
        {
          from: "bot",
          text: `Perfect, ${newAnswers.name}! Here's your estimate:\n\n💰 $${low} – $${high}\n\nWe'll reach out to confirm the exact price. 🎉 New clients get $25 off their first cleaning!`,
        },
      ]);
      setStep("result");

      // Save lead to Supabase
      setSaving(true);
      try {
        await supabase.from("quote_requests").insert({
          name: newAnswers.name,
          phone: userText,
          zip: newAnswers.zip,
          service: newAnswers.service,
          bedrooms: newAnswers.bedrooms || null,
          bathrooms: newAnswers.bathrooms || null,
          frequency: newAnswers.frequency || null,
          message: `Chatbot lead — estimate $${low}–$${high}`,
          sms_consent: true,
        });
      } catch (e) {
        console.error("Chatbot lead save error:", e);
      } finally {
        setSaving(false);
      }
      return;
    }

    const nextQ = botQuestions[nextStep];
    setMessages((prev) => [
      ...prev,
      addUser(userText),
      { from: "bot", text: nextQ.text, options: nextQ.options },
    ]);
    setStep(nextStep);
  };

  const handleOption = (option: string) => advance(option, step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    advance(input.trim(), step);
    setInput("");
  };

  const restart = () => {
    setMessages([]);
    setStep("greeting");
    setAnswers({});
    const q = botQuestions.greeting;
    setMessages([{ from: "bot", text: q.text, options: q.options }]);
  };

  const isTextInput = ["frequency", "zip", "name", "phone"].includes(step);
  const placeholder = botQuestions[step]?.placeholder ?? "Type here…";

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-[4.5rem] right-4 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform md:bottom-6"
        aria-label="Open chat for instant quote"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-[8rem] right-2 left-2 z-50 max-h-[65vh] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden md:left-auto md:right-4 md:w-[360px] md:max-h-[500px] md:bottom-22">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between shrink-0">
            <div>
              <span className="font-heading font-semibold text-sm block">Capital Clean Care</span>
              <span className="text-xs opacity-70">Instant Estimate — Takes 30 seconds</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="h-4 w-4 opacity-70 hover:opacity-100" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                  {m.options && step !== "result" && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOption(opt)}
                          className="text-xs bg-background border border-border rounded-full px-3 py-1.5 hover:bg-accent/10 hover:border-accent/40 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {step === "result" && (
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary rounded-xl px-3 py-2">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                  {saving ? "Saving your request…" : "We'll contact you shortly to confirm!"}
                </div>
                <Button variant="cta" size="sm" className="rounded-full" asChild>
                  <Link to="/contact">Get Exact Quote <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full" onClick={restart}>
                  Start Over
                </Button>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Text input (for non-option steps) */}
          {isTextInput && step !== "result" && (
            <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2 shrink-0">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="text-sm"
                type={step === "phone" ? "tel" : "text"}
                autoFocus
              />
              <Button type="submit" size="icon" variant="cta" aria-label="Send">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default QuoteChatbot;
