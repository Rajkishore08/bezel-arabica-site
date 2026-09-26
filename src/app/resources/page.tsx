"use client";

import React from "react";
import Image from "next/image";
import { Users, Truck, Building2, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { RESOURCES_DATA } from "@/data/companyData";

export default function ResourcesPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Resources & Fleet"
        titleAr="الموارد والمعدات التشغيلية"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", active: true },
        ]}
        bgImage="/images/heavy_fleet.jpg"
      />

      {/* Intro Narrative Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  أسطول تشغيلي متكامل <br />
                  <span className="text-[#F4511E]">وكوادر فنية ومرافق استراتيجية</span>
                </>
              ) : (
                <>
                  Operational Fleet, <br />
                  <span className="text-[#F4511E]">Certified Teams &amp; Facilities</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "مجهزون بورشة صمامات متقدمة في الجبيل، وأسطول معدات ثقيلة معتمد من أرامكو، وكوادر هندسية متعددة التخصصات، ومجمعات سكنية وإعاشة متكاملة."
                : "Equipped with an advanced valve workshop in Jubail, Aramco-certified heavy equipment fleet, multidisciplinary workforce, and full-service residential catering complexes."}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Detailed Resource Sections */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {RESOURCES_DATA.map((res, idx) => (
            <div
              key={res.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#F4511E] uppercase">
                    RESOURCE CATEGORY 0{idx + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {lang === "ar" ? res.titleAr : res.title}
                  </h2>
                  <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#F4511E] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED CAPACITY</span>
                </div>
              </div>

              {/* Items Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {res.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between hover:border-[#F4511E]/40 hover:bg-orange-50/20 transition-all group"
                  >
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                        {lang === "ar" && item.nameAr ? item.nameAr : item.name}
                      </div>
                      {item.category && (
                        <div className="text-[10px] font-mono uppercase text-slate-400">{item.category}</div>
                      )}
                    </div>
                    <div className="font-mono text-lg font-black text-[#F4511E] bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                      {item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
