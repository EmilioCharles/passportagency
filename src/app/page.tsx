import { Hero } from "@/components/home/Hero";
import { PassportTypes } from "@/components/home/PassportTypes";
import { TrustSignals } from "@/components/home/TrustSignals";
import { NsharaGuarantee } from "@/components/home/NsharaGuarantee";
import { ConsultationTeaser } from "@/components/home/ConsultationTeaser";
import { SocialProof } from "@/components/home/SocialProof";
import { FAQ } from "@/components/home/FAQ";

import { db } from "@/lib/db";

export default async function Home() {
  const services = await db.service.findMany({
    take: 3,
    orderBy: { createdAt: "asc" },
  });

  const testimonials = await db.testimonial.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  const faqs = await db.fAQ.findMany({
    take: 5,
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSignals />
      <PassportTypes services={services} />
      <NsharaGuarantee />
      <ConsultationTeaser />
      <SocialProof testimonials={testimonials} />
      <FAQ faqs={faqs} />
    </div>
  );
}
