import Link from "next/link";
import { CheckCircle, Briefcase, Plane, TrendingUp } from "lucide-react";

export default function BusinessPassportPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Business Passport Services
                    </h1>
                    <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl">
                        For frequent flyers and international trade professionals. Get expedited processing and priority support.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Features */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">Business Advantages</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <TrendingUp className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Efficiency</h3>
                                    <p className="text-gray-600">Fast-track processing for busy professionals</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Plane className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Multi-country Support</h3>
                                    <p className="text-gray-600">Visa assistance for major business destinations</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Briefcase className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Expedited Processing</h3>
                                    <p className="text-gray-600">Priority handling with 5-7 day turnaround</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Dedicated Account Manager</h3>
                                    <p className="text-gray-600">Personal support throughout the process</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">Ideal For</h2>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>International business travelers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Trade professionals & exporters</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Corporate executives</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Frequent flyers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Companies processing multiple passports</span>
                            </li>
                        </ul>

                        <div className="border-t border-gray-200 pt-6">
                            <p className="text-sm text-gray-600 mb-6">
                                Our business passport service includes comprehensive support for multiple destinations, visa coordination, and priority processing.
                            </p>
                            <Link
                                href="/book?type=business"
                                className="block w-full text-center bg-nshara-yellow text-nshara-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                            >
                                Get Business Access
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional Services */}
                <div className="mt-16 bg-blue-50 rounded-2xl p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-nshara-blue mb-8 text-center">Business Package Includes</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="font-semibold text-lg mb-2">Express Processing</h3>
                            <p className="text-gray-600">5-7 business days</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Dedicated hotline</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">✈️</div>
                            <h3 className="font-semibold text-lg mb-2">Visa Coordination</h3>
                            <p className="text-gray-600">Multi-destination support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
