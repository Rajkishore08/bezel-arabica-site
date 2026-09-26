"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GoogleMapPreview() {
  const { lang } = useLanguage();
  const googleMapUrl = "https://maps.google.com/?q=Bezel+Arabia+Company+Ltd+Jubail+City+Center";

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group">
      {/* Header bar */}
      <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse"></div>
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-200">
            {lang === "ar" ? "موقعنا على خرائط جوجل" : "FIND US ON GOOGLE MAP"}
          </span>
        </div>
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-[#F4511E] hover:text-orange-300 font-bold flex items-center gap-1 transition-colors"
        >
          <span>{lang === "ar" ? "فتح في الخرائط" : "Open Map"}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Map visual with overlay card */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src="/images/google_map_preview.png"
          alt="Bezel Arabia Google Maps Location"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Quick Action Overlay */}
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors flex items-center justify-center"
        >
          <span className="sr-only">Open Google Maps</span>
        </a>
      </div>

      {/* Info strip below map */}
      <div className="p-3.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs">
        <div className="space-y-0.5">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F4511E]" />
            <span>Bezel Arabia Company Ltd</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Jubail City Center, 4906, 7945, الجبيل 35514
          </div>
        </div>

        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-8 h-8 rounded-full bg-[#F4511E] hover:bg-[#D84315] text-white flex items-center justify-center shadow-sm transition-transform hover:scale-110"
          title="Get Directions"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
