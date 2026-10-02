export const profile = {
  name: "R S Dileep Kumar",
  siteUrl: "https://dileep.devfolk.in",
  initials: "DK",
  role: "Technical Support Engineer \u2014 Exchange Online",
  employer: "Microsoft",
  domain: "Exchange Online / Microsoft 365",
  experience: "4+ years",
  headline: ["Cloud. DevOps. AI.", "Engineering for Impact."],
  heroLabel: "EXCHANGE ONLINE",
  seoTitle: "R S Dileep Kumar | Technical Support Engineer \u2014 Microsoft | Cloud, DevOps & AI",
  introduction: "Technical Support Engineer at Microsoft working on Exchange Online and Microsoft 365, with a background in Cloud, DevOps and DevSecOps and a passion for building AI-powered engineering tools.",
  description: "R S Dileep Kumar is a Technical Support Engineer at Microsoft working on Exchange Online, with a background in Cloud, DevOps, DevSecOps and AI-powered engineering projects.",
  personalFocus: "Outside my day-to-day role: AI agents, MCP integrations and developer productivity tools.",
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
    linkedin: "https://www.linkedin.com/in/r-s-dileep",
    email: null as string | null,
  },
  resume: {
    publicPath: "/resume.pdf",
    fileName: "R-S-Dileep-Kumar-Resume.pdf",
  },
  about: {
    title: "From Cloud Infrastructure to AI-Powered Engineering",
    paragraphs: [
      "I'm a Technical Support Engineer at Microsoft, currently working in the Exchange Online team, where I troubleshoot and resolve complex technical issues across Microsoft 365 and Exchange Online environments.",
      "My engineering journey started in 2021 at Infosys, where I worked in Cloud, DevOps and DevSecOps. I gained hands-on experience with AWS, Azure, Kubernetes, Docker, Terraform, CI/CD, cloud security and automation.",
      "Over time, my interest expanded from infrastructure and deployment automation into AI-powered engineering. I started building projects around GitHub Copilot, MCP, AI agents and LLM-powered developer tools, exploring how AI can make engineering workflows more efficient and intelligent.",
      "Today, my interests sit at the intersection of enterprise cloud support, DevOps and AI engineering.",
      "Outside my day-to-day role, I continue building practical engineering projects that solve real problems. One example is Impact Radar, a predictive change-impact and blast-radius analysis platform designed to help engineering teams understand the potential consequences of changes before deployment.",
      "I enjoy taking complex technical problems, breaking them down, and turning them into simple, automated and useful solutions.",
    ],
    building: [
      { title: "Cloud", text: "Cloud infrastructure, automation and enterprise cloud technologies." },
      { title: "DevOps", text: "Kubernetes, Docker, CI/CD, Infrastructure as Code and automation." },
      { title: "DevSecOps", text: "Security integrated into development and deployment workflows." },
      { title: "AI Engineering", text: "MCP servers, AI agents, GitHub Copilot integrations and developer productivity tools." },
    ],
    principles: [
      { title: "Build, Don't Just Learn", text: "I learn technology by turning ideas into working projects." },
      { title: "Automate the Repetitive", text: "If engineers repeatedly perform the same task, I look for opportunities to automate it." },
      { title: "Make Complexity Understandable", text: "I enjoy building tools that turn complex infrastructure and dependencies into something engineers can understand and act on." },
      { title: "Keep Exploring", text: "Cloud, DevOps and AI are constantly evolving. I enjoy experimenting with new technologies and applying them to practical engineering problems." },
    ],
    quote: "Don't just solve the problem once. Build something that makes the next solution easier.",
  },
  contact: {
    title: "Let's Build Something Useful.",
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
