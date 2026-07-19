// Single import surface for all seed content. The seeder and the content
// validator both read from here. See docs/content-system.md.
//
// Each body region is authored as a self-contained module and aggregated below,
// so adding a region is: create content/regions/<name>.ts, add its module to
// curriculum.ts, then wire its exports in here.

export { sources } from "./sources";
export { vocabulary } from "./vocabulary";
export { visualAssets } from "./visual-assets";
export { learningPaths, certifications } from "./curriculum";

import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "./types";

// Shoulder region (the original seed slice lives in anatomy.ts / the flat files).
import { shoulderRegion, movements as shoulderMovements } from "./anatomy";
import { exercises as shoulderExercises } from "./exercises";
import { lessons as shoulderLessons } from "./lessons";
import { questions as shoulderQuestions } from "./quizzes";

// Additional regions (self-contained modules).
import { chestRegion, chestMovements, chestExercises, chestLessons, chestQuestions } from "./regions/chest";
import { upperBackRegion, upperBackMovements, upperBackExercises, upperBackLessons, upperBackQuestions } from "./regions/upper-back";

export const bodyRegions: BodyRegionSeed[] = [shoulderRegion, chestRegion, upperBackRegion];
export const movements: MovementSeed[] = [...shoulderMovements, ...chestMovements, ...upperBackMovements];
export const exercises: ExerciseSeed[] = [...shoulderExercises, ...chestExercises, ...upperBackExercises];
export const lessons: LessonSeed[] = [...shoulderLessons, ...chestLessons, ...upperBackLessons];
export const questions: QuestionSeed[] = [...shoulderQuestions, ...chestQuestions, ...upperBackQuestions];
