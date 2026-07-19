# Citations & Sources

Accuracy is a top requirement: **no educational claim is published without a traceable reference, and
citations are never fabricated.**

## Source priority

Sources are ranked by `reliabilityTier` (1 = most authoritative), mirroring the project brief:

1. Government health organizations & official public-health guidelines
2. Peer-reviewed / academically reviewed anatomy & physiology textbooks
3. Official statements from recognized professional organizations
4. Official certification exam outlines & candidate handbooks
5. University / medical-school / established hospital educational resources
6. Peer-reviewed scientific papers (for specialized claims)

Blogs, influencer/social-media content, commercial supplement sites, and search-engine summaries are
**never** the source of truth. A secondary site may help simplify a concept, but key facts are verified
against a primary/authoritative source.

## Source registry

Sources live in [`content/sources.ts`](../content/sources.ts) and become `Source` rows. Fields:
`title`, `organization`, `author`, `url`, `publicationDate`, `lastUpdatedDate`, `lastCheckedDate`,
`sourceType`, `reliabilityTier`, `license`, `notes`. The in-app **/sources** page lists them all.

### Seed sources (v0.1.0)

| Slug | Title | Org | Tier | License |
|---|---|---|---|---|
| `openstax-anp-2e` | Anatomy and Physiology 2e | OpenStax (Rice) | 2 | CC BY-NC-SA 4.0 |
| `medlineplus-anatomy` | Anatomy | NLM / NIH | 1 | US Gov (public domain)* |
| `medlineplus-bones-joints-muscles` | Bones, Joints and Muscles | NLM / NIH | 1 | US Gov (public domain)* |
| `niams` | NIAMS | NIH | 1 | US Gov (public domain)* |
| `pag-americans` | Physical Activity Guidelines for Americans | HHS/ODPHP | 1 | US Gov |
| `cdc-physical-activity` | Physical Activity Basics | CDC | 1 | US Gov |
| `acsm-official-statements` | ACSM Official Statements | ACSM | 3 | © ACSM (public statements only) |
| `ace-exam-content-outline` | ACE Exam Content Outlines | ACE | 4 | © ACE (public outline only) |
| `nasm-cpt-exam-info` | NASM CPT Exam Info | NASM | 4 | © NASM (public info only) |

\* Some individual images on government sites are third-party licensed — verify each image separately.

## How a citation attaches to a claim

`Citation` is polymorphic: it references a `Source` and points at content via `(entityType, entityId)`.
In seed content, add a `citations[]` entry with the exact claim and locator:

```ts
citations: [
  {
    sourceSlug: "openstax-anp-2e",
    claim: "The middle fibers of the deltoid abduct the arm.",
    locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
  },
]
```

Pages fetch and display these with `getCitations()` + the `Citations` component, showing the claim,
linked source, tier, license, and last-checked date.

## Rules (enforced by convention + the validator)

- Do **not** invent references, authors, paper titles, or URLs.
- `lastCheckedDate` records when a human last confirmed the URL supports the material. During offline
  development it is set to the authoring date and must be re-confirmed before publishing.
- When reliable sources disagree, present the disagreement and cite each side — do not silently pick
  one.
- If a fact can't be verified, omit it or mark it with `reviewWarning` / a lower `status`.
- The content validator fails the build if a citation points at a missing source; it warns if a
  `source_checked`/`expert_reviewed` item has no citation.

## Certification content

Practice questions are **original** and grounded in this app's cited content. Certification *domains*
are organized from **public** exam outlines (ACE, NASM) and each certification records the
`outlineUrl` and `outlineCheckedDate`. No confidential/proprietary exam questions are copied or
reconstructed.

## Maintenance

Review `lastCheckedDate` values periodically; when a source moves or changes, update the registry and
re-check affected citations. See [`../docs/troubleshooting.md`](troubleshooting.md) and the roadmap's
"Requires Research / Expert Review" sections.
