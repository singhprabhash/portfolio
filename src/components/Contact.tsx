"use client";

import { motion } from "framer-motion";
import { Terminal, Mail, Linkedin, Phone } from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

const contactMethods = [
    {
        name: "Email",
        value: "prabhash8595@gmail.com",
        href: "mailto:prabhash8595@gmail.com",
        icon: Mail
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/prabhash-singh",
        href: "https://www.linkedin.com/in/prabhash-singh",
        icon: Linkedin
    },
    {
        name: "Phone",
        value: "+91 8756136615",
        href: "tel:+918756136615",
        icon: Phone
    }
];

export default function Contact() {
    const { isDevMode } = useViewMode();

    return (
        <section id="contact" className={cn("py-24 bg-secondary/30", isDevMode ? "font-mono" : "font-sans")}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", isDevMode ? "max-w-5xl" : "max-w-7xl")}>
                <div className="max-w-2xl mx-auto text-center">
                    {isDevMode ? (
                        // Developer Mode: Terminal Style
                        <div className="max-w-3xl mx-auto text-left">
                            <div className="bg-card border border-border rounded-lg overflow-hidden font-mono shadow-lg">
                                <div className="bg-secondary/50 px-4 py-2 border-b border-border flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="ml-4 text-xs text-muted-foreground">contact.sh — zsh — 80x24</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex gap-2">
                                        <span className="text-green-500">➜</span>
                                        <span className="text-blue-500">~</span>
                                        <span className="text-muted-foreground">./send_message.sh</span>
                                    </div>

                                    <div className="grid gap-4 pl-4 border-l-2 border-border ml-1">
                                        {contactMethods.map((method) => (
                                            <a
                                                key={method.name}
                                                href={method.href}
                                                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group p-2 rounded hover:bg-primary/5"
                                            >
                                                <span className="text-primary opacity-50 group-hover:opacity-100">&gt;</span>
                                                <method.icon className="w-4 h-4" />
                                                <span>{method.value}</span>
                                            </a>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 pt-4 animate-pulse">
                                        <span className="text-green-500">➜</span>
                                        <span className="text-blue-500">~</span>
                                        <span className="w-2 h-4 bg-primary block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Client Mode: Transmission Interface
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {contactMethods.map((method, index) => (
                                    <motion.a
                                        key={method.name}
                                        href={method.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group bg-card border border-border p-8 rounded-lg text-center hover:shadow-lg transition-all hover:bg-primary/5 hover:border-primary/50"
                                    >
                                        <div className="w-12 h-12 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                            <method.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{method.value}</p>
                                        <div className="text-xs font-medium text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            Initiate Link
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-16 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    System Online • Average Response Time: &lt; 24h
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
