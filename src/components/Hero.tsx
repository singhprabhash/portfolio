"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/ViewModeContext";

export default function Hero() {
    const { isDevMode } = useViewMode();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {isDevMode ? (
                    // Developer Mode: Code Snippet
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-mono text-sm md:text-base lg:text-lg leading-relaxed"
                    >
                        <div className="flex items-start gap-6 mb-8">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border shrink-0 hidden sm:block">
                                <img
                                    src="/img/profile-img.jpg"
                                    alt="Profile"
                                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="text-muted-foreground pt-2">
                                // Welcome to my digital workspace. <br />
                                // I build scalable, high-performance web applications.
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <span className="text-primary font-bold">const</span>{" "}
                                <span className="text-foreground">developer</span>{" "}
                                <span className="text-muted-foreground">=</span>{" "}
                                <span className="text-muted-foreground">{"{"}</span>
                            </div>

                            <div className="pl-4 md:pl-8 space-y-2">
                                <div>
                                    <span className="text-foreground">name</span>:{" "}
                                    <span className="text-green-600 dark:text-green-400">"Prabhash Singh"</span>,
                                </div>
                                <div>
                                    <span className="text-foreground">role</span>:{" "}
                                    <span className="text-green-600 dark:text-green-400">"Expert Frontend Engineer"</span>,
                                </div>
                                <div>
                                    <span className="text-foreground">experience</span>:{" "}
                                    <span className="text-blue-600 dark:text-blue-400">"5+ Years"</span>,
                                </div>
                                <div>
                                    <span className="text-foreground">focus</span>:{" "}
                                    <span className="text-muted-foreground">[</span>
                                    <span className="text-green-600 dark:text-green-400">"React.js"</span>,{" "}
                                    <span className="text-green-600 dark:text-green-400">"Next.js"</span>,{" "}
                                    <span className="text-green-600 dark:text-green-400">"Micro-Frontends"</span>
                                    <span className="text-muted-foreground">]</span>,
                                </div>

                                <div className="pt-4">
                                    <span className="text-muted-foreground">// Core mission</span>
                                    <br />
                                    <span className="text-foreground">mission</span>:{" "}
                                    <span className="text-green-600 dark:text-green-400">
                                        "Delivering scalable solutions for enterprise clients and high-traffic platforms."
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className="text-muted-foreground">{"}"}</span>;
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-12 flex gap-6 text-sm"
                        >
                            <a href="#projects" className="hover:underline decoration-2 underline-offset-4 decoration-primary">
                                → view_projects()
                            </a>
                            <a href="#experience" className="hover:underline decoration-2 underline-offset-4 decoration-primary">
                                → read_changelog()
                            </a>
                            <a href="#contact" className="hover:underline decoration-2 underline-offset-4 decoration-primary">
                                → contact_me()
                            </a>
                        </motion.div>
                    </motion.div>
                ) : (
                    // Client Mode: Dashboard Style
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-8 order-2 md:order-1">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">System Online</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                                    Building the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                        Future of Web
                                    </span>
                                </h1>

                                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                    Architecting scalable digital solutions with precision engineering.
                                    Specializing in high-performance React ecosystems and micro-frontend architecture.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    React.js Expert
                                </div>
                                <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    Next.js Architecture
                                </div>
                                <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                    Enterprise Solutions
                                </div>
                            </div>

                            <div className="pt-8 flex gap-4">
                                <a
                                    href="#projects"
                                    className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                                >
                                    View Deployments
                                </a>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-md border border-border hover:bg-secondary/50 transition-colors font-medium"
                                >
                                    Initiate Contact
                                </a>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl group">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src="/img/profile-img.jpg"
                                    alt="Prabhash Singh"
                                    className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
