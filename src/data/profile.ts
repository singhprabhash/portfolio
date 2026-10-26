export const profile = {
  name: "Prabhash Singh",
  title: "Software Engineer",
  yearsOfExperience: 7,
  location: "Noida, India",
  email: "prabhash6615@gmail.com",
  linkedinUrl: "https://linkedin.com/in/prabhash-singh",
  linkedinLabel: "linkedin.com/in/prabhash-singh",
  /**
   * Public path of the downloadable resume (e.g. "/assets/Prabhash_Singh_Resume.pdf").
   * Leave undefined to hide the "Download Resume" button until a file is published.
   */
  resumeUrl: undefined as string | undefined,
} as const;

export const heroHighlights = [
  "7 Years of Experience",
  "Enterprise Application Development",
  "Frontend Architecture",
  "Healthcare & Insurance SaaS",
] as const;

export const education = {
  degree: "Bachelor of Technology (B.Tech.)",
  major: "Computer Science and Engineering",
  institution: "Meerut Institute of Engineering and Technology",
  period: "August 2015 – June 2019",
} as const;
