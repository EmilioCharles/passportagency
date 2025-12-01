"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-nshara-offwhite pt-12 pb-16 lg:pt-32 lg:pb-40">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center space-y-6 lg:space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-3xl font-extrabold tracking-tight text-nshara-blue sm:text-5xl xl:text-6xl">
                                Your Passport to the World. <span className="text-nshara-yellow">Hassle-Free.</span>
                            </h1>
                            <p className="max-w-[600px] text-base text-gray-600 md:text-xl leading-relaxed">
                                We handle the bureaucracy for <span className="font-semibold text-nshara-blue">Regular</span>, <span className="font-semibold text-nshara-blue">Business</span>, and <span className="font-semibold text-nshara-blue">Diplomatic</span> travel.
                                Skip the lines and let us manage the paperwork.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="/book?intent=eligibility" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90 font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-nshara-yellow/20 w-full sm:w-auto">
                                    Check My Eligibility
                                </Button>
                            </Link>
                            <Link href="/book" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="border-nshara-blue text-nshara-blue hover:bg-nshara-blue/5 font-semibold text-lg px-8 py-6 h-auto w-full sm:w-auto">
                                    Book Consultation
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-nshara-blue">5k+</span>
                                <span className="text-sm text-gray-500 font-medium">Passports Processed</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-nshara-blue">99%</span>
                                <span className="text-sm text-gray-500 font-medium">Approval Rate</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-nshara-blue">24/7</span>
                                <span className="text-sm text-gray-500 font-medium">Support Access</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image / Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                            <Image
                                src="/hero_travel_image_1764536617722.png"
                                alt="Happy traveler with passport"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Cards (Nshara Guarantee) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-nshara-blue">Quick Delivery</p>
                                    <p className="text-xs text-gray-500">Expedited services available</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-nshara-blue">Secure Data</p>
                                    <p className="text-xs text-gray-500">Bank-grade encryption</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
