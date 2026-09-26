"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Utensils, Home, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_LIST } from "@/data/companyData";

export default function CampCateringPage() {
  const { lang } = useLanguage();
  const cateringServices = SERVICES_LIST.filter((s) => s.category === "catering");

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <span className="w-2 h-2 rounded-full bg-[#F4511E]"></span>
              <span>CAMP & CATERING DIVISION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              {lang === "ar" ? "إدارة المخيمات والإعاشة الصناعية" : "Turnkey Workforce Accommodations & Industrial Catering"}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Managing 5 executive accommodation compounds, dedicated worker residential camps, and high-volume HACCP certified industrial catering kitchens across Jubail, Yanbu, and Rabigh.
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
