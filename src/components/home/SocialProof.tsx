"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

import { Testimonial } from "@prisma/client";

import { motion } from "framer-motion";

// ... (imports remain the same)

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

interface SocialProofProps {
    testimonials: Testimonial[];
}

export function SocialProof({ testimonials }: SocialProofProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-nshara-blue sm:text-4xl mb-4">
                        Trusted by Travelers
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-nshara-yellow mb-2">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                    </div>
                    <p className="text-gray-600">
                        Rated 5/5 by over 500 happy clients.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="bg-nshara-offwhite border-none shadow-sm h-full">
                                <CardContent className="p-8 space-y-4">
                                    <div className="flex gap-1 text-nshara-yellow">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                                    <div>
                                        <div className="font-bold text-nshara-blue">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
