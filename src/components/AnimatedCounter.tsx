"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  labelAr?: string;
  sublabel?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  label,
  sublabel,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(end * (1 - (1 - progress) * (1 - progress)));
      
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(current);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-left group">
      <div className="flex items-baseline gap-1 font-mono">
        {prefix && <span className="text-xl sm:text-2xl font-bold text-[#F4511E]">{prefix}</span>}
        <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight group-hover:text-[#F4511E] transition-colors">
          {count}
        </span>
        {suffix && <span className="text-2xl sm:text-3xl font-bold text-[#F4511E]">{suffix}</span>}
      </div>
      <div className="mt-1 text-sm sm:text-base font-bold text-slate-800">{label}</div>
      {sublabel && <div className="text-xs text-slate-500">{sublabel}</div>}
    </div>
  );
}
