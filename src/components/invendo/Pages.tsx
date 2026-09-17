import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, ClipboardCheck, Factory, GraduationCap, Landmark, MonitorCog, Newspaper, ShieldCheck, Stethoscope, UsersRound, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AiReadinessAssessment } from "@/components/invendo/AiReadinessAssessment";
import { ContactForm } from "@/components/invendo/ContactForm";
import { ImageGallery } from "@/components/invendo/ImageGallery";
import { brand, corporateSolutions, courses, departments, industries, industryExperience, photos, programs, projectClients, resourceGroups, routes, sharedCourseDetails, testimonials, trainer, trainingExperience } from "@/lib/invendo-data";

const workflow = ["Work Task", "AI Opportunity", "AI Tool", "Prompt / Workflow", "AI Output", "Human Review", "Real-World Application"];
const journey = ["Understand AI", "Develop AI Skills", "Apply AI", "Improve Productivity", "Build AI Readiness"];
const choiceReasons = ["Practical", "Workplace-Focused", "Role-Based", "Hands-On", "Modern AI", "Real-World Technology Experience"];
const methods = ["Business-context examples", "Hands-on demonstrations", "Guided prompts and workflows", "Responsible AI guardrails", "Role-specific practice", "Follow-up recommendations"];

export function HomePage() {
  return (
    <>
      <section className="hero-band overflow-hidden">
        <div className="container-page grid min-h-[calc(100vh-5rem)] gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-7">
            <span className="eyebrow text-hero-accent">Corporate AI Training</span>
            <div className="space-y-5">
              <h1 className="heading-hero text-hero-foreground">Build an AI-Powered Workforce</h1>
              <p className="max-w-2xl text-xl leading-9 text-hero-muted">
                Move beyond AI awareness to practical employee capabilities with role-based corporate AI training for everyday productivity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild><Link to="/contact">Train Your Workforce <ArrowRight aria-hidden="true" /></Link></Button>
              <Button variant="heroOutline" size="lg" asChild><Link to="/corporate-ai-training">Explore Our Training Solutions</Link></Button>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              <Metric value="50+" label="Industry Partners" />
              <Metric value="1–3" label="Day Formats" />
              <Metric value="Role" label="Based Training" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <HeroImage photo={photos[5]} className="md:col-span-2" />
            <HeroImage photo={photos[1]} />
            <HeroImage photo={photos[10]} />
          </div>
        </div>
      </section>

      <IntroSection />
      <WhyTrainingSection />
      <SolutionsSection />
      <WorkflowSection />
      <TrainingJourneySection />
      <WhyChooseSection />
      <ExperienceSnapshot />
      <TrainerSpotlight />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Invendo" title="Practical AI Expertise for the Future of Work" text="Invendo AI Academy helps organizations build practical AI skills that employees can use in real work, not just classroom theory." image={photos[1]} />
      <TwoColumnSection
        eyebrow="About Invendo AI Academy"
        title="Corporate training connected to practical AI solution experience"
        text="Invendo AI Academy is associated with Invendoi AI Solutions Pvt. Ltd., connecting AI training with practical technology and AI solution experience. The academy is positioned for HR teams, L&D leaders, business heads, and department decision-makers seeking measurable workplace adoption."
        items={["Corporate AI training", "Employee AI upskilling", "Role-based learning", "Hands-on workplace practice"]}
      />
      <section className="section-y bg-section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          <InfoBlock title="Our Approach" items={["Understand the organization’s work", "Identify role-specific AI opportunities", "Teach practical tools and prompts", "Apply AI to real workplace tasks", "Embed responsible AI review"]} />
          <InfoBlock title="Leadership & Trainers" items={[trainer.name, trainer.title, trainer.education, trainer.currentRole, trainer.formerRole]} />
          <InfoBlock title="Expertise" items={trainer.expertise} />
        </div>
      </section>
      <TrainerSpotlight />
      <FinalCta />
    </>
  );
}

export function CorporateTrainingPage() {
  const sections = [
    ["What Is Corporate AI Training?", "Corporate AI training teaches employees how to use AI tools safely, confidently, and productively in everyday business tasks."],
    ["Why Organizations Need AI Training", "AI readiness helps teams reduce repetitive work, improve communication, accelerate analysis, and adopt AI with appropriate human oversight."],
    ["AI Awareness Training", "A practical introduction to what AI is, what generative AI can do, where it helps, and where employees must be careful."],
    ["Generative AI Training", "Hands-on training for large language models, prompts, content, documents, research, presentations, and business use cases."],
    ["AI Productivity Training", "Employees learn how to convert recurring work into AI-assisted workflows with review steps and quality control."],
    ["Role-Based AI Training", "Training is mapped to HR, marketing, sales, finance, operations, IT, management, and business functions."],
    ["Customized Corporate AI Training", "Curriculum can be designed around specific teams, current AI usage, business challenges, and expected outcomes."],
    ["Training Methodology", "Sessions combine explanations, demonstrations, guided practice, use-case exercises, and workplace application planning."],
    ["Responsible AI", "Training includes privacy, security, accuracy, bias, copyright, and human oversight for practical and safe adoption."],
    ["Training Formats", "Programs can be delivered online, on-site, hands-on, or as customized corporate sessions."],
    ["Learning Outcomes", "Employees gain improved AI skills, improved productivity, increased confidence, and practical workplace application."],
    ["Corporate CTA", "Request Corporate Training to discuss the right AI training approach for your organization."],
  ] as const;

  return (
    <>
      <PageHero eyebrow="Corporate AI Training" title="Build an AI-Powered Workforce" text="Practical AI training for employees, teams, and leaders who need to turn AI into measurable workplace capability." image={photos[2]} />
      <section className="section-y bg-background">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map(([title, text]) => <ArticleCard key={title} title={title} text={text} />)}
        </div>
      </section>
      <SolutionsSection />
      <AiReadinessAssessment />
      <FinalCta />
    </>
  );
}

export function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Corporate Courses" title="AI Courses Built for Workplace Productivity" text="Five corporate AI training tracks covering productivity, generative AI, awareness, role-based workflows, and customized programs." image={photos[3]} />
      <section className="section-y bg-background">
        <div className="container-page space-y-8">
          {courses.map((course, index) => (
            <div key={course.slug} id={course.slug} className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <span className="eyebrow text-accent-foreground">Course {index + 1}</span>
                  <h2 className="mt-3 text-2xl font-semibold text-card-foreground md:text-3xl">{course.title}</h2>
                  <p className="mt-3 text-muted-foreground">{course.description}</p>
                </div>
                <Button variant="outline" asChild><Link to="/contact">Get Proposal</Link></Button>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
                <Checklist title="Modules" items={course.modules} />
                <div className="grid gap-4">
                  <MiniList title="Target Audience" items={sharedCourseDetails.audience} />
                  <MiniList title="Objectives" items={sharedCourseDetails.objectives} />
                  <MiniList title="Outcomes" items={sharedCourseDetails.outcomes} />
                  <p className="rounded-md bg-muted p-3 text-sm font-medium text-muted-foreground">Delivery: {sharedCourseDetails.delivery.join(" / ")} · Duration: {sharedCourseDetails.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function TrainingProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Proposed Programs" title="From AI Awareness to AI-Powered Productivity" text="Practical corporate training in 1, 2 and 3-day formats. These are proposed programs and can be customized after understanding your team." image={photos[18]} />
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeader eyebrow="Program Formats" title="Proposed 1, 2 and 3-day structures" text="Each program can be adapted for online, on-site, hands-on, or customized corporate sessions." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {programs.map((program) => (
              <div key={program.duration} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <span className="eyebrow text-accent-foreground">Proposed</span>
                <h2 className="mt-3 text-2xl font-semibold text-card-foreground">{program.duration}</h2>
                <ul className="mt-5 space-y-3">
                  {program.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function IndustriesPage() {
  const icons = [MonitorCog, Stethoscope, Landmark, GraduationCap, Factory, Building2, Newspaper, ClipboardCheck];
  return (
    <>
      <PageHero eyebrow="Industries" title="Corporate AI Training Across Professional Environments" text="Industry-aware training that links AI opportunities to realistic employee workflows, risks, and adoption priorities." image={photos[7]} />
      <section className="section-y bg-background">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <div key={industry} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-semibold text-card-foreground">{industry}</h2>
                <div className="mt-5 grid gap-4 text-sm leading-6 text-muted-foreground">
                  <p><strong className="text-card-foreground">Industry Introduction:</strong> AI adoption starts with a practical view of how this sector works.</p>
                  <p><strong className="text-card-foreground">AI Opportunities:</strong> Identify repetitive, knowledge-heavy, communication, analysis, and decision-support tasks.</p>
                  <p><strong className="text-card-foreground">Workplace Use Cases:</strong> Convert daily work into prompt-led workflows, tool selection, output review, and team adoption.</p>
                  <p><strong className="text-card-foreground">Employee AI Skills:</strong> Prompting, tool usage, responsible AI, productivity workflows, and human quality control.</p>
                  <p><strong className="text-card-foreground">Relevant Training:</strong> AI Awareness, Generative AI, AI Productivity, Role-Based AI, or Customized Corporate AI Training.</p>
                  <p><strong className="text-card-foreground">FAQ:</strong> What can employees safely automate? Start with assisted drafts, analysis, research, and documentation, then review every output.</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Documented Experience" title="Experience is stated by category" text="Training experience and technology engagements are intentionally separated to keep each relationship accurate." /><div className="mt-8 grid gap-3 md:grid-cols-2">{industryExperience.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</div></div></section>
      <FinalCta />
    </>
  );
}

export function DepartmentsPage() {
  return (
    <>
      <PageHero eyebrow="Departments" title="Role-Based AI Training for Every Business Team" text="Department-specific AI workflows for HR, marketing, sales, finance, operations, IT, management, and business teams." image={photos[4]} />
      <section className="section-y bg-background">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => (
            <div key={department} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold text-card-foreground">{department}</h2>
              <MiniList title="Challenges" items={["Repetitive tasks", "Scattered information", "Communication load"]} />
              <MiniList title="AI Opportunities" items={["Drafting", "Research", "Analysis", "Workflow support"]} />
              <MiniList title="AI Workflows" items={["Task mapping", "Prompt templates", "Output review"]} />
              <MiniList title="Expected Outcomes" items={["Faster work", "Better confidence", "Responsible usage"]} />
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function ExperiencePage() {
  return (
    <>
      <PageHero eyebrow="Experience" title="Projects, Training Experience and Organizations" text="A clear view of technology engagements, documented training experience, case studies, and organization categories." image={photos[0]} />
      <OrganizationBands />
      <ExperienceSnapshot />
      <section className="section-y bg-background"><div className="container-page"><SectionHeader eyebrow="Photo Documentation" title="Documented photographs and visual references" text="All supplied photographs are used with accurate captions and accessible descriptions." /><div className="mt-10"><ImageGallery /></div></div></section>
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Project Clients / Technology Engagements" title="Real-World AI Project Experience" text="Technology experience across AI surveillance, computer vision, monitoring systems, control room solutions, government AI applications, robotics, and automation." image={photos[10]} />
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeader eyebrow="Important Classification" title="Project clients are not presented as corporate training clients" text="These organizations are shown only as Project Clients / Technology Engagements unless corporate training is explicitly verified." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectClients.map((client) => <ArticleCard key={client} title={client} text="Project client / technology engagement reference." />)}
          </div>
          <div className="mt-10"><ImageGallery category="Project Clients / Technology Engagements" /></div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function TrainingExperiencePage() {
  return (
    <>
      <PageHero eyebrow="Training Experience" title="Training Experience Across Professional Environments" text="Documented AI training sessions across media, healthcare, education, and international professional environments." image={photos[6]} />
      <section className="section-y bg-background"><div className="container-page grid gap-5 md:grid-cols-2">{trainingExperience.map((item) => <TrainingCard key={item.name} item={item} />)}</div></section>
      <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Training Photographs" title="Documented sessions" text="Photos are used as supplied and not replaced with generic stock imagery." /><div className="mt-10"><ImageGallery category="Training Experience" /></div></div></section>
      <FinalCta />
    </>
  );
}

export function TrainersPage() {
  return (
    <>
      <PageHero eyebrow="Trainers" title="Learn From AI & Technology Experts" text="Training led by practical AI, robotics, automation, and computer vision experience." image={photos[1]} />
      <TrainerSpotlight />
      <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Expertise" title="Built around practical deployment-ready AI" text={trainer.philosophy} /><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{trainer.expertise.map((item) => <ArticleCard key={item} title={item} text="Applied through business examples, institutional sessions, and workplace-ready training methods." />)}</div></div></section>
    </>
  );
}

export function CaseStudiesPage() {
  const steps = ["Camera / Video Feed", "AI-Based Image / Video Processing", "Wildlife Detection", "Species Identification", "Alert Generation", "Authority / Response Team", "Appropriate Response"];
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Real-World AI Challenges. Practical Solutions." text="Case studies are framed as Problem → Approach → Solution → Outcome without invented performance statistics." image={photos[11]} />
      <section className="section-y bg-background">
        <div className="container-page rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
          <span className="eyebrow text-accent-foreground">Kerala Forest Department · Forest & Wildlife Management</span>
          <h2 className="mt-3 text-3xl font-semibold text-card-foreground">AI-Based Wildlife Surveillance & Alert System</h2>
          <p className="mt-4 text-muted-foreground">Publicly available project information describes the system and its purpose. No numerical performance statistics are stated here unless verified later.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Problem", "Wildlife monitoring requires timely detection, alerts, and coordinated response."],
              ["Approach", "Use AI surveillance and computer vision to support monitoring workflows."],
              ["AI Solution", "Camera feeds are processed for detection, species identification, and alert generation."],
              ["Implementation", "Monitoring systems and control room workflows support authority review and response."],
              ["Outcome", "The system supports practical wildlife monitoring and response decision workflows."],
            ].map(([title, text]) => <ArticleCard key={title} title={title} text={text} />)}
          </div>
          <div className="mt-8"><WorkflowPills items={steps} /></div>
        </div>
      </section>
      <section className="section-y bg-section"><div className="container-page"><ImageGallery category="Project & Institutional Experience" /></div></section>
      <FinalCta />
    </>
  );
}

export function OrganizationsPage() {
  return (
    <>
      <PageHero eyebrow="Organizations" title="Organizations, Experience and Partners" text="Organization relationships are clearly separated so project clients, training experience, and industry partner claims are not merged." image={photos[13]} />
      <OrganizationBands />
      <section className="section-y bg-background"><div className="container-page"><SectionHeader eyebrow="Complete Photo Documentation" title="All supplied photographs are represented" text="The gallery preserves the documented photographs and captions across training, project, international, and company milestone references." /><div className="mt-10"><ImageGallery /></div></div></section>
    </>
  );
}

export function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What Our Learners & Organizations Say" text="Documented feedback from professional training environments, shown without fabricated additions." image={photos[4]} />
      <section className="section-y bg-background"><div className="container-page grid gap-5 md:grid-cols-2">{testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}</div></section>
      <section className="section-y bg-section"><div className="container-page grid gap-4 md:grid-cols-4">{["Corporate/Professional Training", "Faculty Training", "Learner Experience", "Technology/Project Experience"].map((item) => <ArticleCard key={item} title={item} text="Category included for future verified testimonials and experience references." />)}</div></section>
    </>
  );
}

export function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="AI Knowledge for the Future of Work" text="Answer-led resources for corporate AI training, employee AI upskilling, productivity, generative AI, use cases, and responsible AI adoption." image={photos[2]} />
      <section className="section-y bg-background"><div className="container-page grid gap-5 md:grid-cols-2">{resourceGroups.map((group) => <ResourceGroup key={group.title} group={group} />)}</div></section>
      <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="AI Use Cases" title="Industry → Department → Business Problem → AI Application" text="Use cases are structured to support answer engines and future article expansion." /><div className="mt-8 grid gap-4 md:grid-cols-3"><ArticleCard title="Industry" text="Start with the operational context and constraints." /><ArticleCard title="Department" text="Map the team and daily responsibilities." /><ArticleCard title="AI Application" text="Define the workflow, output, review step, and responsible usage." /></div></div></section>
      <FinalCta />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Build Your AI-Powered Workforce" text="Tell us your organization’s goals and team profile so Invendo AI Academy can identify the right training approach." image={photos[8]} />
      <ContactForm />
      <AiReadinessAssessment />
    </>
  );
}

export function PrivacyPolicyPage() {
  return <PolicyPage title="Privacy Policy" text="Corporate training enquiries are used to respond to training requests, prepare proposals, and coordinate communication with the organization. Personal information is handled for enquiry follow-up and is not displayed publicly." />;
}

export function TermsPage() {
  return <PolicyPage title="Terms & Conditions" text="Training scope, format, duration, schedule, commercial terms, and deliverables are confirmed through a written corporate proposal before a session is finalized." />;
}

function IntroSection() {
  return <TwoColumnSection eyebrow="Corporate AI Introduction" title="Turn AI Into Everyday Workplace Productivity" text={brand.positioning} items={["AI training for employees", "Employee AI upskilling", "AI productivity training", "Generative AI corporate training", "Role-based AI training"]} />;
}

function WhyTrainingSection() {
  return <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Why AI-Ready Employees Matter" title="AI adoption becomes valuable when people know where, when, and how to use it" text="Organizations need employees who can identify AI opportunities, use tools safely, improve daily output, and keep human review in the loop." /><div className="mt-10 grid gap-5 md:grid-cols-3">{["Reduce repetitive work", "Improve documentation and communication", "Support analysis and decision preparation", "Build responsible AI habits", "Increase team confidence", "Create practical adoption pathways"].map((item) => <ArticleCard key={item} title={item} text="Training connects the AI concept to real workplace actions and team-ready usage." />)}</div></div></section>;
}

function SolutionsSection() {
  return <section className="section-y bg-background"><div className="container-page"><SectionHeader eyebrow="Corporate Training Solutions" title="Training solutions for practical AI adoption" text="Choose focused programs or combine tracks into a customized corporate training plan." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{corporateSolutions.map((item) => <div key={item.title} className="rounded-lg border border-border bg-card p-5 shadow-card"><span className="text-sm font-semibold text-primary">{item.number}</span><h2 className="mt-4 text-xl font-semibold text-card-foreground">{item.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div></div></section>;
}

function WorkflowSection() {
  return <section className="section-y bg-ink text-ink-foreground"><div className="container-page"><SectionHeader eyebrow="AI Productivity Workflow" title="A clear path from work task to real-world application" text="Employees learn to identify the task, select the right AI opportunity, create the prompt or workflow, review output, and apply it responsibly." inverse /><div className="mt-10"><WorkflowPills items={workflow} /></div></div></section>;
}

function TrainingJourneySection() {
  return <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Training Journey" title="From understanding AI to building AI readiness" text="The learning path is designed to move teams from basic awareness into confident workplace application." /><div className="mt-10 grid gap-5 md:grid-cols-5">{journey.map((item, index) => <div key={item} className="rounded-lg border border-border bg-card p-5 shadow-card"><span className="text-sm font-semibold text-primary">0{index + 1}</span><h2 className="mt-4 text-xl font-semibold text-card-foreground">{item}</h2></div>)}</div></div></section>;
}

function WhyChooseSection() {
  return <section className="section-y bg-background"><div className="container-page"><SectionHeader eyebrow="Why Organizations Choose Invendo" title="Premium corporate training grounded in practical technology experience" text="The training is designed for business leaders and employees who need applicable AI skills rather than theory-only instruction." /><div className="mt-10 grid gap-4 md:grid-cols-3">{choiceReasons.map((reason) => <CheckItem key={reason}>{reason}</CheckItem>)}</div></div></section>;
}

function ExperienceSnapshot() {
  return <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Experience" title="Project experience and training experience are clearly separated" text="Government and institutional technology engagements are listed separately from documented training sessions." /><div className="mt-10 grid gap-6 lg:grid-cols-2"><div className="rounded-lg border border-border bg-card p-6 shadow-card"><h2 className="text-2xl font-semibold text-card-foreground">Project Clients / Technology Engagements</h2><p className="mt-3 text-sm text-muted-foreground">Not presented as corporate training clients unless explicitly verified.</p><div className="mt-5 grid gap-3">{projectClients.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</div><Button variant="outline" className="mt-6" asChild><Link to="/projects">View Projects</Link></Button></div><div className="rounded-lg border border-border bg-card p-6 shadow-card"><h2 className="text-2xl font-semibold text-card-foreground">Training Experience</h2><p className="mt-3 text-sm text-muted-foreground">Documented training environments and participant details.</p><div className="mt-5 grid gap-3">{trainingExperience.map((item) => <CheckItem key={item.name}>{item.name} · {item.participants} · {item.duration}</CheckItem>)}</div><Button variant="outline" className="mt-6" asChild><Link to="/training-experience">View Training Experience</Link></Button></div></div></div></section>;
}

function TrainerSpotlight() {
  return <section className="section-y bg-background"><div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><figure className="overflow-hidden rounded-lg border border-border bg-card shadow-card"><img src={photos[1].src} alt="Muhammed Siddique speaking at an AI training session" className="aspect-[4/5] w-full object-cover" loading="lazy" /><figcaption className="p-4 text-sm text-muted-foreground">{trainer.name} — {trainer.title}</figcaption></figure><div className="space-y-6"><span className="eyebrow text-accent-foreground">Trainer</span><h2 className="heading-section">{trainer.name}</h2><p className="text-xl font-medium text-primary">{trainer.title}</p><p className="text-lg leading-8 text-muted-foreground">{trainer.education}. {trainer.currentRole}. {trainer.formerRole}.</p><div className="grid gap-3 sm:grid-cols-2">{trainer.expertise.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</div><blockquote className="border-l-4 border-primary pl-5 text-xl font-semibold leading-8 text-foreground">“{trainer.philosophy}”</blockquote><Button variant="brand" asChild><Link to="/trainers">Meet the Trainer</Link></Button></div></div></section>;
}

function TestimonialsSection() {
  return <section className="section-y bg-section"><div className="container-page"><SectionHeader eyebrow="Testimonials" title="Documented learner feedback" text="Only supplied testimonials are shown; no additional quotes or statistics have been invented." /><div className="mt-10 grid gap-5 md:grid-cols-2">{testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}</div></div></section>;
}

function FinalCta() {
  return <section className="section-y bg-cta text-cta-foreground"><div className="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><span className="eyebrow text-cta-accent">Corporate AI Training</span><h2 className="mt-3 text-4xl font-semibold md:text-5xl">Build Your AI-Powered Workforce</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-cta-muted">Request Corporate Training or talk to an AI training expert about the right path for your organization.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="lg" asChild><Link to="/contact">Request Corporate Training</Link></Button><Button variant="heroOutline" size="lg" asChild><a href={`tel:${brand.phone.replace(/\s/g, "")}`}>Talk to an AI Training Expert</a></Button></div></div></section>;
}

function OrganizationBands() {
  return <section className="section-y bg-section"><div className="container-page space-y-6"><CategoryPanel number="01" title="Project Clients / Technology Engagements" text="Shown only as technology engagements, not corporate training clients." items={projectClients} /><CategoryPanel number="02" title="Training Experience" text="Documented training environments and professional sessions." items={trainingExperience.map((item) => item.name)} /><CategoryPanel number="03" title="Industry Partners" text="A separate relationship category stated as 50+ Industry Partners." items={["50+ Industry Partners"]} /></div></section>;
}

function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: (typeof photos)[number] }) {
  return <section className="bg-hero text-hero-foreground"><div className="container-page grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div className="space-y-6"><span className="eyebrow text-hero-accent">{eyebrow}</span><h1 className="heading-hero">{title}</h1><p className="max-w-2xl text-xl leading-9 text-hero-muted">{text}</p><div className="flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="lg" asChild><Link to="/contact">Request Corporate Training <ArrowRight aria-hidden="true" /></Link></Button><Button variant="heroOutline" size="lg" asChild><Link to="/corporate-ai-training">Explore Solutions</Link></Button></div></div><figure className="overflow-hidden rounded-lg border border-hero-line bg-hero-panel shadow-elevated"><img src={image.src} alt={image.alt} className="aspect-[16/11] w-full object-cover" loading="eager" /><figcaption className="p-4 text-sm text-hero-muted">{image.caption}</figcaption></figure></div></section>;
}

function TwoColumnSection({ eyebrow, title, text, items }: { eyebrow: string; title: string; text: string; items: readonly string[] }) {
  return <section className="section-y bg-background"><div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"><div><span className="eyebrow text-accent-foreground">{eyebrow}</span><h2 className="heading-section mt-4">{title}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p></div><div className="grid gap-3">{items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</div></div></section>;
}

function SectionHeader({ eyebrow, title, text, inverse = false }: { eyebrow: string; title: string; text: string; inverse?: boolean }) {
  return <div className="max-w-3xl"><span className={`eyebrow ${inverse ? "text-hero-accent" : "text-accent-foreground"}`}>{eyebrow}</span><h2 className={`heading-section mt-4 ${inverse ? "text-ink-foreground" : "text-foreground"}`}>{title}</h2><p className={`mt-4 text-lg leading-8 ${inverse ? "text-ink-muted" : "text-muted-foreground"}`}>{text}</p></div>;
}

function ArticleCard({ title, text }: { title: string; text: string }) {
  return <article className="rounded-lg border border-border bg-card p-5 shadow-card"><h2 className="text-xl font-semibold text-card-foreground">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>;
}

function InfoBlock({ title, items }: { title: string; items: readonly string[] }) {
  return <div className="rounded-lg border border-border bg-card p-6 shadow-card"><h2 className="text-2xl font-semibold text-card-foreground">{title}</h2><ul className="mt-5 space-y-3">{items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul></div>;
}

function MiniList({ title, items }: { title: string; items: readonly string[] }) {
  return <div className="mt-5"><h3 className="text-sm font-semibold uppercase tracking-normal text-card-foreground">{title}</h3><ul className="mt-3 space-y-2 text-sm text-muted-foreground">{items.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></div>;
}

function Checklist({ title, items }: { title: string; items: readonly string[] }) {
  return <div><h3 className="text-sm font-semibold uppercase tracking-normal text-card-foreground">{title}</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</div></div>;
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-3 rounded-md border border-border bg-muted/70 p-3 text-sm leading-6 text-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{children}</span></div>;
}

function WorkflowPills({ items }: { items: readonly string[] }) {
  return <ol className="grid gap-3 md:grid-cols-7">{items.map((item, index) => <li key={item} className="relative rounded-lg border border-hero-line bg-hero-panel p-4 text-sm font-medium text-hero-foreground"><span className="mb-3 block text-xs text-hero-accent">0{index + 1}</span>{item}</li>)}</ol>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-lg border border-hero-line bg-hero-panel p-4"><p className="text-2xl font-semibold text-hero-foreground">{value}</p><p className="mt-1 text-sm text-hero-muted">{label}</p></div>;
}

function HeroImage({ photo, className = "" }: { photo: (typeof photos)[number]; className?: string }) {
  return <figure className={`overflow-hidden rounded-lg border border-hero-line bg-hero-panel shadow-elevated ${className}`}><img src={photo.src} alt={photo.alt} className="aspect-[16/10] w-full object-cover" loading="eager" /><figcaption className="p-3 text-xs text-hero-muted">{photo.caption}</figcaption></figure>;
}

function CategoryPanel({ number, title, text, items }: { number: string; title: string; text: string; items: readonly string[] }) {
  return <div className="rounded-lg border border-border bg-card p-6 shadow-card"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><span className="text-sm font-semibold text-primary">{number}</span><h2 className="mt-2 text-2xl font-semibold text-card-foreground">{title}</h2><p className="mt-2 text-sm text-muted-foreground">{text}</p></div><BadgeCheck className="h-8 w-8 text-primary" aria-hidden="true" /></div><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-md border border-border bg-muted px-3 py-2 text-sm font-medium text-foreground">{item}</span>)}</div></div>;
}

function TrainingCard({ item }: { item: (typeof trainingExperience)[number] }) {
  return <article className="rounded-lg border border-border bg-card p-6 shadow-card"><span className="eyebrow text-accent-foreground">{item.field}</span><h2 className="mt-3 text-2xl font-semibold text-card-foreground">{item.name}</h2><div className="mt-4 grid gap-2 text-sm text-muted-foreground"><p>{item.participants}</p><p>{item.duration}</p><p>{item.format}</p></div><MiniList title="Training" items={item.focus} /></article>;
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return <figure className="rounded-lg border border-border bg-card p-6 shadow-card"><span className="eyebrow text-accent-foreground">{item.category}</span><blockquote className="mt-4 text-xl font-semibold leading-8 text-card-foreground">“{item.quote}”</blockquote><figcaption className="mt-5 text-sm text-muted-foreground"><strong className="text-card-foreground">{item.name}</strong>, {item.role} · {item.organization}</figcaption></figure>;
}

function ResourceGroup({ group }: { group: (typeof resourceGroups)[number] }) {
  return <section className="rounded-lg border border-border bg-card p-6 shadow-card"><h2 className="text-2xl font-semibold text-card-foreground">{group.title}</h2><div className="mt-5 grid gap-4">{group.items.map((question) => <article key={question} className="border-t border-border pt-4"><h3 className="font-semibold text-card-foreground">{question}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Direct Answer: Corporate AI training helps employees understand and apply AI tools to practical workplace tasks with responsible human oversight.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Example: teams can use AI for first drafts, summaries, research support, data interpretation, and workflow improvement before expert review.</p><Link to="/corporate-ai-training" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore training <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></article>)}</div></section>;
}

function PolicyPage({ title, text }: { title: string; text: string }) {
  return <section className="section-y bg-background"><div className="container-page max-w-3xl"><span className="eyebrow text-accent-foreground">Invendo AI Academy</span><h1 className="heading-section mt-4">{title}</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">{text}</p><Button variant="brand" className="mt-8" asChild><Link to="/contact">Contact Invendo AI Academy</Link></Button></div></section>;
}
