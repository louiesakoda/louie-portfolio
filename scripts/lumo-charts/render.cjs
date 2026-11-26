/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Renders the LUMO sub-brand charts (Plan 052) from HTML to WebP.
 *
 *   node scripts/lumo-charts/render.cjs sentry-hero public/work/lumo-sentry/hero.webp
 *   node scripts/lumo-charts/render.cjs flexi-charts/questions public/work/flexi/questions.webp
 *
 * Each chart is a 2000×1200 page in this folder that links lumo-charts.css.
 * Fonts load from Google Fonts, so the render needs a network connection.
 */
const path = require("path");
const { chromium } = require("@playwright/test");
// sharp is a dependency of Next, not of this repo, so resolve it from there.
const sharp = require(require.resolve("sharp", { paths: [path.dirname(require.resolve("next/package.json"))] }));

const [name, out] = process.argv.slice(2);
if (!name || !out) {
  console.error("usage: node scripts/lumo-charts/render.cjs <chart-name> <out.webp>");
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2000, height: 1200 }, deviceScaleFactor: 1 });
  // A name with a slash is a path under scripts/, for charts outside this folder.
  const file = name.includes("/") ? path.join(__dirname, "..", `${name}.html`) : path.join(__dirname, `${name}.html`);
  await page.goto(`file://${file}`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState("networkidle");
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: 2000, height: 1200 } });
  await browser.close();
  await sharp(png).webp({ quality: 88 }).toFile(path.resolve(out));
  console.log(`wrote ${out}`);
})();
