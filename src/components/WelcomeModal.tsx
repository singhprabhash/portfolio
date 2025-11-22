"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, User, Check } from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { cn } from "@/lib/utils";

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { setViewMode } = useViewMode();

    useEffect(() => {
        // Check if user has already made a choice
        const savedMode = localStorage.getItem("viewMode");
        if (savedMode === null) {
            // No preference saved, show modal
            setIsOpen(true);
        }
    }, []);

    const handleSelection = (isDev: boolean) => {
        setViewMode(isDev);
        localStorage.setItem("viewMode", isDev ? "dev" : "client");
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 md:p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to my workspace.</h2>
                            <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
                                How would you like to view this portfolio?
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Client / Recruiter Option */}
                                <button
                                    onClick={() => handleSelection(false)}
                                    className="group relative p-8 rounded-xl border border-border hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left"
                                >
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        Recruiter / Client
                                    </h3>
                                </button>

                                {/* Developer Option */}
                                <button
                                    onClick={() => handleSelection(true)}
                                    className="group relative p-8 rounded-xl border border-border hover:border-green-500/50 hover:bg-green-500/5 transition-all text-left font-mono"
                                >
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-500">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                        Developer
                                    </h3>
                                </button>
                            </div>

                            <p className="mt-8 text-xs text-muted-foreground">
                                You can always switch views later from the navigation bar.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
