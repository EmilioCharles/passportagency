"use client";

import { Clock, ShieldCheck, Zap } from "lucide-react";

const guarantees = [
    {
        title: "Quick Delivery",
        description: "We expedite the process to get your passport in record time.",
        icon: Zap,
    },
    {
        title: "Trusted Expertise",
        description: "Over a decade of navigating complex bureaucracy for you.",
        icon: ShieldCheck,
    },
    {
        title: "Seamless Workflow",
        description: "From application to collection, we handle every step.",
        icon: Clock,
    },
];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
};

export function NsharaGuarantee() {
    return (
        <section className="py-24 bg-nshara-offwhite">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold text-nshara-blue sm:text-4xl mb-4">
                        The Nshara Guarantee
                    </h2>
                    <p className="text-lg text-gray-600">
                        We don't just process paperwork; we deliver peace of mind.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {guarantees.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-nshara-yellow/20 flex items-center justify-center text-nshara-blue">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-nshara-blue">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
