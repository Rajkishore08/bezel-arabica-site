"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, UploadCloud, CheckCircle2, User, Mail, Phone, FileText, Send, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function CareersPage() {
  const { lang } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "Engineering",
    experience: "3-5 years",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Careers & Opportunities"
        titleAr="الوظائف والفرص المهنية"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", active: true },
        ]}
        bgImage="/images/about_engineer.jpg"
      />

      {/* Narrative Section - Matching Reference Mockup */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  ابنِ مستقبلك المهني <br />
                  <span className="text-[#F4511E]">مع بيزل العربية</span>
                </>
              ) : (
                <>
                  Build Your Future <br />
                  with <span className="text-[#F4511E]">Bezel Arabia</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "انضم إلى نخبة من المهندسين والفنيين والخبراء الذين يقودون التميز في مشاريع المملكة الصناعية والتقنية الكبرى."
                : "Be part of a team that drives progress, innovation, and engineering excellence across the Kingdom's leading industrial and technology projects."}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                • Professional Growth
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                • Challenging Industrial Projects
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                • Supportive Engineering Team
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                • Vision 2030 Impact
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancy Status & Application Form */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Vacancies Notice */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl space-y-6 shadow-sm">
                <div className="p-3 rounded-xl bg-orange-50 text-[#F4511E] w-fit">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#F4511E] font-bold uppercase">CURRENT RECRUITMENT STATUS</div>
                  <h3 className="text-2xl font-bold text-slate-900">General Talent Pool Submission</h3>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <span className="text-[#F4511E] font-bold">Note:</span> While specific direct vacancies are closed for the current quarter, our HR department continuously reviews qualified resumes for upcoming turnaround (TAR) maintenance, CMEI projects, and IT deployments.
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-900 uppercase">Primary Disciplines Evaluated:</div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E]" />
                      <span>Electrical & Instrumentation (E&I) Site Engineers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E]" />
                      <span>Certified Valve Calibration & Hydrotest Technicians</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E]" />
                      <span>QA/QC Inspectors (Aramco / SABIC Approved)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F4511E]" />
                      <span>Industrial Camp & Commercial Kitchen Supervisors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right CV Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6">
                <div className="space-y-2 pb-4 border-b border-slate-100">
                  <h3 className="text-2xl font-black text-slate-900">Submit Your CV / Profile</h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Enter your professional details to be registered in the Bezel Arabia national engineering roster.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Application Received Successfully</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you for submitting your profile to Bezel Arabia Company Ltd. Our HR and talent acquisition committee in Al Jubail will review your credentials for relevant industrial openings.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-mono text-[#F4511E] underline hover:text-[#D84315]"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">FULL NAME *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ahmed Al-Ghamdi"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          placeholder="ahmed@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">PHONE / WHATSAPP *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 5X XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">PRIMARY DISCIPLINE</label>
                        <select
                          value={formData.discipline}
                          onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        >
                          <option>Electrical & Instrumentation</option>
                          <option>Mechanical & Piping</option>
                          <option>Civil & Structural</option>
                          <option>Plant O&M Specialist</option>
                          <option>Valve Calibration Technician</option>
                          <option>IT & Cybersecurity</option>
                          <option>Camp & Catering Hospitality</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600">COVER NOTE / QUALIFICATIONS</label>
                      <textarea
                        rows={3}
                        placeholder="Brief summary of certifications (Aramco approvals, ISO, degrees, etc.)..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                      ></textarea>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
                      <UploadCloud className="w-8 h-8 text-[#F4511E] mx-auto" />
                      <div className="text-xs font-bold text-slate-900">Upload CV / Resume (PDF / DOCX)</div>
                      <div className="text-[11px] text-slate-500">Demo mode: Ready for attachment integration</div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-3.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application to HR Roster</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
