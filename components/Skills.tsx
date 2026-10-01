"use client";

import { useState } from "react";
import { Blocks, Cloud, Code2, Cpu, GitBranch, ShieldCheck, SquareTerminal } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading, Tags } from "./ui";
import Card from "@mui/material/Card";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const icons = { cloud: Cloud, devops: GitBranch, infrastructure: Blocks, security: ShieldCheck, programming: SquareTerminal, ai: Cpu, microsoft: Code2 };

export function Skills() {
  const [category, setCategory] = useState("all");
  const visible = skillCategories.filter((item) => category === "all" || item.id === category);

  return <section id="skills" className="section container">
    <div data-reveal><SectionHeading number="03" eyebrow="THE TOOLKIT" title={<>The right tool.<br /><span className="muted-heading">Not just another tool.</span></>} description="From infrastructure to intelligent assistance. A practical toolkit, organized by the work it enables." /></div>
    <ToggleButtonGroup className="filter-list" exclusive value={category} aria-label="Filter skill categories"
      onChange={(_event, value: string | null) => { if (value !== null) setCategory(value); }}>
      <ToggleButton value="all">All capabilities<span>{skillCategories.length}</span></ToggleButton>
      {skillCategories.map((item) => <ToggleButton key={item.id} value={item.id}>{item.name}</ToggleButton>)}
    </ToggleButtonGroup>
    <p className="sr-only" role="status">{visible.length} skill {visible.length === 1 ? "category" : "categories"} shown.</p>
    <div className="skills-grid">
      {visible.map((item) => {
        const Icon = icons[item.id];
        return <Card component="article" className="skill-card" key={item.id}>
          <div className="skill-top"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /><span className="mono">{item.caption}</span></div>
          <h3>{item.name}</h3><p>{item.summary}</p><Tags items={item.technologies} />
        </Card>;
      })}
    </div>
  </section>;
}
