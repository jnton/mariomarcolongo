#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const file = path.join(ROOT, 'dist', 'cv-tiktok-search-qa.html');
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}
function assertContains(content, needle, label) {
  if (!content.includes(needle)) fail(`${label} is missing: ${needle}`);
}
function assertNotContains(content, needle, label) {
  if (content.includes(needle)) fail(`${label} contains prohibited text: ${needle}`);
}
function normalizeHtmlText(content) {
  return String(content)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

if (!fs.existsSync(file)) {
  fail('dist/cv-tiktok-search-qa.html is missing. Run npm run build first.');
} else {
  const html = fs.readFileSync(file, 'utf8');
  const text = normalizeHtmlText(html);

  for (const needle of [
    'Search Quality & Evaluation Operations Specialist',
    'Quality inspection · standards alignment · Italian localization · calibration-oriented case review · data quality',
    'Native Italian and English-C1',
    'Scientific Content Quality & Operations Contractor',
    '80 documented published content contributions',
    'quality control',
    'actionable feedback',
    'Model-Behavior Evaluator',
    'top 6%',
    '113 platform-displayed breaks',
    '255 submissions',
    'Notandia (formerly MDPI Filter)',
    'ambiguity skipping',
    'false-positive boundaries',
    'Crossref/Retraction Watch',
    '4,317 auditable contributions',
    'Documented standards and validation workflow',
    '55 verified research-participation resources',
    'Quality inspection and bad-case analysis',
    'Standards alignment and case calibration',
    'Italian localization and market context',
    'Search and data quality',
    'Sensitive-content and stakeholder feedback',
    'degree not completed',
    'Open to relocating to Bucharest',
    'Evaluation record ↗ | Public profile ↗',
    'Product record ↗ | Browser repository ↗ | Zotero repository ↗',
    'Page 1 of 2',
    'Page 2 of 2'
  ]) assertContains(text, needle, 'TikTok Search QA CV');

  for (const needle of [
    'https://entropyforlife.it/mario-marcolongo-entropy-for-life/',
    'https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf',
    'https://mariomarcolongo.com/notandia.html',
    'https://github.com/notandia/browser-extension',
    'https://github.com/notandia/zotero-plugin',
    'https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo',
    'https://yourselftoscience.org/stats',
    'id="cvPhoneSlot"',
    'class="application-link-separator"',
    '<meta name="robots" content="noindex,nofollow"'
  ]) assertContains(html, needle, 'TikTok Search QA CV HTML');

  for (const prohibited of [
    'Bachelor’s degree',
    "Bachelor's degree",
    'completed bachelor',
    'Search Operations Quality Assurance Analyst at TikTok',
    'TikTok employee',
    'formal QA calibration experience',
    'managed specialists',
    'trained a search operations team',
    'production search QA experience',
    'independent software developer'
  ]) assertNotContains(text, prohibited, 'TikTok Search QA CV');

  const pageCount = (html.match(/class="application-page"/g) || []).length;
  if (pageCount !== 2) fail(`TikTok Search QA CV must render exactly two application pages; found ${pageCount}.`);
}

if (failures) {
  console.error(`\nTikTok Search QA CV verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('TikTok Search QA CV verification passed.');
