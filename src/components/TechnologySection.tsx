"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Server,
  Network,
  PhoneCall,
  Cloud,
  Layers,
  Cpu,
  Radio,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function TechnologySection() {
  const { lang } = useLanguage();

  const itServices = [
    {
      id: "sec",
      title: "IT Infrastructure Security",
      titleAr: "أمن البنية التحتية والشبكات",
      icon: ShieldAlert,
      desc: "Perimeter Next-Gen Firewall (NGFW), threat mitigation, NCA compliance auditing, and endpoint defense.",
      tags: ["NGFW / IPS", "NCA Alignment", "SIEM & SOC"],
    },
    {
      id: "cisco",
      title: "Cisco Services & Solutions",
      titleAr: "حلول وشبكات سيسكو المعتمدة",
      icon: Network,
      desc: "Core routing, switching, high-availability clusters, wireless point-to-point links, and Smart Net support.",
      tags: ["Core Switches", "QoS & HA", "Smart Net"],
    },
    {
      id: "dc",
      title: "Intelligent Datacentre",
      titleAr: "مراكز البيانات الذكية",
      icon: Server,
      desc: "Tier-compliant datacenter design, server racks, hot/cold aisle containment, UPS power, and environmental sensors.",
      tags: ["Server Racks", "Redundant UPS", "Sensors"],
    },
    {
      id: "ipt",
      title: "IP Telephony & Unified Comm.",
      titleAr: "الاتصالات الهاتفية عبر الشبكة",
      icon: PhoneCall,
      desc: "Cisco CallManager, IP-PBX, SIP trunking, PSTN/E1 integration, and Microsoft Exchange voicemail bridge.",
      tags: ["CallManager", "SIP Trunking", "E1 Gateway"],
    },
    {
      id: "cable",
      title: "Structured Cabling & Fiber",
      titleAr: "التمديدات الشبكية والألياف الضوئية",
      icon: Radio,
      desc: "Cat6A/Cat7 copper cabling and OS2/OM4 single/multi-mode fiber splicing, OTDR certification, and tray routing.",
      tags: ["Cat6A / Cat7", "Fiber Splicing", "OTDR Testing"],
    },
    {
      id: "cloud",
      title: "Microsoft & Cloud Infrastructure",
      titleAr: "البنية التحتية لمايكروسوفت والسحابة",
      icon: Cloud,
      desc: "Active Directory multi-site design, Exchange migration, hybrid cloud hosting, and automated backup as a service.",
      tags: ["Active Directory", "Hybrid Cloud", "Disaster Recovery"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F1F5F9] relative border-b border-slate-200">
      {/* Network / Tech dot grid pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14">
          <SectionHeading
            eyebrow={lang === "ar" ? "قطاع تقنية المعلومات" : "INFORMATION TECHNOLOGY"}
            title={lang === "ar" ? "البنية التحتية التقنية" : "Technology Infrastructure for"}
            highlight={lang === "ar" ? "للمؤسسات الحديثة" : "Modern Enterprise"}
            subtitle={
              lang === "ar"
                ? "حلول متطورة في أمن المعلومات وشبكات سيسكو ومراكز البيانات الذكية والألياف البصرية للمصانع والمنشآت الحيوية."
                : "Engineered ICT, cybersecurity, datacenter resilience, and optical network connectivity powering mission-critical industrial operations."
            }
            align="left"
          />

          <div className="mb-8 lg:mb-14">
            <Link
              href="/services/information-technology"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#F4511E] bg-white border border-slate-300 px-5 py-2.5 rounded-lg hover:border-[#F4511E] transition-all shadow-xs"
            >
              <span>{lang === "ar" ? "استكشف خدمات التقنية" : "Explore IT Services"}</span>
              <ArrowRight className="w-4 h-4 text-[#F4511E]" />
            </Link>
          </div>
        </div>

        {/* 6-Grid Technical Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-[#F4511E] hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-50 text-[#F4511E] border border-slate-200 group-hover:bg-[#F4511E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold">
                      SEC_ID_0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                    {lang === "ar" ? svc.titleAr : svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Banner for Industrial Software (Cerebra & View 360) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-[#F4511E] shrink-0">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-[#F4511E] font-bold">
                PROPRIETARY INDUSTRIAL AI & DIGITAL TWINS
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Powered by CEREBRA Industrial AI & VIEW 360 Plant Visualization
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Advanced physics-informed machine learning and 360-degree interactive digital twin walkthroughs for asset-heavy petrochemical complexes.
              </p>
            </div>
          </div>

          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white px-5 py-3 rounded-lg text-sm font-bold shadow-md shadow-orange-500/20 transition-all"
          >
            <span>{lang === "ar" ? "استكشف البرمجيات الصناعية" : "Explore Software Suite"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
