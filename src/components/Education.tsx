"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section className="py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <GraduationCap className="text-primary" />
                            Education
                        </h2>

                        <div className="glass p-6 rounded-2xl border-l-4 border-l-primary">
                            <h3 className="text-xl font-bold">B.Tech — Computer Science & Engineering</h3>
                            <p className="text-gray-300 mt-1">Meerut Institute of Engineering and Technology</p>
                            <p className="text-sm text-gray-400 mt-2">2015 – 2019</p>
                        </div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Award className="text-secondary" />
                            Soft Skills
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {["Leadership", "Communication", "Team Collaboration", "Problem Solving"].map((skill, index) => (
                                <div
                                    key={index}
                                    className="glass p-4 rounded-xl text-center hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-medium text-gray-200">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
