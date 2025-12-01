import Link from "next/link";
import { Plane, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-nshara-blue text-white py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-nshara-yellow">
                                <Plane className="h-5 w-5 text-nshara-black" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Nshara<span className="text-nshara-yellow">Expedition</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for hassle-free passport and visa services. We handle the bureaucracy so you can travel the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-nshara-yellow">Quick Links</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link href="/services" className="hover:text-nshara-yellow transition-colors block py-1">Services</Link></li>
                            <li><Link href="/about" className="hover:text-nshara-yellow transition-colors block py-1">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-nshara-yellow transition-colors block py-1">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-nshara-yellow transition-colors block py-1">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-nshara-yellow">Services</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link href="/services/regular" className="hover:text-nshara-yellow transition-colors block py-1">Regular Passport</Link></li>
                            <li><Link href="/services/business" className="hover:text-nshara-yellow transition-colors block py-1">Business Passport</Link></li>
                            <li><Link href="/services/diplomatic" className="hover:text-nshara-yellow transition-colors block py-1">Diplomatic Services</Link></li>
                            <li><Link href="/services/visa" className="hover:text-nshara-yellow transition-colors block py-1">Visa Assistance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-nshara-yellow">Contact Us</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="block py-1">Zana, Entebbe Road<br />Kampala, Uganda</span>
                            </li>
                            <li><a href="tel:+256700000000" className="hover:text-nshara-yellow transition-colors block py-1">+256 700 000 000</a></li>
                            <li><a href="mailto:info@nshara.com" className="hover:text-nshara-yellow transition-colors block py-1">info@nshara.com</a></li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="text-gray-400 hover:text-nshara-yellow transition-colors p-2 -ml-2"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-nshara-yellow transition-colors p-2"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-nshara-yellow transition-colors p-2"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-gray-400 hover:text-nshara-yellow transition-colors p-2"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nshara Expedition Travel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
