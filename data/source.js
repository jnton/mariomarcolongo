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

  summary: "AI-native software developer, open science builder, and scientific fact-checker with 9+ years of experience verifying biomedical and technical claims across public knowledge bases (4,317 documented edits across English/Italian Wikipedia, Wikidata, and Wikimedia Commons). Founder and lead developer of Yourself to Science™ (yourselftoscience.org), an open-source catalogue and unified directory indexing 55+ initiatives where people can contribute their biological and digital self (including genomic data, biological samples, biobanks, and clinical trials) to scientific research. Managed technical web infrastructure (OVHCloud, custom WordPress, SEO) and upheld scientific integrity for Entropy for Life (245,000+ YouTube subscribers / 480,000+ cross-platform community)—conducting bibliographic research, fact-checking scripts, and creating empirical data visualizations across 55+ documentaries and articles, earning formal acknowledgment in a Mondadori book. Volunteer research facilitator under Prof. Marta Panzeri at the University of Padua Department of Developmental Psychology and Socialisation (Nov 2022 – 2025), designing standardized focus group protocols and co-conducting psychological research sessions with autistic participants to inform educational strategies and support programs.",

  pillars: [
    {
      category: "EVIDENCE SYNTHESIS & EDITORIAL",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>`,
      title: "Biomedical Verification & Editorial Fact-Checking",
      lead: "9+ years verifying scientific claims across public ecosystems, managing editorial workflows, and synthesizing complex literature for academic and public audiences.",
      desc: "Verified 4,300+ biomedical contributions across Wikimedia holding up under scrutiny. Fact-checked primary literature across 55+ YouTube videos (long & short), co-authored 4 articles, and created data visualizations for a 480K+ community, earning formal acknowledgment in a Mondadori bestseller. Completed formal Cochrane Crowd & GALENOS systematic review screening training and certification.",
      highlights: [
        { label: "Editorial & Fact-Checking", detail: "55+ videos & 4 articles verified; Cochrane Crowd / GALENOS screening methodology certification" },
        { label: "Knowledge Graph & Article Curation", detail: "4,317 auditable edits across Wikimedia projects (English/Italian Wikipedia, Wikidata & Commons)" }
      ]
    },
    {
      category: "AI SYSTEMS & INFRASTRUCTURE",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      title: "AI-Native Engineering & Open Science Data",
      lead: "Architecting autonomous link converters, citizen science metadata registries, and computational genomic pipelines with frontier LLM benchmarks.",
      desc: "Founded Yourself to Science™ (yourselftoscience.org) open FAIRsharing directory with live MCP Server. Architected serverless Wikipedia Link Converter Bot on AWS Lambda. Donated personal 41× WGS genomic data to European Nucleotide Archive (ENA), engineering GRCh38-aligned BAM/VCF pipelines.",
      highlights: [
        { label: "AI & Serverless Automation", detail: "AWS Lambda Telegram bots, live MCP Servers & continuous LLM benchmarking" },
        { label: "Open Genomic Infrastructure", detail: "Yourself to Science™ registry & assisted Agentic AI 41× WGS pipeline (GRCh38-aligned BAM & VCF)" }
      ]
    },
    {
      category: "PSYCHOLOGICAL RESEARCH & SCIENCE COMMUNICATION",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      title: "Structured Research Protocols & Public Outreach",
      lead: "Leveraging psychological study facilitation to design standardized protocols, coordinate public science outreach, and build trust across diverse communities.",
      desc: "Co-facilitated remote Zoom psychological focus groups (autism spectrum) at the University of Padua with standardized facilitation protocols and neurodivergent recruitment. Managed technical web infrastructure and institutional collaborations (AIRC Foundation, RAI Public TV, Mondadori) for a 480K+ cross-platform science ecosystem.",
      highlights: [
        { label: "Psychological Study Facilitation", detail: "Standardized remote Zoom focus group protocol engineering & structured study moderation" },
        { label: "Public Science Communication", detail: "Rigorous scientific fact-checking & web infrastructure across a 480K+ community" }
      ]
    }
  ],

  stats: [
    { value: "100 / 100", label: "Production Web & AI Readiness", detail: "Perfect 100 Lighthouse (Performance/a11y/SEO) & 3/3 Agentic Browsing score on Yourself to Science™" },
    { value: "70+ Vizzes", label: "Empirical Data Visualizations", detail: "Published 55+ Flourish & 15 Tableau Public epidemiological, demographic & ISTAT workbooks analyzing ~80+ datasets" },
    { value: "55+ Videos & 4 Articles", label: "Science Verification & Editorial Acceleration", detail: "Fact-checked primary literature across 55+ YouTube videos (long & short), co-authored 4 articles, designed data visualizations & Reels, and managed A/B tested thumbnails/titles for Giacomo Moro Mauretto's Entropy for Life (480K+ community); acknowledged in Mondadori book Italiani Veri" },
    { value: "4,317 Edits", label: "Wikimedia & Knowledge Graph Curation", detail: "Verifiable contributions across English Wikipedia (1,592), Wikidata (1,249), Italian Wikipedia (752), and Wikimedia Commons (684)" }
  ],

  projects: [
    {
      id: "yourself-to-science",
      title: "Yourself to Science™ | Open Science Catalogue & Directory",
      oneLiner: "An open-source catalogue and unified directory indexing 55+ initiatives where people can contribute their biological and digital self to scientific research.",
      description: "Founded and engineered a FAIRsharing-indexed open directory cataloging 55+ clinical trials, biobanks, tissue/blood donation programs, and digital health registries. Architected with AI-native Linked Data (JSON-LD, RDF Turtle/VoID graphs, live MCP Server, standard llms.txt, OpenAPI spec) and published as a 100% Open Science stack dedicated to the public domain (CC0 1.0 Universal dataset, CC BY-SA 4.0 content, AGPL-3.0 codebase).",
      role: "Founder & Lead Builder",
      tech: ["MCP Server", "Linked Data / JSON-LD", "FAIRsharing Registry", "Open Science", "CC0 / AGPL-3.0"],
      links: {
        website: "https://yourselftoscience.org",
        github: "https://github.com/yourselftoscience/yourselftoscience.org",
        doi: "https://doi.org/10.5281/zenodo.15109359",
        fairsharing: "https://doi.org/10.25504/FAIRsharing.d3d487"
      },
      highlights: [
        "FAIRsharing & Zenodo Indexed: Standardized Linked Data infrastructure with live MCP Server & OpenAPI spec",
        "55+ Research Initiatives Cataloged: Unified directory for genomic data, biobanking, and clinical trial participation",
        "100% Open Science stack: CC0 public domain dataset with AGPL-3.0 open-source platform architecture"
      ]
    },
    {
      id: "entropy-for-life",
      title: "Entropy for Life — Official Science Platform",
      oneLiner: "Technical ownership, cloud hosting architecture, and scientific fact-checking for one of Italy's premier science communication channels (480,000+ community).",
      description: "Sole web developer and scientific fact-checker for Giacomo Moro Mauretto's Entropy for Life. Managed full technical lifecycle on OVHCloud (hosting, DNS, SSL, sub-second TTFB), custom WordPress layout/functionality, and technical SEO strategies. Conducted in-depth primary bibliographic research, verified biomedical scripts across 55+ documentaries/videos and 4 articles, designed data visualizations and Reels, and managed A/B tested thumbnails/titles. Formally acknowledged on the final page of Giacomo Moro Mauretto's Mondadori book 'Italiani veri. Storia evolutiva e genetica del nostro Paese'.",
      role: "Scientific Fact-Checker, Writer & Web Developer",
      tech: ["Primary Source Fact-Checking", "Bibliographic Research", "OVHCloud DNS/SSL", "Custom WordPress & Technical SEO", "Data Visualization"],
      links: {
        website: "https://entropyforlife.it",
        playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/"
      },
      highlights: [
        "Fact-Checked 55+ Documentaries & Co-Authored 4 Articles: Verified primary biomedical literature and scripts for a 480,000+ cross-platform community",
        "Full Technical Lifecycle & Cloud Architecture: Engineered official web platform on OVHCloud with zero downtime and technical SEO optimization",
        "Mondadori Book Acknowledgment: Formally recognized as a trusted researcher and contributor in the national bestseller 'Italiani veri'"
      ]
    },
    {
      id: "mdpi-filter",
      title: "MDPI Filter | Browser Extension",
      oneLiner: "An open-source browser extension that streamlines literature search by highlighting, hiding, or visually styling publications from the controversial publisher MDPI.",
      description: "Enhances research workflows by giving researchers granular control over how publications from MDPI appear online. Highlights or hides MDPI articles directly within search results across Google, Google Scholar, PubMed, and Europe PMC via NCBI API integration. Visually distinguishes citations both in reference lists and inline numerical/author-year footnotes on any publisher article online, and features an interactive popup with real-time badge counts and instant scroll-to-reference navigation.",
      role: "Creator & Maintainer",
      tech: ["Manifest V3", "Chrome & Edge", "NCBI E-utilities API", "Universal DOM Citation Styling", "AGPL-3.0"],
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
        "Smart Search Filtering: Highlights or hides MDPI papers across Google Scholar, PubMed & Europe PMC integrating NCBI API",
        "Universal Citation Styling: Automatically distinguishes reference lists & inline footnotes on any publisher article online",
        "Interactive Overview: Live toolbar badge count and one-click scrolling directly to detected citations"
      ]
    },
    {
      id: "telegram-bot",
      title: "English Wikipedia Link Converter | Telegram Bot",
      oneLiner: "An open-source Telegram bot that bridges language barriers by instantly converting non-English Wikipedia links to their English equivalents.",
      description: "Paste a Wikipedia link in any language and instantly receive the English canonical equivalent. Architected on AWS Lambda and API Gateway for zero idle cloud cost, automated via GitHub Actions CI/CD.",
      role: "Creator",
      tech: ["AWS Lambda", "API Gateway", "GitHub Actions CI/CD", "Serverless"],
      links: {
        bot: "https://t.me/ToEnWikipediaBot",
        github: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
      },
      highlights: [
        "100% serverless cloud execution with zero baseline operating cost",
        "Supports real-time interlanguage link resolution across all Wikipedia language editions",
        "Automated continuous deployment via GitHub Actions workflow"
      ]
    },
    {
      id: "emergent-humanity",
      title: "Emergent Humanity | Interactive Network Simulation",
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
      caption: "Original vector Euler diagram illustrating shared monogenic mutations across autism spectrum disorder (ASD), epilepsy, dystonia, and schizophrenia. Published under CC BY-SA 4.0 and independently adopted across 4 Wikipedia language editions.",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_%28ASD%29%2C_dystonia%2C_epilepsy_and_schizophrenia.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg"
    },
    {
      id: "yerba",
      title: "Carcinogen Levels in Yerba Maté",
      caption: "Benzo(a)pyrene contamination measured across commercial brands and sampling years, synthesized from published HPLC/GC-MS toxicology literature.",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Benzo%28a%29pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006%2C_2008%2C_and_2010_-_Column_Chart.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Benzo(a)pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006,_2008,_and_2010_-_Column_Chart.svg"
    },
    {
      id: "vegetarian",
      title: "Global Vegetarian Diet Policies",
      caption: "Comparative policy mapping of national food-based dietary guidelines regarding vegetarian and plant-based nutrition.",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Countries_%28States_and_Subnational_Regions%29_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Countries_(States_and_Subnational_Regions)_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg"
    },
    {
      id: "naturalization",
      title: "Global Naturalization Residence Requirements",
      caption: "Programmatically generated world choropleth map illustrating statutory residence requirements for citizenship across 190+ countries. Generated via automated SVG pipeline and active across English, Italian, Russian, and Chinese Wikipedia.",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Naturalization_Residence_Requirements_by_Country_%28Years_of_Residence%29.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Naturalization_Residence_Requirements_by_Country_(Years_of_Residence).svg"
    },
    {
      id: "oesophageal",
      title: "Global Oesophageal Cancer Incidence (IARC 2022)",
      caption: "Age-standardized global incidence rate (world) per 100,000 synthesized from Globocan 2022 / International Agency for Research on Cancer data. Modeled in Flourish and published as open vector data.",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Oesophageal_Cancer%2C_Age-Standardized_Rate_%28World%29_per_100.000_of_Incidence_Cases%2C_Both_sexes%2C_Worldwide_in_2022.svg",
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
      org: "Yourself to Science™",
      period: "Aug 2024 — Present",
      links: {
        website: "https://yourselftoscience.org",
        github: "https://github.com/yourselftoscience/yourselftoscience.org"
      },
      bullets: [
        "Launched and currently manage Yourself to Science, a comprehensive open-source catalogue and unified directory indexing 55+ clinical trials, biobanks, tissue/blood donation programs, and digital health registries enabling individuals to contribute their biological and digital self to scientific research.",
        "Architected AI-native Linked Data infrastructure (JSON-LD, RDF Turtle/VoID graphs, live MCP Server, standard llms.txt, OpenAPI spec) indexed in FAIRsharing and Zenodo.",
        "Published as a 100% Open Science stack: catalogue dataset dedicated to the public domain (CC0 1.0 Universal), website content under CC BY-SA 4.0, and platform codebase under AGPL-3.0."
      ]
    },
    {
      role: "Scientific Fact-Checker, Writer & Web Developer",
      org: "Entropy for Life — Italy",
      period: "Jun 2023 — Present",
      links: {
        website: "https://entropyforlife.it",
        playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/"
      },
      bullets: [
        "Core content contributor upholding scientific integrity and quality across media for a leading Italian science communication project (245,000+ YouTube subscribers / 480,000+ cross-platform community); responsible for script writing, in-depth bibliographic research, rigorous fact-checking, and creating data visualizations.",
        "Formally acknowledged as a trusted primary literature researcher on the final page of Giacomo Moro Mauretto's Mondadori book Italiani veri. Storia evolutiva e genetica del nostro Paese.",
        "Sole web developer for the project's official website (entropyforlife.it), handling full lifecycle on OVHCloud (hosting, DNS, SSL), custom WordPress layout/functionality, and technical SEO strategies."
      ]
    },
    {
      role: "Volunteer Focus Group Conductor & Research Facilitator",
      org: "University of Padua — Department of Developmental Psychology and Socialisation",
      period: "Nov 2022 — 2025",
      bullets: [
        "Contributed as a volunteer researcher to a psychological focus group study on sexuality in the autism spectrum led by Prof. Marta Panzeri. The study aimed to gather qualitative insights on the sexual experiences of autistic people to inform educational strategies and support initiatives.",
        "Developed the standardized facilitation guide for focus groups—including scripting and behavioral protocols—to ensure consistent, reproducible session execution.",
        "Managed recruitment processes across autistic communities, conducted bibliographic searches, and verified scientific literature.",
        "Served as primary conductor and co-conductor for recorded focus groups with autistic participants, establishing psychological safety while managing technical session infrastructure."
      ]
    },
    {
      role: "Scientific & Biomedical Editor",
      org: "Wikipedia & Wikimedia Foundation",
      period: "Jan 2017 — Present",
      links: {
        website: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
      },
      bullets: [
        "Author of 4,317 verified public edits across Wikimedia projects (1,592 English Wikipedia, 1,249 Wikidata, 752 Italian Wikipedia, 684 Wikimedia Commons).",
        "Created original data-driven scientific diagrams and biomedical visualizations independently adopted across 4 Wikipedia language editions and open-access repositories."
      ]
    }
  ],

  research: [
    {
      role: "Citizen Scientist Open Genomic Donor (41× WGS)",
      org: "European Nucleotide Archive — ENA PRJEB109744 / SAMEA121950568",
      period: "Jan 2026",
      links: {
        website: "https://www.ebi.ac.uk/ena/browser/view/PRJEB109744"
      },
      bullets: [
        "Donated personal 41× Whole Genome Sequencing raw paired-end FASTQ reads (DNBSEQ-T7) to the public domain (CC0) under ENA BioSample SAMEA121950568.",
        "Utilized Terra.bio cloud platform to process raw FASTQ reads aligned against the GRCh38 human reference genome to extract high-coverage GRCh38 BAM and VCF files.",
        "Architected downstream local bioinformatic pipeline on Apple Silicon (M4 Macbook)—converting VCF to Plink2 (PGEN/PVAR/PSAM) and executing Nextflow pgsc_calc with PCA ancestry projection against 1000 Genomes / HGDP reference panels.",
        "Engineered custom Python extraction pipelines for VEP-annotated VCFs—calculating multi-trait Z-Score standardized Polygenic Risk Scores, pharmacogenomic/lifestyle loci, mitochondrial heteroplasmy, and novel 'dark matter' variant filtration mapped to HPO/MONDO ontologies."
      ]
    },
    {
      role: "Empirical Data Scientist & Scientific Visualizer",
      org: "Wikimedia Commons, Tableau Public & Flourish Visual Data Portfolio",
      period: "2023 — Present",
      links: {
        tableau: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes",
        flourish: "https://app.flourish.studio/@Digressivo"
      },
      bullets: [
        "Published 70+ interactive empirical public health, epidemiological, and biomedical visualizations across Wikimedia Commons, Tableau Public (15 Vizzes, 4,300+ views), and Flourish.",
        "Created original vector Euler diagram illustrating overlapping clinical phenotypes across autism spectrum disorder (ASD), dystonia, epilepsy, and schizophrenia (CC BY-SA 4.0, adopted across 4 Wikipedia language editions).",
        "Synthesized primary biomedical datasets—including H5N1 avian flu preparedness, carotid plaque microplastic pathology, age-stratified COVID-19 mortality, and ISTAT epidemiological trends—into open-access visual evidence repositories and vector charts."
      ]
    }
  ],

  education: [
    { title: "Studies in Medicine & Surgery", detail: "Università degli Studi della Campania 'Luigi Vanvitelli' — Foundational biomedical and scientific coursework completed (no formal degree conferred)", period: "2020" },
    { title: "EF SET English Certificate 68/100 (C1 Advanced)", detail: "EF Standard English Test (EF SET) · https://cert.efset.org/jHk84h", period: "Mar 2024" },
    { title: "Career Essentials in Generative AI", detail: "Microsoft and LinkedIn · Certificate: https://www.linkedin.com/learning/certificates/c4f1f59578e3ac2567787e262e3b2ec55debf96bbbced4d34d5edaa821d9e6d9", period: "Mar 2024" },
    { title: "GALENOS Crowd Evidence Synthesis Training", detail: "Cochrane Crowd & GALENOS Systematic Review Screening Certification", period: "May 2026" }
  ],

  skills: [
    "Web Engineering & Architecture: JavaScript, Node.js, Static & Serverless Architecture, WordPress Development & Customization, HTML/CSS Design Systems, Cloud DNS / SSL / OVHCloud / AWS Lambda / API Gateway",
    "Scientific Verification & Methodologies: Bibliographic Research Methodology, Primary Source Fact-Checking, Psychological Focus Group Facilitation & Standardized Protocols, Epidemiological Data Synthesis, Cochrane/Galenos Screening",
    "Open-Source Intelligence (OSINT) & Digital Investigation: Multi-engine Boolean search (Google, DuckDuckGo, Yandex) and academic/gray-literature querying (Google Scholar, PubMed, Europe PMC); reverse-image and facial-recognition verification (PimEyes, Yandex Images, Google Lens, TinEye); EXIF/metadata extraction and file provenance verification; archival/provenance research (Wayback Machine, Archive.today); WHOIS/DNS history and certificate-transparency lookups for tracing site ownership and technical infrastructure; cross-platform digital-footprint correlation for claim verification, source attribution, and coordinated-inauthentic-behavior detection",
    "Open Science & AI Infrastructure: FAIRsharing Standards, Semantic Linked Data (JSON-LD, RDF Turtle, llms.txt, live MCP Servers), Public Knowledge Bases (Wikidata, ENA BioSample)",
    "Data Visualization & Tools: High-Clarity SVG Vector Diagramming, Tableau Public, Flourish, Git / GitHub, GitHub Actions CI/CD",
    "Languages: Italian (Mother tongue / Native) · English (C1 Advanced: Listening C2, Reading C2, Writing C1, Spoken Production C1, Spoken Interaction C1) · French (Basic A2/A1) · Spanish (Basic A2/A1)"
  ]
};

if (typeof window !== "undefined") {
  window.MARIO_DOSSIER = MARIO_DOSSIER;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MARIO_DOSSIER;
}
