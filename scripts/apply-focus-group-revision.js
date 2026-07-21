#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

function replace(relativePath, from, to, label) {
  const filePath = path.join(ROOT, relativePath);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(from)) throw new Error(`${relativePath}: missing target for ${label}`);
  content = content.replace(from, to);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${relativePath}: ${label}`);
}

replace(
  'data/source.js',
`    {
      role: "Focus Group Conductor & Research Facilitator",
      org: "University of Padua — Department of Developmental Psychology and Socialisation",
      tag: "Research collaboration",
      period: "Nov 2022 — 2025",
      bullets: [
        "Contributed to a psychological focus-group study on sexuality in the autism spectrum led by Prof. Marta Panzeri.",
        "Developed a standardized facilitation guide, scripting and behavioral protocols to support consistent session execution.",
        "Managed recruitment, conducted bibliographic searches, verified scientific literature and facilitated recorded remote focus groups."
      ],
      resumeBullets: [
        "Developed standardized remote facilitation protocols, supported recruitment and conducted focus groups for a University of Padua autism research collaboration."
      ]
    },`,
`    {
      role: "Volunteer Focus-Group Co-Facilitator & Research Operations Contributor",
      org: "University-affiliated developmental psychology research collaboration — Italy",
      tag: "Volunteer research collaboration",
      period: "Nov 2022 — 2025",
      bullets: [
        "Co-facilitated recorded Zoom focus groups with autistic participants discussing sensitive sexuality and relationship topics, using clear expectations, respectful pacing and non-judgmental follow-up to support participant comfort.",
        "Co-developed a standardized discussion guide, scripted prompts and session procedures; worked in a two-person facilitation team using live handoffs and recovery when prompts were missed or a facilitator needed support.",
        "Supported participant recruitment, bibliographic research, technical session preparation and coordination with the supervising professor, researchers and a second autistic volunteer facilitator.",
        "Institutional and individual attribution is withheld from the public portfolio pending permission; no participant information is disclosed."
      ],
      resumeBullets: [
        "Co-facilitated recorded Zoom focus groups with autistic participants on sensitive sexuality and relationship topics, using structured prompts, respectful pacing and non-judgmental follow-up.",
        "Co-developed session guides and worked in a two-person moderation team with live handoffs, recovery when prompts were missed, participant recruitment and technical coordination."
      ]
    },`,
  'expanded privacy-safe focus group experience'
);

replace(
  'data/application-profiles.js',
`        title: "Research protocol experience",
        body: "Developed standardized facilitation guidance and recruitment workflows for a University of Padua autism research collaboration.",
        link: "https://orcid.org/0000-0003-2846-7115"`,
`        title: "Human-subject research operations",
        body: "Co-developed structured remote facilitation procedures and supported autistic participants discussing sensitive topics; institutional attribution is withheld pending permission.",
        link: "/cv-editorial.html"`,
  'AI profile research-facilitation evidence boundary'
);

replace(
  'data/application-profiles.js',
`    summary: "Research, editorial and community-operations specialist with paid experience supporting scientific content production, primary-source fact-checking, professional writing and web operations. Contributed evidence research to more than 55 videos and documentaries and four published articles for Entropy for Life; developed standardized facilitation and recruitment workflows for a University of Padua autism study; and founded an open research-participation directory covering more than 55 initiatives. Combines independent project ownership, evidence-synthesis training, technical troubleshooting and clear professional English writing.",`,
`    summary: "Research, editorial and community-operations specialist with paid experience supporting scientific content production, primary-source fact-checking, professional writing and web operations. Co-developed and co-facilitated a structured remote focus-group process for autistic participants discussing sensitive sexuality and relationship topics, including recruitment, session protocols, Zoom logistics and two-person moderation handoffs. Also contributed evidence research to more than 55 videos and documentaries and four published articles and founded an open research-participation directory covering more than 55 initiatives.",`,
  'editorial profile summary'
);

replace(
  'data/application-profiles.js',
`      { value: "C1", label: "English overall", detail: "Advanced technical reading and professional writing" }`,
`      { value: "2022–25", label: "Sensitive research facilitation", detail: "Remote focus groups with autistic participants" }`,
  'editorial profile focus-group strength'
);

replace(
  'data/application-profiles.js',
`      {
        role: "Research Facilitator & Focus-Group Conductor",
        organization: "University of Padua · Volunteer collaboration",
        period: "Nov 2022 — 2025",
        links: [
          { label: "ORCID record", url: "https://orcid.org/0000-0003-2846-7115" }
        ],
        bullets: [
          "Developed a standardized facilitation guide, scripting and behavioral protocols for remote focus groups involving autistic participants.",
          "Supported participant recruitment across autistic communities and conducted or co-conducted recorded sessions while maintaining psychological safety.",
          "Coordinated research preparation, bibliographic searches and technical session logistics for a geographically distributed collaboration."
        ]
      },`,
`      {
        role: "Volunteer Focus-Group Co-Facilitator & Research Operations Contributor",
        organization: "University-affiliated developmental psychology research collaboration · Italy",
        period: "Nov 2022 — 2025",
        links: [],
        bullets: [
          "Co-facilitated recorded Zoom focus groups with autistic participants discussing sensitive sexuality and relationship topics, using clear expectations, respectful pacing and non-judgmental follow-up.",
          "Co-developed a standardized discussion guide, scripted prompts and session procedures; worked in a two-person facilitation team using live handoffs and recovery when prompts were missed or a facilitator needed support.",
          "Supported participant recruitment, bibliographic research, technical session preparation and coordination with the supervising professor, researchers and a second autistic volunteer facilitator. Institutional attribution is withheld pending permission."
        ]
      },`,
  'editorial profile focus-group experience'
);

replace(
  'data/application-profiles.js',
`        title: "Community-facing research protocol",
        body: "Standardized facilitation, recruitment and remote-session procedures developed for a University of Padua autism research collaboration.",
        link: "https://orcid.org/0000-0003-2846-7115"`,
`        title: "Sensitive remote research facilitation",
        body: "Structured moderation, recruitment and Zoom-session procedures for autistic participants discussing sensitive topics; attribution remains private pending permission.",
        link: "/cv-editorial.html"`,
  'editorial profile evidence status'
);

replace(
  'data/application-profiles.js',
`      ["Community engagement", "Participant recruitment, psychologically safe facilitation, public science communication and support for distributed communities"],`,
`      ["Community engagement", "Participant recruitment, sensitive-topic moderation, neurodiversity-aware communication, two-person facilitation handoffs and support for distributed communities"],`,
  'editorial community capability'
);

replace(
  'data/portfolio-v3.js',
`      summary: "Evidence synthesis, editorial production, research coordination and community-facing work. This is the best lens for Campbell-style roles and mission-driven evidence organizations.",`,
`      summary: "Evidence synthesis, editorial production, research coordination and sensitive community-facing work, including remote facilitation with autistic participants. This is the best lens for Campbell-style roles and mission-driven evidence organizations.",`,
  'editorial lens summary'
);

replace(
  'data/portfolio-v3.js',
`        "Standardized focus-group protocol, recruitment and facilitation",`,
`        "Sensitive Zoom focus groups with autistic participants, structured protocols and two-person facilitation handoffs",`,
  'editorial lens focus-group evidence'
);

replace(
  'data/portfolio-v3.js',
`    {
      id: "research-directory",
      eyebrow: "Research data quality",`,
`    {
      id: "focus-group",
      eyebrow: "Sensitive research facilitation",
      title: "Co-facilitating remote discussions where participant comfort and team reliability mattered",
      summary: "Co-developed and co-facilitated recorded Zoom focus groups with autistic participants on sensitive sexuality and relationship topics, using structured prompts, respectful pacing, live handoffs and recovery when a facilitator missed steps or needed support. Institutional attribution is withheld pending permission.",
      methods: ["Sensitive-topic moderation", "Neurodiversity-aware communication", "Two-person handoffs", "Remote-session logistics"],
      metric: "2022–2025 collaboration · attribution pending permission",
      href: "/cv-editorial.html",
      linkLabel: "Open relevant CV"
    },
    {
      id: "research-directory",
      eyebrow: "Research data quality",`,
  'focus-group work sample'
);

replace(
  'data/portfolio-v3.js',
`      body: "Standardized protocols, recruitment and recorded focus-group facilitation for a University of Padua autism research collaboration."`,
`      body: "Co-developed and co-facilitated recorded Zoom discussions with autistic participants on sensitive sexuality and relationship topics, combining participant-sensitive moderation, technical session operations and reliable two-person handoffs. Institutional attribution is withheld pending permission."`,
  'focus-group timeline visibility'
);

replace(
  'src/pages/index.astro',
`        <p>These are not decorative project cards. Each record exposes a different part of the working method: adversarial testing, rapid evidence monitoring, provenance investigation and structured research verification.</p>`,
`        <p>These are not decorative project cards. Each record exposes a different part of the working method: adversarial testing, rapid evidence monitoring, sensitive remote facilitation, provenance investigation and structured research verification.</p>`,
  'work-sample introduction'
);

console.log('Focus-group positioning revision complete.');
