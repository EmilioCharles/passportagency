import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Briefcase, ShieldCheck, FileText } from "lucide-react";
import Link from "next/link";

import { Service } from "@/generated/client/client";

import { db } from "@/lib/db";

const iconMap: Record<string, any> = {
    Globe: Globe,
    Briefcase: Briefcase,
    ShieldCheck: ShieldCheck,
    FileText: FileText,
};

export default async function ServicesPage() {
    const services = await db.service.findMany({
        orderBy: { createdAt: "asc" },
    });
    return (
        <div className="min-h-screen bg-nshara-offwhite py-12">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-nshara-blue mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600">
                        Comprehensive passport and visa solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon] || Globe;
                        // TODO: Add price and timeline to database model if needed, for now using defaults or we can add them to the model
                        // For now, I will assume the seed data needs to be updated or we map it here.
                        // The current Service model doesn't have price/timeline.
                        // I will use placeholders or derived values.
                        const price = service.title.includes("Express") ? "UGX 400,000" : service.title.includes("Business") ? "UGX 500,000" : service.title.includes("Diplomatic") ? "Custom Quote" : "UGX 250,000";
                        const timeline = service.title.includes("Express") ? "2-4 Days" : service.title.includes("Business") ? "5-7 Days" : service.title.includes("Diplomatic") ? "Priority" : "10-14 Days";

                        return (
                            <Card key={service.title} className="flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-nshara-yellow/10 flex items-center justify-center mb-4 text-nshara-blue">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-nshara-blue">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4">
                                    <div>
                                        <span className="text-2xl font-bold text-nshara-blue">{price}</span>
                                        {price !== "Custom Quote" && <span className="text-gray-500 text-sm"> / application</span>}
                                    </div>
                                    <div className="text-sm font-medium text-nshara-yellow bg-nshara-blue/5 inline-block px-2 py-1 rounded">
                                        Est. Time: {timeline}
                                    </div>
                                    <ul className="space-y-2 pt-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                                                <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full bg-nshara-blue text-white hover:bg-nshara-blue/90">
                                        <Link href={service.href}>Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-20 bg-nshara-blue rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Need something else?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        We also handle visa applications, travel insurance, and document legalization. Contact us for a custom package.
                    </p>
                    <Button asChild size="lg" className="bg-nshara-yellow text-nshara-black hover:bg-white">
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
