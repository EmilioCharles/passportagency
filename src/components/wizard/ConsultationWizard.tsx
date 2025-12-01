"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Video, Globe, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type Step = "location" | "details" | "schedule";
type LocationType = "uganda" | "abroad";

export function ConsultationWizard() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WizardContent />
        </Suspense>
    );
}

function WizardContent() {
    const [step, setStep] = useState<Step>("location");
    const [location, setLocation] = useState<LocationType | null>(null);
    const [timezone, setTimezone] = useState<string>("");
    const [serviceType, setServiceType] = useState<string>("Regular Passport");

    const searchParams = useSearchParams();

    useEffect(() => {
        // Auto-detect timezone
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(tz);

        // Check for location query param
        const locationParam = searchParams.get("location");
        if (locationParam === "uganda") {
            setLocation("uganda");
            setStep("details");
        } else if (locationParam === "abroad") {
            setLocation("abroad");
            setStep("details");
        }

        // Check for service type query param
        const typeParam = searchParams.get("type");
        if (typeParam === "business") {
            setServiceType("Business Passport");
        } else if (typeParam === "regular") {
            setServiceType("Regular Passport");
        }
    }, [searchParams]);

    const handleLocationSelect = (value: LocationType) => {
        setLocation(value);
    };

    const nextStep = () => {
        if (step === "location" && location) setStep("details");
        else if (step === "details") setStep("schedule");
    };

    const prevStep = () => {
        if (step === "details") setStep("location");
        else if (step === "schedule") setStep("details");
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="mb-8">
                <div className="flex items-center justify-center space-x-4">
                    <StepIndicator currentStep={step} step="location" label="Location" number={1} />
                    <div className="w-12 h-0.5 bg-gray-200" />
                    <StepIndicator currentStep={step} step="details" label="Details" number={2} />
                    <div className="w-12 h-0.5 bg-gray-200" />
                    <StepIndicator currentStep={step} step="schedule" label="Schedule" number={3} />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {step === "location" && (
                    <motion.div
                        key="location"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-none shadow-xl">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold text-nshara-blue">Where are you currently located?</CardTitle>
                                <CardDescription>We'll customize the consultation options based on your location.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid md:grid-cols-2 gap-6 pt-6">
                                <LocationOption
                                    id="uganda"
                                    title="I am in Uganda"
                                    description="Book an in-person visit at our Zana office."
                                    icon={MapPin}
                                    selected={location === "uganda"}
                                    onClick={() => handleLocationSelect("uganda")}
                                />
                                <LocationOption
                                    id="abroad"
                                    title="I am Abroad"
                                    description={`Video consultation (${timezone}).`}
                                    icon={Globe}
                                    selected={location === "abroad"}
                                    onClick={() => handleLocationSelect("abroad")}
                                />
                            </CardContent>
                            <CardFooter className="justify-end pt-6">
                                <Button
                                    onClick={nextStep}
                                    disabled={!location}
                                    className="bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90 font-bold px-8"
                                >
                                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}

                {step === "details" && (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-none shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-nshara-blue">
                                    {location === "uganda" ? "Visit Our Office" : "Virtual Consultation"}
                                </CardTitle>
                                <CardDescription>
                                    {location === "uganda"
                                        ? "We are located at Zana, Entebbe Road. Open Mon-Sat, 8am - 6pm."
                                        : "Schedule a secure video call via Zoom or Google Meet."}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {location === "uganda" ? (
                                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                        <div className="text-center text-gray-500">
                                            <MapPin className="w-12 h-12 mx-auto mb-2 text-nshara-yellow" />
                                            <p>Map Integration Placeholder</p>
                                            <p className="text-sm">(Google Maps API)</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <div className="flex items-start gap-4">
                                            <Video className="w-6 h-6 text-blue-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-nshara-blue">Timezone Detected</h4>
                                                <p className="text-sm text-gray-600">
                                                    We've detected your timezone as <span className="font-bold text-nshara-blue">{timezone}</span>.
                                                    All appointment slots will be shown in your local time.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="flex justify-between pt-6">
                                <Button variant="outline" onClick={prevStep}>
                                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                                </Button>
                                <Button
                                    onClick={nextStep}
                                    className="bg-nshara-yellow text-nshara-black hover:bg-nshara-yellow/90 font-bold"
                                >
                                    View Available Times <Calendar className="ml-2 w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}

                {step === "schedule" && (
                    <motion.div
                        key="schedule"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-none shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-nshara-blue">Select a Time</CardTitle>
                                <CardDescription>Scheduling for: <span className="font-bold text-nshara-yellow">{serviceType}</span></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                                    <div className="text-center text-gray-500">
                                        <Calendar className="w-12 h-12 mx-auto mb-2 text-nshara-blue" />
                                        <p>Cal.com Embed Placeholder</p>
                                        <p className="text-sm">The scheduling widget will appear here.</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between pt-6">
                                <Button variant="outline" onClick={prevStep}>
                                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function StepIndicator({ currentStep, step, label, number }: { currentStep: Step; step: Step; label: string; number: number }) {
    const isActive = currentStep === step;
    const isCompleted =
        (currentStep === "details" && step === "location") ||
        (currentStep === "schedule" && (step === "location" || step === "details"));

    return (
        <div className="flex flex-col items-center gap-2">
            <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${isActive
                    ? "bg-nshara-yellow text-nshara-black ring-4 ring-nshara-yellow/30"
                    : isCompleted
                        ? "bg-nshara-blue text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
            >
                {isCompleted ? <Check className="w-5 h-5" /> : number}
            </div>
            <span className={`text-sm font-medium ${isActive ? "text-nshara-blue" : "text-gray-500"}`}>
                {label}
            </span>
        </div>
    );
}

function LocationOption({ id, title, description, icon: Icon, selected, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${selected
                ? "border-nshara-yellow bg-yellow-50/50"
                : "border-gray-100 bg-white hover:border-nshara-yellow/50"
                }`}
        >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${selected ? "bg-nshara-yellow text-nshara-black" : "bg-gray-100 text-gray-500"
                }`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-nshara-blue mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            {selected && (
                <div className="absolute top-4 right-4 text-nshara-yellow">
                    <CheckCircleIcon />
                </div>
            )}
        </div>
    );
}

function CheckCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
    )
}
