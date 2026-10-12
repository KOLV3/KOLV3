import { StaticImageData } from "next/image";
import sandeshPhoto from "../../public/images/team/sandesh-sunar.jpg";

export interface CoFounder {
  name: string;
  initials: string;
  role: string;
  focus: string;
  discipline: string;
  location: string;
  bio: string;
  tags: string[];
  photo?: StaticImageData;
  hasPhoto: boolean;
  photoAlt?: string;
  photoSlotNote?: string;
}

export const coFounders: CoFounder[] = [
  {
    name: "Ushant Giri",
    initials: "UG",
    role: "Co-Founder",
    focus: "Technical Direction & Systems",
    discipline: "Core Engineering",
    location: "Sunsari, Nepal",
    bio: "Specializes in software architecture, Next.js web systems, responsive layouts, and performance optimization.",
    tags: ["Systems Architecture", "Next.js", "TypeScript"],
    hasPhoto: false,
    photoSlotNote: "Portrait slot ready",
  },
  {
    name: "Sandesh Sunar",
    initials: "SS",
    role: "Co-Founder",
    focus: "R&D, AI Integrations & Deployment",
    discipline: "R&D, AI & Deployment",
    location: "Sunsari, Nepal",
    bio: "Specializes in research and development, practical AI integrations, AI tools implementation, and production deployment workflows.",
    tags: ["R&D", "AI Integrations", "AI Tools Expert", "Deployment"],
    photo: sandeshPhoto,
    hasPhoto: true,
    photoAlt: "Sandesh Sunar, Co-Founder of KOLVE",
  },
  {
    name: "Bhishan Katwal",
    initials: "BK",
    role: "Co-Founder",
    focus: "Engineering & Digital Solutions",
    discipline: "Custom Tooling",
    location: "Sunsari, Nepal",
    bio: "Specializes in technical delivery, workflow automation, custom tooling, and practical digital implementations.",
    tags: ["Implementation", "Digital Solutions", "Automation"],
    hasPhoto: false,
    photoSlotNote: "Portrait slot ready",
  },
  {
    name: "Jeshis Jamarkatel",
    initials: "JJ",
    role: "Co-Founder",
    focus: "Frontend Engineering & UI/UX Design",
    discipline: "Frontend & UI/UX Design",
    location: "Sunsari, Nepal",
    bio: "Specializes in frontend development, systematic UI/UX workflows, Figma interfaces, Canva visuals, and Adobe editing software.",
    tags: ["Frontend", "UI/UX", "Figma", "Canva", "Adobe Suite"],
    hasPhoto: false,
    photoSlotNote: "Portrait slot ready",
  },
];
