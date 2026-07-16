"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const EASE = [0.4, 0, 0.2, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;
  const [ready, setReady] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (reduced) {
      setReady(true);
      return;
    }

    const hasAnimated = sessionStorage.getItem("heroAnimated");
    if (hasAnimated) {
      setReady(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setReady(true);
      sessionStorage.setItem("heroAnimated", "true");
    }, 280);

    return () => window.clearTimeout(timer);
  }, [reduced]);

  if (!t || !t.hero) return null;

  return (
    <section className="relative flex h-[100svh] w-full flex-col justify-center overflow-hidden bg-[var(--ink-950)]">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Кадастровые работы"
          className="h-full w-full scale-[1.02] object-cover object-center transition-transform duration-1000"
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(10,22,40,0.70),rgba(10,22,40,0.45),rgba(10,22,40,0.90))]" />
      </div>

      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 pt-20 pb-28 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 28 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="max-w-3xl"
        >
          <Link
            href="/portfolio#portfolio"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--gold-500)_40%,transparent)] bg-[color:color-mix(in_srgb,var(--ink-950)_40%,transparent)] px-4 py-2 backdrop-blur-md transition-colors duration-300 hover:border-[var(--gold-500)] sm:mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-500)]" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-widest text-[var(--gold-400)] sm:text-sm">
              {t.hero.badge}
            </span>
          </Link>

          <h1 className="mb-5 text-4xl font-black leading-[1.1] tracking-tight text-[var(--paper)] uppercase sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.headline}
          </h1>

          <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-[color:color-mix(in_srgb,var(--paper)_78%,transparent)] sm:mb-12 sm:text-lg md:text-xl">
            {t.hero.subtitlePrefix}
            <span className="font-bold text-[var(--gold-500)]">{t.hero.subtitleHighlight}</span>
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/portfolio"
              className="w-full rounded-2xl bg-[var(--gold-500)] px-8 py-4 text-center font-bold uppercase tracking-wider text-[var(--ink-950)] shadow-[var(--shadow-gold-glow)] transition-all duration-300 hover:bg-[var(--gold-600)] sm:w-auto"
            >
              {t.hero.btn1}
            </Link>
            <Link
              href="/about"
              className="w-full rounded-2xl border-2 border-[color:color-mix(in_srgb,var(--paper)_55%,transparent)] bg-transparent px-8 py-4 text-center font-bold uppercase tracking-wider text-[var(--paper)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--paper)] hover:bg-[color:color-mix(in_srgb,var(--paper)_10%,transparent)] sm:w-auto"
            >
              {t.hero.btn2}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1, delay: reduced ? 0 : 0.35, ease: EASE }}
        className="absolute bottom-0 left-0 z-20 hidden w-full bg-[linear-gradient(to_top,rgba(10,22,40,0.92),rgba(10,22,40,0.35),transparent)] px-4 pb-8 pt-16 sm:block sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-start gap-x-12 gap-y-4 border-t border-[color:color-mix(in_srgb,var(--paper)_12%,transparent)] pt-6">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--paper)_10%,transparent)] bg-[color:color-mix(in_srgb,var(--paper)_5%,transparent)] p-2 text-[var(--gold-500)]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-wide text-[color:color-mix(in_srgb,var(--paper)_78%,transparent)]">
              {t.hero.loc}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--paper)_10%,transparent)] bg-[color:color-mix(in_srgb,var(--paper)_5%,transparent)] p-2 text-[var(--gold-500)]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-wide text-[color:color-mix(in_srgb,var(--paper)_78%,transparent)]">
              {t.hero.time}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--paper)_10%,transparent)] bg-[color:color-mix(in_srgb,var(--paper)_5%,transparent)] p-2 text-[var(--gold-500)]">
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-sm font-black uppercase tracking-wider text-[var(--paper)]">
              {t.hero.exp}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
