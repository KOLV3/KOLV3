"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialSuggestions = [
  "What services do you offer?",
  "How does your process work?",
  "Who are the co-founders?",
  "How can I request a quote?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am KOLVE's digital assistant. How can I guide you regarding our services, philosophy, or team?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = { role: "user", content: query.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const botMsg: Message = {
        role: "assistant",
        content: data.reply || "Thank you. Feel free to contact our team at kolvedsp@gmail.com.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I had trouble connecting. You can email our co-founders directly at kolvedsp@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          aria-label="Open KOLVE Chat Assistant"
        >
          <MessageSquare className="h-5 w-5" />
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="flex h-[520px] w-[340px] sm:w-[380px] flex-col rounded-lg border border-border bg-surface shadow-2xl transition-colors">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-surface-alt px-4 py-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-accent text-on-accent text-xs font-bold">
                K
              </div>
              <div>
                <h4 className="text-xs font-bold text-text">KOLVE Assistant</h4>
                <span className="block text-[10px] text-text-muted">Digital Service Guide</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-text-muted hover:bg-surface-muted hover:text-text focus-visible:ring-2 focus-visible:ring-focus-ring"
              aria-label="Close Chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-surface-muted text-accent mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-md px-3 py-2 ${
                    msg.role === "user"
                      ? "bg-accent text-on-accent"
                      : "bg-surface-muted text-text border border-border"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 justify-start">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-surface-muted text-accent">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="rounded-md bg-surface-muted px-3 py-2 text-text-muted border border-border">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">Thinking...</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          {messages.length <= 2 && (
            <div className="border-t border-border bg-surface px-3 py-2 flex flex-wrap gap-1.5">
              {initialSuggestions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(item)}
                  className="rounded border border-border bg-surface-muted px-2 py-1 text-[11px] text-text-muted hover:text-text hover:border-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-border bg-surface p-2.5 flex items-center gap-2 rounded-b-lg"
          >
            <input
              type="text"
              placeholder="Ask about our services or process..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded border border-border bg-bg px-3 py-1.5 text-xs text-text placeholder:text-text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-8 w-8 items-center justify-center rounded bg-accent text-on-accent disabled:opacity-40 hover:bg-accent-hover transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring"
              aria-label="Send message"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
