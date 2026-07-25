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
import { lowerBackRegion, lowerBackMovements, lowerBackExercises, lowerBackLessons, lowerBackQuestions } from "./regions/lower-back";
import { coreRegion, coreMovements, coreExercises, coreLessons, coreQuestions } from "./regions/core";
import { pelvisHipsRegion, pelvisHipsMovements, pelvisHipsExercises, pelvisHipsLessons, pelvisHipsQuestions } from "./regions/pelvis-hips";
import { glutesRegion, glutesMovements, glutesExercises, glutesLessons, glutesQuestions } from "./regions/glutes";
import { thighsRegion, thighsMovements, thighsExercises, thighsLessons, thighsQuestions } from "./regions/thighs";
import { kneesRegion, kneesMovements, kneesExercises, kneesLessons, kneesQuestions } from "./regions/knees";

export const bodyRegions: BodyRegionSeed[] = [shoulderRegion, chestRegion, upperBackRegion, lowerBackRegion, coreRegion, pelvisHipsRegion, glutesRegion, thighsRegion, kneesRegion];
export const movements: MovementSeed[] = [...shoulderMovements, ...chestMovements, ...upperBackMovements, ...lowerBackMovements, ...coreMovements, ...pelvisHipsMovements, ...glutesMovements, ...thighsMovements, ...kneesMovements];
export const exercises: ExerciseSeed[] = [...shoulderExercises, ...chestExercises, ...upperBackExercises, ...lowerBackExercises, ...coreExercises, ...pelvisHipsExercises, ...glutesExercises, ...thighsExercises, ...kneesExercises];
export const lessons: LessonSeed[] = [...shoulderLessons, ...chestLessons, ...upperBackLessons, ...lowerBackLessons, ...coreLessons, ...pelvisHipsLessons, ...glutesLessons, ...thighsLessons, ...kneesLessons];
export const questions: QuestionSeed[] = [...shoulderQuestions, ...chestQuestions, ...upperBackQuestions, ...lowerBackQuestions, ...coreQuestions, ...pelvisHipsQuestions, ...glutesQuestions, ...thighsQuestions, ...kneesQuestions];
