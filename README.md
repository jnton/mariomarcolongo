# Mario Marcolongo — Portfolio & Application CV System

> **AI Safety Evaluation & Research Verification Specialist**  
> Adversarial Model Testing · Scientific Evidence Review · Evaluation Operations · Data Quality

Live website: [mariomarcolongo.com](https://mariomarcolongo.com)

## Purpose

This repository powers Mario Marcolongo's public portfolio, comprehensive evidence record and role-specific application CVs. The system is optimized around the highest-upside credible career path supported by the current evidence base:

1. **Primary lane:** AI safety evaluation, adversarial model testing, safeguards operations, trust & safety and evaluation operations.
2. **Secondary lane:** research verification, scientific and biomedical AI quality, structured-data quality, provenance and research operations.
3. **Long-term direction:** AI red-team and automated-evaluation engineering after independently verifiable Python, application-security, automation and professional team experience are added.

The portfolio deliberately distinguishes code literacy and AI-assisted technical delivery from independent software development.

## Document model

- **Portfolio (`/`)** — curated hiring surface with selected evidence and clear role positioning.
- **Evaluation record (`/security.html`)** — concise public work sample with scope, methodology, platform-reported activity and explicit limitations.
- **AI Safety Evaluation CV (`/cv-resume.html`)** — two-page application CV for model-behavior, safeguards, adversarial QA and trust & safety roles.
- **Research Verification & Data Quality CV (`/cv-research.html`)** — two-page application CV for scientific evidence, research operations, provenance and data-quality roles.
- **Master CV (`/cv.html`)** — comprehensive evidence archive used to create tailored applications; not the default attachment.

The two specialized application CVs are generated and verified as exactly two A4 pages. The master CV remains intentionally comprehensive and may span more pages.

## Evidence architecture

`data/source.js` remains the canonical factual dossier. `data/application-profiles.js` defines role-specific selection and wording without changing the underlying records.

Generated outputs include:

- `llms.txt`
- `llms-full.txt`
- `cv-llm.txt`
- static HTML mirrors
- two specialized two-page PDFs
- a comprehensive master-CV PDF

## Core commands

```bash
npm ci
npm run build
npm run verify:render
npm run pdf:resume
npm run pdf:cv
```

The production build fails closed on stale positioning, unsupported claims, missing generated files, invalid JSON-LD and inconsistent dossier mirrors. Rendering checks cover desktop, tablet and mobile in light and dark themes, plus a JavaScript-disabled homepage.

## Public records

- [ORCID 0000-0003-2846-7115](https://orcid.org/0000-0003-2846-7115)
- [Gray Swan Proving Ground profile](https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf)
- [Wikimedia CentralAuth record](https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo)
- [ENA accession PRJEB109744](https://www.ebi.ac.uk/ena/browser/view/PRJEB109744)
- [Yourself to Science](https://yourselftoscience.org)

## Licensing

Licensing differs by component and is documented at the relevant project level. Portfolio source code, project datasets and editorial content must not be treated as sharing one blanket licence.
