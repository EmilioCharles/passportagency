"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Plane } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-nshara-yellow">
                        <Plane className="h-5 w-5 text-nshara-black" />
                    </div>
                    <span className="text-xl font-bold text-nshara-blue">
                        Nshara<span className="text-nshara-yellow">Expedition</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-nshara-blue/80 transition-colors hover:text-nshara-blue"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link href="/book">
                        <Button className="bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90 font-bold">
                            Book Now
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-nshara-blue">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white w-[300px] sm:w-[400px] p-6">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-6 mt-6">
                                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-nshara-yellow">
                                        <Plane className="h-5 w-5 text-nshara-black" />
                                    </div>
                                    <span className="text-xl font-bold text-nshara-blue">
                                        Nshara<span className="text-nshara-yellow">Expedition</span>
                                    </span>
                                </Link>
                                <div className="h-px bg-gray-100" />
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-medium text-nshara-blue/80 hover:text-nshara-blue py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}

                                    <Link href="/book" onClick={() => setIsOpen(false)} className="w-full mt-4">
                                        <Button className="bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90 font-bold w-full h-12 text-base">
                                            Book Consultation
                                        </Button>
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
