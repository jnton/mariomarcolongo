#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const P = require('../data/application-profiles.js');
const V = require('../data/portfolio-v3.js');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, 'audit-output');
const ROUTES = [
  'index.html',
  'integrity.html',
  'cv.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html',
  'security.html'
];
const APPLICATION_ROUTES = new Set([
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html'
]);
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

async function verifyHomepageInteractions(page) {
  const interactionResult = await page.evaluate(() => {
    const tab = document.querySelector('[data-lens="integrity"]');
    const panel = document.querySelector('[data-panel="integrity"]');
    if (tab) tab.click();
    const filter = document.querySelector('[data-project-filter="editorial"]');
    if (filter) filter.click();
    const visibleProjects = Array.from(document.querySelectorAll('[data-project-category]')).filter((card) => {
      return getComputedStyle(card).display !== 'none';
    });
    return {
      activeTab: tab ? tab.getAttribute('aria-selected') : null,
      activePanel: panel ? panel.classList.contains('is-active') : false,
      visibleCategories: visibleProjects.map((card) => card.getAttribute('data-project-category')),
      lensTabCount: document.querySelectorAll('[data-lens]').length,
      lensPanelCount: document.querySelectorAll('[data-panel]').length
    };
  });

  if (interactionResult.activeTab !== 'true' || !interactionResult.activePanel) {
    throw new Error('Homepage role-lens interaction failed');
  }
  if (interactionResult.lensTabCount !== V.lenses.length || interactionResult.lensPanelCount !== V.lenses.length) {
    throw new Error(`Homepage must render ${V.lenses.length} role lenses`);
  }
  if (!interactionResult.visibleCategories.length || interactionResult.visibleCategories.some((value) => value !== 'editorial')) {
    throw new Error(`Homepage project filtering failed: ${JSON.stringify(interactionResult.visibleCategories)}`);
  }
}

async function main() {
  if (!fs.existsSync(DIST)) throw new Error('dist directory is missing. Run npm run build first.');
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
          page.on('console', (message) => {
            if (message.type() === 'error') consoleErrors.push(message.text());
          });
          page.on('pageerror', (error) => pageErrors.push(error.message));
          await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
          await page.evaluateOnNewDocument((selectedTheme) => {
            try { localStorage.setItem('theme', selectedTheme); } catch (error) {}
          }, theme);
          await page.goto(`${staticServer.origin}/${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
          await assertPage(page, route, theme, viewport);

          const themeState = await page.evaluate(() => {
            const button = document.getElementById('themeBtn');
            return button ? {
              pressed: button.getAttribute('aria-pressed'),
              label: button.getAttribute('aria-label')
            } : null;
          });
          if (!themeState) throw new Error(`${route} is missing theme control`);
          const expectedPressed = theme === 'dark' ? 'true' : 'false';
          const expectedLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
          if (themeState.pressed !== expectedPressed || themeState.label !== expectedLabel) {
            throw new Error(`${route} theme control state is incorrect for ${theme}`);
          }

          if (APPLICATION_ROUTES.has(route)) {
            const pageModel = await page.evaluate(() => ({
              applicationPages: document.querySelectorAll('.application-page').length,
              internalPageLabels: document.querySelectorAll('.application-footer-note').length,
              phoneSlot: Boolean(document.getElementById('cvPhoneSlot'))
            }));
            if (pageModel.applicationPages !== 2 || pageModel.internalPageLabels !== 2) {
              throw new Error(`${route} must render exactly two visible application pages`);
            }
            if (!pageModel.phoneSlot) throw new Error(`${route} is missing the private phone injection slot`);
          }

          if (route === 'index.html' && viewport.name === 'desktop' && theme === 'light') {
            await verifyHomepageInteractions(page);
          }

          if (pageErrors.length) throw new Error(`${route} page errors: ${pageErrors.join(' | ')}`);
          const relevantConsoleErrors = consoleErrors.filter((message) => !/favicon|google.*font|net::ERR_/i.test(message));
          if (relevantConsoleErrors.length) throw new Error(`${route} console errors: ${relevantConsoleErrors.join(' | ')}`);
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
      'I investigate claims',
      ...V.lenses.map((lens) => lens.title),
      ...V.cases.map((record) => record.title),
      P.aiSafety.title,
      P.editorialCommunity.title,
      P.integrity.title,
      P.researchQuality.title
    ];
    const noJsResult = await noJs.evaluate((expected) => {
      const text = document.body.innerText;
      return {
        missing: expected.filter((value) => !text.includes(value)),
        tests: ['career-focus', 'career-evidence', 'career-documents', 'homepage-projects'].map((id) => {
          const element = document.querySelector(`[data-testid="${id}"]`);
          return { id, exists: Boolean(element), children: element ? element.children.length : 0 };
        }),
        visibleLensPanels: Array.from(document.querySelectorAll('[data-panel]')).filter((element) => getComputedStyle(element).display !== 'none').length,
        evidenceLinks: document.querySelectorAll('a[href^="http"]').length,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      };
    }, expectedNoJsText);
    if (noJsResult.missing.length) throw new Error(`No-JS homepage is missing: ${noJsResult.missing.join(', ')}`);
    if (noJsResult.tests.some((item) => !item.exists || item.children === 0)) throw new Error(`No-JS homepage has an empty required container: ${JSON.stringify(noJsResult.tests)}`);
    if (noJsResult.visibleLensPanels !== V.lenses.length) throw new Error('No-JS homepage must expose all role-lens content');
    if (noJsResult.evidenceLinks === 0) throw new Error('No-JS homepage has no external evidence links');
    if (noJsResult.scrollWidth > noJsResult.clientWidth + 1) throw new Error('No-JS mobile homepage overflows horizontally');
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
