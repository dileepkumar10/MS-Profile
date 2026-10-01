export const experience = [
  {
    employer: "Microsoft",
    role: "Technical Support Engineer",
    period: "2026 - Present",
    current: true,
    description: "Working in Exchange Online and Microsoft 365, with a focus on enterprise troubleshooting and customer-impacting technical issues.",
    highlights: ["Exchange Online", "Microsoft 365", "Entra ID", "Cloud services", "Enterprise troubleshooting"],
  },
  {
    employer: "Infosys",
    role: "DevOps / Cloud DevSecOps Engineer",
    period: "2021 - 2025",
    current: false,
    description: "Worked across cloud infrastructure, containers, delivery pipelines and security automation, building a foundation in reliable, repeatable engineering.",
    highlights: ["AWS & Azure", "Kubernetes & Docker", "CI/CD", "Terraform", "Security automation", "DevSecOps"],
  },
] as const;

export const evolution = [
  { year: "2021", title: "Cloud foundations", text: "Infosys / Cloud, DevOps & DevSecOps" },
  { year: "2026", title: "Enterprise perspective", text: "Microsoft / Exchange Online & Microsoft 365" },
  { year: "2026", title: "AI-assisted engineering", text: "Personal projects / MCP, Copilot & developer tools" },
] as const;

export const achievements = [
  { organization: "Microsoft", title: "CSS AI & Innovation Award", category: "AI & innovation", featured: true },
  { organization: "Infosys", title: "Insta Best Employee of Quarter", category: "Employee recognition", featured: false },
  { organization: "Infosys", title: "Rising Star Award", category: "Professional recognition", featured: false },
  { organization: "Microsoft", title: "Hackathon / project recognition", category: "Building & collaboration", featured: false },
] as const;

export const learning = [
  { title: "Cloud certifications", focus: "AWS & Azure" },
  { title: "Kubernetes", focus: "Cloud-native engineering" },
  { title: "Security", focus: "DevSecOps & cloud security" },
  { title: "AI", focus: "Agents & developer tooling" },
  { title: "Microsoft certifications", focus: "Microsoft 365 & Entra ID" },
] as const;

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  credentialUrl: string | null;
}

export const certifications: Certification[] = [];
