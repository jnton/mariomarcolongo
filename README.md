# Mario Marcolongo — Personal Portfolio & Curriculum Vitae

> **AI Evaluation & Research Verification Specialist | Model Behavior Evaluation · Scientific Evidence Review · Evaluation Operations · Technical Research**
> 🌐 Live Website: [mariomarcolongo.com](https://mariomarcolongo.com) (`mariomarcolongo.org` redirects here)
> 🔍 Primary Source Verification: ORCID [0000-0003-2846-7115](https://orcid.org/0000-0003-2846-7115) · ENA Accession [PRJEB109744](https://www.ebi.ac.uk/ena/browser/view/PRJEB109744)

---

## Overview

This repository hosts the source code and single-source-of-truth (SSOT) data layer for **Mario Marcolongo's personal web portfolio and interactive curriculum vitae**. Engineered with **Astro** and deployed on **Cloudflare Pages**, the platform combines modern, dynamic web design with state-of-the-art **AI-assisted discovery** and **open-science verifiability**.

Every piece of biographical data, research infrastructure, professional experience, and technical skill is structured centrally. Both visual web pages and machine-readable dossiers (`llms.txt`, Markdown replicas, structured JSON-LD) are deterministically generated from this exact data source.

---

## Key Architectural Pillars

### 1. Single Source of Truth (`data/source.js`)
- **No Data Drift**: All portfolio items, career milestones, skills, key metrics, and publications reside cleanly in a centralized JavaScript module (`data/source.js`).
- **Unified Rendering**: The frontend pages (`src/pages/index.astro`, `src/pages/cv.astro`), AI dossiers, and custom PDF exporters pull from this exact SSOT during build time.

### 2. AI-Assisted & Agent-Ready Infrastructure
- **LLMs.txt Standard (`/llms.txt`, `/llms-full.txt`, `/cv-llm.txt`)**: Automated build scripts generate structured, clean Markdown dossiers optimized for large language models, AI search engines (`PerplexityBot`, `ClaudeBot`, `GPTBot`), and recruiter evaluation.
- **Build-Time Markdown Emitter (`src/integrations/markdown-emitter.mjs`)**: A custom Astro build integration that traverses generated static routes in `dist/` and emits pristine `.md` replicas (e.g., `index.md`, `cv.md`) with valid YAML frontmatter and stripped UI boilerplate.
- **Edge HTTP Content Negotiation (`functions/[[path]].js`)**: A custom Cloudflare Pages edge function inspects incoming requests. When queried by AI agents, command-line tools (`curl`, `HTTPie`), or clients requesting `Accept: text/markdown`, the edge function automatically serves clean Markdown dossiers (`llms-full.txt` or `cv-llm.txt`) while delivering rich, interactive HTML to human visitors.
- **WebMCP & A2A Discovery**: Integrates Model Context Protocol client registration (`navigator.ai` / `navigator.modelContext`) and Agent-to-Agent discovery headers (`Link: <.../llms.txt>; rel="describedby"`, `.well-known/agent-card.json`).

### 3. Publication-Grade CV & Modular CLI Tooling
- **Interactive Web CV (`/cv.html`)**: Features publication-grade typography, responsive layout, dark/light theme support, and a one-click **"Copy AI CV"** button that copies clean Markdown structured for LLM prompts.
- **Flawless Native Print Styles (`@media print`)**: Pressing `Cmd+P` / `Ctrl+P` renders a crisp, executive resume stripped of web navigation and optimized for ATS parsing and executive review.
- **Modular CV Generator (`scripts/generate-custom-cv.js`)**: A command-line script allowing tailored Markdown resumes by excluding specific projects or applying predefined profiles:
  ```bash
  # Generate a tailored CV excluding specific projects
  npm run cv:custom -- --exclude=emergent-humanity,telegram-bot --out=cv-tailored.md

  # Use a predefined profile (e.g., Campbell Collaboration focus)
  npm run cv:custom -- --profile=campbell --out=cv-campbell.md
  ```
- **Local Headless PDF Generator (`scripts/generate-cv-pdf.js`)**: Spins up a temporary local static server (`127.0.0.1`) and uses headless Chromium (`puppeteer`) to render exact, publication-ready A4 PDF resumes with custom running headers and footers (`Mario Marcolongo — Curriculum Vitae.pdf`).

---

## Repository Structure

```text
├── data/
│   └── source.js             # Single Source of Truth (SSOT) for all portfolio & CV content
├── src/
│   ├── pages/
│   │   ├── index.astro       # Main interactive portfolio landing page
│   │   └── cv.astro          # Comprehensive Curriculum Vitae page
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with WebMCP registration & JSON-LD schemas
│   ├── styles/               # Vanilla CSS design system & typography
│   └── integrations/
│       └── markdown-emitter.mjs # Custom Astro integration emitting .md replicas
├── functions/
│   └── [[path]].js           # Cloudflare Pages edge worker (content negotiation & headers)
├── scripts/
│   ├── build.js              # Core dossier compilation and build coordinator
│   ├── generate-llm-dossiers.js # Builds llms.txt, llms-full.txt, and cv-llm.txt
│   ├── generate-custom-cv.js # CLI tool for modular, profile-tailored CV generation
│   ├── generate-cv-pdf.js    # Puppeteer PDF generator for general CV
│   └── generate-favicons.js  # High-res favicon and manifest generator
└── public/                   # Static assets, favicons, sitemap.xml, robots.txt
```

---

## Getting Started & Commands

### Prerequisites
- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/jnton/mariomarcolongo.git
cd mariomarcolongo

# Install dependencies
npm install

# Start local development server (http://localhost:4321)
# Note: Automatically generates llms.txt dossiers before starting Astro
npm run dev
```

### Production Build
```bash
# Generate dossiers, compile Astro static assets, and emit Markdown replicas
npm run build
```

### Specialized Tasks
| Command | Description |
| :--- | :--- |
| `npm run generate:llms` | Compiles `data/source.js` into `llms.txt`, `llms-full.txt`, and `cv-llm.txt` |
| `npm run cv:custom` | Run modular CV generator (use `-- --help` for options) |
| `npm run pdf:cv` | Compile `dist/cv.html` into a local, publication-ready PDF using headless Chromium |
| `npm run generate:favicons` | Generate multi-resolution PNG/ICO favicons and `site.webmanifest` |

---

## Open Science & Primary Source Verification

All claims, open-source infrastructure projects, and Wikimedia contributions referenced across the portfolio are backed by verifiable public records:
- **ORCID Profile**: [https://orcid.org/0000-0003-2846-7115](https://orcid.org/0000-0003-2846-7115)
- **Primary Genomic Pipeline (`git-nome`)**: [https://github.com/jnton/git-nome](https://github.com/jnton/git-nome)
- **Raw Genomic Data (European Nucleotide Archive)**: [PRJEB109744](https://www.ebi.ac.uk/ena/browser/view/PRJEB109744)
- **Open Science Infrastructure**: [Yourself to Science™](https://yourselftoscience.org)

---

## License & Usage Notice

This repository is open-sourced to provide transparency into the technical implementation and architecture of a modern, AI-steered personal platform.

While the code and architectural patterns are open for educational reference and inspection, **the biographical content, personal data, project descriptions, and individual identity contained within `data/source.js` and associated files remain the exclusive intellectual property and personal data of Mario Marcolongo.**
