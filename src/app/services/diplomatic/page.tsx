import Link from "next/link";
import { Shield, Lock, Star, Crown } from "lucide-react";

export default function DiplomaticServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Diplomatic Services
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100 max-w-3xl">
                        Exclusive, discreet services for officials, diplomats, and VIP clients. White-glove treatment from start to finish.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Features */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">VIP Treatment</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <Lock className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Discretion</h3>
                                    <p className="text-gray-600">Confidential processing with maximum privacy</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Shield className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Security</h3>
                                    <p className="text-gray-600">Secure document handling and encrypted communications</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Crown className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">VIP Handling</h3>
                                    <p className="text-gray-600">Personal concierge service and priority access</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Star className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Premium Support</h3>
                                    <p className="text-gray-600">Dedicated team available 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold text-nshara-blue mb-6">Our Clients Include</h2>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li className="flex items-start gap-3">
                                <Star className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Government officials and diplomats</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>International organization representatives</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>C-suite executives</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>High-net-worth individuals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="h-5 w-5 text-nshara-yellow flex-shrink-0 mt-0.5" />
                                <span>Celebrities and public figures</span>
                            </li>
                        </ul>

                        <div className="border-t border-gray-200 pt-6">
                            <div className="bg-purple-50 rounded-lg p-6 mb-6">
                                <h3 className="font-semibold text-lg text-purple-900 mb-2">Concierge Service</h3>
                                <p className="text-purple-700 text-sm">
                                    Our diplomatic services include personal pickup and delivery, expedited government liaison, and complete white-glove service.
                                </p>
                            </div>
                            <Link
                                href="/contact?subject=Diplomatic+Services"
                                className="block w-full text-center bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors"
                            >
                                Contact Concierge
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Privacy Notice */}
                <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-12 max-w-4xl mx-auto text-center">
                    <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-nshara-blue mb-4">Your Privacy is Paramount</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        All diplomatic service requests are handled with the utmost discretion. We employ bank-grade security,
                        encrypted communications, and strictly adhere to international privacy standards. Your information is
                        never shared without explicit authorization.
                    </p>
                </div>
            </div>
        </div>
    );
}
