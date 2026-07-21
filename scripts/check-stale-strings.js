#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');

const ROOT = path.resolve(__dirname, '..');
const EXPECTED = {
  jobTitle: 'Research, Evidence & AI Operations Specialist',
  secondaryTitle: 'AI Safety · Knowledge Integrity · Editorial & Research Operations · Open Science & Data Quality',
  email: 'me@mariomarcolongo.com',
  orcid: '0000-0003-2846-7115',
  ena: 'PRJEB109744',
  version: 'v2026.07.21',
  graySwanId: '6a57be70d15e123775a1e9cf'
};

const REQUIRED = [
  'package.json', 'package-lock.json', 'data/source.js', 'data/application-profiles.js',
  'data/portfolio-human.js', 'src/layouts/Layout.astro', 'src/components/SiteNav.astro',
  'src/components/SiteFooter.astro', 'src/components/ApplicationCv.astro', 'src/pages/index.astro',
  'src/pages/integrity.astro', 'src/pages/cv.astro', 'src/pages/cv-resume.astro',
  'src/pages/cv-research.astro', 'src/pages/cv-editorial.astro', 'src/pages/cv-integrity.astro',
  'src/pages/security.astro', 'src/styles/global.css', 'src/styles/career-v2.css',
  'src/styles/human-portfolio.css', 'src/styles/integrity.css', 'src/styles/v3-accessibility.css',
  'scripts/lib/dossier-generators.js', 'scripts/generate-llm-dossiers.js', 'scripts/postbuild.js',
  'scripts/verify-dist.js', 'scripts/verify-rendering.js', 'public/.well-known/api-catalog',
  'public/.well-known/agent-card.json', 'public/.well-known/mcp/server-card.json',
  'public/robots.txt', 'public/sitemap.xml', 'public/site.webmanifest'
];

const SCAN_ROOTS = [
  'data', 'src', 'package.json', 'README.md', 'public/.well-known',
  'public/robots.txt', 'public/sitemap.xml', 'public/site.webmanifest'
];

const PROHIBITED = [
  ['independently verified policy or alignment boundary failure', 'Unsupported independent-verification claim'],
  ['tracking boundary resilience across major model architecture updates', 'Unsupported architecture-update inference'],
  ['ensuring research directories and data pipelines are resilient', 'Unsupported security-assurance claim'],
  ['Released under CC BY 4.0 / Open Science', 'Incorrect blanket licence'],
  ['biobanking platform', 'Incorrect Yourself to Science description'],
  ['Model Behavior & Safety Case Study', 'Outdated evaluation-page positioning'],
  ['AI Evaluation & Scientific Research Verification Specialist', 'Competing primary title'],
  ['Scientific AI Evaluation & Research Data Specialist', 'Competing primary title'],
  ['AI Safety Evaluation & Research Verification Specialist', 'Rejected narrow umbrella title'],
  ['C2 Reading/Listening, B2 Writing/Speaking', 'Unnecessary language subscore emphasis']
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
for (const marker of ['human-capabilities', 'human-work', 'human-documents']) {
  if (!indexSource.includes(`data-testid="${marker}"`)) fail('src/pages/index.astro', 1, `Missing homepage marker ${marker}.`);
}
for (const requiredText of [
  'I make difficult evidence easier to', 'Three useful verbs', 'Selected work',
  'Work you can inspect, reuse or challenge.', 'One evidence base. Different application documents.',
  'Let’s talk about difficult evidence.'
]) {
  if (!indexSource.includes(requiredText)) fail('src/pages/index.astro', 1, `Homepage is missing human-centered content: ${requiredText}`);
}
for (const rejectedText of ['class="v3-network"', 'Explore role lenses', 'One profile. Four credible lenses.']) {
  if (indexSource.includes(rejectedText)) fail('src/pages/index.astro', 1, `Homepage still contains rejected design content: ${rejectedText}`);
}

const integritySource = fs.readFileSync(path.join(ROOT, 'src/pages/integrity.astro'), 'utf8');
for (const requiredText of ['evidence trail survives scrutiny', 'Evidence boundary', 'Ethical boundary']) {
  if (!integritySource.includes(requiredText)) fail('src/pages/integrity.astro', 1, `Integrity work sample is missing: ${requiredText}`);
}

const securitySource = fs.readFileSync(path.join(ROOT, 'src/pages/security.astro'), 'utf8');
for (const requiredText of ['Model behavior evaluation record.', 'What the record demonstrates', 'Limitations and interpretation']) {
  if (!securitySource.includes(requiredText)) fail('src/pages/security.astro', 1, `Evaluation record is missing required text: ${requiredText}`);
}

const navSource = fs.readFileSync(path.join(ROOT, 'src/components/SiteNav.astro'), 'utf8');
for (const requiredText of ['aria-pressed="false"', 'Switch to dark theme', 'Switch to light theme', 'Work Samples', 'CVs', 'Master CV']) {
  if (!navSource.includes(requiredText)) fail('src/components/SiteNav.astro', 1, `Navigation is missing required text: ${requiredText}`);
}

if (failures) {
  console.error(`\nSource integrity check failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('Source integrity check passed.');
