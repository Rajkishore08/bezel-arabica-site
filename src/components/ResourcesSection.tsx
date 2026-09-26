"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Truck, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESOURCES_DATA } from "@/data/companyData";
import SectionHeading from "./SectionHeading";

export default function ResourcesSection() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: lang === "ar" ? "الكوادر البشرية" : "MANPOWER FLEET", icon: Users },
    { label: lang === "ar" ? "أسطول المعدات" : "EQUIPMENT & VEHICLES", icon: Truck },
    { label: lang === "ar" ? "المرافق والورش" : "FACILITIES & WORKSHOPS", icon: Building2 },
  ];

  const current = RESOURCES_DATA[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-slate-200">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <SectionHeading
            eyebrow={lang === "ar" ? "الموارد والقدرات التشغيلية" : "OUR RESOURCES"}
            title={lang === "ar" ? "جاهزية تشغيلية وأسطول" : "Certified Workforce Fleet &"}
            highlight={lang === "ar" ? "هندسي متكامل" : "Physical Infrastructure"}
            subtitle={
              lang === "ar"
                ? "إمكانيات بشرية ومعدات ثقيلة وورش متخصصة تلبي متطلبات أكبر المشاريع الصناعية بالمملكة."
                : "Verified operational manpower, heavy mobile equipment fleet, and specialized workshops ready for instant project mobilization."
            }
            align="left"
          />

          <div className="mb-8 lg:mb-14">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#F4511E] bg-white border border-slate-300 px-5 py-2.5 rounded-lg hover:border-[#F4511E] transition-all shadow-xs"
            >
              <span>{lang === "ar" ? "عرض تفاصيل الموارد" : "View Complete Resource Breakdown"}</span>
              <ArrowRight className="w-4 h-4 text-[#F4511E]" />
            </Link>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2.5 border ${
                  isActive
                    ? "bg-[#F4511E] text-white border-[#F4511E] shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Resource Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-lg space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {lang === "ar" ? current.titleAr : current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {current.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#F4511E] bg-orange-50 px-3.5 py-1.5 rounded-lg border border-orange-200 shrink-0 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>ARAMCO / SABIC INSPECTED</span>
              </div>
            </div>

            {/* Resource Table / Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between hover:border-[#F4511E] transition-colors group shadow-xs"
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                      {lang === "ar" && item.nameAr ? item.nameAr : item.name}
                    </div>
                    {item.category && (
                      <div className="text-[10px] font-mono uppercase text-slate-500 font-medium">{item.category}</div>
                    )}
                  </div>
                  <div className="font-mono text-lg font-black text-[#F4511E] bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                    {item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
