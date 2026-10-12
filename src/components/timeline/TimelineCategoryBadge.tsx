import { MilestoneCategory, MilestoneStatus } from "@/lib/timeline";
import { Award, Compass, FolderGit2, TrendingUp, Users, Flag, Clock } from "lucide-react";

interface CategoryConfig {
  label: string;
  icon: typeof Award;
  className: string;
}

const categoryConfigs: Record<MilestoneCategory, CategoryConfig> = {
  founding: {
    label: "Founding Story",
    icon: Compass,
    className: "bg-surface-muted text-accent border-accent/20",
  },
  achievement: {
    label: "Verified Achievement",
    icon: Award,
    className: "bg-surface-muted text-accent font-semibold border-accent/40 shadow-2xs",
  },
  project: {
    label: "Case Study & Project",
    icon: FolderGit2,
    className: "bg-surface-alt text-text border-border",
  },
  growth: {
    label: "Technical Growth",
    icon: TrendingUp,
    className: "bg-surface-muted text-text border-border",
  },
  partnership: {
    label: "Partnership",
    icon: Users,
    className: "bg-surface-muted text-accent border-border",
  },
  milestone: {
    label: "Company Milestone",
    icon: Flag,
    className: "bg-surface text-text border-border",
  },
  upcoming: {
    label: "Planned Goal",
    icon: Clock,
    className: "bg-surface-alt/70 text-text-muted border-border border-dashed",
  },
};

export function TimelineCategoryBadge({ category }: { category: MilestoneCategory }) {
  const config = categoryConfigs[category] || categoryConfigs.milestone;
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono border ${config.className}`}
    >
      <Icon className="h-3 w-3 shrink-0" />
      <span>{config.label}</span>
    </span>
  );
}

export function TimelineStatusBadge({ status }: { status: MilestoneStatus }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-accent border border-border">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Verified
      </span>
    );
  }

  if (status === "in_progress") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-text border border-border">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
        In Progress
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-surface-alt text-text-muted border border-dashed border-border">
      <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
      Planned
    </span>
  );
}
