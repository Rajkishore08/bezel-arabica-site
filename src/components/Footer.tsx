"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";
import GoogleMapPreview from "@/components/GoogleMapPreview";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        {/* Single Row 5-Column Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 pb-10 border-b border-slate-200/80 items-start">
          
          {/* Column 1: Brand & Credentials (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <Link href="/" className="inline-block transition-transform hover:opacity-90">
              <Image
                src="/images/logo.png"
                alt="Bezel Arabia Company Ltd."
                width={240}
                height={55}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "شركة سعودية رائدة تقدم حلولاً متكاملة في الهندسة، والإنشاءات الصناعية، وتقنية المعلومات، وإدارة المرافق منذ عام 1992."
                : "Integrated industrial, technology, maintenance and facility solutions across Saudi Arabia with a commitment to quality and safety since 1992."}
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
              <span>ISO 9001:2015 • Est. 1992</span>
            </div>

            {/* Social Pill Buttons */}
            <div className="flex items-center gap-1.5 pt-0.5">
              <a
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#F4511E] text-slate-700 hover:text-white transition-all text-[11px] font-medium border border-slate-200"
              >
                LinkedIn
              </a>
              <a
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#F4511E] text-slate-700 hover:text-white transition-all text-[11px] font-medium border border-slate-200"
              >
                Facebook
              </a>
              <a
                href={COMPANY_INFO.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#F4511E] text-slate-700 hover:text-white transition-all text-[11px] font-medium border border-slate-200"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
              {lang === "ar" ? "الشركة" : "COMPANY"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "عن بيزل العربية" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "خدماتنا" : "Core Services"}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "المشاريع المنجزة" : "Projects Portfolio"}
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "سجل العملاء" : "Client Directory"}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "شركاء النجاح" : "Partners Ecosystem"}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "الوظائف" : "Careers"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
              {lang === "ar" ? "الخدمات" : "SOLUTIONS"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/industrial" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "الإنشاءات الصناعية" : "CMEI Construction"}
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "التشغيل والصيانة" : "Plant O&M"}
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "ورشة الصمامات" : "Valves Workshop"}
                </Link>
              </li>
              <li>
                <Link href="/services/information-technology" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "تقنية المعلومات" : "IT Infrastructure"}
                </Link>
              </li>
              <li>
                <Link href="/services/camp-catering" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "المخيمات والإعاشة" : "Camp & Catering"}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F4511E] transition-colors text-[#F4511E] font-medium flex items-center gap-1">
                  <span>{lang === "ar" ? "الذكاء الاصطناعي" : "Cerebra AI & Twin"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
              {lang === "ar" ? "المقر والتواصل" : "HEADQUARTERS"}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F4511E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Al Jubail City</span>
                  <div className="text-slate-500 text-[11px]">P.O. Box 917, KSA</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                <a href="tel:+966133611280" className="hover:text-slate-900 font-medium">
                  +966 13 361 1280
                </a>
              </div>

              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#F4511E] shrink-0" />
                <a href="mailto:contact@bezelarabia.com" className="hover:text-slate-900 font-medium truncate">
                  contact@bezelarabia.com
                </a>
              </div>

              <div className="pt-1 text-[11px] text-slate-500 leading-tight">
                <span className="font-semibold text-slate-700">{lang === "ar" ? "الفروع:" : "Hubs:"}</span>{" "}
                Jubail • Jeddah • Rabigh • Yanbu
              </div>
            </div>
          </div>

          {/* Column 5: Google Map Preview in Single Row (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
              {lang === "ar" ? "موقع المقر الرئيسي" : "LOCATION MAP"}
            </h4>
            <GoogleMapPreview />
          </div>

        </div>

        {/* Bottom Copyright and Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Bezel Arabia Company Ltd. (شركة بيزل العربية المحدودة). All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <Link href="/about" className="hover:text-[#F4511E] transition-colors">
              Privacy & Quality
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#F4511E] transition-colors">
              Contact & RFP
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
