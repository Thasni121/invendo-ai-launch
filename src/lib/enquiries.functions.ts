import { createServerFn } from "@tanstack/react-start";

import { enquirySchema } from "./enquiry-schema";

export const submitCorporateTrainingEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    if (data.companyWebsite) {
      return { success: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("corporate_training_enquiries").insert({
      name: data.name,
      organization: data.organization,
      work_email: data.workEmail,
      phone: data.phone,
      job_title: data.jobTitle,
      training_requirement: data.trainingRequirement,
      industry: data.industry,
      department_team: data.departmentTeam,
      number_of_participants: data.numberOfParticipants,
      preferred_duration: data.preferredDuration,
      preferred_format: data.preferredFormat,
      preferred_timeline: data.preferredTimeline,
      training_objectives: data.trainingObjectives,
      ai_readiness: data.aiReadiness ?? {},
      source: "Corporate Training Enquiry",
    });

    if (error) {
      throw new Error("We could not submit the enquiry right now. Please call or email Invendo AI Academy.");
    }

    return { success: true };
  });
