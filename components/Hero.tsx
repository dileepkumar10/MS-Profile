import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { ArrowDown, ArrowUpRight, GitFork } from "lucide-react";
import { profile } from "@/data/profile";
import { ExternalLink, ResumeLink, Tags } from "./ui";

export function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  return <section id="home" className="hero-section">
    <div className="container hero">
      <Card className="profile-header">
        <div className="profile-banner">
          <div className="banner-copy">
            <div className="banner-topline">
              <div className="banner-brand" role="img" aria-label="Microsoft">
                <span className="mini-ms" aria-hidden="true"><i /><i /><i /><i /></span>
                <span aria-hidden="true">Microsoft</span>
              </div>
              <p className="eyebrow">{profile.headline[0]}</p>
            </div>
            <p className="banner-title">{profile.headline[1]}</p>
            <p className="banner-subtitle">From infrastructure to intelligent automation.</p>
          </div>
          <svg className="banner-art" viewBox="0 0 660 280" fill="none" aria-hidden="true">
            <defs>
              <pattern id="cover-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" stroke="#8cd9bf" strokeOpacity=".1" />
              </pattern>
            </defs>
            <rect width="660" height="280" fill="url(#cover-grid)" />
            <circle cx="390" cy="140" r="116" stroke="#a6e891" strokeOpacity=".12" />
            <circle cx="390" cy="140" r="78" stroke="#85b9ed" strokeOpacity=".15" />
            <path d="M128 78H226L287 140H352M130 218H229L289 156H352M428 140H483L530 83H620M428 156H485L531 219H622" stroke="#91bca2" strokeOpacity=".65" />
            <rect x="76" y="56" width="116" height="44" rx="8" fill="#172f28" stroke="#668b6b" />
            <rect x="74" y="196" width="116" height="44" rx="8" fill="#152a32" stroke="#517c91" />
            <rect x="344" y="101" width="92" height="78" rx="14" fill="#243e2d" stroke="#9bc789" />
            <path d="M377 127L362 140L377 153M403 127L418 140L403 153M395 121L385 159" stroke="#b9ec9f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="134" y="83" textAnchor="middle" fill="#c1dac6">CLOUD</text>
            <text x="132" y="223" textAnchor="middle" fill="#b6d8e8">DEVOPS</text>
            <circle cx="536" cy="76" r="5" fill="#a6e891" />
            <circle cx="535" cy="224" r="5" fill="#85b9ed" />
            <text x="558" y="81" fill="#c1dac6">AI</text>
            <text x="558" y="229" fill="#b6d8e8">BUILD</text>
          </svg>
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
            <h1>{profile.name}</h1>
            <p className="profile-role">{profile.role} at {profile.employer}</p>
            <p className="profile-domain">{profile.domain}</p>
            <p className="hero-description">{profile.introduction}</p>
            <Tags items={["Cloud", "DevOps", "DevSecOps", "AI Engineering"]} />
          </div>
          <div className="profile-controls">
            <div className="hero-actions">
              <Button variant="contained" className="button button-primary" href="#projects">View Projects <ArrowUpRight size={18} aria-hidden="true" /></Button>
              <ResumeLink available={resumeAvailable} />
            </div>
            <div className="hero-social">
              <ExternalLink href={profile.links.github}><GitFork size={16} aria-hidden="true" /> GitHub</ExternalLink>
              <span className="social-divider" />
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
