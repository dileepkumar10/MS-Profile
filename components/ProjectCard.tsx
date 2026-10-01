import { Activity, Cloud, Container, Lightbulb, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";
import { ExternalLink, Tags } from "./ui";
import Card from "@mui/material/Card";

const icons = [Container, Cloud, ShieldCheck, Activity, Lightbulb];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[index % icons.length];
  return <Card component="article" className="project-card" data-reveal>
    <div className="project-card-top"><span className="project-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><span className="mono">{String(index + 2).padStart(2, "0")}</span></div>
    <p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
    <div className="project-problem"><span className="mono">WHY IT EXISTS</span><p>{project.problem}</p></div>
    <Tags items={project.technologies} />
    <div className="project-links">{project.repository ? <ExternalLink href={project.repository} className="text-link">GitHub repository</ExternalLink> : <span className="availability-note">Repository not linked yet</span>}{project.demo && <ExternalLink href={project.demo} className="text-link">Live demo</ExternalLink>}</div>
  </Card>;
}
