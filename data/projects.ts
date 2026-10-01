export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  technologies: string[];
  repository: string | null;
  demo: string | null;
}

export const featuredProject: Project = {
  id: "impact-radar",
  name: "Impact Radar",
  category: "Predictive change intelligence",
  description: "A product-agnostic Predictive Change Impact & Blast Radius Analysis platform.",
  problem: "Engineering teams often discover the impact of a change only after deployment or failure.",
  technologies: ["Python", "FastAPI", "React", "React Flow", "GitHub", "AI / LLM"],
  repository: "https://github.com/dileepkumar10/Impact-Radar2",
  demo: null,
};

export const projects: Project[] = [
  {
    id: "kubernetes-mcp",
    name: "Kubernetes MCP",
    category: "AI x infrastructure",
    description: "A Kubernetes assistant for GitHub Copilot, connecting natural language to cluster context and AI-assisted troubleshooting.",
    problem: "Reduce repetitive kubectl usage and simplify Kubernetes operations.",
    technologies: ["Kubernetes", "MCP", "GitHub Copilot"],
    repository: null,
    demo: null,
  },
  {
    id: "aws-mcp",
    name: "AWS MCP Server",
    category: "AI x cloud",
    description: "An AI/MCP project for interacting with AWS resources through natural language and developer-oriented workflows.",
    problem: "Make cloud resource interaction more accessible in the developer workflow.",
    technologies: ["AWS", "MCP", "AI"],
    repository: null,
    demo: null,
  },
  {
    id: "sonarqube-mcp",
    name: "SonarQube MCP",
    category: "AI x security",
    description: "An AI-assisted SonarQube integration that helps developers understand code-quality and security findings.",
    problem: "Bridge the gap between a reported finding and developer understanding.",
    technologies: ["SonarQube", "MCP", "AI"],
    repository: null,
    demo: null,
  },
  {
    id: "sre-live",
    name: "SRE Live Engineering",
    category: "Reliability engineering",
    description: "An engineering project focused on operational visibility, troubleshooting and reliability.",
    problem: "Bring operational context into the troubleshooting process.",
    technologies: ["SRE", "Operational visibility", "Troubleshooting"],
    repository: null,
    demo: null,
  },
  {
    id: "startup-analyst",
    name: "AI Startup Analyst",
    category: "AI x research",
    description: "An AI-based research platform for evaluating startup concepts, opportunities and technical feasibility.",
    problem: "Structure the exploration of an idea before investing in a build.",
    technologies: ["AI", "Research", "Feasibility analysis"],
    repository: null,
    demo: null,
  },
];

export const impactCaseStudy = {
  solution: "Impact Radar predicts potential impact and blast radius before deployment.",
  capabilities: ["Analyze code and configuration changes", "Map direct and indirect dependencies", "Surface confidence alongside impact", "Support safer deployment decisions"],
  stages: [
    { name: "Change", detail: "Start with a code or configuration change." },
    { name: "Evidence", detail: "Gather relevant context and dependency signals." },
    { name: "Impact", detail: "Identify components potentially affected by the change." },
    { name: "Blast radius", detail: "Trace direct and indirect dependency paths." },
    { name: "Action", detail: "Translate the analysis into engineering actions." },
    { name: "Decision", detail: "Use the evidence to inform a deployment decision." },
  ],
  metrics: [
    { value: "82", suffix: "/100", label: "Impact score" },
    { value: "95", suffix: "%", label: "Confidence" },
    { value: "12", suffix: "", label: "Affected" },
    { value: "4", suffix: "", label: "Direct" },
    { value: "8", suffix: "", label: "Indirect" },
    { value: "3", suffix: "", label: "Depth" },
    { value: "78", suffix: "", label: "Blast radius" },
  ],
  demoTitle: "IdentityCore / Entra mapping",
  demoNotice: "Illustrative demo from the supplied project example. Not live analysis, measured accuracy, or production telemetry. Component labels are schematic.",
};

export const dependencyNodes = [
  { id: "change", label: "IdentityCore", kind: "change", depth: 0, x: 38, y: 48 },
  { id: "d1", label: "Direct 01", kind: "direct", depth: 1, x: 205, y: 0 },
  { id: "d2", label: "Direct 02", kind: "direct", depth: 1, x: 205, y: 38 },
  { id: "d3", label: "Direct 03", kind: "direct", depth: 1, x: 205, y: 76 },
  { id: "d4", label: "Direct 04", kind: "direct", depth: 1, x: 205, y: 114 },
  { id: "i1", label: "Indirect 01", kind: "indirect", depth: 2, x: 367, y: 0 },
  { id: "i2", label: "Indirect 02", kind: "indirect", depth: 2, x: 367, y: 38 },
  { id: "i3", label: "Indirect 03", kind: "indirect", depth: 2, x: 367, y: 76 },
  { id: "i4", label: "Indirect 04", kind: "indirect", depth: 2, x: 367, y: 114 },
  { id: "i5", label: "Indirect 05", kind: "indirect", depth: 2, x: 367, y: 152 },
  { id: "i6", label: "Indirect 06", kind: "indirect", depth: 3, x: 529, y: 18 },
  { id: "i7", label: "Indirect 07", kind: "indirect", depth: 3, x: 529, y: 76 },
  { id: "i8", label: "Indirect 08", kind: "indirect", depth: 3, x: 529, y: 134 },
] as const;

type DependencyNodeId = typeof dependencyNodes[number]["id"];

export const dependencyEdges = [
  ["change", "d1"], ["change", "d2"], ["change", "d3"], ["change", "d4"],
  ["d1", "i1"], ["d1", "i2"], ["d2", "i3"], ["d3", "i4"], ["d4", "i5"],
  ["i1", "i6"], ["i3", "i7"], ["i5", "i8"],
] as const satisfies ReadonlyArray<readonly [DependencyNodeId, DependencyNodeId]>;
