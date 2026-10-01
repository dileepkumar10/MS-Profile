import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading, Tags } from "./ui";

export function Experience() {
  return <section id="experience" className="section section-tinted">
    <div className="container experience-layout">
      <div data-reveal><SectionHeading number="02" eyebrow="EXPERIENCE" title={<>Different systems.<br />Same ownership.</>} description="A foundation in building cloud infrastructure. A present grounded in understanding enterprise systems." /><div className="section-side-note"><BriefcaseBusiness size={16} aria-hidden="true" /> Cloud engineering meets customer context.</div></div>
      <div className="experience-timeline">
        {experience.map((item) => <article key={item.employer} className={`experience-item ${item.current ? "current" : ""}`} data-reveal>
          <div className="experience-meta"><span className="mono">{item.period}</span>{item.current && <span className="badge">CURRENT</span>}</div>
          <h3>{item.employer}</h3><p className="experience-role">{item.role}</p>
          <p>{item.description}</p><Tags items={item.highlights} />
        </article>)}
      </div>
    </div>
  </section>;
}
