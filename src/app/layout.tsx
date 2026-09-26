import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";

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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} ${tajawal.variable} font-sans`}>
      <body className="bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#F4511E] selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Ambient Site-Wide Mesh Gradient Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top-Right Luminous Orange Aura */}
          <div className="absolute -top-[10%] -right-[10%] w-[650px] h-[650px] bg-gradient-to-bl from-orange-400/10 via-amber-200/5 to-transparent rounded-full blur-[140px]"></div>
          {/* Center-Left Cool Sapphire Aura */}
          <div className="absolute top-[35%] -left-[10%] w-[550px] h-[550px] bg-gradient-to-tr from-sky-400/8 via-indigo-100/4 to-transparent rounded-full blur-[120px]"></div>
          {/* Bottom-Right Warm Gold Aura */}
          <div className="absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-gradient-to-tl from-amber-300/8 via-orange-100/4 to-transparent rounded-full blur-[130px]"></div>
        </div>

        <LanguageProvider>
          <PageLoader />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
