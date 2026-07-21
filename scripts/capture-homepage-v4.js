#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, 'audit-v4');

async function warmLazyContent(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(420, Math.floor(window.innerHeight * 0.78));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await delay(90);
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await delay(700);
    window.scrollTo(0, 0);
    await delay(300);
  });
}

async function capture(browser, server, name, width, height, theme, javaScriptEnabled = true) {
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(javaScriptEnabled);
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  if (javaScriptEnabled) {
    await page.evaluateOnNewDocument((selectedTheme) => {
      try { localStorage.setItem('theme', selectedTheme); } catch (error) {}
    }, theme);
  }
  await page.goto(`${server.origin}/index.html`, { waitUntil: javaScriptEnabled ? 'networkidle0' : 'load', timeout: 45000 });
  if (javaScriptEnabled) await warmLazyContent(page);
  const measurements = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    documentHeight: document.documentElement.scrollHeight,
    brokenImages: Array.from(document.images)
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => ({ src: image.getAttribute('src'), alt: image.alt }))
  }));
  if (measurements.scrollWidth > measurements.clientWidth + 1) {
    throw new Error(`${name} overflows horizontally (${measurements.scrollWidth} > ${measurements.clientWidth})`);
  }
  if (measurements.brokenImages.length) {
    throw new Error(`${name} has broken images: ${JSON.stringify(measurements.brokenImages)}`);
  }
  await page.screenshot({ path: path.join(OUTPUT, `${name}.png`), fullPage: true });
  fs.writeFileSync(path.join(OUTPUT, `${name}.json`), JSON.stringify(measurements, null, 2));
  await page.close();
}

async function main() {
  if (!fs.existsSync(DIST)) throw new Error('dist is missing; run npm run build first');
  fs.rmSync(OUTPUT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT, { recursive: true });
  const server = await startStaticServer(DIST);
  const browser = await launchBrowser();
  try {
    await capture(browser, server, 'index-light-desktop-scrolled', 1440, 1000, 'light');
    await capture(browser, server, 'index-dark-desktop-scrolled', 1440, 1000, 'dark');
    await capture(browser, server, 'index-light-mobile-scrolled', 390, 844, 'light');
    await capture(browser, server, 'index-dark-mobile-scrolled', 390, 844, 'dark');
    await capture(browser, server, 'index-no-js-mobile', 390, 844, 'light', false);
    console.log(`Homepage visual audit passed: ${OUTPUT}`);
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
