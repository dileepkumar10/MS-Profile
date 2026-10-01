import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "R S Dileep Kumar - Cloud, DevOps and AI. Engineering for Impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "70px", color: "#f1f2ed", background: "#0b0e11", fontFamily: "sans-serif" }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}><span>{profile.name}</span><span style={{ color: "#a3e895" }}>ENGINEERING PORTFOLIO</span></div>
    <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 700, letterSpacing: "-3px" }}><span>Cloud. DevOps. AI.</span><span style={{ color: "#a3e895" }}>Engineering for Impact.</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a8b0b9" }}><span>Technical Support Engineer at Microsoft</span><span>github.com/dileepkumar10</span></div>
  </div>, size);
}
