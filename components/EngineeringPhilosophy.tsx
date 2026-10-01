import { profile } from "@/data/profile";

export function EngineeringPhilosophy() {
  return <section className="engineering-philosophy" aria-labelledby="philosophy-title">
    <div data-reveal><p className="eyebrow">PRINCIPLES / PRACTICE / PROGRESS</p><h3 id="philosophy-title">How I Think About Engineering</h3></div>
    <div className="philosophy-grid">
      {profile.about.principles.map((item, index) => <article key={item.title} data-reveal>
        <span className="mono">0{index + 1}</span><h4>{item.title}</h4><p>{item.text}</p>
      </article>)}
    </div>
    <blockquote data-reveal>{profile.about.quote}</blockquote>
  </section>;
}
