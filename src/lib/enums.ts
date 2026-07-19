// Central list of the string "enum" values used across the app. SQLite has no
// native enums, so these are validated in application code instead of the DB.
// Keeping them here gives one source of truth for both validation and UI.

export const ROLES = ["learner", "editor", "admin"] as const;
export type Role = (typeof ROLES)[number];

export const LEVELS = ["beginner", "intermediate", "advanced"] as const;
export type Level = (typeof LEVELS)[number];

export const CONTENT_STATUSES = [
  "draft",
  "source_checked",
  "expert_reviewed",
  "published",
] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

export const LESSON_PROGRESS = ["not_started", "in_progress", "completed"] as const;
export type LessonProgressStatus = (typeof LESSON_PROGRESS)[number];

export const MUSCLE_ROLES = ["primary", "secondary", "stabilizer"] as const;
export type MuscleRole = (typeof MUSCLE_ROLES)[number];

export const QUESTION_TYPES = [
  "multiple_choice",
  "true_false",
  "fill_blank",
  "matching",
  "identify",
  "scenario",
] as const;
export type QuestionType = (typeof QUESTION_TYPES)[number];

// Self-reported confidence answers requested in the spec (section 10).
export const CONFIDENCE = ["dont_know", "unsure", "know", "too_easy"] as const;
export type Confidence = (typeof CONFIDENCE)[number];

export const PLANES = ["sagittal", "frontal", "transverse", "multiple"] as const;
export type Plane = (typeof PLANES)[number];

export const SETTINGS = ["home", "gym", "both"] as const;
export const CHAINS = ["open", "closed"] as const;

// Entity types used by the polymorphic Citation / Bookmark / Note / AssetUsage
// tables. Keep in sync with how content links to sources.
export const ENTITY_TYPES = [
  "lesson",
  "muscle",
  "exercise",
  "body_region",
  "quiz_question",
  "safety",
  "term",
] as const;
export type EntityType = (typeof ENTITY_TYPES)[number];

/** Human-readable label for a content-review status. */
export function statusLabel(status: string): string {
  switch (status) {
    case "draft":
      return "Draft — not yet source-checked";
    case "source_checked":
      return "Source-checked";
    case "expert_reviewed":
      return "Expert-reviewed";
    case "published":
      return "Published";
    default:
      return status;
  }
}
