"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building, ArrowUpRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_LIST } from "@/data/companyData";
import SectionHeading from "./SectionHeading";

export default function ProjectsShowcase() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: lang === "ar" ? "جميع المشاريع" : "ALL PROJECTS" },
    { id: "ei", label: lang === "ar" ? "الكهرباء والأجهزة الدقيقة" : "E&I CONSTRUCTION" },
    { id: "om", label: lang === "ar" ? "التشغيل والصيانة" : "O&M CONTRACTS" },
    { id: "industrial", label: lang === "ar" ? "المشاريع الصناعية" : "INDUSTRIAL / POWER" },
  ];

  const filteredProjects =
    filter === "all"
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === filter);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-slate-200">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow={lang === "ar" ? "سجل الإنجازات" : "SELECTED PROJECTS"}
            title={lang === "ar" ? "مشاريع كبرى لرواد" : "Proven Execution for Saudi"}
            highlight={lang === "ar" ? "الصناعة السعودية" : "Industrial Leaders"}
            subtitle={
              lang === "ar"
                ? "مشاريع معتمدة وموثقة لشركات أرامكو، صدارة، الإسمنت، وتحلية المياه أُنجزت بأعلى معايير السلامة والجودة."
                : "Real, verified projects delivered for Saudi Aramco, Sadara, Arabian Cement, and SWCC spanning 30+ years."
            }
            align="left"
          />

          <div className="mb-8 md:mb-14">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#F4511E] bg-white border border-slate-300 px-5 py-2.5 rounded-lg hover:border-[#F4511E] transition-all shadow-xs"
            >
              <span>{lang === "ar" ? "عرض كل المشاريع" : "View Full Portfolio"}</span>
              <ChevronRight className="w-4 h-4 text-[#F4511E]" />
            </Link>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-bold tracking-wider transition-all ${
                filter === cat.id
                  ? "bg-[#F4511E] text-white shadow-md shadow-orange-500/20"
                  : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-[#F4511E] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.gallery[0] || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md shadow-sm ${
                        project.status === "Ongoing"
                          ? "bg-emerald-600 text-white"
                          : "bg-[#F4511E] text-white"
                      }`}
                    >
                      {project.status === "Ongoing" ? "ONGOING PARTNERSHIP" : "COMPLETED PROJECT"}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-800 font-bold border border-slate-200 shadow-sm">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#F4511E] font-bold uppercase tracking-wider">
                      {project.categoryLabel}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors line-clamp-2">
                      {lang === "ar" ? project.titleAr : project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {project.scope}
                    </p>
                  </div>

                  {/* Metadata pills */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                      <span className="truncate">Client: <strong className="text-slate-900">{project.client}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>

                  {/* View Project Detail Demo Link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors"
                    >
                      <span>{lang === "ar" ? "استعراض تفاصيل المشروع" : "View Project Case Study"}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F4511E]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
