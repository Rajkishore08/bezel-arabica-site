import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bezelarabia.com"),
  title: "Bezel Arabia Company Ltd. | Civil, Mechanical, E&I, IT & Industrial Services",
  description:
    "Bezel Arabia Company Ltd. is an ISO 9001:2015 Certified industrial contractor established in 1992 in Saudi Arabia. Providing CMEI Construction, Plant O&M, Valves, IT Infrastructure, and Camp & Catering across Jubail, Jeddah, Rabigh, and Yanbu.",
  keywords: [
    "Bezel Arabia",
    "شركة بيزل العربية المحدودة",
    "CMEI Construction Saudi Arabia",
    "Industrial Plant Maintenance Jubail",
    "Saudi Aramco Approved Contractor",
    "SABIC Approved Contractor",
    "Electrical and Instrumentation",
    "Valve Overhaul Workshop",
    "IT Infrastructure Cisco Solutions",
    "Industrial Catering Camp Management",
    "Cerebra AI",
    "View 360",
  ],
  authors: [{ name: "Bezel Arabia Company Ltd." }],
  openGraph: {
    title: "Bezel Arabia Company Ltd. | Engineering & Industrial Solutions",
    description:
      "Premier Saudi engineering contractor delivering Civil, Mechanical, E&I, IT, and Camp & Catering solutions since 1992.",
    url: "https://bezelarabia.com",
    siteName: "Bezel Arabia Co. Ltd.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Bezel Arabia Company Ltd.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} ${tajawal.variable} font-sans`}>
      <body className="bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#F4511E] selection:text-white min-h-screen flex flex-col">
        <LanguageProvider>
          <PageLoader />
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
