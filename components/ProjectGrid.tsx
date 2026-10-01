import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading } from "./ui";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return <section id="projects" className="section section-tinted">
    <div className="container">
      <div className="section-heading-row" data-reveal><SectionHeading number="04" eyebrow="PERSONAL ENGINEERING PROJECTS" title={<>Built to solve.<br /><span className="muted-heading">Not just to showcase.</span></>} description="Projects I build outside my day-to-day Microsoft support role, exploring infrastructure, developer experience and artificial intelligence." /><span className="section-counter mono">06 PROJECTS / ONE MINDSET</span></div>
      <FeaturedProject />
      <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        <aside className="project-invitation" data-reveal><Code2 size={32} strokeWidth={1.2} aria-hidden="true" /><span className="eyebrow">THE NEXT BUILD</span><h3>Useful starts<br />with a problem.</h3><p>Explore the code, follow the work, or bring a technical challenge to the conversation.</p><a href={profile.links.github} target="_blank" rel="noopener noreferrer">Follow on GitHub <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></aside>
      </div>
    </div>
  </section>;
}
