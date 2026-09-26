"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, Home, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function CampCateringSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={lang === "ar" ? "قطاع الإعاشة وإدارة المرافق" : "CAMP & CATERING DIVISION"}
          title={lang === "ar" ? "حلول متكاملة لإدارة المخيمات" : "Workforce Accommodation &"}
          highlight={lang === "ar" ? "والإعاشة الصناعية" : "Industrial Catering"}
          subtitle={
            lang === "ar"
              ? "نوفر مجمعات سكنية مجهزة وخدمات إعاشة وتموين غذائي متوافقة مع أعلى معايير السلامة والصحة المهنية لآلاف الكوادر الهندسية والعمالية."
              : "Comprehensive facility management, executive residential compounds, and high-volume HACCP-certified industrial catering across Jubail, Yanbu, and Rabigh."
          }
          align="left"
        />

        {/* 2-Column High-Impact Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Catering Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between group hover:border-[#F4511E] transition-all"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Industrial Catering & Commercial Kitchen Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-lg text-xs font-mono text-[#F4511E] border border-slate-200 flex items-center gap-1.5 font-bold shadow-sm">
                <Utensils className="w-3.5 h-3.5" />
                <span>HACCP COMPLIANT</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "إدارة الإعاشة والتموين الصناعي" : "Industrial Catering Management"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Delivering thousands of nutritious daily meals prepared by multi-ethnic culinary experts in state-of-the-art central commercial kitchens.
                </p>
                
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                    <span>Multi-ethnic customized menus (Arabic, Asian, Western)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                    <span>HACCP & ISO 22000 compliant commercial kitchens</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                    <span>VIP executive banquets & remote site packed meal logistics</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-medium">CATERING_DIVISION</span>
                <Link
                  href="/services/camp-catering"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F4511E] hover:text-[#D84315]"
                >
                  <span>{lang === "ar" ? "تفاصيل خدمات الإعاشة" : "Explore Catering"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Accommodation & Facility Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between group hover:border-[#F4511E] transition-all"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                alt="Executive Accommodation and Workforce Camps in Jubail and Western Province"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-lg text-xs font-mono text-[#F4511E] border border-slate-200 flex items-center gap-1.5 font-bold shadow-sm">
                <Home className="w-3.5 h-3.5" />
                <span>5 EXECUTIVE COMPOUNDS</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "إدارة المجمعات السكنية والمرافق" : "Accommodation & Facility Management"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Turnkey management of executive residences, senior staff quarters, and large-scale industrial worker camps in Jubail, Yanbu, and Rabigh.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                    <span>Fully furnished executive villas and staff accommodation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                    <span>24/7 security, reception, commercial laundry, and housekeeping</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0" />
                    <span>Comprehensive HVAC, electrical, and facility maintenance</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 font-medium">FACILITY_MGMT</span>
                <Link
                  href="/services/camp-catering"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F4511E] hover:text-[#D84315]"
                >
                  <span>{lang === "ar" ? "تفاصيل إدارة المخيمات" : "Explore Housing"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
