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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-slate-200/80">
          
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block transition-transform hover:opacity-90">
              <Image
                src="/images/logo.png"
                alt="Bezel Arabia Company Ltd."
                width={240}
                height={55}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {lang === "ar"
                ? "شركة سعودية رائدة تقدم حلولاً متكاملة في الهندسة، والإنشاءات الصناعية، وتقنية المعلومات، وإدارة المرافق منذ عام 1992."
                : "Integrated industrial, technology, maintenance and facility solutions across Saudi Arabia with a commitment to quality and safety since 1992."}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-[#F4511E]" />
              <span>ISO 9001:2015 Certified • Saudi Commercial Reg. 1992</span>
            </div>

            {/* Social Pill Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-slate-100 hover:bg-[#F4511E] text-slate-700 hover:text-white transition-all text-xs font-medium border border-slate-200"
              >
                LinkedIn
              </a>
              <a
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-slate-100 hover:bg-[#F4511E] text-slate-700 hover:text-white transition-all text-xs font-medium border border-slate-200"
              >
                Facebook
              </a>
              <a
                href={COMPANY_INFO.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-slate-100 hover:bg-[#F4511E] text-slate-700 hover:text-white transition-all text-xs font-medium border border-slate-200"
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
            <ul className="space-y-2 text-xs sm:text-sm">
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

          {/* Column 3: Capabilities & Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
              {lang === "ar" ? "الخدمات والحلول" : "SOLUTIONS"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/industrial" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "إنشاءات الهندسة المدنية والميكانيكية" : "CMEI Construction"}
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "التشغيل والصيانة الصناعية" : "Plant Operation & Maintenance"}
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "ورشة صيانة ومعايرة الصمامات" : "Valves Overhaul Workshop"}
                </Link>
              </li>
              <li>
                <Link href="/services/information-technology" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "أمن وتقنية المعلومات والشبكات" : "IT Infrastructure & Security"}
                </Link>
              </li>
              <li>
                <Link href="/services/camp-catering" className="hover:text-[#F4511E] transition-colors">
                  {lang === "ar" ? "المخيمات والإعاشة وإدارة المرافق" : "Camp & Catering Facilities"}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F4511E] transition-colors text-[#F4511E] font-medium flex items-center gap-1">
                  <span>{lang === "ar" ? "الذكاء الاصطناعي والتوأم الرقمي" : "Cerebra AI & Digital Twin"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Kingdom Network (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono">
              {lang === "ar" ? "المقر والتواصل" : "HEADQUARTERS & HUBS"}
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Al Jubail Industrial City</span>
                  <div className="text-slate-500 text-xs">P.O. Box 917, Kingdom of Saudi Arabia</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4511E] shrink-0" />
                <a href="tel:+966133611280" className="hover:text-slate-900 font-medium">
                  +966 13 361 1280
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F4511E]" />
                <a href="mailto:contact@bezelarabia.com" className="hover:text-slate-900 font-medium">
                  contact@bezelarabia.com
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{lang === "ar" ? "الفروع:" : "Kingdom Hubs:"}</span>{" "}
                Jubail • Jeddah • Rabigh • Yanbu
              </div>

              {/* Google Map Preview Card */}
              <div className="pt-2">
                <GoogleMapPreview />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
