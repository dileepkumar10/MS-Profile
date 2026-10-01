import { ArrowUpRight, GitFork, ContactRound, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ExternalLink, ResumeLink } from "./ui";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

export function Contact({ resumeAvailable }: { resumeAvailable: boolean }) {
  return <section id="contact" className="section contact-section">
    <div className="container" data-reveal>
      <p className="eyebrow"><span className="status-light" /> CONTACT / COLLABORATE / BUILD</p>
      <h2>{profile.contact.title}</h2><p className="contact-copy">{profile.contact.text}</p>
      <div className="contact-links">
        {profile.links.email ? <Link className="contact-card" href={`mailto:${profile.links.email}`}><Mail size={20} aria-hidden="true" /><span><strong>Email</strong><small>{profile.links.email}</small></span><ArrowUpRight size={17} aria-hidden="true" /></Link> : <Paper variant="outlined" className="contact-card unavailable"><Mail size={20} aria-hidden="true" /><span><strong>Email</strong><small>Address not added yet</small></span></Paper>}
        {profile.links.linkedin ? <ExternalLink className="contact-card" href={profile.links.linkedin}><ContactRound size={20} aria-hidden="true" /><span><strong>LinkedIn</strong><small>Let&apos;s connect</small></span></ExternalLink> : <Paper variant="outlined" className="contact-card unavailable"><ContactRound size={20} aria-hidden="true" /><span><strong>LinkedIn</strong><small>Profile not linked yet</small></span></Paper>}
        <ExternalLink className="contact-card" href={profile.links.github}><GitFork size={20} aria-hidden="true" /><span><strong>GitHub</strong><small>@dileepkumar10</small></span></ExternalLink>
      </div>
      <div className="contact-resume"><ResumeLink available={resumeAvailable} statusId="contact-resume-status" /></div>
    </div>
  </section>;
}
