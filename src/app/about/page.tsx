"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  Play,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO, HISTORY_TIMELINE } from "@/data/companyData";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero - Matching Reference Mockup */}
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#F4511E]">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span>Company</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#F4511E] font-bold">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12]">
                {lang === "ar" ? (
                  <>
                    أساس راسخ <br />
                    <span className="text-[#F4511E]">لغدٍ أكثر إشراقاً</span>
                  </>
                ) : (
                  <>
                    A Strong Foundation <br />
                    for a <span className="text-[#F4511E]">Brighter Tomorrow</span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Bezel Arabia Company Ltd. is a Saudi based company providing integrated industrial, technology, maintenance and facility solutions with a commitment to quality, safety and long-term partnerships.
              </p>

              {/* Watch Company Profile Button */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => alert("Bezel Arabia Company Profile Video / Brochure")}
                  className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-[#F4511E] group transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#F4511E] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D84315] shadow-md transition-all">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span>{lang === "ar" ? "مشاهدة الملف التعريفي للشركة" : "Watch Company Profile"}</span>
                </button>
              </div>
            </div>

            {/* Right Image: Corporate Building Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Bezel Arabia Corporate Headquarters Jubail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-mono text-orange-400 font-bold">AL JUBAIL INDUSTRIAL CITY</div>
                  <div className="text-sm font-bold text-white">Bezel Arabia Corporate Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Triad - Matching Reference Mockup */}
      <section id="vision" className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3 shadow-xs hover:border-[#F4511E] transition-all">
              <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] w-fit">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
              <div className="text-xs font-mono font-bold text-[#F4511E]">SUSTAINABLE GROWTH</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3 shadow-xs hover:border-[#F4511E] transition-all">
              <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
              <div className="text-xs font-mono font-bold text-[#F4511E]">DELIVER EXCELLENCE</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Values */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 space-y-3 shadow-xs hover:border-[#F4511E] transition-all">
              <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Values</h3>
              <div className="text-xs font-mono font-bold text-[#F4511E]">INTEGRITY & COMMITMENT</div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Uncompromising dedication to safety, client satisfaction, operational transparency, and ethical execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CHRONOLOGY"
            title="Milestones in Our Journey Since 1992"
            subtitle="Three decades of continuous expansion, industrial trust, and national partnerships."
            align="left"
          />

          <div className="relative border-l border-slate-300 ml-4 md:ml-32 space-y-10 mt-12 pl-6 md:pl-10">
            {HISTORY_TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#F4511E] group-hover:scale-125 transition-transform shadow-sm"></div>

                <div className="md:absolute md:-left-32 md:top-1 font-mono text-base font-black text-[#F4511E]">
                  {item.year}
                </div>

                <div className="bg-white border border-slate-200 p-5 rounded-xl max-w-2xl group-hover:border-[#F4511E] shadow-sm transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy & HSE Policy */}
      <section id="policy" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="POLICY & GOVERNANCE"
            title="Quality, Health, Safety & Environmental Mandates"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#F4511E]" />
                <h3 className="text-xl font-bold text-slate-900">Quality Policy (ISO 9001:2015)</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.qualityPolicy}
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500 font-medium">
                • Standardized QA/QC documentation • Calibration compliance • Traceable audits
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#F4511E]" />
                <h3 className="text-xl font-bold text-slate-900">Health, Safety & Environment (HSE) Policy</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.hsePolicy}
              </p>
              <div className="pt-2 text-xs font-mono text-slate-500 font-medium">
                • Zero Lost Time Incidents (LTI) target • PPE enforcement • Environmental protection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="GOVERNANCE"
            title="Operational Organization Structure"
            subtitle="Led by experienced industrial directors, licensed project engineers, and certified HSE inspectors."
            align="center"
          />

          <div className="mt-10 max-w-4xl mx-auto bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="text-xs font-mono text-[#F4511E] font-bold">EXECUTIVE MANAGEMENT</div>
                <div className="text-sm font-bold text-slate-900">Board of Directors & General Management</div>
                <p className="text-xs text-slate-600">Strategic planning, corporate governance, and investment in Saudi industrial capabilities.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="text-xs font-mono text-[#F4511E] font-bold">OPERATIONS & ENGINEERING</div>
                <div className="text-sm font-bold text-slate-900">Project Directors & Technical Leads</div>
                <p className="text-xs text-slate-600">Overseeing CMEI construction, plant O&M contracts, and Valve Workshop operations.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="text-xs font-mono text-[#F4511E] font-bold">QUALITY & HSE GOVERNANCE</div>
                <div className="text-sm font-bold text-slate-900">QA/QC & Safety Inspection Teams</div>
                <p className="text-xs text-slate-600">Ensuring zero-incident compliance with Saudi Aramco, SABIC, and ISO standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
