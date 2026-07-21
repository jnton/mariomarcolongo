const PORTFOLIO_HUMAN = {
  eyebrow: "AI safety · scientific verification · research operations",
  headline: "Evidence, AI and operations for difficult problems.",
  introduction: "I verify scientific claims, test model behavior, coordinate sensitive research and operate public tools. My strongest work combines investigation, clear evidence boundaries and ownership of the workflow from question to usable result.",

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
      label: "AI safety",
      image: "/media/work/model-behavior-record.svg",
      alt: "Aggregate public record of model-behavior testing activity",
      href: "/security.html"
    },
    {
      title: "MDPI Filter",
      label: "Research tooling",
      image: "/media/work/mdpi-filter-1.jpg",
      alt: "MDPI Filter highlighting publisher citations inside a literature workflow",
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp"
    },
    {
      title: "Yourself to Science",
      label: "Research operations",
      image: "/media/work/yourself-to-science.png",
      alt: "Yourself to Science public research-participation catalogue",
      href: "https://yourselftoscience.org/"
    },
    {
      title: "Wikipedia Link Converter",
      label: "Serverless automation",
      image: "/media/work/telegram-bot-card.svg",
      alt: "English Wikipedia Link Converter Telegram bot product card",
      href: "https://t.me/ToEnWikipediaBot"
    }
  ],

  flagships: [
    {
      id: "model-behavior",
      label: "AI safety and model behavior",
      title: "Adversarial testing with explicit evidence boundaries",
      summary: "I explore instruction handling, multimodal inputs, agentic tool use and indirect prompt injection, preserving reproduction notes while separating platform-confirmed outcomes from independent security claims.",
      proof: "75 platform-confirmed breaks · 156 submissions · 26 listed waves",
      image: "/media/work/model-behavior-record.svg",
      alt: "Editorial aggregate record of model-behavior testing",
      href: "/security.html",
      linkLabel: "View the evaluation record"
    },
    {
      id: "entropy",
      label: "Paid scientific verification",
      title: "Primary-source checking inside a large public production workflow",
      summary: "For Entropy for Life, I investigate biomedical and evolutionary claims, identify weak or conflicting evidence and communicate corrections to a non-specialist production team.",
      proof: "55+ videos and documentaries · four articles · project audience reported at 250K+ YouTube subscribers",
      image: null,
      alt: null,
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Open the channel"
    },
    {
      id: "yourself-to-science",
      label: "Research and product operations",
      title: "A public system for discovering ways to participate in research",
      summary: "I founded and operate Yourself to Science, defining inclusion rules, verification and provenance fields, open licensing, public datasets and the requirements used for AI-assisted implementation.",
      proof: "55+ initiatives · FAIRsharing and Zenodo records · public machine-readable interfaces",
      image: "/media/work/yourself-to-science.png",
      alt: "Yourself to Science research-participation catalogue",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore the catalogue"
    }
  ],

  humanResearch: {
    label: "Sensitive human-subject research operations",
    title: "Co-facilitating autism-and-sexuality focus groups with participant safety built into the protocol",
    organization: "Department of Developmental Psychology and Socialisation (DPSS), University of Padua",
    supervisor: "Supervised by Marta Panzeri",
    period: "November 2022–2025 · volunteer research collaboration",
    summary: "I co-facilitated recorded Zoom focus groups with autistic participants discussing sexuality, relationships and sensory experiences. The work required non-judgmental communication, clear expectations, careful pacing and reliable coordination inside a two-person facilitation team.",
    capabilities: [
      "Co-developed structured discussion guides, scripted prompts and session procedures",
      "Used live handoffs and recovery when a facilitator missed a prompt or needed support",
      "Supported recruitment, literature research, Zoom preparation and research-team coordination",
      "Protected participant privacy and kept public descriptions separate from confidential session content"
    ],
    links: [
      { label: "Marta Panzeri — official profile", href: "https://dpss.unipd.it/en/node/239" },
      { label: "Department of Developmental Psychology and Socialisation", href: "https://www.unipd.it/en/dpss" },
      { label: "Public thesis context", href: "https://thesis.unipd.it/handle/20.500.12608/51396" }
    ]
  },

  products: [
    {
      title: "MDPI Filter",
      label: "Chrome and Edge extension",
      body: "Highlights or hides MDPI results across literature-search tools and identifies linked references inside publisher pages.",
      image: "/media/work/mdpi-filter-2.jpg",
      alt: "MDPI Filter browser-extension popup and detected references",
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp"
    },
    {
      title: "English Wikipedia Link Converter",
      label: "AWS Lambda and Telegram",
      body: "Converts non-English Wikipedia links to their English equivalents in private chats, groups and inline mode.",
      image: "/media/work/telegram-bot-card.svg",
      alt: "English Wikipedia Link Converter product card",
      href: "https://t.me/ToEnWikipediaBot"
    },
    {
      title: "Emergent Humanity",
      label: "Interactive network narrative",
      body: "A browser-based narrative and simulation about signal, noise, echo chambers and collective memory.",
      image: "/media/work/emergent-humanity.png",
      alt: "Emergent Humanity interactive network narrative",
      href: "https://jnton.github.io/emergent-humanity/"
    }
  ],

  visualization: [
    {
      title: "Tableau Public",
      body: "Interactive statistical work covering mortality, demography, health and public policy.",
      image: "/media/work/tableau-mortality.png",
      alt: "Tableau mortality analysis by age in Italy",
      href: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
    },
    {
      title: "Flourish",
      body: "Interactive public visual storytelling, including global cancer-incidence mapping.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Oesophageal_Cancer%2C_Age-Standardized_Rate_%28World%29_per_100.000_of_Incidence_Cases%2C_Both_sexes%2C_Worldwide_in_2022.svg",
      alt: "Global map of age-standardized oesophageal cancer incidence",
      href: "https://public.flourish.studio/visualisation/17745490/"
    },
    {
      title: "Wikimedia Commons",
      body: "More than 70 open biomedical, epidemiological and public-policy visualizations, with reuse across Wikipedia editions.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Diagram_of_overlap_between_genes_which_are_affected_in_various_mental_disorders.svg",
      alt: "Diagram of genetic overlap across several mental disorders",
      href: "https://commons.wikimedia.org/wiki/Special:ListFiles/Digressivo"
    }
  ],

  workingPrinciples: [
    {
      title: "Investigate ambiguity",
      body: "Break unclear questions into claims, evidence sources, operational constraints and testable failure modes."
    },
    {
      title: "Own the workflow",
      body: "Move from requirements and coordination through testing, deployment diagnosis and maintenance."
    },
    {
      title: "State the boundary",
      body: "Distinguish observed evidence, platform labels, inference and uncertainty instead of making the result sound stronger than it is."
    }
  ],

  applicationDocuments: [
    {
      title: "AI Safety & Adversarial Testing",
      description: "Model behavior, safeguards, adversarial QA, evaluation operations and trust-and-safety testing.",
      href: "/cv-resume.html"
    },
    {
      title: "Research Verification & Data Quality",
      description: "Scientific AI quality, provenance, research operations, metadata and evidence verification.",
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
