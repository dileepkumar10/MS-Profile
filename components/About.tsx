import { ArrowUpRight, ScanLine } from "lucide-react";
import { profile } from "@/data/profile";
import { evolution } from "@/data/experience";
import { SectionHeading } from "./ui";

export function About() {
  return <section id="about" className="section container">
    <div className="about-grid" data-reveal>
      <div>
        <SectionHeading number="01" eyebrow="THE ENGINEER BEHIND THE WORK" title={profile.about.title} />
        <div className="about-experience"><strong>{profile.experience}</strong><span>across cloud, DevOps,<br />DevSecOps & AI engineering</span><ScanLine size={38} strokeWidth={1} aria-hidden="true" /></div>
      </div>
      <div className="about-copy">
        {profile.about.paragraphs.map((text) => <p key={text}>{text}</p>)}
        <a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
    <div className="principles grid gap-5 md:grid-cols-3" data-reveal>
      {profile.about.principles.map((item, index) => <article key={item.title}>
        <span className="mono">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
      </article>)}
    </div>
    <ol className="evolution" aria-label="Engineering evolution" data-reveal>
      {evolution.map((item) => <li key={item.title}><span className="evolution-dot" /><span className="mono">{item.year}</span><strong>{item.title}</strong><p>{item.text}</p></li>)}
    </ol>
  </section>;
}
