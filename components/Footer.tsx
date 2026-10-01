import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">DK<span>.</span></span><span>{profile.name}</span></a><p>Cloud. DevOps. AI.<br /><span>Engineering for impact.</span></p><a href="#home" className="back-top">Back to top <ArrowUp size={16} aria-hidden="true" /></a></div><div className="footer-bottom"><span>&copy; {new Date().getFullYear()} {profile.name}</span><span>Personal portfolio. Views are my own, not those of my employers.</span><span className="mono">BUILT WITH INTENT.</span></div></div></footer>;
}
