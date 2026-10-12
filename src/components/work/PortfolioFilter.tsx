"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ProjectItem } from "../../lib/projects";
import {
  DesignSystemVisual,
  SecurityPipelineVisual,
} from "./ProjectVisuals";

interface PortfolioFilterProps {
  initialProjects: ProjectItem[];
}

const categories = [
  "All Projects",
  "UI/UX Systems",
  "Web Architecture",
  "Web Security & Custom Solutions",
];

export function PortfolioFilter({ initialProjects }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = initialProjects.filter((project) => {
    if (activeCategory === "All Projects") return true;
    if (activeCategory === "UI/UX Systems") {
      return project.category.includes("UI/UX");
    }
    if (activeCategory === "Web Architecture") {
      return (
        project.category.includes("Web Architecture") ||
        project.tools.includes("Next.js 16")
      );
    }
    if (activeCategory === "Web Security & Custom Solutions") {
      return (
        project.category.includes("Security") ||
        project.category.includes("Custom")
      );
    }
    return true;
  });

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Project categories">
        {categories.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(category)}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
                isSelected
                  ? "bg-accent text-on-accent shadow-sm"
                  : "bg-surface-muted text-text-muted hover:text-text hover:border-accent border border-border"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Filtered Project Cards Grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.length === 0 ? (
          <div className="col-span-2 rounded-md border border-border bg-surface p-12 text-center">
            <FolderKanban className="mx-auto h-8 w-8 text-text-muted" />
            <h4 className="mt-3 text-sm font-bold text-text">No case studies in this category yet</h4>
            <p className="mt-1 text-xs text-text-muted">
              We are packaging new verified case studies. You can request private portfolio demos directly from our co-founders.
            </p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col justify-between p-6 sm:p-8 space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent">{project.type}</Badge>
                  <span className="text-xs font-mono text-text-muted">{project.category}</span>
                </div>

                {/* Visual Architecture Representation */}
                {project.slug === "kolve-design-system" && <DesignSystemVisual />}
                {project.slug === "secure-inquiry-pipeline" && <SecurityPipelineVisual />}

                <div>
                  <h3 className="text-xl font-bold text-text hover:text-accent transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="mt-2 text-xs text-text-muted leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded bg-surface-muted px-2 py-0.5 text-[11px] text-text border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline"
                >
                  <span>Read full case study breakdown</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
