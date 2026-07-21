#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');

const OUT_DIR = path.resolve(process.cwd(), 'public/media/work');
const targets = [
  { id: 'yourself-to-science', url: 'https://yourselftoscience.org/', waitFor: 'body' },
  { id: 'entropy-h5n1', url: 'https://entropyforlife.it/2024/10/25/influenza-aviaria-situazione-epidemiologica-aggiornata/', waitFor: 'article, main, body' },
  { id: 'gray-swan-profile', url: 'https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf', waitFor: 'body', optional: true },
  { id: 'emergent-humanity', url: 'https://jnton.github.io/emergent-humanity/', waitFor: 'body', optional: true }
];

async function cleanPage(page) {
  await page.evaluate(() => {
    const selectors = [
      '[id*="cookie" i]', '[class*="cookie" i]', '[id*="consent" i]', '[class*="consent" i]',
      '.cky-consent-container', '.cmplz-cookiebanner', '#onetrust-consent-sdk', '[aria-label*="cookie" i]'
    ];
    selectors.forEach((selector) => document.querySelectorAll(selector).forEach((element) => element.remove()));
    document.documentElement.style.scrollBehavior = 'auto';
  });
}

async function capture(browser, target) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1440, height: 980, deviceScaleFactor: 1 });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36');
    const response = await page.goto(target.url, { waitUntil: ['domcontentloaded', 'networkidle2'], timeout: 60000 });
    if (!response || (!response.ok() && response.status() !== 304)) {
      throw new Error(`HTTP ${response ? response.status() : 'no response'}`);
    }
    await page.waitForSelector(target.waitFor, { timeout: 20000 });
    await cleanPage(page);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    await page.evaluate(() => window.scrollTo(0, 0));
    const destination = path.join(OUT_DIR, `${target.id}.png`);
    await page.screenshot({ path: destination, clip: { x: 0, y: 0, width: 1440, height: 900 }, type: 'png' });
    console.log(`PASS ${target.id}: ${destination}`);
    return true;
  } catch (error) {
    console.error(`${target.optional ? 'OPTIONAL' : 'FAIL'} ${target.id}: ${error.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium']
  });
  const results = new Map();
  try {
    for (const target of targets) results.set(target.id, await capture(browser, target));
  } finally {
    await browser.close();
  }
  const missingRequired = targets.filter((target) => !target.optional && !results.get(target.id));
  if (missingRequired.length) {
    throw new Error(`Required public previews failed: ${missingRequired.map((target) => target.id).join(', ')}`);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
