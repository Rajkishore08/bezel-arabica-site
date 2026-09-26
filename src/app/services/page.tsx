"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { SERVICES_LIST } from "@/data/companyData";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"industrial" | "it" | "catering">("industrial");

  const filteredServices = SERVICES_LIST.filter((s) => s.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner - Matching Mockup */}
      <PageHeroBanner
        title="Our Services"
        titleAr="خدماتنا وحلولنا"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", active: true },
        ]}
        bgImage="/images/hero_refinery.jpg"
      />

      {/* Section Intro & Tabs - Matching Reference Mockup */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  حلول شاملة <br />
                  <span className="text-[#F4511E]">عبر قطاعات متعددة</span>
                </>
              ) : (
                <>
                  Comprehensive Solutions <br />
                  <span className="text-[#F4511E]">Across Multiple Industries</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Delivering integrated services with expertise, technology and a commitment to quality.
            </p>
          </div>

          {/* Division Filter Tabs - Matching Reference Mockup */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("industrial")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "industrial"
                  ? "bg-[#F4511E] text-white shadow-md shadow-orange-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Industrial
            </button>
            <button
              onClick={() => setActiveTab("it")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "it"
                  ? "bg-[#F4511E] text-white shadow-md shadow-orange-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Information Technology
            </button>
            <button
              onClick={() => setActiveTab("catering")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "catering"
                  ? "bg-[#F4511E] text-white shadow-md shadow-orange-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Camp & Catering
            </button>
          </div>
        </div>
      </section>

      {/* Services Cards Grid - Matching Reference Mockup */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F4511E] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs font-mono font-bold text-[#F4511E]">
                      #{svc.number} {svc.categoryLabel.toUpperCase()}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors leading-tight">
                      {lang === "ar" ? svc.titleAr : svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {svc.shortDesc}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      {svc.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4511E] mt-1 shrink-0"></span>
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${svc.category === "industrial" ? "industrial" : svc.category === "it" ? "information-technology" : "camp-catering"}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors"
                  >
                    <span>{lang === "ar" ? "تفاصيل الخدمة" : "Learn More"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F4511E] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
