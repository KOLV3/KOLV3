"use client";

import { coFounders } from "@/lib/team";
import { CoFounderCard } from "./CoFounderCard";

export function CoFoundersGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {coFounders.map((founder) => (
        <CoFounderCard key={founder.name} founder={founder} />
      ))}
    </div>
  );
}
