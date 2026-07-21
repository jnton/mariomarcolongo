const PORTFOLIO_HUMAN = {
  eyebrow: "AI evaluation · scientific evidence · research operations",
  headline: "I evaluate model behavior, verify scientific evidence, and operate research systems.",
  introduction: "My strongest work combines exploratory AI evaluation, paid primary-source verification and ownership of public research workflows. I am targeting roles where careful judgment, evidence quality and operational follow-through can grow into higher-value evaluation, safety and technical-program responsibility.",

  proofs: [
    {
      value: "75",
      label: "Platform-confirmed model breaks",
      detail: "156 submissions across 26 listed Gray Swan testing waves as of July 2026.",
      href: "/security.html"
    },
    {
      value: "55+",
      label: "Scientific productions supported",
      detail: "Paid primary-literature research and fact-checking for videos and documentaries, plus four articles.",
      href: "https://www.youtube.com/@entropyforlife"
    },
    {
      value: "55+",
      label: "Research initiatives indexed",
      detail: "Clinical studies, biobanks, registries and donation programs in Yourself to Science.",
      href: "https://yourselftoscience.org/"
    },
    {
      value: "70+",
      label: "Public data visualizations",
      detail: "Biomedical, epidemiological and public-policy work across Wikimedia, Tableau and Flourish.",
      href: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
    }
  ],

  heroWork: [
    {
      title: "Model-behavior evaluation",
      label: "AI evaluation and safeguards operations",
      domain: "Adversarial evaluation",
      metric: "75",
      metricLabel: "platform-confirmed breaks",
      tags: ["156 submissions", "26 waves"],
      href: "/security.html",
      linkLabel: "Internal evidence record",
      theme: "cobalt"
    },
    {
      title: "Paid scientific verification",
      label: "Entropy for Life",
      domain: "Public science production",
      metric: "55+",
      metricLabel: "productions supported",
      tags: ["266K YouTube", "159K Instagram"],
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Official YouTube channel",
      theme: "coral"
    },
    {
      title: "Yourself to Science",
      label: "Research and product operations",
      domain: "Open research infrastructure",
      metric: "55+",
      metricLabel: "research routes indexed",
      tags: ["FAIRsharing", "Zenodo"],
      href: "https://yourselftoscience.org/",
      linkLabel: "Official product website",
      theme: "moss"
    },
    {
      title: "MDPI Filter",
      label: "Chrome and Edge research tooling",
      domain: "Browser product",
      metric: "2",
      metricLabel: "public browser stores",
      tags: ["Literature search", "Citation detection"],
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
      linkLabel: "Chrome Web Store listing",
      theme: "slate"
    }
  ],

  flagships: [
    {
      id: "model-behavior",
      label: "AI evaluation and model behavior",
      title: "Adversarial testing with explicit evidence boundaries",
      summary: "I explore instruction handling, multimodal inputs, agentic tool use and indirect prompt injection, preserving reproduction notes while separating platform-confirmed outcomes from independent security claims.",
      proof: "75 platform-confirmed breaks · 156 submissions · 26 listed waves",
      metric: "75",
      metricLabel: "platform-confirmed breaks",
      visualEyebrow: "Gray Swan activity · July 2026",
      details: ["156 submissions", "26 listed waves"],
      destination: "Internal case record with live profile and archived verification snapshot",
      theme: "cobalt",
      href: "/security.html",
      linkLabel: "View the evaluation record"
    },
    {
      id: "entropy",
      label: "Paid scientific verification",
      title: "Primary-source checking inside a multi-platform public production workflow",
      summary: "For Entropy for Life, I investigate biomedical and evolutionary claims, identify weak or conflicting evidence and communicate corrections to a non-specialist production team.",
      proof: "55+ videos and documentaries · four articles · public presence across seven official social platforms",
      metric: "55+",
      metricLabel: "productions supported",
      visualEyebrow: "Paid scientific verification",
      details: ["266K YouTube", "159K Instagram", "4.1K Telegram"],
      destination: "Official Entropy for Life channel; project-scale figures are attributed, not treated as unique audience",
      theme: "coral",
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Open the official channel"
    },
    {
      id: "yourself-to-science",
      label: "Research and product operations",
      title: "A public system for discovering ways to participate in research",
      summary: "I founded and operate Yourself to Science, defining inclusion rules, verification and provenance fields, open licensing, public datasets and the requirements used for AI-assisted implementation.",
      proof: "55+ initiatives · FAIRsharing and Zenodo records · public machine-readable interfaces",
      metric: "55+",
      metricLabel: "research initiatives",
      visualEyebrow: "Open research participation",
      details: ["FAIRsharing", "Zenodo", "Machine-readable data"],
      destination: "Official Yourself to Science catalogue",
      theme: "moss",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore the catalogue"
    }
  ],

  humanResearch: {
    label: "Participant-sensitive research experience",
    title: "Structured remote facilitation with autistic participants",
    organization: "Department of Developmental Psychology and Socialisation (DPSS), University of Padua",
    supervisor: "Supervised by Marta Panzeri",
    period: "November 2022–2025 · volunteer research collaboration",
    summary: "Co-facilitated recorded Zoom focus groups on sexuality, relationships and sensory experiences; contributed structured prompts, participant-sensitive pacing, two-person handoffs, recruitment, literature research and technical preparation.",
    capabilities: [
      "Structured discussion guides and scripted prompts",
      "Two-person handoffs and live recovery",
      "Participant-sensitive communication and privacy boundaries"
    ],
    links: [
      { label: "Marta Panzeri — official profile", href: "https://dpss.unipd.it/en/node/239" },
      { label: "Department", href: "https://www.unipd.it/en/dpss" },
      { label: "Public thesis context", href: "https://thesis.unipd.it/handle/20.500.12608/51396" }
    ]
  },

  products: [
    {
      title: "MDPI Filter",
      label: "Chrome and Edge extension",
      body: "Highlights or hides MDPI results across literature-search tools and identifies linked references inside publisher pages.",
      image: "/media/work/mdpi-filter-2-800.webp",
      alt: "MDPI Filter browser-extension popup and detected references",
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp"
    },
    {
      title: "English Wikipedia Link Converter",
      label: "AWS Lambda and Telegram",
      body: "Converts non-English Wikipedia links to their English equivalents in private chats, groups and inline mode.",
      image: "/media/work/telegram-bot-avatar.jpg",
      alt: "Official profile icon of the English Wikipedia Link Converter Telegram bot",
      href: "https://t.me/ToEnWikipediaBot"
    },
    {
      title: "Emergent Humanity",
      label: "Interactive network narrative",
      body: "A browser-based narrative and simulation about signal, noise, echo chambers and collective memory.",
      image: "/media/work/emergent-humanity-800.webp",
      alt: "Emergent Humanity interactive network narrative",
      href: "https://jnton.github.io/emergent-humanity/"
    }
  ],

  visualization: [
    {
      title: "Tableau Public",
      body: "Interactive statistical work covering mortality, demography, health and public policy.",
      image: "/media/work/tableau-mortality-800.webp",
      alt: "Tableau mortality analysis by age in Italy",
      href: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
    },
    {
      title: "Flourish",
      body: "Interactive public visual storytelling, including global cancer-incidence mapping.",
      image: "/media/work/flourish-oesophageal-cancer.svg",
      alt: "Global map of age-standardized oesophageal cancer incidence",
      href: "https://public.flourish.studio/visualisation/17745490/"
    },
    {
      title: "Autism genetics visualization",
      body: "A directly inspectable, self-authored SVG showing overlapping monogenic phenotypes across autism, dystonia, epilepsy and schizophrenia.",
      image: "/media/work/wikimedia-clinical-overlap.svg",
      alt: "Euler diagram of overlapping clinical phenotypes in genes associated with autism spectrum disorder, dystonia, epilepsy and schizophrenia",
      href: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg"
    }
  ],

  workingStyle: {
    label: "Neurodivergent working profile",
    title: "Autistic, direct and unusually comfortable with difficult problems.",
    body: "I work best in high-autonomy teams that reward independent judgment, explicit assumptions, deep focus and ownership of outcomes. The useful signal is not an edgy personality label: it is a demonstrated willingness to question consensus, enter unusual domains and state exactly where the evidence stops."
  },

  workingPrinciples: [
    {
      title: "Contrarian, not careless",
      body: "Challenge consensus and weak claims while keeping hypotheses, observed evidence and verified conclusions separate."
    },
    {
      title: "Direct communication",
      body: "Prefer explicit constraints, plain disagreement and inspectable decisions over consensus theatre or ambiguous ownership."
    },
    {
      title: "High ownership",
      body: "Move from a missing workflow to requirements, coordination, functional testing, deployment diagnosis and maintenance."
    },
    {
      title: "Comfort with unusual domains",
      body: "Work seriously on adversarial AI behavior, public genomics, sensitive research topics and difficult provenance questions."
    }
  ],

  applicationDocuments: [
    {
      title: "AI Evaluation & Model Behavior",
      description: "Evaluation operations, model behavior, safeguards support, adversarial QA and trust-and-safety testing.",
      href: "/cv-resume.html"
    },
    {
      title: "Scientific AI Quality & Research Data",
      description: "Scientific evidence review, provenance, research operations, metadata and domain-expert quality work.",
      href: "/cv-research.html"
    },
    {
      title: "Trust, Safety & Knowledge Integrity",
      description: "OSINT support, source provenance, content integrity and public-record investigation.",
      href: "/cv-integrity.html"
    },
    {
      title: "Research, Editorial & Community Operations",
      description: "A bridge document for editorial coordination, evidence synthesis and participant-facing research roles.",
      href: "/cv-editorial.html"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}
