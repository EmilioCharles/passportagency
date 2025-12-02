import { db } from "@/lib/db";

export default async function FAQPage() {
    const faqs = await db.faq.findMany({
        orderBy: { createdAt: "asc" },
    });

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-nshara-blue mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our passport and visa services
                    </p>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq: { id: string; question: string; answer: string }) => (
                        <details
                            key={faq.id}
                            className="bg-white rounded-lg shadow-md p-6 group"
                        >
                            <summary className="font-semibold text-lg text-nshara-blue cursor-pointer list-none flex items-center justify-between">
                                <span>{faq.question}</span>
                                <span className="text-nshara-yellow group-open:rotate-180 transition-transform">
                                    ▼
                                </span>
                            </summary>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-nshara-blue mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Our team is here to help. Get in touch and we'll answer any questions you have.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-nshara-yellow text-nshara-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
