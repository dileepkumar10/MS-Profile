import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { featuredProject, impactCaseStudy, dependencyNodes, dependencyEdges } from "../data/projects";
import { profile } from "../data/profile";

test("renders the verified content, safe placeholders and valid link targets", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("R S Dileep Kumar | Cloud, DevOps & AI Engineer");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(profile.name);
  await expect(page.locator(".profile-banner")).toContainText("Engineering for Impact.");
  await expect(page.locator(".profile-banner").getByRole("img", { name: "Microsoft", exact: true })).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(5);
  await expect(page.getByRole("button", { name: "Download Resume" })).toBeDisabled();
  await expect(page.locator("#resume-status")).toHaveText("PDF not added yet");
  await expect(page.locator(".contact-card.unavailable")).toHaveCount(2);
  await expect(page.locator(`a[href="${featuredProject.repository}"]`).first()).toBeVisible();
  const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")!).filter((href) => !document.getElementById(href.slice(1))));
  expect(brokenAnchors).toEqual([]);
  const unsafeLinks = await page.locator('a[href^="https://"]').evaluateAll((links) =>
    links.filter((link) => link.getAttribute("target") !== "_blank" || !link.getAttribute("rel")?.includes("noopener")).map((link) => link.getAttribute("href")));
  expect(unsafeLinks).toEqual([]);
  expect((await request.get("/favicon.svg")).status()).toBe(200);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  expect((await request.get("/opengraph-image")).headers()["content-type"]).toContain("image/png");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Cloud, DevOps & AI Engineer/);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  const canonicalLink = page.locator('link[rel="canonical"]');
  const canonical = await canonicalLink.count() ? await canonicalLink.getAttribute("href") : null;
  if (canonical) expect(await (await request.get("/sitemap.xml")).text()).toContain(canonical);
  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(schema["@type"]).toBe("Person");
  expect(schema.sameAs).toEqual(["https://github.com/dileepkumar10"]);
  expect(errors).toEqual([]);
});

test("filters skills and explores the exact illustrative Impact Radar example", async ({ page }) => {
  await page.goto("/");
  const skills = page.getByRole("group", { name: "Filter skill categories" });
  await expect(page.locator(".skill-card")).toHaveCount(7);
  await skills.getByRole("button", { name: "Security", exact: true }).click();
  await expect(page.locator(".skill-card")).toHaveCount(1);
  await expect(page.locator(".skill-card")).toContainText("Black Duck");
  await skills.getByRole("button", { name: "All capabilities" }).click();
  await expect(page.locator(".skill-card")).toHaveCount(7);
  for (const metric of impactCaseStudy.metrics) {
    const card = page.locator(".metric").filter({ has: page.getByText(metric.label, { exact: true }) });
    await expect(card).toContainText(`${metric.value}${metric.suffix}`);
  }
  await expect(page.locator(".graph-node")).toHaveCount(13);
  await expect(page.locator(".graph-edge")).toHaveCount(12);
  const filters = page.getByRole("group", { name: "Dependency visibility" });
  await filters.getByRole("button", { name: "Direct", exact: true }).click();
  await expect(page.locator(".graph-footer")).toContainText("4 affected components highlighted");
  await expect(page.locator(".graph-node.direct:not(.is-muted)")).toHaveCount(4);
  await filters.getByRole("button", { name: "Indirect", exact: true }).click();
  await expect(page.locator(".graph-footer")).toContainText("8 affected components highlighted");
  await page.getByRole("button", { name: "Architecture", exact: true }).click();
  await expect(page.locator(".architecture-stages li")).toHaveCount(6);
  await expect(page.locator(".architecture-stages")).toContainText("Decision");
  await page.getByRole("button", { name: "Demo", exact: true }).click();
  await expect(page.locator(".demo-disclaimer")).toContainText("Not live analysis");
  await page.locator(".graph-text summary").click();
  await expect(page.locator(".graph-text li")).toHaveCount(13);
});

test("supports mobile navigation, keyboard escape and narrow layouts", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: 375, height: 812 });
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.locator("#navigation-links")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(page.locator("#navigation-links")).toBeHidden();
  await toggle.click();
  await page.getByRole("navigation").getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page.locator("#navigation-links")).toBeHidden();
  for (const width of [320, 375, 768, 1024, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
    expect(dimensions.content, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
    const layout = await page.evaluate(() => {
      const banner = document.querySelector(".profile-banner")?.getBoundingClientRect();
      const avatar = document.querySelector(".profile-avatar")?.getBoundingClientRect();
      const brand = document.querySelector(".banner-brand")?.getBoundingClientRect();
      const bannerCopy = document.querySelector(".banner-copy")?.getBoundingClientRect();
      const identity = document.querySelector(".profile-identity")?.getBoundingClientRect();
      const controls = document.querySelector(".profile-controls")?.getBoundingClientRect();
      const footer = document.querySelector(".hero-footnote")?.getBoundingClientRect();
      const header = document.querySelector(".profile-header")?.getBoundingClientRect();
      if (!banner || !avatar || !brand || !bannerCopy || !identity || !controls || !footer || !header) throw new Error("The complete profile banner must be rendered.");
      return {
        viewport: document.documentElement.clientWidth,
        containers: [...document.querySelectorAll(".container")].map((element) => {
          const rect = element.getBoundingClientRect();
          return { left: rect.left, right: rect.right, width: rect.width };
        }),
        headerWidth: header.width,
        bannerWidth: banner.width,
        bannerBottom: banner.bottom,
        bannerTop: banner.top,
        bannerLeft: banner.left,
        bannerRight: banner.right,
        brandTop: brand.top,
        brandLeft: brand.left,
        brandRight: brand.right,
        bannerCopyBottom: bannerCopy.bottom,
        avatarTop: avatar.top,
        avatarBottom: avatar.bottom,
        avatarWidth: avatar.width,
        avatarHeight: avatar.height,
        identityTop: identity.top,
        identityBottom: identity.bottom,
        controlsBottom: controls.bottom,
        footerTop: footer.top,
      };
    });
    for (const container of layout.containers) {
      expect(container.left, `left gutter at ${width}px`).toBeGreaterThanOrEqual(10);
      expect(container.left, `left gutter at ${width}px`).toBeLessThanOrEqual(24);
      expect(layout.viewport - container.right, `right gutter at ${width}px`).toBeLessThanOrEqual(24);
      expect(container.width, `fluid content at ${width}px`).toBeGreaterThanOrEqual(layout.viewport - 48);
    }
    expect(layout.bannerWidth).toBeGreaterThanOrEqual(layout.headerWidth - 2);
    expect(layout.avatarTop).toBeLessThan(layout.bannerBottom);
    expect(layout.brandTop).toBeGreaterThan(layout.bannerTop);
    expect(layout.brandLeft).toBeGreaterThan(layout.bannerLeft);
    expect(layout.brandRight).toBeLessThan(layout.bannerRight);
    expect(layout.bannerCopyBottom).toBeLessThan(layout.avatarTop);
    expect(layout.avatarBottom).toBeGreaterThan(layout.bannerBottom);
    expect(layout.avatarWidth).toBe(layout.avatarHeight);
    expect(layout.identityTop).toBeGreaterThanOrEqual(layout.avatarBottom);
    expect(layout.footerTop).toBeGreaterThanOrEqual(Math.max(layout.identityBottom, layout.controlsBottom));
  }
});

test("passes automated accessibility checks for main and interactive states", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const audit = () => new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect((await audit()).violations).toEqual([]);
  await page.getByRole("button", { name: "Architecture", exact: true }).click();
  expect((await audit()).violations).toEqual([]);
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Open menu" }).click();
  expect((await audit()).violations).toEqual([]);
  const activeAnimations = await page.evaluate(() => document.getAnimations().filter((animation) => animation.playState === "running").length);
  expect(activeAnimations).toBe(0);
});

test("keeps core content readable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4174");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#navigation-links")).toBeVisible();
  await expect(page.locator(".featured-title h3")).toHaveText("Impact Radar");
  await context.close();
});

test("loads the optimized portrait and renders Material UI components", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  const portrait = page.getByRole("img", { name: profile.photo.avatar.alt });
  await expect(portrait).toBeVisible();
  await expect.poll(() => portrait.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  const original = await request.get(profile.photo.src);
  expect(original.status()).toBe(200);
  expect(original.headers()["content-type"]).toContain("image/webp");
  expect((await original.body()).length).toBeLessThan(150_000);
  const avatar = await request.get(profile.photo.avatar.src);
  expect(avatar.status()).toBe(200);
  expect(avatar.headers()["content-type"]).toContain("image/webp");
  expect((await avatar.body()).length).toBeLessThan(40_000);
  await expect(page.locator(".profile-header.MuiCard-root")).toBeVisible();
  await expect(page.locator(".profile-avatar.MuiAvatar-root")).toBeVisible();
  await expect(page.locator(".hero-actions .MuiButton-root")).toHaveCount(2);
  await expect(page.locator(".skill-card.MuiCard-root")).toHaveCount(7);
  await expect(page.locator(".filter-list.MuiToggleButtonGroup-root")).toBeVisible();
  expect(await page.locator(".MuiChip-root").count()).toBeGreaterThan(20);
  expect(errors).toEqual([]);
});

test("dependency data agrees with the supplied scenario", () => {
  expect(dependencyNodes.filter((node) => node.kind === "direct")).toHaveLength(4);
  expect(dependencyNodes.filter((node) => node.kind === "indirect")).toHaveLength(8);
  expect(Math.max(...dependencyNodes.map((node) => node.depth))).toBe(3);
  for (const [source, target] of dependencyEdges) {
    expect(dependencyNodes.some((node) => node.id === source)).toBe(true);
    expect(dependencyNodes.some((node) => node.id === target)).toBe(true);
  }
});
