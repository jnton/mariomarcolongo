const PORTFOLIO_HUMAN = {
  eyebrow: "AI evaluation · scientific fact-checking",
  headline: "I test AI systems and verify scientific claims.",
  introduction: "My two primary areas are AI model-behavior evaluation and scientific fact-checking. Research information systems are a supporting area: I apply the same evidence and data-quality discipline to maintained public records and tools. The cases below keep these scopes separate.",

  proofMoments: [
    {
      value: "75",
      label: "platform-confirmed model breaks",
      detail: "Gray Swan Proving Ground · July 2026",
      href: "/security.html"
    },
    {
      value: "55+",
      label: "scientific productions fact-checked",
      detail: "Paid primary-source review for Entropy for Life",
      href: "https://www.youtube.com/@entropyforlife"
    },
    {
      value: "55+",
      label: "research opportunities indexed",
      detail: "Yourself to Science catalogue and verification workflow",
      href: "https://yourselftoscience.org/"
    }
  ],

  engineStages: [
    {
      id: "ai-evaluation",
      number: "01",
      label: "AI evaluation",
      title: "Test model behavior under defined conditions.",
      body: "Design adversarial and edge-case interactions, record what the model does, and distinguish direct observations from platform-confirmed outcomes or broader interpretations.",
      signal: "Scope: model behavior and evaluation operations",
      examples: "Chat · multimodal inputs · tool use · indirect prompt injection"
    },
    {
      id: "scientific-fact-checking",
      number: "02",
      label: "Fact-checking",
      title: "Check whether the sources support the claim.",
      body: "Trace a proposed statement to primary literature, compare conflicting evidence, and recommend whether the wording should be kept, qualified, corrected, or removed.",
      signal: "Scope: scientific evidence for public communication",
      examples: "Biology · medicine · public health"
    },
    {
      id: "research-information",
      number: "03",
      label: "Research systems",
      title: "Turn scattered information into maintained records.",
      body: "Define inclusion rules, provenance fields, update procedures, and public interfaces for research information that is otherwise difficult to find or verify.",
      signal: "Supporting scope: research data and public information tools",
      examples: "Directories · metadata · APIs · public datasets"
    }
  ],

  cases: [
    {
      id: "model-behavior",
      number: "01",
      label: "AI evaluation",
      title: "Testing model behavior and documenting the result.",
      lead: "A model failure is useful only when the test conditions and the limits of the result are clear.",
      situation: "Instruction hierarchy, multimodal inputs, tool use, and indirect prompt injection can produce failures that are difficult to compare and easy to overstate.",
      action: "I vary the interaction path, preserve reproduction notes, and separate what I observed from platform labels, independent verification, and model-wide conclusions.",
      result: "A public evaluation record with methodology, limitations, live platform evidence, and an archival fallback.",
      boundary: "This demonstrates evaluation judgment and sustained testing. It is not a penetration test and does not establish senior red-team engineering experience.",
      href: "/security.html",
      linkLabel: "Open the evaluation record",
      theme: "signal",
      visualTitle: "Result classification",
      visualLines: [
        ["Observed", "Behavior recorded in the test"],
        ["Platform-confirmed", "Status reported by Gray Swan"],
        ["Not claimed", "Independent severity or model-wide impact"]
      ]
    },
    {
      id: "scientific-verification",
      number: "02",
      label: "Scientific fact-checking",
      title: "Checking whether sources support a public scientific claim.",
      lead: "The task is to determine whether a study's methods and results support the exact wording proposed for publication.",
      situation: "Science communication often compresses limited, uncertain, or conflicting research into a short statement for a general audience.",
      action: "I break the statement into checkable claims, review the primary literature, trace disagreements between sources, and explain the needed correction or qualification to the production team.",
      result: "Paid fact-checking integrated into an ongoing publishing workflow covering videos, documentaries, and articles.",
      boundary: "My role is evidence review and editorial recommendation. Final wording, production, and publication decisions remain with the editorial team.",
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Open the official channel",
      theme: "evidence",
      visualTitle: "Claim review",
      visualLines: [
        ["Claim", "The statement proposed for publication"],
        ["Evidence", "Primary sources, methods, and disagreement"],
        ["Recommendation", "Keep, qualify, correct, or remove"]
      ]
    },
    {
      id: "research-system",
      number: "03",
      label: "Research information system",
      title: "Building a maintained directory of research opportunities.",
      lead: "A useful directory needs clear inclusion rules, source records, and an update process.",
      situation: "Research-participation opportunities are distributed across institutions, described with inconsistent terminology, and often lack stable machine-readable records.",
      action: "I defined the inclusion criteria, verification fields, provenance model, licensing boundaries, update workflow, and public-data requirements, then coordinated the AI-assisted implementation and ongoing operation.",
      result: "Yourself to Science, a public catalogue with FAIRsharing and Zenodo records and machine-readable interfaces.",
      boundary: "My contribution covers requirements, information architecture, verification, functional testing, deployment diagnosis, and operations. I do not present the implementation as unaided software development.",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore Yourself to Science",
      theme: "system",
      visualTitle: "Record workflow",
      visualLines: [
        ["Find", "Institutional research opportunity"],
        ["Verify", "Eligibility, status, and source"],
        ["Publish", "Human- and machine-readable record"]
      ]
    }
  ],

  lab: [
    {
      id: "mdpi-filter",
      label: "Research-integrity tooling",
      title: "MDPI Filter",
      body: "A browser extension and Zotero plugin that identify MDPI references in search results and libraries while avoiding title-based false positives.",
      meta: "Chrome · Edge · Firefox · Safari source · Zotero 7–9",
      href: "https://github.com/orgs/mdpi-filter/repositories",
      linkLabel: "Open the product repositories",
      interaction: "filter"
    },
    {
      id: "protein-explorer",
      label: "Reproducible data product",
      title: "Protein by bodyweight by country",
      body: "An interactive explorer combining protein supply, estimated bodyweight, and GDP data, with the ecological assumptions and methodological limits stated alongside the results.",
      meta: "FAOSTAT · NCD-RisC · World Bank · shareable views",
      href: "https://jnton.github.io/protein-by-bodyweight-country/",
      linkLabel: "Launch the live explorer",
      interaction: "chart"
    }
  ],

  featuredArtifact: {
    label: "Scientific visualization",
    title: "A diagram of overlapping clinical phenotypes.",
    body: "I designed this vector diagram to show overlap among monogenic conditions associated with autism, dystonia, epilepsy, and schizophrenia. The Wikimedia record provides the source file, authorship, revision history, and reuse information.",
    image: "/media/work/wikimedia-clinical-overlap.svg",
    alt: "Euler diagram of overlapping clinical phenotypes in genes associated with autism spectrum disorder, dystonia, epilepsy and schizophrenia",
    href: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg",
    linkLabel: "Open the Wikimedia record"
  },

  workingStyle: {
    label: "Working preferences",
    title: "Clear goals, direct feedback, and responsibility for the result.",
    body: "I work best when the objective and decision rights are explicit, feedback is direct, and I can follow a problem through investigation, documentation, release, and maintenance."
  },

  workingPrinciples: [
    {
      title: "Separate observation from interpretation",
      body: "State what was directly observed before drawing a broader conclusion."
    },
    {
      title: "Make assumptions visible",
      body: "Document the definitions, exclusions, and judgments that affect the result."
    },
    {
      title: "Plan for maintenance",
      body: "Treat updates, provenance, and operational recovery as part of the work."
    }
  ],

  applicationDocuments: [
    {
      title: "AI Evaluation & Model Behavior",
      description: "Model-behavior testing, adversarial QA, evaluation operations, and evidence-bound reporting.",
      href: "/cv-resume.html",
      recommendedFor: "AI evaluation and safeguards roles"
    },
    {
      title: "Scientific AI Quality & Research Data",
      description: "Scientific evidence review, research-data quality, provenance, metadata, and research operations.",
      href: "/cv-research.html",
      recommendedFor: "Scientific AI and research-data roles"
    },
    {
      title: "Trust, Safety & Knowledge Integrity",
      description: "Source provenance, public-record research, content integrity, and investigation support.",
      href: "/cv-integrity.html",
      recommendedFor: "Integrity and investigation roles"
    },
    {
      title: "Research, Editorial & Community Operations",
      description: "Scientific fact-checking, editorial coordination, evidence synthesis, and participant-facing research operations.",
      href: "/cv-editorial.html",
      recommendedFor: "Editorial and research-operations roles"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}
