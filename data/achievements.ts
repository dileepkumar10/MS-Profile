export const achievements = [
  { organization: "Microsoft", title: "CSS AI & Innovation Award", category: "AI & innovation", featured: true },
  { organization: "Infosys", title: "Insta Best Employee of Quarter", category: "Employee recognition", featured: false },
  { organization: "Infosys", title: "Rising Star Award", category: "Professional recognition", featured: false },
  { organization: "Microsoft", title: "Hackathon / Engineering Projects", category: "Building & collaboration", featured: false },
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
