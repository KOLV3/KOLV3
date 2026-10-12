"use client";

import { useState } from "react";
import { Check, Layers, Code, Palette, Cpu, Sparkles } from "lucide-react";

export function HeroVisualCanvas() {
  const [activeTab, setActiveTab] = useState<"system" | "architecture" | "tokens">("system");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const tokens = [
    { label: "Light BG", hex: "#FDFCF3", role: "60% Base Canvas" },
    { label: "Light Surface", hex: "#FFFAF0", role: "30% Structural Cards" },
    { label: "Light Alt", hex: "#FFF8DC", role: "Section Contrast" },
    { label: "Forest Accent", hex: "#245C45", role: "10% Focus & Action" },
    { label: "Dark Canvas", hex: "#151714", role: "Dark Mode Base" },
    { label: "Sage Accent", hex: "#B7D7A8", role: "Dark Mode Focus" },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="w-full rounded-lg border border-border bg-surface shadow-xl transition-all overflow-hidden">
      {/* Workbench Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface-alt px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          </div>
          <span className="font-mono text-[11px] text-text-muted ml-1">kolve-dsp / workbench.tsx</span>
        </div>

        {/* Workbench Tabs */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("system")}
            className={`flex items-center gap-1 rounded px-2 py-1 font-mono text-[10px] transition-colors ${
              activeTab === "system"
                ? "bg-surface text-accent font-semibold shadow-sm border border-border"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Layers className="h-3 w-3" />
            <span>UI System</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1 rounded px-2 py-1 font-mono text-[10px] transition-colors ${
              activeTab === "architecture"
                ? "bg-surface text-accent font-semibold shadow-sm border border-border"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Cpu className="h-3 w-3" />
            <span>Architecture</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tokens")}
            className={`flex items-center gap-1 rounded px-2 py-1 font-mono text-[10px] transition-colors ${
              activeTab === "tokens"
                ? "bg-surface text-accent font-semibold shadow-sm border border-border"
                : "text-text-muted hover:text-text"
            }`}
          >
            <Palette className="h-3 w-3" />
            <span>Design Tokens</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="p-5 sm:p-6 space-y-5">
        {activeTab === "system" && (
          <div className="space-y-4">
            {/* Live Micro UI Preview */}
            <div className="rounded border border-border bg-bg p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2.5">
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                  Component Architecture Preview
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-accent font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Pre-Hydration Active
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1 rounded bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent">
                  <Check className="h-3 w-3" />
                  WCAG AA Validated
                </span>
                <span className="inline-flex items-center gap-1 rounded border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text">
                  Multi-Theme Token
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-surface-muted px-2 py-1 text-[11px] font-mono text-text-muted">
                  0ms FOUC
                </span>
              </div>

              {/* Sample Code / Token inspect line */}
              <div className="rounded bg-surface p-2.5 font-mono text-[11px] text-text border border-border space-y-1">
                <div className="text-text-muted">&#47;&#47; Semantic Token Formula</div>
                <div className="text-accent font-semibold">
                  tokens: &#123; bg: &quot;60%&quot;, surface: &quot;30%&quot;, accent: &quot;10%&quot; &#125;
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded border border-border bg-surface-alt p-2.5">
                <span className="block text-sm font-bold text-accent font-mono">4.5 : 1</span>
                <span className="block text-[10px] text-text-muted">Minimum Contrast</span>
              </div>
              <div className="rounded border border-border bg-surface-alt p-2.5">
                <span className="block text-sm font-bold text-accent font-mono">100%</span>
                <span className="block text-[10px] text-text-muted">Prerendered HTML</span>
              </div>
              <div className="rounded border border-border bg-surface-alt p-2.5">
                <span className="block text-sm font-bold text-accent font-mono">&lt; 1s</span>
                <span className="block text-[10px] text-text-muted">Edge Loading</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="space-y-4">
            <div className="rounded border border-border bg-bg p-4 space-y-3">
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">
                Static Edge Deployment Pipeline
              </span>

              {/* Flowchart Representation */}
              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 rounded bg-surface p-2 border border-border">
                  <Code className="h-4 w-4 text-accent" />
                  <span className="text-text font-semibold">1. Next.js 16 App Router</span>
                  <span className="text-[10px] text-text-muted ml-auto">TypeScript</span>
                </div>
                <div className="flex justify-center text-text-muted text-xs">↓</div>
                <div className="flex items-center gap-2 rounded bg-surface p-2 border border-border">
                  <Layers className="h-4 w-4 text-accent" />
                  <span className="text-text font-semibold">2. Static Prerender Export</span>
                  <span className="text-[10px] text-text-muted ml-auto">HTML + JSON</span>
                </div>
                <div className="flex justify-center text-text-muted text-xs">↓</div>
                <div className="flex items-center gap-2 rounded bg-accent/10 p-2 border border-accent/30 text-accent font-semibold">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span>3. GitHub Pages Global CDN</span>
                  <span className="text-[10px] text-accent ml-auto">200 OK</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tokens" && (
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">
              60-30-10 Palette Token Register
            </span>

            <div className="grid grid-cols-2 gap-2">
              {tokens.map((token) => (
                <button
                  key={token.hex}
                  type="button"
                  onClick={() => handleCopy(token.hex)}
                  className="flex items-center gap-2 rounded border border-border bg-bg p-2 text-left hover:border-accent transition-colors group"
                >
                  <span
                    className="h-5 w-5 rounded border border-border shrink-0 shadow-xs"
                    style={{ backgroundColor: token.hex }}
                  />
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-semibold text-text truncate">
                      {token.label}
                    </span>
                    <span className="block font-mono text-[10px] text-text-muted group-hover:text-accent">
                      {copiedToken === token.hex ? "Copied!" : token.hex}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="border-t border-border bg-surface-alt px-4 py-2 flex items-center justify-between text-[10px] text-text-muted">
        <span>Verified Design Tokens</span>
        <span className="font-mono">Tailwind v4 Inline Theme</span>
      </div>
    </div>
  );
}
