"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Utensils, Home, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_LIST } from "@/data/companyData";

export default function CampCateringPage() {
  const { lang } = useLanguage();
  const cateringServices = SERVICES_LIST.filter((s) => s.category === "catering");

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Camp & Catering"
        titleAr="إدارة المخيمات والإعاشة الصناعية"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Camp & Catering", active: true },
        ]}
        bgImage="/images/camp_catering.jpg"
      />

      {/* Intro Narrative Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  إدارة المجمعات السكنية <br />
                  <span className="text-[#F4511E]">والإعاشة الغذائية المعتمدة HACCP</span>
                </>
              ) : (
                <>
                  Workforce Accommodations &amp; <br />
                  <span className="text-[#F4511E]">HACCP-Certified Industrial Catering</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "إدارة 5 مجمعات سكنية تنفيذية ومخيمات عمالية مجهزة ومطابخ مركزية معتمدة وفق أعلى معايير الصحة والسلامة في الجبيل وينبع ورابغ."
                : "Managing 5 executive accommodation compounds, dedicated worker camps, and high-capacity HACCP industrial catering kitchens across Jubail, Yanbu, and Rabigh."}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cateringServices.map((svc, idx) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#F4511E]">
                  <span>CAPABILITY #{svc.number}</span>
                  <span>•</span>
                  <span>HACCP COMPLIANT</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === "ar" ? svc.titleAr : svc.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.fullDesc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-800 uppercase">Key Operational Standards:</div>
                  {svc.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
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
