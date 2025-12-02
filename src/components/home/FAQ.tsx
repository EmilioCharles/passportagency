"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQ as FAQModel } from "@prisma/client";

interface FAQProps {
    faqs: FAQModel[];
}

export function FAQ({ faqs }: FAQProps) {
    return (
        <section className="py-24 bg-nshara-offwhite">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nshara-blue sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about the process.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium text-nshara-blue hover:text-nshara-yellow transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
