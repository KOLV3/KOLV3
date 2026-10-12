import { StaticImageData } from "next/image";
import sandeshPhoto from "../../public/images/team/sandesh-sunar.jpg";
import ushantPhoto from "../../public/images/team/ushant-giri.jpg";
import bhishanPhoto from "../../public/images/team/bhishan-katwal.jpg";
import jeshisPhoto from "../../public/images/team/jeshis-jamarkatel.jpg";

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
    focus: "Technical Direction, Backend & Systems",
    discipline: "Backend & Systems",
    location: "Sunsari, Nepal",
    bio: "Specializes in software architecture, backend engineering, databases (Supabase, Firebase), and high-performance APIs with FastAPI and Next.js.",
    tags: ["Backend", "Supabase", "FastAPI", "Firebase", "Databases"],
    photo: ushantPhoto,
    hasPhoto: true,
    photoAlt: "Ushant Giri, Co-Founder of KOLVE",
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
    discipline: "Custom Tooling & Delivery",
    location: "Sunsari, Nepal",
    bio: "Specializes in technical delivery, workflow automation, custom tooling, and practical digital implementations.",
    tags: ["Implementation", "Digital Solutions", "Automation"],
    photo: bhishanPhoto,
    hasPhoto: true,
    photoAlt: "Bhishan Katwal, Co-Founder of KOLVE",
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
    photo: jeshisPhoto,
    hasPhoto: true,
    photoAlt: "Jeshis Jamarkatel, Co-Founder of KOLVE",
  },
];
