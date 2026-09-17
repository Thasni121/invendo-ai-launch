"use client";

import { useServerFn } from "@tanstack/react-start";
import { Mail, PhoneCall, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { submitCorporateTrainingEnquiry } from "@/lib/enquiries.functions";
import { brand } from "@/lib/invendo-data";

type FormState = EnquiryInput;

const initialForm: FormState = {
  name: "",
  organization: "",
  workEmail: "",
  phone: "",
  jobTitle: "",
  trainingRequirement: "",
  industry: "",
  departmentTeam: "",
  numberOfParticipants: "",
  preferredDuration: "",
  preferredFormat: "",
  preferredTimeline: "",
  trainingObjectives: "",
  companyWebsite: "",
};

const trainingRequirementOptions = [
  "AI Awareness",
  "Generative AI",
  "AI Productivity",
  "Role-Based AI",
  "Customized AI Training",
  "Hands-on training",
  "Online training",
  "Onsite training",
];

const durationOptions = ["1 Day", "2 Days", "3 Days", "Customized"];
const formatOptions = ["Online", "In-person", "On-site", "Hybrid"];

export function ContactForm() {
  const submitEnquiry = useServerFn(submitCorporateTrainingEnquiry);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string") nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry({ data: parsed.data });
      setForm(initialForm);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-y bg-background" aria-labelledby="contact-form-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="space-y-6">
          <span className="eyebrow text-accent-foreground">Corporate Training Enquiry</span>
          <h2 id="contact-form-heading" className="heading-section">Tell us about your training requirement</h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Share your team size, objectives, format, and timeline. Invendo AI Academy can suggest a practical training approach for your organization.
          </p>
          <div className="grid gap-4 rounded-lg border border-border bg-card p-5 shadow-card">
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm font-medium text-card-foreground hover:text-primary">
              <PhoneCall className="h-4 w-4 text-primary" aria-hidden="true" /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-sm font-medium text-card-foreground hover:text-primary">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> {brand.email}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-5 shadow-card md:p-7" noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <Input value={form.name} onChange={(event) => updateField("name", event.target.value)} required autoComplete="name" />
            </Field>
            <Field label="Organization" error={errors.organization}>
              <Input value={form.organization} onChange={(event) => updateField("organization", event.target.value)} required autoComplete="organization" />
            </Field>
            <Field label="Work Email" error={errors.workEmail}>
              <Input type="email" value={form.workEmail} onChange={(event) => updateField("workEmail", event.target.value)} required autoComplete="email" />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <Input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} required autoComplete="tel" />
            </Field>
            <Field label="Job Title" error={errors.jobTitle}>
              <Input value={form.jobTitle} onChange={(event) => updateField("jobTitle", event.target.value)} required autoComplete="organization-title" />
            </Field>
            <Field label="Industry" error={errors.industry}>
              <Input value={form.industry} onChange={(event) => updateField("industry", event.target.value)} required />
            </Field>
            <Field label="Training Requirement" error={errors.trainingRequirement}>
              <Select value={form.trainingRequirement} onValueChange={(value) => updateField("trainingRequirement", value)}>
                <SelectTrigger><SelectValue placeholder="Select requirement" /></SelectTrigger>
                <SelectContent>{trainingRequirementOptions.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
            <Field label="Department / Team" error={errors.departmentTeam}>
              <Input value={form.departmentTeam} onChange={(event) => updateField("departmentTeam", event.target.value)} required />
            </Field>
            <Field label="Number of Participants" error={errors.numberOfParticipants}>
              <Input value={form.numberOfParticipants} onChange={(event) => updateField("numberOfParticipants", event.target.value)} required />
            </Field>
            <Field label="Preferred Duration" error={errors.preferredDuration}>
              <Select value={form.preferredDuration} onValueChange={(value) => updateField("preferredDuration", value)}>
                <SelectTrigger><SelectValue placeholder="Select duration" /></SelectTrigger>
                <SelectContent>{durationOptions.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
            <Field label="Preferred Format" error={errors.preferredFormat}>
              <Select value={form.preferredFormat} onValueChange={(value) => updateField("preferredFormat", value)}>
                <SelectTrigger><SelectValue placeholder="Select format" /></SelectTrigger>
                <SelectContent>{formatOptions.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
            <Field label="Preferred Timeline" error={errors.preferredTimeline}>
              <Input value={form.preferredTimeline} onChange={(event) => updateField("preferredTimeline", event.target.value)} required placeholder="This month, next quarter…" />
            </Field>
            <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <Label htmlFor="company-website">Company website</Label>
              <Input id="company-website" tabIndex={-1} value={form.companyWebsite ?? ""} onChange={(event) => updateField("companyWebsite", event.target.value)} autoComplete="off" />
            </div>
            <Field label="Training Objectives / Requirements" error={errors.trainingObjectives} className="md:col-span-2">
              <Textarea value={form.trainingObjectives} onChange={(event) => updateField("trainingObjectives", event.target.value)} required className="min-h-32" />
            </Field>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button variant="brand" size="lg" type="submit" disabled={status === "submitting"}>
              <Send aria-hidden="true" />
              {status === "submitting" ? "Submitting…" : "Submit Corporate Training Enquiry"}
            </Button>
            {status === "success" ? <p className="text-sm font-medium text-success">Your enquiry has been received.</p> : null}
            {status === "error" ? <p className="text-sm font-medium text-destructive">Please call or email Invendo AI Academy.</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-2 ${className ?? ""}`}>
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}
