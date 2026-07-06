"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Азиз Рахимов",
    role: "Главный инженер-геодезист",
    bio: "Опыт работы 12 лет. Руководит полевыми работами, специализируется на высокоточной топографической съемке сложных промышленных объектов.",
    image: "/team-1.jpg", 
  },
  {
    id: 2,
    name: "Тимур Исмаилов",
    role: "Старший кадастровый инженер",
    bio: "Опыт работы 8 лет. Эксперт по оформлению технической документации и успешному решению юридических споров по границам участков.",
    image: "/team-2.jpg",
  },
  {
    id: 3,
    name: "Сардор Алиев",
    role: "Специалист по аэрофотосъемке",
    bio: "Опыт работы 6 лет. Профессиональный пилот промышленных дронов, создает высокоточные 3D-модели и ортофотопланы огромных территорий.",
    image: "/team-3.jpg",
  }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Функции переключения слайдов
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  // Обработчики свайпов для телефонов
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    // Сброс значений
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="team" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Команда <span style={{ color: '#D4AF37' }}>экспертов</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            Надежность компании измеряется профессионализмом ее сотрудников. Познакомьтесь с инженерами, которые будут вести ваш проект.
          </p>
        </div>

        {/* Слайдер */}
        <div className="relative max-w-md mx-auto">
          
          {/* Контейнер для карточки со свайпом */}
          <div 
            className="relative overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-white"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Фотография */}
                <div className="relative w-full aspect-[4/5] bg-gray-200">
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>

                {/* Текстовая часть */}
                <div className="p-8 text-center sm:text-left">
                  <h3 className="text-2xl font-black text-blue-900 mb-1 uppercase tracking-wide">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-4">
                    {teamMembers[currentIndex].role}
                  </p>
                  <div className="w-12 h-0.5 bg-[#D4AF37] mb-4 mx-auto sm:mx-0" />
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {teamMembers[currentIndex].bio}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Стрелки навигации (Для ПК) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 sm:-left-16 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all z-10 backdrop-blur-sm hidden sm:flex focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 sm:-right-16 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all z-10 backdrop-blur-sm hidden sm:flex focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
        </div>

        {/* Индикаторы (Точки внизу) */}
        <div className="flex justify-center gap-3 mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                index === currentIndex 
                  ? "w-8 h-2.5 bg-[#D4AF37]" 
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}