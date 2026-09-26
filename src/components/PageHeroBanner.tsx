"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface PageHeroBannerProps {
  title: string;
  titleAr?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  badge?: string;
}

export default function PageHeroBanner({
  title,
  titleAr,
  breadcrumbs,
  bgImage = "/images/hero_refinery.jpg",
  badge,
}: PageHeroBannerProps) {
  const { lang, isRtl } = useLanguage();

  return (
    <section className="pt-6 pb-4 sm:pt-8 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-[180px] sm:min-h-[220px] lg:min-h-[240px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#071923] text-white flex flex-col justify-center px-6 sm:px-12 lg:px-16 shadow-xl border border-slate-800 group"
      >
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layer Gradient Overlays for High-Contrast Clean Typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071923] via-[#071923]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071923]/90 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(244,81,30,0.15),transparent_70%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-2.5 max-w-2xl py-6">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4511E]/20 border border-[#F4511E]/40 text-[#F4511E] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E] animate-pulse"></span>
              <span>{badge}</span>
            </div>
          )}

          {/* Large Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-tight">
            {lang === "ar" && titleAr ? titleAr : title}
          </h1>

          {/* Breadcrumb Strip */}
          <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-slate-300 pt-1">
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#F4511E] text-slate-300 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={item.active ? "text-[#F4511E] font-bold" : "text-slate-400"}>
                    {item.label}
                  </span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-slate-500 font-bold">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
