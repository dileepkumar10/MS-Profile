import { ChevronDown } from "lucide-react";
import { evolution } from "@/data/experience";
import { Tags } from "./ui";

export function CareerTimeline() {
  return <div className="career-timeline" aria-labelledby="career-title">
    <h3 id="career-title">An evolving engineering journey</h3>
    <p className="career-hint">Explore each chapter.</p>
    <ol aria-label="Engineering evolution">
      {evolution.map((chapter, index) => <li key={chapter.title} data-reveal>
        <details className="career-chapter" open={index === 1}>
          <summary>
            <span className="career-year">{chapter.year}</span>
            <span className="career-summary"><strong>{chapter.title}</strong><span>{chapter.subtitle}</span></span>
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <div className="career-detail"><p>{chapter.detail}</p><Tags items={chapter.technologies} /></div>
        </details>
      </li>)}
    </ol>
  </div>;
}
