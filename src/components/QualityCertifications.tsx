"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AWARDS_CERTIFICATIONS } from "@/data/companyData";
import SectionHeading from "./SectionHeading";

export default function QualityCertifications() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={lang === "ar" ? "الجودة والسلامة والاعتمادات" : "QUALITY & RECOGNITION"}
          title={lang === "ar" ? "معايير عالمية معتمدة وشهادات" : "Certified Management Systems &"}
          highlight={lang === "ar" ? "تقدير رسمية" : "Client Commendations"}
          subtitle={
            lang === "ar"
              ? "نلتزم بأعلى معايير إدارة الجودة ISO 9001:2015 وبروتوكولات السلامة الصارمة لأرامكو وسابك."
              : "Rigorous QA/QC governance, Aramco vendor qualifications, and proven zero Lost Time Incident safety records."
          }
          align="left"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS_CERTIFICATIONS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200/90 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:border-[#F4511E] hover:shadow-xl transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white text-[#F4511E] border border-slate-200 group-hover:bg-[#F4511E] group-hover:text-white transition-colors">
                    {idx === 0 ? <ShieldCheck className="w-5 h-5" /> : idx === 3 ? <CheckCircle2 className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#F4511E] bg-orange-100/80 px-2.5 py-1 rounded-md border border-orange-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-[#F4511E] font-semibold">{item.issuer}</div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>CERT_VERIFIED</span>
                <span className="text-emerald-600 font-bold">ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
