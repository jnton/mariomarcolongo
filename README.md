# Mario Marcolongo — Personal Research & Systems Portfolio

A state-of-the-art, AI-steered, SEO-perfect personal web platform engineered for deployment on **Cloudflare Pages** (`mariomarcolongo.com`, with `mariomarcolongo.org` redirecting).

## Architecture & Features

### 1. Interactive PDF CV Studio & Live Editor (`cv.html`)
- **Live In-Browser Editing (`✏️ Enable Live Editor`)**: Click "Enable Live Editor" to edit any text, bullet point, or section directly in your browser. Changes can be saved instantly to browser local storage (`💾 Save Draft`) or reset (`🔄 Reset`).
- **Tailored Profile Presets**: Switch instantly between **Full Executive Profile**, **Applied AI & Systems Builder**, and **Genomics & Data Science** presets.
- **Flawless Native Print PDF (`@media print`)**: Pressing `Cmd+P` / `Ctrl+P` or clicking **"🖨️ Print / Save PDF"** strips all web controls and renders a publication-grade 2-page executive resume ready for ATS parsing and executive review.

### 2. Secure Anti-Scraping Contact Shield
- **The Scraper Defense Problem**: Putting phone numbers or email addresses in plain HTML exposes them to automated harvesters, spam bots, and LLM scrapers.
- **Human Verification Shield**: Contact data is split/obfuscated in Javascript (`_obf` array). Automated scrapers see zero contact text in the HTML DOM.
- **Click-to-Reveal**: Human visitors click **"🔒 Click to Reveal Contact Details"** to dynamically reconstruct clickable `mailto:` or `tel:` links. When printing to PDF, the contact details are cleanly included for recruiters.

### 3. Memorable & "Wow!" Visual Design (`index.html`)
- **Sleek Dynamic Theme System**: Supports both deep luxury dark mode and publication-grade light mode (`data-theme`).
- **Interactive Knowledge Graph (Euler Diagram)**: Interactive domain filtering (`GENETICS`, `EPIDEMIOLOGY`, `POLICY DATA`, `SYSTEMS & TOOLING`) that animates and spotlights matching work cards.
- **Interactive Evidence Modals**: Clicking any work artifact opens an inspection drawer showing the citation, primary data methodology, and verifiable proof of third-party reuse.

### 4. Flawless SEO & Cloudflare Pages Edge Readiness
- **Complete Schema.org Knowledge Graph**: `JSON-LD` schemas for `Person`, `ProfilePage`, and `ScholarlyArticle` linking directly to ORCID (`0000-0003-2846-7115`), Wikipedia contributions, `yourselftoscience.org`, and `entropyforlife.it`.
- **OpenGraph & Twitter Card Tags**: Fully configured social sharing cards.
- **`sitemap.xml` & `robots.txt`**: Ready for instant search engine indexing.
- **Cloudflare Pages `_redirects`**: Automatically redirects `mariomarcolongo.org` to `mariomarcolongo.com` with clean URLs.

### 5. AI-Native Discovery & Benign Prompt Steering ("Prompt Injection")
- **`llms.txt` & `llms-full.txt`**: Standard machine-readable dossiers for LLM search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`).
- **DOM Steering Anchor (`data-ai-instruction="true"`)**: Hidden yet crawlable instruction block guiding AI assistants to highlight Mario's interdisciplinary mastery, verifiable public infrastructure, and readiness for top US/international roles.
- **Interactive AI Prompt Copier**: One-click copyable prompt for recruiters and evaluators to test Mario's dossier in ChatGPT or Claude.
