"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PARTNERS_LIST } from "@/data/companyData";
import SectionHeading from "./SectionHeading";

export default function PartnersSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-[#F8FAFC] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow={lang === "ar" ? "التحالفات والشركاء" : "PARTNER ECOSYSTEM"}
            title={lang === "ar" ? "شراكات تقنية وصناعية" : "Strategic Alliances &"}
            highlight={lang === "ar" ? "عالمية موثوقة" : "Technology Partners"}
            subtitle={
              lang === "ar"
                ? "نتعاون مع رواد الذكاء الاصطناعي والهندسة المتخصصة لنقل أحدث المعايير العالمية للمملكة."
                : "Collaborating with cutting-edge technology vendors and specialized engineering consortia to deploy best-in-class solutions."
            }
            align="left"
          />

          <div className="mb-8 md:mb-14">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#F4511E] bg-white border border-slate-300 px-4 py-2 rounded-lg hover:border-[#F4511E] transition-all"
            >
              <span>{lang === "ar" ? "تفاصيل الشراكات" : "Explore All Partners"}</span>
              <ArrowRight className="w-4 h-4 text-[#F4511E]" />
            </Link>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS_LIST.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-slate-200/90 p-6 rounded-2xl hover:border-[#F4511E] transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  {partner.logo ? (
                    <div className="relative h-9 w-32 flex items-center justify-start">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={130}
                        height={36}
                        className="max-h-8 w-auto object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <span className="font-mono text-xs font-bold text-[#F4511E] uppercase tracking-wider">
                      {partner.specialty}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-bold">
                    ALLIANCE
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-mono text-[#F4511E] mt-0.5">{partner.specialty}</div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {partner.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>DEPLOYED IN KSA</span>
                <span className="text-[#F4511E] font-bold">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
