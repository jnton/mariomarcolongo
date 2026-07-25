/*
 * Final application-readiness corrections for the human-centered redesign.
 *
 * The redesign branch still contains a few legacy values in its historical
 * source files. This preload applies the dated 24 July 2026 evidence and the
 * complete Entropy for Life portfolio links before Astro, dossier generators,
 * and CV generators consume those records.
 */

const D = require("./source.js");
const H = require("./portfolio-human.js");
const PROFILES = require("./application-profiles.js");

const GRAY_SWAN_PROFILE =
  "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf";
const GRAY_SWAN_EVIDENCE = "/evidence/gray-swan-2026-07-24/";
const ENTROPY_VIDEOS =
  "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh";
const ENTROPY_ARTICLES =
  "https://entropyforlife.it/autore/mario-marcolongo/";
const ENTROPY_THUMBNAILS =
  "https://www.youtube.com/playlist?list=PLUXju4zC0Sks";
const GRAY_SWAN_SCREENSHOT =
  "/media/work/model-behavior-profile-fixed.svg";

function replaceAll(value, replacements) {
  if (typeof value !== "string") return value;
  let output = value;
  for (const [from, to] of replacements) output = output.split(from).join(to);
  return output;
}

function walkStrings(value, replacements) {
  if (typeof value === "string") return replaceAll(value, replacements);
  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index += 1) {
      value[index] = walkStrings(value[index], replacements);
    }
    return value;
  }
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) {
      value[key] = walkStrings(value[key], replacements);
    }
  }
  return value;
}

const metricReplacements = [
  ["105 leaderboard-counted model breaks", "106 platform-recorded total breaks"],
  ["105 leaderboard-counted breaks", "106 platform-recorded total breaks"],
  ["105 Leaderboard-Counted Model Breaks", "106 Platform-Recorded Total Breaks"],
  ["105 Leaderboard-Counted", "106 Platform-Recorded"],
  ["105 breaks across 26 waves", "106 platform-recorded total breaks; the displayed category and 26-wave totals sum to 105"],
  ["105 breaks", "106 platform-recorded total breaks"],
  ["The portfolio uses 105", "The profile-displayed total is reported as 106; the visible category and wave totals sum to 105"],
  ["independently reconcilable total of 105", "profile-displayed total of 106, while separately disclosing the visible 105 category/wave sum"],
];

walkStrings(D, metricReplacements);
walkStrings(H, metricReplacements);
walkStrings(PROFILES, metricReplacements);

if (D.identity) {
  D.identity.grayswanArchiveUrl = GRAY_SWAN_EVIDENCE;
  D.identity.evaluationAsOf = "24 July 2026";
}

if (D.redTeamActivity) {
  D.redTeamActivity.confirmedBreaks = 106;
  D.redTeamActivity.profileReportedBreaks = 106;
  D.redTeamActivity.reconciledCategoryAndWaveBreaks = 105;
}

if (Array.isArray(D.stats)) {
  const gray = D.stats.find((stat) =>
    String(stat?.label || "").toLowerCase().includes("model break"),
  );
  if (gray) {
    gray.value = "106";
    gray.label = "Platform-Recorded Proving Ground Breaks";
    gray.detail =
      "#77 · top 7% · public profile snapshot dated 24 July 2026; visible area and wave totals sum to 105 and are disclosed separately";
  }
  const entropy = D.stats.find((stat) =>
    String(stat?.label || "").toLowerCase().includes("paid scientific verification"),
  );
  if (entropy) {
    entropy.value = "59+ Documented Outputs";
    entropy.label = "Entropy for Life Scientific Production";
    entropy.detail =
      "55+ published YouTube video productions plus 4 co-authored articles; selected thumbnail work is documented separately and is not double-counted";
  }
}

if (Array.isArray(D.pillars)) {
  const ai = D.pillars.find((pillar) =>
    String(pillar?.category || "").includes("AI EVALUATION"),
  );
  if (ai) {
    ai.desc =
      "The dated Gray Swan public profile shows #77 on the Proving Ground leaderboard (top 7%) on 24 July 2026, with 106 platform-recorded total breaks. The four displayed area counters and the 26 wave totals sum to 105; both figures are preserved rather than forcing an unsupported explanation.";
    if (Array.isArray(ai.highlights) && ai.highlights[0]) {
      ai.highlights[0] = {
        label: "Dated Platform Record",
        detail: "#77 · top 7% · 106 profile-displayed total breaks on 24 July 2026",
      };
    }
  }
  const scientific = D.pillars.find((pillar) =>
    String(pillar?.category || "").includes("SCIENTIFIC VERIFICATION"),
  );
  if (scientific) {
    scientific.desc =
      "Completed 4,317 auditable Wikimedia contributions across English Wikipedia, Wikidata, Italian Wikipedia and Wikimedia Commons. For Entropy for Life, supported 59+ documented published outputs: 55+ YouTube video productions and 4 co-authored articles, with selected thumbnail work documented separately. Completed Cochrane Crowd and GALENOS evidence-screening training.";
    if (Array.isArray(scientific.highlights) && scientific.highlights[1]) {
      scientific.highlights[1] = {
        label: "Paid Scientific Production",
        detail: "59+ documented outputs: 55+ YouTube productions and 4 co-authored articles",
      };
    }
  }
}

if (Array.isArray(D.projects)) {
  const model = D.projects.find((project) => project?.id === "ai-red-teaming");
  if (model) {
    model.description =
      "Self-directed model-behavior evaluation conducted through the Gray Swan Proving Ground. The dated public profile shows #77 on the Proving Ground leaderboard, top 7%, with 106 platform-recorded total breaks and 242 total Arena submissions. The displayed Chat, Image, Agent and Indirect counters—and the 26 wave totals—sum to 105; the evidence page preserves this discrepancy without inferring Gray Swan's aggregation rules.";
    model.links = {
      caseStudy: "/security.html",
      evidence: GRAY_SWAN_EVIDENCE,
      profile: GRAY_SWAN_PROFILE,
    };
    model.highlights = [
      "Dated Platform Result: #77, top 7%, and 106 profile-displayed total breaks on 24 July 2026",
      "Cross-Surface Activity: Chat, image, agentic tool-use and indirect prompt-injection challenges",
      "Transparent Boundary: The visible category/wave sum of 105 is disclosed alongside the platform aggregate of 106",
    ];
  }

  const entropy = D.projects.find((project) => project?.id === "entropy-for-life");
  if (entropy) {
    entropy.title = "Entropy for Life — Scientific Research, Editorial & Web Operations";
    entropy.oneLiner =
      "Paid research, fact-checking, script and visual-production work across 59+ documented published outputs.";
    entropy.description =
      "Paid contractor supporting 59+ documented published outputs for Entropy for Life: 55+ YouTube video productions and 4 co-authored articles. Depending on the assignment, contributions included primary-literature research, scientific fact-checking, script development, data visualization, presentation slides and on-screen assets. Selected YouTube thumbnail work—created independently or collaboratively with video editor Alessandro Lanzoni—is documented in a separate playlist and is not counted as additional outputs. Also manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout/functionality changes and technical SEO. The planned comprehensive Entropy for Life work page is intentionally not linked until it is complete and approved by Giacomo Moro Mauretto.";
    entropy.role = "Scientific Research, Fact-Checking & Web Operations Contractor";
    entropy.tech = [
      "Primary-Literature Research",
      "Scientific Fact-Checking",
      "Script Development",
      "Data Visualization & Presentation Assets",
      "WordPress / OVHCloud / Technical SEO",
    ];
    entropy.links = {
      playlist: ENTROPY_VIDEOS,
      authorPage: ENTROPY_ARTICLES,
      thumbnails: ENTROPY_THUMBNAILS,
      website: "https://entropyforlife.it",
    };
    entropy.highlights = [
      "59+ Documented Published Outputs: 55+ YouTube video productions and 4 co-authored articles",
      "Assignment-Specific Scope: Research, fact-checking and script development on most productions; visualization or narrower verification on selected items",
      "Selected Thumbnail Work: Separate playlist, not double-counted in the 59+ output total",
      "Web Operations: OVHCloud, DNS/SSL, WordPress functionality and technical SEO",
    ];
  }
}

if (Array.isArray(D.experience)) {
  const model = D.experience.find((item) =>
    String(item?.org || "").includes("Gray Swan"),
  );
  if (model) {
    model.role = "Model-Behavior Evaluator & Gray Swan Proving Ground Participant";
    model.org = "Gray Swan AI Proving Ground · self-directed participation";
    model.tag = "Independent evaluation practice";
    model.period = "Jul 2026 — Present";
    model.links = {
      caseStudy: "/security.html",
      evidence: GRAY_SWAN_EVIDENCE,
      profile: GRAY_SWAN_PROFILE,
    };
    model.bullets = [
      "Conduct self-directed testing across chat, image, agentic tool-use and indirect prompt-injection challenges on the Gray Swan Proving Ground.",
      "Reached #77 (top 7%) with 106 platform-recorded total breaks in the public profile snapshot dated 24 July 2026; the same profile showed 242 total Arena submissions.",
      "Preserve the visible 105 category/wave sum as a disclosed discrepancy rather than presenting an inferred aggregation rule.",
      "Formal Gray Swan participation began in July 2026; earlier independent model experimentation is not represented as Gray Swan tenure.",
    ];
    model.resumeBullets = [
      "Reached #77 (top 7%) on the Gray Swan Proving Ground with 106 platform-recorded total breaks in the dated 24 July 2026 public-profile snapshot.",
      "Test across chat, image, agentic tool-use and indirect prompt-injection challenges; document evidence and limitations conservatively.",
    ];
  }

  const entropy = D.experience.find((item) =>
    String(item?.org || "").includes("Entropy for Life"),
  );
  if (entropy) {
    entropy.role = "Scientific Research, Fact-Checking & Web Operations Contractor";
    entropy.links = {
      playlist: ENTROPY_VIDEOS,
      authorPage: ENTROPY_ARTICLES,
      thumbnails: ENTROPY_THUMBNAILS,
      website: "https://entropyforlife.it",
    };
    entropy.bullets = [
      "Supported 59+ documented published outputs: 55+ YouTube video productions and 4 co-authored articles, through primary-literature research, scientific fact-checking and assignment-specific script development.",
      "Produced data visualizations, presentation slides and on-screen assets; selected thumbnail work created independently or with Alessandro Lanzoni is documented separately and not double-counted.",
      "Identify unsupported claims, conflicting evidence and source-quality problems and communicate corrections within a small recurring production team.",
      "Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout/functionality changes and technical SEO; formally acknowledged in the Mondadori book Italiani veri.",
    ];
    entropy.resumeBullets = [
      "Supported 59+ documented outputs for Entropy for Life: 55+ YouTube productions and 4 co-authored articles, with research, fact-checking, script and visual-production contributions assigned per item.",
      "Manage WordPress/OVHCloud operations and technical SEO; selected thumbnail work is documented in a separate public playlist.",
    ];
  }
}

if (H) {
  if (Array.isArray(H.proofMoments)) {
    const gray = H.proofMoments[0];
    if (gray) {
      gray.value = "106";
      gray.label = "platform-recorded Proving Ground breaks";
      gray.detail = "#77 · top 7% · 24 July 2026";
      gray.href = GRAY_SWAN_EVIDENCE;
    }
    const entropy = H.proofMoments[1];
    if (entropy) {
      entropy.value = "59+";
      entropy.label = "documented Entropy for Life outputs";
      entropy.detail = "55+ YouTube productions · 4 co-authored articles";
      entropy.href = ENTROPY_VIDEOS;
    }
  }

  if (Array.isArray(H.heroMedia)) {
    const gray = H.heroMedia.find((item) => item?.id === "model-record");
    if (gray) {
      gray.image = GRAY_SWAN_SCREENSHOT;
      gray.alt =
        "Gray Swan public profile crop showing Mario Marcolongo ranked number 77, top 7 percent, with 106 total breaks and 242 submissions";
      gray.href = GRAY_SWAN_EVIDENCE;
    }
    const entropy = H.heroMedia.find((item) => item?.id === "entropy");
    if (entropy) {
      entropy.title = "Published article visualization";
      entropy.alt =
        "Published data visualization from one of Mario Marcolongo's four co-authored Entropy for Life articles";
      entropy.href = ENTROPY_ARTICLES;
    }
  }

  if (Array.isArray(H.cases)) {
    const model = H.cases.find((item) => item?.id === "model-behavior");
    if (model) {
      model.lead =
        "I tested chat, image, agentic tool-use and indirect prompt-injection behavior and preserved a dated public profile snapshot of the result.";
      model.result =
        "#77 on the Proving Ground leaderboard, top 7%, with 106 platform-recorded total breaks and 242 total Arena submissions on 24 July 2026.";
      model.boundary =
        "The same interface's four area counters and 26 wave totals sum to 105. The evidence page preserves both figures and does not infer Gray Swan's internal aggregation rule.";
      model.href = GRAY_SWAN_EVIDENCE;
      model.image = GRAY_SWAN_SCREENSHOT;
      model.alt =
        "Gray Swan public profile crop showing rank 77, top 7 percent, 106 total breaks, 242 submissions and category counters";
      model.imageCaption =
        "Real platform profile · #77 · top 7% · 106 total breaks · 24 July 2026";
    }

    const entropy = H.cases.find((item) => item?.id === "scientific-verification");
    if (entropy) {
      entropy.title = "Researching and fact-checking 55+ YouTube productions.";
      entropy.lead =
        "In a small recurring production team, I research and verify the evidence behind YouTube videos and co-authored articles before publication.";
      entropy.action =
        "Most video assignments combine primary-literature research, scientific fact-checking and script development. Selected assignments focus on verification and/or data visualization; I also create presentation assets and selected thumbnails, with roles attributed per item.";
      entropy.result =
        "59+ documented published outputs: 55+ YouTube video productions and 4 co-authored articles. Selected thumbnail work is documented separately and is not double-counted.";
      entropy.boundary =
        "The YouTube playlist documents video contributions, the author page documents four articles, and the thumbnail playlist documents selected independent or collaborative design work. A future comprehensive Entropy for Life work page is not linked until it is complete and approved.";
      entropy.href = ENTROPY_VIDEOS;
      entropy.linkLabel = "Open 55+ YouTube productions";
      entropy.mediaHref = ENTROPY_ARTICLES;
      entropy.mediaLinkLabel = "Open the four co-authored articles";
      entropy.links = [
        { label: "55+ YouTube productions", href: ENTROPY_VIDEOS },
        { label: "4 co-authored articles", href: ENTROPY_ARTICLES },
        { label: "Selected thumbnail work", href: ENTROPY_THUMBNAILS },
      ];
      entropy.imageCaption =
        "Published article visualization · one part of a 59+ output contribution record";
    }
  }
}

function updateProfile(profile) {
  if (!profile || typeof profile !== "object") return;

  profile.summary = replaceAll(profile.summary, [
    [
      "105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 waves",
      "106 platform-recorded total breaks in the dated public-profile snapshot; 232 Proving Ground submissions across 26 waves are documented separately",
    ],
    [
      "more than 55 videos and documentaries and four published articles",
      "59+ documented outputs: 55+ YouTube video productions and 4 co-authored articles",
    ],
    [
      "more than 55 videos and documentaries and four articles",
      "59+ documented outputs: 55+ YouTube video productions and 4 co-authored articles",
    ],
  ]);

  if (Array.isArray(profile.strengths)) {
    for (const strength of profile.strengths) {
      const label = String(strength?.label || "").toLowerCase();
      if (label.includes("model break")) {
        strength.value = "106";
        strength.label = "Platform-recorded Proving Ground breaks";
        strength.detail = "#77 · top 7% · dated 24 July 2026 profile";
      }
      if (
        label.includes("videos and documentaries") ||
        label.includes("scientific productions")
      ) {
        strength.value = "59+";
        strength.label = "Documented Entropy for Life outputs";
        strength.detail = "55+ YouTube productions · 4 co-authored articles";
      }
    }
  }

  if (Array.isArray(profile.experience)) {
    const model = profile.experience.find((item) =>
      String(item?.organization || "").includes("Gray Swan"),
    );
    if (model) {
      model.role = "Model-Behavior Evaluator & Proving Ground Participant";
      model.organization = "Gray Swan AI Proving Ground · self-directed participation";
      model.period = "Jul 2026 — Present";
      model.links = [
        { label: "Dated evidence", url: GRAY_SWAN_EVIDENCE },
        { label: "Evaluation record", url: "/security.html" },
        { label: "Live profile", url: GRAY_SWAN_PROFILE },
      ];
      model.bullets = [
        "Test chat, image, agentic tool-use and indirect prompt-injection behavior through self-directed Gray Swan Proving Ground participation.",
        "Reached #77 (top 7%) with 106 platform-recorded total breaks in the public-profile snapshot dated 24 July 2026.",
        "Disclose that the displayed category and 26-wave totals sum to 105, rather than inferring the platform's internal aggregation rules.",
      ];
    }

    const entropy = profile.experience.find((item) =>
      String(item?.organization || "").includes("Entropy for Life"),
    );
    if (entropy) {
      entropy.role = "Scientific Research, Fact-Checking & Web Operations Contractor";
      entropy.links = [
        { label: "55+ YouTube productions", url: ENTROPY_VIDEOS },
        { label: "4 co-authored articles", url: ENTROPY_ARTICLES },
        { label: "Selected thumbnails", url: ENTROPY_THUMBNAILS },
      ];
      entropy.bullets = [
        "Supported 59+ documented published outputs: 55+ YouTube video productions and 4 co-authored articles, with primary-literature research, scientific fact-checking and assignment-specific script development.",
        "Created data visualizations, presentation/on-screen assets and selected thumbnails; roles are attributed per item and thumbnail work is not double-counted in the output total.",
        "Manage WordPress/OVHCloud operations, DNS/SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri.",
      ];
    }
  }
}

for (const profile of Object.values(PROFILES || {})) updateProfile(profile);

module.exports = { dossier: D, portfolio: H, applicationProfiles: PROFILES };
