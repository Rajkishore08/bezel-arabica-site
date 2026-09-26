"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GoogleMapPreview() {
  const { lang } = useLanguage();
  const googleMapUrl = "https://maps.google.com/?q=Bezel+Arabia+Company+Ltd+Jubail+City+Center";

  return (
    <div className="w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
      {/* Top Header Bar */}
      <div className="px-3 py-1.5 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F4511E] animate-pulse"></div>
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-200">
            {lang === "ar" ? "خرائط جوجل" : "GOOGLE MAP"}
          </span>
        </div>
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[#F4511E] hover:text-orange-300 font-bold flex items-center gap-1 transition-colors"
        >
          <span>{lang === "ar" ? "فتح" : "Open"}</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Map visual thumbnail */}
      <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100">
        <Image
          src="/images/google_map_preview.png"
          alt="Bezel Arabia Google Maps Location"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Click Action */}
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors flex items-center justify-center"
        >
          <span className="sr-only">Open Google Maps</span>
        </a>
      </div>

      {/* Compact Info Strip */}
      <div className="p-2.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs">
        <div className="space-y-0.5">
          <div className="font-bold text-slate-900 flex items-center gap-1 text-[11px]">
            <MapPin className="w-3 h-3 text-[#F4511E]" />
            <span>Bezel Arabia Co. Ltd</span>
          </div>
          <div className="text-[10px] text-slate-500 truncate max-w-[150px]">
            Jubail City Center, 35514
          </div>
        </div>

        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-7 h-7 rounded-full bg-[#F4511E] hover:bg-[#D84315] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
          title="Get Directions"
        >
          <Navigation className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
