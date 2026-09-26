"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Gauge, HardHat, Cog, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function IndustrialSection() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const industrialCapabilities = [
    {
      id: "cmei",
      num: "01",
      title: "CMEI Construction",
      titleAr: "إنشاءات الهندسة المدنية والميكانيكية والكهربائية والأجهزة",
      icon: HardHat,
      short: "Turnkey plant construction for petrochemical complexes, refineries, and power stations.",
      points: [
        "High-voltage electrical switchgear, cable ladder network erection, and sub-station hookups",
        "Field instrument installation, pneumatic impulse tubing, and loop testing",
        "Civil structural foundations, blast-resistant control buildings, and drainage",
        "Piping spool pre-fabrication, ASME coded welding, and pipeline modifications",
      ],
      stats: { primary: "100%", label: "ASME / Aramco Standard", sub: "Zero compromise QA/QC" },
      image: "/images/industrial/cmei.jpg",
    },
    {
      id: "om",
      num: "02",
      title: "Operation & Maintenance (O&M)",
      titleAr: "التشغيل والصيانة الصناعية المتكاملة",
      icon: Cog,
      short: "Long-term continuous production maintenance for continuous process plants across Saudi Arabia.",
      points: [
        "20+ years continuous O&M management for Arabian Cement and Saudi Cement facilities",
        "Rotating equipment overhauls: heavy compressors, pumps, slurry systems, and gearboxes",
        "Routine turnaround (TAR) and emergency shutdown maintenance teams",
        "Condition monitoring, thermography analysis, and vibration baseline trending",
      ],
      stats: { primary: "23+ Yrs", label: "Continuous O&M Contracts", sub: "Uninterrupted plant uptime" },
      image: "/images/industrial/om.jpg",
    },
    {
      id: "valves",
      num: "03",
      title: "Valves & Instrumentation Workshop",
      titleAr: "ورشة فحص وصيانة ومعايرة الصمامات بالجبيل",
      icon: Gauge,
      short: "Dedicated testing, repair, seat lapping, and hydrostatic certification workshop in Jubail.",
      points: [
        "Complete overhaul of Control Valves, Safety Relief Valves (PSV), Ball & Globe Valves",
        "API 598 & API 527 hydrostatic, cryogenic, and pneumatic pressure testing",
        "Digital positioner calibration and smart transmitter loop tuning",
        "In-situ mobile valve testing units for rapid emergency plant response",
      ],
      stats: { primary: "API 598", label: "Hydrostatic Testing Certified", sub: "Jubail Workshop Hub" },
      image: "/images/industrial/valves.jpg",
    },
    {
      id: "support",
      num: "04",
      title: "Support Services & Equipment Leasing",
      titleAr: "خدمات الدعم والمساندة وتأجير المعدات الثقيلة",
      icon: Wrench,
      short: "Heavy mobile crane fleet, power generation, manlifts, and certified rigging teams.",
      points: [
        "Certified mobile cranes, boom lifts, and heavy transport vehicle fleet",
        "Heavy-duty industrial diesel generators, welding machines, and air compressors",
        "Rapid site mobilization, temporary utilities setup, and safety marshals",
        "Aramco & SABIC safety inspected and tagged machinery",
      ],
      stats: { primary: "100+", label: "Fleet Units & Power Units", sub: "Fully certified operators" },
      image: "/images/industrial/support.jpg",
    },
  ];

  const current = industrialCapabilities[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-industrial-lines opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <SectionHeading
            eyebrow={lang === "ar" ? "القطاع الصناعي والهندسي" : "INDUSTRIAL DIVISION"}
            title={lang === "ar" ? "أداء صناعي مبني على" : "Built Around Industrial"}
            highlight={lang === "ar" ? "التميز الهندسي" : "Performance"}
            subtitle={
              lang === "ar"
                ? "منشآت تكرير البترول والمصانع البتروكيماوية ومحطات التوليد تعتمد على خبراتنا الهندسية منذ عام 1992."
                : "From turnkey CMEI megaprojects to round-the-clock plant operations, our engineering teams ensure exceptional safety, reliability, and precision."
            }
            align="left"
          />

          <div className="mb-8 lg:mb-14">
            <Link
              href="/services/industrial"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#F4511E] bg-slate-50 border border-slate-300 px-5 py-2.5 rounded-lg hover:border-[#F4511E] transition-all shadow-xs"
            >
              <span>{lang === "ar" ? "عرض جميع الخدمات الصناعية" : "View All Industrial Services"}</span>
              <ArrowRight className="w-4 h-4 text-[#F4511E]" />
            </Link>
          </div>
        </div>

        {/* Interactive Capability Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {industrialCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-orange-50/70 border-[#F4511E] shadow-md shadow-orange-500/10 ring-2 ring-[#F4511E]/20"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? "text-[#F4511E]" : "text-slate-400"}`}>
                    {cap.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#F4511E]" : "text-slate-400"}`} />
                </div>
                <div className={`text-sm font-bold leading-tight ${isActive ? "text-[#F4511E]" : "text-slate-800"}`}>
                  {lang === "ar" ? cap.titleAr : cap.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Capability Showcase Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F4511E] uppercase font-bold tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E]"></span>
                  <span>CAPABILITY #{current.num}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {lang === "ar" ? current.titleAr : current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {current.short}
                </p>

                {/* Bullet Points */}
                <div className="pt-2 space-y-3">
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat & Link */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="font-mono text-2xl font-black text-[#F4511E]">{current.stats.primary}</div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{current.stats.label}</div>
                    <div className="text-slate-500">{current.stats.sub}</div>
                  </div>
                </div>

                <Link
                  href="/services/industrial"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#F4511E] hover:bg-[#D84315] px-5 py-2.5 rounded-lg transition-all shadow-md shadow-orange-500/20"
                >
                  <span>{lang === "ar" ? "تفاصيل الخدمة" : "Read Full Scope"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] w-full overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-[11px] font-mono text-slate-800 font-bold shadow-sm">
                BEZEL_INDUSTRIAL_SPEC
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
