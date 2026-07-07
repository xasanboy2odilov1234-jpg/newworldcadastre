"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext"; // Подключаем язык

const certImages = [
  "/cert-1.jpg", 
  "/cert-2.jpg",
  "/cert-3.jpg",
];

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const { t } = useLanguage(); // Достаем словарь

  // Защита от ошибки загрузки
  if (!t || !t.certificates) return null;

  const items = t.certificates.items;

  const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="certificates" className="py-24 bg-[#050B14] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Свечение на заднем фоне */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            {t.certificates.title1} <span style={{ color: '#D4AF37' }}>{t.certificates.title2}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            {t.certificates.desc}
          </p>
        </div>

        {/* Слайдер Сертификатов */}
        <div className="relative max-w-md mx-auto">
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center"
              >
                {/* Контейнер сертификата */}
                <div className="relative w-full aspect-[3/4] mb-8 bg-[#ffffff05] rounded-2xl p-6 cursor-crosshair transition-all duration-500 hover:bg-[#ffffff0a]">
                  <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-2xl group-hover:border-[#D4AF37]/50 transition-colors duration-500 shadow-[0_0_0_rgba(212,175,55,0)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]" />
                  <img
                    src={certImages[currentIndex]}
                    alt={items[currentIndex].title}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* Описание под документом */}
                <div className="text-center px-4 bg-[#0a111a] py-6 rounded-2xl border border-white/5 w-full">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors duration-300">
                    {items[currentIndex].title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#D4AF37]/50 mb-4 mx-auto group-hover:bg-[#D4AF37] transition-colors duration-300" />
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {items[currentIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Темные стрелки навигации */}
          <button onClick={prevSlide} className="absolute top-1/3 -left-4 sm:-left-16 transform -translate-y-1/2 bg-[#1a2332] hover:bg-[#253041] text-white w-12 h-12 rounded-full flex items-center justify-center border border-white/10 transition-all z-20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/3 -right-4 sm:-right-16 transform -translate-y-1/2 bg-[#1a2332] hover:bg-[#253041] text-white w-12 h-12 rounded-full flex items-center justify-center border border-white/10 transition-all z-20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>

        {/* Золотые Индикаторы */}
        <div className="flex justify-center gap-3 mt-10">
          {items.map((_: any, index: number) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 h-2.5 bg-[#D4AF37]" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>

      </div>
    </section>
  );
}