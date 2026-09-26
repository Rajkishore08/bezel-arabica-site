"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Eye, Briefcase, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_LIST } from "@/data/companyData";

export default function ProductsPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Our Products"
        titleAr="منتجاتنا وبرمجياتنا"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", active: true },
        ]}
        bgImage="/images/products_banner.jpg"
      />

      {/* Intro Narrative Section - Matching Reference Mockup */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  حلول تقنية مبتكرة <br />
                  <span className="text-[#F4511E]">لمستقبل صناعي رقمي متصل</span>
                </>
              ) : (
                <>
                  Innovative Solutions <br />
                  for a <span className="text-[#F4511E]">Connected Future</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "منتجات وحلول برمجية متطورة صُممت لرفع كفاءة وإنتاجية المنشآت الصناعية والمؤسسات التشغيلية في المملكة."
                : "Technology products designed to enhance operational efficiency, asset integrity, and workforce productivity across industrial and enterprise sectors."}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Product Cards - Matching Reference Mockup */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS_LIST.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F4511E] transition-all flex flex-col justify-between group p-6 sm:p-8"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 text-[#F4511E] flex items-center justify-center">
                    {prod.id === "cerebra" ? (
                      <Cpu className="w-7 h-7" />
                    ) : prod.id === "view360" ? (
                      <Eye className="w-7 h-7" />
                    ) : (
                      <Briefcase className="w-7 h-7" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#F4511E] transition-colors">
                      {prod.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 mt-1 font-medium">
                      {prod.category}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-100">
                    {prod.specifications.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors"
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="w-4 h-4 text-[#F4511E] group-hover:translate-x-1 transition-transform" />
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
