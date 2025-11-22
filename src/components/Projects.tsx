"use client";

import { motion } from "framer-motion";
import { Folder, Star, GitFork, ArrowUpRight, Book } from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "RightO",
        description: "Job search & resume generation platform. Streamlined workflows for job-seekers and employers with custom dashboards.",
        tech: ["Next.js", "Node.js", "MongoDB"],
        stats: { stars: "Private", forks: "v1.2.0" },
        link: "#",
        category: "Full Stack",
        year: "2024"
    },
    {
        title: "OCRheim",
        description: "PDF batch-processing and monitoring platform integrated with Slack. Improved processing efficiency by 50%.",
        tech: ["React", "Python", "AWS"],
        stats: { stars: "Internal", forks: "v2.0.1" },
        link: "#",
        category: "Automation",
        year: "2023"
    },
    {
        title: "AQI Tracker",
        description: "High-volume air quality tracking system processing 10,000+ hourly data points across India.",
        tech: ["Vue.js", "D3.js", "Node.js"],
        stats: { stars: "Public", forks: "v1.0.0" },
        link: "#",
        category: "Data Viz",
        year: "2023"
    },
    {
        title: "Rich Text Editor",
        description: "Custom WYSIWYG editor built with Quill.js & React. Increased user engagement by 60% on the platform.",
        tech: ["React", "Quill.js", "TypeScript"],
        stats: { stars: "Component", forks: "v0.9.0" },
        link: "#",
        category: "Library",
        year: "2022"
    }
];

export default function Projects() {
    const { isDevMode } = useViewMode();

    return (
        <section id="projects" className={cn("py-24 bg-secondary/30", isDevMode ? "font-mono" : "font-sans")}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", isDevMode ? "max-w-5xl" : "max-w-7xl")}>
                <div className="mb-12">
                    {isDevMode ? (
                        <>
                            <h2 className="text-2xl font-bold">Pinned Repositories</h2>
                            <p className="text-muted-foreground mt-2">Selected works and contributions.</p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">Selected Works</h2>
                            <div className="h-px w-full bg-border" />
                        </>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group cursor-pointer",
                                isDevMode && "bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                            )}
                        >
                            {isDevMode ? (
                                // Developer Mode: Repository Cards
                                <a href={project.link} className="block h-full group">
                                    <div className="h-full bg-card border border-border p-6 rounded-md hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowUpRight className="w-5 h-5 text-primary" />
                                        </div>

                                        <div className="flex items-center gap-2 mb-4 text-primary">
                                            <Book className="w-4 h-4" />
                                            <span className="text-sm font-mono font-bold">{project.title}</span>
                                            <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] text-muted-foreground border border-border">Public</span>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-6 font-mono line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="flex items-center gap-1 text-xs text-foreground font-mono">
                                                        <span className="w-2 h-2 rounded-full bg-primary/40" />
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono pt-4 border-t border-border">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3 h-3" />
                                                    <span>{Math.floor(Math.random() * 50) + 10}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <GitFork className="w-3 h-3" />
                                                    <span>{Math.floor(Math.random() * 20) + 5}</span>
                                                </div>
                                                <div className="ml-auto">
                                                    Updated {Math.floor(Math.random() * 10) + 1}d ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                // Client Mode: Deployment Cards
                                <a href={project.link} className="block h-full group">
                                    <div className="h-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 hover:bg-primary/5 hover:border-primary/50">
                                        {/* Status Bar */}
                                        <div className="px-4 py-3 border-b border-border bg-secondary/30 flex items-center justify-between group-hover:bg-primary/10 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">Deployed</span>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>

                                        <div className="p-6 space-y-4">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{project.category}</p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="pt-4 flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="px-2 py-1 rounded-md bg-secondary text-[10px] font-medium text-secondary-foreground uppercase tracking-wider group-hover:bg-background group-hover:text-primary transition-colors">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
