"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, ShieldCheck, Server, Network, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_LIST } from "@/data/companyData";

export default function ITPage() {
  const { lang } = useLanguage();
  const itServices = SERVICES_LIST.filter((s) => s.category === "it");

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <span className="w-2 h-2 rounded-full bg-[#F4511E]"></span>
              <span>INFORMATION TECHNOLOGY DIVISION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              {lang === "ar" ? "حلول وتقنية المعلومات للشركات" : "Enterprise IT Infrastructure & Cybersecurity"}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Certified Cisco systems, intelligent tier-compliant datacenter builds, structured Cat6A/fiber optics, Microsoft core infrastructure, and proprietary industrial AI platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {itServices.map((svc, idx) => (
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
                  <span>ENTERPRISE GRADE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === "ar" ? svc.titleAr : svc.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.fullDesc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-800 uppercase">Key Technical Capabilities:</div>
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
