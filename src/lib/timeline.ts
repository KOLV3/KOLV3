import { StaticImageData } from "next/image";
import sandeshPhoto from "../../public/images/team/sandesh-sunar.jpg";
import ushantPhoto from "../../public/images/team/ushant-giri.jpg";
import coderushTeamPhoto from "../../public/images/team/coderush-team-victory.jpg";

export type MilestoneCategory =
  | "founding"
  | "achievement"
  | "project"
  | "growth"
  | "partnership"
  | "milestone"
  | "upcoming";

export type MilestoneStatus = "completed" | "in_progress" | "planned";
export type MilestoneVisibility = "published" | "draft";

export interface TimelineLink {
  label: string;
  href: string;
  type?: "case_study" | "internal" | "external";
}

export interface TimelineEvidenceItem {
  label: string;
  type: "photo" | "certificate" | "repo" | "metric";
  description?: string;
  image?: StaticImageData | string;
  fullWidth?: boolean;
  aspectRatio?: "square" | "landscape" | "wide";
}

export interface TimelineMilestone {
  id: string;
  sortDate: string; // ISO format (YYYY-MM-DD) for reliable chronological ordering
  dateLabel: string;
  title: string;
  category: MilestoneCategory;
  status: MilestoneStatus;
  visibility: MilestoneVisibility;
  featured?: boolean;
  summary: string;
  details?: {
    story?: string;
    challenge?: string;
    solution?: string;
    outcome?: string;
    technologies?: string[];
    participants?: string[];
  };
  evidence?: TimelineEvidenceItem[];
  links?: TimelineLink[];
}

export const milestones: TimelineMilestone[] = [
  // 1. Founding Story
  {
    id: "kolve-founding",
    sortDate: "2026-09-15",
    dateLabel: "September 2026",
    title: "Founding of KOLVE in Sunsari, Nepal",
    category: "founding",
    status: "completed",
    visibility: "published",
    featured: true,
    summary:
      "KOLVE was founded by four dedicated co-founders in Sunsari as an independent Digital Service Provider (DSP). We committed to direct creator-to-client collaboration and practical, unbloated technology.",
    details: {
      story:
        "Frustrated by agency models selling generic templates and inflated retainers, Ushant Giri, Sandesh Sunar, Bhishan Katwal, and Jeshis Jamarkatel established KOLVE. We united software engineering, interface design, automation, and creative production under one roof with zero middleman layers.",
      solution:
        "Adopted a problem-first methodology: thoroughly diagnosing business workflows before recommending or coding digital tools.",
      outcome:
        "Formed the core team and established our headquarters in Sunsari, Nepal.",
      participants: [
        "Ushant Giri",
        "Sandesh Sunar",
        "Bhishan Katwal",
        "Jeshis Jamarkatel",
      ],
    },
    links: [
      {
        label: "View Co-Founders",
        href: "/about#leadership",
        type: "internal",
      },
    ],
  },

  // 2. Project Milestone: KOLVE Accessible Design System
  {
    id: "kolve-design-system",
    sortDate: "2026-10-02",
    dateLabel: "October 2026",
    title: "Engineering the 5-Tier Accessible Token Architecture",
    category: "project",
    status: "completed",
    visibility: "published",
    featured: false,
    summary:
      "Built and open-documented an accessible color token system using the 60-30-10 distribution rule, achieving WCAG AA contrast compliance across warm cream light and charcoal dark themes.",
    details: {
      challenge:
        "Many digital products treat dark themes as crude inversions causing severe eye strain, while light palettes often feel cold and sterile.",
      solution:
        "Engineered a 5-tier warm cream light surface system paired with deep forest green accents, matched with a balanced charcoal dark palette that preserves optical hierarchy.",
      technologies: ["CSS Variables", "Tailwind CSS", "WCAG AA Contrast", "Next.js"],
      outcome:
        "Standardized interface tokens across all internal components and published an in-depth design study.",
    },
    links: [
      {
        label: "Read Design System Case Study",
        href: "/work/kolve-design-system",
        type: "case_study",
      },
    ],
  },

  // 3. Verified Achievement: FSU-CodeRush 2026 Hackathon Win (Team DeVTime)
  {
    id: "cct-campus-hackathon-win",
    sortDate: "2026-10-04",
    dateLabel: "October 3 - 4, 2026",
    title: "First Place Champions: FSU Code Rush 2026 (Team DeVTime)",
    category: "achievement",
    status: "completed",
    visibility: "published",
    featured: true,
    summary:
      "KOLVE founders competing as Team DeVTime won First Place at FSU-CodeRush 2026, a 24-hour hackathon organized by the Free Students' Union at Central Campus of Technology (CCT), Dharan. The team engineered 'CCT-Bus-Tracker' to solve campus student transit delays with live driver phone GPS tracking, ETA calculations, and an administrative oversight portal.",
    details: {
      challenge:
        "The competition challenge: 'Find the real problem of CCT college in Dharan and solve it within a 24-hour sprint.' Campus students faced daily uncertainty with college bus schedules, zero visibility into transit locations, and missed classes due to unpredictable transit delays.",
      solution:
        "Built 'CCT-Bus-Tracker' from scratch in 24 hours: 1) A driver app transmitting real-time mobile GPS coordinates, 2) A student dashboard featuring an interactive map, live bus positions, and dynamic ETA arrival calculation, and 3) A centralized web administrative panel for route management, schedule updates, transit notices, and push notifications.",
      outcome:
        "Awarded First Place Winner Trophy and Gold Medals by the Free Students' Union (FSU) at Central Campus of Technology (CCT), Dharan. Judged by Sanjeev Shrestha (CEO, Fifteen Roots), Campus Chief Basant Kumar Rai, FSU Event Co-Ordinator Namchhahang Rai, and Peshal Raj Karki.",
      participants: [
        "Bhishan Katwal",
        "Jeshis Jamarkatel",
        "Ushant Giri",
        "Sandesh Sunar",
        "Team DeVTime",
      ],
      technologies: [
        "Next.js",
        "Live GPS Telemetry",
        "Interactive Maps",
        "ETA Calculation",
        "Student Dashboard",
        "Driver App",
        "Admin Panel",
        "Push Notifications",
      ],
    },
    evidence: [
      {
        label: "Team DeVTime: 1st Place Winners at FSU-CodeRush 2026",
        type: "photo",
        fullWidth: true,
        aspectRatio: "landscape",
        description:
          "Bhishan Katwal, Jeshis Jamarkatel, Ushant Giri, and Sandesh Sunar holding the championship trophy and gold medals in front of the official FSU CCT Dharan banner.",
        image: coderushTeamPhoto,
      },
      {
        label: "Ushant Giri with Winner Trophy & Medal",
        type: "photo",
        aspectRatio: "square",
        description:
          "Co-Founder Ushant Giri celebrating the 24-hour hackathon victory at CCT Dharan.",
        image: ushantPhoto,
      },
      {
        label: "Sandesh Sunar with Winner Trophy & Medal",
        type: "photo",
        aspectRatio: "square",
        description:
          "Co-Founder Sandesh Sunar with the official gold medal and trophy.",
        image: sandeshPhoto,
      },
    ],
    links: [
      {
        label: "View Co-Founder Profiles",
        href: "/about#leadership",
        type: "internal",
      },
    ],
  },

  // 4. Company Milestone: Launching Platform with Zero-Exposure Pipeline
  {
    id: "platform-launch",
    sortDate: "2026-10-11",
    dateLabel: "October 2026",
    title: "Deploying Official Digital Platform & Secure Inquiry Pipeline",
    category: "milestone",
    status: "completed",
    visibility: "published",
    featured: false,
    summary:
      "Deployed KOLVE's official platform on edge static infrastructure with an intelligent client-side knowledge assistant, honeypot protection, and zero client secret leakage.",
    details: {
      challenge:
        "Traditional static websites lack interactive customer support and often leak API tokens or expose contact email addresses to automated spam scrapers.",
      solution:
        "Architected a static edge export with a client-side knowledge retrieval engine and multi-stage form verification, completely shielding private API credentials.",
      technologies: [
        "Next.js 16",
        "Edge Static Export",
        "Zero-Secret Security",
        "Client Knowledge Retrieval",
      ],
      outcome:
        "100% lighthouse performance, sub-second load times, and an automated audit verifying zero design token or security violations.",
    },
    links: [
      {
        label: "Read Security Pipeline Case Study",
        href: "/work/secure-inquiry-pipeline",
        type: "case_study",
      },
    ],
  },

  // 5. Growth Milestone: Expanded Backend and Database Capabilities
  {
    id: "backend-db-expansion",
    sortDate: "2026-10-12",
    dateLabel: "October 2026",
    title: "Standardizing Database and Backend Tooling (FastAPI, Supabase, Firebase)",
    category: "growth",
    status: "completed",
    visibility: "published",
    featured: false,
    summary:
      "Integrated specialized backend and database tooling into our standard service stack, supporting relational, realtime, and high-throughput Python API architectures.",
    details: {
      solution:
        "Validated reproducible setups for Supabase (PostgreSQL), Firebase (realtime synchronization), and FastAPI (high-performance Python microservices), expanding beyond standard web pages into full digital solutions.",
      technologies: ["Supabase", "FastAPI", "Firebase", "PostgreSQL", "TypeScript"],
      outcome:
        "Enabled rapid delivery of authenticated portals, dynamic backends, and internal workflow automations.",
    },
    links: [
      {
        label: "Explore Web & Backend Services",
        href: "/services/web-development",
        type: "internal",
      },
    ],
  },

  // 6. Upcoming Milestone: Media Pipeline Expansion (Video & 3D Visualization)
  {
    id: "media-pipeline-expansion",
    sortDate: "2026-11-30",
    dateLabel: "Q4 2026 (Planned)",
    title: "Launching Video Post-Production & 3D Spatial Visualization Services",
    category: "upcoming",
    status: "planned",
    visibility: "published",
    featured: false,
    summary:
      "Expanding KOLVE's creative services with dedicated video editing, color grading, motion graphics, and photorealistic 3D architectural rendering.",
    details: {
      story:
        "Currently in testing and tooling calibration. Planned for public availability once our rendering pipeline meets our strict quality and performance standards.",
      technologies: ["Blender", "Adobe Creative Suite", "3D Modeling", "Video Production"],
      outcome:
        "Targeted release in Q4 2026 for both local business promotional content and international product visualizations.",
    },
    links: [
      {
        label: "View Service Pipeline",
        href: "/services",
        type: "internal",
      },
    ],
  },

  // 7. Draft Milestone: Future Client Case Study (Non-public draft example)
  {
    id: "draft-client-case-study",
    sortDate: "2026-12-15",
    dateLabel: "December 2026 (Draft)",
    title: "Enterprise Web Solution Delivery",
    category: "project",
    status: "planned",
    visibility: "draft", // Stays in draft until real project is verified and completed
    featured: false,
    summary: "Internal draft for upcoming verified client delivery.",
  },
];

/**
 * Returns only published milestones sorted in chronological order (earliest to latest).
 */
export function getPublishedMilestones(): TimelineMilestone[] {
  return milestones
    .filter((m) => m.visibility === "published")
    .sort((a, b) => a.sortDate.localeCompare(b.sortDate));
}

/**
 * Returns only published milestones in reverse chronological order (latest first).
 */
export function getRecentMilestones(): TimelineMilestone[] {
  return milestones
    .filter((m) => m.visibility === "published")
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}
