import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  from: "bot" | "user";
  text: string;
  options?: string[];
}

type Step = "name" | "zip" | "phone" | "address" | "service" | "done";

const STEPS: Record<Step, { ask: string; next: Step | null; placeholder?: string; options?: string[] }> = {
  name: {
    ask: "Hi! 👋 I'm Maya from Capital Clean Care. What's your first name?",
    next: "zip",
    placeholder: "Your first name",
  },
  zip: {
    ask: "Nice to meet you, {name}! What's your zip code? We serve MD, DC & Northern VA.",
    next: "phone",
    placeholder: "e.g. 20850",
  },
  phone: {
    ask: "Great, we cover that area! What's the best phone number to reach you?",
    next: "address",
    placeholder: "(301) 555-0123",
  },
  address: {
    ask: "Perfect! And what's the service address? (Street address is fine)",
    next: "service",
    placeholder: "123 Main St, Bethesda MD",
  },
  service: {
    ask: "Almost done! What type of cleaning are you looking for?",
    next: "done",
    options: ["Standard Cleaning", "Deep Cleaning", "Move In / Move Out", "Post-Construction", "Recurring Service"],
  },
  done: { ask: "", next: null },
};

const QuoteChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("name");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: STEPS.name.ask }]);
    }
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  // Unread dot after 8s
  useEffect(() => {
    const t = setTimeout(() => { if (!open) setHasUnread(true); }, 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBot = (text: string, opts?: string[]) => {
    setMessages((prev) => [...prev, { from: "bot", text, options: opts }]);
  };

  const advance = async (value: string) => {
    if (done || sending) return;

    // Record answer
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);
    setMessages((prev) => [...prev, { from: "user", text: value }]);
    setInput("");

    const current = STEPS[step];
    const nextStep = current.next;

    if (!nextStep || nextStep === "done") {
      // All collected — send via FormSubmit
      setSending(true);
      try {
        await fetch("https://formsubmit.co/ajax/capitalcleancare@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New Chat Lead — ${newAnswers.name}`,
            _template: "table",
            _captcha: "false",
            Source: "Chat Widget",
            Name: newAnswers.name,
            "Zip Code": newAnswers.zip,
            Phone: newAnswers.phone,
            "Service Address": newAnswers.address,
            "Service Type": value,
          }),
        });
      } catch (e) {
        console.error("FormSubmit error:", e);
      } finally {
        setSending(false);
      }

      setDone(true);
      addBot(
        `Thank you, ${newAnswers.name}! ✅ Our team will contact you at ${newAnswers.phone} shortly to confirm your free quote.\n\n🎉 New clients get $25 OFF their first cleaning!`
      );
      return;
    }

    // Build next question (interpolate {name})
    const nextConfig = STEPS[nextStep];
    const text = nextConfig.ask.replace("{name}", newAnswers.name ?? "");
    setTimeout(() => addBot(text, nextConfig.options), 400);
    setStep(nextStep);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) advance(input.trim());
  };

  const restart = () => {
    setMessages([{ from: "bot", text: STEPS.name.ask }]);
    setStep("name");
    setAnswers({});
    setInput("");
    setDone(false);
  };

  const currentConfig = STEPS[step];
  const showInput = !done && !currentConfig.options;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-[4.5rem] right-4 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-xl flex items-center justify-center hover:scale-105 transition-transform md:bottom-6"
        aria-label={open ? "Close chat" : "Chat with us"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            )}
          </>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-[8rem] right-2 left-2 z-50 rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden md:left-auto md:right-4 md:w-[370px] md:bottom-24"
          style={{ maxHeight: "min(520px, 65vh)" }}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm shrink-0">
              M
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm leading-tight">Maya</p>
              <p className="text-xs opacity-70">Capital Clean Care · Online now</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="opacity-70 hover:opacity-100 transition-opacity">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                {m.from === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold shrink-0 mt-0.5">
                    M
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                  {m.options && !done && (
                    <div className="flex flex-col gap-1.5 mt-2.5">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => advance(opt)}
                          className="text-xs text-left bg-background border border-border rounded-xl px-3 py-2 hover:bg-accent/10 hover:border-accent/40 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold shrink-0">M</div>
                <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {done && (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-relaxed">
                  Info sent to our team!{" "}
                  <button onClick={restart} className="text-accent font-semibold underline underline-offset-2">
                    Start new chat
                  </button>
                </p>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Text input */}
          {showInput && (
            <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2 shrink-0">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={currentConfig.placeholder ?? "Type here…"}
                className="text-sm"
                type={step === "phone" ? "tel" : "text"}
              />
              <Button type="submit" size="icon" variant="cta" disabled={!input.trim()} aria-label="Send">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}

          <div className="px-4 pb-3 text-center shrink-0">
            <p className="text-xs text-muted-foreground/50">Capital Clean Care · Free Quote Chat</p>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteChatbot;
