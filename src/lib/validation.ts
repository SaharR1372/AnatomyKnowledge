import { z } from "zod";
import { CONFIDENCE } from "./enums";

// Input validation schemas. Every server action / API route validates its input
// with one of these before touching the database.

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(200, "Password is too long"),
});
export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const answerSchema = z.object({
  questionId: z.string().min(1),
  selectedOptionId: z.string().min(1).optional(),
  freeResponse: z.string().max(2000).optional(),
  confidence: z.enum(CONFIDENCE).optional(),
  // For self-graded question types (matching, fill-in-the-blank) where the user
  // reveals the answer and reports whether they got it right.
  selfCorrect: z.boolean().optional(),
});
export type AnswerInput = z.infer<typeof answerSchema>;

export const noteSchema = z.object({
  entityType: z.string().min(1),
  entityId: z.string().min(1),
  body: z.string().trim().min(1, "Note cannot be empty").max(5000),
});

export const bookmarkSchema = z.object({
  entityType: z.string().min(1),
  entityId: z.string().min(1),
});

export const profileSchema = z.object({
  name: z.string().trim().min(1).max(80).optional(),
  preferredDifficulty: z.enum(["beginner", "advanced"]).optional(),
  preferredUnits: z.enum(["metric", "imperial"]).optional(),
  theme: z.enum(["system", "light", "dark"]).optional(),
  reduceMotion: z.boolean().optional(),
  largeText: z.boolean().optional(),
});
