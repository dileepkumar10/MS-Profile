import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";
import { PortfolioTheme } from "@/components/PortfolioTheme";
import "@/styles/globals.css";

const siteUrl = getSiteUrl();
const title = profile.seoTitle;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description: profile.description,
  applicationName: "Dileep Engineering Portfolio",
  authors: [{ name: profile.name }],
  ...(siteUrl && { alternates: { canonical: siteUrl.toString() } }),
  openGraph: { title, description: profile.description, type: "website", locale: "en_US", siteName: profile.name, ...(siteUrl && { url: siteUrl.toString() }) },
  twitter: { card: "summary_large_image", title, description: profile.description },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0b0e11", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PortfolioTheme>{children}</PortfolioTheme></body></html>;
}
