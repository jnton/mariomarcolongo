#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');
const {
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateCvLlmTxt
} = require('./lib/dossier-generators.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

function read(relativePath) {
  const full = path.join(ROOT, relativePath);
  if (!fs.existsSync(full)) {
    fail(`Missing file: ${relativePath}`);
    return '';
  }
  const value = fs.readFileSync(full, 'utf8');
  if (!value.length) fail(`Empty file: ${relativePath}`);
  return value;
}

function assertContains(content, needle, label) {
  if (!content.includes(needle)) fail(`${label} is missing: ${needle}`);
}

function assertNotContains(content, needle, label) {
  if (content.includes(needle)) fail(`${label} contains prohibited text: ${needle}`);
}

function verifyExact(relativePaths, expected, label) {
  for (const relativePath of relativePaths) {
    const actual = read(relativePath);
    if (actual !== expected) fail(`${relativePath} is not byte-identical to canonical ${label} output`);
  }
}

function parseJsonLd(html, label) {
  const regex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count += 1;
    try {
      JSON.parse(match[1].trim());
    } catch (error) {
      fail(`${label} has invalid JSON-LD block ${count}: ${error.message}`);
    }
  }
  if (count === 0) fail(`${label} has no JSON-LD block`);
}

const canonical = {
  'llms.txt': generateLlmsTxt(D),
  'llms-full.txt': generateLlmsFullTxt(D),
  'cv-llm.txt': generateCvLlmTxt(D)
};
for (const [name, expected] of Object.entries(canonical)) {
  verifyExact([name, `public/${name}`, `dist/${name}`], expected, name);
}
pass('Canonical dossier mirrors checked');

const pages = {
  index: read('dist/index.html'),
  cv: read('dist/cv.html'),
  resume: read('dist/cv-resume.html'),
  security: read('dist/security.html')
};

for (const [name, html] of Object.entries(pages)) {
  if (!html) continue;
  parseJsonLd(html, `dist/${name}.html`);
  ['{D.', 'Astro.props', '<SiteNav', '<SiteFooter'].forEach((needle) => assertNotContains(html, needle, `dist/${name}.html`));
  assertNotContains(html, 'Released under CC BY 4.0 / Open Science', `dist/${name}.html`);
  assertNotContains(html, 'biobanking platform', `dist/${name}.html`);
}

const index = pages.index;
const indexText = index.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"').replaceAll('&gt;', '>').replaceAll('&lt;', '<');
[D.pillars, D.projects, D.stats].flat().forEach((item) => {
  const value = item.title || item.label;
  if (value) assertContains(indexText, value, 'dist/index.html');
});
const firstVisualization = D.visualizations && D.visualizations[0];
if (firstVisualization) {
  assertContains(indexText, firstVisualization.title, 'dist/index.html');
  assertContains(index, firstVisualization.fileUrl, 'dist/index.html');
}
[
  'data-testid="homepage-pillars"',
  'data-testid="homepage-projects"',
  'data-testid="homepage-stats"',
  'data-testid="homepage-visualization"'
].forEach((needle) => assertContains(index, needle, 'dist/index.html'));
assertNotContains(index, 'id="pillarsGrid"></div>', 'dist/index.html');
assertNotContains(index, 'id="projectsGrid"></div>', 'dist/index.html');
assertNotContains(index, 'id="statsGrid"></div>', 'dist/index.html');
pass('Homepage raw HTML contains canonical essential content');

const security = pages.security;
[
  'Model Behavior Evaluation Record &amp; Methodology',
  'Limitations and Interpretation',
  'Platform-Confirmed Model Breaks',
  'Publicly Identifiable Submission Labels',
  'indirect-function-call',
  'weak-password-change'
].forEach((needle) => assertContains(security, needle, 'dist/security.html'));
[
  'independently verified policy or alignment boundary failure',
  'tracking boundary resilience across major model architecture updates',
  'ensuring research directories and data pipelines are resilient',
  'Model Behavior &amp; Safety Case Study',
  'Model Behavior & Safety Case Study'
].forEach((needle) => assertNotContains(security, needle, 'dist/security.html'));
pass('Evaluation record evidence boundary checked');

const allGenerated = Object.values(pages).join('\n') + Object.values(canonical).join('\n');
assertContains(allGenerated, D.identity.jobTitle, 'Generated outputs');
assertContains(allGenerated, D.identity.secondaryTitle, 'Generated outputs');
[
  'Scientific AI Evaluation &amp; Research Data Specialist',
  'AI Evaluation &amp; Scientific Research Verification Specialist',
  'Primary Source Verification &amp; Open Science Infrastructure'
].forEach((needle) => assertNotContains(allGenerated, needle, 'Generated outputs'));

const canonicalExpectations = [
  ['dist/index.html', 'https://mariomarcolongo.com/'],
  ['dist/cv.html', 'https://mariomarcolongo.com/cv.html'],
  ['dist/cv-resume.html', 'https://mariomarcolongo.com/cv-resume.html'],
  ['dist/security.html', 'https://mariomarcolongo.com/security.html']
];
for (const [file, url] of canonicalExpectations) {
  const html = read(file);
  assertContains(html, `<link rel="canonical" href="${url}">`, file);
}

if (failures) {
  console.error(`\nGenerated-output verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('\nAll generated-output checks passed.');
