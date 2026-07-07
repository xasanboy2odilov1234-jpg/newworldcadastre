"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function CompanyInfo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-8 bg-white px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-blue-900 mb-6 tracking-tight uppercase"
        >
          {t.companyInfo.title1} <span style={{ color: '#D4AF37' }}>{t.companyInfo.title2}</span>
        </motion.h1>

        <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? "auto" : "5.5rem" 
            }}
            className="overflow-hidden text-gray-600 text-base md:text-lg leading-relaxed relative"
          >
            <p className="mb-4 text-left md:text-center">
              <strong>NEW WORLD CADASTRE</strong> {t.companyInfo.p1.replace('NEW WORLD CADASTRE', '')}
            </p>
            <p className="mb-4 text-left md:text-center">
              {t.companyInfo.p2}
            </p>
            <p className="text-left md:text-center">
              {t.companyInfo.p3}
            </p>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </motion.div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 md:mt-6 inline-flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-widest text-xs md:text-sm hover:text-blue-900 transition-colors focus:outline-none group"
          >
            {isExpanded ? t.companyInfo.collapse : t.companyInfo.readMore}
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-5 text-[#D4AF37] group-hover:text-blue-900 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </button>
        </div>
      </div>
    </section>
  );
}