"use client";

import { useState } from "react";
import { getPublishedMilestones, getRecentMilestones } from "@/lib/timeline";
import { TimelineItem } from "./TimelineItem";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { ArrowDownUp } from "lucide-react";

export function TimelineSection() {
  const [order, setOrder] = useState<"chronological" | "recent">("chronological");
  const milestones = order === "chronological" ? getPublishedMilestones() : getRecentMilestones();

  return (
    <section id="our-journey" className="border-t border-border bg-bg py-16 sm:py-24 transition-colors">
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div className="max-w-2xl">
            <Badge variant="accent">Milestones & Achievements</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
              Every meaningful project starts somewhere. This is the story of how KOLVE began,
              what we have built, what we have achieved, and where we are heading.
            </p>
          </div>

          {/* Chronological Sort Toggle */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setOrder(order === "chronological" ? "recent" : "chronological")}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-mono text-text hover:border-accent/40 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Toggle timeline order. Currently ${
                order === "chronological" ? "Earliest First" : "Most Recent First"
              }`}
            >
              <ArrowDownUp className="h-3.5 w-3.5 text-accent" />
              <span>
                Order: {order === "chronological" ? "Chronological (Past to Present)" : "Most Recent First"}
              </span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, idx) => (
            <TimelineItem
              key={milestone.id}
              milestone={milestone}
              isLast={idx === milestones.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
