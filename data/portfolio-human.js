const PORTFOLIO_HUMAN = {
  eyebrow: "Research · evidence · public-interest technology",
  headline: "I make difficult evidence easier to trust and use.",
  introduction: "I work across scientific verification, research operations, public knowledge and AI behavior. I check sources, organize complex information, facilitate sensitive research and turn findings into useful public systems.",
  capabilities: [
    {
      verb: "Verify",
      title: "Find what the evidence actually supports",
      body: "Primary literature, public records, metadata and conflicting sources—checked carefully, with uncertainty and evidence limits made explicit.",
      proof: "55+ scientific productions checked · 4,317 public Wikimedia contributions"
    },
    {
      verb: "Organize",
      title: "Turn scattered research into usable workflows",
      body: "Research directories, structured metadata, editorial processes, session protocols and public resources designed so other people can act on them.",
      proof: "55+ research initiatives indexed · open data and machine-readable records"
    },
    {
      verb: "Test",
      title: "Look for failures before they become assumptions",
      body: "Exploratory model-behavior testing, functional QA and adversarial investigation—documented without turning platform results into unsupported security claims.",
      proof: "75 platform-confirmed model breaks · 156 submissions"
    }
  ],
  stories: [
    {
      id: "yourself-to-science",
      number: "01",
      label: "Open science · research operations",
      title: "Making research participation easier to find",
      summary: "Yourself to Science brings clinical studies, biobanks, registries and data-donation programs into one public, reusable catalogue.",
      role: "Founder and research-workflow owner",
      process: [
        "Defined inclusion, provenance and participation fields",
        "Verified records across organizations and countries",
        "Published open datasets and machine-readable interfaces",
        "Operate and maintain the public service"
      ],
      result: "More than 55 research initiatives indexed, with FAIRsharing and Zenodo records.",
      image: "/media/work/yourself-to-science.png",
      imageAlt: "Screenshot of the Yourself to Science public research-participation catalogue",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore the catalogue"
    },
    {
      id: "entropy-h5n1",
      number: "02",
      label: "Scientific editorial work · evidence monitoring",
      title: "Keeping a fast-changing outbreak record usable",
      summary: "For Entropy for Life, I co-authored a rolling H5N1 tracker and support a wider production workflow that turns primary literature into public videos, documentaries and articles.",
      role: "Scientific fact-checker, writer and website manager",
      process: [
        "Monitor public-health and scientific sources",
        "Reconcile dated developments and conflicting reports",
        "Flag unsupported claims and source-quality problems",
        "Maintain the publishing and website workflow"
      ],
      result: "Research support for 55+ videos and documentaries plus four published articles.",
      image: "/media/work/entropy-h5n1.png",
      imageAlt: "Screenshot of the published Entropy for Life H5N1 epidemiological tracker",
      href: "https://entropyforlife.it/2024/10/25/influenza-aviaria-situazione-epidemiologica-aggiornata/",
      linkLabel: "Read the public tracker"
    },
    {
      id: "focus-groups",
      number: "03",
      label: "Sensitive research · community engagement",
      title: "Facilitating difficult conversations with care and structure",
      summary: "I co-developed and co-facilitated recorded Zoom focus groups with autistic participants discussing sexuality and relationships—work that required psychological safety, precise protocols and dependable teamwork.",
      role: "Volunteer focus-group co-facilitator and research-operations contributor",
      process: [
        "Helped develop prompts, guides and session procedures",
        "Used clear expectations, respectful pacing and non-judgmental follow-up",
        "Worked in a two-person facilitation system with live handoffs",
        "Supported recruitment, bibliographic work and technical preparation"
      ],
      result: "A 2022–2025 university-affiliated collaboration; public attribution remains limited pending permission.",
      visual: "protocol",
      href: "/cv-editorial.html",
      linkLabel: "See the relevant application CV"
    },
    {
      id: "model-behavior",
      number: "04",
      label: "AI behavior · adversarial testing",
      title: "Testing model behavior without overstating the evidence",
      summary: "I conduct exploratory testing across chat, multimodal inputs, agentic tool use and indirect prompt injection, while keeping platform status separate from independent security verification.",
      role: "Independent model-behavior evaluator",
      process: [
        "Design ambiguous and adversarial interaction paths",
        "Track behavior across repeated testing waves",
        "Classify results and preserve evidence boundaries",
        "Report limitations alongside aggregate outcomes"
      ],
      result: "75 platform-confirmed model breaks across 156 submissions and 26 listed waves as of July 2026.",
      image: "/media/work/gray-swan-profile.png",
      imageAlt: "Screenshot of Mario Marcolongo's public Gray Swan Proving Ground profile",
      href: "/security.html",
      linkLabel: "Open the evaluation record"
    }
  ],
  roleFamilies: [
    {
      title: "Research, editorial and community operations",
      text: "Evidence-synthesis organizations, scientific publishing, research programs and participant-facing operations.",
      href: "/cv-editorial.html",
      label: "Editorial & community CV"
    },
    {
      title: "Trust, safety and knowledge integrity",
      text: "Content integrity, public-record research, OSINT support, provenance and abuse-analysis work.",
      href: "/cv-integrity.html",
      label: "Trust & integrity CV"
    },
    {
      title: "AI safety and adversarial testing",
      text: "Model behavior, safeguards operations, adversarial QA and evaluation support—without claiming engineering depth not yet demonstrated.",
      href: "/cv-resume.html",
      label: "AI safety CV"
    },
    {
      title: "Research verification and data quality",
      text: "Scientific evidence, metadata, provenance, research operations and domain-expert AI quality.",
      href: "/cv-research.html",
      label: "Research & data CV"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}
