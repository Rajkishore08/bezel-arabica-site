"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Building, ArrowRight, ArrowUpRight, ChevronRight, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_LIST, ProjectItem } from "@/data/companyData";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All" },
    { id: "industrial", label: "Industrial" },
    { id: "om", label: "O&M" },
    { id: "ei", label: "E&I" },
    { id: "technology", label: "Technology" },
  ];

  const filtered = PROJECTS_LIST.filter((p) => {
    const matchesCat =
      filter === "all" ||
      (filter === "industrial" && (p.category === "industrial" || (p.category as string) === "cmei")) ||
      (filter === "om" && p.category === "om") ||
      (filter === "ei" && p.category === "ei") ||
      (filter === "technology" && (p.category as string) === "technology");
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Projects Hero - Matching Reference Mockup */}
      <section className="relative pt-36 pb-16 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#F4511E]">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#F4511E] font-bold">Projects</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12]">
              {lang === "ar" ? (
                <>
                  تنفيذ مشاريع ناجحة <br />
                  <span className="text-[#F4511E]">عبر القطاعات الحيوية</span>
                </>
              ) : (
                <>
                  Delivering Successful Projects <br />
                  <span className="text-[#F4511E]">Across Key Industries</span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A track record of industrial partnerships and successful project delivery.
            </p>
          </div>

          {/* Filter Tabs - Matching Reference Mockup */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
            <div className="flex flex-wrap items-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    filter === cat.id
                      ? "bg-[#F4511E] text-white shadow-md shadow-orange-500/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4511E] hover:text-[#D84315]"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-bold tracking-wider transition-all ${
                    filter === cat.id
                      ? "bg-[#F4511E] text-white shadow-md shadow-[#F4511E]/20"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search project or client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F4511E] shadow-sm"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <AnimatePresence>
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#F4511E]/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.gallery[0] || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded shadow-sm ${
                          project.status === "Ongoing"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-orange-50 text-[#F4511E] border border-orange-200"
                        }`}
                      >
                        {project.status === "Ongoing" ? "ONGOING" : "COMPLETED"}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded text-[10px] font-mono text-slate-700 border border-slate-200 shadow-sm">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-[#F4511E] font-bold uppercase">
                        {project.categoryLabel}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                        {lang === "ar" ? project.titleAr : project.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {project.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                        <span className="truncate">Client: <strong className="text-slate-900">{project.client}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-4 h-4 text-[#F4511E]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
