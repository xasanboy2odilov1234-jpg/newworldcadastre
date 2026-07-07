"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const EASE = [0.4, 0, 0.2, 1] as const;
type Phase = "reveal" | "compose" | "header";

const STROKE_PATHS = [
  { type: "circle" as const, delay: 0.35 },
  { type: "path" as const, d: "M12 13V7", delay: 0.55 },
  { type: "path" as const, d: "M7.5 9.5C8.8 7.8 10.3 6.8 12 6.8C13.7 6.8 15.2 7.8 16.5 9.5", delay: 0.65 },
  { type: "path" as const, d: "M6 13H18", delay: 0.75, faint: true },
  { type: "path" as const, d: "M8.5 16.5L12 13L15.5 16.5", delay: 0.85 },
] as const;

function TachymeterDraw({ active, reduced, className }: { active: boolean; reduced: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      {STROKE_PATHS.map((item, idx) => {
        const shared = {
          stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" as const,
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: active ? 1 : 0, opacity: active ? (item.type === "path" && "faint" in item && item.faint ? 0.35 : 1) : 0 },
          transition: reduced ? { duration: 0.01 } : { duration: 0.45, ease: EASE, delay: item.delay },
        };
        return item.type === "circle" ? <motion.circle key={idx} cx="12" cy="13" r="8" {...shared} /> : <motion.path key={idx} d={item.d} {...shared} />;
      })}
      <motion.circle cx="12" cy="13" r="1.25" fill="currentColor" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0 }} transition={reduced ? { duration: 0.01 } : { duration: 0.25, ease: EASE, delay: 1.05 }} />
    </svg>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;
  
  // По умолчанию считаем, что анимацию нужно показать
  const [phase, setPhase] = useState<Phase>("reveal");
  const [drawIcon, setDrawIcon] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (reduced) return;

    // ПРОВЕРКА: Видел ли клиент уже анимацию в этой сессии?
    const hasAnimated = sessionStorage.getItem("heroAnimated");
    
    if (hasAnimated) {
      // Если видел — показываем всё мгновенно, без задержек!
      setPhase("header");
      setDrawIcon(true);
      return;
    }

    // Если зашел впервые — проигрываем красивую анимацию
    const drawTimer = window.setTimeout(() => setDrawIcon(true), 320);
    const composeTimer = window.setTimeout(() => setPhase("compose"), 1250);
    const headerTimer = window.setTimeout(() => {
      setPhase("header");
      // Запоминаем, что анимация проиграна
      sessionStorage.setItem("heroAnimated", "true");
    }, 2200);

    return () => { window.clearTimeout(drawTimer); window.clearTimeout(composeTimer); window.clearTimeout(headerTimer); };
  }, [reduced]);

  const isHeader = phase === "header";

  if (!t || !t.hero) return null;

  return (
    <section className="relative w-full h-[100svh] flex flex-col justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img src="/hero.jpg" alt="Кадастровые работы" className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full pt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: isHeader ? 1 : 0, y: isHeader ? 0 : 30 }} transition={{ duration: 0.8, ease: EASE }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md mb-6 sm:mb-8">
            <TachymeterDraw active={drawIcon} reduced={reduced} className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-black uppercase tracking-widest pl-1">{t.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
            {t.hero.title1} <br />
            <span style={{ color: '#D4AF37' }}>{t.hero.title2}</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 font-medium leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/portfolio" className="w-full sm:w-auto text-center bg-[#D4AF37] hover:bg-[#bfa232] text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)]">
              {t.hero.btn1}
            </Link>
            <Link href="/about" className="w-full sm:w-auto text-center bg-transparent border-2 border-white/60 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-sm">
              {t.hero.btn2}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHeader ? 1 : 0 }} transition={{ duration: 1, delay: 0.4 }} className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-8 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-x-12 gap-y-4 border-t border-white/10 pt-6">
          <div className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span className="text-gray-300 font-bold text-sm tracking-wide">{t.hero.loc}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-gray-300 font-bold text-sm tracking-wide">{t.hero.time}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37]">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
            <span className="text-white font-black text-sm uppercase tracking-wider">{t.hero.exp}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}