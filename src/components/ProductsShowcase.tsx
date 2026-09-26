"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Eye, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_LIST } from "@/data/companyData";
import SectionHeading from "./SectionHeading";

export default function ProductsShowcase() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={lang === "ar" ? "البرمجيات والحلول الذكية" : "TECHNOLOGY PRODUCTS"}
          title={lang === "ar" ? "برمجيات صناعية ذكية لدعم" : "Specialized Industrial Software &"}
          highlight={lang === "ar" ? "كفاءة المصانع" : "AI Platforms"}
          subtitle={
            lang === "ar"
              ? "حلول برمجية متطورة تشمل منصة سيريبيرا للذكاء الاصطناعي، ونظام فيو 360 للمحاكاة الرقمية، ونظام إدارة الموارد للمقاولين."
              : "Proprietary software suites designed to unlock operational intelligence, photorealistic plant digital twins, and enterprise resource governance."
          }
          align="left"
        />

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS_LIST.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden hover:border-[#F4511E] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              {/* Product Header / Banner */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F4511E] font-bold px-2.5 py-1 rounded bg-orange-100/70 border border-orange-200">
                    {prod.badge}
                  </span>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#F4511E]">
                    {prod.id === "cerebra" ? <Cpu className="w-5 h-5" /> : prod.id === "view360" ? <Eye className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#F4511E] transition-colors">
                    {prod.name}
                  </h3>
                  <div className="text-xs font-mono text-[#F4511E] mt-0.5 font-semibold">{prod.tagline}</div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prod.description}
                </p>

                {/* Key Features */}
                <div className="pt-3 border-t border-slate-200 space-y-2.5">
                  <div className="text-xs font-mono font-bold text-slate-900 uppercase">Core Capabilities:</div>
                  {prod.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">{feat.title}:</strong>{" "}
                        <span className="text-slate-600 line-clamp-1">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0">
                <Link
                  href={`/products/${prod.slug}`}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#F4511E] text-slate-900 hover:text-white py-3 rounded-xl text-xs sm:text-sm font-bold border border-slate-200 hover:border-[#F4511E] transition-all shadow-xs"
                >
                  <span>{lang === "ar" ? "استعراض تفاصيل المنتج" : "Explore Product Architecture"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
