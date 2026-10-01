import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return siteUrl ? [{ url: siteUrl.toString(), changeFrequency: "monthly", priority: 1 }] : [];
}
