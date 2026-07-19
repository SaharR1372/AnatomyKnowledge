import type { SourceSeed } from "./types";

// Source registry. These are the authoritative seed references named in the
// project brief (request.md, section 3). URLs are the official landing pages.
//
// IMPORTANT: `lastCheckedDate` records when a human last confirmed the URL is
// reachable and supports the cited material. During offline development it is
// set to the authoring date; a reviewer should re-confirm before publishing.
// See docs/citations-and-sources.md.

export const sources: SourceSeed[] = [
  {
    slug: "openstax-anp-2e",
    title: "Anatomy and Physiology 2e",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/details/books/anatomy-and-physiology-2e",
    publicationDate: "2022",
    lastCheckedDate: "2026-07-19",
    sourceType: "textbook",
    reliabilityTier: 2,
    license: "CC BY-NC-SA 4.0",
    notes:
      "Peer-reviewed open textbook. License is NON-commercial + ShareAlike — reused text/images are NOT cleared for commercial use. Record attribution per passage.",
  },
  {
    slug: "medlineplus-anatomy",
    title: "Anatomy (MedlinePlus)",
    organization: "U.S. National Library of Medicine (NIH)",
    url: "https://medlineplus.gov/anatomy.html",
    lastCheckedDate: "2026-07-19",
    sourceType: "gov_guideline",
    reliabilityTier: 1,
    license: "Public domain (U.S. government work); some linked images may be third-party.",
    notes: "Plain-language government health information. Verify individual image licenses separately.",
  },
  {
    slug: "medlineplus-bones-joints-muscles",
    title: "Bones, Joints and Muscles (MedlinePlus)",
    organization: "U.S. National Library of Medicine (NIH)",
    url: "https://medlineplus.gov/bonesjointsandmuscles.html",
    lastCheckedDate: "2026-07-19",
    sourceType: "gov_guideline",
    reliabilityTier: 1,
    license: "Public domain (U.S. government work); some linked images may be third-party.",
  },
  {
    slug: "niams",
    title: "National Institute of Arthritis and Musculoskeletal and Skin Diseases",
    organization: "NIH / NIAMS",
    url: "https://www.niams.nih.gov/",
    lastCheckedDate: "2026-07-19",
    sourceType: "gov_guideline",
    reliabilityTier: 1,
    license: "Public domain (U.S. government work) unless otherwise noted.",
    notes: "Musculoskeletal health and safety information.",
  },
  {
    slug: "pag-americans",
    title: "Physical Activity Guidelines for Americans (2nd edition)",
    organization: "U.S. Dept. of Health & Human Services (ODPHP)",
    url: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines",
    publicationDate: "2018",
    lastCheckedDate: "2026-07-19",
    sourceType: "gov_guideline",
    reliabilityTier: 1,
    license: "Public domain (U.S. government work).",
  },
  {
    slug: "cdc-physical-activity",
    title: "Physical Activity Basics",
    organization: "U.S. Centers for Disease Control and Prevention (CDC)",
    url: "https://www.cdc.gov/physical-activity-basics/",
    lastCheckedDate: "2026-07-19",
    sourceType: "gov_guideline",
    reliabilityTier: 1,
    license: "Public domain (U.S. government work).",
  },
  {
    slug: "acsm-official-statements",
    title: "ACSM Official Statements",
    organization: "American College of Sports Medicine",
    url: "https://acsm.org/education-resources/pronouncements-scientific-communications/official-statements/",
    lastCheckedDate: "2026-07-19",
    sourceType: "professional_org",
    reliabilityTier: 3,
    license: "© ACSM. Only publicly available statements are referenced; no paid textbook content reused.",
  },
  {
    slug: "ace-exam-content-outline",
    title: "ACE Certification Exam Content Outlines",
    organization: "American Council on Exercise",
    url: "https://www.acefitness.org/fitness-certifications/certification-exam-content/",
    lastCheckedDate: "2026-07-19",
    sourceType: "cert_outline",
    reliabilityTier: 4,
    license: "© ACE. Public exam content outline used only to organize study domains; no proprietary questions reused.",
  },
  {
    slug: "nasm-cpt-exam-info",
    title: "NASM Certified Personal Trainer Exam Information",
    organization: "National Academy of Sports Medicine",
    url: "https://www.nasm.org/certified-personal-trainer-exam-info",
    lastCheckedDate: "2026-07-19",
    sourceType: "cert_outline",
    reliabilityTier: 4,
    license: "© NASM. Public exam information used only to organize study domains; no proprietary questions reused.",
  },
];
