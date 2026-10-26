export type Project = {
  id: string;
  title: string;
  organization: string;
  context?: string;
  summary: string;
  highlights: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  /** Short label shown in the illustration frame. */
  frameLabel: string;
  /** Tailwind class groups. Kept as literals here so Tailwind can detect them. */
  tone: {
    card: string;
    border: string;
    frameShadow: string;
    orgText: string;
    tagText: string;
    divider: string;
  };
};

export const projects: Project[] = [
  {
    id: "insurance-platform",
    title: "AI-Powered Insurance Platform",
    organization: "Eicore Technologies",
    context: "Current role",
    summary:
      "An enterprise SaaS platform designed to consolidate insurance operations, workflows, and business processes into a unified ecosystem.",
    highlights: [
      "Enterprise workflow orchestration.",
      "Core platform features across multiple insurance domains.",
      "Complex insurance journey management.",
      "Performance, reliability, and maintainability.",
    ],
    tags: [
      "SaaS",
      "Workflow Orchestration",
      "Frontend Architecture",
      "Enterprise Applications",
    ],
    image: "/img/projects/insurance-platform.svg",
    imageAlt:
      "Abstract illustration of connected workflow nodes, stacked policy documents and an enterprise dashboard.",
    frameLabel: "Concept illustration",
    tone: {
      card: "bg-[#FDF4EE]",
      border: "border-[#F5D7C8]",
      frameShadow: "shadow-[0_12px_36px_-8px_rgba(23,25,35,0.12)]",
      orgText: "text-[#9C4322]",
      tagText: "text-ink-700",
      divider: "border-[#F5D7C8]/70",
    },
  },
  {
    id: "medical-pdf-viewer",
    title: "Medical Records PDF Viewer",
    organization: "Essentia Softserv / Episource",
    summary:
      "An interactive medical document viewer that helps healthcare users review, annotate, and manage clinical PDF records with real-time synchronization.",
    highlights: [
      "Interactive PDF annotation management.",
      "Create, view, update, and delete annotations.",
      "Dynamic highlighting of medical-record data.",
      "Salesforce integration through bidirectional WebSockets.",
      "Real-time document workflow improvements.",
    ],
    tags: [
      "React.js",
      "PDF Viewer",
      "WebSockets",
      "Salesforce Integration",
      "Real-Time Communication",
    ],
    image: "/img/projects/medical-pdf-viewer.svg",
    imageAlt:
      "Abstract blush and coral illustration of a PDF page with colored highlights and annotation markers connected to a data panel and a cloud service.",
    frameLabel: "Concept illustration",
    tone: {
      card: "bg-[#FCF1EE]",
      border: "border-[#F1D2CB]",
      frameShadow: "shadow-[0_8px_24px_-6px_rgba(120,40,30,0.10)]",
      orgText: "text-[#A23B2A]",
      tagText: "text-ink-800",
      divider: "border-[#F1D2CB]",
    },
  },
  {
    id: "ocrhiem",
    title: "OCRHiem Healthcare Document Processing",
    organization: "Essentia Softserv",
    summary:
      "A healthcare document-processing platform built to support large-scale PDF ingestion, bulk uploads, and document-processing workflows.",
    highlights: [
      "Bulk PDF upload and ingestion.",
      "Backend processing and document management using Django.",
      "Monitoring of processing status and failures.",
      "Slack-based operational alerts.",
    ],
    tags: ["Python", "Django", "PDF Processing", "Bulk Upload", "Monitoring"],
    image: "/img/projects/ocrhiem.svg",
    imageAlt:
      "Abstract mint-green illustration of stacked PDF documents flowing through a batch pipeline with progress indicators and an alert notification.",
    frameLabel: "Concept illustration",
    tone: {
      card: "bg-[#EDF7F2]",
      border: "border-[#BEDEC6]",
      frameShadow: "shadow-[0_8px_24px_-6px_rgba(30,70,50,0.08)]",
      orgText: "text-emerald-900",
      tagText: "text-emerald-950",
      divider: "border-[#BEDEC6]",
    },
  },
  {
    id: "enterprise-modernization",
    title: "Enterprise Application Modernization",
    organization: "HCLTech / Samsung SDS",
    summary:
      "Modernized enterprise frontend modules by migrating from Vue 2 to Vue 3 while improving maintainability and supporting evolving business workflows.",
    highlights: [
      "Vue 2 to Vue 3 migration.",
      "Enterprise frontend modernization.",
      "Automated business workflows.",
      "Samsung Knox secure portal integration.",
      "Code quality, testing, and performance optimization.",
    ],
    tags: [
      "Vue.js",
      "Vue 3",
      "Enterprise Applications",
      "Modernization",
      "Integration",
    ],
    image: "/img/projects/enterprise-modernization.svg",
    imageAlt:
      "Abstract blue illustration of an older frontend interface migrating to a modern component-based interface.",
    frameLabel: "Concept illustration",
    tone: {
      card: "bg-[#F0F6FD]",
      border: "border-[#CFDFEF]",
      frameShadow: "shadow-[0_8px_24px_-6px_rgba(20,50,90,0.08)]",
      orgText: "text-blue-900",
      tagText: "text-blue-950",
      divider: "border-[#CFDFEF]",
    },
  },
  {
    id: "risk-score-platform",
    title: "Risk Score Calculation Platform",
    organization: "HCLTech",
    summary:
      "A business-critical React-based platform supporting risk-score calculation, assessment, and decision-making workflows.",
    highlights: [
      "React-driven risk assessment interface.",
      "Risk-score calculation workflows.",
      "Unit testing and TDD practices.",
      "Application architecture and CI/CD delivery.",
    ],
    tags: ["React.js", "Risk Assessment", "TDD", "Unit Testing", "CI/CD"],
    image: "/img/projects/risk-score-platform.svg",
    imageAlt:
      "Abstract muted-lavender illustration of a risk gauge, structured metric cards and a clean analytical dashboard.",
    frameLabel: "Concept illustration",
    tone: {
      card: "bg-[#F5F2FA]",
      border: "border-[#DED6EC]",
      frameShadow: "shadow-[0_8px_24px_-6px_rgba(70,50,120,0.10)]",
      orgText: "text-[#4B3C84]",
      tagText: "text-ink-800",
      divider: "border-[#DED6EC]",
    },
  },
  {
    id: "ssr-modernization",
    title: "SSR Web Application Modernization",
    organization: "Diginext Education",
    summary:
      "Modernized a traditional Django-rendered application into a React.js server-side-rendered architecture, improving frontend structure and long-term maintainability.",
    highlights: [
      "React.js SSR migration.",
      "Frontend architecture from scratch.",
      "Responsive user experience.",
      "Docker-based containerization.",
      "Development and production deployment workflows.",
    ],
    tags: [
      "React.js",
      "SSR",
      "Frontend Architecture",
      "Docker",
      "Web Performance",
    ],
    image: "/img/projects/ssr-modernization.svg",
    imageAlt:
      "Abstract peach and blue illustration of a browser-based learning interface with connected pages and a modern web application architecture.",
    frameLabel: "Concept illustration",
    tone: {
      card: "bg-[#FCF3EC]",
      border: "border-[#E6D7CC]",
      frameShadow: "shadow-[0_8px_24px_-6px_rgba(90,70,60,0.10)]",
      orgText: "text-[#2F5E99]",
      tagText: "text-ink-800",
      divider: "border-[#E6D7CC]",
    },
  },
];
