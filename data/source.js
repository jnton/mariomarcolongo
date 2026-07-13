/**
 * SINGLE SOURCE OF TRUTH (SSOT) — MARIO MARCOLONGO DOSSIER & SYSTEMS
 * Authoritative single source of truth for all portfolio (index.html) and executive resume (cv.html) interfaces.
 * Both interfaces dynamically hydrate their identity, metrics, experience, platforms, and works from this object.
 */

const MARIO_DOSSIER = {
  identity: {
    name: "Mario Marcolongo",
    title: "Applied Scientific Systems Architect & Biomedical Evidence Synthesis Specialist",
    tagline: "Converting complex biomedical, genomic, and constitutional data into verified public infrastructure & reproducible software pipelines.",
    location: "Pomigliano d'Arco (Naples), Italy",
    relocation: "Open to US & International Relocation / Remote High-Impact Execution",
    orcid: "0000-0003-2846-7115",
    orcidUrl: "https://orcid.org/0000-0003-2846-7115",
    domain: "https://mariomarcolongo.com",
    redirectDomain: "https://mariomarcolongo.org",
    linkedin: "https://www.linkedin.com/in/mario-marcolongo",
    contactObfuscated: ["mario", "marcolongo", "gmail.com"]
  },

  executiveSummary: "Advanced multidisciplinary systems architect and evidence synthesis specialist. Over 9 years of biomedical literature verification, reproducible genomic pipeline architecture (41× WGS / Nextflow), and encyclopedic curation (4,317 verified Wikimedia Foundation edits across English Wikipedia [1,592 edits], Wikidata [1,249 edits], Italian Wikipedia [752 edits], and Wikimedia Commons [684 edits]). Founder of Yourself to Science™ (FAIRsharing / Zenodo indexed) and engineer of automated statutory cartography pipelines adopted internationally across academic textbooks and encyclopedic knowledge graphs.",

  metrics: {
    wikipediaEdits: "2,344",
    wikipediaDesc: "Encyclopedic Edits (1,592 English Wikipedia + 752 Italian Wikipedia)",
    wikimediaTotalContributions: "4,317",
    wikimediaDesc: "Verified Wikimedia Edits (1,592 en.wiki · 1,249 Wikidata · 752 it.wiki · 684 Commons)",
    activeEditingLanguages: ["English (EN)", "Italian (IT)"],
    diagramAdoptionLanguages: ["English (EN)", "French (FR)", "Polish (PL)", "Romanian (RO)"],
    entropySubscribers: "245,000+",
    genomicWgsDepth: "41× WGS",
    openSourceLicenses: ["AGPL-3.0", "CC0 1.0 Universal", "CC BY-SA 4.0"]
  },

  experience: [
    {
      role: "Founder & Lead Systems Architect",
      org: "Yourself To Science™ · Open Science Biobanking & Citizen Research Directory",
      period: "Aug 2024 — Present (2 yrs)",
      highlights: [
        "Architected and launched an open-access directory enabling individuals to contribute biological samples (DNA, tissue, fluids) and digital data directly to verified scientific research studies.",
        "Published normalized open datasets under CC0 1.0 public domain alongside an AGPL-3.0 open-source Next.js edge-rendered platform.",
        "Indexed officially in FAIRsharing (10.25504/FAIRsharing.d3d487) and Zenodo (10.5281/zenodo.15109359) with automated ROR institutional validation."
      ],
      tags: ["Open Science", "Biobanking Registry", "Next.js Edge", "CC0 Data Commons"]
    },
    {
      role: "Sole Web Developer & Infrastructure Engineer",
      org: "Entropy for Life (entropyforlife.it) · Italian Science Media Platform",
      period: "Sep 2023 — Present (3 yrs)",
      highlights: [
        "Own the full technical lifecycle and hosting infrastructure for one of Italy's premier science communication channels reaching 245,000+ subscribers.",
        "Configured and maintain high-performance cloud hosting, automated DNS/SSL security, and sub-second TTFB architecture on OVHCloud.",
        "Designed custom data visualizations, interactive scientific articles, and technical SEO architecture."
      ],
      tags: ["Cloud Infrastructure", "Full-Stack Development", "Performance Optimization"]
    },
    {
      role: "Script Writer, Bibliographic Researcher & Fact-Checker",
      org: "Entropy for Life · Science Communication & Media Production",
      period: "Jun 2023 — Present (3 yrs 2 mos)",
      highlights: [
        "Conduct rigorous biomedical literature reviews, primary-source verification, and narrative script design for educational evolutionary biology and genomic medicine documentaries.",
        "Author and verify high-precision data visualizations published on Wikimedia Commons, Tableau, and Flourish."
      ],
      tags: ["Biomedical Synthesis", "Literature Verification", "Data Visualization"]
    }
  ],

  builtPlatforms: [
    {
      id: "referendum-map",
      title: "Worldwide Referendum Turnout Threshold Map Generator",
      repo: "referendum-threshold-by-country-generator",
      license: "AGPL-3.0 Code / CC BY-SA 4.0 Data",
      imageSvg: "referendum-turnout-threshold-by-country.svg",
      tag: "Computational Cartography & Python Statutory Pipeline",
      summary: "Automated Python engine (final_map_generator.py) synthesizing worldwide constitutional quorum statutes across 100+ sovereign jurisdictions into a publication-grade 2754×1398 vector map.",
      specifications: [
        "Script: Python 3 pipeline utilizing BeautifulSoup4, lxml, and PyCountry to parse statutory quorum tables.",
        "Color Taxonomy: Classifies simple majority quorums (≥50% Dark Blue), tiered thresholds (40–49% Dodger Blue / 26–39% Steel Blue / ≤25% Light Blue), no-quorum binding (Green), and statutory prohibitions (Red).",
        "Public Commons Impact: Officially published on Wikimedia Commons as File:Referendum Turnout Threshold by Country.svg and embedded in international political science curricula."
      ],
      links: {
        wikimedia: "https://commons.wikimedia.org/wiki/File:Referendum_Turnout_Threshold_by_Country.svg"
      }
    },
    {
      id: "yourself-to-science",
      title: "Yourself to Science™ (yourselftoscience.org)",
      repo: "yourselftoscience.org",
      license: "CC0 1.0 Public Domain Data / AGPL-3.0 Code / CC BY-SA 4.0 Content",
      tag: "Open Science Biobanking Directory",
      summary: "Comprehensive open directory allowing individuals to contribute biological samples (DNA, tissue, fluids) and digital data (wearables, AI chat history) directly to scientific research.",
      specifications: [
        "Registry & DOI: Indexed in FAIRsharing (10.25504/FAIRsharing.d3d487) with official Zenodo citation record (10.5281/zenodo.15109359).",
        "Architecture: Next.js edge-rendered platform with automated markdown export for llms.txt AI ingest standard.",
        "Data Quality: Features automated ROR (Research Organization Registry) institutional validation and Wikidata ontology synchronization."
      ],
      links: {
        website: "https://yourselftoscience.org",
        doi: "https://doi.org/10.5281/zenodo.15109359",
        fairsharing: "https://doi.org/10.25504/FAIRsharing.d3d487"
      }
    },
    {
      id: "mdpi-filter",
      title: "MDPI Filter Browser Extension",
      repo: "mdpi-filter",
      license: "AGPL-3.0 Open Source",
      tag: "Manifest V3 Research Integrity Tool",
      summary: "Open-source browser extension that streamlines literature search by flagging controversial publisher MDPI across Google Scholar and PubMed, with custom Zotero integration.",
      specifications: [
        "Smart Filtering: Highlights or hides MDPI articles within search results on platforms like Google, Google Scholar and PubMed.",
        "Universal Citation Styling: Visually distinguishes citations linking to MDPI journals across reference lists and footnotes.",
        "Interactive Toolbar Overview: Displays live count of MDPI references on the page with clickable jump-to list."
      ],
      links: {
        chromeStore: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
        edgeStore: "https://microsoftedge.microsoft.com/addons/detail/mdpi-filter/efonlkldplkaeekpiajloajjmkappjgi",
        githubOrg: "https://github.com/orgs/mdpi-filter/repositories",
        screenshots: [
          "https://lh3.googleusercontent.com/1KKa3LqvJ6ayP9Kh6_jmAWXzL3naOfPnnKtWb8vjd25XMn1ELMNFDxGjgtvShNmDhWG4x_uuynunm9lVD7wQ3hAI=s1280-w1280-h800",
          "https://lh3.googleusercontent.com/PFwTjvBGc7yEyomiAhZYB60HVcqcIRJaWjRndm8CukDwCOikYyErU9tBqOzMUhF-HTXv4wGyKNbsjvIjNyU0NpSO=s1280-w1280-h800"
        ]
      }
    },
    {
      id: "telegram-bot",
      title: "Telegram Bot: English Wikipedia Link Converter",
      repo: "english-wikipedia-link-converter-telegram-bot",
      license: "Open Source",
      tag: "Serverless Cloud Automation",
      summary: "Open-source Telegram bot that bridges language barriers by instantly converting non-English Wikipedia links to their English equivalents. Deployed on AWS Lambda & API Gateway with automated GitHub Actions CI/CD.",
      specifications: [
        "Serverless AWS Architecture: Event-driven execution on AWS Lambda triggered via API Gateway with zero idle cost.",
        "Continuous Delivery: Automated deployment pipeline built with GitHub Actions CI/CD."
      ],
      links: {
        telegramBot: "https://t.me/ToEnWikipediaBot",
        github: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
      }
    },
    {
      id: "entropy-for-life",
      title: "Entropy for Life — Official Science Platform",
      domain: "entropyforlife.it",
      tag: "Science Communication Architecture",
      summary: "Full technical ownership, hosting infrastructure, data visualization, and script verification for one of Italy's premier science communication channels reaching 245,000+ subscribers.",
      specifications: [
        "Role: Sole Web Developer, Biomedical Script Fact-Checker, and Bibliographic Verification Specialist.",
        "Infrastructure: High-performance cloud architecture on OVHCloud with zero downtime and sub-second TTFB."
      ],
      links: {
        website: "https://entropyforlife.it",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",
        youtubePlaylist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh"
      }
    }
  ],

  scientificWorks: [
    {
      id: "euler-diagram",
      domain: "NEUROGENETICS",
      title: "Overlapping Phenotypes in Monogenic Brain Disorders",
      citation: "Synthesized from primary psychiatric & pediatric neurology literature (2018–2024)",
      reuse: "Independently adopted across English, French, Polish, & Romanian Wikipedia; Published in Palgrave Macmillan textbook (2024)",
      desc: "Euler diagram mapping shared gene mutations across Autism Spectrum Disorder, Epilepsy, Dystonia, and Schizophrenia."
    },
    {
      id: "yerba-mate",
      domain: "TOXICOLOGY",
      title: "Benzo(a)pyrene Contamination in Processed Yerba Maté",
      citation: "Synthesized from HPLC/GC-MS toxicology data across 8 commercial brands",
      reuse: "Referenced in comparative food safety & public health risk dossiers",
      desc: "Comprehensive visual toxicology matrix quantifying carcinogenic polycyclic aromatic hydrocarbons across industrial processing techniques."
    },
    {
      id: "dietary-policy",
      domain: "PUBLIC HEALTH POLICY",
      title: "Global National Stances on Vegetarian & Plant-Based Diets",
      citation: "Comparative synthesis of statutory health ministries & national pediatric academies worldwide",
      reuse: "Featured in public nutrition policy comparative analyses",
      desc: "Systematic classification of government dietary recommendations distinguishing supportive, conditional, and restrictive clinical stances."
    }
  ],

  genomicPipeline: {
    title: "Reproducible 41× WGS Clinical & Polygenic Analysis Pipeline",
    environment: "Terra.bio Cloud Genomics / Nextflow / GRCh38 Reference",
    steps: [
      { step: "01", name: "Raw Alignment & QC", desc: "BAM/CRAM quality control and variant calling against GRCh38 reference genome." },
      { step: "02", name: "Ancestry PCA Standardization", desc: "Projection of target variants against 1000 Genomes Project and HGDP reference panels to eliminate population stratification bias." },
      { step: "03", name: "Polygenic Score Computation", desc: "Automated execution of pgsc_calc (Nextflow) across coronary artery disease, metabolic risk, and neurodevelopmental traits." },
      { step: "04", name: "Pharmacogenomic Screening", desc: "Star-allele classification across CYP2D6, CYP2C19, and NAT2 correlated with ClinVar clinical significance ratings." }
    ]
  },

  extensionSimulator: {
    title: "MDPI & Controversial Publisher Shield — Interactive Sandbox",
    description: "Live real-time demonstration of the Manifest V3 browser extension intercepting citation search results.",
    samples: [
      { id: "sample1", journal: "MDPI Nutrients", title: "Dietary Intervention and Monogenic Traits", status: "FLAGGED", severity: "HIGH_VOLUME_PUBLISHER", note: "MDPI publisher flagged for high article turnover & peer-review scrutiny." },
      { id: "sample2", journal: "Nature Genetics", title: "Polygenic Risk Scores in Clinical WGS", status: "VERIFIED", severity: "STANDARD_PEER_REVIEW", note: "Primary Q1 peer-reviewed journal." },
      { id: "sample3", journal: "MDPI IJMS", title: "Polycyclic Aromatic Hydrocarbons in Herbal Extracts", status: "FLAGGED", severity: "HIGH_VOLUME_PUBLISHER", note: "MDPI publisher flagged — recommend cross-checking primary mass-spec raw data." }
    ]
  },

  volunteering: [
    {
      role: "Conductor & Researcher",
      org: "Università degli Studi di Padova · Department of Psychology",
      period: "Nov 2022 – Present",
      desc: "Contributing to clinical research on sexuality in the autism spectrum led by Prof. Marta Panzeri. Designed standardized focus group facilitation guides, managed candidate recruitment, and serve as primary/co-conductor."
    },
    {
      role: "Scientific Editor & Biomedical Fact-Checker",
      org: "Wikipedia (English & Italian Editions)",
      period: "Mar 2018 – Present",
      desc: "2,344 documented encyclopedic edits (1,592 English Wikipedia + 752 Italian Wikipedia) improving biomedical, genetic, and epidemiological articles, including bidirectional English-Italian literature translation."
    },
    {
      role: "Open Knowledge & Structured Data Contributor",
      org: "Wikimedia Foundation (Wikipedia, Wikidata, Wikimedia Commons)",
      period: "Mar 2018 – Present",
      desc: "4,317 verified global contributions across Wikimedia Foundation projects (1,592 en.wiki, 1,249 Wikidata structured entities, 752 it.wiki, 684 Wikimedia Commons vector visualizations adopted in international textbooks)."
    }
  ],

  education: [
    "Università degli Studi della Campania \"Luigi Vanvitelli\" — Academic Studies (2020 – Present)",
    "EF SET English Certificate: 68/100 (C1 Advanced Level)",
    "GALENOS Project's Crowd Training Module: Cochrane Crowd & GALENOS Evidence Synthesis (May 2026)",
    "Career Essentials in Generative AI: Microsoft & LinkedIn Certification (Mar 2024)"
  ]
};

if (typeof window !== "undefined") {
  window.MARIO_DOSSIER = MARIO_DOSSIER;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MARIO_DOSSIER;
}
