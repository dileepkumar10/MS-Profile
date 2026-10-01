"use client";

import { useId, useState } from "react";
import { ArrowDown, GitBranch, Layers3, Network } from "lucide-react";
import { dependencyEdges, dependencyNodes, impactCaseStudy } from "@/data/projects";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Scope = "all" | "direct" | "indirect";

export function ImpactDemo() {
  const [mode, setMode] = useState<"demo" | "architecture">("demo");
  const [scope, setScope] = useState<Scope>("all");
  const diagramId = useId();
  const count = dependencyNodes.filter((node) => node.kind !== "change" && (scope === "all" || node.kind === scope)).length;
  const included = (kind: string) => kind === "change" || scope === "all" || scope === kind;

  return <Paper variant="outlined" className="impact-workspace" id="impact-demo">
    <div className="workspace-toolbar">
      <div><span className="workspace-dot" /><span className="mono">impact-radar / explorer</span></div>
      <ToggleButtonGroup className="view-switch" exclusive value={mode} aria-label="Impact Radar view"
        onChange={(_event, value: "demo" | "architecture" | null) => { if (value !== null) setMode(value); }}>
        <ToggleButton value="demo"><Network size={14} aria-hidden="true" /> Demo</ToggleButton>
        <ToggleButton value="architecture"><Layers3 size={14} aria-hidden="true" /> Architecture</ToggleButton>
      </ToggleButtonGroup>
    </div>
    <div className="workspace-heading"><div><span className="eyebrow">EXAMPLE SCENARIO</span><h4>{impactCaseStudy.demoTitle}</h4></div><span className="badge badge-amber">ILLUSTRATIVE DEMO</span></div>
    {mode === "demo" ? <div className="demo-content">
      <div className="metric-grid">{impactCaseStudy.metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}<small>{metric.suffix}</small></strong><span>{metric.label}</span></div>)}</div>
      <div className="graph-toolbar">
        <span className="mono"><GitBranch size={14} aria-hidden="true" /> Dependency map</span>
        <ToggleButtonGroup className="graph-filters" exclusive value={scope} aria-label="Dependency visibility"
          onChange={(_event, value: Scope | null) => { if (value !== null) setScope(value); }}>
          {(["all", "direct", "indirect"] as const).map((value) => <ToggleButton key={value} value={value}>{value === "all" ? "All paths" : value === "direct" ? "Direct" : "Indirect"}</ToggleButton>)}
        </ToggleButtonGroup>
      </div>
      <div className="graph-scroll" role="region" aria-label="Dependency diagram, scroll horizontally to explore" tabIndex={0}>
      <svg className="dependency-graph" viewBox="0 0 680 236" role="img" aria-labelledby={`${diagramId}-title ${diagramId}-description`}>
        <title id={`${diagramId}-title`}>IdentityCore illustrative dependency graph</title>
        <desc id={`${diagramId}-description`}>One changed component, four directly affected components and eight indirectly affected components across three dependency levels. {scope === "all" ? "All paths highlighted." : `${scope} components highlighted; other paths remain visible for context.`}</desc>
        <defs><pattern id={`${diagramId}-dots`} width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#31404c" /></pattern></defs>
        <rect width="680" height="236" fill={`url(#${diagramId}-dots)`} />
        <g transform="translate(0 30)">
          {dependencyEdges.map(([source, target]) => {
            const from = dependencyNodes.find((node) => node.id === source)!;
            const to = dependencyNodes.find((node) => node.id === target)!;
            const startX = from.x + 102;
            const endX = to.x;
            const mid = (startX + endX) / 2;
            return <path key={`${source}-${target}`} className={`graph-edge ${included(to.kind) ? "is-highlighted" : "is-muted"}`} d={`M${startX},${from.y + 14} C${mid},${from.y + 14} ${mid},${to.y + 14} ${endX},${to.y + 14}`} fill="none" />;
          })}
          {dependencyNodes.map((node) => <g key={node.id} className={`graph-node ${node.kind} ${included(node.kind) ? "" : "is-muted"}`} transform={`translate(${node.x},${node.y})`}>
            <rect width="102" height="28" rx="5" /><circle cx="11" cy="14" r="2.5" /><text x="20" y="18">{node.label}</text>
          </g>)}
        </g>
      </svg>
      </div>
      <div className="graph-footer"><div><span className="legend-change">Changed</span><span className="legend-direct">Direct</span><span className="legend-indirect">Indirect</span></div><p role="status">{count} affected components highlighted</p></div>
      <details className="graph-text"><summary>View dependency map as text</summary><ul>{dependencyNodes.map((node) => <li key={node.id}>{node.label} - {node.kind === "change" ? "changed component" : `${node.kind} dependency, depth ${node.depth}`}</li>)}</ul></details>
    </div> : <div className="architecture-content">
      <p className="muted">From a proposed change to an evidence-informed engineering decision.</p>
      <ol className="architecture-stages">{impactCaseStudy.stages.map((stage, index) => <li key={stage.name}><div className="stage-index">{String(index + 1).padStart(2, "0")}</div><div><h5>{stage.name}</h5><p>{stage.detail}</p></div>{index < impactCaseStudy.stages.length - 1 && <ArrowDown size={14} aria-hidden="true" />}</li>)}</ol>
    </div>}
    <p className="demo-disclaimer">{impactCaseStudy.demoNotice}</p>
  </Paper>;
}
