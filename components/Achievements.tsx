import { ArrowUpRight, Award, BookOpen, Sparkles, Trophy } from "lucide-react";
import { achievements, certifications, learning } from "@/data/achievements";
import { ExternalLink, SectionHeading } from "./ui";
import Card from "@mui/material/Card";

export function Achievements() {
  return <section id="achievements" className="section container">
    <div data-reveal><SectionHeading number="05" eyebrow="RECOGNITION" title={<>Good work.<br /><span className="muted-heading">Recognized along the way.</span></>} description="Recognition across engineering, innovation and collaboration." /></div>
    <div className="achievements-grid">
      {achievements.map((item, index) => {
        const Icon = index === 0 ? Sparkles : index === 3 ? Award : Trophy;
        return <Card component="article" className={`achievement-card ${item.featured ? "featured-achievement" : ""}`} key={item.title} data-reveal>
          <div className="achievement-top"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /><span className="mono">{item.organization}</span></div>
          <div><p className="eyebrow">{item.category}</p><h3>{item.title}</h3></div>
        </Card>;
      })}
    </div>
    <div className="learning-heading" data-reveal><div><BookOpen size={19} aria-hidden="true" /><h3>Learning never ships a final version.</h3></div><p>{certifications.length ? "Verified credentials and the learning areas behind the work." : "Certification details will be added here when provided. These are learning categories, not earned credentials."}</p></div>
    {certifications.length > 0 && <div className="learning-grid">{certifications.map((item) => <Card component="article" className="learning-card" key={`${item.issuer}-${item.name}`} data-reveal><h4>{item.name}</h4><p>{item.issuer} / {item.issued}</p>{item.credentialUrl && <ExternalLink href={item.credentialUrl} className="text-link">View credential</ExternalLink>}</Card>)}</div>}
    <div className="learning-grid">{learning.map((item) => <Card component="article" className="learning-card" key={item.title} data-reveal><h4>{item.title}<ArrowUpRight size={14} aria-hidden="true" /></h4><p>{item.focus}</p><span className="availability-note">Credential details not added</span></Card>)}</div>
  </section>;
}
