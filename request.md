I want you to design and build a high-quality, mobile-friendly web application for learning human anatomy, muscles, human movement, exercise science, and personal-training fundamentals.

The application may eventually be deployed as a public website because I want to access it from my phone and share it with friends. However, every person must have a separate account, personalized learning path, and private progress history.

# 1. Main Goal

My long-term goal is to become a knowledgeable personal trainer and potentially prepare for a recognized personal-trainer certification exam.

I want to begin from the absolute basics and gradually progress through beginner, intermediate, and advanced levels.

By the end of the learning program, I should be able to:

* Identify the major bones, joints, muscles, tendons, ligaments, and other important anatomical structures.
* Understand how different parts of the body work together.
* Understand basic anatomy, physiology, kinesiology, and biomechanics.
* Recognize which muscles and joints are involved in different exercises.
* Explain why a particular exercise is appropriate for a specific goal.
* Understand exercise selection, correct form, common mistakes, and possible injury risks.
* Understand how and why an exercise can be modified for different people.
* Recognize when an exercise should be progressed, regressed, modified, or avoided.
* Create basic workout programs based on a person’s goals, fitness level, experience, limitations, and available equipment.
* Understand the professional responsibilities and limitations of a personal trainer.
* Prepare for personal-trainer certification exams without copying proprietary exam questions.

# 2. Target User and Teaching Style

I am a data scientist, so I prefer logical, structured, evidence-based explanations. I do not want to memorize isolated facts without understanding them.

English is my third language. Therefore, explanations must be scientifically accurate but written in clear, simple English.

For every important concept, explain:

1. What it is.
2. Where it is located.
3. What its main function is.
4. Why it is important.
5. How it affects movement.
6. Which exercises involve it.
7. How it interacts with nearby muscles, bones, and joints.
8. What may happen when it is weak, tight, injured, overused, or used incorrectly.
9. How the concept is applied when selecting or teaching an exercise.
10. What common misconceptions exist about it.

Introduce correct technical terminology, but always provide:

* A simple definition.
* An optional technical definition.
* Pronunciation assistance.
* An example sentence.
* Related or commonly confused terms.
* A visual illustration when appropriate.

Teach concepts through reasoning and connections rather than memorization alone.

# 3. Evidence, Accuracy, and Anti-Hallucination Requirements

Accuracy is one of the most important requirements of this project.

Do not generate anatomy, physiology, exercise, safety, or certification content based only on general language-model knowledge.

Every educational claim should be supported by one or more reliable references.

## Source priority

Use sources in approximately this order:

1. Government health organizations and official public-health guidelines.
2. Peer-reviewed or academically reviewed anatomy and physiology textbooks.
3. Official statements from recognized professional organizations.
4. Official certification exam outlines and candidate handbooks.
5. University, medical-school, and established hospital educational resources.
6. Peer-reviewed scientific papers when a more specialized claim requires them.

Do not use random blogs, influencer content, social-media posts, commercial supplement websites, or search-engine summaries as the source of truth.

A secondary website may be used to simplify a concept, but important facts must be verified using a primary or authoritative source.

## Initial trusted resources

Use the following as seed references and organize them in a source registry.

### Core anatomy and physiology

**OpenStax — Anatomy and Physiology 2e**

https://openstax.org/details/books/anatomy-and-physiology-2e

Use this as one of the main foundational references for anatomical terminology, body organization, bones, joints, muscles, nervous-system basics, and physiology.

OpenStax material has licensing and attribution requirements. Anatomy and Physiology 2e uses a CC BY-NC-SA 4.0 license. Record the exact attribution and license for every reused passage or image.

Do not assume that this license is compatible with future commercial use. Keep licensing information visible in the project documentation and database.

### Government and medical anatomy information

**MedlinePlus Anatomy**

https://medlineplus.gov/anatomy.html

**MedlinePlus Bones, Joints, and Muscles**

https://medlineplus.gov/bonesjointsandmuscles.html

**National Institute of Arthritis and Musculoskeletal and Skin Diseases**

https://www.niams.nih.gov/

Use these resources for understandable descriptions of anatomy, muscles, bones, joints, musculoskeletal health, and relevant safety information.

Do not assume that every NIH or MedlinePlus image is automatically reusable. Check the copyright and usage status of each individual image before including it.

### Exercise and physical-activity guidelines

**Physical Activity Guidelines for Americans**

https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines

**CDC Physical Activity Basics**

https://www.cdc.gov/physical-activity-basics/

Use these for evidence-based physical-activity recommendations, definitions of activity intensity, general health guidance, and population-level recommendations.

### Exercise science and professional guidance

**American College of Sports Medicine Official Statements**

https://acsm.org/education-resources/pronouncements-scientific-communications/official-statements/

Use publicly available ACSM statements and guidance when relevant. Do not reproduce paid or copyrighted ACSM textbook content without permission.

### Certification preparation

**ACE Certification Exam Content Outlines**

https://www.acefitness.org/fitness-certifications/certification-exam-content/

**NASM Certified Personal Trainer Exam Information**

https://www.nasm.org/certified-personal-trainer-exam-info

**NASM CPT Exam Blueprint**

https://www.nasm.org/content/dam/nasm/docs/nasmlibraries/pdf/cpt7-nasm-exam-blueprint.pdf

Use official exam outlines to understand the expected subject areas and professional competencies.

Do not copy actual or proprietary exam questions. Create original educational questions based on the public exam domains and general knowledge from authoritative sources.

## Content-verification rules

Each lesson, exercise page, muscle page, quiz explanation, and safety statement should have:

* One or more references.
* A direct source link.
* Source title.
* Source organization or author.
* Publication or update date when available.
* Date the source was last checked.
* The exact section or chapter supporting the content when possible.
* A content-review status such as `draft`, `source_checked`, or `expert_reviewed`.
* A warning when information remains incomplete or uncertain.

Do not create fake references, fake authors, fake paper titles, fake URLs, or unsupported citations.

When reliable sources disagree:

* Do not silently choose one position.
* Explain that there is disagreement.
* Present the major interpretations.
* Cite the sources supporting each interpretation.
* Avoid overstating certainty.

When a fact cannot be verified, either omit it or mark it clearly as requiring review.

## Content-generation workflow

Educational content should follow this workflow:

1. Identify the specific learning objective.
2. Collect information from approved sources.
3. Store the source information.
4. Write a clear beginner-friendly explanation.
5. Connect each important claim to its source.
6. Check anatomical and exercise terminology.
7. Add relevant visuals.
8. Create original quiz questions from the verified lesson.
9. Review the content before publishing it to learners.

Do not generate new health or exercise advice dynamically for users unless it is grounded in the approved content database.

If internet access is unavailable during development, build the content and citation architecture first. Use a small amount of clearly labeled demonstration content and mark it as requiring source review instead of inventing a complete curriculum.

# 4. Learning Structure

Organize the application into structured learning paths.

## Beginner Level

Start with:

* Introduction to anatomy and physiology.
* Levels of organization in the human body.
* Anatomical position.
* Directional terms such as anterior, posterior, superior, inferior, medial, lateral, proximal, distal, superficial, and deep.
* Body planes and axes.
* Basic movement terms such as flexion, extension, abduction, adduction, internal rotation, external rotation, pronation, and supination.
* Major bones and joints.
* Major muscle groups.
* Basic muscle functions.
* Basic nervous-system involvement in movement.
* Basic exercise terminology.
* Basic posture.
* Fundamental movement patterns.
* General exercise-safety principles.

## Intermediate Level

Continue with:

* More detailed muscle anatomy.
* Muscle origin and insertion.
* Agonists, antagonists, synergists, and stabilizers.
* Concentric, eccentric, and isometric muscle actions.
* Open-chain and closed-chain exercises.
* Basic biomechanics.
* Joint actions during exercises.
* Posture and movement assessment.
* Common exercise mistakes.
* Exercise modifications and regressions.
* Strength, muscular endurance, hypertrophy, mobility, flexibility, balance, power, and cardiovascular fitness.
* Training variables such as repetitions, sets, load, rest, frequency, tempo, volume, and intensity.
* Basic program design.
* Basic client communication and cueing.

## Advanced Level

Include:

* More detailed biomechanics.
* Force, torque, leverage, moment arms, center of mass, and stability.
* Kinetic chains.
* Muscle imbalances and compensatory movement patterns.
* Advanced exercise selection.
* Exercise programming for different goals.
* Special populations and common limitations.
* The difference between exercise guidance and medical treatment.
* Injury-risk awareness.
* Indications for referral to a medical professional.
* Periodization.
* Fatigue, recovery, adaptation, and overtraining concepts.
* Advanced client case studies.
* Certification-exam preparation.

Lessons must have prerequisites so users learn concepts in a logical order.

# 5. Body-Based Sections

Create an interactive body map and separate sections for:

* Head and neck.
* Shoulders.
* Chest.
* Upper back.
* Lower back.
* Arms.
* Elbows.
* Forearms and hands.
* Core and abdominal region.
* Spine.
* Pelvis and hips.
* Glutes.
* Thighs.
* Knees.
* Lower legs.
* Ankles and feet.

For every body region, explain:

* Major bones.
* Important landmarks.
* Joints and joint types.
* Major muscles.
* Muscle locations.
* Muscle functions.
* Origins and insertions at the appropriate learning level.
* Joint actions.
* Related nerves when relevant.
* Common exercises.
* Primary and secondary muscles used in each exercise.
* Common form mistakes.
* Common mobility and strength limitations.
* Relationships with nearby regions.
* Important safety considerations.
* Situations requiring referral to a healthcare professional.

Selecting a structure on the body map should open its detailed learning page.

# 6. Visual and Image-Based Learning

Visual learning must be a central part of the application, not an optional decoration.

Whenever a lesson discusses a body part, muscle, bone, joint, movement, or exercise, include an appropriate illustration whenever one is available and legally reusable.

## Anatomy visuals

For every major muscle or body structure, try to provide:

* Front view.
* Back view.
* Side view when useful.
* Highlighted location on the full body.
* A closer regional view.
* Labels for important structures.
* Origin and insertion points when appropriate.
* Arrows illustrating the direction of movement.
* A simple version for beginners.
* A more detailed version for advanced learners.

When a user selects a muscle, highlight that muscle while fading unrelated structures.

Allow users to:

* Zoom in and out.
* Switch between front, back, and side views.
* Turn labels on and off.
* Select a structure directly from the image.
* Compare superficial and deeper structures.
* View the structure during a relevant movement.
* Open the associated lesson or quiz.

## Exercise visuals

For exercise pages, include:

* Starting position.
* Ending position.
* Direction-of-movement arrows.
* Correct joint alignment.
* Primary muscles highlighted.
* Secondary muscles highlighted differently.
* Common incorrect positions.
* A visual comparison of correct and incorrect form.
* Regression and progression examples when available.

A static image, image sequence, original SVG illustration, animation, or short video may be used depending on the concept.

Do not use an AI-generated anatomy image as a factual source unless it has been manually checked against authoritative references. Generative image models may create anatomically incorrect structures.

## Visual accessibility

Every visual must include:

* Descriptive alternative text.
* A text explanation of what the image demonstrates.
* Good contrast.
* Labels readable on a mobile phone.
* Keyboard-accessible controls when interactive.
* A nonvisual alternative for quiz questions based on images.

## Image licensing

Every visual asset must have stored metadata containing:

* Asset title.
* Creator.
* Original source URL.
* License.
* Required attribution.
* Whether modification is permitted.
* Whether commercial use is permitted.
* Date the license was checked.
* Where the asset is used in the application.

Do not download and use an image simply because it appears in an internet search.

Possible visual sources include:

### OpenStax anatomy illustrations

https://openstax.org/details/books/anatomy-and-physiology-2e

Use only according to the applicable CC BY-NC-SA 4.0 attribution and share-alike requirements.

### Wikimedia Commons

https://commons.wikimedia.org/

Wikimedia Commons files may have different licenses. Check the license on the individual file page and satisfy all attribution, share-alike, and modification requirements.

### NIH and government image libraries

Government materials may sometimes be public domain, but some images are licensed from third parties. Confirm the status of every individual asset before reuse.

When no suitable reusable visual exists, create an original simplified SVG diagram based on verified anatomical references. Mark it as an educational illustration rather than a medical image and have its anatomical labels checked.

Create an in-app “Image Credits” page that lists all reused visual assets and their licenses.

# 7. Muscle Detail Pages

Every important muscle should have a structured page containing:

* Common name.
* Scientific or anatomical name.
* Pronunciation.
* Body region.
* Simple location description.
* Labeled visual.
* Origin.
* Insertion.
* Main action or actions.
* Joint or joints crossed.
* Movement plane.
* Innervation when appropriate.
* Functional role in daily movement.
* Functional role in exercise.
* Exercises where it acts as a primary mover.
* Exercises where it acts as a secondary mover or stabilizer.
* Commonly confused muscles.
* Common misconceptions.
* Relevant safety information.
* Beginner explanation.
* Advanced explanation.
* References.
* Quiz questions.

Avoid oversimplified statements such as claiming that a compound exercise trains only one muscle.

# 8. Exercise Library

Create an exercise library with filtering and search.

Users should be able to filter by:

* Body region.
* Primary muscle.
* Secondary muscles.
* Movement pattern.
* Joint action.
* Movement plane.
* Equipment.
* Difficulty.
* Training goal.
* Home or gym setting.
* Unilateral or bilateral movement.
* Open-chain or closed-chain movement.
* Beginner, intermediate, or advanced level.

Each exercise page should contain:

* Exercise name.
* Alternative names.
* Simple explanation.
* Purpose.
* Starting position.
* Step-by-step instructions.
* Primary muscles.
* Secondary muscles.
* Stabilizing muscles.
* Joints involved.
* Joint actions.
* Movement plane.
* Breathing guidance.
* Recommended cues.
* Common mistakes.
* Visual comparison of correct and incorrect form.
* Safety considerations.
* Easier regression.
* Harder progression.
* Alternatives.
* Equipment needed.
* Who may benefit from the exercise.
* Who may need to modify or avoid it.
* A “Why this exercise works” section.
* References supporting the explanation.

Avoid rigid claims that a particular exercise is universally good or bad. Explain the context, person, goal, technique, and limitations that affect exercise selection.

# 9. Quizzes and Active Learning

Every lesson, muscle, body region, and module should include quizzes.

Use question formats such as:

* Multiple choice.
* True or false.
* Matching.
* Fill in the blank.
* Identify a muscle on a diagram.
* Identify a bone or joint.
* Match a muscle to its function.
* Match an exercise to its primary and secondary muscles.
* Identify the joint action.
* Identify the movement plane.
* Correct-versus-incorrect form comparison.
* Scenario-based questions.
* Client case studies.
* Questions that ask users to explain their reasoning.

After every answer:

* Show whether the answer is correct.
* Explain why it is correct.
* Explain why the alternatives are incorrect.
* Link to the relevant lesson.
* Display the supporting source.
* Save the result in the user’s learning history.
* Recommend review material when needed.

Quiz explanations must be based on the same verified sources as the lesson.

Do not invent false answer choices that accidentally teach unsafe or medically incorrect information without clearly explaining why they are wrong.

# 10. Spaced Repetition and Mastery

Implement spaced repetition.

Questions answered incorrectly should appear more frequently until the user demonstrates mastery.

Track:

* First-attempt accuracy.
* Current mastery.
* Retention over time.
* Frequently confused concepts.
* Weak body regions.
* Weak question types.
* Time since the last review.
* Confidence reported by the user.

Allow users to answer:

* I do not know.
* I am unsure.
* I know this.
* This was too easy.

Do not mark a topic as mastered based on one correct answer.

# 11. Personalized Learning

Every user should have a separate account and learning profile.

Store separately for every user:

* Login information.
* Current learning level.
* Completed lessons.
* Quiz attempts.
* Quiz scores.
* Mastery estimates.
* Weak and strong areas.
* Saved exercises.
* Bookmarks.
* Personal notes.
* Learning streak.
* Recommended next lesson.
* Personalized review questions.
* Preferred explanation difficulty.
* Preferred units.
* Accessibility preferences.
* Personal vocabulary list.

Users must never be able to see or modify another user’s private learning information.

I want to share the website with friends. They should create their own accounts and learn independently while using the same core curriculum.

Social features can eventually include optional study groups or friendly progress comparisons, but users must explicitly choose what they share.

# 12. Progress Dashboard

Create a dashboard displaying:

* Overall completion.
* Completion by body region.
* Beginner, intermediate, and advanced progress.
* Quiz accuracy.
* Retention rate.
* Recently studied topics.
* Topics requiring review.
* Mastered topics.
* Current learning streak.
* Recommended next lesson.
* Vocabulary progress.
* Certification-domain progress.
* Certification-readiness estimate.

The readiness estimate must be described as an educational progress indicator, not an official certification result or a guarantee of passing an exam.

# 13. Certification Preparation

Create a certification-preparation area that can support multiple certification paths.

Include:

* Exam domains based on official public exam outlines.
* Practice exams.
* Timed exams.
* Questions organized by subject.
* Explanations for every answer.
* Performance by domain.
* Weak-topic review.
* Exam history.
* Study recommendations.
* Questions that test application and reasoning rather than memorization only.

All practice questions must be original.

Do not copy, reconstruct, or claim access to confidential ACE, NASM, ACSM, NSCA, or other proprietary exam questions.

Clearly identify which official public exam outline was used to organize each certification path and when that outline was last checked.

# 14. English-Learning Support

Because English is my third language, add optional language-learning tools.

For important technical terms, provide:

* Simple English definition.
* Technical definition.
* Pronunciation.
* Audio pronunciation when practical.
* Example sentence.
* Word category.
* Related terms.
* Commonly confused terms.
* Flashcard.
* Option to save the term to a personal vocabulary list.

Allow users to select difficult words and view their meanings without leaving the lesson.

The language-learning tools must not replace or weaken scientific accuracy.

# 15. User Experience

The website should be:

* Responsive on phones, tablets, and computers.
* Installable as a Progressive Web App when practical.
* Clean and modern.
* Easy for a complete beginner to navigate.
* Fast.
* Accessible.
* Visually educational without being overwhelming.
* Built with reusable components.
* Available in light and dark mode.
* Designed around short, manageable learning units.

Possible main sections include:

* Home.
* Learning Path.
* Interactive Body Map.
* Anatomy.
* Exercise Library.
* Quizzes.
* Flashcards.
* Certification Preparation.
* Progress Dashboard.
* Saved Items.
* Vocabulary.
* Personal Notes.
* Sources and References.
* Image Credits.
* Profile and Settings.

# 16. Educational and Medical Safety

This is an educational application. It must not provide medical diagnosis or treatment.

Include clear safety guidance:

* Encourage users to consult qualified healthcare professionals for pain, injury, illness, or medical concerns.
* Explain the difference between normal exercise effort and potential warning signs.
* Avoid claiming that an exercise cures an injury or disease.
* Avoid diagnosing users from symptoms or movement videos.
* Explain the professional scope of practice of a personal trainer.
* Identify situations in which a trainer should refer a client to a physician, physical therapist, registered dietitian, or another qualified professional.
* Do not create individualized rehabilitation plans.
* Do not recommend that users ignore pain.

Health-related recommendations should state the population and context to which they apply.

# 17. Technical Requirements

Choose a practical and maintainable technology stack.

A suggested direction is:

* Next.js with TypeScript.
* Responsive styling with Tailwind CSS or another maintainable design system.
* PostgreSQL or another reliable relational database.
* Prisma or a similar typed ORM.
* Secure authentication.
* Separate per-user progress data.
* Object storage for visual assets.
* A content-management approach that permits lessons to be reviewed and updated without editing application code.
* Progressive Web App support.
* Proper validation and error handling.
* Loading, error, and empty states.
* Basic automated tests.
* Environment-variable configuration.
* Clear local-development and deployment instructions.

Use free or low-cost services for the first version where practical, but keep the architecture maintainable.

The public website may allow visitors to preview a limited amount of content. An account should be required to save progress, notes, quiz history, and personalization.

# 18. Suggested Data Model

Design the database to support at least:

* Users.
* Profiles.
* Learning levels.
* Learning paths.
* Modules.
* Lessons.
* Learning objectives.
* Body regions.
* Anatomical structures.
* Muscles.
* Bones.
* Joints.
* Movements.
* Exercises.
* Exercise-muscle relationships.
* Exercise-joint relationships.
* Quiz questions.
* Answer options.
* Quiz attempts.
* User progress.
* Mastery records.
* Flashcards.
* Review schedules.
* Bookmarks.
* Notes.
* Vocabulary terms.
* Certification domains.
* Practice exams.
* Sources.
* Citations.
* Content-source relationships.
* Visual assets.
* Asset licenses.
* Asset attributions.
* Content-review records.

A source record should contain fields such as:

* `title`
* `organization`
* `author`
* `url`
* `publicationDate`
* `lastUpdatedDate`
* `lastCheckedDate`
* `sourceType`
* `reliabilityTier`
* `license`
* `notes`

A citation record should connect a specific content section or claim to a source and, when available, a chapter, page, section, or heading.

A visual-asset record should include the creator, original URL, license, attribution, allowed uses, modifications, and associated lessons.

# 19. Content Administration

Create a basic admin or content-editor workflow.

Authorized editors should be able to:

* Create and edit lessons.
* Attach references.
* Add citations to individual sections.
* Upload or register visual assets.
* Record licensing information.
* Create quizzes.
* Preview lessons.
* Mark content as draft.
* Mark sources as checked.
* Submit content for review.
* Publish reviewed content.
* Unpublish outdated content.
* View lessons whose sources need to be rechecked.

Regular learners must not have access to administrative features.

# 20. Development Approach

Do not attempt to implement every advanced feature at once.

First inspect the existing project directory, if one exists, and identify what is already available.

Then provide:

1. Recommended architecture.
2. Technology stack and reasons for each choice.
3. Database schema.
4. Content and citation architecture.
5. Visual-asset and licensing strategy.
6. Main pages and user flows.
7. Security and privacy approach.
8. Development phases.
9. Proposed folder structure.

Then implement the MVP without waiting for additional approval unless a decision would create a major security, licensing, or data-loss risk.

## Phase 1: Functional MVP

Build a polished MVP containing:

* Landing page.
* User registration and login.
* User dashboard.
* Beginner learning path.
* Several source-supported anatomy lessons.
* Several muscle pages.
* Several exercise pages.
* Relevant licensed or original visuals.
* Quiz system.
* Progress tracking.
* Sources and references display.
* Image-credit display.
* Mobile-responsive design.
* Seed data.
* Local setup instructions.
* Deployment instructions.

For the seed curriculum, implement one complete body region as an example rather than many incomplete regions.

A good initial vertical slice could include:

* Anatomical position and directional terms.
* Body planes.
* Shoulder region.
* Major shoulder bones, joints, and muscles.
* Several shoulder-related movements.
* Several exercises.
* Visual diagrams.
* Quizzes.
* References.
* User progress tracking.

## Phase 2

Add:

* Full interactive body map.
* Additional body regions.
* Flashcards.
* Spaced repetition.
* Advanced exercise search.
* Personal notes.
* Bookmarks.
* More detailed progress analytics.
* Certification practice mode.
* More visual quiz formats.
* Installable PWA behavior.

## Phase 3

Add:

* Intermediate and advanced learning paths.
* More complex biomechanics visualizations.
* Client case studies.
* Personalized lesson recommendations.
* Optional multilingual support.
* Optional study groups.
* Additional certification paths.
* Expert content-review workflow.

# 21. Testing Requirements

Include tests for important behavior such as:

* Registration and login.
* Authorization and user-data isolation.
* Lesson completion.
* Quiz scoring.
* Progress updates.
* Spaced-repetition scheduling.
* Citation display.
* Missing-source warnings.
* Visual attribution display.
* Mobile navigation.
* Accessibility of interactive diagrams.
* Administrative permissions.

Verify that one user cannot read or modify another user’s progress, notes, bookmarks, or quiz results.

# 22. Important Final Instructions

Do not create only a visual prototype. Authentication, quizzes, progress saving, separate user accounts, source tracking, and references must actually work.

Use clean, modular, typed, and documented code.

Do not overcomplicate the MVP with unnecessary services.

Do not represent generated content as verified content.

Do not publish an educational claim without a traceable reference.

Do not use an image without checking and recording its license.

Do not use fake citations or placeholder references in production content.

Do not copy copyrighted certification questions or paid textbook content.

When a requirement is too large for the first version, create the correct architectural foundation and document what remains for later phases.

At the end, provide:

* A summary of what was implemented.
* Setup instructions.
* Environment variables required.
* Test instructions.
* Deployment instructions.
* Demo account instructions if appropriate.
* Known limitations.
* Unverified content that still requires review.
* A list of all sources used.
* A list of all visual assets and licenses.
* Recommended next development steps.
# 23. Complete Project Documentation

Document everything you create so that I—or another developer—can understand, maintain, and extend the application later.

Do not keep important explanations only in the Claude Code conversation. Save all important decisions, instructions, architecture descriptions, and future plans inside the project repository.

The project must contain a well-organized `docs/` directory.

Suggested documentation structure:

```text
docs/
├── architecture.md
├── database-schema.md
├── content-system.md
├── citations-and-sources.md
├── visual-assets-and-licenses.md
├── authentication-and-security.md
├── quiz-and-mastery-system.md
├── spaced-repetition.md
├── deployment.md
├── development-guide.md
├── adding-new-content.md
├── adding-new-features.md
├── testing.md
├── troubleshooting.md
├── roadmap.md
└── decisions/
    ├── 001-technology-stack.md
    ├── 002-database-choice.md
    ├── 003-authentication-choice.md
    └── 004-content-and-citation-model.md
```

Create the following documentation files when relevant.

## README

Create a complete root-level `README.md` containing:

* Project name.
* Project purpose.
* Main learning goals.
* Screenshots or interface previews.
* Main features.
* Technology stack.
* System architecture summary.
* Local installation instructions.
* Required software.
* Environment-variable setup.
* Database setup.
* Seed-data instructions.
* Development commands.
* Test commands.
* Build commands.
* Deployment instructions.
* Project structure.
* Source and citation policy.
* Image-licensing policy.
* Current limitations.
* Roadmap.
* Contribution instructions.
* License information.
* Acknowledgments and educational references.

The README should be useful to:

* Me when I return to the project later.
* Another developer joining the project.
* A recruiter or hiring manager viewing the repository.
* A user who wants to run the application locally.

## Architecture documentation

Create `docs/architecture.md` explaining:

* Overall architecture.
* Frontend responsibilities.
* Backend responsibilities.
* Authentication flow.
* Database interactions.
* Content-management approach.
* Quiz and progress flow.
* Citation architecture.
* Visual-asset architecture.
* Deployment architecture.
* Important tradeoffs.
* Known limitations.
* Possible future improvements.

Include Mermaid diagrams when useful, such as:

* High-level system architecture.
* User authentication flow.
* Lesson-completion flow.
* Quiz-attempt flow.
* Content-publishing workflow.
* Database entity relationships.

## Database documentation

Create `docs/database-schema.md` containing:

* A description of every important database table or model.
* Important fields.
* Relationships.
* Indexes.
* Constraints.
* User-data isolation rules.
* Deletion behavior.
* Migration instructions.
* Seed-data instructions.
* Examples of how to add new records safely.

The actual database schema and migration files must also remain in the project repository.

## Content documentation

Create `docs/content-system.md` explaining:

* How lessons are structured.
* How learning objectives are stored.
* How muscles, bones, joints, movements, and exercises are connected.
* How beginner, intermediate, and advanced content differs.
* How prerequisites work.
* How quizzes connect to lessons.
* How references connect to claims.
* How reviewed and unreviewed content are distinguished.
* How content can be updated without rewriting the application.

Create `docs/adding-new-content.md` with step-by-step instructions for adding:

* A new body region.
* A new muscle.
* A new bone.
* A new joint.
* A new movement.
* A new exercise.
* A new lesson.
* A new quiz.
* A new certification domain.
* A new source.
* A new visual asset.

Include concrete examples based on the seed content.

## Feature-development documentation

Create `docs/adding-new-features.md` explaining:

* Where frontend components should be added.
* Where backend logic should be added.
* How to create a new page.
* How to add a protected route.
* How to add a database model.
* How to create and run a migration.
* How to add a new API endpoint or server action.
* How to add tests.
* How to update documentation.
* How to avoid breaking existing functionality.

## Code documentation

Use:

* Clear file and folder names.
* Helpful function and component names.
* TypeScript types.
* Comments for non-obvious logic.
* Documentation comments for reusable services and complex functions.
* Small, modular components.
* Shared utilities instead of repeated code.
* Consistent naming conventions.

Do not add unnecessary comments that merely repeat what the code already says. Comments should explain reasoning, constraints, safety considerations, or non-obvious behavior.

## Decision records

For major technical decisions, create short Architecture Decision Records inside `docs/decisions/`.

Each decision record should explain:

* The problem.
* Considered options.
* Selected option.
* Reason for the choice.
* Advantages.
* Disadvantages.
* Future consequences.
* Date of the decision.

This will help me understand why the application was built in a particular way when I return to it later.

## Changelog and roadmap

Create:

* `CHANGELOG.md`
* `docs/roadmap.md`

The changelog should record meaningful completed changes by version.

The roadmap should separate:

* Completed features.
* Current work.
* Short-term improvements.
* Long-term ideas.
* Content that requires expert review.
* Technical debt.
* Accessibility improvements.
* Potential certification integrations.

Use a clear format such as:

```text
Planned
In Progress
Completed
Requires Research
Requires Expert Review
```

## Development history

At the end of every significant implementation phase:

1. Update the README when necessary.
2. Update the changelog.
3. Update the roadmap.
4. Update architecture documentation when the design changes.
5. Update database documentation after schema changes.
6. Update source and licensing records.
7. Record known limitations.
8. Record unfinished tasks.

Do not leave undocumented placeholder code or unexplained TODO comments.

For every TODO, include:

* What remains to be done.
* Why it was not completed.
* Where it should be implemented.
* Any dependencies or risks.

# 24. Preserve Project Materials Inside the Repository

All materials required to understand or rebuild the project should be saved inside the project folder when legally permitted.

This includes:

* Source code.
* Database schema.
* Migration files.
* Seed scripts.
* Sample educational content.
* Quiz examples.
* Source registry.
* Citation records.
* Visual-asset metadata.
* Image attributions.
* License records.
* Architecture diagrams.
* Setup instructions.
* Deployment instructions.
* Test instructions.
* Environment-variable examples.
* Development decisions.
* Roadmap.
* Known limitations.

Do not rely on temporary files outside the repository.

Do not rely on information that exists only in the chat.

Do not store copyrighted textbooks, paid certification materials, or visual assets in the repository unless their licenses explicitly permit it.

For external resources that cannot legally be stored in the repository:

* Store the official source link.
* Store citation metadata.
* Store access instructions.
* Explain any licensing restrictions.
* Do not copy the restricted material.

Create a structured source registry, for example:

```text
content/
├── sources/
├── lessons/
├── quizzes/
├── exercises/
├── anatomy/
└── seed-data/
```

Alternatively, use a database-backed content system while preserving importable seed files in the project.

Use human-readable formats such as:

* Markdown.
* JSON.
* YAML.
* CSV where appropriate.

Validate structured content before importing it into the database.

# 25. Environment Variables, Secrets, and Reproducibility

Create an `.env.example` file containing every required environment-variable name with safe placeholder values.

For example:

```env
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_APP_URL=
STORAGE_BUCKET=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
```

Never place real passwords, API keys, database credentials, access tokens, or private URLs in:

* Source files.
* Documentation.
* Screenshots.
* Git history.
* Seed files.
* Public GitHub issues.

Add secret-containing files to `.gitignore`.

Create documentation explaining:

* Where each secret comes from.
* Whether it is required for local development.
* How to configure it in deployment.
* How to rotate it if exposed.

Make the project reproducible on another computer.

A new developer should be able to:

1. Clone the repository.
2. Install dependencies.
3. Copy `.env.example` to `.env.local`.
4. Configure the database.
5. Run migrations.
6. Load seed content.
7. Start the development server.
8. Run tests.

Provide commands for every step.

Lock dependency versions using the appropriate lockfile, such as:

* `package-lock.json`
* `pnpm-lock.yaml`
* `yarn.lock`

Use only one package manager and document which one is required.

# 26. Git and Version-Control Preparation

Initialize the project as a Git repository if it is not already one.

Create an appropriate `.gitignore` that excludes:

* Dependencies.
* Build output.
* Environment files containing secrets.
* Local database files when appropriate.
* Logs.
* Temporary files.
* IDE-specific files when appropriate.
* Uploaded user content.
* Private keys.
* Test coverage output when it should not be committed.

Use meaningful commits during development.

Examples:

```text
chore: initialize Next.js project
feat: add authentication and user profiles
feat: implement lesson and citation models
feat: add quiz scoring and progress tracking
feat: create shoulder anatomy learning module
test: add authorization and quiz tests
docs: add architecture and deployment guides
```

Do not place all development work into one unclear commit when multiple logical stages can be recorded.

Before the final handoff:

* Confirm that the project builds successfully.
* Confirm that tests run successfully.
* Confirm that no secrets are included.
* Confirm that `.env.example` is complete.
* Confirm that the README is current.
* Confirm that database migrations are included.
* Confirm that seed scripts are included.
* Confirm that source and image attribution records are included.
* Confirm that the repository has a clean status.
* Run a secret scan if a suitable tool is available.
* Document any remaining warnings.

Do not rewrite or destroy an existing Git history without explicit permission.

Do not automatically push the project to a remote repository unless I explicitly ask you to do so and authentication is available. Instead, prepare everything and provide the exact commands I should run.

# 27. GitHub Repository Instructions

At the end of the project, provide a beginner-friendly guide explaining how I can place the application in my GitHub account.

Include both of the following methods.

## Method A: Create the repository through the GitHub website

Explain how to:

1. Sign in to GitHub.
2. Create a new repository.
3. Select a professional repository name.
4. Add a short project description.
5. Choose public or private visibility.
6. Avoid creating a conflicting README if one already exists locally.
7. Copy the repository URL.
8. Connect the local project to the GitHub repository.
9. Push the code.
10. Verify that the files appear correctly.

Provide exact commands similar to:

```bash
git init
git add .
git commit -m "Initial release of anatomy and personal training learning platform"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git push -u origin main
```

Explain that `USERNAME` and `REPOSITORY-NAME` must be replaced.

Also explain what to do when:

* Git has already been initialized.
* The `origin` remote already exists.
* Authentication fails.
* GitHub requests a personal access token.
* The remote repository contains an initial commit.
* A file was accidentally committed.
* A secret was accidentally pushed.

## Method B: Create the repository with GitHub CLI

Provide optional instructions using `gh`:

```bash
gh auth login
gh repo create anatomy-learning-platform --public --source=. --remote=origin --push
```

Explain how to use a private repository instead:

```bash
gh repo create anatomy-learning-platform --private --source=. --remote=origin --push
```

Do not assume GitHub CLI is already installed.

## Future update workflow

Explain how to publish future changes:

```bash
git status
git add .
git commit -m "Describe the improvement"
git push
```

Explain the purpose of each command in simple language.

Also explain how to create a feature branch:

```bash
git checkout -b feature/interactive-body-map
git add .
git commit -m "feat: add interactive body map"
git push -u origin feature/interactive-body-map
```

Explain how branches help protect the stable version.

# 28. Deployment and Public Sharing

I want to be able to open the application on my phone and share it with friends.

Prepare the project for deployment.

For a Next.js application, consider a practical service such as Vercel, unless another platform is technically more suitable.

Also consider appropriate managed services for:

* PostgreSQL database.
* Authentication.
* Object storage.
* Email verification.
* Error monitoring.

Prefer free or low-cost options for the MVP, but explain free-tier limitations.

Create `docs/deployment.md` with step-by-step instructions for:

1. Pushing the project to GitHub.
2. Connecting the GitHub repository to the deployment provider.
3. Creating the production database.
4. Configuring environment variables.
5. Running production database migrations.
6. Loading safe seed content.
7. Deploying the application.
8. Creating the first administrator account.
9. Testing registration and login.
10. Testing the application from a phone.
11. Sharing the public URL.
12. Viewing deployment logs.
13. Redeploying after future GitHub updates.
14. Setting up a custom domain later.
15. Backing up the database.
16. Recovering from a failed deployment.

Include a production-readiness checklist.

The deployed application must not expose:

* Database credentials.
* API secrets.
* Private user information.
* Administrator functionality to ordinary users.
* Debug information.
* Development-only endpoints.
* Private source materials.

Do not use local-only storage for data that must persist in production.

# 29. Portfolio and Recruiter Presentation

I also want this project to demonstrate that I can design and build a serious application.

Prepare the repository so it presents the work professionally to recruiters, collaborators, and other developers.

The public-facing README should clearly describe:

* The problem the application solves.
* My motivation for creating it.
* The target users.
* The main features.
* The evidence-based content system.
* The personalized learning system.
* The quiz and mastery system.
* The citation and licensing architecture.
* The technical architecture.
* Security and privacy considerations.
* Testing.
* Deployment.
* Future improvements.

Include a concise section titled:

```text
What This Project Demonstrates
```

This section may mention abilities such as:

* Full-stack application development.
* Responsive web design.
* Relational database design.
* Authentication and authorization.
* Personalized user experiences.
* Educational technology design.
* Evidence-based content management.
* Data modeling.
* Testing.
* Accessibility.
* Security awareness.
* Deployment and DevOps fundamentals.
* Technical documentation.

Do not exaggerate features that have not been implemented.

Clearly distinguish:

* Implemented features.
* Prototype features.
* Planned features.
* Content awaiting expert review.

Add:

* Professional screenshots.
* A short GIF or video demonstration when practical.
* Architecture diagram.
* Database diagram.
* Demo workflow.
* Public demo URL after deployment.
* Technology badges only when accurate.
* Test-status badge after continuous integration is configured.
* Deployment-status badge when available.

Create a portfolio-friendly project description of approximately 100–150 words that I can later use on:

* GitHub.
* LinkedIn.
* My résumé.
* A personal website.

Also provide three concise résumé bullet points describing my contribution to the project. Do not claim that the project has real users, medical validation, or production scale unless that becomes true.

# 30. GitHub Automation and Quality Checks

Create a basic GitHub Actions workflow when practical.

The workflow should run on pull requests and pushes to the main branch and perform:

* Dependency installation.
* Type checking.
* Linting.
* Unit tests.
* Build verification.

A possible location is:

```text
.github/workflows/ci.yml
```

Document the workflow and explain how to diagnose failures.

Consider adding:

* Dependabot configuration.
* Issue templates.
* Pull-request template.
* Security policy.
* Contributing guide.

Suggested files:

```text
.github/
├── workflows/
│   └── ci.yml
├── ISSUE_TEMPLATE/
├── pull_request_template.md
└── dependabot.yml

CONTRIBUTING.md
SECURITY.md
CODE_OF_CONDUCT.md
```

Only include files that are relevant and reasonably complete.

# 31. Backup and Future Maintenance

Document how to:

* Back up the production database.
* Export educational content.
* Export source and citation records.
* Restore a database backup.
* update dependencies safely.
* Run database migrations.
* Roll back a failed release.
* Review outdated sources.
* Replace an image whose license changes.
* Archive or remove inaccurate lessons.
* Add a new administrator.
* Remove a user account and associated personal data.
* Transfer the project to another hosting provider.

Keep educational content as portable as reasonably possible so it is not permanently tied to a single vendor.

# 32. Updated Final Deliverables

At the end of the implementation, provide all of the following:

1. A summary of what was implemented.
2. A list of incomplete features.
3. A list of content requiring verification or expert review.
4. Local installation instructions.
5. Environment-variable instructions.
6. Database setup and migration instructions.
7. Seed-data instructions.
8. Test instructions.
9. Build instructions.
10. Deployment instructions.
11. GitHub publishing instructions.
12. Future Git update instructions.
13. Repository structure explanation.
14. Architecture documentation.
15. Database documentation.
16. Content-management documentation.
17. Instructions for adding new lessons and exercises.
18. Instructions for adding new application features.
19. Source and citation inventory.
20. Visual-asset and license inventory.
21. Security checklist.
22. Production-readiness checklist.
23. Known limitations.
24. Roadmap.
25. Portfolio project description.
26. Résumé bullet points.
27. Recommended next development steps.

All documentation must be saved as files inside the project repository, not provided only as a chat response.

The final project should be understandable and extendable even if a different developer works on it in the future.
