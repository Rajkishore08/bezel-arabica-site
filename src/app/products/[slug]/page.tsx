"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Cpu, Eye, Briefcase, CheckCircle2, ArrowRight, ShieldCheck, Layers, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_LIST } from "@/data/companyData";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { lang } = useLanguage();
  const product = PRODUCTS_LIST.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS_LIST.filter((p) => p.slug !== resolvedParams.slug);

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E] mb-6 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL PRODUCTS</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E] uppercase px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
              {product.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl font-mono text-[#F4511E]">
              {product.tagline}
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Architecture Details */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Visual and Tech Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Detailed Functional Modules
              </h2>

              <div className="space-y-4">
                {product.features.map((feat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 p-5 rounded-xl space-y-2 hover:border-[#F4511E]/50 shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-[#F4511E]" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-xl space-y-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Technical Specifications
                </h3>

                <div className="space-y-3">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4511E] mt-1.5 shrink-0"></div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <div className="text-xs text-slate-400">Category:</div>
                  <div className="text-sm font-bold text-slate-900">{product.category}</div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Schedule Demo & Technical Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Explore Other Software Suites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="bg-white border border-slate-200 p-6 rounded-xl hover:border-[#F4511E] shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#F4511E]">{rel.category}</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">{rel.name}</div>
                    <p className="text-xs text-slate-500 line-clamp-1">{rel.tagline}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#F4511E] shrink-0" />
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
