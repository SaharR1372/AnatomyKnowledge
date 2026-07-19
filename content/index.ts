// Single import surface for all seed content. The seeder and the content
// validator both read from here. See docs/content-system.md.

export { sources } from "./sources";
export { vocabulary } from "./vocabulary";
export { visualAssets } from "./visual-assets";
export { shoulderRegion, movements } from "./anatomy";
export { exercises } from "./exercises";
export { lessons } from "./lessons";
export { learningPaths, certifications } from "./curriculum";
export { questions } from "./quizzes";

import { shoulderRegion } from "./anatomy";
import type { BodyRegionSeed } from "./types";

// All body regions authored so far. The MVP ships one complete region (spec §20).
export const bodyRegions: BodyRegionSeed[] = [shoulderRegion];
