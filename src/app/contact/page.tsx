"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronRight, Building2, Clock, Globe, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import GoogleMapPreview from "@/components/GoogleMapPreview";
import PageHeroBanner from "@/components/PageHeroBanner";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function ContactPage() {
  const { lang } = useLanguage();
  const [activeLocation, setActiveLocation] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceRequired: "Industrial Services",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const currentLoc = COMPANY_INFO.locations[activeLocation];

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Page Hero Banner */}
      <PageHeroBanner
        title="Contact Us"
        titleAr="اتصل بنا"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", active: true },
        ]}
        bgImage="/images/about_building.jpg"
      />

      {/* Intro Narrative Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
              {lang === "ar" ? (
                <>
                  تواصل مع خبرائنا <br />
                  <span className="text-[#F4511E]">في جميع أنحاء المملكة</span>
                </>
              ) : (
                <>
                  Get in Touch with <br />
                  <span className="text-[#F4511E]">Bezel Arabia Today</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "فريقنا الهندسي والإداري جاهز لدعم مشاريعكم واستفساراتكم من خلال مكاتبنا في الجبيل وجدة وينبع ورابغ."
                : "Our engineering and customer support teams are ready to assist with your industrial, IT, and maintenance requirements across the Kingdom."}
            </p>
          </div>
        </div>
      </section>

      {/* Location Selector Tabs & Interactive Details */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SAUDI NETWORK"
            title="Strategic Branch Locations"
            subtitle="Select a regional hub to view direct phone numbers, facility addresses, and dispatch contacts."
            align="left"
          />

          {/* City Selection Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 mb-10">
            {COMPANY_INFO.locations.map((loc, idx) => (
              <button
                key={loc.city}
                onClick={() => setActiveLocation(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeLocation === idx
                    ? "bg-orange-50/50 border-[#F4511E] shadow-md shadow-[#F4511E]/10"
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#F4511E]">0{idx + 1}</span>
                  <MapPin className={`w-4 h-4 ${activeLocation === idx ? "text-[#F4511E]" : "text-slate-400"}`} />
                </div>
                <div className="text-sm font-bold text-slate-900">{lang === "ar" ? loc.cityAr : loc.city}</div>
                <div className="text-[11px] text-slate-500 truncate">{loc.type}</div>
              </button>
            ))}
          </div>

          {/* Active Location Display Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E]">
                <Building2 className="w-4 h-4" />
                <span>{currentLoc.type.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {lang === "ar" ? currentLoc.cityAr : currentLoc.city}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span>{currentLoc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span>{currentLoc.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span>{currentLoc.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#F4511E] shrink-0" />
                  <span>Sunday – Thursday: 07:30 AM – 05:00 PM (AST)</span>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Preview Card */}
            <div className="lg:col-span-6">
              <GoogleMapPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Request & Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4511E] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#F4511E]"></span>
                <span>PROJECT ESTIMATION & INQUIRIES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Request a Commercial Proposal or Site Survey
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need a dedicated E&I construction contractor, plant shutdown team, valve overhaul quotation, or enterprise IT network audit, our estimation engineers respond within 24 hours.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="font-bold text-slate-900 uppercase font-mono">Head Office Contact Channels:</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F4511E]" />
                  <span>+966 13 361 1280 • +966 13 361 4685</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F4511E]" />
                  <span>contact@bezelarabia.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#F4511E]" />
                  <span>WhatsApp: +966 55 539 1530</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Commercial Inquiry Form</h3>

                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Inquiry Submitted Successfully</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you for contacting Bezel Arabia Company Ltd. Our project estimation team in Al Jubail has received your message and will review your requirements promptly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-mono text-[#F4511E] underline hover:text-[#D84315]"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">YOUR NAME *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tariq Al-Otaibi"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">COMPANY / ORGANIZATION *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Petrochemical Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          placeholder="tariq@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600">PHONE NUMBER *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 13 XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600">SERVICE REQUIRED</label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                      >
                        <option>CMEI Construction</option>
                        <option>Plant Operation & Maintenance (O&M)</option>
                        <option>Valves & Instrumentation Workshop</option>
                        <option>Construction Support & Equipment Rental</option>
                        <option>IT Infrastructure & Cybersecurity</option>
                        <option>Cisco Networking & Datacenter</option>
                        <option>Industrial Camp & Catering Services</option>
                        <option>CEREBRA AI / VIEW 360 Software</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600">PROJECT SCOPE & INQUIRY DETAILS *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe project location, facility type, expected schedule, and specific scope..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F4511E]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#F4511E] hover:bg-[#D84315] text-white py-3.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Inquiry to Commercial Division</span>
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
