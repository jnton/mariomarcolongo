#!/usr/bin/env python3
from pathlib import Path


def replace(path: str, old: str, new: str, count: int = 1) -> None:
    file_path = Path(path)
    text = file_path.read_text()
    if old not in text:
        raise SystemExit(f"Missing replacement in {path}: {old[:140]}")
    file_path.write_text(text.replace(old, new, count))


replace("src/layouts/Layout.astro", 'import \'../styles/integrity.css\';\n', "")
replace("src/layouts/Layout.astro", 'import \'../styles/human-mobile-fixes.css\';\n', "")
replace(
    "src/pages/integrity.astro",
    'import "../styles/portfolio-v3.css";\n',
    'import "../styles/portfolio-v3.css";\nimport "../styles/integrity.css";\n',
)
replace(
    "astro.config.mjs",
    "  build: {\n    format: 'file'\n  },",
    "  build: {\n    format: 'file',\n    inlineStylesheets: 'always'\n  },",
)
replace("src/styles/portfolio-v5.css", "body:has(.portfolio-v5) {", ".human-portfolio body {")

image_replacements = {
    "/media/work/yourself-to-science.png": "/media/work/yourself-to-science-800.webp",
    "/media/work/emergent-humanity.png": "/media/work/emergent-humanity-800.webp",
    "/media/work/mdpi-filter-1.jpg": "/media/work/mdpi-filter-1-800.webp",
    "/media/work/mdpi-filter-2.jpg": "/media/work/mdpi-filter-2-800.webp",
    "/media/work/tableau-mortality.png": "/media/work/tableau-mortality-800.webp",
}
portfolio_data = Path("data/portfolio-human.js")
data_text = portfolio_data.read_text()
for old, new in image_replacements.items():
    if old not in data_text:
        raise SystemExit(f"Missing portfolio image reference: {old}")
    data_text = data_text.replace(old, new)
portfolio_data.write_text(data_text)

index_path = Path("src/pages/index.astro")
index_text = index_path.read_text()
helper_marker = 'const profileJsonLd = buildProfileGraph(D, "https://mariomarcolongo.com/", pageTitle);\n'
helper_insert = helper_marker + '''\nconst responsiveSource = (src) => src.endsWith("-800.webp")\n  ? `${src.replace("-800.webp", "-400.webp")} 400w, ${src} 800w`\n  : undefined;\n'''
if helper_marker not in index_text:
    raise SystemExit("Missing index helper insertion point")
index_text = index_text.replace(helper_marker, helper_insert, 1)
index_text = index_text.replace("{H.heroWork.map((item) => (", "{H.heroWork.map((item, index) => (", 1)
index_text = index_text.replace(
    '<img src={item.image} alt={item.alt} width="640" height="400" loading="eager" decoding="async" />',
    '<img src={item.image} srcset={responsiveSource(item.image)} sizes="(max-width: 680px) calc(50vw - 22px), 312px" alt={item.alt} width="640" height="400" loading={index < 2 ? "eager" : "lazy"} decoding="async" />',
    1,
)
index_text = index_text.replace(
    '<img src={item.image} alt={item.alt} width="900" height="560" loading="lazy" decoding="async" />',
    '<img src={item.image} srcset={responsiveSource(item.image)} sizes="(max-width: 680px) 86vw, (max-width: 980px) 48vw, 380px" alt={item.alt} width="900" height="560" loading="lazy" decoding="async" />',
    1,
)
index_text = index_text.replace(
    '<img src={item.image} alt={item.alt} width="760" height="480" loading="lazy" decoding="async" />',
    '<img src={item.image} srcset={responsiveSource(item.image)} sizes="(max-width: 680px) 86vw, (max-width: 980px) 48vw, 380px" alt={item.alt} width="760" height="480" loading="lazy" decoding="async" />',
    2,
)
index_path.write_text(index_text)

verify_dist = Path("scripts/verify-dist.js")
verify_text = verify_dist.read_text()
for old, new in image_replacements.items():
    verify_text = verify_text.replace(old, new)
verify_dist.write_text(verify_text)

headers_path = Path("public/_headers")
headers = headers_path.read_text()
cache_block = '''\n\n/_astro/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/media/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/og/*\n  Cache-Control: public, max-age=604800, stale-while-revalidate=86400\n\n/favicon-192x192.png\n  Content-Type: image/png\n  Cache-Control: public, max-age=604800, stale-while-revalidate=86400\n\n/favicon-512x512.png\n  Content-Type: image/png\n  Cache-Control: public, max-age=604800, stale-while-revalidate=86400\n'''
if "/_astro/*" not in headers:
    headers += cache_block
headers_path.write_text(headers)

print("Applied Lighthouse CSS, responsive-image and caching optimizations.")
