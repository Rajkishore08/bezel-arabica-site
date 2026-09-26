"use client";

import React from "react";
import Image from "next/image";
import { Handshake, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { PARTNERS_LIST } from "@/data/companyData";

export default function PartnersPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Strategic Partners"
        titleAr="شركاء التحالف الاستراتيجي"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partners", active: true },
        ]}
        bgImage="/images/it_datacenter.jpg"
      />

      {/* Intro Narrative Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  تحالفات هندسية وتقنية <br />
                  <span className="text-[#F4511E]">تدعم رؤية المملكة 2030</span>
                </>
              ) : (
                <>
                  Technology &amp; Engineering <br />
                  <span className="text-[#F4511E]">Strategic Alliances</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "شراكات استراتيجية مع رواد التكنولوجيا الصناعية، والذكاء الاصطناعي، وشبكات الألياف البصرية لتقديم حلول متكاملة في المملكة."
                : "Partnering with global innovators in Industrial AI, optical networks, structural engineering, and cloud infrastructure to deliver turnkey excellence across Saudi Arabia."}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS_LIST.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-[#F4511E]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    {partner.logo ? (
                      <div className="relative h-10 w-36 flex items-center justify-start">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={140}
                          height={40}
                          className="max-h-9 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] group-hover:bg-[#F4511E] group-hover:text-white transition-colors">
                        <Handshake className="w-6 h-6" />
                      </div>
                    )}
                    <span className="text-xs font-mono text-[#F4511E] font-bold">
                      STRATEGIC ALLIANCE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-mono text-[#F4511E] mt-1">{partner.specialty}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>DEPLOYED IN KSA</span>
                  <span className="text-emerald-600 font-bold">ACTIVE ALLIANCE</span>
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
