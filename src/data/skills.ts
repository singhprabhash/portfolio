export type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
  /** Skills shown with extra emphasis (must also appear in `skills`). */
  primary?: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    summary: "Languages and libraries for building interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Vue.js", "Redux", "Web Components"],
    primary: ["JavaScript (ES6+)", "TypeScript", "React.js", "Vue.js"],
  },
  {
    title: "Frameworks & Rendering",
    summary: "Rendering strategies and cross-browser delivery.",
    skills: ["Next.js", "Nuxt.js", "Server-Side Rendering (SSR)", "Responsive Web Development", "Mobile-First Development", "Cross-Browser Compatibility", "Pixel-Perfect Implementation"],
    primary: ["Next.js"],
  },
  {
    title: "APIs & Real-Time Integration",
    summary: "Connecting interfaces to services and live data.",
    skills: ["RESTful APIs", "GraphQL", "JSON", "WebSockets", "Real-Time Communication", "Salesforce Integration"],
  },
  {
    title: "Performance Engineering",
    summary: "Keeping applications fast and maintainable.",
    skills: ["Web Performance Optimization", "Code Splitting", "Lazy Loading", "Bundle Optimization", "Application Maintainability", "Frontend Architecture"],
    primary: ["Frontend Architecture"],
  },
  {
    title: "Testing & Code Quality",
    summary: "Practices and tools for reliable releases.",
    skills: ["Jest", "Cypress", "React Testing Library", "Unit Testing", "End-to-End Testing", "Test-Driven Development (TDD)", "Code Reviews", "ESLint"],
  },
  {
    title: "Tooling, Delivery & Supporting Backend",
    summary: "Build tools, pipelines, and the backend work behind the frontend.",
    skills: ["Webpack", "Vite", "Babel", "npm", "yarn", "Git", "GitHub", "GitLab", "GitHub Actions", "CI/CD Pipelines", "Docker", "Python", "Django", "Backend Feature Development", "Document Processing Workflows"],
  },
];
