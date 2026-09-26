"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function LegacyToModernComparison() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-[#F1F5F9] relative border-b border-slate-200">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={lang === "ar" ? "رؤية التطوير الرقمي" : "FROM LEGACY TO MODERN"}
          title={lang === "ar" ? "تطوير التجربة الرقمية مع الحفاظ على" : "Modernizing the Digital Experience While"}
          highlight={lang === "ar" ? "الهوية والمحتوى الراسخ" : "Preserving Established Identity"}
          subtitle={
            lang === "ar"
              ? "مقارنة توضيحية لنموذج التطوير المقترح لتحويل موقع بيزل العربية إلى منصة تفاعلية فائقة السرعة والأناقة."
              : "A positive architectural evolution designed to showcase Bezel Arabia's true corporate stature and engineering capabilities to global clients."
          }
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Legacy / Current Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  EXISTING PLATFORM
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                  Legacy Architecture
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Traditional Web Setup
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The existing site established Bezel Arabia&apos;s digital identity with verified business records, using traditional HTML/PHP pages.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span>Traditional PHP / jQuery template foundation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span>Static page reloads on navigation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span>Desktop-centric presentation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span>Basic tabular lists of projects and resources</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono font-semibold">
              All company records preserved 100%
            </div>
          </motion.div>

          {/* Proposed / Modern Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-[#F4511E] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl shadow-orange-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/60 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-[#F4511E] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PROPOSED NEXT-GEN PLATFORM</span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-orange-100 text-[#F4511E] border border-orange-200 font-bold">
                  Next.js 16 + React 19
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                Interactive Industrial Enterprise Experience
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Elevates Bezel Arabia into a premier digital experience worthy of international energy and engineering clients, with fluid animations and instantaneous page loads.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span><strong>Next.js App Router:</strong> Sub-second page transitions & top SEO rankings</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span><strong>Fluid Framer Motion:</strong> Restrained engineering animations and micro-interactions</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span><strong>Bilingual EN & AR:</strong> Native RTL support with authentic corporate Arabic typography</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span><strong>Interactive Capabilities:</strong> Real-time project filters, case study demos, and resource calculators</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#F4511E] font-mono font-bold relative z-10">
              <span>READY FOR PRODUCTION DEPLOYMENT</span>
              <Zap className="w-4 h-4 text-[#F4511E]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
