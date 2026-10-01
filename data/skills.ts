export const skillCategories = [
  { id: "cloud", name: "Cloud", caption: "The foundation", summary: "Cloud infrastructure and services across two ecosystems.", technologies: ["AWS", "Microsoft Azure"] },
  { id: "devops", name: "DevOps", caption: "Build to delivery", summary: "Containers, orchestration and continuous delivery.", technologies: ["Kubernetes", "Docker", "Helm", "Jenkins", "GitHub Actions"] },
  { id: "infrastructure", name: "Infrastructure", caption: "Defined as code", summary: "Repeatable infrastructure with declarative and code-first tools.", technologies: ["Terraform", "CloudFormation", "AWS CDK", "CDK8s"] },
  { id: "security", name: "Security", caption: "Part of the pipeline", summary: "Code quality, application security and vulnerability analysis.", technologies: ["SonarQube", "Black Duck", "Fortify", "Trivy", "CAST"] },
  { id: "programming", name: "Programming", caption: "Practical automation", summary: "Scripts and applications that remove repetitive work.", technologies: ["Python", "PowerShell"] },
  { id: "ai", name: "AI", caption: "Context to action", summary: "Connecting AI assistance to engineering tools and workflows.", technologies: ["GitHub Copilot", "MCP", "AI Agents", "LLM applications"] },
  { id: "microsoft", name: "Microsoft", caption: "Enterprise systems", summary: "Cloud messaging, identity and customer-facing troubleshooting.", technologies: ["Exchange Online", "Microsoft 365", "Entra ID"] },
] as const;
