"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function TrustIntro() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Reference Layout */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small Orange Dash + Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-[2px] bg-[#F4511E]"></div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#F4511E]">
                {lang === "ar" ? "عن بيزل العربية" : "ABOUT BEZEL ARABIA"}
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]"
            >
              {lang === "ar" ? (
                <>
                  شريك موثوق <br />
                  <span className="text-[#F4511E]">في النمو الصناعي</span>
                </>
              ) : (
                <>
                  A Trusted Partner <br />
                  in Industrial Growth
                </>
              )}
            </motion.h2>

            {/* Actual existing Bezel Arabia company description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              <p>
                <strong className="text-slate-900 font-bold">Bezel Arabia Company Ltd.</strong> is a Saudi based company providing integrated industrial, technology, maintenance and facility solutions with a commitment to quality, safety and long-term partnerships.
              </p>
              <p className="text-sm sm:text-base text-slate-500">
                Established in 1992 in Al Jubail Industrial City, we have developed a proven track record delivering turnkey CMEI construction, plant operations & maintenance, specialized valve services, enterprise IT, and camp management for premier national leaders including Saudi Aramco and SABIC.
              </p>
            </motion.div>

            {/* CTA: Learn More About Us → with Orange circle arrow button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 group text-slate-900 hover:text-[#F4511E] font-bold text-base transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#F4511E] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D84315] shadow-md transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>{lang === "ar" ? "تعرف على المزيد عنا" : "Learn More About Us"}</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Large Industrial Image with Overlay Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-80 sm:h-[420px] lg:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group"
            >
              <Image
                src="/images/about_engineer.jpg"
                alt="Delivering Excellence Across Industries - Bezel Arabia Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent"></div>

              {/* Overlay text on bottom left of image as in mockup */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xl sm:text-2xl font-black leading-tight text-white">
                  {lang === "ar" ? "تقديم التميز عبر كافة القطاعات" : "Delivering Excellence Across Industries"}
                </div>
                <div className="text-xs font-mono text-orange-400 font-medium">
                  AL JUBAIL • JEDDAH • RABIGH • YANBU
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
