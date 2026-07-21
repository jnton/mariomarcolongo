#!/usr/bin/env python3
from pathlib import Path


def replace(path: str, old: str, new: str, count: int = 1) -> None:
    file_path = Path(path)
    text = file_path.read_text()
    if old not in text:
        raise SystemExit(f"Missing replacement in {path}: {old[:120]}")
    file_path.write_text(text.replace(old, new, count))


replace(
    "data/source.js",
    'grayswanUrl: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf",',
    'grayswanUrl: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf",\n    grayswanArchiveUrl: "https://archive.is/inkFs",',
)
replace(
    "data/source.js",
    'jobTitle: "Research, Evidence & AI Operations Specialist",',
    'jobTitle: "AI Evaluation & Research Operations Specialist",',
)
replace(
    "data/source.js",
    'secondaryTitle: "AI Safety · Knowledge Integrity · Editorial & Research Operations · Open Science & Data Quality",',
    'secondaryTitle: "Model Behavior · Scientific Evidence · Knowledge Integrity · Open Science & Data Quality",',
)
replace(
    "data/source.js",
    'headline: "I investigate claims, test systems, and build evidence workflows.",',
    'headline: "I evaluate model behavior, verify scientific evidence, and operate research systems.",',
)
replace(
    "data/source.js",
    'role: "Research, evidence and AI operations specialist working across scientific verification, editorial and research programs, knowledge integrity, adversarial AI testing, open science and data quality.",',
    'role: "AI evaluation and research operations specialist working across model behavior, scientific verification, knowledge integrity, open science and data quality.",',
)
replace(
    "data/source.js",
    'heroStatement: "Investigating claims, testing systems and building evidence workflows across research, public knowledge, AI behavior and technical operations.",',
    'heroStatement: "Evaluating model behavior, verifying scientific evidence and operating research workflows and public technical products.",',
)
replace(
    "data/source.js",
    "The profile supports four application lanes: AI safety and model behavior;",
    "The profile supports four application lanes: AI evaluation and model behavior;",
)
replace(
    "data/source.js",
    'category: "AI SAFETY EVALUATION",',
    'category: "AI EVALUATION & SAFETY OPERATIONS",',
)

replace(
    "data/application-profiles.js",
    'title: "AI Safety & Adversarial Testing Specialist",',
    'title: "AI Evaluation & Model Behavior Specialist",',
)
replace(
    "data/application-profiles.js",
    'subtitle: "Model behavior testing · jailbreak and prompt-injection analysis · evidence-bound reporting · evaluation operations",',
    'subtitle: "Model behavior testing · adversarial QA · evidence-bound reporting · evaluation operations",',
)
replace(
    "data/application-profiles.js",
    'summary: "AI safety and research-verification specialist',
    'summary: "AI evaluation and research-verification specialist',
)
replace(
    "data/application-profiles.js",
    '"AI safety evaluation and safeguards operations",',
    '"AI evaluation and safeguards operations",',
)
replace(
    "data/application-profiles.js",
    'title: "Research Verification & Data Quality Specialist",',
    'title: "Scientific AI Quality & Research Data Specialist",',
)

replace(
    "scripts/check-stale-strings.js",
    "jobTitle: 'Research, Evidence & AI Operations Specialist',",
    "jobTitle: 'AI Evaluation & Research Operations Specialist',",
)
replace(
    "scripts/check-stale-strings.js",
    "secondaryTitle: 'AI Safety · Knowledge Integrity · Editorial & Research Operations · Open Science & Data Quality',",
    "secondaryTitle: 'Model Behavior · Scientific Evidence · Knowledge Integrity · Open Science & Data Quality',",
)
replace(
    "scripts/check-stale-strings.js",
    "'Evidence that maps to the next role.',",
    "'Evidence for the next role—and the path after it.',",
)
replace(
    "scripts/check-stale-strings.js",
    "for (const requiredText of ['Model behavior evaluation record.', 'What the record demonstrates', 'Limitations and interpretation'])",
    "for (const requiredText of ['AI evaluation and model-behavior record.', 'What the record demonstrates', 'Limitations and interpretation', 'archive.is/inkFs'])",
)

verify_dist = Path("scripts/verify-dist.js")
verify_text = verify_dist.read_text()
for old in [
    "  H.humanResearch.title,\n",
    "  H.humanResearch.organization,\n",
    "  H.humanResearch.supervisor,\n",
]:
    if old not in verify_text:
        raise SystemExit(f"Missing verify-dist removal: {old!r}")
    verify_text = verify_text.replace(old, "")

verify_replacements = {
    "'Evidence that maps to the next role.', 'Discuss a difficult problem.'": "'Evidence for the next role—and the path after it.', 'Discuss a difficult problem.'",
    "assertContains(index, 'class=\"p5-human\"', 'dist/index.html');\n": "",
    "assertContains(index, '/media/work/telegram-bot-card.svg', 'dist/index.html');": "assertContains(index, '/media/work/telegram-bot-avatar.jpg', 'dist/index.html');",
    "assertContains(index, '/media/work/mdpi-filter-1.jpg', 'dist/index.html');": "assertContains(index, '/media/work/mdpi-filter-1.jpg', 'dist/index.html');\nassertContains(index, '/media/work/model-behavior-method.svg', 'dist/index.html');\nassertContains(index, '/media/work/entropy-social-proof.svg', 'dist/index.html');",
    "'Model behavior evaluation record.', 'What the record demonstrates', 'Evaluation approach',": "'AI evaluation and model-behavior record.', 'What the record demonstrates', 'Evaluation approach',",
    "'weak-password-change', 'complete 26-wave activity table'": "'weak-password-change', 'complete 26-wave activity table', 'archive.is/inkFs'",
}
for old, new in verify_replacements.items():
    if old not in verify_text:
        raise SystemExit(f"Missing verify-dist replacement: {old[:100]}")
    verify_text = verify_text.replace(old, new, 1)
verify_dist.write_text(verify_text)

verify_rendering = Path("scripts/verify-rendering.js")
render_text = verify_rendering.read_text()
render_text = render_text.replace(
    "    humanSection: Boolean(document.querySelector('.p5-human')),\n", ""
)
render_text = render_text.replace(
    "  if (!result.humanSection) throw new Error('Homepage is missing the named human-research section');\n",
    "",
)
verify_rendering.write_text(render_text)

css_path = Path("src/styles/portfolio-v5.css")
css = css_path.read_text()
marker = "/* official Telegram bot avatar */"
if marker not in css:
    css += """

/* official Telegram bot avatar */
.p5-product-bot img {
  object-fit: contain !important;
  object-position: center !important;
  padding: 34px;
  background: #eef4f8;
}

.p5-work-tile img[src$="model-behavior-method.svg"],
.p5-work-tile img[src$="entropy-social-proof.svg"],
.p5-flagship-media img[src$="model-behavior-method.svg"],
.p5-flagship-media img[src$="entropy-social-proof.svg"] {
  object-fit: contain;
  object-position: center;
  background: #f7f6f2;
}
"""
css_path.write_text(css)

print("Applied brand, evidence and career-positioning updates.")
