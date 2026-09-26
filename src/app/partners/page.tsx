"use client";

import React from "react";
import Image from "next/image";
import { Handshake, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { PARTNERS_LIST } from "@/data/companyData";

export default function PartnersPage() {
  const { lang } = useLanguage();

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
              <span>STRATEGIC ALLIANCES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              {lang === "ar" ? "شركاء التحالف التقني والصناعي" : "Strategic Technology & Engineering Partnerships"}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Partnering with global innovators in Industrial AI, structural engineering, optical networks, and cloud virtualization to deliver state-of-the-art turnkey solutions in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS_LIST.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-[#F4511E]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    {partner.logo ? (
                      <div className="relative h-10 w-36 flex items-center justify-start">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={140}
                          height={40}
                          className="max-h-9 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] group-hover:bg-[#F4511E] group-hover:text-white transition-colors">
                        <Handshake className="w-6 h-6" />
                      </div>
                    )}
                    <span className="text-xs font-mono text-[#F4511E] font-bold">
                      STRATEGIC ALLIANCE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-mono text-[#F4511E] mt-1">{partner.specialty}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>DEPLOYED IN KSA</span>
                  <span className="text-emerald-600 font-bold">ACTIVE ALLIANCE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
