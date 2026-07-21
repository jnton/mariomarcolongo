#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');

const ROOT = path.resolve(__dirname, '..');
const EXPECTED = {
  jobTitle: 'AI Evaluation & Research Verification Specialist',
  secondaryTitle: 'Model Behavior Evaluation · Scientific Evidence Review · Evaluation Operations · Technical Research',
  email: 'me@mariomarcolongo.com',
  orcid: '0000-0003-2846-7115',
  ena: 'PRJEB109744',
  version: 'v2026.07.21',
  graySwanId: '6a57be70d15e123775a1e9cf'
};
const REQUIRED = [
  'package.json',
  'package-lock.json',
  'data/source.js',
  'src/layouts/Layout.astro',
  'src/components/SiteNav.astro',
  'src/components/SiteFooter.astro',
  'src/pages/index.astro',
  'src/pages/cv.astro',
  'src/pages/cv-resume.astro',
  'src/pages/security.astro',
  'src/styles/global.css',
  'src/styles/cv.css',
  'src/styles/security.css',
  'scripts/lib/dossier-generators.js',
  'scripts/generate-llm-dossiers.js',
  'scripts/postbuild.js',
  'scripts/verify-dist.js',
  'scripts/verify-rendering.js',
  'public/.well-known/api-catalog',
  'public/.well-known/agent-card.json',
  'public/.well-known/mcp/server-card.json',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest'
];
const SCAN_ROOTS = ['data', 'src', 'package.json', 'README.md', 'public/.well-known', 'public/robots.txt', 'public/sitemap.xml', 'public/site.webmanifest'];
const PROHIBITED = [
  ['independently verified policy or alignment boundary failure', 'Unsupported independent-verification claim'],
  ['tracking boundary resilience across major model architecture updates', 'Unsupported architecture-update inference'],
  ['ensuring research directories and data pipelines are resilient', 'Unsupported security-assurance claim'],
  ['Released under CC BY 4.0 / Open Science', 'Incorrect blanket licence'],
  ['biobanking platform', 'Incorrect Yourself to Science description'],
  ['Model Behavior & Safety Case Study', 'Outdated evaluation-page positioning'],
  ['Model Behavior &amp; Safety Case Study', 'Outdated evaluation-page positioning'],
  ['AI Evaluation & Scientific Research Verification Specialist', 'Competing primary title'],
  ['Scientific AI Evaluation & Research Data Specialist', 'Competing primary title']
];
let failures = 0;

function fail(file, line, message) {
  failures += 1;
  console.error(`FAIL ${file}:${line} — ${message}`);
}

function filesUnder(relative) {
  const absolute = path.join(ROOT, relative);
  if (!fs.existsSync(absolute)) return [];
  if (fs.statSync(absolute).isFile()) return [absolute];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    return entry.isDirectory() ? filesUnder(child) : [path.join(ROOT, child)];
  });
}

function scanFile(filePath) {
  if (!/\.(?:astro|js|mjs|json|md|txt|xml|webmanifest)$/.test(filePath) && !/api-catalog$/.test(filePath)) return;
  const relative = path.relative(ROOT, filePath);
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const [needle, message] of PROHIBITED) {
      if (line.includes(needle)) fail(relative, index + 1, `${message}: ${needle}`);
    }
    if (/\|\|\s*true/.test(line)) fail(relative, index + 1, 'Build/deployment failures must not be suppressed with `|| true`.');
    if (/2>\/dev\/null/.test(line)) fail(relative, index + 1, 'Build/deployment errors must not be suppressed.');
  });
}

for (const relative of REQUIRED) {
  const absolute = path.join(ROOT, relative);
  if (!fs.existsSync(absolute)) fail(relative, 1, 'Required source or configuration file is missing.');
  else if (!fs.statSync(absolute).isFile() || fs.statSync(absolute).size === 0) fail(relative, 1, 'Required file is empty or not a regular file.');
}

for (const root of SCAN_ROOTS) filesUnder(root).forEach(scanFile);

const identityChecks = [
  ['identity.jobTitle', D.identity?.jobTitle, EXPECTED.jobTitle],
  ['identity.secondaryTitle', D.identity?.secondaryTitle, EXPECTED.secondaryTitle],
  ['identity.email', D.identity?.email, EXPECTED.email],
  ['identity.orcid', D.identity?.orcid, EXPECTED.orcid],
  ['identity.enaAccession', D.identity?.enaAccession, EXPECTED.ena],
  ['identity.buildVersion', D.identity?.buildVersion, EXPECTED.version],
  ['identity.grayswanId', D.identity?.grayswanId, EXPECTED.graySwanId]
];
for (const [field, actual, expected] of identityChecks) {
  if (actual !== expected) fail('data/source.js', 1, `${field} must equal ${JSON.stringify(expected)}; found ${JSON.stringify(actual)}.`);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
for (const [name, command] of Object.entries(packageJson.scripts || {})) {
  if (/\|\|\s*true|2>\/dev\/null/.test(command)) fail('package.json', 1, `Script ${name} suppresses failures.`);
}
if (!String(packageJson.scripts?.deploy || '').startsWith('npm run build')) fail('package.json', 1, 'Deployment must begin with a successful production build.');
if (!String(packageJson.scripts?.build || '').includes('verify-dist.js')) fail('package.json', 1, 'Production build must run generated-output verification.');

const indexSource = fs.readFileSync(path.join(ROOT, 'src/pages/index.astro'), 'utf8');
for (const marker of ['homepage-pillars', 'homepage-projects', 'homepage-stats', 'homepage-visualization']) {
  if (!indexSource.includes(`data-testid="${marker}"`)) fail('src/pages/index.astro', 1, `Missing raw-HTML test marker ${marker}.`);
}
for (const expression of ['D.pillars.map(', 'D.projects.map(', 'D.stats.map(']) {
  if (!indexSource.includes(expression)) fail('src/pages/index.astro', 1, `Homepage must server-render canonical content via ${expression}`);
}

const securitySource = fs.readFileSync(path.join(ROOT, 'src/pages/security.astro'), 'utf8');
for (const requiredText of ['Model Behavior Evaluation Record & Methodology', 'Limitations and Interpretation', 'Platform-Reported Activity']) {
  if (!securitySource.includes(requiredText)) fail('src/pages/security.astro', 1, `Evaluation record is missing required text: ${requiredText}`);
}

const footerSource = fs.readFileSync(path.join(ROOT, 'src/components/SiteFooter.astro'), 'utf8');
if (!footerSource.includes("copyCanonicalText('/llms-full.txt'")) fail('src/components/SiteFooter.astro', 1, 'Footer copy action must fetch the canonical complete dossier.');
const navSource = fs.readFileSync(path.join(ROOT, 'src/components/SiteNav.astro'), 'utf8');
for (const requiredText of ['aria-pressed="false"', 'Switch to dark theme', 'Switch to light theme', 'Evaluation Record']) {
  if (!navSource.includes(requiredText)) fail('src/components/SiteNav.astro', 1, `Navigation is missing required accessibility/positioning text: ${requiredText}`);
}

if (failures) {
  console.error(`\nSource integrity check failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('Source integrity check passed.');
