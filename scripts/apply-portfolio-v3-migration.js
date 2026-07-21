#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

function update(relativePath, replacements) {
  const filePath = path.join(ROOT, relativePath);
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [from, to, label] of replacements) {
    if (!content.includes(from)) {
      throw new Error(`${relativePath}: missing migration target for ${label}`);
    }
    content = content.replace(from, to);
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${relativePath}`);
}

update('data/source.js', [
  [
    'jobTitle: "AI Safety Evaluation & Research Verification Specialist",',
    'jobTitle: "Research, Evidence & AI Operations Specialist",',
    'canonical job title'
  ],
  [
    'secondaryTitle: "Adversarial Model Testing · Scientific Evidence Review · Evaluation Operations · Data Quality",',
    'secondaryTitle: "AI Safety · Knowledge Integrity · Editorial & Research Operations · Open Science & Data Quality",',
    'secondary title'
  ],
  [
    'headline: "I test model behavior and document what holds up.",',
    'headline: "I investigate claims, test systems, and build evidence workflows.",',
    'headline'
  ],
  [
    'role: "AI safety evaluation and research-verification specialist with sustained model-behavior testing, eight years of auditable claim and source work, paid scientific fact-checking, an open research-participation directory, and public open-science records.",',
    'role: "Research, evidence and AI operations specialist working across scientific verification, editorial and research programs, knowledge integrity, adversarial AI testing, open science and data quality.",',
    'role statement'
  ],
  [
    'heroStatement: "Adversarial model testing, scientific evidence verification, research-workflow ownership, structured-data quality and public open-science records.",',
    'heroStatement: "Investigating claims, testing systems and building evidence workflows across research, public knowledge, AI behavior and technical operations.",',
    'hero statement'
  ],
  [
    'summary: "AI safety evaluation and research-verification specialist with sustained self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. Gray Swan Proving Ground participant with 75 platform-confirmed model breaks across 156 submissions and a top-8% rank band among listed participants as of July 2026. Brings eight years of auditable claim verification, paid scientific fact-checking, structured research workflows, data-provenance discipline and clear evidence-bound reporting.",',
    'summary: "Research, evidence and AI operations specialist with eight years of auditable public-source and structured-data work, paid scientific fact-checking and writing, community-facing research facilitation, ownership of an open research-participation directory, and sustained adversarial testing of AI systems. The profile supports four application lanes: AI safety and model behavior; research, editorial and community operations; knowledge integrity and trust; and open science and data quality. Public claims are reported with explicit evidence boundaries, while technical implementation is described accurately as code-literate, AI-assisted operations rather than independent software development.",',
    'broad summary'
  ]
]);

update('src/pages/cv.astro', [
  [
    '<p>This preserves the complete record used to create tailored applications. For most jobs, send one of the two specialized two-page CVs instead.</p>',
    '<p>This preserves the complete record used to create tailored applications. For most jobs, send one of the four specialized two-page CVs instead.</p>',
    'master guidance count'
  ],
  [
    `<div class="application-guide-actions">
        <a class="btn btn-primary" href="/cv-resume.html">AI Safety CV</a>
        <a class="btn" href="/cv-research.html">Research & Data Quality CV</a>
        <button class="btn" type="button" onclick="window.print()">Print / Save PDF</button>
      </div>`,
    `<div class="application-guide-actions">
        <a class="btn btn-primary" href="/cv-resume.html">AI Safety CV</a>
        <a class="btn" href="/cv-editorial.html">Editorial & Community CV</a>
        <a class="btn" href="/cv-integrity.html">Trust & Knowledge Integrity CV</a>
        <a class="btn" href="/cv-research.html">Research & Data Quality CV</a>
        <button class="btn" type="button" onclick="window.print()">Print / Save PDF</button>
      </div>`,
    'master application links'
  ],
  [
    '<div class="master-title">AI Safety Evaluation · Research Verification · Data Quality · Technical Operations</div>',
    '<div class="master-title">Research · Evidence · Knowledge Integrity · AI Operations</div>',
    'master title'
  ],
  [
    'Evidence-focused specialist combining adversarial model testing, paid scientific fact-checking, open research workflows, structured-data quality and public-source verification. Code-literate and able to inspect structure and behavior, define requirements, test implementations and guide AI-assisted technical iteration; not presented as an independent software developer.',
    'Evidence-focused specialist combining paid scientific fact-checking and writing, editorial and research operations, public-source and provenance work, open research workflows, structured-data quality and adversarial model testing. Code-literate and able to inspect structure and behavior, define requirements, test implementations and guide AI-assisted technical iteration; not presented as an independent software developer.',
    'master summary'
  ],
  [
    '<a href={`mailto:${P.shared.email}`}>{P.shared.email}</a><br />',
    '<a href={`mailto:${P.shared.email}`}>{P.shared.email}</a><br />\n          <a id="cvPhoneSlot" hidden></a>',
    'master private phone slot'
  ]
]);

update('src/pages/integrity.astro', [
  [
    '<script is:inline>document.documentElement.classList.add("v3-js");</script>',
    `<script is:inline>document.documentElement.classList.add("v3-js");</script>
    <script type="application/ld+json" set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: pageTitle,
      description: pageDescription,
      url: "https://mariomarcolongo.com/integrity.html",
      mainEntity: { "@id": "https://mariomarcolongo.com/#person" },
      about: ["Knowledge integrity", "Open-source research", "Source provenance", "Trust and safety"]
    })}></script>`,
    'integrity JSON-LD'
  ]
]);

console.log('Portfolio v3 canonical migration complete.');
