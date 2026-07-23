const PORTFOLIO_HUMAN = {
  eyebrow: "AI evaluation · scientific research quality",
  headline: "I test AI systems and verify scientific claims.",
  introduction: "My work focuses on two related problems: finding where AI behavior fails, and checking whether scientific claims are supported by the evidence. I document the result clearly and build practical tools or workflows around it.",

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
      label: "research opportunities verified",
      detail: "Yourself to Science catalogue and provenance workflow",
      href: "https://yourselftoscience.org/"
    }
  ],

  engineStages: [
    {
      id: "ambiguity",
      number: "01",
      label: "Define",
      title: "Clarify the question.",
      body: "Identify the exact claim, the missing context and the assumptions that could change the answer.",
      signal: "What are we trying to establish?",
      examples: "Model behavior · scientific claims · research participation"
    },
    {
      id: "test",
      number: "02",
      label: "Test",
      title: "Check how the result changes.",
      body: "Vary the context, source, input or interaction path until the important boundary becomes visible.",
      signal: "What changes the outcome?",
      examples: "Multimodal inputs · conflicting literature · incomplete records"
    },
    {
      id: "verify",
      number: "03",
      label: "Document",
      title: "Record what the evidence supports.",
      body: "Separate direct observations, platform reports, reproducible findings and conclusions that remain uncertain.",
      signal: "What can another person inspect?",
      examples: "Primary sources · provenance · archived snapshots"
    },
    {
      id: "operate",
      number: "04",
      label: "Apply",
      title: "Turn the result into useful work.",
      body: "Use the finding to improve a decision, workflow, public record or tool, and keep it maintainable after the initial analysis.",
      signal: "What should change in practice?",
      examples: "Editorial decisions · catalogue operations · product releases"
    }
  ],

  cases: [
    {
      id: "model-behavior",
      number: "01",
      label: "AI evaluation",
      title: "Documenting AI failures without overstating them.",
      lead: "Finding a failure is only useful when another person can understand what happened and what the evidence supports.",
      situation: "Instruction hierarchy, multimodal inputs, tool use and indirect prompt injection can produce failures that are difficult to compare and easy to exaggerate.",
      action: "I vary the attack path, preserve reproduction notes and distinguish observed behavior from platform labels, independent verification and broader claims about a model.",
      result: "A public evaluation record with methodology, limitations, live platform evidence and an archival fallback.",
      boundary: "This demonstrates evaluation judgment and persistent testing. It is not presented as a penetration test or a senior red-team engineering credential.",
      href: "/security.html",
      linkLabel: "Open the evaluation record",
      theme: "signal",
      visualTitle: "Evidence levels",
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
      title: "Checking scientific claims before publication.",
      lead: "Finding a relevant paper is only the first step. The real task is deciding whether the evidence supports the exact claim being made.",
      situation: "Science communication often compresses uncertain, conflicting and domain-specific evidence into language that must still be accurate and understandable.",
      action: "I break claims into testable parts, inspect primary literature, trace disagreements between sources and communicate corrections to a non-specialist production team.",
      result: "Paid verification integrated into an ongoing publishing workflow covering videos, documentaries and articles.",
      boundary: "Audience figures belong to Entropy for Life and are not presented as my personal reach or unique audience.",
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Open the official channel",
      theme: "evidence",
      visualTitle: "Claim review",
      visualLines: [
        ["Claim", "The exact statement under review"],
        ["Evidence", "Primary sources and disagreement"],
        ["Decision", "Keep, qualify, correct or remove"]
      ]
    },
    {
      id: "research-system",
      number: "03",
      label: "Research operations",
      title: "Building a reliable directory of research-participation opportunities.",
      lead: "A public directory is useful only when entries are checked, sourced and kept up to date.",
      situation: "Research-participation opportunities are distributed across institutions, use inconsistent terminology and often lack stable, machine-readable records.",
      action: "I defined the inclusion rules, verification fields, provenance, licensing and public-data requirements, then built the operating workflow around them.",
      result: "Yourself to Science: a public catalogue with FAIRsharing and Zenodo records and machine-readable interfaces.",
      boundary: "Implementation is AI-assisted. I own requirements, verification, functional testing, deployment diagnosis and operations rather than claiming unaided software development.",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore Yourself to Science",
      theme: "system",
      visualTitle: "Verification flow",
      visualLines: [
        ["Find", "Institutional opportunity"],
        ["Check", "Eligibility, status and source"],
        ["Publish", "Human and machine-readable record"]
      ]
    }
  ],

  lab: [
    {
      id: "mdpi-filter",
      label: "Research-integrity tooling",
      title: "MDPI Filter",
      body: "A browser extension and Zotero plugin that identify MDPI references while avoiding ambiguous matches. The current product focuses on accurate identification across literature-search and reference-management workflows.",
      meta: "Chrome · Edge · Firefox · Safari source · Zotero 7–9",
      href: "https://github.com/orgs/mdpi-filter/repositories",
      linkLabel: "Open the product repositories",
      interaction: "filter"
    },
    {
      id: "protein-explorer",
      label: "Reproducible data product",
      title: "Protein by bodyweight by country",
      body: "An interactive explorer combining protein supply, estimated bodyweight and GDP context, with the ecological assumptions and methodological limits kept visible.",
      meta: "FAOSTAT · NCD-RisC · World Bank · shareable views",
      href: "https://jnton.github.io/protein-by-bodyweight-country/",
      linkLabel: "Launch the live explorer",
      interaction: "chart"
    }
  ],

  featuredArtifact: {
    label: "Scientific visualization",
    title: "A scientific diagram with an inspectable source record.",
    body: "This vector diagram shows overlapping monogenic phenotypes across autism, dystonia, epilepsy and schizophrenia. The source file, structure, authorship and reuse history are all publicly inspectable on Wikimedia Commons.",
    image: "/media/work/wikimedia-clinical-overlap.svg",
    alt: "Euler diagram of overlapping clinical phenotypes in genes associated with autism spectrum disorder, dystonia, epilepsy and schizophrenia",
    href: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg",
    linkLabel: "Inspect the Wikimedia source record"
  },

  workingStyle: {
    label: "How I work",
    title: "Independent, careful and direct.",
    body: "I work best with clear goals, room to investigate and responsibility for the final result. I prefer direct feedback and explicit decisions over vague alignment or performative certainty."
  },

  workingPrinciples: [
    {
      title: "Question assumptions",
      body: "Check whether the premise is supported before optimizing around it."
    },
    {
      title: "State uncertainty clearly",
      body: "Separate what is observed, reported, inferred or still unknown."
    },
    {
      title: "Finish the operational work",
      body: "Include documentation, maintenance and follow-up in the job."
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
