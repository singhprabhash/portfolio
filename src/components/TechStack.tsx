"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Server, Cloud } from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

const stack = {
    frontend: {
        icon: <Terminal className="w-5 h-5" />,
        skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "SCSS"]
    },
    backend: {
        icon: <Server className="w-5 h-5" />,
        skills: ["Node.js", "Java"]
    },
    devops: {
        icon: <Cloud className="w-5 h-5" />,
        skills: ["AWS", "MongoDB", "PostgreSQL", "Webpack", "Redux", "Cypress", "Jest", "CI/CD", "Agile/Jira"]
    }
};

export default function TechStack() {
    const { isDevMode } = useViewMode();

    return (
        <section className={cn("py-24 bg-background border-t border-border", isDevMode ? "font-mono" : "font-sans")}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", isDevMode ? "max-w-5xl" : "max-w-7xl")}>
                <div className="mb-16">
                    {isDevMode ? (
                        <>
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Cpu className="w-6 h-6 text-primary" />
                                package.json
                            </h2>
                            <div className="h-px w-full bg-border mt-4" />
                        </>
                    ) : (
                        <h2 className="text-4xl font-serif font-medium">Technologies</h2>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {isDevMode ? (
                        // Developer Mode: package.json style
                        Object.entries(stack).map(([category, { icon, skills }], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-6 text-primary">
                                    {icon}
                                    <h3 className="uppercase tracking-widest text-sm font-bold">{category}</h3>
                                </div>

                                <div className="space-y-3">
                                    {skills.map((skill) => (
                                        <div key={skill} className="flex items-center gap-3 group cursor-default p-2 rounded hover:bg-primary/5 transition-colors">
                                            <span className="text-muted-foreground group-hover:text-primary transition-colors">"</span>
                                            <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                                                {skill}
                                            </span>
                                            <span className="text-muted-foreground group-hover:text-primary transition-colors">"</span>
                                            <span className="text-muted-foreground text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                ^latest
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        // Client Mode: System Capabilities
                        Object.entries(stack).map(([category, { icon, skills }], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all hover:bg-primary/5 hover:border-primary/50"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-md bg-secondary text-primary">
                                        {icon}
                                    </div>
                                    <h3 className="uppercase tracking-widest text-sm font-bold">{category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {skills.map((skill) => (
                                        <div key={skill} className="flex items-center justify-between group">
                                            <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                                                {skill}
                                            </span>
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
