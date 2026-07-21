#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');

const OUT_DIR = path.resolve(process.cwd(), 'public/media/work');

const targets = [
  {
    id: 'yourself-to-science',
    url: 'https://yourselftoscience.org/',
    waitFor: 'body',
    viewport: { width: 1440, height: 980 },
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  },
  {
    id: 'entropy-h5n1',
    url: 'https://entropyforlife.it/2024/10/25/influenza-aviaria-situazione-epidemiologica-aggiornata/',
    waitFor: 'article, main, body',
    viewport: { width: 1440, height: 980 },
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  },
  {
    id: 'gray-swan-profile',
    url: 'https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf',
    waitFor: 'body',
    viewport: { width: 1440, height: 980 },
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  },
  {
    id: 'emergent-humanity',
    url: 'https://jnton.github.io/emergent-humanity/',
    waitFor: 'body',
    viewport: { width: 1440, height: 980 },
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  }
];

async function cleanPage(page) {
  await page.evaluate(() => {
    const selectors = [
      '[id*="cookie" i]',
      '[class*="cookie" i]',
      '[id*="consent" i]',
      '[class*="consent" i]',
      '.cky-consent-container',
      '.cmplz-cookiebanner',
      '#onetrust-consent-sdk',
      '[aria-label*="cookie" i]'
    ];
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => element.remove());
    });
    document.documentElement.style.scrollBehavior = 'auto';
  });
}

async function capture(browser, target) {
  const page = await browser.newPage();
  await page.setViewport({ ...target.viewport, deviceScaleFactor: 1 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36');

  page.on('console', (message) => {
    if (message.type() === 'error') console.warn(`[${target.id}] browser console: ${message.text()}`);
  });

  const response = await page.goto(target.url, {
    waitUntil: ['domcontentloaded', 'networkidle2'],
    timeout: 60000
  });

  if (!response || !response.ok()) {
    throw new Error(`${target.id}: failed to load ${target.url} (${response ? response.status() : 'no response'})`);
  }

  await page.waitForSelector(target.waitFor, { timeout: 20000 });
  await cleanPage(page);
  await new Promise((resolve) => setTimeout(resolve, 1800));
  await page.evaluate(() => window.scrollTo(0, 0));

  const destination = path.join(OUT_DIR, `${target.id}.png`);
  await page.screenshot({ path: destination, clip: target.clip, type: 'png' });
  console.log(`Captured ${target.url} -> ${destination}`);
  await page.close();
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium']
  });

  try {
    for (const target of targets) {
      await capture(browser, target);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
