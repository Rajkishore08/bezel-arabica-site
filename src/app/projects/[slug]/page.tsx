"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Building, CheckCircle2, ArrowRight, ShieldCheck, ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS_LIST } from "@/data/companyData";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { lang } = useLanguage();
  const project = PROJECTS_LIST.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS_LIST.filter((p) => p.slug !== resolvedParams.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E] mb-6 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#F4511E] uppercase px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
                {project.categoryLabel}
              </span>
              <span
                className={`text-xs font-mono font-bold uppercase px-2.5 py-1 rounded ${
                  project.status === "Ongoing"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-orange-50 text-[#F4511E] border border-orange-200"
                }`}
              >
                {project.status === "Ongoing" ? "ONGOING PARTNERSHIP" : "COMPLETED EXECUTION"}
              </span>
              <span className="text-xs font-mono text-slate-400">{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              {lang === "ar" ? project.titleAr : project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.scope}
            </p>
          </div>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Visual & Info Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Scope and Overview */}
            <div className="lg:col-span-8 space-y-8">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={project.gallery[0] || "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Project Overview</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Deliverables & Technical Scope</h3>
                <div className="space-y-3">
                  {project.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.highlights && (
                <div className="pt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-xs font-mono px-3 py-1 rounded bg-orange-50 border border-orange-200 text-[#F4511E] font-bold">
                      ★ {h}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right Project Metadata Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm sticky top-28">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Project Data Sheet
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-slate-100 space-y-1">
                    <span className="text-slate-400 block font-mono text-xs">CLIENT:</span>
                    <span className="font-bold text-slate-900 text-base">{project.client}</span>
                  </div>

                  <div className="pb-3 border-b border-slate-100 space-y-1">
                    <span className="text-slate-400 block font-mono text-xs">MAIN CONTRACTOR:</span>
                    <span className="font-bold text-[#F4511E]">{project.mainContractor}</span>
                  </div>

                  <div className="pb-3 border-b border-slate-100 space-y-1">
                    <span className="text-slate-400 block font-mono text-xs">LOCATION:</span>
                    <span className="font-semibold text-slate-800">{project.location}</span>
                  </div>

                  <div className="pb-3 border-b border-slate-100 space-y-1">
                    <span className="text-slate-400 block font-mono text-xs">CONTRACT TIMELINE:</span>
                    <span className="font-semibold text-slate-800">{project.year}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 block font-mono text-xs">COMPLIANCE:</span>
                    <span className="font-semibold text-emerald-600">100% Aramco / SABIC QA/QC Standard</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Inquire About Similar Execution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Related Industrial Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/projects/${rel.slug}`}
                  className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-[#F4511E] shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#F4511E]">{rel.client}</div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">{rel.title}</div>
                    <p className="text-xs text-slate-500 line-clamp-1">{rel.scope}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#F4511E] shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
