"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Briefcase } from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

const experiences = [
    {
        version: "v4.0.0",
        role: "Software Engineer II",
        company: "Essentia Softserv LLP",
        location: "Noida, India",
        date: "Sep 2025 - Present",
        type: "feat",
        changes: [
            "Leading development of a scalable SaaS workflow engine for insurance companies using Bun.js, Node.js, Type-Script, React.js, and Redux, enabling automated policy processing, claims handling, and rule-based decision flows",
            "Architecting micro-frontend components with Redux state management, improving modularity and reducing deployment cycles by 30%.",
            "Implementing responsive design patterns ensuring seamless UX across mobile, tablet, and desktop browsers with optimized browser rendering performance.",
        ]
    },
    {
        version: "v3.0.0",
        role: "Senior Developer",
        company: "HCLTech Ltd",
        location: "Noida, India",
        date: "Dec 2023 - Aug 2025",
        type: "feat",
        changes: [
            "Built dynamic Excel generation features using ExcelJS/xlsx and React → improved reporting efficiency by 40%.",
            "Transformed NatWest's credit risk platform into a micro-frontend architecture, reducing deployments by 35%.",
            "Optimized circular dependency issues → achieved 80% faster build/deploy pipeline.",
            "Migrated Samsung's DMS from Vue 2 → Vue 3, improving scalability."
        ]
    },
    {
        version: "v2.0.0",
        role: "Software Engineer",
        company: "Essentia Softserv LLP",
        location: "Noida, India",
        date: "June 2020 - Dec 2023",
        type: "feat",
        changes: [
            "Built a high-volume AQI tracking system processing 10,000+ hourly data points across India.",
            "Developed OCRheim, a PDF batch-processing and Slack-integrated monitoring platform → improved efficiency by 50%."
        ]
    },
    {
        version: "v1.0.0",
        role: "Frontend Developer",
        company: "Diginext Education Pvt. Ltd.",
        location: "Gurugram, India",
        date: "May 2019 - June 2020",
        type: "init",
        changes: [
            "Migrated legacy Django system to Next.js SSR → improved SEO by 20% and performance by 25%.",
            "Developed a custom Rich Text Editor using Quill.js & React → increased engagement by 60%."
        ]
    }
];

export default function Experience() {
    const { isDevMode } = useViewMode();

    return (
        <section id="experience" className={cn("py-24 bg-background", isDevMode ? "font-mono" : "font-sans")}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", isDevMode ? "max-w-5xl" : "max-w-7xl")}>
                <div className="mb-16">
                    {isDevMode ? (
                        <>
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <GitPullRequest className="w-6 h-6 text-primary" />
                                CHANGELOG.md
                            </h2>
                            <div className="h-px w-full bg-border mt-4" />
                        </>
                    ) : (
                        <h2 className="text-4xl font-serif font-medium">Experience</h2>
                    )}
                </div>

                <div className="space-y-16 relative">
                    {isDevMode && (
                        <div className="absolute left-3.5 top-2 bottom-0 w-px bg-border md:left-4" />
                    )}

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn("relative", isDevMode ? "pl-12 md:pl-16" : "border-t border-border pt-8")}
                        >
                            {isDevMode ? (
                                // Developer Mode: Changelog Style
                                <div className="border-l-2 border-border pl-6 ml-3 relative pb-12 last:pb-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-110 transition-transform" />

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                                        <h3 className="text-xl font-bold font-mono text-primary group-hover:text-primary/80 transition-colors">
                                            {exp.company}
                                        </h3>
                                        <span className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-secondary-foreground">
                                            {exp.version}
                                        </span>
                                        <span className="text-sm text-muted-foreground font-mono ml-auto">
                                            {exp.date}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-foreground font-medium mb-1">{exp.role}</div>
                                    </div>

                                    <ul className="space-y-2 font-mono text-sm">
                                        {exp.changes.map((change, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                                                <span className="text-primary mt-1">-</span>
                                                <span>{change}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                // Client Mode: Roadmap Style
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                                    {/* Connector Line */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full md:hidden" />

                                    <div className="md:col-span-4 pl-6 md:pl-0 relative">
                                        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-border" />
                                        <div className="hidden md:block absolute right-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-background" />

                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                                        <div className="text-primary font-medium mb-1">{exp.role}</div>
                                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                                            <Briefcase className="w-3 h-3" />
                                            {exp.date}
                                        </div>
                                    </div>

                                    <div className="md:col-span-8 pl-6 md:pl-0">
                                        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all hover:bg-primary/5 hover:border-primary/50">
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Milestones</h4>
                                            <ul className="space-y-3">
                                                {exp.changes.map((change, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                                        <span className="text-foreground/90">{change}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
