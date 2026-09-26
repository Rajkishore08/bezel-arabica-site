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
  Search,
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
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
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
      {/* Top micro bar for corporate contacts - Clean Light Theme */}
      <div className="hidden lg:block bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-1.5 px-6 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F4511E] animate-pulse"></span>
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
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-[#F4511E] text-white px-3 py-0.5 rounded text-xs font-semibold transition-all border border-slate-700"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Clean Light Theme */}
      <header
        className={`fixed top-0 lg:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-200/80 shadow-xs py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0 mr-4 lg:mr-8">
              <div className="relative h-12 sm:h-14 flex items-center justify-start transition-all">
                <Image
                  src="/images/logo.png"
                  alt="Bezel Arabia Company Ltd. Logo"
                  width={340}
                  height={76}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Streamlined Desktop Navigation (5 clean items) */}
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
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors rounded-lg ${
                        isActive
                          ? "text-[#F4511E] bg-orange-50/80 font-bold"
                          : "text-slate-700 hover:text-[#F4511E] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-transform" />
                      )}
                    </Link>

                    {/* Mega Dropdown Menu - Light Theme */}
                    {hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full ${isRtl ? "right-0" : "left-0"} mt-1 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2.5 z-50`}
                      >
                        <div className="space-y-1">
                          {link.dropdown?.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/70 border border-transparent hover:border-orange-100 transition-all group"
                              >
                                <div className="p-2 rounded-lg bg-slate-100 text-[#F4511E] group-hover:bg-[#F4511E] group-hover:text-white transition-colors">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#F4511E] transition-colors">
                                    {sub.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{sub.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher EN | AR */}
              <button
                onClick={toggleLang}
                className="text-xs font-bold text-slate-700 hover:text-[#F4511E] px-2 py-1 rounded transition-colors flex items-center gap-1"
              >
                <span className={lang === "en" ? "text-slate-900 font-extrabold" : "text-slate-500"}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={lang === "ar" ? "text-[#F4511E] font-extrabold" : "text-slate-500"}>AR</span>
              </button>

              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-[#F4511E]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t("nav.contact", "Contact Us")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-300 font-medium"
              >
                <Globe className="w-3 h-3 text-[#F4511E]" />
                <span>{lang === "en" ? "العربية" : "EN"}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 hover:text-[#F4511E] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer Navigation - Clean Light Theme */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 gap-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-slate-100 pb-1">
                      <Link
                        href={link.href}
                        className={`block py-2.5 px-3 rounded-lg text-base font-bold ${
                          pathname === link.href ? "text-[#F4511E] bg-orange-50" : "text-slate-800 hover:text-[#F4511E]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-4 pr-2 space-y-1 mt-1 mb-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-1.5 px-2 text-sm text-slate-600 hover:text-[#F4511E]"
                            >
                              • {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>📍 Head Office: Al Jubail 31951, Saudi Arabia</div>
                    <div>📞 {COMPANY_INFO.phoneNumbers.join(" | ")}</div>
                    <div>✉️ {COMPANY_INFO.email}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-3 rounded-xl text-sm font-bold shadow-md"
                  >
                    <span>{t("nav.contact", "Contact Us")}</span>
                    <ArrowRight className="w-4 h-4" />
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
