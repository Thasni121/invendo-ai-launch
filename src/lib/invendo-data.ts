import logo from "@/assets/invendo/logo.jpeg.asset.json";
import photo000 from "@/assets/invendo/photo-000.webp.asset.json";
import photo001 from "@/assets/invendo/photo-001.webp.asset.json";
import photo002 from "@/assets/invendo/photo-002.webp.asset.json";
import photo003 from "@/assets/invendo/photo-003.webp.asset.json";
import photo004 from "@/assets/invendo/photo-004.webp.asset.json";
import photo005 from "@/assets/invendo/photo-005.webp.asset.json";
import photo006 from "@/assets/invendo/photo-006.webp.asset.json";
import photo007 from "@/assets/invendo/photo-007.webp.asset.json";
import photo008 from "@/assets/invendo/photo-008.webp.asset.json";
import photo009 from "@/assets/invendo/photo-009.webp.asset.json";
import photo010 from "@/assets/invendo/photo-010.webp.asset.json";
import photo011 from "@/assets/invendo/photo-011.webp.asset.json";
import photo012 from "@/assets/invendo/photo-012.webp.asset.json";
import photo013 from "@/assets/invendo/photo-013.webp.asset.json";
import photo014 from "@/assets/invendo/photo-014.webp.asset.json";
import photo015 from "@/assets/invendo/photo-015.webp.asset.json";
import photo016 from "@/assets/invendo/photo-016.webp.asset.json";
import photo017 from "@/assets/invendo/photo-017.webp.asset.json";
import photo018 from "@/assets/invendo/photo-018.webp.asset.json";

export const brand = {
  name: "INVENDO AI ACADEMY",
  positioning:
    "Invendo AI Academy helps organizations turn AI into everyday employee productivity through practical, role-based corporate AI training.",
  descriptor: "Corporate AI Training & Employee Upskilling Partner",
  phone: "+91 97449 88555",
  email: "invendoaiacademy@gmail.com",
  address: "Door No. 54/3246, Orient Square, 3rd Floor, Kadavanthra Junction, Cochin – 682020, Kerala, India",
  hours: "Monday–Saturday, 9 AM–6 PM",
  logo: logo.url,
};

export const routes = {
  home: "/",
  about: "/about",
  corporate: "/corporate-ai-training",
  courses: "/corporate-courses",
  programs: "/training-programs",
  industries: "/industries",
  departments: "/departments",
  experience: "/experience",
  projects: "/projects",
  trainingExperience: "/training-experience",
  trainers: "/trainers",
  caseStudies: "/case-studies",
  organizations: "/organizations",
  testimonials: "/testimonials",
  resources: "/resources",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
} as const;

export const photos = [
  {
    id: "dubai-collaboration",
    src: photo000.url,
    category: "International Training & Collaboration",
    caption: "Dubai AI collaboration with the Consulate General of India, Dubai.",
    alt: "Invendo representative at a Dubai AI collaboration event with the Consulate General of India, Dubai",
  },
  {
    id: "startup-middle-east",
    src: photo001.url,
    category: "International Training & Collaboration",
    caption: "AI session in Dubai at Startup Middle East.",
    alt: "Muhammed Siddique speaking during an AI session in Dubai at Startup Middle East",
  },
  {
    id: "dubai-session-room",
    src: photo002.url,
    category: "International Training & Collaboration",
    caption: "Corporate AI training session in Dubai.",
    alt: "Participants attending a corporate AI training session in Dubai",
  },
  {
    id: "dubai-hands-on",
    src: photo003.url,
    category: "International Training & Collaboration",
    caption: "Hands-on AI practical session in Dubai.",
    alt: "Participants working on laptops during a hands-on AI practical session in Dubai",
  },
  {
    id: "media-practical",
    src: photo004.url,
    category: "Training Experience",
    caption: "AI practical session with Shani Prabhakar.",
    alt: "AI practical session with Shani Prabhakar during professional media training",
  },
  {
    id: "manorama-hands-on",
    src: photo005.url,
    category: "Training Experience",
    caption: "Hands-on AI practical session at Malayala Manorama TV channel.",
    alt: "Hands-on AI practical session with media professionals at Malayala Manorama TV channel",
  },
  {
    id: "manorama-session",
    src: photo006.url,
    category: "Training Experience",
    caption: "Malayala Manorama media team training session.",
    alt: "Malayala Manorama media team attending an AI training session",
  },
  {
    id: "hospital-group",
    src: photo007.url,
    category: "Training Experience",
    caption: "Ananthapuri Hospital doctors and faculty training.",
    alt: "Doctors and faculty group photo from Ananthapuri Hospital AI training",
  },
  {
    id: "dubai-group",
    src: photo008.url,
    category: "International Training & Collaboration",
    caption: "Dubai training engagement group photograph.",
    alt: "Group photograph from a Dubai AI training engagement",
  },
  {
    id: "forest-delhi",
    src: photo009.url,
    category: "Project & Institutional Experience",
    caption: "Delhi training session for forest department officials from different states.",
    alt: "Training session in Delhi for forest department officials from different states",
  },
  {
    id: "forest-technical-session",
    src: photo010.url,
    category: "Project & Institutional Experience",
    caption: "Forest and wildlife technology session using monitoring and control room workflows.",
    alt: "Technical session on forest and wildlife monitoring technology workflows",
  },
  {
    id: "mediaone-coverage",
    src: photo011.url,
    category: "Project & Institutional Experience",
    caption: "Invendo AI project covered by MediaOne News.",
    alt: "MediaOne News coverage of an Invendo AI project",
  },
  {
    id: "website-inauguration",
    src: photo012.url,
    category: "Company Milestones",
    caption: "Invendo website inauguration.",
    alt: "Invendo website inauguration event",
  },
  {
    id: "isro-logo",
    src: photo013.url,
    category: "Project Clients / Technology Engagements",
    caption: "ISRO technology engagement reference.",
    alt: "ISRO logo used as a project client and technology engagement reference",
  },
  {
    id: "vssc-logo",
    src: photo014.url,
    category: "Project Clients / Technology Engagements",
    caption: "Vikram Sarabhai Space Centre project reference.",
    alt: "Vikram Sarabhai Space Centre signage used as a project engagement reference",
  },
  {
    id: "kerala-police-logo",
    src: photo015.url,
    category: "Project Clients / Technology Engagements",
    caption: "Kerala Police Department project reference.",
    alt: "Kerala Police Department emblem used as a project engagement reference",
  },
  {
    id: "kerala-forest-logo",
    src: photo016.url,
    category: "Project Clients / Technology Engagements",
    caption: "Kerala Forest Department project reference.",
    alt: "Kerala Forest Department logo used as a project engagement reference",
  },
  {
    id: "health-team-session",
    src: photo017.url,
    category: "Training Experience",
    caption: "Healthcare team AI training session.",
    alt: "Healthcare team participating in a practical AI training session",
  },
  {
    id: "ai-training-session",
    src: photo018.url,
    category: "Training Experience",
    caption: "AI training session with professional participants.",
    alt: "Professional participants attending an AI training session",
  },
] as const;

export const projectClients = [
  "ISRO",
  "VSSC",
  "Kerala Forest Department",
  "Tamil Nadu Forest Department",
  "Kerala Police Department",
];

export const trainingExperience = [
  {
    name: "Malayala Manorama",
    field: "Media",
    participants: "50 participants",
    duration: "2 Days",
    format: "On-site",
    focus: ["AI Awareness", "Generative AI", "AI Productivity", "Practical AI Experience", "Introduction to AI Tools"],
  },
  {
    name: "Ananthapuri Hospital",
    field: "Healthcare",
    participants: "70+ participants",
    duration: "1 Day",
    format: "On-site",
    focus: ["AI Awareness", "Practical AI Sessions", "Introduction to AI Tools"],
  },
  {
    name: "Teachers & Faculty",
    field: "Education",
    participants: "30+ participants",
    duration: "2 Days",
    format: "On-site",
    focus: ["AI Awareness", "Practical AI Sessions", "Introduction to AI Tools", "AI Upskilling"],
  },
  {
    name: "Dubai Training Engagements",
    field: "International professional sessions",
    participants: "Professional groups",
    duration: "Custom sessions",
    format: "In-person",
    focus: ["AI collaboration", "Practical AI sessions", "Professional AI adoption"],
  },
] as const;

export const trainer = {
  name: "Muhammed Siddique",
  title: "AI Trainer | Robotics Specialist | Technology Leader",
  education: "M.Tech in Robotics & Automation",
  currentRole: "CTO — Invendoi AI Solutions Pvt. Ltd.",
  formerRole: "Former Vice Principal — Travancore Engineering College",
  expertise: [
    "AI & Generative AI",
    "Robotics & Automation",
    "Computer Vision & Surveillance AI",
    "Government & Institutional Sessions",
    "Industry & International Speaking Engagements",
  ],
  philosophy: "Making Artificial Intelligence Practical, Useful & Deployment-Ready.",
};

export const corporateSolutions = [
  {
    number: "01",
    title: "AI Awareness Training",
    text: "Build a clear, practical understanding of AI, modern AI tools, risks, limits, and responsible adoption.",
  },
  {
    number: "02",
    title: "Generative AI Training",
    text: "Help employees use text, document, image, research, and presentation tools confidently in business contexts.",
  },
  {
    number: "03",
    title: "AI Productivity Training",
    text: "Convert daily work into AI-supported workflows for communication, analysis, documentation, and follow-up.",
  },
  {
    number: "04",
    title: "Role-Based AI Training",
    text: "Adapt AI learning to HR, marketing, sales, finance, operations, IT, management, and business teams.",
  },
  {
    number: "05",
    title: "Customized Corporate AI Training",
    text: "Design a focused curriculum around the organization, teams, current tools, challenges, and desired outcomes.",
  },
] as const;

export const courses = [
  {
    title: "AI Productivity Training",
    slug: "ai-productivity-training",
    description: "Workplace-focused training for using AI to improve everyday employee productivity.",
    modules: [
      "AI in the Workplace",
      "Generative AI Fundamentals",
      "AI Tools for Professionals",
      "Prompt Engineering",
      "Documents & Communication",
      "Data & Information Analysis",
      "AI-Powered Workflow Automation",
      "Responsible AI",
      "Hands-on Workplace Use Cases",
    ],
  },
  {
    title: "Generative AI Corporate Training",
    slug: "generative-ai-corporate-training",
    description: "Practical training on modern generative AI tools, large language models, and business use cases.",
    modules: [
      "Introduction to Generative AI",
      "Large Language Models",
      "Generative AI Tools",
      "Prompt Engineering",
      "Text & Content Generation",
      "Document & Knowledge Work",
      "AI-Assisted Research and Analysis",
      "Image, Presentation & Media AI",
      "Responsible Generative AI",
      "Practical Business Use Cases",
    ],
  },
  {
    title: "AI Awareness Training",
    slug: "ai-awareness-training",
    description: "A clear executive and employee introduction to AI, risks, opportunities, and first practical steps.",
    modules: [
      "What Is Artificial Intelligence?",
      "AI vs Generative AI",
      "How Modern AI Works",
      "Common AI Tools",
      "What AI Can and Cannot Do",
      "AI Opportunities in the Workplace",
      "AI Risks and Limitations",
      "Privacy, Security & Responsible AI",
      "Practical AI Demonstrations",
      "Getting Started with AI",
    ],
  },
  {
    title: "Role-Based AI Training",
    slug: "role-based-ai-training",
    description: "AI learning mapped to the specific tasks, workflows, and decisions handled by each team.",
    modules: [
      "Understanding AI for the Specific Role",
      "Identifying Repetitive Tasks",
      "AI Tool Selection",
      "Prompt Engineering",
      "Role-Specific Workflows",
      "AI-Assisted Communication",
      "AI-Assisted Analysis",
      "Automation Opportunities",
      "Human Review & Quality Control",
      "Practical Role-Based Use Cases",
    ],
  },
  {
    title: "Customized Corporate AI Training",
    slug: "customized-corporate-ai-training",
    description: "Custom training designed after understanding the organization, teams, roles, and use cases.",
    modules: [
      "Assessment",
      "Requirements Analysis",
      "Role Analysis",
      "Curriculum Design",
      "Training",
      "Hands-on Practice",
      "Evaluation",
      "Follow-up",
    ],
  },
] as const;

export const sharedCourseDetails = {
  audience: ["HR professionals", "Marketing teams", "Sales teams", "Finance teams", "Managers", "Business professionals"],
  objectives: [
    "Understand practical AI opportunities in daily work",
    "Build confidence with modern AI tools",
    "Apply prompts and workflows to realistic business tasks",
    "Use AI responsibly with human review and quality control",
  ],
  outcomes: [
    "Improved AI skills",
    "Improved productivity",
    "Increased confidence",
    "Practical workplace application",
  ],
  delivery: ["Online", "On-site", "Hands-on"],
  duration: "1–3 days, customized",
};

export const industries = [
  "IT & Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Media",
  "Professional Services",
] as const;

export const industryExperience = [
  "Media: AI training with media professionals",
  "Healthcare: AI awareness, practical usage, workplace tools",
  "Education: teachers and faculty training",
  "Space & Aerospace: ISRO and VSSC project experience",
  "Forest & Wildlife: Kerala and Tamil Nadu Forest Departments",
  "Police & Public Safety: Kerala Police Department project experience",
] as const;

export const departments = ["HR", "Marketing", "Sales", "Finance", "Operations", "IT", "Management", "Business"] as const;

export const programs = [
  {
    duration: "1-Day Proposed Programs",
    items: ["AI Awareness & Essential Skills", "AI Productivity Essentials"],
  },
  {
    duration: "2-Day Proposed Programs",
    items: [
      "Generative AI & Workplace Productivity",
      "Practical Prompt Engineering for Professionals",
      "AI Tools for Business Teams",
    ],
  },
  {
    duration: "3-Day Proposed Programs",
    items: ["AI-Powered Workforce Program", "Advanced Generative AI & Productivity", "Role-Based AI Training"],
  },
] as const;

export const testimonials = [
  {
    quote: "The training was very helpful. It helped us easily understand how AI can be used in our work.",
    name: "Shani Prebhaker",
    role: "News Reader",
    organization: "Malayala Manorama",
    category: "Corporate/Professional Training",
  },
  {
    quote: "The training process was very helpful. It showed us how AI can make our work easier and more efficient.",
    name: "Sreeja.i",
    role: "Lecturer",
    organization: "Ananthapuri Hospital",
    category: "Faculty Training",
  },
] as const;

export const resourceGroups = [
  {
    title: "Corporate AI",
    items: [
      "What Is Corporate AI Training?",
      "Why Should Companies Train Employees in AI?",
      "How to Build an AI-Ready Workforce",
      "How to Start AI Adoption in an Organization",
      "What AI Skills Should Employees Learn?",
    ],
  },
  {
    title: "AI Productivity",
    items: [
      "How AI Can Improve Employee Productivity",
      "AI Workflows for Employees",
      "AI Tools for Workplace Productivity",
      "How Employees Can Use Generative AI",
    ],
  },
  {
    title: "Generative AI",
    items: [
      "What Is Generative AI?",
      "What Are Large Language Models?",
      "What Is Prompt Engineering?",
      "How Can Businesses Use Generative AI?",
    ],
  },
  {
    title: "Responsible AI",
    items: ["AI Privacy", "AI Security", "AI Accuracy", "AI Bias", "Copyright", "Human Oversight", "Responsible AI Adoption"],
  },
] as const;
