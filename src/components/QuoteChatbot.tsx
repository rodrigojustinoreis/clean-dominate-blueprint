import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  from: "bot" | "user";
  text: string;
}

interface LeadData {
  name: string;
  zip: string;
  phone: string;
  address: string;
}

const GREETING =
  "Hi! 👋 I'm Maya from Capital Clean Care. How can I help you today? I can answer questions about our services or get you a free quote!";

const sendLeadEmail = async (lead: LeadData) => {
  try {
    await fetch("https://formsubmit.co/ajax/capitalcleancare@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New Chat Lead — ${lead.name}`,
        _template: "table",
        _captcha: "false",
        Source: "AI Chat Widget",
        Name: lead.name,
        Phone: lead.phone,
        "Zip Code": lead.zip,
        "Service Address": lead.address,
      }),
    });
  } catch (e) {
    console.error("Email send error:", e);
  }
};

const QuoteChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show greeting when chat opens for the first time
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: GREETING }]);
    }
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Show pulsing unread dot after 8s if chat never opened
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setHasUnread(true);
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading || leadDone) return;

    const userMsg: Message = { from: "user", text: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    // Build history for API
    const apiMessages = updatedMessages.map((m) => ({
      role: m.from === "user" ? "user" : "assistant",
      content: m.text,
    }));

    try {
      const res = await fetch("/.netlify/functions/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();
      const botReply =
        data.reply ??
        "Sorry, something went wrong. Please call us at (240) 704-2551.";

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);

      if (data.leadComplete && data.leadData) {
        setLeadDone(true);
        await sendLeadEmail(data.leadData);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, I'm having trouble connecting. Please call us at (240) 704-2551 or fill out our quote form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const restart = () => {
    setMessages([{ from: "bot", text: GREETING }]);
    setLeadDone(false);
    setInput("");
  };

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
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm leading-tight">Maya</p>
              <p className="text-xs opacity-70">Capital Clean Care · Online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.from === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-xs shrink-0 mt-0.5">
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
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-xs shrink-0">
                  M
                </div>
                <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}

            {/* Lead captured confirmation */}
            {leadDone && (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-3 flex items-start gap-2 mt-2">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-foreground leading-relaxed">
                  Your info was sent to our team! We'll reach out shortly.{" "}
                  <button
                    onClick={restart}
                    className="text-accent font-semibold underline underline-offset-2"
                  >
                    New chat
                  </button>
                </p>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {!leadDone && (
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-border flex gap-2 shrink-0"
            >
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="text-sm"
                disabled={loading}
              />
              <Button
                type="submit"
                size="icon"
                variant="cta"
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          )}

          {/* Footer */}
          <div className="px-4 pb-3 text-center shrink-0">
            <p className="text-xs text-muted-foreground/50">
              Capital Clean Care AI Assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteChatbot;
