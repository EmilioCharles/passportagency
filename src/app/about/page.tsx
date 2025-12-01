import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-nshara-blue text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nshara Expedition</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We are on a mission to eliminate the friction of bureaucracy from your travel experience.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-nshara-blue">Zero-Friction Bureaucracy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Founded in 2012, Nshara Expedition Travel started with a simple observation: getting a passport was too hard. The long lines, the confusing forms, the uncertainty—it took the joy out of travel.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We built a system that handles the heavy lifting for you. From document verification to appointment scheduling, we ensure your application is perfect before it ever reaches the immigration office.
                            </p>
                            <div className="space-y-3 pt-4">
                                {[
                                    "Over 15,000 Passports Processed",
                                    "98% Visa Approval Rate",
                                    "Dedicated Liaison Officers",
                                    "Secure Document Handling"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-nshara-yellow" />
                                        <span className="font-medium text-nshara-blue">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                                [Office / Team Image]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-nshara-offwhite text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-nshara-blue mb-6">Ready to travel hassle-free?</h2>
                    <Button asChild size="lg" className="bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90">
                        <Link href="/book">Start Your Application</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
