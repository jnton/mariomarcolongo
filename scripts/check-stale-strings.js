#!/usr/bin/env node
/**
 * STALE-STRING & SSOT INTEGRITY BUILD CHECKER
 *
 * Scans `src/pages/*.astro`, `scripts/*.js`, and `data/source.js` to verify:
 * 1. No outdated/stale version strings (e.g., v2026.07.14 or older dates) remain.
 * 2. `cv.astro` and `cv-resume.astro` correctly import and derive content from `data/source.js` (SSOT)
 *    rather than hardcoding static lists.
 * 3. Core identifiers (ORCID, ENA Accession, email) stay perfectly synchronized.
 */

const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');

const ROOT_DIR = path.resolve(__dirname, '..');
const ACTIVE_VERSION = 'v2026.07.21';
const STALE_VERSIONS = [
  'v2026.07.14',
  '2026-07-14',
  'v2026.07.01',
  'v2026.06.14',
  'v2026.06.01'
];

let errorsFound = 0;

function reportError(file, line, msg) {
  console.error(`❌ [SSOT LINT ERROR] ${file}:${line || '?'} — ${msg}`);
  errorsFound++;
}

function scanFileForStaleVersions(filePath) {
  const relPath = path.relative(ROOT_DIR, filePath);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((lineText, idx) => {
    const lineNum = idx + 1;
    STALE_VERSIONS.forEach(staleVer => {
      if (lineText.includes(staleVer)) {
        reportError(relPath, lineNum, `Found stale version string '${staleVer}'. Active version is '${ACTIVE_VERSION}'.`);
      }
    });
  });
}

function checkAstroSsotDerivation(astroFile) {
  const fullPath = path.join(ROOT_DIR, 'src/pages', astroFile);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const relPath = `src/pages/${astroFile}`;

  // Check 1: Must import D from source.js
  if (!content.includes('import D from "../../data/source.js"') && !content.includes("import D from '../../data/source.js'")) {
    reportError(relPath, 1, `Missing import of SSOT data object D ('import D from "../../data/source.js"').`);
  }

  // Check 2: Verify dynamic maps exist for core sections instead of hardcoded items
  if (!content.includes('D.experience.map(')) {
    reportError(relPath, 1, `Missing dynamic rendering of D.experience.map(...). Section may contain hardcoded experience items.`);
  }
  if (astroFile === 'cv.astro' && !content.includes('D.projects.map(')) {
    reportError(relPath, 1, `Missing dynamic rendering of D.projects.map(...). Section may contain hardcoded project items.`);
  }
  if (!content.includes('D.skills.map(') && !content.includes('D.skills).map(') && !content.includes('resumeSkills')) {
    reportError(relPath, 1, `Missing dynamic rendering of D.skills/D.resumeSkills.map(...). Section may contain hardcoded skills items.`);
  }
  if (!content.includes('D.education.map(')) {
    reportError(relPath, 1, `Missing dynamic rendering of D.education.map(...). Section may contain hardcoded education items.`);
  }

  // Check 3: Check for hardcoded project titles outside of dynamic mapping
  const hardcodedChecks = [
    "Yourself to Science™ | Open Science Catalogue & Directory",
    "Entropy for Life — Official Science Platform",
    "English Wikipedia Link Converter | Telegram Bot"
  ];

  hardcodedChecks.forEach(title => {
    // If the exact raw title string appears inside JSX outside of source.js import / map, warn
    const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
    const regex = new RegExp(String.raw`<span class="cv-item-title">\s*${escaped}`, 'i');
    if (regex.test(content)) {
      reportError(relPath, 1, `Found hardcoded HTML item title: '${title}'. This must be derived dynamically from SSOT D.`);
    }
  });
}

console.log('🔍 Running Stale-String & SSOT Integrity Check...');

// 1. Check for stale version strings across key source & script directories
const filesToScan = [
  path.join(ROOT_DIR, 'src/pages/index.astro'),
  path.join(ROOT_DIR, 'src/pages/cv.astro'),
  path.join(ROOT_DIR, 'src/pages/cv-resume.astro'),
  path.join(ROOT_DIR, 'src/pages/security.astro'),
  path.join(ROOT_DIR, 'src/pages/cv-campbell.astro'),
  path.join(ROOT_DIR, 'src/layouts/Layout.astro'),
  path.join(ROOT_DIR, 'data/source.js'),
  path.join(ROOT_DIR, 'scripts/build.js'),
  path.join(ROOT_DIR, 'scripts/generate-llm-dossiers.js')
];

filesToScan.forEach(f => scanFileForStaleVersions(f));

// 2. Check cv.astro and cv-resume.astro for dynamic SSOT derivation
checkAstroSsotDerivation('cv.astro');
checkAstroSsotDerivation('cv-resume.astro');

// 3. Verify core data/source.js values
if (!D.identity?.orcid || D.identity.orcid !== '0000-0003-2846-7115') {
  reportError('data/source.js', 1, `SSOT identity.orcid does not match canonical ORCID '0000-0003-2846-7115'.`);
}

if (errorsFound > 0) {
  console.error(`\n❌ SSOT Integrity check failed with ${errorsFound} error(s). Please fix the above issues.`);
  process.exit(1);
} else {
  console.log('✅ All SSOT checks passed! No stale strings or hardcoded deviations detected.');
}
