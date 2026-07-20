#!/usr/bin/env node
/**
 * UNIFIED STATIC SSOT BUILDER — Mario Marcolongo Portfolio & Dossiers
 *
 * 1. Reads single source of truth from `data/source.js`
 * 2. Generates clean, bug-free AI Dossiers (`llms.txt`, `llms-full.txt`, `cv-llm.txt`)
 * 3. Pre-renders static HTML for `index.html` and `cv.html` so zero client-side
 *    hydration is needed for content accessibility (AI agents, scrapers, non-JS browsers see 100%).
 */

const fs = require('fs');
const path = require('path');
const D = require('../data/source.js');

const ROOT_DIR = path.resolve(__dirname, '..');

// ==========================================
// 1. AI DOSSIER & CV MARKDOWN GENERATORS
// ==========================================

function formatProjectLinksText(p) {
  if (!p.links) return '';
  const parts = [];
  if (p.links.website) parts.push(`Website: ${p.links.website}`);
  if (p.links.playlist) parts.push(`Videos & Documentaries: ${p.links.playlist}`);
  if (p.links.authorPage) parts.push(`Author Page: ${p.links.authorPage}`);
  if (p.links.chromeStore) parts.push(`Chrome Store: ${p.links.chromeStore}`);
  if (p.links.edgeStore) parts.push(`Edge Store: ${p.links.edgeStore}`);
  if (p.links.github || p.links.githubOrg) parts.push(`GitHub: ${p.links.github || p.links.githubOrg}`);
  if (p.links.bot || p.links.telegramBot) parts.push(`Bot: ${p.links.bot || p.links.telegramBot}`);
  if (p.links.youtube) parts.push(`YouTube: ${p.links.youtube}`);
  if (p.links.wikimedia) parts.push(`Wikimedia: ${p.links.wikimedia}`);
  if (p.links.doi) parts.push(`DOI: ${p.links.doi}`);
  if (p.links.fairsharing) parts.push(`FAIRsharing: ${p.links.fairsharing}`);
  if (p.links.tableau) parts.push(`Tableau: ${p.links.tableau}`);
  if (p.links.flourish) parts.push(`Flourish: ${p.links.flourish}`);
  return parts.join(' | ');
}

function generateLlmsTxt(d) {
  let out = `# ${d.identity.name} — ${d.identity.jobTitle || 'Scientific AI Evaluation & Research Data Specialist'}\n\n`;
  out += `> ${d.summary}\n\n`;

  out += `## Quick Facts & Key Metrics\n`;
  if (d.stats && d.stats.length) {
    d.stats.forEach(s => {
      out += `- **${s.value}** (${s.label}): ${s.detail}\n`;
    });
  }
  out += `- Work Authorization: ${d.identity.relocation}\n`;
  out += `- Languages: ${d.identity.languages}\n\n`;

  out += `## Core Competencies\n`;
  if (d.skills && d.skills.length) {
    d.skills.forEach(s => {
      out += `- ${s}\n`;
    });
  }
  out += `\n`;

  out += `## Links\n`;
  out += `- [Website](${d.identity.domain}): Main portfolio homepage\n`;
  out += `- [Full Profile](${d.identity.domain}/llms-full.txt): Comprehensive AI profile and extended curriculum vitae\n`;
  out += `- [Full CV (Markdown)](${d.identity.domain}/cv-llm.txt): Unified AI-compatible markdown CV\n`;
  out += `- [Email](mailto:${d.identity.email}): Direct email contact\n`;
  out += `- [LinkedIn](${d.identity.linkedin}): Professional LinkedIn profile\n`;
  out += `- [ORCID](${d.identity.orcidUrl}): ORCID scientific researcher profile\n`;
  out += `- [GitHub](${d.identity.github}): GitHub profile and open-source repositories\n`;
  if (d.identity.agentReadyUrl) {
    out += `- [Agent-Readiness Audit](${d.identity.agentReadyUrl}): Verified full marks on Cloudflare isitagentready.com audit\n`;
    out += `- [A2A Agent Card](${d.identity.domain}/.well-known/agent-card.json): Agent-to-Agent discovery card\n`;
  }
  out += `- [Genomic Pipeline Codebase](https://github.com/jnton/git-nome): Open-source pipeline for clinical/research genome analysis\n`;
  if (d.identity.portfolioRepo) out += `- [Portfolio SSOT Codebase](${d.identity.portfolioRepo}): Source code and Single Source of Truth for this portfolio\n`;

  return out;
}

function generateLlmsFullTxt(d) {
  let out = `# ${d.identity.name} — ${d.identity.jobTitle || 'Comprehensive Profile & Curriculum Vitae'}\n\n`;
  out += `## Overview\n${d.summary}\n\n`;

  out += `## Core Pillars & Expertise\n\n`;
  if (d.pillars) {
    d.pillars.forEach((p, idx) => {
      out += `### ${idx + 1}. ${p.title}\n`;
      out += `${p.lead}\n\n`;
      if (p.highlights && p.highlights.length) {
        p.highlights.forEach(h => {
          out += `- **${h.label}**: ${h.detail}\n`;
        });
        out += `\n`;
      }
    });
  }

  out += `## Experience & Leadership\n\n`;
  if (d.experience) {
    d.experience.forEach(exp => {
      out += `### ${exp.role} — ${exp.org} (${exp.period})${exp.tag ? ` [${exp.tag}]` : ''}\n`;
      if (exp.bullets) {
        exp.bullets.forEach(b => {
          out += `- ${b}\n`;
        });
      }
      out += `\n`;
    });
  }

  out += `## Research & Open Science Contributions\n\n`;
  if (d.research) {
    d.research.forEach(r => {
      const linkUrl = formatProjectLinksText(r);
      out += `### ${r.role} — ${r.org} (${r.period})${r.tag ? ` [${r.tag}]` : ''}${linkUrl ? ` | ${linkUrl}` : ''}\n`;
      if (r.bullets) {
        r.bullets.forEach(b => {
          out += `- ${b}\n`;
        });
      }
      out += `\n`;
    });
  }

  out += `## Deployed Systems & Open-Source Projects\n\n`;
  if (d.projects) {
    d.projects.forEach(p => {
      const linkUrl = formatProjectLinksText(p);
      out += `### ${p.title}${linkUrl ? ` (${linkUrl})` : ''}\n`;
      out += `**Role**: ${p.role}\n`;
      if (p.tech && p.tech.length) {
        out += `**Tech Stack**: ${p.tech.join(', ')}\n\n`;
      }
      out += `${p.description}\n\n`;
      if (p.highlights && p.highlights.length) {
        p.highlights.forEach(h => {
          out += `- ${h}\n`;
        });
        out += `\n`;
      }
    });
  }

  out += `## Empirical Visualizations & Open Data\n\n`;
  if (d.visualizations) {
    d.visualizations.forEach(v => {
      out += `### ${v.title}\n`;
      out += `${v.caption}\n`;
      if (v.fileUrl) out += `Source: ${v.fileUrl}\n`;
      out += `\n`;
    });
  }

  out += `## Education & Certifications\n\n`;
  if (d.education) {
    d.education.forEach(e => {
      out += `- **${e.title}** ${e.period ? `(${e.period})` : ''} — ${e.detail}\n`;
    });
    out += `\n`;
  }

  out += `## Verification & Identifiers\n`;
  out += `- [Email](mailto:${d.identity.email}): Direct email contact\n`;
  out += `- [Website](${d.identity.domain}): Main portfolio homepage\n`;
  out += `- [ORCID](${d.identity.orcidUrl}): ORCID scientific researcher profile\n`;
  out += `- [LinkedIn](${d.identity.linkedin}): Professional LinkedIn profile\n`;
  out += `- [GitHub](${d.identity.github}): GitHub profile and open-source repositories\n`;
  if (d.identity.agentReadyUrl) {
    out += `- [Agent-Readiness Audit](${d.identity.agentReadyUrl}): Verified full marks on Cloudflare isitagentready.com audit\n`;
    out += `- [A2A Agent Card](${d.identity.domain}/.well-known/agent-card.json): Agent-to-Agent discovery card\n`;
  }
  out += `- [Genomic Pipeline Codebase](https://github.com/jnton/git-nome): Open-source pipeline for clinical/research genome analysis\n`;
  if (d.identity.portfolioRepo) out += `- [Portfolio SSOT Codebase](${d.identity.portfolioRepo}): Source code and Single Source of Truth for this portfolio\n`;
  out += `\n`;

  return out;
}

function generateCvLlmTxt(d) {
  let out = `# ${d.identity.name} — ${d.identity.jobTitle || 'Curriculum Vitae'} (AI / LLM Compatible Markdown)\n`;
  out += `> ${d.identity.headline}\n`;
  out += `> Work Authorization: ${d.identity.relocation}\n`;
  out += `> Email: ${d.identity.email} | Web: ${d.identity.domain} | ORCID: ${d.identity.orcid}\n\n`;
  out += `---\n\n`;

  out += `## Executive Summary\n${d.summary}\n\n---\n\n`;

  out += `## Core Competencies & Technical Skills\n`;
  if (d.skills) {
    d.skills.forEach(s => {
      out += `- ${s}\n`;
    });
  }
  out += `\n---\n\n`;

  out += `## Professional Experience\n\n`;
  if (d.experience) {
    d.experience.forEach(exp => {
      out += `### ${exp.role} — ${exp.org}\n`;
      out += `*${exp.period}*${exp.tag ? ` · **[${exp.tag}]**` : ''}\n\n`;
      if (exp.bullets) {
        exp.bullets.forEach(b => {
          out += `- ${b}\n`;
        });
      }
      out += `\n`;
    });
  }
  out += `---\n\n`;

  out += `## Research & Open Science Infrastructure\n\n`;
  if (d.research) {
    d.research.forEach(r => {
      const linkUrl = formatProjectLinksText(r);
      out += `### ${r.role} — ${r.org}\n`;
      out += `*${r.period}*${r.tag ? ` · **[${r.tag}]**` : ''}${linkUrl ? ` | ${linkUrl}` : ''}\n\n`;
      if (r.bullets) {
        r.bullets.forEach(b => {
          out += `- ${b}\n`;
        });
      }
      out += `\n`;
    });
  }
  out += `---\n\n`;

  out += `## Deployed Systems & Open-Source Projects\n\n`;
  if (d.projects) {
    d.projects.forEach(p => {
      const linkUrl = formatProjectLinksText(p);
      out += `### ${p.title}\n`;
      out += `**${p.role}**${linkUrl ? ` | ${linkUrl}` : ''}\n\n`;
      out += `${p.description}\n\n`;
    });
  }
  out += `---\n\n`;

  out += `## Education & Certifications\n\n`;
  if (d.education) {
    d.education.forEach(e => {
      out += `- **${e.title}** ${e.period ? `(${e.period})` : ''} — ${e.detail}\n`;
    });
  }
  out += `\n`;

  out += `## Contact & Identifiers\n`;
  out += `- [Email](mailto:${d.identity.email}): Direct email contact\n`;
  out += `- [Website](${d.identity.domain}): Main portfolio homepage\n`;
  out += `- [ORCID](${d.identity.orcidUrl}): ORCID scientific researcher profile\n`;
  out += `- [LinkedIn](${d.identity.linkedin}): Professional LinkedIn profile\n`;
  out += `- [GitHub](${d.identity.github}): GitHub profile and open-source repositories\n`;
  if (d.identity.agentReadyUrl) {
    out += `- [Agent-Readiness Audit](${d.identity.agentReadyUrl}): Verified full marks on Cloudflare isitagentready.com audit\n`;
    out += `- [A2A Agent Card](${d.identity.domain}/.well-known/agent-card.json): Agent-to-Agent discovery card\n`;
  }
  out += `- [Genomic Pipeline Codebase](https://github.com/jnton/git-nome): Open-source pipeline for clinical/research genome analysis\n`;
  if (d.identity.portfolioRepo) out += `- [Portfolio SSOT Codebase](${d.identity.portfolioRepo}): Source code and Single Source of Truth for this portfolio\n`;
  out += `\n`;

  return out;
}

function buildDossiers() {
  console.log('Generating AI / LLM Markdown files from data/source.js...');
  const llmsTxt = generateLlmsTxt(D);
  const llmsFullTxt = generateLlmsFullTxt(D);
  const cvLlmTxt = generateCvLlmTxt(D);

  fs.writeFileSync(path.join(ROOT_DIR, 'llms.txt'), llmsTxt, 'utf8');
  fs.writeFileSync(path.join(ROOT_DIR, 'llms-full.txt'), llmsFullTxt, 'utf8');
  fs.writeFileSync(path.join(ROOT_DIR, 'cv-llm.txt'), cvLlmTxt, 'utf8');

  const publicDir = path.join(ROOT_DIR, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFullTxt, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'cv-llm.txt'), cvLlmTxt, 'utf8');

  const publicDataDir = path.join(publicDir, 'data');
  if (!fs.existsSync(publicDataDir)) {
    fs.mkdirSync(publicDataDir, { recursive: true });
  }
  fs.copyFileSync(path.join(ROOT_DIR, 'data/source.js'), path.join(publicDataDir, 'source.js'));

  console.log(`✓ Generated llms.txt (${llmsTxt.length} bytes)`);
  console.log(`✓ Generated llms-full.txt (${llmsFullTxt.length} bytes)`);
  console.log(`✓ Generated cv-llm.txt (${cvLlmTxt.length} bytes)`);
}

if (require.main === module) {
  buildDossiers();
}

module.exports = {
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateCvLlmTxt,
  buildDossiers
};
