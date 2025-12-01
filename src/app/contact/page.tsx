"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/actions/contact";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className="w-full bg-nshara-blue text-white hover:bg-nshara-blue/90" disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                </>
            ) : (
                "Send Message"
            )}
        </Button>
    );
}

const initialState: ContactFormState = {
    message: "",
    errors: {},
    success: false,
};

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <div className="min-h-screen bg-nshara-offwhite py-12">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-nshara-blue mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600">
                        Have a question? We're here to help. Visit us, call us, or send a message.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">
                            <h2 className="text-2xl font-bold text-nshara-blue">Get in Touch</h2>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-nshara-yellow/10 flex items-center justify-center shrink-0 text-nshara-blue">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-nshara-blue">Visit Us</h3>
                                    <p className="text-gray-600">Zana, Entebbe Road</p>
                                    <p className="text-gray-600">Kampala, Uganda</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-nshara-yellow/10 flex items-center justify-center shrink-0 text-nshara-blue">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-nshara-blue">Call Us</h3>
                                    <p className="text-gray-600">+256 700 000 000</p>
                                    <p className="text-gray-600 text-sm">(Mon-Sat, 8am - 6pm)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-nshara-yellow/10 flex items-center justify-center shrink-0 text-nshara-blue">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-nshara-blue">Email Us</h3>
                                    <p className="text-gray-600">info@nshara.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Integration */}
                        <div className="bg-gray-200 h-[300px] rounded-xl overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.766226189868!2d32.55666731475354!3d0.2933333997866864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd7c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sZana%2C%20Kampala!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-nshara-blue mb-6">Send a Message</h2>
                        {state.success && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                                {state.message}
                            </div>
                        )}
                        <form action={formAction} ref={formRef} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" name="firstName" placeholder="John" required />
                                    {state.errors?.firstName && <p className="text-sm text-red-500">{state.errors.firstName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                                    {state.errors?.lastName && <p className="text-sm text-red-500">{state.errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" name="subject" placeholder="Passport Inquiry" required />
                                {state.errors?.subject && <p className="text-sm text-red-500">{state.errors.subject}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                                {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message}</p>}
                            </div>

                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
