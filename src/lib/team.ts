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
    focus: "Product Design & UX",
    discipline: "UI/UX Systems",
    location: "Sunsari, Nepal",
    bio: "Specializes in interface design, multi-theme design systems, usability research, and deliberate visual hierarchy.",
    tags: ["UI/UX Systems", "Figma Tokens", "Usability"],
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
    focus: "Operations & Creative Production",
    discipline: "Operations & QA",
    location: "Sunsari, Nepal",
    bio: "Specializes in project coordination, client requirement analysis, creative asset production, and quality assurance.",
    tags: ["Operations", "Creative Assets", "QA"],
    hasPhoto: false,
    photoSlotNote: "Portrait slot ready",
  },
];
