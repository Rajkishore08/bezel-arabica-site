"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function CTASection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-industrial-lines opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-white">
          {/* Subtle Orange Glow in Background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F4511E]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Text & Value Proposition */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4511E]/15 border border-[#F4511E]/30 text-[#F4511E] text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>SAUDI ARAMCO & SABIC APPROVED CONTRACTOR</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {lang === "ar" ? (
                  <>
                    جاهزون لدعم مشاريعكم <br />
                    بأعلى <span className="text-[#F4511E]">المعايير الهندسية.</span>
                  </>
                ) : (
                  <>
                    Partner with Bezel Arabia for <br />
                    Your Next <span className="text-[#F4511E]">Industrial Project.</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {lang === "ar"
                  ? "تواصل مع فريقنا الهندسي والتجاري بالجبيل لمناقشة عقود الإنشاءات والصيانة وإدارة المخيمات وحلول تقنية المعلومات."
                  : "Contact our central engineering and project estimation teams in Jubail to discuss CMEI construction, turnaround maintenance, valve servicing, or enterprise ICT."}
              </p>

              {/* Direct Quick Contact Links */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
                <a
                  href={`tel:${COMPANY_INFO.phoneNumbers[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-[#F4511E] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F4511E]" />
                  <span>{COMPANY_INFO.phoneNumbers[0]}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#F4511E] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F4511E]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#F4511E]" />
                  <span>Al Jubail Industrial City, KSA</span>
                </div>
              </div>
            </div>

            {/* CTAs column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>{lang === "ar" ? "طلب عرض سعر / تواصل معنا" : "Request Commercial Proposal"}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3.5 rounded-xl font-bold text-sm transition-all text-center"
              >
                <span>{lang === "ar" ? "تحميل الملف التعريفي للشركة" : "Explore Corporate Credentials"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
