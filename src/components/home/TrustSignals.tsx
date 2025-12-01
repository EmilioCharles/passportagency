"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    {
        label: "Passports Processed",
        value: 15000,
        suffix: "+",
    },
    {
        label: "Visas Approved",
        value: 98,
        suffix: "%",
    },
    {
        label: "Years of Experience",
        value: 12,
        suffix: "+",
    },
];

export function TrustSignals() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 bg-nshara-blue text-white" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-nshara-yellow">
                                {isInView ? (
                                    <Counter from={0} to={stat.value} duration={2} />
                                ) : (
                                    <span>0</span>
                                )}
                                {stat.suffix}
                            </div>
                            <div className="text-gray-300 text-lg font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <CountUp from={from} to={to} duration={duration} />
        </motion.span>
    );
}

function CountUp({ from, to, duration }: { from: number; to: number; duration: number }) {
    // Simple count up implementation using framer-motion is a bit complex for a single component
    // We will use a simpler approach for now or just render the number directly if animation is too complex without extra deps
    // For this iteration, let's just render the number. To do a real count up, we'd need `useSpring` or similar.
    // Let's stick to a simple fade in for now to ensure stability.
    return <span>{to}</span>;
}
