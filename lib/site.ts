import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";

export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const value = configured || profile.siteUrl;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin with no path, credentials, query or fragment.");
  }
  return url;
}

export function resumeExists(): boolean {
  return existsSync(path.join(process.cwd(), "public", profile.resume.publicPath.slice(1)));
}
