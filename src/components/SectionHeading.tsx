"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  badge?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  theme = "light",
  badge,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {/* Eyebrow / Technical Tag */}
      {(eyebrow || badge) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 mb-3 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-sm bg-[#F4511E]"></span>
          <span className="text-xs md:text-sm uppercase tracking-widest font-mono font-bold text-[#F4511E]">
            {eyebrow}
          </span>
          {badge && (
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-orange-100 border border-orange-200 text-[#F4511E] font-bold">
              {badge}
            </span>
          )}
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-[#F4511E] relative inline-block">
            {highlight}
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-200 rounded"></span>
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Engineering Rule Line */}
      {!isCenter && (
        <div className="mt-4 flex items-center gap-2">
          <div className="w-12 h-1 bg-[#F4511E] rounded"></div>
          <div className="w-2 h-1 bg-orange-300 rounded"></div>
          <div className="w-1 h-1 bg-orange-200 rounded"></div>
        </div>
      )}
    </div>
  );
}
