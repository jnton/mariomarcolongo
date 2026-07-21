# Mario Marcolongo — Portfolio & Application CV System

> **Research, Evidence & AI Operations Specialist**  
> AI Safety · Knowledge Integrity · Editorial & Research Operations · Open Science & Data Quality

Live website: [mariomarcolongo.com](https://mariomarcolongo.com)

## Purpose

This repository powers Mario Marcolongo's public portfolio, comprehensive evidence record, public work samples and role-specific application CVs. The architecture deliberately avoids forcing a diverse evidence base into one narrow job title.

The public portfolio supports four credible application lenses:

1. **AI Safety & Model Behavior** — adversarial testing, safeguards, trust & safety and evaluation operations.
2. **Research, Editorial & Community Operations** — evidence synthesis, editorial production, research programs, science communication and community engagement.
3. **Knowledge Integrity, Trust & Investigations** — source provenance, public-record research, structured-data integrity and ethical open-source research.
4. **Open Science & Data Quality** — scientific verification, metadata, provenance, knowledge graphs and human-data quality.

The long-term high-revenue directions include AI red-team engineering, automated evaluation, trust/integrity operations, technical program management and senior research/AI operations. The portfolio distinguishes code literacy and AI-assisted technical delivery from independent software development.

## Document and evidence model

- **Portfolio (`/`)** — broad public overview, interactive role lenses, selected work samples, project library and document studio.
- **Knowledge Integrity Work Samples (`/integrity.html`)** — public provenance, source-monitoring, entity-reconciliation and structured-data cases with explicit limitations.
- **Model Behavior Record (`/security.html`)** — scope, methodology, platform-reported activity and evidence boundaries for Gray Swan participation.
- **AI Safety & Adversarial Testing CV (`/cv-resume.html`)** — two-page application document.
- **Research, Editorial & Community Operations CV (`/cv-editorial.html`)** — two-page application document for Campbell-style and related evidence-organization roles.
- **Trust, Safety & Knowledge Integrity CV (`/cv-integrity.html`)** — two-page application document for integrity, OSINT-support and trust & safety analyst roles.
- **Research Verification & Data Quality CV (`/cv-research.html`)** — two-page application document for scientific evidence, provenance, metadata and AI-quality roles.
- **Master CV (`/cv.html`)** — comprehensive evidence archive used to create tailored applications; not the default attachment.

All four specialized application CVs are generated and verified as exactly two A4 pages. The master CV remains intentionally comprehensive and may span more pages.

## Private phone number in local PDFs

The public source and generated website do not contain a personal phone number. To include it in local PDFs, set `CV_PHONE` only in the local environment:

```bash
CV_PHONE="+39 ..." npm run pdf
```

The PDF generator injects the value at render time into all four specialized CVs and the master CV. The value is not written into tracked source files or public HTML.

## Sensitive research collaboration evidence

The focus-group collaboration is described publicly in a privacy-safe, institution-neutral form until explicit permission is obtained from the supervising professor. The portfolio may describe Mario's own activities, working methods and learning outcomes, but it must not imply institutional endorsement, identify another volunteer through a personal relationship, or disclose participant information.

Unattributed theses can support that the research project and two-autistic-facilitator model existed, but they do not by themselves verify Mario's identity or role. A named institutional version, public link, recommendation or reference should be added only after the professor confirms the dates, responsibilities, permitted attribution and reference status.

## Evidence architecture

- `data/source.js` — canonical factual dossier.
- `data/application-profiles.js` — role-specific CV selection and wording.
- `data/portfolio-v3.js` — public role lenses, work samples, project taxonomy and document studio.

Generated outputs include:

- `llms.txt`
- `llms-full.txt`
- `cv-llm.txt`
- static HTML mirrors for all public routes
- four specialized two-page PDFs
- a comprehensive master-CV PDF
- responsive light/dark screenshots for visual review

## Core commands

```bash
npm ci
npm run build
npm run verify:render
npm run pdf:resume
npm run pdf:cv
```

The production build fails closed on stale positioning, unsupported claims, missing generated files, invalid JSON-LD and inconsistent dossier mirrors. Rendering checks cover desktop, tablet and mobile in light and dark themes, interactive role-lens and project-filter behavior, plus a JavaScript-disabled homepage.

## Public records

- [ORCID 0000-0003-2846-7115](https://orcid.org/0000-0003-2846-7115)
- [Gray Swan Proving Ground profile](https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf)
- [Wikimedia CentralAuth record](https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo)
- [ENA accession PRJEB109744](https://www.ebi.ac.uk/ena/browser/view/PRJEB109744)
- [Yourself to Science](https://yourselftoscience.org)

## Licensing

Licensing differs by component and is documented at the relevant project level. Portfolio source code, project datasets and editorial content must not be treated as sharing one blanket licence.
