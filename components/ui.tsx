import type { ReactNode } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { profile } from "@/data/profile";

export function SectionHeading({ number, eyebrow, title, description }: {
  number: string; eyebrow: string; title: ReactNode; description?: string;
}) {
  return <div className="section-heading">
    <p className="eyebrow"><span>{number} /</span> {eyebrow}</p>
    <Typography component="h2" variant="h2">{title}</Typography>
    {description && <p className="section-description">{description}</p>}
  </div>;
}

export function ExternalLink({ href, children, className = "" }: {
  href: string; children: ReactNode; className?: string;
}) {
  const content = <>{children}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></>;
  return className.split(" ").includes("button") ?
    <Button href={href} target="_blank" rel="noopener noreferrer" variant="outlined" className={className}>{content}</Button> :
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</Link>;
}

export function ResumeLink({ available, statusId = "resume-status" }: { available: boolean; statusId?: string }) {
  return <div className="resume-control">
    {available ? <Button variant="outlined" className="button button-secondary" href={profile.resume.publicPath} download={profile.resume.fileName}>
      <Download size={16} aria-hidden="true" />Download Resume
    </Button> : <>
      <Button variant="outlined" className="button button-secondary" type="button" disabled aria-describedby={statusId}>
        <Download size={16} aria-hidden="true" />Download Resume
      </Button>
      <span id={statusId} className="availability-note">PDF not added yet</span>
    </>}
  </div>;
}

export function Tags({ items }: { items: readonly string[] }) {
  return <ul className="tags" aria-label="Technologies and focus areas">
    {items.map((item) => <Chip component="li" label={item} key={item} />)}
  </ul>;
}
