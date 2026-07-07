// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

const teamImages = [
  "/team-1.jpg", 
  "/team-2.jpg",
  "/team-3.jpg",
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t } = useLanguage();

  if (!t || !t.team) return null;

  const members = t.team.members;

  const nextSlide = () => setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));

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
    <section id="team" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 tracking-tight uppercase">
            {t.team.title1} <span style={{ color: '#D4AF37' }}>{t.team.title2}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            {t.team.desc}
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px] sm:h-[550px]"
              >
                <div className="absolute inset-0 w-full h-full bg-gray-200 overflow-hidden">
                  <img
                    src={teamImages[currentIndex]}
                    alt={members[currentIndex].name}
                    className="w-full h-full object-cover object-top filter grayscale-[80%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
                    <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-wide drop-shadow-md">
                      {members[currentIndex].name}
                    </h3>
                    <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-4">
                      {members[currentIndex].role}
                    </p>
                    <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {members[currentIndex].bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 -left-6 sm:-left-16 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all z-20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-6 sm:-right-16 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all z-20">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {members.map((member, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 h-2.5 bg-[#D4AF37]" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}