const PORTFOLIO_HUMAN = {
  eyebrow: "AI evaluation · scientific evidence · research systems",
  headline: "I turn ambiguous claims into inspectable systems.",
  introduction: "I work where evidence is incomplete, incentives are messy and the result still has to survive scrutiny. I test model behavior, verify scientific claims and turn uncertain research workflows into public, maintainable systems.",

  proofMoments: [
    {
      value: "75",
      label: "platform-confirmed model breaks",
      detail: "Gray Swan Proving Ground · July 2026",
      href: "/security.html"
    },
    {
      value: "55+",
      label: "scientific productions supported",
      detail: "Paid primary-source verification for Entropy for Life",
      href: "https://www.youtube.com/@entropyforlife"
    },
    {
      value: "55+",
      label: "research routes made inspectable",
      detail: "Yourself to Science catalogue and provenance workflow",
      href: "https://yourselftoscience.org/"
    }
  ],

  engineStages: [
    {
      id: "ambiguity",
      number: "01",
      label: "Ambiguity",
      title: "Find the claim that can fail.",
      body: "Separate the visible request from hidden assumptions, incentives, missing context and plausible failure modes.",
      signal: "What is actually uncertain?",
      examples: "Model behavior · scientific claims · research participation"
    },
    {
      id: "test",
      number: "02",
      label: "Test",
      title: "Vary the path, not just the wording.",
      body: "Probe alternate contexts, sources, interaction surfaces and edge cases until the important boundary becomes observable.",
      signal: "What changes the outcome?",
      examples: "Multimodal inputs · conflicting literature · incomplete records"
    },
    {
      id: "verify",
      number: "03",
      label: "Verify",
      title: "Preserve the evidence boundary.",
      body: "Record what was observed, what a platform reported, what can be reproduced and what remains an inference.",
      signal: "What can another person inspect?",
      examples: "Primary sources · provenance · archived snapshots"
    },
    {
      id: "operate",
      number: "04",
      label: "Operate",
      title: "Make the result survive contact with reality.",
      body: "Turn the finding into a maintained workflow, public record, product decision or system that remains useful after the initial insight.",
      signal: "What still works next month?",
      examples: "Catalogue operations · release pipelines · public interfaces"
    }
  ],

  cases: [
    {
      id: "model-behavior",
      number: "01",
      label: "Model behavior",
      title: "From an ambiguous failure to an inspectable evaluation record.",
      lead: "Adversarial testing is useful only when the evidence survives the excitement of the break.",
      situation: "Instruction hierarchy, multimodal inputs, tool use and indirect prompt injection create failures that are easy to overstate and hard to compare.",
      action: "I vary attack paths, preserve reproduction notes and separate observed behavior from platform labels, independent verification and model-wide claims.",
      result: "A public evaluation record with methodology, limitations, live platform evidence and an archival fallback.",
      boundary: "The record supports evaluation judgment and persistence; it is not presented as a penetration test or senior red-team engineering credential.",
      href: "/security.html",
      linkLabel: "Open the evaluation record",
      theme: "signal",
      visualTitle: "Boundary map",
      visualLines: [
        ["Observed", "Directly recorded behavior"],
        ["Platform-confirmed", "Gray Swan status"],
        ["Not claimed", "Independent severity or model-wide impact"]
      ]
    },
    {
      id: "scientific-verification",
      number: "02",
      label: "Scientific verification",
      title: "From a confident claim to a defensible production decision.",
      lead: "The hard part is rarely finding a paper. It is deciding what the paper actually licenses you to say.",
      situation: "Public science production compresses uncertain, conflicting and domain-specific evidence into language that must remain accurate and understandable.",
      action: "I decompose claims, inspect primary literature, trace disagreement and communicate corrections to a non-specialist production team.",
      result: "Paid verification integrated into an ongoing multi-platform publishing workflow, including videos, documentaries and articles.",
      boundary: "Audience figures belong to Entropy for Life and are not presented as my personal reach or unique audience.",
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Open the official channel",
      theme: "evidence",
      visualTitle: "Claim audit",
      visualLines: [
        ["Claim", "What the script wants to say"],
        ["Sources", "Primary evidence and conflict"],
        ["Decision", "Keep, qualify, correct or remove"]
      ]
    },
    {
      id: "research-system",
      number: "03",
      label: "Research system",
      title: "From scattered opportunities to a verifiable public route into research.",
      lead: "A directory becomes infrastructure only when inclusion, provenance and maintenance are explicit.",
      situation: "Research participation opportunities are distributed across institutions, use inconsistent terminology and frequently lack stable, machine-readable records.",
      action: "I defined inclusion rules, verification fields, provenance, licensing and public data requirements, then operate the catalogue and its technical workflow.",
      result: "Yourself to Science: a public research-participation system with FAIRsharing and Zenodo records and machine-readable interfaces.",
      boundary: "Implementation is AI-assisted; I own requirements, verification, functional testing, deployment diagnosis and operations rather than claiming unaided software development.",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore Yourself to Science",
      theme: "system",
      visualTitle: "Provenance chain",
      visualLines: [
        ["Discover", "Institutional opportunity"],
        ["Verify", "Eligibility, status and source"],
        ["Publish", "Human and machine-readable record"]
      ]
    }
  ],

  lab: [
    {
      id: "mdpi-filter",
      label: "Research-integrity tooling",
      title: "MDPI Filter",
      body: "A cross-surface identification system for literature searches, publisher references and Zotero libraries. Current public products include the multi-browser extension and a Zotero plugin with exact-evidence matching and false-positive avoidance.",
      meta: "Chrome · Edge · Firefox · Safari source · Zotero 7–9",
      href: "https://github.com/orgs/mdpi-filter/repositories",
      linkLabel: "Open the product repositories",
      interaction: "filter"
    },
    {
      id: "protein-explorer",
      label: "Reproducible data product",
      title: "Protein by bodyweight by country",
      body: "An interactive explorer combining protein supply, estimated bodyweight and GDP context while keeping ecological assumptions and methodological warnings visible.",
      meta: "FAOSTAT · NCD-RisC · World Bank · shareable views",
      href: "https://jnton.github.io/protein-by-bodyweight-country/",
      linkLabel: "Launch the live explorer",
      interaction: "chart"
    },
    {
      id: "wikipedia-bot",
      label: "Production operations",
      title: "English Wikipedia Link Converter",
      body: "A Telegram bot running on AWS Lambda across private chats, groups and inline mode, with release automation, canary validation and operational recovery workflows.",
      meta: "AWS Lambda · ARM64 · GitHub Actions · Telegram",
      href: "https://t.me/ToEnWikipediaBot",
      linkLabel: "Open the live bot",
      interaction: "convert"
    },
    {
      id: "emergent-humanity",
      label: "Interactive narrative",
      title: "Emergent Humanity",
      body: "A 16-chapter browser essay and simulation about signal, noise, echo chambers and collective memory, designed as an interactive system rather than a static article.",
      meta: "Network simulation · sound opt-in · agent metadata",
      href: "https://jnton.github.io/emergent-humanity/",
      linkLabel: "Enter the narrative",
      interaction: "network"
    }
  ],

  featuredArtifact: {
    label: "Featured public artifact",
    title: "Autism genetics, drawn as an inspectable overlap.",
    body: "A self-authored vector diagram showing overlapping monogenic phenotypes across autism, dystonia, epilepsy and schizophrenia. It is the strongest single example of my scientific visual reasoning because the source, structure, reuse and authorship can all be inspected directly.",
    image: "/media/work/wikimedia-clinical-overlap.svg",
    alt: "Euler diagram of overlapping clinical phenotypes in genes associated with autism spectrum disorder, dystonia, epilepsy and schizophrenia",
    href: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg",
    linkLabel: "Inspect the Wikimedia source record"
  },

  workingStyle: {
    label: "Operating profile",
    title: "Independent judgment, explicit assumptions, low-deference work.",
    body: "I am most useful in high-autonomy environments that reward deep focus, direct disagreement, difficult domains and ownership beyond the initial analysis.",
    disclosureTitle: "Why I work this way",
    disclosureBody: "I am autistic. In practice, that means I prefer explicit expectations, direct feedback, sustained focus and problems with enough structure to investigate but enough ambiguity to matter. The work on this page is the evidence; the diagnosis is context."
  },

  workingPrinciples: [
    {
      title: "Contrarian, not careless",
      body: "Question consensus without confusing novelty with truth."
    },
    {
      title: "Direct, not theatrical",
      body: "State constraints, disagreement and uncertainty plainly."
    },
    {
      title: "Own the afterlife",
      body: "Treat deployment, maintenance and evidence preservation as part of the work."
    }
  ],

  applicationDocuments: [
    {
      title: "AI Evaluation & Model Behavior",
      description: "Evaluation operations, model behavior, safeguards support, adversarial QA and trust-and-safety testing.",
      href: "/cv-resume.html",
      recommendedFor: "AI evaluation and safeguards roles"
    },
    {
      title: "Scientific AI Quality & Research Data",
      description: "Scientific evidence review, provenance, research operations, metadata and domain-expert quality work.",
      href: "/cv-research.html",
      recommendedFor: "Scientific AI and research-data roles"
    },
    {
      title: "Trust, Safety & Knowledge Integrity",
      description: "OSINT support, source provenance, content integrity and public-record investigation.",
      href: "/cv-integrity.html",
      recommendedFor: "Integrity and investigation roles"
    },
    {
      title: "Research, Editorial & Community Operations",
      description: "Editorial coordination, evidence synthesis and participant-facing research operations.",
      href: "/cv-editorial.html",
      recommendedFor: "Editorial and research-operations roles"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}
