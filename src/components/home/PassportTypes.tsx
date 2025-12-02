"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Service } from "@prisma/client";

const iconMap: Record<string, any> = {
    Globe: Globe,
    Briefcase: Briefcase,
    ShieldCheck: ShieldCheck,
};

import { motion } from "framer-motion";

// ... (imports remain the same, just adding motion)

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

interface PassportTypesProps {
    services: Service[];
}

export function PassportTypes({ services }: PassportTypesProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold text-nshara-blue sm:text-4xl mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-lg text-gray-600">
                        Whether you're traveling for leisure, business, or official duty, we have a tailored workflow for you.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {services.map((type) => {
                        const Icon = iconMap[type.icon] || Globe;
                        return (
                            <motion.div key={type.title} variants={itemVariants}>
                                <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                    <CardHeader>
                                        <div className={`w-14 h-14 rounded-xl ${type.bgColor} flex items-center justify-center mb-4`}>
                                            <Icon className={`w-8 h-8 ${type.color}`} />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-nshara-blue">{type.title}</CardTitle>
                                        <CardDescription className="text-base mt-2">{type.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-3">
                                            {type.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-nshara-yellow" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full bg-nshara-blue text-white hover:bg-nshara-blue/90 group">
                                            <Link href={type.href}>
                                                {type.cta}
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
