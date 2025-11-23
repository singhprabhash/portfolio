"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useViewMode } from "@/context/ViewModeContext";
import { Switch } from "@/components/ui/Switch";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { isDevMode, toggleViewMode } = useViewMode();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "bg-background/80 backdrop-blur-sm py-3 md:py-4" : "bg-transparent py-4 md:py-6",
                isDevMode ? "font-mono" : "font-sans"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="#home" className={cn("text-xl font-bold tracking-tight z-50", !isDevMode && "font-serif")}>
                        {isDevMode ? "<PS />" : "PS."}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-border mx-2" />

                        <div className="flex items-center gap-3">
                            <span className="text-xs uppercase tracking-widest font-medium">
                                {isDevMode ? "Dev Mode" : "Recruiter Mode"}
                            </span>
                            <Switch
                                checked={isDevMode}
                                onCheckedChange={toggleViewMode}
                            />
                        </div>


                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4 z-50">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-widest font-medium">
                                {isDevMode ? "Dev Mode" : "Recruiter Mode"}
                            </span>
                            <Switch
                                checked={isDevMode}
                                onCheckedChange={toggleViewMode}
                            />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-2xl font-medium hover:text-muted-foreground transition-colors",
                                        !isDevMode && "font-serif"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
