import { Button } from "@/components/ui/button";
import { MapPin, Video } from "lucide-react";
import Link from "next/link";

export function ConsultationTeaser() {
    return (
        <section className="py-24 bg-nshara-blue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD500_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We offer personalized consultations to guide you through the process. Tell us where you are.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Button asChild size="lg" className="h-16 px-8 text-lg bg-nshara-yellow text-nshara-black hover:bg-white hover:text-nshara-blue w-full sm:w-auto">
                            <Link href="/book?location=uganda">
                                <MapPin className="mr-2 h-5 w-5" />
                                I am in Uganda
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="h-16 px-8 text-lg border-white text-white hover:bg-white hover:text-nshara-blue w-full sm:w-auto bg-transparent">
                            <Link href="/book?location=abroad">
                                <Video className="mr-2 h-5 w-5" />
                                I am Abroad
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
