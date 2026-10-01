import { ArrowRight, GitBranch, GitFork } from "lucide-react";
import { featuredProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { ExternalLink, Tags } from "./ui";
import Card from "@mui/material/Card";

export function GitHubSection() {
  const repositories = [featuredProject, ...projects].filter((project) => project.repository);
  return <section id="github" className="section section-tinted">
    <div className="container github-layout" data-reveal>
      <div className="github-copy"><GitFork size={33} strokeWidth={1.4} aria-hidden="true" /><p className="eyebrow">BEHIND THE INTERFACE</p><h2>The code tells<br />the rest of the story.</h2><p>Explore the projects, inspect the approach and follow what I build next. The interface is the starting point. The code shows how it comes together.</p><ExternalLink className="text-link" href={profile.links.github}>github.com/dileepkumar10</ExternalLink></div>
      <div className="repository-list">{repositories.map((project) => <Card component="article" className="repository-card" key={project.id}><div className="repository-heading"><GitBranch size={19} aria-hidden="true" /><span className="mono">FEATURED REPOSITORY</span></div><h3>{project.name}</h3><p>{project.description}</p><Tags items={project.technologies} />{project.repository && <ExternalLink className="text-link" href={project.repository}>Explore source <ArrowRight size={15} aria-hidden="true" /></ExternalLink>}</Card>)}</div>
    </div>
  </section>;
}
