#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

function read(relative) {
  return fs.readFileSync(path.join(ROOT, relative), 'utf8');
}

function write(relative, content) {
  fs.writeFileSync(path.join(ROOT, relative), content);
}

function replaceMany(text, replacements) {
  for (const [oldValue, newValue] of replacements) {
    text = text.split(oldValue).join(newValue);
  }
  return text;
}

const sharedReplacements = [
  ['grayswanArchiveUrl: "https://archive.is/inkFs"', 'grayswanArchiveUrl: "/evidence/gray-swan-2026-07-24/"'],
  ['evaluationAsOf: "July 2026"', 'evaluationAsOf: "24 July 2026"'],
  ['The Gray Swan Proving Ground public profile reports a top-8% rank band among listed participants as of July 2026, with 75 platform-confirmed model breaks across 156 submissions.', 'The dated Gray Swan Proving Ground record shows #77 on the leaderboard (top 7%) on 24 July 2026, with 105 leaderboard-counted breaks across 232 Proving Ground submissions.'],
  ['{ label: "Platform-Confirmed Activity", detail: "75 breaks across 26 listed Proving Ground waves as of July 2026" }', '{ label: "Leaderboard-Counted Activity", detail: "#77 · top 7% · 105 breaks across 26 waves on 24 July 2026" }'],
  ['{ value: "75", label: "Platform-Confirmed Model Breaks", detail: "Gray Swan Proving Ground snapshot across 26 listed waves as of July 2026" }', '{ value: "105", label: "Leaderboard-Counted Model Breaks", detail: "#77 · top 7% · 26 Proving Ground waves · 24 July 2026" }'],
  ['{ value: "156", label: "Model-Evaluation Submissions", detail: "Repeated activity across chat, image, agentic tool-use and indirect prompt-injection challenges" }', '{ value: "232", label: "Proving Ground Submissions", detail: "242 total Arena submissions shown separately on the dated profile" }'],
  ['The public profile reports 156 platform submissions and 75 platform-confirmed model breaks across 26 listed waves.', 'The dated record shows #77 on the Proving Ground leaderboard, top 7%, with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 listed waves.'],
  ['"75 Platform-Confirmed Model Breaks: Aggregate platform total across 26 listed waves as of July 2026",\n        "156 Platform Submissions: Repeated activity across multiple testing surfaces"', '"105 Leaderboard-Counted Model Breaks: #77 and top 7% on the dated Proving Ground snapshot",\n        "232 Proving Ground Submissions: 242 total Arena submissions are shown separately"'],
  ['Recorded 75 platform-confirmed model breaks across 156 submissions and 26 listed waves; top-8% rank band among listed participants as of July 2026.', 'Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 listed waves on 24 July 2026.'],
  ['Identify unsupported claims, conflicting evidence and source-quality problems and communicate corrections to a non-specialist production team.', 'Identify unsupported claims, conflicting evidence and source-quality problems and communicate corrections within a small recurring team consisting primarily of Giacomo Moro Mauretto, the video editor and me.'],
  ['"Co-facilitated recorded Zoom focus groups with autistic participants discussing sensitive sexuality and relationship topics, using clear expectations, respectful pacing and non-judgmental follow-up to support participant comfort.",', '"Served as lead or co-facilitator across approximately 4–5 recorded Zoom focus-group sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics.",'],
  ['"Co-developed a standardized discussion guide, scripted prompts and session procedures; worked in a two-person facilitation team using live handoffs and recovery when prompts were missed or a facilitator needed support.",', '"Co-developed the protocol, including pseudonymous naming, explicit recorded consent, optional captions and written-chat participation, timed turn-taking, scripted prompts, recording boundaries and two-person facilitation handoffs.",'],
  ['"Supported participant recruitment, bibliographic research, technical session preparation and coordination with Marta Panzeri, the research team and a second autistic volunteer facilitator.",', '"Supported participant recruitment, bibliographic research, technical preparation and protocol feedback from an autistic perspective; coordinated with Marta Panzeri, researchers and a second autistic volunteer facilitator.",'],
  ['"Co-facilitated recorded Zoom focus groups with autistic participants on sensitive sexuality and relationship topics, using structured prompts, respectful pacing and non-judgmental follow-up.",', '"Led or co-facilitated approximately 4–5 recorded remote sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics.",'],
  ['"Co-developed session guides and worked in a two-person moderation team with live handoffs, recovery when prompts were missed, participant recruitment and technical coordination."', '"Co-developed accessible consent and participation procedures, scripted prompts, timed turns, recording boundaries and two-person facilitation handoffs; supported recruitment and bibliographic research."']
];

const currentActivity = `redTeamActivity: {
    platform: "Gray Swan AI Proving Ground",
    asOf: "24 July 2026",
    rankBand: "#77 · Top 7%",
    leaderboardRank: 77,
    submissions: 232,
    totalArenaSubmissions: 242,
    previousChats: 953,
    confirmedBreaks: 105,
    profileReportedBreaks: 106,
    publicLabels: ["damage-property", "toxic-plant", "package-theft-image"],
    waves: [
      { wave: 1, breaks: 14, available: 67 },
      { wave: 2, breaks: 10, available: 72 },
      { wave: 3, breaks: 10, available: 72 },
      { wave: 4, breaks: 2, available: 46 },
      { wave: 5, breaks: 6, available: 72 },
      { wave: 6, breaks: 10, available: 72 },
      { wave: 7, breaks: 2, available: 64 },
      { wave: 8, breaks: 0, available: 67 },
      { wave: 9, breaks: 0, available: 67 },
      { wave: 10, breaks: 3, available: 67 },
      { wave: 11, breaks: 2, available: 67 },
      { wave: 12, breaks: 3, available: 67 },
      { wave: 13, breaks: 0, available: 67 },
      { wave: 14, breaks: 0, available: 67 },
      { wave: 15, breaks: 8, available: 67 },
      { wave: 16, breaks: 3, available: 67 },
      { wave: 17, breaks: 14, available: 75 },
      { wave: 18, breaks: 0, available: 75 },
      { wave: 19, breaks: 0, available: 56 },
      { wave: 20, breaks: 0, available: 56 },
      { wave: 21, breaks: 0, available: 56 },
      { wave: 22, breaks: 6, available: 56 },
      { wave: 23, breaks: 3, available: 57 },
      { wave: 24, breaks: 2, available: 56 },
      { wave: 25, breaks: 3, available: 55 },
      { wave: 26, breaks: 4, available: 56 }
    ]
  }`;

for (const relative of ['data/source.js', 'public/data/source.js']) {
  let text = replaceMany(read(relative), sharedReplacements);
  text = text.replace(/redTeamActivity: \{[\s\S]*?\n  \}(?=,\n\n  experience:)/, currentActivity);
  write(relative, text);
}

const applicationReplacements = [
  ['Gray Swan Proving Ground participant with 75 platform-confirmed model breaks across 156 submissions and a top-8% rank band among listed participants as of July 2026.', 'Gray Swan Proving Ground participant ranked #77 (top 7%) on 24 July 2026, with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 waves.'],
  ['{ value: "75", label: "Platform-confirmed model breaks", detail: "Across 26 listed Gray Swan testing waves" }', '{ value: "105", label: "Leaderboard-counted model breaks", detail: "#77 · top 7% · 26 Proving Ground waves" }'],
  ['{ value: "156", label: "Platform submissions", detail: "Chat, multimodal, tool-use and indirect injection" }', '{ value: "232", label: "Proving Ground submissions", detail: "242 total Arena submissions shown separately" }'],
  ['Recorded 75 platform-confirmed model breaks across 156 submissions and 26 listed waves; ranked in the top 8% among listed participants as of July 2026.', 'Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 submissions and 26 listed waves on 24 July 2026.'],
  ['{ value: "75", label: "Platform-confirmed model breaks", detail: "Adversarial testing across multiple AI modalities" }', '{ value: "105", label: "Leaderboard-counted model breaks", detail: "#77 · top 7% · four evaluation surfaces" }'],
  ['Recorded 75 platform-confirmed model breaks across 156 submissions while documenting the limitations of the public record.', 'Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 Proving Ground submissions, while documenting the limitations and the profile/leaderboard discrepancy.'],
  ['Co-developed and co-facilitated a structured remote focus-group process for autistic participants discussing sensitive sexuality and relationship topics, supervised by Marta Panzeri at the University of Padua Department of Developmental Psychology and Socialisation (DPSS), including recruitment, session protocols, Zoom logistics and two-person moderation handoffs.', 'Co-developed and facilitated approximately 4–5 structured remote focus-group sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics under Marta Panzeri at the University of Padua DPSS.'],
  ['Co-facilitated recorded Zoom focus groups with autistic participants discussing sensitive sexuality and relationship topics, using clear expectations, respectful pacing and non-judgmental follow-up.', 'Served as lead or co-facilitator across approximately 4–5 recorded Zoom focus-group sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics.'],
  ['Co-developed a standardized discussion guide, scripted prompts and session procedures; worked in a two-person facilitation team using live handoffs and recovery when prompts were missed or a facilitator needed support.', 'Co-developed the protocol, including pseudonymous naming, explicit recorded consent, optional captions and written-chat participation, timed turn-taking, scripted prompts, recording boundaries and two-person facilitation handoffs.'],
  ['Supported participant recruitment, bibliographic research, technical session preparation and coordination with Marta Panzeri, researchers and a second autistic volunteer facilitator. Public attribution is included with permission; participant information remains confidential.', 'Supported participant recruitment, bibliographic research, technical preparation and protocol feedback from an autistic perspective; coordinated with Marta Panzeri, researchers and a second autistic volunteer facilitator. Participant information remains confidential.'],
  ['Identify unsupported claims, conflicting evidence and source-quality problems, then communicate corrections clearly to a non-specialist production team.', 'Identify unsupported claims, conflicting evidence and source-quality problems, then communicate corrections in a small recurring production team consisting primarily of Giacomo Moro Mauretto, the video editor and me.'],
  ['Support an ongoing science-communication production workflow by researching primary literature, checking claims and communicating corrections for more than 55 videos and documentaries and four articles.', 'Support a small recurring science-communication team by researching primary literature, checking claims and communicating corrections for more than 55 videos and documentaries and four articles.']
];
write('data/application-profiles.js', replaceMany(read('data/application-profiles.js'), applicationReplacements));

const securityReplacements = [
  ['const asOf = D.redTeamActivity.asOf || "July 2026";', 'const asOf = D.redTeamActivity.asOf || "24 July 2026";'],
  ['const archiveUrl = D.identity.grayswanArchiveUrl || "https://archive.is/inkFs";', 'const archiveUrl = D.identity.grayswanArchiveUrl || "/evidence/gray-swan-2026-07-24/";'],
  ['dateModified: "2026-07-21"', 'dateModified: "2026-07-24"'],
  ['<span>Platform-confirmed model breaks</span>', '<span>Leaderboard-counted breaks</span>'],
  ['<small>Across 26 listed waves · {asOf}</small>', '<small>#77 on the Proving Ground leaderboard · {asOf}</small>'],
  ['<span>Platform submissions</span>', '<span>Proving Ground submissions</span>'],
  ['<span>Rank band among listed participants</span>', '<span>Proving Ground rank</span>'],
  ['The live Gray Swan profile is the primary destination. A user-created archive.is snapshot is retained as a verification fallback for recruiters, automated readers and archival crawlers when the platform page cannot be accessed; Internet Archive could not save it.', 'The live Gray Swan profile is the primary source. A dated evidence page preserves the real platform screenshot and explains why the portfolio uses the independently reconcilable total of 105 rather than the profile aggregate of 106.'],
  ['<div class="evaluation-step">VERIFICATION FALLBACK</div>\n          <h3>Archived Gray Swan profile snapshot</h3>\n          <p>Preserved copy of the public participant page used to verify aggregate counts, rank band and visible activity when the live platform is unavailable or blocks automated access.</p>\n          <p><a class="p5-link" href={archiveUrl} target="_blank" rel="noopener noreferrer">Open archive.is snapshot ↗</a></p>', '<div class="evaluation-step">DATED PROFILE EVIDENCE</div>\n          <h3>24 July 2026 platform snapshot</h3>\n          <p>Real platform screenshot preserving #77, top 7%, 232 Proving Ground submissions, 242 total Arena submissions and the visible 105/106 discrepancy.</p>\n          <p><a class="p5-link" href={archiveUrl}>Open the dated evidence page →</a></p>'],
  ['<th scope="col">Platform-confirmed breaks</th>', '<th scope="col">Leaderboard-counted breaks</th>'],
  ['<li>“Platform-confirmed” describes Gray Swan’s status, not independent third-party reproduction.</li>', '<li>The portfolio uses 105 because the leaderboard, four category totals and 26 wave totals agree; the dated profile aggregate displayed 106.</li>'],
  ['<li>The next evidence milestone is a public, reproducible evaluation dataset and automated test harness built with independently understood code.</li>', '<li>The next evidence milestone is a public evaluation dataset with explicit rubrics, reproducible test cases and calibration with another evaluator.</li>']
];
write('src/pages/security.astro', replaceMany(read('src/pages/security.astro'), securityReplacements));

let verify = read('scripts/verify-dist.js');
verify = verify.replace(
  "'Platform-confirmed model breaks', 'indirect-function-call',\n  'weak-password-change', 'complete 26-wave activity table', 'archive.is/inkFs',\n  'Open live Gray Swan profile', 'verification fallback'",
  "'Leaderboard-counted breaks', 'complete 26-wave activity table',\n  '/evidence/gray-swan-2026-07-24/', 'Open live Gray Swan profile', '105/106'"
);
write('scripts/verify-dist.js', verify);

const sitemapPath = 'public/sitemap.xml';
let sitemap = read(sitemapPath);
if (!sitemap.includes('gray-swan-2026-07-24')) {
  sitemap = sitemap.replace('</urlset>', '  <url><loc>https://mariomarcolongo.com/evidence/gray-swan-2026-07-24/</loc></url>\n</urlset>');
  write(sitemapPath, sitemap);
}

console.log('Current evidence migration applied idempotently.');
