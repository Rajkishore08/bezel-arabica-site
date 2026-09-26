"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Factory, Cpu, UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DIVISIONS_DATA = [
  {
    num: "01",
    id: "industrial",
    title: "Industrial",
    titleAr: "القطاع الصناعي",
    icon: Factory,
    iconColor: "bg-orange-500 text-white",
    image: "/images/industrial/cmei.jpg",
    href: "/services/industrial",
    services: [
      "CMEI Construction",
      "Operation & Maintenance",
      "Valves & Instrumentation",
      "Support Services",
    ],
  },
  {
    num: "02",
    id: "information-technology",
    title: "Information Technology",
    titleAr: "تقنية المعلومات والاتصالات",
    icon: Cpu,
    iconColor: "bg-blue-600 text-white",
    image: "/images/it_datacenter.jpg",
    href: "/services/information-technology",
    services: [
      "IT Infrastructure Security",
      "Cisco Services & Solutions",
      "Intelligent Datacentre",
      "IP Telephony",
      "Structured Cabling",
      "Cloud Services",
      "Microsoft Core Infrastructure",
      "Fiber Optic Network",
      "IT Products",
    ],
  },
  {
    num: "03",
    id: "camp-catering",
    title: "Camp & Catering",
    titleAr: "المخيمات والإعاشة وإدارة المرافق",
    icon: UtensilsCrossed,
    iconColor: "bg-orange-500 text-white",
    image: "/images/camp_catering.jpg",
    href: "/services/camp-catering",
    services: [
      "Catering Management",
      "Accommodation",
      "Facility Management",
    ],
  },
];

export default function CoreDivisions() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#071923] text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            {/* Small Orange Dash + Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#F4511E]"></div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#F4511E]">
                {lang === "ar" ? "القطاعات الرئيسية" : "OUR CORE CAPABILITIES"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {lang === "ar" ? (
                <>
                  ثلاثة قطاعات متكاملة. <br />
                  <span className="text-[#F4511E]">من أجل غدٍ أقوى.</span>
                </>
              ) : (
                <>
                  Three Divisions. <br />
                  One <span className="text-[#F4511E]">Stronger Tomorrow.</span>
                </>
              )}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-orange-400 bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-2.5 rounded-full transition-all"
            >
              <span>{lang === "ar" ? "استكشف كافة الخدمات" : "Explore All Services"}</span>
              <ArrowRight className="w-4 h-4 text-[#F4511E]" />
            </Link>
          </div>
        </div>

        {/* 3 Large White Cards on Dark Background */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {DIVISIONS_DATA.map((division, idx) => {
            const Icon = division.icon;
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-white text-slate-900 rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Bar with Icon Circle, Number & Title */}
                  <div className="p-6 pb-4 flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-full ${division.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#F4511E] tracking-wider">
                        {division.num}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {lang === "ar" ? division.titleAr : division.title}
                      </h3>
                    </div>
                  </div>

                  {/* Division Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Service Bullet List */}
                  <div className="p-6 space-y-2.5">
                    {division.services.map((svc) => (
                      <div key={svc} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E] shrink-0"></span>
                        <span>{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Circular Arrow Button */}
                <div className="p-6 pt-0 flex items-center justify-between">
                  <Link
                    href={division.href}
                    className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors"
                  >
                    <span>{lang === "ar" ? "تفاصيل القطاع" : "Explore Division"}</span>
                    <div className="w-9 h-9 rounded-full bg-[#F4511E] text-white flex items-center justify-center group-hover:scale-110 shadow-md transition-all">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
