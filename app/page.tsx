import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Achievements } from "@/components/Achievements";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MotionEnhancer } from "@/components/MotionEnhancer";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { getSiteUrl, resumeExists } from "@/lib/site";

export default function Home() {
  const siteUrl = getSiteUrl();
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.description,
    worksFor: { "@type": "Organization", name: profile.employer },
    sameAs: [profile.links.github, ...(profile.links.linkedin ? [profile.links.linkedin] : [])],
    knowsAbout: skillCategories.flatMap((category) => [...category.technologies]),
    ...(siteUrl && {
      url: siteUrl.toString(),
      image: new URL(profile.photo.avatar.src, siteUrl).toString(),
    }),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Hero resumeAvailable={resumeExists()} />
      <About /><Experience /><Skills /><ProjectGrid /><Achievements /><GitHubSection /><Contact />
    </main>
    <Footer /><MotionEnhancer />
    <noscript><style>{`.menu-toggle { display:none; } .nav-links { display:flex !important; position:static !important; flex-wrap:wrap; } .nav-inner { flex-wrap:wrap; height:auto; padding-block:14px; }`}</style></noscript>
  </>;
}
