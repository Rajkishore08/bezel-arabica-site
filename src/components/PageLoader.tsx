"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("ESTABLISHING SECURE CONNECTION");

  useEffect(() => {
    // Check if previously loaded in this session to make re-navigation fast
    const hasLoaded = sessionStorage.getItem("bezel_loaded");
    
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("bezel_loaded", "true");
          }, 350);
          return 100;
        }
        
        const next = prev + Math.floor(Math.random() * 8) + 5;
        const bounded = Math.min(next, 100);

        if (bounded < 30) {
          setStatusText("ESTABLISHING SECURE CONNECTION");
        } else if (bounded < 65) {
          setStatusText("INITIALIZING SAUDI INDUSTRIAL PORTAL");
        } else if (bounded < 90) {
          setStatusText("VERIFYING ISO 9001:2015 ACCREDITATION");
        } else {
          setStatusText("WELCOME TO BEZEL ARABIA");
        }

        return bounded;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="bezel-light-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -15,
            filter: "blur(6px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-slate-900 select-none overflow-hidden"
        >
          {/* Ambient Warm Gradients (Light Theme) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/60 via-amber-50/40 to-blue-50/40 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[90px] pointer-events-none animate-pulse"></div>

          {/* Clean Light Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
            {/* Animated Logo Container with Glowing Light Ring */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer Rotating Orange Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full border border-dashed border-orange-400/50"
              />

              {/* Counter Rotating Subtle Slate Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border border-slate-200 border-t-orange-500/60"
              />

              {/* Central Logo Card */}
              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-48 h-22 bg-white rounded-2xl p-4 flex items-center justify-center shadow-xl shadow-orange-500/10 border border-slate-100"
              >
                <Image
                  src="/images/logo.png"
                  alt="Bezel Arabia Company Ltd."
                  width={180}
                  height={52}
                  priority
                  className="object-contain w-auto h-12"
                />
              </motion.div>
            </div>

            {/* Brand Title & Trust Credential */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="space-y-1.5 mb-6"
            >
              <div className="text-xs uppercase font-mono tracking-[0.25em] text-[#F4511E] font-bold">
                شركة بيزل العربية المحدودة
              </div>
              <div className="text-xs text-slate-500 font-mono tracking-wider flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO 9001:2015 CERTIFIED • EST. 1992</span>
              </div>
            </motion.div>

            {/* High Tech Light Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden p-0.5 border border-slate-200/80 mb-4 relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#F4511E] via-orange-500 to-amber-500 rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_6px_#ffffff]"></div>
              </motion.div>
            </div>

            {/* Status & Numeric Counter */}
            <div className="w-full flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-ping"></span>
                <span className="tracking-wide text-[11px] uppercase text-slate-700 font-medium">
                  {statusText}
                </span>
              </span>
              <span className="font-bold text-[#F4511E] font-mono text-sm">
                {progress}%
              </span>
            </div>
          </div>

          {/* Bottom Kingdom Presence Watermark */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center text-[11px] font-mono text-slate-400 tracking-widest uppercase gap-2">
            <span>AL JUBAIL</span>
            <span>•</span>
            <span>JEDDAH</span>
            <span>•</span>
            <span>RABIGH</span>
            <span>•</span>
            <span>YANBU</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
