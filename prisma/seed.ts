import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding ...");

    // Services
    await prisma.service.deleteMany();
    await prisma.service.createMany({
        data: [
            {
                title: "Regular Passport",
                description: "For personal travel, vacations, and family visits.",
                icon: "Globe",
                features: ["Speed & Simplicity", "Standard Processing", "Global Acceptance"],
                cta: "Start Application",
                href: "/book?type=regular",
                color: "text-blue-500",
                bgColor: "bg-blue-50",
            },
            {
                title: "Business Passport",
                description: "For frequent flyers and international trade.",
                icon: "Briefcase",
                features: ["Efficiency", "Multi-country Support", "Expedited Processing"],
                cta: "Get Business Access",
                href: "/book?type=business",
                color: "text-nshara-yellow",
                bgColor: "bg-yellow-50",
            },
            {
                title: "Diplomatic Services",
                description: "Exclusive services for officials and VIPs.",
                icon: "ShieldCheck",
                features: ["Discretion", "Security", "VIP Handling"],
                cta: "Contact Concierge",
                href: "/contact?subject=Diplomatic+Services",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
            },
        ],
    });

    // Testimonials
    await prisma.testimonial.deleteMany();
    await prisma.testimonial.createMany({
        data: [
            {
                name: "Sarah K.",
                role: "Business Traveler",
                content: "I needed a passport renewal in 48 hours for an emergency trip. Nshara made it happen. Incredible service!",
                rating: 5,
            },
            {
                name: "David M.",
                role: "First-time Flyer",
                content: "The process was so confusing until I found Nshara. They handled everything, and I just showed up for the photo.",
                rating: 5,
            },
            {
                name: "Grace A.",
                role: "Diplomat",
                content: "Professional, discreet, and efficient. Exactly what I need for my official travel documentation.",
                rating: 5,
            },
        ],
    });

    // FAQs
    await prisma.fAQ.deleteMany();
    await prisma.fAQ.createMany({
        data: [
            {
                question: "How long does the process take?",
                answer: "Regular processing takes 10-14 days. Expedited services can be as fast as 48 hours depending on the service type.",
            },
            {
                question: "What documents do I need?",
                answer: "Typically, you need a national ID, birth certificate, and recommendation letters. Our wizard guides you through the exact requirements.",
            },
            {
                question: "Can you handle visa applications too?",
                answer: "Yes, we assist with visa applications for major destinations including the UK, USA, Schengen area, and China.",
            },
            {
                question: "Is my personal data secure?",
                answer: "Absolutely. We use bank-grade encryption and strictly adhere to data protection laws to ensure your information is safe.",
            },
        ],
    });

    // Trust Signals
    await prisma.trustSignal.deleteMany();
    await prisma.trustSignal.createMany({
        data: [
            {
                label: "Passports Processed",
                value: 15000,
                suffix: "+",
            },
            {
                label: "Visas Approved",
                value: 98,
                suffix: "%",
            },
            {
                label: "Years of Experience",
                value: 12,
                suffix: "+",
            },
        ],
    });

    // Default User
    const email = "guest@example.com";
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
        await prisma.user.create({
            data: {
                email,
                firstName: "Guest",
                lastName: "User",
                role: "USER",
            },
        });
        console.log("Default user created.");
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
