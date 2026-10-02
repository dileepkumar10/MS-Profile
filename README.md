# R S Dileep Kumar - Engineering Portfolio

A responsive, engineering-focused portfolio built with Next.js App Router, React,
TypeScript, Material UI, Emotion, Tailwind CSS, Framer Motion and Lucide icons. Page content is
composed on the server, with Material UI primitives, theming, navigation, filters
and the dependency explorer hydrated on the client. No analytics, tracking,
external font requests or runtime GitHub API dependency.

## Run locally

Requires Node.js 20.9 or later (Node.js 24 LTS recommended).

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`.

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

The previous static HTML prototype has been replaced. Do not use a basic file
server or the old port 4173 for this Next.js application.

## Update the content

| File | Contents |
| --- | --- |
| [data/profile.ts](data/profile.ts) | Identity, portrait path/alt text/dimensions, biography, contact and resume settings |
| [data/projects.ts](data/projects.ts) | Project descriptions, repository/demo links, example metrics and dependency graph |
| [data/experience.ts](data/experience.ts) | Professional experience and expandable career chapters |
| [data/achievements.ts](data/achievements.ts) | Supplied awards, learning categories and verified certification placeholders |
| [data/skills.ts](data/skills.ts) | Filterable skill categories and technology tags |
| [styles/globals.css](styles/globals.css) | Design tokens, layout, component styles and responsive/motion rules |
| [components/PortfolioTheme.tsx](components/PortfolioTheme.tsx) | Material UI palette, typography, shared component defaults and Emotion SSR cache |

## Portrait and Material UI

- The supplied portrait is stored at [public/dileep-kumar.webp](public/dileep-kumar.webp).
  It was converted locally from HEIC to a 960 x 1280 WebP (approximately 104 KiB),
  without embedded source EXIF metadata. The original photo was not modified.
- The LinkedIn-style header uses a wide technical cover, an overlapping circular
  avatar and profile details/actions below. The avatar is a local crop of the
  supplied photo at [public/dileep-kumar-avatar.webp](public/dileep-kumar-avatar.webp)
  (430 x 430, approximately 23 KiB). The full portrait is retained unchanged.
- The avatar uses `next/image` with responsive sizes, reserved dimensions and
  preload. To replace it, update `profile.photo.avatar` and use a new asset
  filename so cached image variants cannot show an older portrait.
- Material UI powers the app bar, buttons, icon button, cards, paper surfaces,
  typography, technology chips and exclusive toggle groups.
- The Next.js 16 `AppRouterCacheProvider` collects Emotion styles during SSR.
  `enableCssLayer` keeps Material UI compatible with Tailwind and the existing
  custom layout stylesheet. Shared palette/component settings live in the theme,
  while responsive section composition remains in the stylesheet.
- The cover in [components/Hero.tsx](components/Hero.tsx) uses a CSS gradient,
  a Microsoft / Exchange Online role label and the
  "Cloud. DevOps. AI. Engineering for Impact." headline.
  [components/SkillsCircuit.tsx](components/SkillsCircuit.tsx) adds a code hub,
  orbital rings and connected Exchange, DevOps, AI and Security nodes, matching the
  reference's technical-diagram style. Moving light segments run along the
  connections continuously in four-second cycles without playback buttons.
  Reduced-motion and no-JavaScript modes show a static diagram.
  Skill labels come from
  [data/skills.ts](data/skills.ts); labels remain HTML text for mobile readability.
  Exchange represents the Microsoft skill category; there is no running person,
  mail-flow diagram or additional technology-chip row in the cover.
  The banner displays the Microsoft four-color mark and name, reusing the
  existing local logo styling; the personal-portfolio disclaimer remains in place.
  Impact Radar retains its interactive engineering diagram and project details.
- Body copy and primary actions use 16px or larger text; compact metadata uses
  at least 13px, including on mobile. Material UI chips use wrapping 14px labels.
  The dependency diagram scrolls within its own keyboard-focusable region on
  narrow screens instead of shrinking its labels; its text alternative remains.

## Required personal details before launch

1. Set `profile.links.email` in [data/profile.ts](data/profile.ts); it remains
   `null` until supplied. LinkedIn is configured as
   `https://www.linkedin.com/in/r-s-dileep` across navigation, hero, contact and Person schema.
   Missing contacts are labeled, non-clickable elements, not invented addresses.
2. Put your **real PDF** at [public/resume.pdf](public/resume.pdf), then rebuild.
   [public/resume.README.txt](public/resume.README.txt) reserves and documents this
   location; it is not a fake PDF. The Download Resume control is disabled and
   labeled until the file exists at build time.
3. Add the remaining project repository and demo URLs in
   [data/projects.ts](data/projects.ts). Use full HTTPS URLs. The Impact Radar
   repository, your GitHub profile and your LinkedIn profile are configured.
   GitHub repository cards automatically include all projects with a configured
   repository. No guessed repository names or simulated contribution graph.
4. Add verified credential names, issuing bodies, dates and links to the typed
   `certifications` array in [data/achievements.ts](data/achievements.ts) when available.
   Current learning cards explicitly do **not** claim certifications.
5. Confirm Microsoft start date before publishing. The site follows the brief's
   explicit Experience section: **2026 - Present**, rather than the broader
   **2025/2026** phrasing.
6. The production origin is configured as **https://dileep.devfolk.in** in
   `profile.siteUrl`. Canonical links, Person schema, social images, sitemap and
   robots use this domain by default. `NEXT_PUBLIC_SITE_URL` can override it for
   a different deployment. Remove any old localhost override in Vercel before
   publishing. A generated `vercel.app` address does not replace the custom
   domain in SEO metadata.

## Design and content decisions

- Near-black surfaces, restrained lime accents, warm text and technical diagrams.
  Containers use 24px desktop, 16px tablet and 12px mobile minimum side gutters,
  with no fixed maximum page width, so sections expand on wide screens rather
  than leaving large outer gaps. Text blocks retain readable line lengths.
- The hero, About story, experience, metadata, social images and Person schema
  identify the current role as Technical Support Engineer - Exchange Online at
  Microsoft. AI engineering is explicitly a personal project focus, not a Microsoft
  job title. The professional timeline uses the supplied 2026 Microsoft start date.
- [components/CareerTimeline.tsx](components/CareerTimeline.tsx) uses native,
  keyboard-accessible expandable chapters that work without JavaScript.
  [components/EngineeringPhilosophy.tsx](components/EngineeringPhilosophy.tsx)
  renders the four supplied principles and featured quote. Both are composed by
  [components/About.tsx](components/About.tsx), alongside the full story and
  four "What I Build" cards.
- Navbar actions include GitHub, your LinkedIn profile and
  a resume control. Hero and Contact also offer resume downloads when a real
  file exists; each missing-file message has a unique accessible ID.
- No skill percentages, uptime claims, fabricated employment metrics or awards.
- Impact Radar metrics are the **supplied illustrative example**, clearly labeled
  as not live analysis, measured accuracy or production telemetry. All 12 affected
  nodes are represented (4 direct, 8 indirect; maximum depth 3). Other component
  labels are explicitly schematic, not claimed real repository dependencies.
- Architecture and Demo controls switch the local case-study view. They do not
  claim an external deployed application or execute actual impact analysis.
- Experience remains limited to the employers, roles and focus areas supplied.
  Personal AI work is identified as such, not a separate employer.
- Semantic links and buttons through Material UI, visible focus, mobile Escape handling, status
  announcements, SVG descriptions, a textual graph alternative and reduced-motion
  support. Core content remains visible without JavaScript.
- Framer Motion enhances server-rendered hero, timeline and section content with
  short, one-time entrance/reveal animations. Content is never hidden in the
  server HTML. Live reduced-motion changes stop reveals and restore readability;
  the gradient entrance finishes within four seconds. The skills circuit loops
  continuously unless reduced motion is enabled, without playback controls.
  Hover and navbar transitions remain lightweight CSS.
  Vector diagrams scale without raster assets. The portrait is locally hosted
  and optimized by `next/image`; social images are generated by Next.js.
  No external image service or unneeded lazy-loading library.

## Tests

```powershell
npx playwright install chromium
npm run build
npm test
```

If browser downloads are blocked and Microsoft Edge is already installed:

```powershell
$env:PLAYWRIGHT_CHANNEL = "msedge"
npm test
```

Tests start the production server on `127.0.0.1:4174`, unless already running.
They cover desktop/mobile layouts, 320-2560px overflow and side-gutter checks,
cover width, avatar overlap, navigation, skill
filters, example metrics, dependency counts, architecture view, local links,
metadata, resume/contact placeholders, portrait loading and size, Material UI
rendering, no-JavaScript content, career expansion, factual role/project
separation, live motion preferences and axe accessibility.
They do not send code or credentials to third-party auditing services.

## Deploy to Vercel

### Publish from this folder

Run these commands yourself in a terminal and complete Vercel's browser sign-in.
No Git repository is required for this workflow.

```powershell
Set-Location 'C:\Dileep\HKP\Profile'
npx vercel@latest login
npx vercel@latest --prod
```

Select your Vercel account/team and create a project (for example,
`dileep-portfolio`) unless you already have one to link. Use the current directory,
accept the detected **Next.js** settings, and keep the default output directory.
Vercel builds the application with `npm run build`. Publishing sends the site's
source and public assets to your Vercel project.

The [.vercelignore](.vercelignore) file excludes local environment files, raw HEIC
files, build caches and test reports. The configured domain is public, not a
secret, and no environment variable is required for the default production URL.

Alternatively, push the project to a Git repository you control and import it
from Vercel's dashboard for automatic deployments on future pushes.

### Connect dileep.devfolk.in

1. In Vercel, open **Project > Settings > Domains**, add `dileep.devfolk.in`
   and assign it to the production deployment.
2. The current authoritative nameservers for `devfolk.in` are
   `ns01.domaincontrol.com` and `ns02.domaincontrol.com` (GoDaddy). Open the DNS
   manager for `devfolk.in` at GoDaddy.
3. Add the CNAME record shown by Vercel:

   | Type | Name / Host | Value / Target |
   | --- | --- | --- |
   | CNAME | `dileep` | Copy the exact target shown in your Vercel domain settings |

   Use the provider's default TTL. Do not invent a target or change the root
   domain's nameservers, website records or mail records. If an existing record
   for `dileep` appears, inspect its purpose before replacing it. Add any
   ownership-verification TXT record only if Vercel requests it.
4. Wait for DNS propagation and for Vercel to show **Valid Configuration** and
   provision HTTPS. The custom hostname had no DNS record when checked during
   preparation; local configuration alone does not make it live.
5. Verify `https://dileep.devfolk.in`, `/sitemap.xml`, `/robots.txt`,
   `/opengraph-image`, the portrait, mobile navigation and project links.
   Verify the resume download after adding a real PDF.

Static sections and generated social images are prerendered at build time.
Rebuild after changing content, the resume or the public domain. The personal
portfolio includes an employer-view disclaimer; it is not a Microsoft product site.
