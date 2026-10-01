export const profile = {
  name: "R S Dileep Kumar",
  siteUrl: "https://dileep.devfolk.in",
  initials: "DK",
  role: "Technical Support Engineer",
  employer: "Microsoft",
  domain: "Exchange Online / Microsoft 365",
  experience: "4+ years",
  headline: ["Cloud. DevOps. AI.", "Engineering for Impact."],
  introduction: "Technical Support Engineer at Microsoft building cloud, DevOps, DevSecOps and AI-powered developer productivity solutions.",
  description: "Cloud, DevOps, DevSecOps and AI engineer building automation, developer productivity tools and cloud solutions.",
  photo: {
    src: "/dileep-kumar.webp",
    alt: "R S Dileep Kumar standing outdoors beside a pool",
    width: 960,
    height: 1280,
    avatar: {
      src: "/dileep-kumar-avatar.webp",
      alt: "Profile photo of R S Dileep Kumar",
      width: 430,
      height: 430,
    },
  },
  links: {
    github: "https://github.com/dileepkumar10",
    linkedin: null as string | null,
    email: null as string | null,
  },
  resume: {
    publicPath: "/resume.pdf",
    fileName: "R-S-Dileep-Kumar-Resume.pdf",
  },
  about: {
    title: "From running systems to rethinking how we work.",
    paragraphs: [
      "My foundation is in cloud infrastructure, DevOps and DevSecOps. At Infosys, I worked with AWS, Azure, Kubernetes, infrastructure as code and security tooling.",
      "Today, I work in Exchange Online and Microsoft 365 technical support at Microsoft. Enterprise troubleshooting keeps me close to the real-world complexity of cloud services and the people who depend on them.",
      "Alongside that work, I build AI agents, MCP integrations and developer tools. The thread is the same: understand the problem, make the system clearer, and automate what gets in the way.",
    ],
    principles: [
      { title: "Understand before automating", text: "Start with the system, its dependencies and the actual problem." },
      { title: "Make complexity visible", text: "Turn technical signals into context people can act on." },
      { title: "Keep engineering human", text: "Use AI to support judgment, not hide uncertainty." },
    ],
  },
  contact: {
    title: "Let's build something useful.",
    text: "Interested in cloud engineering, AI-powered developer tools, DevOps automation or solving complex technical problems?",
  },
} as const;

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;
