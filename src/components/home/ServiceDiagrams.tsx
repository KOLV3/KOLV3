"use client";

export function WebServiceDiagram() {
  return (
    <div className="h-28 w-full rounded border border-border bg-bg p-2.5 font-mono text-[10px] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-1 text-text-muted">
        <span>src/app/layout.tsx</span>
        <span className="text-accent font-semibold">SSR + Static</span>
      </div>
      <div className="space-y-1.5 py-1">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-text">AppRouter.hydrate()</span>
          <span className="ml-auto text-[9px] text-text-muted">Turbopack</span>
        </div>
        <div className="h-2 w-full rounded bg-surface-muted overflow-hidden flex">
          <div className="w-[70%] bg-accent/80" />
          <div className="w-[30%] bg-border" />
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] text-text-muted pt-1 border-t border-border">
        <span>Next.js 16 + TypeScript</span>
        <span className="font-semibold text-accent">99+ Lighthouse</span>
      </div>
    </div>
  );
}

export function UiUxServiceDiagram() {
  return (
    <div className="h-28 w-full rounded border border-border bg-bg p-2.5 font-mono text-[10px] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-1 text-text-muted">
        <span>Figma Design Tokens</span>
        <span className="text-accent font-semibold">8pt Grid</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 py-1 items-center">
        <div className="h-10 rounded border border-border bg-surface flex flex-col items-center justify-center text-[9px]">
          <span className="font-bold text-accent">H1</span>
          <span className="text-[8px] text-text-muted">48px</span>
        </div>
        <div className="h-10 rounded border border-border bg-surface flex flex-col items-center justify-center text-[9px]">
          <span className="font-bold text-accent">P</span>
          <span className="text-[8px] text-text-muted">16px</span>
        </div>
        <div className="h-10 rounded border border-accent bg-accent/10 flex flex-col items-center justify-center text-[9px]">
          <span className="font-bold text-accent">Btn</span>
          <span className="text-[8px] text-text-muted">AA</span>
        </div>
        <div className="h-10 rounded border border-border bg-surface-muted flex flex-col items-center justify-center text-[9px]">
          <span className="font-bold text-text">Dark</span>
          <span className="text-[8px] text-text-muted">Sync</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] text-text-muted pt-1 border-t border-border">
        <span>Figma Auto-Layout</span>
        <span className="font-semibold text-accent">Tokens Export</span>
      </div>
    </div>
  );
}

export function GraphicServiceDiagram() {
  return (
    <div className="h-28 w-full rounded border border-border bg-bg p-2.5 font-mono text-[10px] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-1 text-text-muted">
        <span>Vector Geometry</span>
        <span className="text-accent font-semibold">Scalable SVG</span>
      </div>
      <div className="relative h-10 w-full rounded border border-border bg-surface flex items-center justify-center overflow-hidden">
        {/* Subtle SVG Grid Geometry */}
        <svg className="w-full h-full text-accent" viewBox="0 0 200 40" fill="none">
          <circle cx="100" cy="20" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="20" y1="20" x2="180" y2="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
          <path d="M 60 30 Q 100 5 140 30" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="flex items-center justify-between text-[9px] text-text-muted pt-1 border-t border-border">
        <span>Vector Marks & Guides</span>
        <span className="font-semibold text-accent">Print & Web</span>
      </div>
    </div>
  );
}

export function VideoServiceDiagram() {
  return (
    <div className="h-28 w-full rounded border border-border bg-bg p-2.5 font-mono text-[10px] flex flex-col justify-between overflow-hidden opacity-75">
      <div className="flex items-center justify-between border-b border-border pb-1 text-text-muted">
        <span>Timeline Sequence</span>
        <span className="text-text-muted">In Pipeline</span>
      </div>
      <div className="space-y-1.5 py-1">
        <div className="flex gap-1 h-3">
          <div className="w-[40%] rounded-xs bg-surface-muted border border-border" />
          <div className="w-[30%] rounded-xs bg-accent/40 border border-accent/60" />
          <div className="w-[30%] rounded-xs bg-surface-muted border border-border" />
        </div>
        <div className="flex gap-1 h-3">
          <div className="w-[20%] rounded-xs bg-accent/30" />
          <div className="w-[50%] rounded-xs bg-surface-muted" />
          <div className="w-[30%] rounded-xs bg-accent/30" />
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] text-text-muted pt-1 border-t border-border">
        <span>Post-Production Motion</span>
        <span>4K • Audio Cleanup</span>
      </div>
    </div>
  );
}

export function ThreeDServiceDiagram() {
  return (
    <div className="h-28 w-full rounded border border-border bg-bg p-2.5 font-mono text-[10px] flex flex-col justify-between overflow-hidden opacity-75">
      <div className="flex items-center justify-between border-b border-border pb-1 text-text-muted">
        <span>Isometric Wireframe</span>
        <span className="text-text-muted">In Pipeline</span>
      </div>
      <div className="relative h-10 w-full flex items-center justify-center">
        <svg className="h-10 w-16 text-text-muted" viewBox="0 0 40 30" fill="none" stroke="currentColor">
          <path d="M20 2 L36 10 L20 18 L4 10 Z" strokeWidth="1" />
          <path d="M4 10 L4 22 L20 30 L20 18" strokeWidth="1" />
          <path d="M36 10 L36 22 L20 30" strokeWidth="1" />
        </svg>
      </div>
      <div className="flex items-center justify-between text-[9px] text-text-muted pt-1 border-t border-border">
        <span>Architectural Modeling</span>
        <span>Mesh & Lighting</span>
      </div>
    </div>
  );
}

export function CustomSolutionDiagram() {
  return (
    <div className="h-28 w-full rounded border border-border bg-bg p-2.5 font-mono text-[10px] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-1 text-text-muted">
        <span>Custom Workflow API</span>
        <span className="text-accent font-semibold">Zero Lock-in</span>
      </div>
      <div className="space-y-1 py-1">
        <div className="flex items-center justify-between rounded bg-surface px-2 py-1 border border-border">
          <span className="text-text">Webhook Dispatch</span>
          <span className="text-accent text-[9px]">200 OK</span>
        </div>
        <div className="flex items-center justify-between rounded bg-surface px-2 py-1 border border-border">
          <span className="text-text">Data Sanitization</span>
          <span className="text-accent text-[9px]">Secure</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] text-text-muted pt-1 border-t border-border">
        <span>Practical Automation</span>
        <span className="font-semibold text-accent">Source Code Handoff</span>
      </div>
    </div>
  );
}
