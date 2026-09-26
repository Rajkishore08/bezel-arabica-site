"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Cpu,
  UtensilsCrossed,
  Layers,
  Award,
  Building2,
  Users,
  Briefcase,
  FileText,
  Boxes,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { lang, toggleLang, isRtl, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: t("nav.home", "Home"), href: "/" },
    {
      name: t("nav.company", "Company"),
      href: "/about",
      dropdown: [
        { name: lang === "ar" ? "عن بيزل العربية" : "About Bezel Arabia", href: "/about", icon: Building2, desc: "30+ years engineering legacy since 1992" },
        { name: lang === "ar" ? "الرؤية والقيادة" : "Vision & Leadership", href: "/about#vision", icon: Layers, desc: "Core values & leadership principles" },
        { name: lang === "ar" ? "الجودة والسلامة" : "Quality & HSE Policy", href: "/about#policy", icon: ShieldCheck, desc: "ISO 9001:2015 certified standards" },
        { name: lang === "ar" ? "الجوائز والشهادات" : "Awards & Certificates", href: "/about#awards", icon: Award, desc: "Aramco & SABIC qualifications" },
        { name: lang === "ar" ? "سجل العملاء" : "Client Directory", href: "/clients", icon: Users, desc: "Trusted by major industrial leaders" },
        { name: lang === "ar" ? "الشركاء الاستراتيجيون" : "Partners Ecosystem", href: "/partners", icon: Handshake, desc: "Global technology alliances" },
        { name: lang === "ar" ? "الوظائف" : "Careers at Bezel", href: "/careers", icon: Briefcase, desc: "Join our high-performing team" },
      ],
    },
    {
      name: t("nav.services", "Services"),
      href: "/services",
      dropdown: [
        {
          name: lang === "ar" ? "القطاع الصناعي والهندسي" : "Industrial Services",
          href: "/services/industrial",
          icon: Layers,
          desc: "CMEI Construction, O&M, Valves Workshop, Support",
        },
        {
          name: lang === "ar" ? "تقنية المعلومات والاتصالات" : "Information Technology",
          href: "/services/information-technology",
          icon: Cpu,
          desc: "Cyber Security, Cisco Networks, Datacenter, Fiber",
        },
        {
          name: lang === "ar" ? "المخيمات والإعاشة والمرافق" : "Camp & Catering Facilities",
          href: "/services/camp-catering",
          icon: UtensilsCrossed,
          desc: "Workforce Housing & Industrial Food Logistics",
        },
      ],
    },
    {
      name: t("nav.products", "Products & AI"),
      href: "/products",
      dropdown: [
        {
          name: "CEREBRA Industrial AI",
          href: "/products/cerebra",
          icon: Cpu,
          desc: "Predictive asset diagnostics & ML physics engine",
        },
        {
          name: "VIEW 360 Digital Twin",
          href: "/products/view360",
          icon: Boxes,
          desc: "Immersive 3D plant navigation & tag linking",
        },
        {
          name: "Office Organizer ERP",
          href: "/products/office-organizer",
          icon: FileText,
          desc: "Contractor ERP & workforce compliance suite",
        },
        {
          name: lang === "ar" ? "المصادر والكتيبات" : "Technical Resources",
          href: "/resources",
          icon: FileText,
          desc: "Corporate profile & compliance downloads",
        },
      ],
    },
    { name: t("nav.projects", "Projects"), href: "/projects" },
  ];

  return (
    <>
      {/* 1. Top Non-Sticky Micro-Bar: Scrolls naturally out of view when scrolling */}
      <div className="hidden lg:block bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F4511E]"></span>
              {COMPANY_INFO.isoCert} • {COMPANY_INFO.headquarters}
            </span>
            <a href={`tel:${COMPANY_INFO.phoneNumbers[0].replace(/\s/g, "")}`} className="flex items-center gap-1 hover:text-[#F4511E] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F4511E]" />
              <span>{COMPANY_INFO.phoneNumbers[0]}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1 hover:text-[#F4511E] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#F4511E]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono text-[11px]">JUBAIL • JEDDAH • RABIGH • YANBU</span>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-[#F4511E] text-white px-3 py-0.5 rounded text-xs font-semibold transition-all border border-slate-700 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header: Sticks to top-0 when user scrolls */}
      <header className={`sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-all duration-200 ${isScrolled ? "py-2.5 shadow-md" : "py-3.5 shadow-xs"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Bigger & Bolder Brand Logo */}
            <Link href="/" className="flex items-center group shrink-0 mr-4 lg:mr-8">
              <div className="relative h-12 sm:h-14 lg:h-16 flex items-center justify-start transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="Bezel Arabia Company Ltd."
                  width={380}
                  height={86}
                  priority
                  className="h-11 sm:h-13 lg:h-15 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                const hasDropdown = !!link.dropdown;

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                        isActive
                          ? "text-[#F4511E] bg-orange-50 font-bold"
                          : "text-slate-700 hover:text-[#F4511E] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                            activeDropdown === link.name ? "rotate-180 opacity-100 text-[#F4511E]" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Clean Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute top-full ${isRtl ? "right-0" : "left-0"} mt-1 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50`}
                        >
                          <div className="space-y-1">
                            {link.dropdown?.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-orange-50 transition-colors group"
                                >
                                  <div className="p-2 rounded-md bg-slate-100 text-[#F4511E] group-hover:bg-[#F4511E] group-hover:text-white transition-colors shrink-0">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                                      {sub.name}
                                    </div>
                                    <div className="text-xs text-slate-500 leading-tight mt-0.5">{sub.desc}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Right Action CTA & Language Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="text-xs font-bold text-slate-700 hover:text-[#F4511E] px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className={lang === "en" ? "text-slate-900 font-extrabold" : "text-slate-500"}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={lang === "ar" ? "text-[#F4511E] font-extrabold" : "text-slate-500"}>AR</span>
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-all"
              >
                <span>{t("nav.contact", "Contact Us")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Actions Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium"
              >
                <Globe className="w-3 h-3 text-[#F4511E]" />
                <span>{lang === "en" ? "العربية" : "EN"}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#F4511E] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-5 space-y-3 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 gap-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-slate-100 pb-1">
                      <Link
                        href={link.href}
                        className={`block py-2 px-3 rounded-md text-sm font-bold ${
                          pathname === link.href ? "text-[#F4511E] bg-orange-50" : "text-slate-800 hover:text-[#F4511E]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-3 pr-2 space-y-1 mt-1 mb-1.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-1 px-2 text-xs text-slate-600 hover:text-[#F4511E]"
                            >
                              • {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F4511E]" />
                    <span>{COMPANY_INFO.phoneNumbers[0]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#F4511E]" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-2.5 rounded-lg text-xs font-bold shadow-sm transition-all mt-2"
                  >
                    <span>{t("nav.contact", "Contact Us")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
