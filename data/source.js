/**
 * SINGLE SOURCE OF TRUTH (SSOT) — Mario Marcolongo
 *
 * Every piece of content on mariomarcolongo.com and the CV
 * is hydrated from this file. Edit here, everything updates.
 */

const MARIO_DOSSIER = {

  identity: {
    name: "Mario Marcolongo",
    headline: "I build tools and systems that make science more open.",
    role: "Independent Researcher · Web Engineer · Open Science Builder",
    location: "Italy",
    relocation: "Open to relocation (US, EU, remote)",
    email: "me@mariomarcolongo.com",
    orcid: "0000-0003-2846-7115",
    orcidUrl: "https://orcid.org/0000-0003-2846-7115",
    domain: "https://mariomarcolongo.com",
    linkedin: "https://www.linkedin.com/in/mario-marcolongo",
    github: "https://github.com/jnton",
    // Obfuscated for public HTML — reassembled client-side
    contactObfuscated: ["me", "mariomarcolongo", "com"]
  },

  summary: "I spend most of my time at the intersection of science, engineering, and open knowledge. Over the past 9 years I've verified thousands of biomedical claims on Wikipedia, built browser extensions and serverless tools used in multiple countries, and founded an open platform that connects people with research studies looking for biological samples and health data. I care about making complex science accessible and building things that actually get used.",

  pillars: [
    {
      icon: "🔬",
      title: "Research & Evidence",
      desc: "9+ years of hands-on biomedical fact-checking across Wikipedia (4,300+ verified edits). Scientific visualizations adopted in international textbooks."
    },
    {
      icon: "⚙️",
      title: "Engineering",
      desc: "Browser extensions, serverless bots, genomic pipelines, cloud infrastructure. I build tools that solve real problems."
    },
    {
      icon: "🌍",
      title: "Open Science",
      desc: "Founded Yourself to Science™. Built the web platform for a 245K-subscriber science channel. All my work ships open-source."
    }
  ],

  stats: [
    { value: "4,317", label: "Wikimedia edits", detail: "Across English Wikipedia, Italian Wikipedia, Wikidata, and Commons" },
    { value: "245K+", label: "YouTube subscribers", detail: "Entropy for Life — science channel I built the platform for" },
    { value: "41×", label: "WGS pipeline depth", detail: "Whole-genome sequencing analysis I ran from raw reads to clinical reports" },
    { value: "5", label: "Countries adopted my work", detail: "Euler diagram used in EN, FR, PL, RO Wikipedia + Palgrave Macmillan textbook" }
  ],

  projects: [
    {
      id: "yourself-to-science",
      title: "Yourself to Science™",
      oneLiner: "An open directory where anyone can find research studies that need biological samples or health data.",
      description: "I built this because I couldn't find a single place listing all the ways ordinary people can contribute to science — donating DNA, blood, microbiome samples, wearable data, or even AI chat history. Now it exists, and it's fully open-source.",
      role: "Founder & Lead Engineer",
      tech: ["Next.js", "Edge Rendering", "CC0 Data", "AGPL-3.0"],
      links: {
        website: "https://yourselftoscience.org",
        github: "https://github.com/yourselftoscience/yourselftoscience.org",
        doi: "https://doi.org/10.5281/zenodo.15109359",
        fairsharing: "https://doi.org/10.25504/FAIRsharing.d3d487"
      },
      highlights: [
        "Indexed in FAIRsharing and Zenodo — the registries that serious researchers actually use",
        "Automated validation against the Research Organization Registry (ROR)",
        "All data published under CC0 — no restrictions, no gatekeeping"
      ]
    },
    {
      id: "mdpi-filter",
      title: "MDPI Citation Filter",
      oneLiner: "A browser extension that flags papers from a controversial publisher across Google Scholar and PubMed.",
      description: "MDPI is one of the most debated academic publishers — fast turnaround, questionable peer review. This extension helps researchers see at a glance which results come from MDPI journals, so they can make informed decisions.",
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
        "Live on Chrome Web Store and Microsoft Edge Add-ons",
        "Real-time flagging with article count overlay",
        "Works across Google, Google Scholar, and PubMed"
      ]
    },
    {
      id: "entropy-for-life",
      title: "Entropy for Life",
      oneLiner: "I'm the sole web developer and fact-checker for one of Italy's biggest science YouTube channels.",
      description: "Entropy for Life produces documentaries about evolutionary biology, genetics, and environmental science. I own the entire technical side — the website (entropyforlife.it), cloud hosting on OVHCloud, and I verify the biomedical claims in every script.",
      role: "Sole Web Developer & Biomedical Fact-Checker",
      tech: ["WordPress", "OVHCloud", "Custom Themes", "SEO Architecture"],
      links: {
        website: "https://entropyforlife.it",
        youtube: "https://www.youtube.com/@EntropyforLife",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",
        playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh"
      },
      highlights: [
        "245,000+ subscribers, 30M+ total views",
        "300+ science documentaries",
        "Full ownership of hosting, DNS, SSL, and performance optimization"
      ]
    },
    {
      id: "telegram-bot",
      title: "Wikipedia Link Converter Bot",
      oneLiner: "A Telegram bot that converts any non-English Wikipedia link to its English equivalent.",
      description: "Simple but useful: paste a Wikipedia link in any language, get back the English version. Built serverless on AWS Lambda with zero idle cost and automated deployments.",
      role: "Creator",
      tech: ["AWS Lambda", "API Gateway", "GitHub Actions CI/CD"],
      links: {
        bot: "https://t.me/ToEnWikipediaBot",
        github: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
      },
      highlights: [
        "Serverless — zero cost when idle",
        "Handles any Wikipedia language edition",
        "Fully automated CI/CD pipeline"
      ]
    },
    {
      id: "referendum-map",
      title: "Worldwide Referendum Quorum Map",
      oneLiner: "An automated Python pipeline that generates a publication-grade world map of constitutional referendum thresholds.",
      description: "I classified the voter turnout requirements for referendums in 100+ countries by reading through constitutions and electoral laws, then wrote a Python script to generate a vector map from that data.",
      role: "Researcher & Developer",
      tech: ["Python", "BeautifulSoup4", "PyCountry", "SVG Generation"],
      links: {
        wikimedia: "https://commons.wikimedia.org/wiki/File:Referendum_Turnout_Threshold_by_Country.svg"
      },
      highlights: [
        "Published on Wikimedia Commons",
        "Used in international political science courses",
        "2754×1398 vector output — print-ready"
      ]
    }
  ],

  visualizations: [
    {
      id: "euler",
      title: "Brain Disorder Gene Overlap",
      caption: "Euler diagram showing how gene mutations overlap across autism, epilepsy, dystonia, and schizophrenia. Independently adopted into 4 Wikipedia language editions and a Palgrave Macmillan textbook (2024).",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg"
    },
    {
      id: "yerba",
      title: "Carcinogen Levels in Yerba Maté",
      caption: "Benzo(a)pyrene contamination measured across commercial brands and sampling years, synthesized from published HPLC/GC-MS toxicology data.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Benzo(a)pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006,_2008,_and_2010_-_Column_Chart.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Benzo(a)pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006,_2008,_and_2010_-_Column_Chart.svg"
    },
    {
      id: "vegetarian",
      title: "Global Vegetarian Diet Policies",
      caption: "Which countries officially support, conditionally allow, or restrict vegetarian diets in their dietary guidelines.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Countries_(States_and_Subnational_Regions)_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Countries_(States_and_Subnational_Regions)_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg"
    },
    {
      id: "referendum",
      title: "Referendum Turnout Thresholds",
      caption: "World map classifying referendum quorum requirements — from no quorum to constitutional supermajority.",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Referendum_Turnout_Threshold_by_Country.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Referendum_Turnout_Threshold_by_Country.svg"
    }
  ],

  wikimedia: {
    total: "4,317",
    breakdown: [
      { platform: "English Wikipedia", edits: "1,592" },
      { platform: "Wikidata", edits: "1,249" },
      { platform: "Italian Wikipedia", edits: "752" },
      { platform: "Wikimedia Commons", edits: "684" }
    ],
    portfolioLinks: {
      tableau: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes",
      flourish: "https://app.flourish.studio/@Digressivo"
    }
  },

  experience: [
    {
      role: "Founder & Lead Engineer",
      org: "Yourself to Science™",
      period: "Aug 2024 — Present",
      bullets: [
        "Built an open directory where anyone can find and join research studies by donating DNA, tissue, wearable data, or AI chat history.",
        "Published all data under CC0 (public domain) with an AGPL-3.0 open-source codebase.",
        "Got indexed in FAIRsharing and Zenodo — the registries researchers actually use to find tools."
      ]
    },
    {
      role: "Sole Web Developer & Cloud Engineer",
      org: "Entropy for Life (entropyforlife.it)",
      period: "Sep 2023 — Present",
      bullets: [
        "Run the entire technical stack for one of Italy's leading science channels — 245K+ subscribers, 30M+ views.",
        "Handle hosting, DNS, SSL, performance, and custom development on OVHCloud.",
        "Design data visualizations and optimize technical SEO."
      ]
    },
    {
      role: "Script Writer & Biomedical Fact-Checker",
      org: "Entropy for Life",
      period: "Jun 2023 — Present",
      bullets: [
        "Review biomedical literature and verify every scientific claim before it goes into video scripts.",
        "Create original data visualizations published on Wikimedia Commons, Tableau, and Flourish."
      ]
    }
  ],

  research: [
    {
      role: "Focus Group Moderator & Research Facilitator",
      org: "University of Padua — Department of Psychology",
      period: "Nov 2022 — Present",
      bullets: [
        "Help run clinical research on sexuality in the autism spectrum (led by Prof. Marta Panzeri).",
        "Designed the facilitation guides, scripts, and recruitment protocols for focus group sessions."
      ]
    },
    {
      role: "Scientific Editor & Fact-Checker",
      org: "Wikipedia (English & Italian)",
      period: "2017 — Present",
      bullets: [
        "2,344 documented edits improving biomedical, genetic, and epidemiological articles.",
        "My Euler diagrams have been independently adopted into 4 language editions of Wikipedia and a Palgrave Macmillan textbook (2024)."
      ]
    }
  ],

  genomicPipeline: {
    title: "41× Whole-Genome Sequencing Pipeline",
    summary: "I ran a complete WGS analysis from raw sequencing reads to clinical variant reports — 41× coverage, mapped to the GRCh38 reference genome.",
    steps: [
      { step: "01", name: "Alignment & QC", desc: "BAM/CRAM quality control and variant calling against GRCh38." },
      { step: "02", name: "Ancestry Correction", desc: "PCA projection against 1000 Genomes and HGDP to account for population differences." },
      { step: "03", name: "Polygenic Scores", desc: "Computed risk scores for multiple traits using pgsc_calc (Nextflow)." },
      { step: "04", name: "Clinical Variants", desc: "Screened for drug-response variants (CYP2D6, CYP2C19, NAT2) against ClinVar." }
    ]
  },

  education: [
    { title: "Università degli Studi della Campania 'Luigi Vanvitelli'", detail: "Academic Studies", period: "2020 — Present" },
    { title: "EF SET English Certificate", detail: "C1 Advanced — 68/100", period: "" },
    { title: "GALENOS Crowd Training", detail: "Cochrane Crowd & GALENOS Evidence Synthesis", period: "May 2026" },
    { title: "Career Essentials in Generative AI", detail: "Microsoft & LinkedIn Certification", period: "Mar 2024" }
  ],

  skills: [
    "Python", "JavaScript", "Next.js", "React",
    "AWS Lambda", "API Gateway", "GitHub Actions",
    "Nextflow", "Terra.bio", "GRCh38",
    "Chrome Extensions (Manifest V3)", "WordPress",
    "OVHCloud", "Cloudflare", "DNS/SSL",
    "Tableau", "Flourish", "SVG/Data Visualization",
    "Biomedical Literature Review", "Evidence Synthesis",
    "NCBI E-utilities", "ClinVar", "VEP"
  ]
};

if (typeof window !== "undefined") {
  window.MARIO_DOSSIER = MARIO_DOSSIER;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MARIO_DOSSIER;
}
