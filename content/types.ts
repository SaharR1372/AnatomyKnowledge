// Typed shapes for all seed content. Authoring content as typed TypeScript keeps
// it human-readable AND machine-validated: the compiler and scripts/validate-content.ts
// catch broken references (e.g. a citation pointing at a missing source) before
// anything reaches the database. See docs/content-system.md.

export interface SourceSeed {
  slug: string;
  title: string;
  organization?: string;
  author?: string;
  url: string;
  publicationDate?: string;
  lastUpdatedDate?: string;
  lastCheckedDate: string; // ISO date the URL was last confirmed reachable/relevant
  sourceType:
    | "gov_guideline"
    | "textbook"
    | "professional_org"
    | "cert_outline"
    | "university"
    | "peer_reviewed";
  reliabilityTier: number; // 1 (best) .. 6, mirrors the spec's source priority
  license: string;
  notes?: string;
}

// A citation attaches a specific claim to a source. `sourceSlug` must exist in
// the source registry. `entityRef` is filled in by the seeder from context.
export interface CitationSeed {
  sourceSlug: string;
  claim: string;
  locator?: string; // chapter / section / heading
  note?: string;
}

export interface VisualAssetSeed {
  slug: string;
  title: string;
  kind?: "svg" | "image" | "sequence";
  filePath: string; // under /public
  creator: string;
  sourceUrl?: string;
  license: string;
  attributionText: string;
  modificationAllowed?: boolean;
  commercialUseAllowed?: boolean;
  licenseCheckedDate: string;
  altText: string;
  description: string;
  isOriginal?: boolean;
}

export interface VocabularySeed {
  slug: string;
  term: string;
  simpleDefinition: string;
  technicalDefinition?: string;
  pronunciation?: string;
  partOfSpeech?: string;
  exampleSentence?: string;
  relatedTerms?: string;
  confusedTerms?: string;
}

export interface BoneSeed {
  slug: string;
  name: string;
  latinName?: string;
  description: string;
  landmarks?: string;
}

export interface JointSeed {
  slug: string;
  name: string;
  jointType: string;
  description: string;
  articulatingBones?: string;
  movementsAllowed?: string;
}

export interface MuscleSeed {
  slug: string;
  commonName: string;
  scientificName: string;
  pronunciation?: string;
  locationSimple: string;
  origin?: string;
  insertion?: string;
  actions: string;
  jointsCrossed?: string;
  movementPlane?: string;
  innervation?: string;
  functionDaily?: string;
  functionExercise?: string;
  beginnerExplanation: string;
  advancedExplanation?: string;
  commonlyConfused?: string;
  misconceptions?: string;
  safetyInfo?: string;
  status?: string;
  reviewWarning?: string;
  assetSlugs?: string[];
  citations?: CitationSeed[];
}

export interface MovementSeed {
  slug: string;
  name: string;
  description: string;
  plane?: string;
  axis?: string;
  jointAction?: string;
  oppositeSlug?: string;
}

export interface BodyRegionSeed {
  slug: string;
  name: string;
  description: string;
  relationships?: string;
  safetyNotes?: string;
  order?: number;
  bones: BoneSeed[];
  joints: JointSeed[];
  muscles: MuscleSeed[];
  citations?: CitationSeed[];
}

export interface ExerciseSeed {
  slug: string;
  name: string;
  altNames?: string;
  simpleExplanation: string;
  purpose: string;
  startingPosition: string;
  instructions: string[];
  breathing?: string;
  cues?: string;
  commonMistakes?: string;
  safety?: string;
  regression?: string;
  progression?: string;
  alternatives?: string;
  whyItWorks?: string;
  benefitsWho?: string;
  cautionWho?: string;
  equipment: string[];
  difficulty: string;
  level: string;
  movementPattern?: string;
  setting?: string;
  unilateral?: boolean;
  chain?: string;
  movementPlane?: string;
  status?: string;
  reviewWarning?: string;
  primaryMuscles: string[]; // muscle slugs
  secondaryMuscles?: string[];
  stabilizerMuscles?: string[];
  joints?: { jointSlug: string; jointAction: string }[];
  movements?: string[]; // movement slugs
  assetSlugs?: string[];
  citations?: CitationSeed[];
}

export interface AnswerOptionSeed {
  text: string;
  isCorrect?: boolean;
  rationale?: string;
}

export interface QuestionSeed {
  type: "multiple_choice" | "true_false" | "fill_blank" | "matching" | "identify" | "scenario";
  prompt: string;
  explanation: string;
  difficulty?: string;
  status?: string;
  questionData?: unknown;
  options: AnswerOptionSeed[];
  // Link the question to exactly one piece of content (used for review + SR).
  lessonSlug?: string;
  muscleSlug?: string;
  exerciseSlug?: string;
  bodyRegionSlug?: string;
  domainCode?: string;
  citations?: CitationSeed[];
}

export interface LessonSeed {
  slug: string;
  title: string;
  summary: string;
  bodyMarkdown: string;
  level: string;
  status?: string;
  estimatedMinutes?: number;
  order?: number;
  safetyNotes?: string;
  reviewWarning?: string;
  moduleSlug?: string;
  bodyRegionSlug?: string;
  objectives: string[];
  prerequisiteSlugs?: string[];
  assetSlugs?: string[];
  citations?: CitationSeed[];
}

export interface ModuleSeed {
  slug: string;
  title: string;
  description: string;
  order?: number;
}

export interface LearningPathSeed {
  slug: string;
  title: string;
  description: string;
  level: string;
  order?: number;
  modules: ModuleSeed[];
}

export interface CertificationDomainSeed {
  code: string;
  name: string;
  description: string;
  weightPercent?: number;
  order?: number;
}

export interface CertificationSeed {
  slug: string;
  name: string;
  organization: string;
  outlineUrl: string;
  outlineCheckedDate: string;
  description: string;
  domains: CertificationDomainSeed[];
}
