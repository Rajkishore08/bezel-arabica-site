"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CLIENTS_LIST } from "@/data/companyData";

export default function ClientsMarquee() {
  const { lang } = useLanguage();
  const marqueeClients = [...CLIENTS_LIST, ...CLIENTS_LIST];

  return (
    <section className="py-16 sm:py-20 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Eyebrow with Orange Dash matching reference mockup */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#F4511E]"></div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#F4511E]">
              {lang === "ar" ? "عملاؤنا وشركاء النجاح" : "TRUSTED BY LEADING ORGANIZATIONS"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#F4511E] transition-colors"
            >
              <span>{lang === "ar" ? "عرض كافة العملاء" : "View All Clients"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F4511E]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Seamless Marquee Strip with Clean Monochrome White Cards */}
      <div className="relative w-full py-4 bg-[#F8FAFC] border-y border-slate-200">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-5 sm:gap-6">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="shrink-0 flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#F4511E] group transition-all shadow-xs hover:shadow-md cursor-default h-18 w-44 sm:w-48"
            >
              {client.logo ? (
                <div className="relative h-9 w-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={38}
                    className="max-h-8 w-auto object-contain filter grayscale opacity-75 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#F4511E] transition-colors" />
                  <span className="text-xs font-extrabold text-slate-800 group-hover:text-[#F4511E] font-mono tracking-tight">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
