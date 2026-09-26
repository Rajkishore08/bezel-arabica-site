"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isRtl: boolean;
  t: (key: string, defaultEn?: string) => string;
}

const translations: Record<string, { en: string; ar: string }> = {
  // Navigation
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.company": { en: "Company", ar: "عن الشركة" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.vision": { en: "Vision & Mission", ar: "الرؤية والرسالة" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.industrial": { en: "Industrial", ar: "القطاع الصناعي" },
  "nav.it": { en: "Information Technology", ar: "تقنية المعلومات" },
  "nav.catering": { en: "Camp & Catering", ar: "المخيمات والإعاشة" },
  "nav.products": { en: "Products", ar: "المنتجات" },
  "nav.projects": { en: "Projects", ar: "المشاريع" },
  "nav.resources": { en: "Resources", ar: "الموارد والقدرات" },
  "nav.clients": { en: "Clients", ar: "عملاؤنا" },
  "nav.partners": { en: "Partners", ar: "شركاؤنا" },
  "nav.careers": { en: "Careers", ar: "الوظائف" },
  "nav.contact": { en: "Contact Us", ar: "اتصل بنا" },

  // Hero
  "hero.eyebrow": { en: "BEZEL ARABIA COMPANY LTD.", ar: "شركة بيزل العربية المحدودة" },
  "hero.headline": { en: "Engineering Solutions Built for Industry.", ar: "حلول هندسية متكاملة لرواد الصناعة." },
  "hero.sub": {
    en: "Integrated industrial, technology, maintenance and facility solutions across Saudi Arabia.",
    ar: "حلول متكاملة في الهندسة والإنشاءات والتقنية والصيانة وإدارة المرافق في جميع أنحاء المملكة العربية السعودية.",
  },
  "hero.cta1": { en: "Explore Our Services", ar: "استكشف خدماتنا" },
  "hero.cta2": { en: "View Our Projects", ar: "شاهد مشاريعنا" },
  "hero.established": { en: "Established 1992 • ISO 9001:2015", ar: "تأسست عام 1992 • معتمدة ISO 9001" },

  // Intro
  "intro.eyebrow": { en: "CORPORATE OVERVIEW", ar: "نبذة عن الشركة" },
  "intro.headline": {
    en: "Engineering capability. Industrial expertise. Technology-driven solutions.",
    ar: "قدرات هندسية رائدة. خبرة صناعية عميقة. حلول مدعومة بالتقنية.",
  },

  // Common
  "common.viewDetails": { en: "View Details", ar: "عرض التفاصيل" },
  "common.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "common.allRightsReserved": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "common.headOffice": { en: "Al Jubail Industrial City, Saudi Arabia", ar: "مدينة الجبيل الصناعية، المملكة العربية السعودية" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("bezel_lang") as Language;
    if (saved && (saved === "en" || saved === "ar")) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("bezel_lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string, defaultEn?: string): string => {
    if (translations[key]) {
      return translations[key][lang];
    }
    return defaultEn || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isRtl: lang === "ar",
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
