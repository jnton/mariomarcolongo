#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');
const P = require('../data/application-profiles.js');
const {
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateCvLlmTxt
} = require('./lib/dossier-generators.js');

const ROOT = path.resolve(__dirname, '..');
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
  research: read('dist/cv-research.html'),
  security: read('dist/security.html')
};

for (const [name, html] of Object.entries(pages)) {
  if (!html) continue;
  parseJsonLd(html, `dist/${name}.html`);
  ['{D.', 'Astro.props', '<SiteNav', '<SiteFooter'].forEach((needle) => assertNotContains(html, needle, `dist/${name}.html`));
  assertNotContains(html, 'Released under CC BY 4.0 / Open Science', `dist/${name}.html`);
  assertNotContains(html, 'biobanking platform', `dist/${name}.html`);
  assertNotContains(html, 'codebase navigation and modification', `dist/${name}.html`);
  assertNotContains(html, 'Founder &amp; Technical Product Builder', `dist/${name}.html`);
  assertNotContains(html, 'C2 Reading/Listening, B2 Writing/Speaking', `dist/${name}.html`);
}

const index = pages.index;
for (const needle of [
  'I test model behavior.',
  'AI Safety Application CV',
  'Research Verification &amp; Data Quality CV',
  'Master CV &amp; Evidence Record',
  'data-testid="career-focus"',
  'data-testid="career-evidence"',
  'data-testid="career-documents"'
]) assertContains(index, needle, 'dist/index.html');
assertContains(index, D.identity.grayswanUrl, 'dist/index.html');
pass('Recruiter-focused homepage checked');

for (const [name, profile] of [['resume', P.aiSafety], ['research', P.researchQuality]]) {
  const html = pages[name];
  assertContains(html, profile.title.replaceAll('&', '&amp;'), `dist/${name}.html`);
  assertContains(html, 'Page 1 of 2', `dist/${name}.html`);
  assertContains(html, 'Page 2 of 2', `dist/${name}.html`);
  assertContains(html, 'C1 overall', `dist/${name}.html`);
  assertContains(html, 'code structure and behavior', `dist/${name}.html`);
}
pass('Specialized application CVs checked');

const master = pages.cv;
for (const needle of [
  'Master CV &amp; Evidence Record',
  'not presented as an independent software developer',
  'AI Safety CV',
  'Research &amp; Data Quality CV'
]) assertContains(master, needle, 'dist/cv.html');
pass('Master CV positioning checked');

const security = pages.security;
for (const needle of [
  'Model behavior evaluation record.',
  'What the record demonstrates',
  'Evaluation approach',
  'Limitations and interpretation',
  'Platform-confirmed model breaks',
  'indirect-function-call',
  'weak-password-change',
  'complete 26-wave activity table'
]) assertContains(security, needle, 'dist/security.html');
for (const needle of [
  'independently verified policy or alignment boundary failure',
  'tracking boundary resilience across major model architecture updates',
  'ensuring research directories and data pipelines are resilient',
  'Model Behavior &amp; Safety Case Study'
]) assertNotContains(security, needle, 'dist/security.html');
pass('Evaluation record evidence boundary checked');

const allGenerated = Object.values(pages).join('\n') + Object.values(canonical).join('\n');
assertContains(allGenerated, D.identity.jobTitle, 'Generated outputs');
assertContains(allGenerated, D.identity.secondaryTitle, 'Generated outputs');
for (const needle of [
  'AI Evaluation &amp; Research Verification Specialist',
  'AI Evaluation & Research Verification Specialist',
  'Founder &amp; Technical Product Builder',
  'Founder & Technical Product Builder',
  'Product Owner &amp; Technical Builder',
  'Creator &amp; Systems Builder'
]) assertNotContains(allGenerated, needle, 'Generated outputs');

const canonicalExpectations = [
  ['dist/index.html', 'https://mariomarcolongo.com/'],
  ['dist/cv.html', 'https://mariomarcolongo.com/cv.html'],
  ['dist/cv-resume.html', 'https://mariomarcolongo.com/cv-resume.html'],
  ['dist/cv-research.html', 'https://mariomarcolongo.com/cv-research.html'],
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
