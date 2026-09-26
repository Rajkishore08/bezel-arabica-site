"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Building2,
  Cpu,
  UtensilsCrossed,
  Layers,
  Award,
  Shield,
  Sparkles,
  Cog,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_PILLARS = [
  {
    num: "01",
    subNum: "01/",
    label: "INDUSTRIAL SOLUTIONS",
    labelAr: "الحلول الصناعية",
    link: "/services/industrial",
  },
  {
    num: "02",
    subNum: "02/",
    label: "TECHNOLOGY INFRASTRUCTURE",
    labelAr: "البنية التحتية والتقنية",
    link: "/services/information-technology",
  },
  {
    num: "03",
    subNum: "03/",
    label: "CAMP & CATERING FACILITIES",
    labelAr: "المخيمات والإعاشة والمرافق",
    link: "/services/camp-catering",
  },
];

const TRUST_BAR_ITEMS = [
  {
    title: "Trusted Partner",
    subtitle: "Across Saudi Arabia",
    titleAr: "شريك موثوق",
    subtitleAr: "عبر المملكة العربية السعودية",
    icon: Shield,
  },
  {
    title: "Diverse Capabilities",
    subtitle: "Industrial • Technology • Facilities",
    titleAr: "قدرات متنوعة",
    subtitleAr: "صناعية • تقنية • مرافق وإعاشة",
    icon: Cog,
  },
  {
    title: "Commitment to",
    subtitle: "Quality & Safety",
    titleAr: "التزام راسخ",
    subtitleAr: "بالجودة والسلامة المهنية",
    icon: ShieldCheck,
  },
  {
    title: "Building Sustainable",
    subtitle: "Partnerships",
    titleAr: "بناء شراكات",
    subtitleAr: "استراتيجية ومستدامة",
    icon: Award,
  },
];

export default function Hero() {
  const { lang } = useLanguage();
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[calc(100vh-100px)] flex flex-col justify-between overflow-hidden bg-[#071923] text-white pt-10 sm:pt-14 pb-0 border-b border-slate-800">
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_refinery.jpg"
          alt="Saudi Industrial Petrochemical Complex & Engineering Facility"
          fill
          priority
          className="object-cover object-center scale-100"
        />

        {/* Cinematic Multi-Layer Gradient Overlays precisely matching reference screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071923]/95 via-[#071923]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071923] via-[#071923]/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(244,81,30,0.18),transparent_60%)]"></div>
      </div>

      {/* Main Center Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            {/* Top Uppercase Technical Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-mono tracking-[0.25em] text-slate-300 font-semibold uppercase"
            >
              <span>{lang === "ar" ? "حلول هندسية" : "ENGINEERING"}</span>
              <span className="text-[#F4511E] font-bold">|</span>
              <span>{lang === "ar" ? "بنية تقنية" : "TECHNOLOGY"}</span>
              <span className="text-[#F4511E] font-bold">|</span>
              <span>{lang === "ar" ? "خدمات ومرافق" : "FACILITY SOLUTIONS"}</span>
            </motion.div>

            {/* Main Headline with exact styling from reference */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-white tracking-tight leading-[1.05]">
                {lang === "ar" ? (
                  <>
                    حلول هندسية متكاملة <br />
                    من أجل <span className="text-[#F4511E]">غدٍ أفضل.</span>
                  </>
                ) : (
                  <>
                    Engineering <br />
                    Solutions for <br />
                    a <span className="text-[#F4511E]">Better Tomorrow.</span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-xl leading-relaxed font-normal"
            >
              {lang === "ar"
                ? "حلول صناعية وتقنية وصيانة وإدارة مرافق متكاملة عبر مختلف مناطق المملكة العربية السعودية."
                : "Integrated industrial, technology, maintenance and facility solutions across Saudi Arabia."}
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary Orange Button */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 bg-[#F4511E] hover:bg-[#D84315] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>{lang === "ar" ? "استكشف خدماتنا" : "Explore Our Services"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Outlined Pill Button with Play Icon */}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 bg-black/30 hover:bg-black/45 text-white border border-white/50 hover:border-white px-6 py-3.5 rounded-full font-bold text-sm sm:text-base backdrop-blur-md transition-all group"
              >
                <div className="w-6 h-6 rounded-full border border-white/80 flex items-center justify-center text-white group-hover:border-[#F4511E] group-hover:text-[#F4511E] transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>{lang === "ar" ? "مشاهدة مشاريعنا" : "View Our Projects"}</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Vertical Capability Navigator (Exact Reference Design) */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:items-end space-y-6 lg:space-y-8 lg:pr-4">
            <div className="space-y-6 lg:space-y-8 relative">
              {/* Subtle vertical indicator line */}
              <div className="hidden lg:block absolute right-[-20px] top-2 bottom-2 w-[1px] bg-white/20"></div>

              {HERO_PILLARS.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <Link
                    key={pillar.num}
                    href={pillar.link}
                    onMouseEnter={() => setActivePillar(idx)}
                    className="flex items-start gap-4 text-left group cursor-pointer"
                  >
                    <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#F4511E] leading-none shrink-0 group-hover:scale-110 transition-transform">
                      {pillar.num}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                        {pillar.subNum}
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#F4511E] transition-colors tracking-wide leading-tight">
                        {lang === "ar" ? pillar.labelAr : pillar.label}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Trust Bar (Exact Reference Match) */}
      <div className="relative z-10 w-full bg-[#081116]/85 backdrop-blur-md border-t border-white/10 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_BAR_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3.5 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#F4511E]/40 bg-[#F4511E]/10 flex items-center justify-center text-[#F4511E] shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {lang === "ar" ? item.titleAr : item.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-tight font-normal">
                      {lang === "ar" ? item.subtitleAr : item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
