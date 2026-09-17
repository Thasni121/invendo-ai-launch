"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function AiReadinessAssessment() {
  const [employeeRange, setEmployeeRange] = useState("");
  const [departments, setDepartments] = useState("");
  const [currentUsage, setCurrentUsage] = useState("");
  const [toolsUsed, setToolsUsed] = useState("");
  const [challenges, setChallenges] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [desiredOutcomes, setDesiredOutcomes] = useState("");

  const recommendation = useMemo(() => {
    if (!employeeRange && !departments && !currentUsage && !skillLevel && !desiredOutcomes) {
      return null;
    }

    if (skillLevel === "beginner" || currentUsage === "none") {
      return {
        title: "Recommended starting point: AI Awareness & Productivity Essentials",
        text: "Begin with a 1-day or 2-day program that builds shared understanding, safe usage habits, and practical employee workflows.",
      };
    }

    if (departments.toLowerCase().includes("marketing") || departments.toLowerCase().includes("sales")) {
      return {
        title: "Recommended path: Role-Based AI Training",
        text: "Focus on team-specific communication, content, research, follow-up, reporting, and human review workflows.",
      };
    }

    return {
      title: "Recommended path: Customized Corporate AI Training",
      text: "Map the organization’s current AI maturity to a practical 2-day or 3-day program with department workflows and evaluation.",
    };
  }, [employeeRange, departments, currentUsage, skillLevel, desiredOutcomes]);

  return (
    <section className="section-y bg-section" aria-labelledby="readiness-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-5">
          <span className="eyebrow text-accent-foreground">AI Readiness Assessment</span>
          <h2 id="readiness-heading" className="heading-section">From AI readiness to a corporate proposal</h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Help identify current AI maturity, employee needs, training priorities, and the most practical next training format.
          </p>
          <div className="rounded-lg border border-border bg-card p-5 shadow-card">
            <p className="font-medium text-card-foreground">Organization → AI Readiness Assessment → Training Recommendation → Corporate Proposal</p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 shadow-card md:p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="employee-range">Number of employees</Label>
              <Select value={employeeRange} onValueChange={setEmployeeRange}>
                <SelectTrigger id="employee-range"><SelectValue placeholder="Select range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1–50</SelectItem>
                  <SelectItem value="51-200">51–200</SelectItem>
                  <SelectItem value="201-1000">201–1000</SelectItem>
                  <SelectItem value="1000-plus">1000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="skill-level">Employee skill level</Label>
              <Select value={skillLevel} onValueChange={setSkillLevel}>
                <SelectTrigger id="skill-level"><SelectValue placeholder="Select level" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                  <SelectItem value="advanced">Already using AI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-usage">Current AI usage</Label>
              <Select value={currentUsage} onValueChange={setCurrentUsage}>
                <SelectTrigger id="current-usage"><SelectValue placeholder="Select usage" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Not started</SelectItem>
                  <SelectItem value="limited">Limited team usage</SelectItem>
                  <SelectItem value="active">Active but informal</SelectItem>
                  <SelectItem value="structured">Structured adoption</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tools-used">AI tools currently used</Label>
              <Input id="tools-used" value={toolsUsed} onChange={(event) => setToolsUsed(event.target.value)} placeholder="ChatGPT, Copilot, Gemini…" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="departments">Departments</Label>
              <Input id="departments" value={departments} onChange={(event) => setDepartments(event.target.value)} placeholder="HR, Marketing, Finance, Operations…" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="challenges">Business challenges</Label>
              <Textarea id="challenges" value={challenges} onChange={(event) => setChallenges(event.target.value)} placeholder="Where should AI improve speed, quality, or consistency?" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="desired-outcomes">Desired outcomes</Label>
              <Textarea id="desired-outcomes" value={desiredOutcomes} onChange={(event) => setDesiredOutcomes(event.target.value)} placeholder="Productivity, reporting, documentation, research, communication…" />
            </div>
          </div>

          {recommendation ? (
            <div className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-5">
              <div className="flex gap-3">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">{recommendation.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{recommendation.text}</p>
                  <Button variant="brand" className="mt-4" asChild>
                    <Link to="/contact">
                      Discuss Your Training Needs
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
