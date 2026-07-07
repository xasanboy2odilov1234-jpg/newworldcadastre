"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function Steps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { t } = useLanguage();

  if (!t || !t.process) return null;

  return (
    <section id="process" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            {t.process.title1} <span style={{ color: '#D4AF37' }}>{t.process.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">{t.process.desc}</p>
        </div>

        <div ref={containerRef} className="relative mt-12 max-w-4xl mx-auto pb-10">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 rounded-full" />
          <motion.div style={{ height: lineHeight }} className="absolute left-8 md:left-1/2 top-0 w-1 bg-[#D4AF37] transform md:-translate-x-1/2 rounded-full origin-top z-0" />
          
          <div className="space-y-16 md:space-y-24">
            {t.process.steps.map((step: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`relative flex items-center md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 top-0 md:top-1/2 md:-translate-y-1/2 mt-2 md:mt-0">
                    <motion.div initial={{ scale: 0, backgroundColor: "#F3F4F6", color: "#9CA3AF" }} whileInView={{ scale: 1, backgroundColor: "#D4AF37", color: "#FFFFFF" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.4, delay: 0.1 }} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white flex items-center justify-center shadow-md font-black text-lg md:text-xl transition-colors">
                      {step.id}
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-5/12" />
                  <motion.div initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full md:w-5/12 pl-24 md:pl-0 pt-2 md:pt-0">
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-500 relative group overflow-hidden">
                       <div className="absolute -top-4 -right-2 text-8xl font-black text-gray-50 opacity-80 pointer-events-none group-hover:text-[#D4AF37]/5 transition-colors duration-500 group-hover:scale-110 transform">{step.id}</div>
                       <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-4 relative z-10 group-hover:text-[#D4AF37] transition-colors duration-300">{step.title}</h3>
                       <p className="text-gray-600 leading-relaxed relative z-10 text-sm md:text-base">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}