import { ArrowUpRight, Cloud, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import Card from "@mui/material/Card";
import { profile } from "@/data/profile";
import { SectionHeading } from "./ui";
import { CareerTimeline } from "./CareerTimeline";
import { EngineeringPhilosophy } from "./EngineeringPhilosophy";

const buildIcons = [Cloud, GitBranch, ShieldCheck, Sparkles];

export function About() {
  return <section id="about" className="section container">
    <div data-reveal><SectionHeading number="01" eyebrow="THE ENGINEER BEHIND THE WORK" title={profile.about.title} /></div>
    <div className="about-grid">
      <div className="about-copy" data-reveal>
        <div className="about-experience"><strong>{profile.experience}</strong><span>professional experience<br />with a foundation in Cloud, DevOps &amp; DevSecOps</span></div>
        {profile.about.paragraphs.map((text) => <p key={text}>{text}</p>)}
        <a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <CareerTimeline />
    </div>
    <div className="what-i-build">
      <h3 data-reveal>What I Build</h3>
      <div className="build-grid">
        {profile.about.building.map((item, index) => {
          const Icon = buildIcons[index];
          return <Card component="article" className="build-card" key={item.title} data-reveal>
            <Icon size={25} aria-hidden="true" /><h4>{item.title}</h4><p>{item.text}</p>
          </Card>;
        })}
      </div>
    </div>
    <EngineeringPhilosophy />
  </section>;
}
