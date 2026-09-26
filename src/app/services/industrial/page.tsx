"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_LIST } from "@/data/companyData";

export default function IndustrialServicesPage() {
  const { lang } = useLanguage();
  const industrialServices = SERVICES_LIST.filter((s) => s.category === "industrial");

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Industrial Division"
        titleAr="خدمات القطاع الصناعي والهندسي"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Industrial", active: true },
        ]}
        bgImage="/images/cmei_construction.jpg"
      />

      {/* Intro Narrative Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  خدمات هندسية وإنشائية متكاملة <br />
                  <span className="text-[#F4511E]">للمنشآت البتروكيماوية والطاقة</span>
                </>
              ) : (
                <>
                  Industrial Engineering &amp; <br />
                  <span className="text-[#F4511E]">Turnkey Construction Services</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "تنفيذ مشاريع CMEI الشاملة وأعمال الصيانة الميكانيكية الشاملة وتجهيز وتوريد الصمامات الصناعية طبقاً لأعلى المعايير."
                : "Delivering turnkey Civil, Mechanical, Electrical, and Instrumentation (CMEI) construction, plant turnaround maintenance, and certified valve services for energy leaders."}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industrialServices.map((svc, idx) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-sm ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#F4511E]">
                  <span>CAPABILITY #{svc.number}</span>
                  <span>•</span>
                  <span>ISO 9001 COMPLIANT</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === "ar" ? svc.titleAr : svc.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.fullDesc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-900 uppercase">Key Technical Capabilities:</div>
                  {svc.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
