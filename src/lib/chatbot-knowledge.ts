// Client-side knowledge engine for KOLVE Digital Assistant
// Enables the chatbot to function instantly on static hosts like GitHub Pages without requiring a backend server.

export interface ChatResponse {
  reply: string;
  suggestedActions?: { label: string; href?: string; prompt?: string }[];
}

export function getClientChatReply(userMessage: string): ChatResponse {
  const query = userMessage.trim().toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|greetings|namaste|good\s*(morning|afternoon|evening)|howdy)\b/i.test(query)) {
    return {
      reply:
        "Hello! Welcome to KOLVE. I am your digital guide. How can I help you today? You can ask me about our services, our team, our process, or how to get a quote for your project.",
      suggestedActions: [
        { label: "What services do you offer?", prompt: "What services do you offer?" },
        { label: "Who are the co-founders?", prompt: "Who are the co-founders?" },
        { label: "How does your process work?", prompt: "How does your process work?" },
        { label: "How can I request a quote?", prompt: "How can I request a quote?" },
      ],
    };
  }

  // Co-founders / Team / Leadership
  if (
    query.includes("founder") ||
    query.includes("team") ||
    query.includes("who are you") ||
    query.includes("who runs") ||
    query.includes("ushant") ||
    query.includes("sandesh") ||
    query.includes("bhishan") ||
    query.includes("jeshis")
  ) {
    return {
      reply:
        "KOLVE was co-founded by four dedicated individuals based in Sunsari, Nepal:\n\n• Ushant Giri - Technical Direction & Systems Development\n• Sandesh Sunar - Product Design & User Experience\n• Bhishan Katwal - Engineering & Digital Solutions\n• Jeshis Jamarkatel - Operations & Creative Production\n\nWhen you work with KOLVE, you collaborate directly with the creators building your solution, with zero middleman layers.",
      suggestedActions: [
        { label: "Read more on About Page", href: "/about/" },
        { label: "Discuss a Project", href: "/contact/" },
      ],
    };
  }

  // Services Overview
  if (
    query.includes("service") ||
    query.includes("what do you do") ||
    query.includes("what can you do") ||
    query.includes("offer") ||
    query.includes("capabilities")
  ) {
    return {
      reply:
        "KOLVE currently provides three active core services:\n\n1. Website & Web App Development - Modern, fast, and accessible web systems built with Next.js and TypeScript.\n2. UI/UX Design & Prototyping - Systematic Figma design systems, tokens, and responsive user flows.\n3. Graphic Design & Visual Identity - Brand marks, logos, visual standards, and marketing graphics.\n\nWe also have Video Editing & 3D Visualization coming soon.",
      suggestedActions: [
        { label: "Web Development Details", href: "/services/web-development/" },
        { label: "UI/UX Design Details", href: "/services/ui-ux-design/" },
        { label: "Graphic Design Details", href: "/services/graphic-design/" },
      ],
    };
  }

  // Web Development
  if (
    query.includes("web") ||
    query.includes("website") ||
    query.includes("development") ||
    query.includes("frontend") ||
    query.includes("full-stack") ||
    query.includes("code") ||
    query.includes("next.js") ||
    query.includes("react")
  ) {
    return {
      reply:
        "Our Website & Web Application Development service focuses on speed, accessibility, and purpose-built engineering:\n\n• Tech Stack: Next.js 16, TypeScript, React, Tailwind CSS\n• Standards: WCAG AA accessibility, sub-second load times, mobile responsiveness\n• Handoff: Full source code ownership with zero vendor lock-in\n\nWould you like to explore our technical case studies or start a project discussion?",
      suggestedActions: [
        { label: "View Web Development Service", href: "/services/web-development/" },
        { label: "Explore Our Work", href: "/work/" },
        { label: "Request a Proposal", href: "/contact/" },
      ],
    };
  }

  // UI/UX Design
  if (
    query.includes("ui") ||
    query.includes("ux") ||
    query.includes("figma") ||
    query.includes("wireframe") ||
    query.includes("prototype") ||
    query.includes("design system")
  ) {
    return {
      reply:
        "Our UI/UX Design service delivers production-ready interface systems:\n\n• Tools: Figma with auto-layout and responsive components\n• Deliverables: Interactive prototypes, design tokens (light and dark modes), and developer handoff specs\n• Approach: Focus on usability, clarity, and conversion rather than decorative vanity.",
      suggestedActions: [
        { label: "View UI/UX Service", href: "/services/ui-ux-design/" },
        { label: "See Design System Case Study", href: "/work/kolve-design-system/" },
      ],
    };
  }

  // Graphic Design / Branding
  if (
    query.includes("graphic") ||
    query.includes("logo") ||
    query.includes("brand") ||
    query.includes("identity") ||
    query.includes("typography") ||
    query.includes("banner")
  ) {
    return {
      reply:
        "Our Graphic Design & Visual Identity service crafts distinct, purposeful brand assets:\n\n• Vector logos and responsive brand marks\n• Consistent color palettes and typography rules\n• Social media graphics, digital banners, and marketing assets\n• Exported in scalable SVG, PNG, and print-ready formats.",
      suggestedActions: [
        { label: "View Graphic Design Service", href: "/services/graphic-design/" },
        { label: "Discuss Branding", href: "/contact/" },
      ],
    };
  }

  // Process / Workflow / How it works
  if (
    query.includes("process") ||
    query.includes("workflow") ||
    query.includes("how do you work") ||
    query.includes("steps") ||
    query.includes("timeline") ||
    query.includes("how does your process work")
  ) {
    return {
      reply:
        "We follow a disciplined 4-stage process to ensure quality and accountability:\n\n1. Problem Discovery - We dissect your actual operational or digital challenge.\n2. Architecture & Design - We craft prototypes, user flows, and technical blueprints.\n3. Iterative Build - Clean implementation with frequent Git commits and preview links.\n4. Verification & Delivery - Thorough testing across browsers and devices, followed by full source handoff.",
      suggestedActions: [
        { label: "Learn About Us", href: "/about/" },
        { label: "Start Discovery Call", href: "/contact/" },
      ],
    };
  }

  // Pricing / Quote / Cost / Budget / Hire
  if (
    query.includes("quote") ||
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("cost") ||
    query.includes("budget") ||
    query.includes("hire") ||
    query.includes("rate") ||
    query.includes("how much")
  ) {
    return {
      reply:
        "We do not use generic, inflated agency pricing or one-size-fits-all packages. Every engagement is scoped specifically based on your requirements, complexity, and timeline.\n\nWe provide transparent milestone estimates with zero hidden fees. To receive a detailed scope and timeline for your project, visit our contact page or email kolvedsp@gmail.com.",
      suggestedActions: [
        { label: "Request Project Scope", href: "/contact/" },
        { label: "Email Co-Founders", href: "mailto:kolvedsp@gmail.com" },
      ],
    };
  }

  // Location / Office / Where are you based
  if (
    query.includes("location") ||
    query.includes("where") ||
    query.includes("office") ||
    query.includes("country") ||
    query.includes("nepal") ||
    query.includes("sunsari") ||
    query.includes("city")
  ) {
    return {
      reply:
        "KOLVE is headquartered in Sunsari, Nepal. We serve both local Nepali businesses and international remote clients worldwide.",
      suggestedActions: [
        { label: "Contact Us", href: "/contact/" },
        { label: "About KOLVE", href: "/about/" },
      ],
    };
  }

  // Philosophy / Tagline / Mission
  if (
    query.includes("philosophy") ||
    query.includes("motto") ||
    query.includes("tagline") ||
    query.includes("mission") ||
    query.includes("purpose") ||
    query.includes("values")
  ) {
    return {
      reply:
        "Our core philosophy is:\n\n\"Real problems. Practical solutions. Built with purpose.\"\n\nOur tagline is \"Your problem, our solution.\" We prioritize honest software engineering, accessibility, and real business outcomes over vanity buzzwords.",
      suggestedActions: [
        { label: "Read Our Story", href: "/about/" },
      ],
    };
  }

  // Portfolio / Work / Case studies
  if (
    query.includes("work") ||
    query.includes("portfolio") ||
    query.includes("case study") ||
    query.includes("projects") ||
    query.includes("examples")
  ) {
    return {
      reply:
        "You can explore our documented case studies on our Work page. Every case study outlines the real objective, architectural approach, challenges overcome, and verified results.",
      suggestedActions: [
        { label: "Explore Our Work", href: "/work/" },
      ],
    };
  }

  // Contact / Email / Phone
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("talk") ||
    query.includes("call") ||
    query.includes("phone")
  ) {
    return {
      reply:
        "You can contact the KOLVE team through several channels:\n\n• Email: kolvedsp@gmail.com\n• Project Inquiry Form: /contact\n• Direct co-founder review within 24 hours.",
      suggestedActions: [
        { label: "Go to Contact Form", href: "/contact/" },
        { label: "Send Email Directly", href: "mailto:kolvedsp@gmail.com" },
      ],
    };
  }

  // Fallback for other queries
  return {
    reply:
      "Thank you for asking! KOLVE is a Digital Service Provider based in Sunsari, Nepal, specializing in Web Development, UI/UX Design, and Graphic Design.\n\nCould you specify whether you're looking for web development, design work, or would like to discuss a project with our co-founders?",
    suggestedActions: [
      { label: "Explore Services", href: "/services/" },
      { label: "Discuss a Project", href: "/contact/" },
      { label: "Email Co-Founders", href: "mailto:kolvedsp@gmail.com" },
    ],
  };
}
