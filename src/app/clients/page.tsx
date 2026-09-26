"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { CLIENTS_LIST } from "@/data/companyData";

export default function ClientsPage() {
  const { lang } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const sectors = [
    { id: "all", label: "ALL SECTORS" },
    { id: "energy", label: "OIL, GAS & ENERGY" },
    { id: "petrochem", label: "PETROCHEMICALS" },
    { id: "cement", label: "CEMENT & MATERIALS" },
    { id: "epc", label: "EPC & INFRASTRUCTURE" },
  ];

  const filteredClients = CLIENTS_LIST.filter((client) => {
    if (selectedSector === "all") return true;
    if (selectedSector === "energy") return client.sector.toLowerCase().includes("oil") || client.sector.toLowerCase().includes("energy") || client.sector.toLowerCase().includes("utilities") || client.sector.toLowerCase().includes("grid");
    if (selectedSector === "petrochem") return client.sector.toLowerCase().includes("chemical") || client.sector.toLowerCase().includes("petro");
    if (selectedSector === "cement") return client.sector.toLowerCase().includes("cement") || client.sector.toLowerCase().includes("building");
    if (selectedSector === "epc") return client.sector.toLowerCase().includes("epc") || client.sector.toLowerCase().includes("power");
    return true;
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Our Clients"
        titleAr="عملاؤنا وشركاء النجاح"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clients", active: true },
        ]}
        bgImage="/images/hero_refinery.jpg"
      />

      {/* Intro Narrative Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  شركاء النجاح <br />
                  <span className="text-[#F4511E]">لكبرى الكيانات الصناعية</span>
                </>
              ) : (
                <>
                  Trusted Partner to <br />
                  <span className="text-[#F4511E]">Saudi Arabia&apos;s Industrial Giants</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "نفخر بخدمة كبرى الشركات الوطنية والعالمية في المملكة بما في ذلك أرامكو السعودية وسابك والشركة السعودية للكهرباء."
                : "Proudly delivering multidisciplinary engineering, maintenance, and facility solutions to Saudi Aramco, SABIC, SEC, Marafiq, and leading national operators."}
            </p>
          </div>
        </div>
      </section>

      {/* Clients Showcase Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sector Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            {sectors.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                  selectedSector === sec.id
                    ? "bg-[#F4511E] text-white shadow-md shadow-[#F4511E]/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClients.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-[#F4511E]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md h-64"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {client.logo ? (
                      <div className="relative h-10 w-32 flex items-center justify-start">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={130}
                          height={40}
                          className="max-h-9 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] group-hover:bg-[#F4511E] group-hover:text-white transition-colors">
                        <Building2 className="w-6 h-6" />
                      </div>
                    )}
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      APPROVED
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors line-clamp-1">
                      {client.name}
                    </h3>
                    <div className="text-xs font-mono text-[#F4511E] mt-1 line-clamp-1">{client.sector}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#F4511E]" />
                  <span className="truncate">{client.location}</span>
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
