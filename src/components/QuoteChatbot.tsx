import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

type Step = "greeting" | "service" | "bedrooms" | "bathrooms" | "frequency" | "zip" | "result";

interface Message {
  from: "bot" | "user";
  text: string;
  options?: string[];
}

const botQuestions: Record<Step, { text: string; options?: string[] }> = {
  greeting: { text: "Hi! 👋 I can help you get an instant cleaning estimate. What type of cleaning do you need?", options: ["Standard Cleaning", "Deep Cleaning", "Move In/Out", "Post-Construction"] },
  service: { text: "Great choice! How many bedrooms does your home have?", options: ["1", "2", "3", "4", "5+"] },
  bedrooms: { text: "And how many bathrooms?", options: ["1", "1.5", "2", "2.5", "3", "4+"] },
  bathrooms: { text: "How often would you like us to clean?", options: ["One-Time", "Weekly", "Bi-Weekly", "Monthly"] },
  frequency: { text: "What's your zip code? (We serve MD, DC & VA)" },
  zip: { text: "" },
  result: { text: "" },
};

const basePrices: Record<string, number> = {
  "Standard Cleaning": 120, "Deep Cleaning": 250, "Move In/Out": 300, "Post-Construction": 350,
};
const bedAddon = [0, 0, 25, 50, 80, 110];
const bathAddon: Record<string, number> = { "1": 0, "1.5": 15, "2": 30, "2.5": 45, "3": 60, "4+": 80 };
const freqMult: Record<string, number> = { "One-Time": 1, "Weekly": 0.75, "Bi-Weekly": 0.85, "Monthly": 0.95 };

const QuoteChatbot = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
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

  const advance = (userText: string, currentStep: Step) => {
    const newAnswers = { ...answers };
    const stepMap: Record<Step, Step> = {
      greeting: "service",
      service: "bedrooms",
      bedrooms: "bathrooms",
      bathrooms: "frequency",
      frequency: "zip",
      zip: "result",
      result: "result",
    };

    const keyMap: Record<Step, string> = {
      greeting: "service",
      service: "bedrooms",
      bedrooms: "bathrooms",
      bathrooms: "frequency",
      frequency: "zip",
      zip: "",
      result: "",
    };

    newAnswers[keyMap[currentStep]] = userText;
    setAnswers(newAnswers);

    const nextStep = stepMap[currentStep];

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
        { from: "user", text: userText },
        {
          from: "bot",
          text: `Based on your details, your estimated price is **$${low} – $${high}**. 🏠✨\n\nThis is a rough estimate — for an exact quote, fill out our form or call (240) 704-2551.\n\n🎉 **New clients get $25 off their first cleaning!**`,
        },
      ]);
      setStep("result");
      return;
    }

    const nextQ = botQuestions[nextStep];
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText },
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

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform md:bottom-6"
        aria-label="Open chat for instant quote"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-36 right-4 z-50 w-[340px] max-h-[480px] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden md:bottom-22">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <span className="font-heading font-semibold text-sm">Capital Clean Care</span>
            <span className="text-xs opacity-80">Instant Quote</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[200px] max-h-[320px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {m.text}
                  {m.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOption(opt)}
                          className="text-xs bg-background border border-border rounded-full px-3 py-1 hover:bg-accent/10 transition-colors"
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
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="cta" size="sm" asChild>
                  <Link to="/contact">Get Exact Quote <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
                <Button variant="outline" size="sm" onClick={restart}>
                  Start Over
                </Button>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input (only for zip step) */}
          {step === "zip" && (
            <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter zip code..."
                className="text-sm"
              />
              <Button type="submit" size="icon" variant="cta">
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
