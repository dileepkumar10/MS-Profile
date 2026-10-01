"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { CodeXml, Pause, Play } from "lucide-react";
import { skillCategories } from "@/data/skills";

const categories = skillCategories.filter(({ id }) => ["microsoft", "devops", "ai", "security"].includes(id))
  .map(({ id, name }) => ({ id, name: id === "microsoft" ? "Exchange" : id === "ai" ? "AI" : id === "security" ? "Security" : name }));
const connections = [
  "M90 60H180L250 120H300",
  "M90 180H180L250 120H300",
  "M300 120H350L420 60H510",
  "M300 120H350L420 180H510",
];

export function SkillsCircuit() {
  const [paused, setPaused] = useState(false);

  return <div className="skills-circuit" data-paused={paused}>
    <div className="circuit-heading">
      <span>SKILLS IN MOTION</span>
      <IconButton className="circuit-toggle" aria-label={paused ? "Play skills animation" : "Pause skills animation"} onClick={() => setPaused(!paused)}>
        {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
      </IconButton>
    </div>
    <div className="circuit-map">
      <svg className="circuit-connections" viewBox="0 0 600 240" preserveAspectRatio="none" fill="none" aria-hidden="true">
        {connections.map((path, index) => <g key={path}>
          <path className="circuit-wire" d={path} />
          <path className={`circuit-runner circuit-runner-${index}`} d={path} pathLength="100" />
        </g>)}
      </svg>
      <div className="circuit-orbit" aria-hidden="true" />
      {categories.map(({ id, name }) => <div className={`circuit-node circuit-node-${id}`} key={id}>{name}</div>)}
      <div className="circuit-core" aria-hidden="true"><CodeXml size={44} strokeWidth={1.5} /></div>
    </div>
    <noscript><style>{`.circuit-runner { animation: none !important; } .circuit-toggle { display: none; }`}</style></noscript>
  </div>;
}
