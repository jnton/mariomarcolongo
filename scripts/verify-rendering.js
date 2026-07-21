#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const H = require('../data/portfolio-human.js');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, 'audit-output');
const ROUTES = [
  'index.html', 'integrity.html', 'cv.html', 'cv-resume.html',
  'cv-research.html', 'cv-editorial.html', 'cv-integrity.html', 'security.html'
];
const APPLICATION_ROUTES = new Set(['cv-resume.html', 'cv-research.html', 'cv-editorial.html', 'cv-integrity.html']);
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

function slug(value) {
  return value.replace(/\.html$/, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'index';
}

async function assertPage(page, route, theme, viewport) {
  const result = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    h1Count: document.querySelectorAll('h1').length,
    title: document.title,
    bodyText: document.body.innerText
  }));
  if (result.scrollWidth > result.clientWidth + 1) {
    throw new Error(`${route} ${theme} ${viewport.name} overflows horizontally (${result.scrollWidth} > ${result.clientWidth})`);
  }
  if (result.h1Count !== 1) throw new Error(`${route} must have exactly one H1; found ${result.h1Count}`);
  if (!result.title.trim() || !result.bodyText.trim()) throw new Error(`${route} rendered empty title or body`);
}

async function verifyHomepage(page) {
  const result = await page.evaluate(() => ({
    proofCount: document.querySelectorAll('.p5-proof').length,
    heroWorkCount: document.querySelectorAll('.p5-work-tile').length,
    flagshipCount: document.querySelectorAll('.p5-flagship').length,
    humanSection: Boolean(document.querySelector('.p5-human')),
    productCount: document.querySelectorAll('.p5-product').length,
    visualCount: document.querySelectorAll('.p5-visual').length,
    principleCount: document.querySelectorAll('.p5-principle').length,
    documentCount: document.querySelectorAll('.p5-document').length,
    navLinks: Array.from(document.querySelectorAll('.nav-editorial .nav-actions a')).map((item) => item.textContent.trim()),
    firstSectionTop: document.querySelector('#selected-work')?.getBoundingClientRect().top,
    heroHeight: document.querySelector('.p5-hero')?.getBoundingClientRect().height,
    documentHeight: document.documentElement.scrollHeight
  }));

  if (result.proofCount !== H.proofs.length) throw new Error(`Homepage must render ${H.proofs.length} proof items`);
  if (result.heroWorkCount !== H.heroWork.length) throw new Error(`Homepage must render ${H.heroWork.length} hero-work tiles`);
  if (result.flagshipCount !== H.flagships.length) throw new Error(`Homepage must render ${H.flagships.length} flagship cases`);
  if (!result.humanSection) throw new Error('Homepage is missing the named human-research section');
  if (result.productCount !== H.products.length) throw new Error(`Homepage must render ${H.products.length} product cards`);
  if (result.visualCount !== H.visualization.length) throw new Error(`Homepage must render ${H.visualization.length} visualization cards`);
  if (result.principleCount !== H.workingPrinciples.length) throw new Error(`Homepage must render ${H.workingPrinciples.length} principles`);
  if (result.documentCount !== H.applicationDocuments.length) throw new Error(`Homepage must render ${H.applicationDocuments.length} application documents`);
  for (const expected of ['Work', 'Experience', 'CV', 'Contact']) {
    if (!result.navLinks.includes(expected)) throw new Error(`Homepage navigation is missing ${expected}`);
  }
  if (!result.heroHeight || result.heroHeight > 900) throw new Error(`Desktop hero is too tall: ${result.heroHeight}`);
  if (!result.documentHeight || result.documentHeight > 10500) throw new Error(`Homepage is excessively long: ${result.documentHeight}px`);
}

async function main() {
  if (!fs.existsSync(DIST)) throw new Error('dist directory is missing. Run npm run build first.');
  fs.rmSync(OUTPUT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT, { recursive: true });
  const staticServer = await startStaticServer(DIST);
  const browser = await launchBrowser();

  try {
    for (const viewport of VIEWPORTS) {
      for (const theme of ['light', 'dark']) {
        for (const route of ROUTES) {
          const page = await browser.newPage();
          const consoleErrors = [];
          const pageErrors = [];
          page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
          page.on('pageerror', (error) => pageErrors.push(error.message));
          await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
          await page.evaluateOnNewDocument((selectedTheme) => {
            try { localStorage.setItem('theme', selectedTheme); } catch (error) {}
          }, theme);
          await page.goto(`${staticServer.origin}/${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
          await assertPage(page, route, theme, viewport);

          const themeState = await page.evaluate(() => {
            const button = document.getElementById('themeBtn');
            return button ? { pressed: button.getAttribute('aria-pressed'), label: button.getAttribute('aria-label') } : null;
          });
          if (!themeState) throw new Error(`${route} is missing theme control`);
          const expectedPressed = theme === 'dark' ? 'true' : 'false';
          const expectedLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
          if (themeState.pressed !== expectedPressed || themeState.label !== expectedLabel) {
            throw new Error(`${route} theme control state is incorrect for ${theme}`);
          }

          if (APPLICATION_ROUTES.has(route)) {
            const model = await page.evaluate(() => ({
              applicationPages: document.querySelectorAll('.application-page').length,
              internalPageLabels: document.querySelectorAll('.application-footer-note').length,
              phoneSlot: Boolean(document.getElementById('cvPhoneSlot'))
            }));
            if (model.applicationPages !== 2 || model.internalPageLabels !== 2) throw new Error(`${route} must render exactly two visible application pages`);
            if (!model.phoneSlot) throw new Error(`${route} is missing the private phone injection slot`);
          }

          if (route === 'index.html' && viewport.name === 'desktop' && theme === 'light') await verifyHomepage(page);

          if (pageErrors.length) throw new Error(`${route} page errors: ${pageErrors.join(' | ')}`);
          const relevant = consoleErrors.filter((message) => !/favicon|google.*font|net::ERR_|Failed to load resource/i.test(message));
          if (relevant.length) throw new Error(`${route} console errors: ${relevant.join(' | ')}`);
          await page.screenshot({ path: path.join(OUTPUT, `${slug(route)}-${theme}-${viewport.name}.png`), fullPage: true });
          await page.close();
        }
      }
    }

    const noJs = await browser.newPage();
    await noJs.setJavaScriptEnabled(false);
    await noJs.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await noJs.goto(`${staticServer.origin}/index.html`, { waitUntil: 'load', timeout: 45000 });
    const expectedNoJsText = [
      H.headline,
      ...H.proofs.map((item) => item.label),
      ...H.flagships.map((item) => item.title),
      H.humanResearch.title,
      ...H.products.map((item) => item.title),
      ...H.visualization.map((item) => item.title),
      ...H.applicationDocuments.map((item) => item.title)
    ];
    const noJsResult = await noJs.evaluate((expected) => {
      const text = document.body.innerText;
      return {
        missing: expected.filter((value) => !text.includes(value)),
        tests: ['human-capabilities', 'human-work', 'human-documents'].map((id) => {
          const element = document.querySelector(`[data-testid="${id}"]`);
          return { id, exists: Boolean(element), children: element ? element.children.length : 0 };
        }),
        evidenceLinks: document.querySelectorAll('a[href^="http"]').length,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      };
    }, expectedNoJsText);
    if (noJsResult.missing.length) throw new Error(`No-JS homepage is missing: ${noJsResult.missing.join(', ')}`);
    if (noJsResult.tests.some((item) => !item.exists || item.children === 0)) throw new Error(`No-JS homepage has an empty required container: ${JSON.stringify(noJsResult.tests)}`);
    if (noJsResult.evidenceLinks === 0) throw new Error('No-JS homepage has no external evidence links');
    if (noJsResult.scrollWidth > noJsResult.clientWidth + 1) throw new Error(`No-JS mobile homepage overflows horizontally (${noJsResult.scrollWidth} > ${noJsResult.clientWidth})`);
    await noJs.screenshot({ path: path.join(OUTPUT, 'index-no-js-mobile.png'), fullPage: true });
    await noJs.close();

    console.log(`Rendering verification passed. Screenshots: ${OUTPUT}`);
  } finally {
    await browser.close();
    await staticServer.close();
  }
}

main().catch((error) => {
  console.error(`Rendering verification failed: ${error.stack || error.message}`);
  process.exit(1);
});
