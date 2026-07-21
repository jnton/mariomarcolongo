const PORTFOLIO_HUMAN = {
  eyebrow: "Scientific verification · AI evaluation · operational systems",
  headline: "I work on difficult problems where evidence, systems and human judgment meet.",
  introduction: "I investigate claims, test AI behavior, run research workflows and turn messy information into tools people can actually use. My work is public, inspectable and suited to teams that reward autonomy, contrarian thinking and ownership of outcomes.",

  proofMetrics: [
    {
      value: "250K+",
      label: "YouTube audience supported",
      detail: "Paid scientific research and fact-checking for Entropy for Life; the wider project also reports 158K Instagram and 54K TikTok followers.",
      source: "https://entropyforlife.it/chi-sono/"
    },
    {
      value: "75",
      label: "Platform-confirmed model breaks",
      detail: "Across 156 Gray Swan submissions and 26 listed testing waves as of July 2026.",
      source: "/security.html"
    },
    {
      value: "55+",
      label: "Research initiatives indexed",
      detail: "Clinical studies, biobanks, registries and donation programs organized in a public research-participation directory.",
      source: "https://yourselftoscience.org/"
    },
    {
      value: "4,317",
      label: "Auditable public contributions",
      detail: "Source, metadata and visualization work across Wikipedia, Wikidata and Wikimedia Commons.",
      source: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
    }
  ],

  heroProjects: [
    {
      id: "mdpi",
      label: "Browser extension",
      title: "MDPI Filter",
      image: "https://lh3.googleusercontent.com/1KKa3LqvJ6ayP9Kh6_jmAWXzL3naOfPnnKtWb8vjd25XMn1ELMNFDxGjgtvShNmDhWG4x_uuynunm9lVD7wQ3hAI=s1280-w1280-h800",
      imageAlt: "MDPI Filter browser extension highlighting publisher results in a literature-search interface",
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp"
    },
    {
      id: "research-directory",
      label: "Open science product",
      title: "Yourself to Science",
      image: "/media/work/yourself-to-science.png",
      imageAlt: "Yourself to Science public research-participation catalogue",
      href: "https://yourselftoscience.org/"
    },
    {
      id: "telegram",
      label: "Serverless automation",
      title: "Wikipedia Link Converter",
      image: "https://cdn4.telesco.pe/file/pZUg4_EKmf_XKFJ1mesezgQCQNLUEoEhIf2PkVmxn5E97MKs43H7Rx6S6PEwzST3GM9HzoiCT4H7ec5i6S6xuluOYwyLWfj4Z0OqNl2vgkqCGMulAXGcUqnWRiMVglqDNCC4fkKuT0m8YizUQMbkISnpnt-8cV509X3_CDf76FETk3ApwGce1QWt54xjuYYALbOrOh_FGuk3ll7i5HoMKyGiFVvqSWXYAdCah1O8B9EAFMwIDA4taSh5m466VLqI55mg8SXvTz0gICVeV1N9e5eR0B-t4ZONBAE-kbM-hvhG5L4VCuvlmx0hLudnq-rttkia6aTbKohf3lrCwc6r_g.jpg",
      imageAlt: "Public Telegram bot image for the English Wikipedia Link Converter",
      href: "https://t.me/ToEnWikipediaBot"
    },
    {
      id: "tableau",
      label: "Interactive data work",
      title: "Tableau Public",
      image: "https://public.tableau.com/views/TavolediMortalitSingoleEtItalia-ISTAT/Sheet1.png?:showVizHome=no",
      imageAlt: "Tableau Public visualization of Italian mortality tables by individual age",
      href: "https://public.tableau.com/app/profile/mario.marcolongo/viz/TavolediMortalitSingoleEtItalia-ISTAT/Sheet1"
    }
  ],

  stories: [
    {
      id: "entropy",
      number: "01",
      label: "Paid scientific verification · public communication at scale",
      title: "Helping a large science-communication operation stay evidence-bound",
      summary: "For Entropy for Life, I research primary literature, identify unsupported or conflicting claims and translate corrections into a production workflow used for public videos, documentaries and articles.",
      role: "Scientific fact-checker, writer and website manager",
      process: [
        "Investigate biomedical and evolutionary claims in primary literature",
        "Surface uncertainty, conflicts and weak sourcing before publication",
        "Explain corrections to a non-specialist production team",
        "Operate the WordPress, hosting, DNS, SSL and technical-SEO layer"
      ],
      result: "Paid support for 55+ videos and documentaries and four articles, serving a project reporting 250K+ YouTube subscribers, 158K Instagram followers and 54K TikTok followers.",
      visual: "audience",
      href: "https://www.youtube.com/@entropyforlife",
      linkLabel: "Open the YouTube channel"
    },
    {
      id: "model-behavior",
      number: "02",
      label: "AI behavior · adversarial evaluation",
      title: "Looking for failure modes before they become assumptions",
      summary: "I conduct exploratory testing across chat, multimodal inputs, agentic tool use and indirect prompt injection, while keeping platform status separate from independent security verification.",
      role: "Independent model-behavior evaluator",
      process: [
        "Design ambiguous and adversarial interaction paths",
        "Test across repeated waves and multiple product surfaces",
        "Classify outcomes and preserve reproduction notes",
        "Report limitations alongside aggregate results"
      ],
      result: "75 platform-confirmed model breaks across 156 submissions and 26 listed waves as of July 2026.",
      image: "/media/work/model-behavior-record.svg",
      imageAlt: "Editorial visualization of the public aggregate model-behavior activity record",
      href: "/security.html",
      linkLabel: "Open the evaluation record"
    },
    {
      id: "yourself-to-science",
      number: "03",
      label: "Open science · product and research operations",
      title: "Turning scattered participation opportunities into a usable public system",
      summary: "Yourself to Science brings clinical studies, biobanks, registries and data-donation programs into one public, reusable catalogue.",
      role: "Founder and research-workflow owner",
      process: [
        "Define inclusion, provenance, geography and participation fields",
        "Verify records across organizations and countries",
        "Publish open datasets and machine-readable interfaces",
        "Test, deploy and maintain the public service"
      ],
      result: "More than 55 research initiatives indexed, with FAIRsharing and Zenodo records.",
      image: "/media/work/yourself-to-science.png",
      imageAlt: "Screenshot of the Yourself to Science public research-participation catalogue",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore the catalogue"
    },
    {
      id: "mdpi-filter",
      number: "04",
      label: "Research tooling · browser product operations",
      title: "Making publisher signals visible inside real literature workflows",
      summary: "MDPI Filter highlights or hides MDPI publications across academic search tools and identifies linked citations inside publisher pages.",
      role: "Product owner and AI-assisted technical operator",
      process: [
        "Specify search, citation and popup behavior",
        "Test Google Scholar, PubMed, Europe PMC and article pages",
        "Validate optional NCBI metadata lookups and local processing",
        "Maintain Chrome and Edge store releases"
      ],
      result: "A public, open-source Manifest V3 extension available through the Chrome and Edge stores.",
      image: "https://lh3.googleusercontent.com/PFwTjvBGc7yEyomiAhZYB60HVcqcIRJaWjRndm8CukDwCOikYyErU9tBqOzMUhF-HTXv4wGyKNbsjvIjNyU0NpSO=s1280-w1280-h800",
      imageAlt: "MDPI Filter extension popup listing detected references and page controls",
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
      linkLabel: "Open the Chrome Web Store listing"
    }
  ],

  products: [
    {
      id: "telegram-bot",
      label: "AWS Lambda · Telegram · GitHub Actions",
      title: "English Wikipedia Link Converter",
      body: "A serverless Telegram bot that converts non-English Wikipedia links into their English equivalents in private chats, groups and inline mode.",
      image: "https://cdn4.telesco.pe/file/pZUg4_EKmf_XKFJ1mesezgQCQNLUEoEhIf2PkVmxn5E97MKs43H7Rx6S6PEwzST3GM9HzoiCT4H7ec5i6S6xuluOYwyLWfj4Z0OqNl2vgkqCGMulAXGcUqnWRiMVglqDNCC4fkKuT0m8YizUQMbkISnpnt-8cV509X3_CDf76FETk3ApwGce1QWt54xjuYYALbOrOh_FGuk3ll7i5HoMKyGiFVvqSWXYAdCah1O8B9EAFMwIDA4taSh5m466VLqI55mg8SXvTz0gICVeV1N9e5eR0B-t4ZONBAE-kbM-hvhG5L4VCuvlmx0hLudnq-rttkia6aTbKohf3lrCwc6r_g.jpg",
      imageAlt: "Telegram image for the English Wikipedia Link Converter bot",
      href: "https://t.me/ToEnWikipediaBot",
      linkLabel: "Launch the bot"
    },
    {
      id: "emergent-humanity",
      label: "Interactive narrative · network visualization",
      title: "Emergent Humanity",
      body: "A sixteen-chapter interactive narrative and browser simulation exploring signal, noise, echo chambers and collective memory.",
      image: "/media/work/emergent-humanity.png",
      imageAlt: "Emergent Humanity interactive network narrative in a web browser",
      href: "https://jnton.github.io/emergent-humanity/",
      linkLabel: "Open the interactive project"
    }
  ],

  visualizationPlatforms: [
    {
      id: "tableau",
      label: "Tableau Public",
      title: "Interactive statistical analysis",
      body: "Public workbooks covering mortality, health, demography and policy data, including Italian age-specific mortality tables.",
      image: "https://public.tableau.com/views/TavolediMortalitSingoleEtItalia-ISTAT/Sheet1.png?:showVizHome=no",
      imageAlt: "Tableau visualization of mortality tables for individual ages in Italy",
      href: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes",
      linkLabel: "Open the Tableau portfolio"
    },
    {
      id: "flourish",
      label: "Flourish",
      title: "Interactive visual storytelling",
      body: "A Flourish-built global cancer-incidence map, published openly and reused through Wikimedia and Wikipedia.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Oesophageal_Cancer%2C_Age-Standardized_Rate_%28World%29_per_100.000_of_Incidence_Cases%2C_Both_sexes%2C_Worldwide_in_2022.svg",
      imageAlt: "Flourish-built world map of age-standardized oesophageal cancer incidence",
      href: "https://public.flourish.studio/visualisation/17745490/",
      linkLabel: "Open the Flourish visualization"
    }
  ],

  operatingStyle: [
    {
      title: "Contrarian, not careless",
      body: "I challenge assumptions and consensus, but I keep the evidence trail visible and distinguish a strong hypothesis from a verified conclusion."
    },
    {
      title: "High ownership",
      body: "When I see a useful system missing, I define the workflow, coordinate implementation, test it, deploy it and keep it operating."
    },
    {
      title: "Comfortable with unusual problems",
      body: "My work has included adversarial AI behavior, personal genomic data, taboo research topics and messy provenance questions."
    },
    {
      title: "Direct and systems-oriented",
      body: "I communicate plainly, decompose ambiguous problems and prefer outcomes that can be inspected over polished claims that cannot."
    }
  ],

  roleFamilies: [
    {
      title: "AI safety, safeguards and model behavior",
      text: "Evaluation operations, adversarial QA, model quality and trust-and-safety work where persistent testing and evidence discipline matter.",
      href: "/cv-resume.html",
      label: "AI safety CV"
    },
    {
      title: "Deployment, research and technical operations",
      text: "High-ownership roles translating ambiguous needs into workflows, tests, public tools and operational outcomes.",
      href: "/cv-research.html",
      label: "Research & operations CV"
    },
    {
      title: "Scientific and biomedical AI quality",
      text: "Evidence verification, metadata, provenance and domain-expert quality work for research or AI systems.",
      href: "/cv-research.html",
      label: "Research & data CV"
    },
    {
      title: "Knowledge integrity and investigations",
      text: "Public-record research, source provenance, OSINT support, content integrity and abuse-analysis work.",
      href: "/cv-integrity.html",
      label: "Trust & integrity CV"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}
