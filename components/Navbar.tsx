"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/profile";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export function Navbar({ resumeAvailable }: { resumeAvailable: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 20);
      let current: string = "home";
      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 180) current = item.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1100px)");
    const close = () => setOpen(false);
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);

  return <AppBar component="header" position="sticky" color="transparent" elevation={0} className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <nav className="container nav-inner" aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <a href="#home" className="brand" aria-label={`${profile.name}, home`}>
        <span className="brand-mark">{profile.initials}<span>.</span></span>
        <span className="brand-name">dileep<span>.dev</span></span>
      </a>
      <IconButton className="menu-toggle" ref={toggle} type="button" aria-expanded={open} aria-controls="navigation-links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </IconButton>
      <div id="navigation-links" className={`nav-panel ${open ? "is-open" : ""}`}>
        <div className="nav-links">
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
        </div>
        <div className="nav-actions">
          <Button variant="outlined" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></Button>
          {profile.links.linkedin ? <Button variant="text" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></Button> : <span className="nav-unavailable">LinkedIn<small>Not linked yet</small></span>}
          <div className="nav-resume">{resumeAvailable ? <Button variant="outlined" href={profile.resume.publicPath} download={profile.resume.fileName}>Resume</Button> : <><Button variant="outlined" disabled>Resume</Button><small className="availability-note">PDF not added</small></>}</div>
        </div>
      </div>
    </nav>
  </AppBar>;
}
