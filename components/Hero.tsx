import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { ArrowDown, ArrowUpRight, GitFork } from "lucide-react";
import { profile } from "@/data/profile";
import { ExternalLink, ResumeLink, Tags } from "./ui";
import { SkillsCircuit } from "./SkillsCircuit";

export function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  return <section id="home" className="hero-section">
    <div className="container hero">
      <Card className="profile-header">
        <div className="profile-banner">
          <div className="banner-copy" data-reveal>
            <div className="banner-topline">
              <div className="banner-brand" role="img" aria-label="Microsoft">
                <span className="mini-ms" aria-hidden="true"><i /><i /><i /><i /></span>
                <span aria-hidden="true">Microsoft</span>
              </div>
              <p className="eyebrow">{profile.heroLabel}</p>
            </div>
            <h1 className="banner-title">{profile.headline[0]} <br />{profile.headline[1]}</h1>
            <p className="banner-subtitle hero-description">{profile.introduction}</p>
          </div>
          <SkillsCircuit />
        </div>
        <div className="profile-details">
          <Avatar className="profile-avatar">
            <Image
              src={profile.photo.avatar.src}
              alt={profile.photo.avatar.alt}
              width={profile.photo.avatar.width}
              height={profile.photo.avatar.height}
              sizes="(max-width: 519px) 128px, 176px"
              preload
            />
          </Avatar>
          <div className="profile-identity">
            <h2>{profile.name}</h2>
            <p className="profile-role">{profile.role} at {profile.employer}</p>
            <p className="profile-domain">{profile.domain}</p>
            <p className="profile-focus">{profile.personalFocus}</p>
            <Tags items={["Cloud", "DevOps", "DevSecOps", "AI Engineering"]} />
          </div>
          <div className="profile-controls">
            <div className="hero-actions">
              <Button variant="contained" className="button button-primary" href="#projects">View My Work <ArrowUpRight size={18} aria-hidden="true" /></Button>
              <ExternalLink href={profile.links.github} className="button button-secondary"><GitFork size={18} aria-hidden="true" />GitHub</ExternalLink>
              <ResumeLink available={resumeAvailable} />
            </div>
            <div className="hero-social">
              {profile.links.linkedin ? <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink> : <span className="muted">LinkedIn <span className="inline-note">not linked yet</span></span>}
            </div>
          </div>
          <div className="hero-footnote">
            <div><span className="mini-ms" aria-hidden="true"><i /><i /><i /><i /></span><span>Currently at <strong>Microsoft</strong></span><span className="footnote-slash">/</span><span>Previously <strong>Infosys</strong></span></div>
            <a href="#about">A little context <ArrowDown size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </Card>
    </div>
  </section>;
}
