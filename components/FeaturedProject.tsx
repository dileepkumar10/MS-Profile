import { ArrowRight, GitFork, Radar } from "lucide-react";
import { featuredProject, impactCaseStudy } from "@/data/projects";
import { ExternalLink, Tags } from "./ui";
import { ImpactDemo } from "./ImpactDemo";
import Card from "@mui/material/Card";

export function FeaturedProject() {
  return <Card component="article" className="featured-project" data-reveal>
    <div className="featured-header"><span className="eyebrow"><span className="status-light" /> FLAGSHIP PROJECT</span><span className="mono">01 / CHANGE INTELLIGENCE</span></div>
    <div className="featured-intro">
      <div className="featured-title"><span className="project-icon radar-icon"><Radar size={28} strokeWidth={1.5} aria-hidden="true" /></span><h3>{featuredProject.name}</h3><p>{featuredProject.description}</p></div>
      <div className="featured-pitch"><h4>See the impact.<br /><span>Before the deploy.</span></h4><p>{impactCaseStudy.solution}</p></div>
    </div>
    <div className="problem-solution"><span className="mono">THE PROBLEM</span><p>{featuredProject.problem}</p></div>
    <div className="pipeline" aria-label="Analysis pipeline">{impactCaseStudy.stages.map((stage, index) => <span key={stage.name}>{stage.name}{index < impactCaseStudy.stages.length - 1 && <ArrowRight size={13} aria-hidden="true" />}</span>)}</div>
    <ImpactDemo />
    <div className="featured-bottom"><div><Tags items={featuredProject.technologies} /><p>Code changes. Configuration changes. One connected view.</p></div>{featuredProject.repository && <ExternalLink className="button button-secondary" href={featuredProject.repository}><GitFork size={17} aria-hidden="true" /> View repository</ExternalLink>}{featuredProject.demo && <ExternalLink className="text-link" href={featuredProject.demo}>Live demo</ExternalLink>}</div>
  </Card>;
}
