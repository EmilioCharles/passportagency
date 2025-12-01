import { ConsultationWizard } from "@/components/wizard/ConsultationWizard";

export default function BookPage() {
    return (
        <div className="min-h-screen bg-nshara-offwhite py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-nshara-blue sm:text-5xl">
                    Book Your Consultation
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    Select your location to get started. We offer in-person visits in Uganda and virtual consultations worldwide.
                </p>
            </div>

            <ConsultationWizard />
        </div>
    );
}
