/**
 * SINGLE SOURCE OF TRUTH (SSOT) — Mario Marcolongo
 *
 * Every piece of content on mariomarcolongo.com and the CV
 * is hydrated from this file. Edit here, everything updates.
 */

const MARIO_DOSSIER = {

  identity: {
    name: "Mario Marcolongo",
    headline: "I check the claims other people don't.",
    role: "Nine years of Wikipedia edits that hold up under scrutiny. A genome released to the public domain under a real accession number. An open science registry cataloging 55+ research studies and cited across 37 Wikidata entities.",
    heroSubHtml: "Nine years of Wikipedia edits<button class=\"cite-btn\" data-cite=\"edits\" aria-expanded=\"false\" title=\"Click to inspect source\">1</button> that hold up under scrutiny. A genome<button class=\"cite-btn\" data-cite=\"ena\" aria-expanded=\"false\" title=\"Click to inspect source\">2</button> released to the public domain under a real accession number. An open science registry<button class=\"cite-btn\" data-cite=\"registry\" aria-expanded=\"false\" title=\"Click to inspect platform\">3</button> cataloging 55+ research studies and cited across 37 Wikidata entities.",
    location: "Italy",
    relocation: "Open to Global Opportunities Worldwide (Full-Time, Remote, B2B / Consulting)",
    languages: "Italian (Native / Mother Tongue) · English (C1 Advanced)",
    email: "me@mariomarcolongo.com",
    orcid: "0000-0003-2846-7115",
    orcidUrl: "https://orcid.org/0000-0003-2846-7115",
    domain: "https://mariomarcolongo.com",
    linkedin: "https://www.linkedin.com/in/mario-marcolongo",
    github: "https://github.com/jnton",
    // Obfuscated for public HTML — reassembled client-side
    contactObfuscated: ["me", "mariomarcolongo", "com"]
  },

  summary: "My core strength combines radical epistemic skepticism and primary source verification with empathetic clinical facilitation and cross-functional team collaboration. Characterized by independent empirical verification over authority deference and high-agency operational execution, I consistently solve complex information challenges while fostering trust and psychological safety. Over the past 9 years, I have verified thousands of scientific claims across Wikipedia (4,317 documented edits), shipped open-source automation, and founded Yourself to Science™ (yourselftoscience.org). Alongside deep technical rigor, I bring empathetic facilitation and ethical sensitivity—volunteering as an independent researcher to moderate sensitive clinical psychology focus groups with neurodivergent participants and collaborating within fast-paced science communication teams where every editorial decision balances scientific precision, relationships with diverse commercial and institutional sponsors, and public perception.",

  pillars: [
    {
      category: "SYSTEMS & EXECUTION",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      title: "AI-Native Product & Workflow Engineering",
      lead: "Architecting and shipping production software, browser extensions, and data pipelines from zero using advanced AI tooling—turning domain expertise directly into working systems.",
      desc: "End-to-end product execution using advanced AI agentic tooling (Antigravity IDE, Cursor, LLM APIs)—empowering domain specialists to architect and ship production web apps, browser extensions, and automated pipelines from scratch.",
      highlights: [
        { label: "Advanced AI Stack", detail: "Antigravity IDE, Cursor, LLM APIs & agentic orchestration" },
        { label: "Shipped Production", detail: "Browser extensions, serverless bots & automated data pipelines" }
      ]
    },
    {
      category: "BIOINFORMATICS & OPEN DATA",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="M17 6l-2.5-2.5"></path><path d="M14 8l-1-1"></path><path d="M7 18l2.5 2.5"></path><path d="M9.5 15.5l1 1"></path></svg>`,
      title: "Open Science Infrastructure & Genomics",
      lead: "Architecting open biomedical data directories and executing rigorous cloud & local computational genomic pipelines.",
      desc: "Founder of Yourself to Science™ (CC0 open biobanking directory indexed in FAIRsharing & Zenodo). Architected cloud & local 41× WGS bioinformatic pipelines—using Terra.bio to align raw FASTQ reads and extract high-coverage GRCh38 BAM and VCF files, then running downstream local analysis on Apple Silicon (M4 Macbook) with Nextflow pgsc_calc, 1000 Genomes PCA ancestry projection, and custom Python VEP-VCF extractors.",
      highlights: [
        { label: "Yourself to Science™", detail: "CC0 open biobanking registry indexed in FAIRsharing & Zenodo" },
        { label: "Genomic Pipelines", detail: "Terra.bio cloud BAM/VCF extraction from FASTQ & local M4 Macbook bioinformatic pipeline (Nextflow pgsc_calc, Plink2 & Python VEP-VCF multi-trait analysis)" }
      ]
    },
    {
      category: "EVIDENCE & FACT-CHECKING",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>`,
      title: "Biomedical Evidence & Visual Synthesis",
      lead: "9+ years verifying scientific claims across public ecosystems and creating standard vector diagrams.",
      desc: "9+ years verifying biomedical literature across Wikimedia (4,300+ edits). Creating high-clarity open-access scientific vector diagrams and reference visualizations.",
      highlights: [
        { label: "4,300+ Verified Edits", detail: "Rigorous biomedical literature synthesis across Wikimedia & Wikidata" },
        { label: "Open-Access Diagrams", detail: "Authored high-clarity vector scientific diagrams on Wikimedia Commons" }
      ]
    }
  ],

  stats: [
    { value: "100 / 100", label: "Production Web & AI Readiness", detail: "Perfect 100 Lighthouse (Performance/a11y/SEO) & 3/3 Agentic Browsing score on Yourself to Science™" },
    { value: "70+ Vizzes", label: "Empirical Data Visualizations", detail: "Published 55+ Flourish & 15 Tableau Public epidemiological, demographic & ISTAT workbooks analyzing ~80+ datasets" },
    { value: "300+ Documentaries", label: "Science Scripting & Verification", detail: "Fact-checked literature across 300+ documentaries & co-authored scripts for Giacomo Moro Mauretto's Entropy for Life (480K+ community across YT/IG/TikTok); acknowledged in Mondadori book Italiani Veri" },
    { value: "4,317", label: "Knowledge Graph & Ontology Edits", detail: "Verifiable structured data and reference citations across Wikidata, English/Italian Wikipedia, and Wikimedia Commons" }
  ],

  projects: [
    {
      id: "yourself-to-science",
      title: "Yourself to Science™",
      oneLiner: "A unified, open catalogue of clinical trials, registries, and programs connecting citizens with biological, digital health, and multi-modal research opportunities.",
      description: "Architected and shipped 100% end-to-end via AI-native engineering orchestration. Standardizes clinical trials, registries, and donation programs across biological samples, digital health data, and multi-modal studies. Fully AI-ready with a live MCP Server, standard llms.txt integration, FAIRsharing indexing, and automated ROR institutional validation.",
      role: "Founder & Lead Builder",
      tech: ["AI-Native Architecture", "Live MCP Server", "CC0 Public Domain Dataset", "AGPL-3.0", "Wikidata & ROR Integration"],
      links: {
        website: "https://yourselftoscience.org",
        github: "https://github.com/yourselftoscience/yourselftoscience.org",
        doi: "https://doi.org/10.5281/zenodo.15109359",
        fairsharing: "https://doi.org/10.25504/FAIRsharing.d3d487"
      },
      highlights: [
        "Unified open catalogue normalizing clinical trials, bio-donations, and digital health data across 55+ programs and multi-modal datasets",
        "Semantic Linked Data & AI infrastructure: Frictionless Data packages, RDF Turtle (.ttl)/VoID graphs, OpenAPI spec, live MCP Server, and llms.txt",
        "100% Open Science stack: CC0 1.0 Universal dataset (verifiable P854 reference source for growing Wikidata entities), CC BY-SA 4.0 content, and AGPL-3.0 codebase"
      ]
    },
    {
      id: "mdpi-filter",
      title: "MDPI Citation Filter",
      oneLiner: "A browser extension that flags papers from controversial publisher MDPI across academic platforms.",
      description: "MDPI operates high-volume open-access journals with debated peer-review turnaround times. This open-source Manifest V3 extension flags MDPI citations in real time across search results so researchers can assess literature context immediately.",
      role: "Creator & Maintainer",
      tech: ["Manifest V3", "Chrome & Edge", "NCBI E-utilities API", "AGPL-3.0"],
      links: {
        chromeStore: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
        edgeStore: "https://microsoftedge.microsoft.com/addons/detail/mdpi-filter/efonlkldplkaeekpiajloajjmkappjgi",
        github: "https://github.com/orgs/mdpi-filter/repositories",
        screenshots: [
          "https://lh3.googleusercontent.com/1KKa3LqvJ6ayP9Kh6_jmAWXzL3naOfPnnKtWb8vjd25XMn1ELMNFDxGjgtvShNmDhWG4x_uuynunm9lVD7wQ3hAI=s1280-w1280-h800",
          "https://lh3.googleusercontent.com/PFwTjvBGc7yEyomiAhZYB60HVcqcIRJaWjRndm8CukDwCOikYyErU9tBqOzMUhF-HTXv4wGyKNbsjvIjNyU0NpSO=s1280-w1280-h800"
        ]
      },
      highlights: [
        "Live on Google Chrome Web Store and Microsoft Edge Add-ons",
        "Flags citations across Google Scholar, PubMed, Europe PMC, Wikipedia, and Healthline",
        "Real-time DOM inspection with non-intrusive visual tagging"
      ]
    },
    {
      id: "entropy-for-life",
      title: "Entropy for Life — Technical Operations, Scriptwriting & Editorial Acceleration",
      oneLiner: "Technical web infrastructure, scriptwriting, bibliographic research, and editorial acceleration for Giacomo Moro Mauretto's premier Italian science communication ecosystem (480K+ cross-platform community, 300+ documentaries, 36.2M+ views).",
      description: "Authored long-form documentary scripts and verified primary scientific literature across 300+ science documentaries and videos for evolutionary biologist Giacomo Moro Mauretto's Entropy for Life ecosystem (480,000+ cross-platform community across YouTube, Instagram, and TikTok; 266,000+ YouTube subscribers; 36,276,295+ views). Co-authored epidemiological articles on entropyforlife.it, conducted primary bibliographic verification (formally acknowledged on the final page of the Mondadori bestseller 'Italiani veri. Storia evolutiva e genetica del nostro Paese'), supported technical web infrastructure on OVHCloud across institutional collaborations (AIRC - Fondazione per la Ricerca sul Cancro) and national broadcast appearances (Rai 3 Kilimangiaro, Radio Deejay, Radio24), designed high-CTR visual thumbnails via Nanobana AI, and executed targeted video editing in DaVinci Resolve.",
      role: "Technical Operations, Scriptwriter & Editorial Specialist",
      tech: ["Science Scriptwriting (Long/Short Form)", "Web Infrastructure (OVHCloud)", "Bibliographic Research & Fact-Checking", "AI Thumbnail Design (Nanobana)", "DaVinci Resolve"],
      links: {
        website: "https://entropyforlife.it",
        youtube: "https://www.youtube.com/@EntropyforLife",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",
        playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh"
      },
      highlights: [
        "Formally acknowledged in Giacomo Moro Mauretto's Mondadori bestseller 'Italiani Veri' as trusted literature researcher and scientific fact-checker",
        "Fact-checked literature across 300+ documentaries and co-authored scripts for a 480K+ cross-platform community (266K+ YT, 158K+ IG, 54K+ TikTok)",
        "Architected entropyforlife.it web infrastructure on OVHCloud supporting institutional AIRC initiatives and national broadcast appearances"
      ]
    },
    {
      id: "telegram-bot",
      title: "Wikipedia Link Converter Bot",
      oneLiner: "A serverless Telegram automation that converts any non-English Wikipedia link to English instantly.",
      description: "Paste a Wikipedia link in any language and instantly receive the English canonical equivalent. Architected on AWS Lambda and API Gateway for zero idle cloud cost, automated via GitHub Actions CI/CD.",
      role: "Creator",
      tech: ["AWS Lambda", "API Gateway", "GitHub Actions CI/CD", "Serverless"],
      links: {
        bot: "https://t.me/ToEnWikipediaBot",
        github: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot",
        icon: "telegram-bot-icon.svg"
      },
      highlights: [
        "100% serverless cloud execution with zero baseline operating cost",
        "Supports real-time interlanguage link resolution across all Wikipedia language editions",
        "Automated continuous deployment via GitHub Actions"
      ]
    },
    {
      id: "emergent-humanity",
      title: "Emergent Humanity — Interactive Narration & Network Simulation",
      oneLiner: "A 16-chapter interactive narration and living browser simulation modeling humanity as an emergent network entity (Active Alpha Release).",
      description: "A personal, evolving interactive narration and simulation modeling humanity as a network: nodes with hard cognitive limits, connections that carry signal or carry noise, echo chambers that need deliberate bridging, and collective memory that outlives whoever built it. Sixteen interactive chapters written and simulated — active alpha release.",
      role: "Creator & Systems Designer",
      tech: ["Interactive Narration", "Network Simulation", "Complex Systems Modeling", "Canvas UI"],
      links: {
        website: "https://jnton.github.io/emergent-humanity/",
        github: "https://github.com/jnton/emergent-humanity"
      },
      highlights: [
        "16 interactive chapters blending essay narration with live network simulations",
        "Models cognitive node limits, signal vs. noise filtering, and bridging nodes across echo chambers",
        "Synthesizes information theory, network graph topology, and emergent collective memory"
      ]
    }
  ],

  visualizations: [
    {
      id: "euler",
      title: "Brain Disorder Gene Overlap",
      caption: "Original vector Euler diagram illustrating shared monogenic mutations across autism spectrum disorder (ASD), epilepsy, dystonia, and schizophrenia. Published under CC BY-SA and independently adopted across 4 Wikipedia language editions.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg"
    },
    {
      id: "yerba",
      title: "Carcinogen Levels in Yerba Maté",
      caption: "Benzo(a)pyrene contamination measured across commercial brands and sampling years, synthesized from published HPLC/GC-MS toxicology literature.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Benzo(a)pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006,_2008,_and_2010_-_Column_Chart.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Benzo(a)pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006,_2008,_and_2010_-_Column_Chart.svg"
    },
    {
      id: "vegetarian",
      title: "Global Vegetarian Diet Policies",
      caption: "Comparative policy mapping of national food-based dietary guidelines regarding vegetarian and plant-based nutrition.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Countries_(States_and_Subnational_Regions)_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Countries_(States_and_Subnational_Regions)_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg"
    },
    {
      id: "naturalization",
      title: "Global Naturalization Residence Requirements",
      caption: "Programmatically generated world choropleth map illustrating statutory residence requirements for citizenship across 190+ countries. Generated via automated SVG pipeline and active across English, Italian, Russian, and Chinese Wikipedia.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Naturalization_Residence_Requirements_by_Country_(Years_of_Residence).svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Naturalization_Residence_Requirements_by_Country_(Years_of_Residence).svg"
    },
    {
      id: "oesophageal",
      title: "Global Oesophageal Cancer Incidence (IARC 2022)",
      caption: "Age-standardized global incidence rate (world) per 100,000 synthesized from Globocan 2022 / International Agency for Research on Cancer data. Modeled in Flourish and published as open vector data.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Oesophageal_Cancer,_Age-Standardized_Rate_(World)_per_100.000_of_Incidence_Cases,_Both_sexes,_Worldwide_in_2022.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Oesophageal_Cancer,_Age-Standardized_Rate_(World)_per_100.000_of_Incidence_Cases,_Both_sexes,_Worldwide_in_2022.svg"
    }
  ],

  wikimedia: {
    total: "4,317",
    breakdown: [
      { platform: "English Wikipedia", edits: "1,592" },
      { platform: "Wikidata", edits: "1,249" },
      { platform: "Italian Wikipedia", edits: "752" },
      { platform: "Wikimedia Commons", edits: "684" },
      { platform: "Other Wikimedia Projects", edits: "40" }
    ],
    portfolioLinks: {
      tableau: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes",
      flourish: "https://app.flourish.studio/@Digressivo"
    }
  },

  experience: [
    {
      role: "Founder & Lead Builder",
      org: "Yourself to Science™ (yourselftoscience.org)",
      period: "Aug 2024 — Present",
      bullets: [
        "Founded an open biobanking directory connecting volunteers with institutional studies needing biological samples (DNA, tissue) or digital health data.",
        "Architected open-source AGPL-3.0 platform with CC0 public domain data, indexed in FAIRsharing and Zenodo."
      ]
    },
    {
      role: "Web Infrastructure Manager & Biomedical Fact-Checker",
      org: "Entropy for Life (entropyforlife.it)",
      period: "Jun 2023 — Present",
      bullets: [
        "Configured and managed web infrastructure, DNS, SSL, and technical SEO on OVHCloud for Giacomo Moro Mauretto's multi-platform science ecosystem (480K+ cross-platform community across YouTube, Instagram, and TikTok; 266K+ YT subscribers; 36.2M+ views).",
        "Collaborated within a fast-paced, multidisciplinary science media team alongside channel founder Giacomo Moro Mauretto and video editors—engaging in constructive peer debate, dynamic editorial review, and carefully balancing rigorous scientific accuracy against public comprehension, thumbnail/title perception, and relationships with diverse commercial and institutional sponsors (including AIRC and major brand partners).",
        "Reviewed primary biomedical and evolutionary literature to verify factual accuracy across 300+ science documentaries and publications, earning formal acknowledgment in the Mondadori book 'Italiani Veri'."
      ]
    },
    {
      role: "Scientific Editor & Biomedical Curation Specialist",
      org: "Wikimedia Foundation (English & Italian Wikipedia, Wikidata)",
      period: "2017 — Present",
      bullets: [
        "Author of 4,317 verified contributions across Wikimedia platforms, specializing in genetics, epidemiology, and medical literature.",
        "Created original vector scientific visualizations and biomedical diagrams independently adopted across international Wikipedia editions and open-access scientific repositories."
      ]
    }
  ],

  research: [
    {
      role: "Volunteer Focus Group Conductor & Clinical Research Facilitator",
      org: "University of Padua — Department of General Psychology (Independent Volunteer Collaboration)",
      period: "Nov 2022 — Present",
      bullets: [
        "Contributed as an independent volunteer researcher to a clinical study on sexuality in the autism spectrum led by Prof. Marta Panzeri, demonstrating strong intrinsic dedication, ethical sensitivity, and empathetic rapport-building with neurodivergent participants.",
        "Developed the standardized facilitation guide for the focus groups—including detailed session scripts and behavioral facilitation protocols—to ensure rigorous, reproducible execution.",
        "Managed end-to-end participant recruitment workflows, including crafting and executing the call for candidates across neurodivergent communities.",
        "Conducted thorough primary bibliographic searches, scientific literature verification, and qualitative evidence synthesis to support study design and protocol development.",
        "Served as both primary conductor and co-conductor for recorded focus groups—establishing deep psychological safety while managing all technical session infrastructure to elicit rich qualitative data."
      ]
    },
    {
      role: "Citizen Scientist Open Genomic Donor (41× WGS)",
      org: "European Nucleotide Archive — ENA PRJEB109744 / SAMEA121950568",
      period: "2026",
      bullets: [
        "Donated personal 41× Whole Genome Sequencing raw paired-end FASTQ reads (DNBSEQ-T7) to the public domain (CC0) under ENA BioSample SAMEA121950568.",
        "Utilized Terra.bio cloud biomedical platform to process raw FASTQ reads, aligning against the GRCh38 human reference genome to extract high-coverage BAM alignments and VCF variant call files.",
        "Architected downstream local bioinformatic pipeline on Apple Silicon (M4 Macbook)—converting VCF to Plink2 (PGEN/PVAR/PSAM) and executing Nextflow pgsc_calc with PCA ancestry projection against 1000 Genomes / HGDP reference panels.",
        "Engineered custom Python extraction pipelines for VEP-annotated VCFs—calculating multi-trait Z-Score standardized Polygenic Risk Scores, pharmacogenomic/lifestyle loci, mitochondrial heteroplasmy, and novel 'dark matter' variant filtration mapped to HPO/MONDO ontologies."
      ]
    },
    {
      role: "Empirical Data Scientist & Epidemiological Visualizer",
      org: "Tableau Public & Flourish Visual Data Portfolio",
      period: "2023 — Present",
      bullets: [
        "Published 40+ interactive empirical public health, epidemiological, and biomedical visualizations across Tableau Public (15 Vizzes, 4,300+ views) and Flourish.",
        "Synthesized primary biomedical datasets—including H5N1 avian flu preparedness, carotid plaque microplastic pathology, age-stratified COVID-19 mortality, and ISTAT epidemiological trends—into interactive visual evidence repositories."
      ]
    }
  ],

  education: [
    { title: "Studies in Medicine & Surgery", detail: "Università degli Studi della Campania 'Luigi Vanvitelli' — Enrolled (2020); foundational coursework completed with primary focus shifted to independent open science & computational systems", period: "2020 — Present" },
    { title: "EF SET English Certificate", detail: "C1 Advanced Proficiency (68/100) · Bilingual Native Italian", period: "" },
    { title: "GALENOS Crowd Training", detail: "Cochrane Crowd & GALENOS Evidence Synthesis Certification", period: "May 2026" },
    { title: "Career Essentials in Generative AI", detail: "Microsoft & LinkedIn Certification", period: "Mar 2024" }
  ],

  skills: [
    "AI Systems & Prototyping: Antigravity IDE, Cursor, Copilot, LLM API Orchestration (Gemini, OpenRouter, Claude, OpenAI), Rapid Automation",
    "Web & Cloud Infrastructure: AWS Lambda, Serverless API Gateway, GitHub Actions CI/CD, Next.js, Edge Rendering, OVHCloud, Cloudflare, Technical SEO",
    "Open Biobanking & Genomics: Citizen Genomic Curation (ENA / NCBI), Phenotypic & Disease Ontology Mapping (HPO, MONDO), Open-Access CC0 Data Stewardship",
    "Epistemic Rigor & Biomedical Synthesis: Radical Primary Source Verification, Zero Deference to Authority, NCBI E-utilities, Wikimedia Curation (4,317 edits), Vector Visualization",
    "Clinical Research & Empathetic Facilitation: Standardized Protocol & Script Development, Neurodivergent Participant Recruitment, Primary & Co-Conductor Focus Group Moderation (Autism Spectrum), Psychological Safety Frameworks",
    "Cross-Functional Media Team & Stakeholder Management: Collaborative Editorial Review, De-escalating Scientific Complexity, Balancing Epistemic Rigor with Public Perception & Diverse Commercial/Institutional Sponsors",
    "Languages: Italian (Native / Mother Tongue) · English (C1 Advanced Proficiency)"
  ]
};

if (typeof window !== "undefined") {
  window.MARIO_DOSSIER = MARIO_DOSSIER;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MARIO_DOSSIER;
}
