import { z } from "zod";

const requiredText = (label: string, max = 160) =>
  z.string().trim().min(2, `${label} is required`).max(max, `${label} is too long`);

export const enquirySchema = z.object({
  name: requiredText("Name", 120),
  organization: requiredText("Organization", 160),
  workEmail: z.string().trim().email("Enter a valid work email").max(255, "Email is too long"),
  phone: z.string().trim().min(7, "Phone number is required").max(40, "Phone number is too long"),
  jobTitle: requiredText("Job title", 120),
  trainingRequirement: requiredText("Training requirement", 120),
  industry: requiredText("Industry", 120),
  departmentTeam: requiredText("Department or team", 140),
  numberOfParticipants: requiredText("Number of participants", 80),
  preferredDuration: requiredText("Preferred duration", 80),
  preferredFormat: requiredText("Preferred format", 80),
  preferredTimeline: requiredText("Preferred timeline", 120),
  trainingObjectives: z
    .string()
    .trim()
    .min(10, "Share a little more about your training objectives")
    .max(2500, "Training objectives are too long"),
  aiReadiness: z
    .object({
      employeeRange: z.string().trim().max(80).optional(),
      departments: z.string().trim().max(240).optional(),
      currentUsage: z.string().trim().max(240).optional(),
      toolsUsed: z.string().trim().max(240).optional(),
      challenges: z.string().trim().max(500).optional(),
      skillLevel: z.string().trim().max(120).optional(),
      desiredOutcomes: z.string().trim().max(500).optional(),
    })
    .optional(),
  companyWebsite: z.string().trim().max(0, "Please leave this field empty").optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
