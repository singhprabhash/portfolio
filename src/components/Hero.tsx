"use client";

import { motion } from "framer-motion";
import { useViewMode } from "@/context/ViewModeContext";
import { Code, Terminal, Cpu, Globe, Zap } from "lucide-react";

export default function Hero() {
    const { isDevMode } = useViewMode();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background is handled globally by BackgroundAnimation, so we keep this transparent */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                {isDevMode ? (
                    // Developer Mode: VS Code Window Style
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e]/90 backdrop-blur-md shadow-2xl">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                                    <Terminal className="w-3 h-3" />
                                    <span>developer_profile.tsx</span>
                                </div>
                                <div className="w-16" /> {/* Spacer for balance */}
                            </div>

                            {/* Code Content */}
                            <div className="p-6 md:p-8 font-mono text-sm md:text-base overflow-x-auto">
                                <div className="flex gap-4">
                                    {/* Line Numbers */}
                                    <div className="flex flex-col text-right text-gray-600 select-none border-r border-white/5 pr-4">
                                        {Array.from({ length: 20 }).map((_, i) => (
                                            <span key={i} className="leading-relaxed">{i + 1}</span>
                                        ))}
                                    </div>

                                    {/* Code */}
                                    <div className="flex-1 leading-relaxed">
                                        <div className="text-gray-400">
                                            <span className="text-[#c586c0]">import</span>{" "}
                                            <span className="text-[#9cdcfe]">{"{ Developer }"}</span>{" "}
                                            <span className="text-[#c586c0]">from</span>{" "}
                                            <span className="text-[#ce9178]">'@universe/creators'</span>;
                                        </div>
                                        <div className="h-4" />

                                        <div>
                                            <span className="text-[#569cd6]">const</span>{" "}
                                            <span className="text-[#4fc1ff]">currentProfile</span>{" "}
                                            <span className="text-[#d4d4d4]">:</span>{" "}
                                            <span className="text-[#4ec9b0]">Developer</span>{" "}
                                            <span className="text-[#d4d4d4]">=</span>{" "}
                                            <span className="text-[#da70d6]">{"{"}</span>
                                        </div>

                                        <div className="pl-4 md:pl-8">
                                            <div>
                                                <span className="text-[#9cdcfe]">name</span>:{" "}
                                                <span className="text-[#ce9178]">'Prabhash Singh'</span>,
                                            </div>
                                            <div>
                                                <span className="text-[#9cdcfe]">role</span>:{" "}
                                                <span className="text-[#ce9178]">'Expert Frontend Engineer'</span>,
                                            </div>
                                            <div>
                                                <span className="text-[#9cdcfe]">experience</span>:{" "}
                                                <span className="text-[#b5cea8]">5</span>, <span className="text-[#6a9955]">// Years of building scalable apps</span>
                                            </div>
                                            <div>
                                                <span className="text-[#9cdcfe]">stack</span>:{" "}
                                                <span className="text-[#ffd700]">['React', 'Next.js', 'Micro-Frontends']</span>,
                                            </div>
                                            <div>
                                                <span className="text-[#9cdcfe]">status</span>:{" "}
                                                <span className="text-[#ce9178]">'Ready to Deploy'</span>,
                                            </div>

                                            <div className="h-4" />

                                            <div>
                                                <span className="text-[#dcdcaa]">buildFuture</span>: <span className="text-[#569cd6]">async function</span>() <span className="text-[#da70d6]">{"{"}</span>
                                            </div>
                                            <div className="pl-4 md:pl-8">
                                                <span className="text-[#c586c0]">await</span> <span className="text-[#dcdcaa]">craftPixelPerfectUI</span>();<br />
                                                <span className="text-[#c586c0]">return</span> <span className="text-[#ce9178]">'Exceptional User Experience'</span>;
                                            </div>
                                            <span className="text-[#da70d6]">{"}"}</span>
                                        </div>

                                        <span className="text-[#da70d6]">{"}"}</span>;
                                    </div>
                                </div>
                            </div>

                            {/* Terminal Footer */}
                            <div className="bg-[#252526] border-t border-white/5 p-3 flex items-center gap-4 text-xs font-mono text-gray-400">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>Compiled successfully</span>
                                </div>
                                <span>|</span>
                                <span>Ln 20, Col 1</span>
                                <span>|</span>
                                <span>UTF-8</span>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-mono"
                        >
                            <a href="#projects" className="flex items-center gap-2 text-gray-400 hover:text-[#4ec9b0] transition-colors group">
                                <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>view_projects()</span>
                            </a>
                            <a href="#contact" className="flex items-center gap-2 text-gray-400 hover:text-[#ce9178] transition-colors group">
                                <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>contact_me()</span>
                            </a>
                        </motion.div>
                    </motion.div>
                ) : (
                    // Client Mode: Modern SaaS Dashboard Style
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-2 lg:order-1 space-y-8"
                        >
                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium tracking-wider uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                System Online
                            </div>

                            {/* Headline */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                                    Building the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                                        Digital Future
                                    </span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                                    I architect scalable, high-performance web applications that drive business growth.
                                    Specializing in React ecosystems and enterprise-grade solutions.
                                </p>
                            </div>

                            {/* Stats/Capabilities */}
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">5+</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">50+</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">100%</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Delivery</p>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="#projects"
                                    className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25 flex items-center gap-2"
                                >
                                    <Globe className="w-4 h-4" />
                                    View Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-4 rounded-lg border border-white/20 hover:border-primary/50 hover:bg-secondary/50 transition-all hover:scale-105 font-medium flex items-center gap-2"
                                >
                                    <Zap className="w-4 h-4" />
                                    Start Project
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

                            {/* Profile Card with Tilt */}
                            <motion.div
                                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-2 border-dashed border-white/20"
                            >
                                <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]" />
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10 group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                    <img
                                        src="/img/profile-img.jpg"
                                        alt="Prabhash Singh"
                                        className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-4 top-10 bg-card border border-border p-3 rounded-xl shadow-xl z-20 flex items-center gap-3"
                                >
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-bold">Stack</p>
                                        <p className="text-sm font-bold">Full Stack</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -left-8 bottom-20 bg-card border border-border p-3 rounded-xl shadow-xl z-20 flex items-center gap-3"
                                >
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-bold">Focus</p>
                                        <p className="text-sm font-bold">Performance</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
