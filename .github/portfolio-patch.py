from __future__ import annotations

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

NEW_PROJECT_BLOCK = '''    {
      id: "mdpi-filter",
      title: "MDPI Filter → Research Integrity Suite | Browser & Zotero Tooling",
      oneLiner: "An open-source research-integrity system spanning Chrome, Edge, and Zotero: released MDPI citation filtering today, with a tested explainable post-publication-status preview under active development.",
      description: "Designed and maintain a cross-platform literature-review toolchain that combines browser-extension engineering, Zotero integration, scholarly metadata resolution, evidence provenance, privacy controls, security hardening, and reproducible release workflows. Released store versions identify and navigate MDPI publications and citations. The GitHub main branches now include a tested 0.1.0 preview resolving DOI-only Crossref metadata for retractions, expressions of concern, corrections, reinstatements, withdrawals/removals, and duplicate-publication findings while preserving chronology, provenance, rate limits, unresolved/deferred coverage, and accessible icon/text/color indicators. The longer-term architecture separates formal work-level events from contextual journal or publisher assessments and is designed around a shared, signed evidence bundle.",
      role: "Creator, Product Architect & Maintainer",
      tech: ["Manifest V3", "Chrome / Edge / Zotero", "Crossref & NCBI APIs", "TypeScript / JavaScript", "GitHub Actions & CodeQL", "Privacy-by-Design", "AGPL-3.0"],
      links: {
        caseStudy: "/projects/research-integrity",
        chromeStore: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
        edgeStore: "https://microsoftedge.microsoft.com/addons/detail/mdpi-filter/efonlkldplkaeekpiajloajjmkappjgi",
        github: "https://github.com/orgs/mdpi-filter/repositories",
        screenshots: [
          "https://lh3.googleusercontent.com/1KKa3LqvJ6ayP9Kh6_jmAWXzL3naOfPnnKtWb8vjd25XMn1ELMNFDxGjgtvShNmDhWG4x_uuynunm9lVD7wQ3hAI=s1280-w1280-h800",
          "https://lh3.googleusercontent.com/PFwTjvBGc7yEyomiAhZYB60HVcqcIRJaWjRndm8CukDwCOikYyErU9tBqOzMUhF-HTXv4wGyKNbsjvIjNyU0NpSO=s1280-w1280-h800"
        ]
      },
      highlights: [
        "Cross-Platform Product Engineering: Maintains Chrome, Microsoft Edge, and Zotero implementations with shared behavioral and security contracts",
        "Explainable Integrity Signals: Models six post-publication event categories with chronology, source provenance, coverage limits, and reinstatement handling",
        "Security & Release Engineering: Manifest V3 least privilege, pinned CI actions, CodeQL, deterministic package validation, checksums, attestations, and immutable-release design",
        "Evidence Governance: Separates formal article events from venue context and defines import policies for Retraction Watch, Crossref, CiteWatch, DOAJ, Norwegian Register, and JUFO"
      ]
    },
'''

CASE_STUDY_PAGE = r'''---
import Layout from '../../layouts/Layout.astro';
---

<Layout
  title="Research Integrity Tooling Case Study — Mario Marcolongo"
  description="A technical case study of Mario Marcolongo's cross-browser and Zotero research-integrity tooling: product architecture, scholarly metadata, evidence provenance, security, privacy, testing, and release engineering."
  canonical="https://mariomarcolongo.com/projects/research-integrity"
>
  <Fragment slot="head">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          "@id": "https://mariomarcolongo.com/projects/research-integrity#case-study",
          "headline": "Research Integrity Tooling: Browser and Zotero Case Study",
          "description": "Engineering case study covering explainable post-publication status detection, scholarly metadata resolution, privacy controls, security hardening, and reproducible releases.",
          "dateModified": "2026-07-22",
          "author": { "@id": "https://mariomarcolongo.com/#person" },
          "mainEntity": { "@id": "https://mariomarcolongo.com/projects/research-integrity#software" }
        },
        {
          "@type": "SoftwareSourceCode",
          "@id": "https://mariomarcolongo.com/projects/research-integrity#software",
          "name": "MDPI Filter and Research Integrity Tooling",
          "codeRepository": "https://github.com/orgs/mdpi-filter/repositories",
          "programmingLanguage": ["JavaScript", "TypeScript"],
          "runtimePlatform": ["Chrome Manifest V3", "Microsoft Edge Manifest V3", "Zotero 7–9"],
          "license": "https://www.gnu.org/licenses/agpl-3.0.html",
          "author": { "@id": "https://mariomarcolongo.com/#person" }
        }
      ]
    }
    </script>
  </Fragment>

  <nav class="case-nav" aria-label="Case study navigation">
    <a href="/" class="case-brand">Mario Marcolongo</a>
    <div>
      <a href="/">Portfolio</a>
      <a href="/cv">CV</a>
      <a href="https://github.com/orgs/mdpi-filter/repositories" target="_blank" rel="noopener noreferrer">Source ↗</a>
    </div>
  </nav>

  <article class="case-shell">
    <header class="case-hero">
      <p class="eyebrow">Technical product case study · Updated July 2026</p>
      <h1>Research-integrity tooling across the browser and Zotero.</h1>
      <p class="lede">I evolved a narrowly scoped publisher filter into the foundation of an explainable literature-integrity system. The work combines scholarly metadata, browser and Zotero engineering, evidence governance, privacy, accessibility, security review, CI/CD, and deliberately constrained product claims.</p>
      <div class="status-row" aria-label="Project release status">
        <span><b>Released</b> MDPI detection in Chrome and Edge stores</span>
        <span><b>Hardened</b> Zotero baseline on GitHub</span>
        <span><b>Tested preview</b> six work-level integrity signals</span>
        <span><b>Not yet claimed</b> universal journal reliability scoring</span>
      </div>
      <div class="hero-actions">
        <a class="primary" href="https://github.com/mdpi-filter/mdpi-filter-chrome/pull/12" target="_blank" rel="noopener noreferrer">Inspect browser implementation ↗</a>
        <a href="https://github.com/mdpi-filter/mdpi-filter-zotero" target="_blank" rel="noopener noreferrer">Inspect Zotero implementation ↗</a>
      </div>
    </header>

    <section aria-labelledby="problem">
      <p class="section-kicker">01 · Problem framing</p>
      <h2 id="problem">A warning is useful only when its scope and evidence are explicit.</h2>
      <div class="two-col">
        <p>Researchers encounter publisher-level controversy, retracted articles, corrections, expressions of concern, duplicate-publication findings, and reinstatements in the same workflow. Treating all of these as one red flag creates false certainty. Treating a missing signal as proof of safety is equally misleading.</p>
        <p>I designed the system around two independent layers: formal work-level events and contextual venue-level evidence. Each record must retain identifiers, source, retrieval date, effective dates, scope, confidence, and exclusions. The interface reports what was checked, what failed, and what was deferred.</p>
      </div>
    </section>

    <section aria-labelledby="scope">
      <p class="section-kicker">02 · Product scope</p>
      <h2 id="scope">One product family, three clients, explicit maturity boundaries.</h2>
      <div class="metric-grid">
        <div><strong>3</strong><span>Chrome, Edge, and Zotero clients</span></div>
        <div><strong>6</strong><span>normalized formal event categories</span></div>
        <div><strong>50</strong><span>maximum DOI lookups per browser page</span></div>
        <div><strong>4/s</strong><span>request-start ceiling below Crossref's public limit</span></div>
      </div>
      <div class="scope-table" role="table" aria-label="Feature maturity">
        <div class="scope-head" role="row"><span>Capability</span><span>Current state</span><span>Evidence boundary</span></div>
        <div role="row"><span>MDPI result and citation detection</span><span>Released in browser stores</span><span>DOI prefix, domain, NCBI identifier resolution</span></div>
        <div role="row"><span>Zotero MDPI reference scanning</span><span>Hardened baseline</span><span>PDF text, DOI/domain, NCBI and PMC JATS</span></div>
        <div role="row"><span>Retraction / concern / correction / reinstatement / withdrawal / duplicate</span><span>Tested browser preview on GitHub</span><span>Crossref relationships with chronology and provenance</span></div>
        <div role="row"><span>Journal or publisher context</span><span>Governance and importer roadmap</span><span>No automated universal verdict; source-native labels remain separate</span></div>
      </div>
    </section>

    <section aria-labelledby="architecture">
      <p class="section-kicker">03 · Architecture</p>
      <h2 id="architecture">Identifiers leave the page; article text does not.</h2>
      <div class="pipeline" aria-label="Integrity lookup pipeline">
        <span>Local DOM / Zotero item</span><i>→</i><span>DOI and identifier extraction</span><i>→</i><span>bounded background lookup</span><i>→</i><span>normalized event timeline</span><i>→</i><span>accessible counters and evidence details</span>
      </div>
      <div class="decision-grid">
        <article><h3>Relationship direction</h3><p>Crossref <code>updated-by</code> relationships describe notices affecting the queried work. A notice's own <code>update-to</code> link points back to the original article and must not cause the notice itself to be labelled retracted. A regression test locks this distinction.</p></article>
        <article><h3>Chronology over one score</h3><p>An expression of concern followed by a retraction is a timeline, not two independent current warnings. A reinstatement changes the current state without erasing the historical retraction.</p></article>
        <article><h3>Coverage is first-class</h3><p>The UI distinguishes checked, unresolved, failed, and deferred identifiers. “No warning found” never becomes “safe” when lookup coverage is incomplete.</p></article>
        <article><h3>Accessible semantics</h3><p>Every category combines icon, label, color, count, chronology, and source. Color is supplementary rather than the sole carrier of meaning.</p></article>
      </div>
    </section>

    <section aria-labelledby="security">
      <p class="section-kicker">04 · Security, privacy, and reliability</p>
      <h2 id="security">The implementation is intentionally less privileged than the feature could have been.</h2>
      <ul class="evidence-list">
        <li><b>Manifest V3 least privilege:</b> only storage plus the HTTPS page access required by the core citation workflow.</li>
        <li><b>No remote executable code:</b> self-only extension CSP, no runtime npm dependencies, and no HTML injection sinks in the packaged browser runtime.</li>
        <li><b>Privacy boundary:</b> DOI identifiers only; credentials and referrers omitted; no article text, search terms, full browsing history, analytics identifier, or account data.</li>
        <li><b>Bounded networking:</b> user opt-out, two workers, ten-second timeouts, 50 DOI checks per page, and four request starts per second.</li>
        <li><b>Supply-chain controls:</b> immutable GitHub Action SHAs, dependency auditing, CodeQL, deterministic archive validation, checksums, release attestations, and fail-closed release workflows.</li>
        <li><b>Cross-client regression testing:</b> identifier validation, rate limits, relationship direction, reinstatement logic, packaging integrity, and zero-network opt-out behavior.</li>
      </ul>
    </section>

    <section aria-labelledby="data">
      <p class="section-kicker">05 · Evidence governance</p>
      <h2 id="data">The hard part is not collecting lists; it is preserving context.</h2>
      <p class="wide-copy">The planned shared evidence bundle separates imported records from manual review, retains source revisions and licenses, supports historical date ranges and exclusions, and rejects title-only high-confidence matching. Retraction Watch and Crossref provide work-level events. Wikipedia CiteWatch can contribute community context only with exact revision provenance and false-positive exclusions. DOAJ, the Norwegian Register, and Finnish JUFO remain identity and source-native context systems—not universal predatory-journal authorities.</p>
      <div class="link-grid">
        <a href="https://github.com/mdpi-filter/mdpi-filter-chrome/issues/14" target="_blank" rel="noopener noreferrer"><b>Signed evidence bundle</b><span>Schema, deterministic builds, checksums, provenance, conflict retention.</span></a>
        <a href="https://github.com/mdpi-filter/mdpi-filter-chrome/issues/15" target="_blank" rel="noopener noreferrer"><b>CiteWatch importer</b><span>Revision IDs, CC BY-SA attribution, exclusions, mixed-record notes.</span></a>
        <a href="https://github.com/mdpi-filter/mdpi-filter-chrome/issues/21" target="_blank" rel="noopener noreferrer"><b>Retraction Watch import</b><span>Reasons, notice reconciliation, freshness, and historical preservation.</span></a>
        <a href="https://github.com/mdpi-filter/mdpi-filter-chrome/issues/17" target="_blank" rel="noopener noreferrer"><b>Public benchmark</b><span>False positives, chronology, accessibility, privacy, and reproducibility.</span></a>
      </div>
    </section>

    <section aria-labelledby="signal">
      <p class="section-kicker">06 · What this demonstrates</p>
      <h2 id="signal">A compact project with unusually broad professional signal.</h2>
      <div class="decision-grid">
        <article><h3>AI evaluation and quality judgment</h3><p>Calibrating confidence, separating absence of evidence from evidence of absence, designing adversarial fixtures, and refusing unsupported product claims.</p></article>
        <article><h3>Technical product delivery</h3><p>Product scope, cross-platform architecture, browser APIs, Zotero integration, UX, release gates, migration planning, and public issue governance.</p></article>
        <article><h3>Research data engineering</h3><p>DOI/PMID/PMCID resolution, event taxonomies, provenance, temporal state, conflicting sources, licensing, and reproducible evidence bundles.</p></article>
        <article><h3>Security engineering</h3><p>Threat boundaries, permission reduction, message validation, network budgets, CI hardening, CodeQL, artifact integrity, and immutable releases.</p></article>
      </div>
    </section>

    <section class="limitations" aria-labelledby="limitations">
      <p class="section-kicker">07 · Current limitations</p>
      <h2 id="limitations">Claims deliberately withheld.</h2>
      <p>The current Chrome and Edge store releases remain MDPI-focused; the generalized integrity layer is a tested GitHub preview awaiting store privacy validation and staged rollout. Venue-level sources are not yet shipped. PubPeer is not scraped or accessed through an unauthorized interface. The system does not claim that a paper is reliable merely because no warning was found.</p>
    </section>

    <footer class="case-footer">
      <div>
        <p class="eyebrow">Open-source evidence</p>
        <h2>Inspect the implementation, not just the description.</h2>
      </div>
      <div class="footer-actions">
        <a class="primary" href="https://github.com/orgs/mdpi-filter/repositories" target="_blank" rel="noopener noreferrer">All repositories ↗</a>
        <a href="https://github.com/mdpi-filter/mdpi-filter-chrome/issues/13" target="_blank" rel="noopener noreferrer">Program roadmap ↗</a>
        <a href="/cv">Full CV →</a>
      </div>
    </footer>
  </article>

  <style>
    :global(body) { background: var(--bg); color: var(--ink); }
    .case-nav { position: sticky; top: 0; z-index: 20; display: flex; justify-content: space-between; align-items: center; min-height: 64px; padding: 0 28px; border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(14px); }
    .case-nav a { color: var(--ink); text-decoration: none; font-size: 14px; }
    .case-nav > div { display: flex; gap: 20px; }
    .case-brand { font-family: var(--font-display); font-weight: 800; }
    .case-shell { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
    .case-hero { padding: clamp(72px, 10vw, 132px) 0 80px; }
    .eyebrow, .section-kicker { color: var(--accent); font: 600 12px/1.4 var(--font-mono); letter-spacing: .1em; text-transform: uppercase; }
    h1 { max-width: 900px; margin: 16px 0 24px; font: 800 clamp(42px, 7vw, 78px)/.98 var(--font-display); letter-spacing: -.055em; }
    .lede { max-width: 850px; font-size: clamp(19px, 2.5vw, 25px); line-height: 1.55; color: var(--ink-soft); }
    .status-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 38px 0 28px; }
    .status-row span { padding: 14px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; line-height: 1.45; background: var(--bg-surface); }
    .status-row b { display: block; color: var(--ink); margin-bottom: 4px; }
    .hero-actions, .footer-actions { display: flex; flex-wrap: wrap; gap: 12px; }
    .hero-actions a, .footer-actions a { padding: 11px 16px; border: 1px solid var(--line); border-radius: 9px; color: var(--ink); text-decoration: none; font-weight: 650; }
    .hero-actions .primary, .footer-actions .primary { background: var(--ink); color: var(--bg); border-color: var(--ink); }
    section { padding: 76px 0; border-top: 1px solid var(--line); }
    h2 { max-width: 820px; margin: 12px 0 28px; font: 750 clamp(30px, 4.6vw, 50px)/1.08 var(--font-display); letter-spacing: -.035em; }
    h3 { margin: 0 0 10px; font: 700 19px/1.25 var(--font-display); }
    p { line-height: 1.7; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; color: var(--ink-soft); font-size: 17px; }
    .metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 34px 0; }
    .metric-grid div { padding: 24px; border: 1px solid var(--line); border-radius: 14px; background: var(--bg-surface); }
    .metric-grid strong { display: block; font: 800 38px/1 var(--font-display); margin-bottom: 10px; }
    .metric-grid span { color: var(--ink-soft); font-size: 13px; line-height: 1.4; }
    .scope-table { border: 1px solid var(--line); border-radius: 14px; overflow: hidden; }
    .scope-table > div { display: grid; grid-template-columns: 1.2fr .8fr 1.5fr; gap: 18px; padding: 16px 18px; border-top: 1px solid var(--line); font-size: 14px; line-height: 1.5; }
    .scope-table > div:first-child { border-top: 0; }
    .scope-head { background: var(--bg-surface); font-weight: 750; }
    .pipeline { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; margin: 30px 0 38px; }
    .pipeline span { padding: 10px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--bg-surface); font-size: 13px; }
    .pipeline i { color: var(--ink-soft); font-style: normal; }
    .decision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .decision-grid article { padding: 24px; border: 1px solid var(--line); border-radius: 14px; background: var(--bg-surface); }
    .decision-grid p { margin: 0; color: var(--ink-soft); font-size: 15px; }
    code { font: 500 .9em var(--font-mono); }
    .evidence-list { display: grid; gap: 10px; padding: 0; list-style: none; }
    .evidence-list li { padding: 17px 19px; border-left: 3px solid var(--accent); background: var(--bg-surface); line-height: 1.65; }
    .wide-copy { max-width: 900px; color: var(--ink-soft); font-size: 17px; }
    .link-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 34px; }
    .link-grid a { display: block; padding: 22px; border: 1px solid var(--line); border-radius: 14px; color: var(--ink); text-decoration: none; background: var(--bg-surface); }
    .link-grid b, .link-grid span { display: block; }
    .link-grid span { color: var(--ink-soft); margin-top: 7px; line-height: 1.5; font-size: 14px; }
    .limitations { border: 1px solid var(--line); border-radius: 16px; padding: 42px; margin: 70px 0; background: var(--bg-surface); }
    .limitations h2 { margin-bottom: 16px; }
    .limitations p:last-child { margin-bottom: 0; color: var(--ink-soft); }
    .case-footer { display: flex; justify-content: space-between; gap: 30px; align-items: end; padding: 50px 0 90px; border-top: 1px solid var(--line); }
    .case-footer h2 { margin-bottom: 0; font-size: clamp(28px, 4vw, 42px); }
    @media (max-width: 820px) {
      .status-row, .metric-grid { grid-template-columns: 1fr 1fr; }
      .two-col, .decision-grid, .link-grid { grid-template-columns: 1fr; }
      .scope-table > div { grid-template-columns: 1fr; gap: 5px; }
      .scope-head { display: none !important; }
      .case-footer { align-items: start; flex-direction: column; }
    }
    @media (max-width: 520px) {
      .case-nav { padding: 0 16px; }
      .case-nav > div { gap: 12px; }
      .case-nav > div a:nth-child(2) { display: none; }
      .case-shell { width: min(100% - 28px, 1120px); }
      .status-row, .metric-grid { grid-template-columns: 1fr; }
      .case-hero { padding-top: 58px; }
      .limitations { padding: 28px 22px; }
    }
  </style>
</Layout>
'''


def replace_project_block(path: Path) -> None:
    source = path.read_text(encoding="utf-8")
    pattern = re.compile(
        r'    \{\n      id: "mdpi-filter",\n.*?\n    \},\n(?=    \{\n      id: "telegram-bot",)',
        re.DOTALL,
    )
    updated, count = pattern.subn(NEW_PROJECT_BLOCK, source, count=1)
    if count != 1:
        raise RuntimeError(f"Expected one mdpi-filter project block in {path}, found {count}")
    path.write_text(updated, encoding="utf-8")


def patch_index() -> None:
    path = ROOT / "src/pages/index.astro"
    source = path.read_text(encoding="utf-8")
    source = source.replace(
        '"name": "MDPI Publisher Verification Pipeline",\n        "applicationCategory": "DeveloperApplication",\n        "operatingSystem": "Browser Extension / Node.js",\n        "description": "Automated pipeline and browser extension auditing bibliographic citations and publisher indexing.",',
        '"name": "MDPI Filter and Research Integrity Tooling",\n        "applicationCategory": "ScientificApplication",\n        "operatingSystem": "Chrome, Microsoft Edge, and Zotero",\n        "description": "Open-source cross-platform literature-integrity tooling combining citation detection, DOI metadata resolution, explainable post-publication event timelines, privacy controls, security hardening, and reproducible releases.",\n        "url": "https://mariomarcolongo.com/projects/research-integrity",',
        1,
    )
    marker = "      const t = (p.title || p.org || 'project').replace(/\"/g, '&quot;');\n"
    addition = marker + "      if (l.caseStudy) btns.push(`<a href=\"${l.caseStudy}\" class=\"btn btn-sm\" aria-label=\"Read technical case study for ${t}\">Technical Case Study →</a>`);\n"
    if marker not in source:
        raise RuntimeError("Could not find project-link insertion point")
    source = source.replace(marker, addition, 1)
    path.write_text(source, encoding="utf-8")


def patch_readme() -> None:
    path = ROOT / "README.md"
    source = path.read_text(encoding="utf-8")
    marker = "> 🌐 Live Website: [mariomarcolongo.com](https://mariomarcolongo.com) (`mariomarcolongo.org` redirects here)  \n"
    addition = marker + "> 🧪 Featured Technical Case Study: [Research Integrity Tooling across Chrome, Edge, and Zotero](https://mariomarcolongo.com/projects/research-integrity)  \n"
    if marker in source and "Featured Technical Case Study" not in source:
        source = source.replace(marker, addition, 1)
        path.write_text(source, encoding="utf-8")


def patch_sitemap() -> None:
    path = ROOT / "public/sitemap.xml"
    if not path.exists():
        return
    source = path.read_text(encoding="utf-8")
    url = "https://mariomarcolongo.com/projects/research-integrity"
    if url in source:
        return
    entry = f"  <url>\n    <loc>{url}</loc>\n    <lastmod>2026-07-22</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n"
    if "</urlset>" not in source:
        raise RuntimeError("Unexpected sitemap format")
    path.write_text(source.replace("</urlset>", entry + "</urlset>"), encoding="utf-8")


for relative in ("data/source.js", "public/data/source.js"):
    replace_project_block(ROOT / relative)

patch_index()
patch_readme()
patch_sitemap()

page_path = ROOT / "src/pages/projects/research-integrity.astro"
page_path.parent.mkdir(parents=True, exist_ok=True)
page_path.write_text(CASE_STUDY_PAGE, encoding="utf-8")

# These files are a one-shot, auditable repository patch mechanism. They remove
# themselves before the resulting content commit is created.
for relative in (
    ".github/portfolio-patch.py",
    ".github/workflows/apply-portfolio-case-study.yml",
):
    target = ROOT / relative
    if target.exists():
        target.unlink()

print("Portfolio research-integrity case study patch applied.")
