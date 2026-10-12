"use client";

import { ShieldCheck, Layers, CheckCircle2 } from "lucide-react";

export function DesignSystemVisual() {
  return (
    <div className="w-full rounded border border-border bg-bg p-3.5 font-mono text-[11px] space-y-2.5 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-2 text-text-muted">
        <span className="flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5 text-accent" />
          <span>design-system / tokens.css</span>
        </span>
        <span className="text-accent text-[10px] font-semibold">WCAG AA 4.5:1</span>
      </div>

      {/* Visual Token Comparison Strip */}
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        {/* Light theme swatch */}
        <div className="rounded border border-border bg-[#FDFCF3] text-[#151714] p-2 space-y-1">
          <div className="flex justify-between font-bold">
            <span>Light Palette</span>
            <span className="text-[#245C45]">#245C45</span>
          </div>
          <div className="flex gap-1">
            <span className="h-3 w-5 rounded-xs bg-[#FDFCF3] border border-[#245C45]/20" />
            <span className="h-3 w-5 rounded-xs bg-[#FFFAF0] border border-[#245C45]/20" />
            <span className="h-3 w-5 rounded-xs bg-[#FFF8DC] border border-[#245C45]/20" />
            <span className="h-3 w-5 rounded-xs bg-[#245C45]" />
          </div>
        </div>

        {/* Dark theme swatch */}
        <div className="rounded border border-[#333] bg-[#151714] text-[#FDFCF3] p-2 space-y-1">
          <div className="flex justify-between font-bold">
            <span>Dark Palette</span>
            <span className="text-[#B7D7A8]">#B7D7A8</span>
          </div>
          <div className="flex gap-1">
            <span className="h-3 w-5 rounded-xs bg-[#151714] border border-[#444]" />
            <span className="h-3 w-5 rounded-xs bg-[#242720] border border-[#444]" />
            <span className="h-3 w-5 rounded-xs bg-[#2E332A] border border-[#444]" />
            <span className="h-3 w-5 rounded-xs bg-[#B7D7A8]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 text-[10px] text-text-muted border-t border-border">
        <span>Pre-Hydration Inline Script</span>
        <span className="text-accent font-semibold">Zero FOUC</span>
      </div>
    </div>
  );
}

export function SecurityPipelineVisual() {
  return (
    <div className="w-full rounded border border-border bg-bg p-3.5 font-mono text-[11px] space-y-2.5 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-2 text-text-muted">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
          <span>security / pipeline.ts</span>
        </span>
        <span className="text-accent text-[10px] font-semibold">Zero Secret Leak</span>
      </div>

      {/* Visual Pipeline Schematic */}
      <div className="space-y-1.5 py-0.5 text-[10px]">
        <div className="flex items-center gap-2 rounded bg-surface p-1.5 border border-border">
          <span className="text-accent font-bold">01</span>
          <span className="text-text">Form Input Sanitization</span>
          <span className="ml-auto text-accent text-[9px]">Honeypot Active</span>
        </div>
        <div className="flex items-center gap-2 rounded bg-surface p-1.5 border border-border">
          <span className="text-accent font-bold">02</span>
          <span className="text-text">Direct Secure Web3Forms POST</span>
          <span className="ml-auto text-accent text-[9px]">Client Secret Free</span>
        </div>
        <div className="flex items-center gap-2 rounded bg-accent/10 p-1.5 border border-accent/30 text-accent">
          <CheckCircle2 className="h-3 w-3 shrink-0" />
          <span className="font-semibold">Direct Inbox Delivery</span>
          <span className="ml-auto text-[9px]">kolvedsp@gmail.com</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 text-[10px] text-text-muted border-t border-border">
        <span>Rate Limiter Guard</span>
        <span className="text-accent font-semibold">Zero 404 Guaranteed</span>
      </div>
    </div>
  );
}
