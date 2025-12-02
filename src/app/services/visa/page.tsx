import Link from "next/link";
import { Globe, FileCheck, Users, MapPin } from "lucide-react";

export default function VisaAssistancePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Visa Assistance Services
                    </h1>
                    <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
                        Expert visa application support for major destinations worldwide. We navigate the complexity so you don't have to.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Features */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">Why Choose Us</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <Globe className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Global Coverage</h3>
                                    <p className="text-gray-600">Visa support for 150+ countries</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FileCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">98% Approval Rate</h3>
                                    <p className="text-gray-600">Expert guidance for maximum success</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Users className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Experienced Team</h3>
                                    <p className="text-gray-600">Specialists in immigration and visa procedures</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Embassy Liaison</h3>
                                    <p className="text-gray-600">Direct communication with embassies and consulates</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Popular Destinations */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">Popular Destinations</h2>
                        <div className="space-y-4 mb-8">
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-900">United States</h3>
                                <p className="text-sm text-gray-600">Tourist, business, student visas</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-900">United Kingdom</h3>
                                <p className="text-sm text-gray-600">Visit, work, settlement visas</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-900">Schengen Area</h3>
                                <p className="text-sm text-gray-600">26 European countries, single visa</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-900">Canada</h3>
                                <p className="text-sm text-gray-600">Visitor, study, work permits</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-900">China & UAE</h3>
                                <p className="text-sm text-gray-600">Business and tourist visas</p>
                            </div>
                        </div>

                        <Link
                            href="/book?type=visa"
                            className="block w-full text-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                        >
                            Get Visa Assistance
                        </Link>
                    </div>
                </div>

                {/* Process */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-nshara-blue mb-8 text-center">Our Visa Process</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold text-green-700 mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">Consultation</h3>
                            <p className="text-gray-600">We assess your travel plans and visa requirements</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold text-green-700 mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">Preparation</h3>
                            <p className="text-gray-600">Complete documentation and application forms</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl font-bold text-green-700 mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">Submission</h3>
                            <p className="text-gray-600">Embassy submission and application tracking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
