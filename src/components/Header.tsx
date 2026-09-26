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
  Sparkles,
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
      if (window.scrollY > 20) {
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
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-3 px-3 sm:px-6 lg:px-8 pointer-events-none"
    >
      {/* Floating Glassmorphism Container with Soft Edges */}
      <header
        className={`max-w-7xl mx-auto pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.08)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-white/75 backdrop-blur-lg border border-white/60 shadow-[0_4px_20px_rgba(15,23,42,0.04)] py-2.5 sm:py-3.5 px-4 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with Smooth Hover Scale */}
          <Link href="/" className="flex items-center group shrink-0 mr-3 lg:mr-6">
            <div className="relative h-10 sm:h-11 flex items-center justify-start transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Bezel Arabia Company Ltd."
                width={300}
                height={68}
                priority
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Streamlined Desktop Navigation with Soft Glass Hover Pills */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
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
                    className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-[#F4511E] bg-orange-50/90 shadow-xs font-bold"
                        : "text-slate-700 hover:text-[#F4511E] hover:bg-slate-100/70"
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

                  {/* Mega Dropdown with Frosted Glassmorphism & Soft Edges */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute top-full ${isRtl ? "right-0" : "left-0"} mt-2 w-80 bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.12)] p-2.5 z-50`}
                      >
                        <div className="space-y-1">
                          {link.dropdown?.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/80 border border-transparent hover:border-orange-100 transition-all group"
                              >
                                <div className="p-2 rounded-lg bg-slate-100/80 text-[#F4511E] group-hover:bg-[#F4511E] group-hover:text-white group-hover:scale-105 shadow-xs transition-all">
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
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right CTAs with Soft Rounded Shapes & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLang}
              className="text-xs font-bold text-slate-700 hover:text-[#F4511E] px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/80 transition-all flex items-center gap-1.5 border border-slate-200/60"
            >
              <Globe className="w-3.5 h-3.5 text-[#F4511E]" />
              <span className={lang === "en" ? "text-slate-900 font-extrabold" : "text-slate-500"}>EN</span>
              <span className="text-slate-300">|</span>
              <span className={lang === "ar" ? "text-[#F4511E] font-extrabold" : "text-slate-500"}>AR</span>
            </button>

            {/* Glowing Gradient CTA Button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#F4511E] to-[#E64A19] hover:from-[#D84315] hover:to-[#BF360C] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>{t("nav.contact", "Contact Us")}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 border border-slate-200 font-medium"
            >
              <Globe className="w-3 h-3 text-[#F4511E]" />
              <span>{lang === "en" ? "العربية" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 hover:text-[#F4511E] focus:outline-none transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer with Frosted Glassmorphism */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-3 pt-3 border-t border-slate-200/80 overflow-hidden"
            >
              <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-slate-100/80 pb-1.5">
                    <Link
                      href={link.href}
                      className={`block py-2 px-3 rounded-xl text-sm font-bold ${
                        pathname === link.href ? "text-[#F4511E] bg-orange-50/80" : "text-slate-800 hover:text-[#F4511E]"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-3 pr-2 space-y-1 mt-1 mb-1.5 bg-slate-50/80 p-2 rounded-xl border border-slate-200/60">
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

                <div className="pt-3 space-y-2 text-xs text-slate-600">
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
                    className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-2.5 rounded-full text-xs font-bold shadow-md transition-all mt-2"
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
    </motion.div>
  );
}
