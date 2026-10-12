"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Users,
  CheckCircle2,
} from "lucide-react";
import type { TimelineMilestone } from "@/lib/timeline";
import { TimelineCategoryBadge, TimelineStatusBadge } from "./TimelineCategoryBadge";

interface TimelineItemProps {
  milestone: TimelineMilestone;
  isLast?: boolean;
}

export function TimelineItem({ milestone, isLast = false }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = Boolean(
    milestone.details?.challenge ||
      milestone.details?.solution ||
      milestone.details?.story ||
      milestone.details?.outcome ||
      milestone.details?.technologies?.length
  );

  const isAchievement = milestone.category === "achievement";

  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      {/* Vertical Spine Line */}
      {!isLast && (
        <div
          className="absolute left-[15px] sm:left-[19px] top-9 bottom-0 w-[2px] bg-border transition-colors group-hover:bg-accent/40"
          aria-hidden="true"
        />
      )}

      {/* Timeline Node / Marker */}
      <div className="relative flex flex-col items-center shrink-0 mt-1">
        <div
          className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-105 ${
            isAchievement
              ? "bg-accent text-white border-accent shadow-xs"
              : milestone.featured
              ? "bg-surface-elevated text-accent border-accent"
              : milestone.status === "planned"
              ? "bg-surface-alt text-text-muted border-dashed border-border"
              : "bg-surface text-accent border-border"
          }`}
        >
          {isAchievement ? (
            <span className="font-mono text-xs font-bold">1st</span>
          ) : (
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                milestone.status === "completed"
                  ? "bg-accent"
                  : milestone.status === "in_progress"
                  ? "bg-amber-500"
                  : "bg-text-muted"
              }`}
            />
          )}
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 rounded-lg border transition-all duration-200 mb-8 p-5 sm:p-6 ${
          isAchievement
            ? "bg-surface border-accent/40 shadow-xs"
            : milestone.featured
            ? "bg-surface border-border shadow-2xs"
            : "bg-surface border-border hover:border-accent/30"
        }`}
      >
        {/* Header: Date, Badges & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <time
              dateTime={milestone.sortDate}
              className="font-mono text-xs text-text-muted font-medium"
            >
              {milestone.dateLabel}
            </time>
            <TimelineCategoryBadge category={milestone.category} />
          </div>
          <TimelineStatusBadge status={milestone.status} />
        </div>

        {/* Milestone Title */}
        <h3 className="mt-3 text-lg font-bold text-text sm:text-xl tracking-tight">
          {milestone.title}
        </h3>

        {/* Concise Summary */}
        <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
          {milestone.summary}
        </p>

        {/* Supporting Evidence Gallery (Real photos when available) */}
        {milestone.evidence && milestone.evidence.length > 0 && (
          <div className="mt-4 rounded-md border border-border bg-bg/60 p-3 sm:p-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-text mb-3">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Verified Photographic Evidence</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {milestone.evidence.map((item, idx) => {
                const isLandscape = item.aspectRatio === "landscape";
                const isWide = item.aspectRatio === "wide";
                const aspectClass = isLandscape
                  ? "aspect-[16/11]"
                  : isWide
                  ? "aspect-video"
                  : "aspect-square";

                return (
                  <div
                    key={idx}
                    className={`overflow-hidden rounded border border-border bg-surface flex flex-col ${
                      item.fullWidth ? "sm:col-span-2" : ""
                    }`}
                  >
                    {item.image && (
                      <div className={`relative ${aspectClass} w-full bg-surface-muted overflow-hidden`}>
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-cover object-top transition-transform duration-300 hover:scale-105"
                          sizes={item.fullWidth ? "(max-width: 768px) 100vw, 750px" : "(max-width: 640px) 100vw, 350px"}
                        />
                      </div>
                    )}
                    <div className="p-3">
                      <p className="text-xs font-bold text-text">{item.label}</p>
                      {item.description && (
                        <p className="mt-1 text-[11px] text-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Expandable Breakdown Drawer */}
        {hasDetails && (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls={`milestone-details-${milestone.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded px-1.5 py-0.5 -ml-1.5"
            >
              <span>{isExpanded ? "Hide detailed story" : "Read full story & breakdown"}</span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>

            {isExpanded && (
              <div
                id={`milestone-details-${milestone.id}`}
                className="mt-3 rounded-md border border-border bg-bg/50 p-4 space-y-3.5 text-xs text-text-muted transition-all"
              >
                {milestone.details?.story && (
                  <div>
                    <strong className="block text-text font-semibold mb-1">
                      Background & Motivation:
                    </strong>
                    <p className="leading-relaxed">{milestone.details.story}</p>
                  </div>
                )}

                {milestone.details?.challenge && (
                  <div>
                    <strong className="block text-text font-semibold mb-1">
                      The Challenge:
                    </strong>
                    <p className="leading-relaxed">{milestone.details.challenge}</p>
                  </div>
                )}

                {milestone.details?.solution && (
                  <div>
                    <strong className="block text-text font-semibold mb-1">
                      Our Approach & Solution:
                    </strong>
                    <p className="leading-relaxed">{milestone.details.solution}</p>
                  </div>
                )}

                {milestone.details?.outcome && (
                  <div className="flex items-start gap-2 pt-1 border-t border-border">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text font-semibold">Verified Outcome:</strong>
                      <span className="ml-1 leading-relaxed">{milestone.details.outcome}</span>
                    </div>
                  </div>
                )}

                {/* Participants */}
                {milestone.details?.participants && milestone.details.participants.length > 0 && (
                  <div className="pt-2 border-t border-border flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-mono text-text flex items-center gap-1">
                      <Users className="h-3 w-3 text-accent" />
                      <span>Contributors:</span>
                    </span>
                    {milestone.details.participants.map((person) => (
                      <span
                        key={person}
                        className="rounded bg-surface px-2 py-0.5 text-[10px] font-mono text-text border border-border"
                      >
                        {person}
                      </span>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                {milestone.details?.technologies && milestone.details.technologies.length > 0 && (
                  <div className="pt-2 border-t border-border flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-mono text-text flex items-center gap-1">
                      <Cpu className="h-3 w-3 text-accent" />
                      <span>Stack:</span>
                    </span>
                    {milestone.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-surface px-2 py-0.5 text-[10px] font-mono text-accent border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Milestone Links & Case Study Referrals */}
        {milestone.links && milestone.links.length > 0 && (
          <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-3">
            {milestone.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-xs font-semibold text-accent hover:underline group/link"
              >
                <span>{link.label}</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
