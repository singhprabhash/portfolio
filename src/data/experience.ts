export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  /** Concise points condensed from the resume. No added metrics or technologies. */
  points: string[];
};

/** Newest first. Source of truth: resume. Keep the two Essentia Softserv periods separate. */
export const roles: Role[] = [
  {
    title: "Software Engineer III",
    company: "Eicore Technologies Pvt. Ltd.",
    location: "Gurugram, India",
    period: "February 2026 – Present",
    current: true,
    summary:
      "Working on a next-generation AI-powered insurance platform that brings insurance workflows, operations, and business processes into a unified SaaS ecosystem.",
    points: [
      "Leading development of core platform features across multiple insurance domains.",
      "Designing and implementing enterprise workflow orchestration for complex insurance journeys.",
      "Contributing to platform architecture, implementation, and delivery planning.",
      "Improving application performance, reliability, and maintainability.",
      "Mentoring team members and taking part in technical reviews and solution design discussions.",
    ],
  },
  {
    title: "Software Engineer III",
    company: "Essentia Softserv LLP",
    location: "Noida, India",
    period: "September 2025 – February 2026",
    summary:
      "Contributed to an AI-driven SaaS insurance platform designed to streamline and centralize end-to-end insurance operations.",
    points: [
      "Developed scalable frontend and backend modules.",
      "Supported multiple insurance business workflows within a unified platform.",
      "Contributed to the development of insurance SaaS capabilities.",
    ],
  },
  {
    title: "Senior Developer",
    company: "HCLTech Limited",
    location: "Noida, India",
    period: "December 2023 – August 2025",
    summary:
      "Worked on enterprise applications for Samsung SDS and on a business-critical risk-scoring platform.",
    points: [
      "Modernized Samsung SDS enterprise applications by migrating frontend modules from Vue 2 to Vue 3.",
      "Developed and enhanced automated business workflows and integrated them with the Samsung Knox secure portal.",
      "Developed and maintained a React-based risk-score calculation platform, applying Test-Driven Development and unit tests.",
      "Contributed to architecture and reliability improvements, code reviews, testing, and performance optimization.",
      "Delivered features through CI/CD pipelines with automated testing, builds, and deployments.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Essentia Softserv LLP",
    location: "Noida, India",
    period: "June 2020 – December 2023",
    summary:
      "Built healthcare document applications: a medical-records PDF viewer for Episource and the OCRHiem document-processing platform.",
    points: [
      "Developed and enhanced the medical-records PDF viewer, including annotation creation, viewing, updating, and deletion.",
      "Integrated the viewer with Salesforce through bidirectional WebSocket communication, with dynamic highlighting based on Salesforce dashboard information.",
      "Optimized real-time data handling and annotation workflows for high-volume documents, and supported releases through Salesforce CI/CD pipelines.",
      "Developed and maintained OCRHiem for large-scale PDF ingestion and processing.",
      "Built Django backend features for bulk upload and processing of medical documents, plus Slack-based monitoring and alerting using Python and Django.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Diginext Education Pvt. Ltd.",
    location: "Gurugram, India",
    period: "May 2019 – June 2020",
    summary:
      "Modernized a traditional Django-rendered web application into a modern React.js server-side-rendered architecture.",
    points: [
      "Spearheaded the migration to a React.js SSR architecture and designed the frontend architecture from scratch.",
      "Improved the application's maintainability and scalability.",
      "Containerized the application using Docker and managed deployment workflows across development and production environments.",
      "Researched and adopted early server-side rendering technologies while resolving implementation and deployment challenges.",
    ],
  },
];
