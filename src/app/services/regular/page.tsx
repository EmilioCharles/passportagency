import Link from "next/link";
import { CheckCircle, Clock, FileText, Shield } from "lucide-react";

export default function RegularPassportPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Regular Passport Services
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
                        Perfect for personal travel, vacations, and family visits. We make getting your passport simple and stress-free.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Features */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">What's Included</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Speed & Simplicity</h3>
                                    <p className="text-gray-600">Streamlined process with minimal paperwork</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Standard Processing</h3>
                                    <p className="text-gray-600">10-14 days for regular service, expedited options available</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Global Acceptance</h3>
                                    <p className="text-gray-600">Valid for travel to over 180 countries worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">Required Documents</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>National ID or Birth Certificate</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Two recent passport photos (white background)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Recommendation letters (2 required)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Completed application form</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Payment confirmation</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <Link
                                href="/book?type=regular"
                                className="block w-full text-center bg-nshara-yellow text-nshara-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                            >
                                Start Your Application
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Process Timeline */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-nshara-blue mb-8 text-center">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Book Consultation", desc: "Schedule a free consultation with our team" },
                            { step: "2", title: "Submit Documents", desc: "We'll guide you through the paperwork" },
                            { step: "3", title: "Processing", desc: "We handle all government submissions" },
                            { step: "4", title: "Receive Passport", desc: "Get your passport delivered securely" }
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 bg-nshara-yellow rounded-full flex items-center justify-center text-2xl font-bold text-nshara-black mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
