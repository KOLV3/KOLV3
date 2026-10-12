"use client";

import Image from "next/image";
import { Camera, MapPin } from "lucide-react";
import type { CoFounder } from "@/lib/team";

interface CoFounderCardProps {
  founder: CoFounder;
}

export function CoFounderCard({ founder }: CoFounderCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-lg border border-border bg-surface overflow-hidden shadow-xs hover:border-accent/50 hover:shadow-md transition-all duration-300">
      {/* 1:1 Aspect Ratio Photo Slot */}
      <div className="relative aspect-square w-full overflow-hidden bg-surface-muted border-b border-border">
        {founder.hasPhoto && founder.photo ? (
          <div className="relative h-full w-full">
            <Image
              src={founder.photo}
              alt={founder.photoAlt || `${founder.name} - Co-Founder at KOLVE`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
            {/* Subtle bottom gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Top Role Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="rounded bg-surface/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono font-medium text-accent border border-border shadow-xs">
                {founder.role}
              </span>
            </div>

            {/* Bottom Status Tag */}
            <div className="absolute bottom-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Co-Founder
              </span>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full flex flex-col items-center justify-center p-6 text-center select-none bg-surface-alt/40">
            {/* Subtle Technical Grid Background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Top Role Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="rounded bg-surface/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono font-medium text-accent border border-border shadow-xs">
                {founder.role}
              </span>
            </div>

            {/* Dedicated Initials Disc with Dashed Ring */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-accent/40 bg-surface text-accent font-bold text-2xl shadow-inner group-hover:border-accent group-hover:scale-105 transition-all duration-300">
              {founder.initials}
            </div>

            {/* Dedicated Portrait Slot Status Pill */}
            <div className="mt-3 relative inline-flex items-center gap-1.5 rounded-full bg-surface/90 backdrop-blur-xs px-2.5 py-1 border border-border text-[10px] font-mono text-text-muted shadow-2xs">
              <Camera className="h-3 w-3 text-accent" />
              <span>{founder.photoSlotNote || "Portrait slot ready"}</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Content & Bio */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-bold text-text group-hover:text-accent transition-colors">
              {founder.name}
            </h3>
            <span className="text-[10px] font-mono text-accent shrink-0 font-semibold">
              {founder.initials}
            </span>
          </div>

          <p className="text-xs font-semibold text-accent mt-0.5">
            {founder.focus}
          </p>

          <p className="mt-3 text-xs text-text-muted leading-relaxed">
            {founder.bio}
          </p>

          {/* Discipline Tags */}
          <div className="mt-4 flex flex-wrap gap-1">
            {founder.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono text-text border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Metadata */}
        <div className="mt-5 border-t border-border pt-3 flex items-center justify-between text-[10px] font-mono text-text-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3 text-accent" />
            {founder.location}
          </span>
          <span className="text-accent font-medium">
            {founder.discipline}
          </span>
        </div>
      </div>
    </div>
  );
}
