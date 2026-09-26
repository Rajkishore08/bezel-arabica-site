import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIntro from "@/components/TrustIntro";
import CoreDivisions from "@/components/CoreDivisions";
import IndustrialSection from "@/components/IndustrialSection";
import TechnologySection from "@/components/TechnologySection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ProductsShowcase from "@/components/ProductsShowcase";
import ClientsMarquee from "@/components/ClientsMarquee";
import QualityCertifications from "@/components/QualityCertifications";
import LegacyToModernComparison from "@/components/LegacyToModernComparison";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-orange-500 selection:text-white">
      <Header />
      
      {/* 1. Hero: Dynamic multi-pillar showcase with live telemetry & Jubail HQ status */}
      <Hero />
      
      {/* 2. Company Credibility: 1992 Legacy, ISO 9001, Aramco/SABIC approvals, verified metrics */}
      <TrustIntro />
      
      {/* 3. Core Capabilities: 3 pillars (Industrial, Technology & IT, Workforce Logistics) */}
      <CoreDivisions />
      
      {/* 4. Industrial Services: CMEI, O&M, Jubail Valve Workshop, Heavy Fleet */}
      <IndustrialSection />
      
      {/* 5. Technology & Industrial AI: Cerebra AI, Digital Twin, Cisco optical, Tier Datacenters */}
      <TechnologySection />
      
      {/* 6. Featured Projects: Sadara, Aramco KJO, Ras Al-Khair, Arabian Cement, Luberef, Saudi Cement */}
      <ProjectsShowcase />
      
      {/* 7. Products: Cerebra AI Predictive Diagnostics, View 360 Digital Twin, Office Organizer */}
      <ProductsShowcase />
      
      {/* 8. Clients & Approvals: Aramco, SABIC, SEC, SWCC, Sadara, Petro Rabigh + ISO Certifications */}
      <ClientsMarquee />
      <QualityCertifications />
      
      {/* Client Demo Value Proposition: Demonstrates the Next.js modern leap for decision-makers */}
      <LegacyToModernComparison />
      
      {/* 9. Contact CTA: Executive Proposal & Estimation RFP dispatch */}
      <CTASection />
      
      <Footer />
    </main>
  );
}
